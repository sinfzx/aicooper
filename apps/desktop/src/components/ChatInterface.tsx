"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Button, 
  Card, 
  Text, 
  Stack, 
  Group, 
  Select, 
  Textarea, 
  Paper, 
  Loader,
  Center,
  Box,
  Title,
  Badge,
  ActionIcon,
  ScrollArea
} from '@mantine/core';
import { 
  IconRobot, 
  IconSend, 
  IconTrash, 
  IconUser,
  IconSettings,
  IconMessageCircle
} from '@tabler/icons-react';
import { ApiKeyConfig, ChatMessage } from '@my-platform/types';


// Safely import Tauri API with fallback
const getTauriInvoke = async () => {
  try {
    if (typeof window !== 'undefined' && (window as any).__TAURI__) {
      const { invoke } = await import('@tauri-apps/api/core');
      return invoke;
    }
  } catch (error) {
    console.warn('Tauri API not available:', error);
  }
  return null;
};

export const ChatInterface: React.FC = () => {
  const [apiKeys, setApiKeys] = useState<ApiKeyConfig[]>([]);
  const [selectedKey, setSelectedKey] = useState<ApiKeyConfig | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadApiKeys();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const loadApiKeys = async () => {
    try {
      const invoke = await getTauriInvoke();
      if (!invoke) {
        console.warn('Tauri API not available, using mock data');
        // Provide mock data for web development
        const mockKeys: ApiKeyConfig[] = [
          {
            id: 'mock-1',
            name: 'Mock OpenAI',
            provider: 'openai',
            apiKey: 'mock-key',
            baseUrl: undefined,
            model: 'gpt-3.5-turbo',
            isDefault: true,
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          }
        ];
        setApiKeys(mockKeys);
        setSelectedKey(mockKeys[0]);
        return;
      }

      const keys = await invoke<ApiKeyConfig[]>('get_api_keys');
      setApiKeys(keys);

      // 选择默认的 API Key
      const defaultKey = keys.find(k => k.isDefault && k.isActive);
      if (defaultKey) {
        setSelectedKey(defaultKey);
      } else if (keys.length > 0) {
        setSelectedKey(keys[0]);
      }
    } catch (error) {
      console.error('Failed to load API keys:', error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !selectedKey || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const invoke = await getTauriInvoke();
      let response: string;

      if (!invoke) {
        // Mock response for web development
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
        response = `这是一个模拟回复，因为 Tauri API 不可用。您的消息是："${userMessage.content}"`;
      } else {
        // 准备消息历史
        const messageHistory = [...messages, userMessage].map(msg => ({
          role: msg.role,
          content: msg.content,
        }));

        response = await invoke<string>('chat_with_ai', {
          provider: selectedKey.provider,
          apiKey: selectedKey.apiKey,
          model: selectedKey.model || 'gpt-3.5-turbo',
          messages: messageHistory,
          baseUrl: selectedKey.baseUrl || null,
        });
      }

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date().toISOString(),
        model: selectedKey.model,
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat failed:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `抱歉，发生了错误：${error}`,
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    if (confirm('确定要清除聊天记录吗？')) {
      setMessages([]);
    }
  };

  if (apiKeys.length === 0) {
    return (
      <Box p="lg">
        <Card shadow="sm" padding="xl" radius="md" withBorder>
          <Center>
            <Stack align="center" gap="md">
              <IconRobot size={64} color="var(--mantine-color-gray-5)" />
              <Title order={3} ta="center">需要配置 API Key</Title>
              <Text c="dimmed" ta="center" maw={400}>
                请先在 API Key 管理页面添加至少一个 AI 服务提供商的密钥
              </Text>
              <Button leftSection={<IconSettings size={16} />}>
                前往配置
              </Button>
            </Stack>
          </Center>
        </Card>
      </Box>
    );
  }

  return (
    <Stack h="100vh" gap={0}>
      {/* 顶部工具栏 */}
      <Paper p="md" shadow="sm" withBorder>
        <Group justify="space-between">
          <Group>
            <IconMessageCircle size={24} color="var(--mantine-color-blue-6)" />
            <Title order={3}>AI 聊天</Title>
            <Select
              placeholder="选择 API Key"
              value={selectedKey?.id || null}
              onChange={(value) => {
                const key = apiKeys.find(k => k.id === value);
                setSelectedKey(key || null);
              }}
              data={apiKeys.map((key) => ({
                value: key.id,
                label: `${key.name} (${key.provider})`
              }))}
              w={250}
            />
          </Group>
          <ActionIcon
            variant="light"
            color="red"
            onClick={clearChat}
            disabled={messages.length === 0}
          >
            <IconTrash size={16} />
          </ActionIcon>
        </Group>
      </Paper>

      {/* 聊天消息区域 */}
      <ScrollArea style={{ flex: 1 }} p="md" bg="gray.0">
        {messages.length === 0 ? (
          <Center h="100%">
            <Stack align="center" gap="md">
              <IconMessageCircle size={64} color="var(--mantine-color-gray-5)" />
              <Title order={3} ta="center">开始对话</Title>
              <Text c="dimmed" ta="center" maw={400}>
                向 AI 提问任何问题，开始您的智能对话
              </Text>
            </Stack>
          </Center>
        ) : (
          <Stack gap="md">
            {messages.map((message) => (
              <Group
                key={message.id}
                justify={message.role === 'user' ? 'flex-end' : 'flex-start'}
                align="flex-start"
              >
                <Paper
                  p="md"
                  radius="lg"
                  shadow="sm"
                  style={{
                    maxWidth: '70%',
                    backgroundColor: message.role === 'user' 
                      ? 'var(--mantine-color-blue-6)' 
                      : 'white',
                    color: message.role === 'user' ? 'white' : 'inherit'
                  }}
                >
                  <Text style={{ whiteSpace: 'pre-wrap' }}>
                    {message.content}
                  </Text>
                  <Group justify="space-between" mt="xs">
                    <Text 
                      size="xs" 
                      c={message.role === 'user' ? 'blue.1' : 'dimmed'}
                    >
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </Text>
                    {message.model && (
                      <Badge size="xs" variant="light">
                        {message.model}
                      </Badge>
                    )}
                  </Group>
                </Paper>
              </Group>
            ))}
            
            {isLoading && (
              <Group justify="flex-start">
                <Paper p="md" radius="lg" shadow="sm" bg="white">
                  <Group gap="sm">
                    <Loader size="sm" />
                    <Text c="dimmed">AI 正在思考...</Text>
                  </Group>
                </Paper>
              </Group>
            )}
            <div ref={messagesEndRef} />
          </Stack>
        )}
      </ScrollArea>

      {/* 输入区域 */}
      <Paper p="md" shadow="sm" withBorder>
        <Stack gap="xs">
          <Group align="flex-end" gap="sm">
            <Textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.currentTarget.value)}
              onKeyDown={handleKeyDown}
              placeholder="输入您的消息... (Shift+Enter 换行，Enter 发送)"
              autosize
              minRows={1}
              maxRows={4}
              style={{ flex: 1 }}
              radius="md"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || !selectedKey || isLoading}
              loading={isLoading}
              leftSection={<IconSend size={16} />}
            >
              发送
            </Button>
          </Group>
          
          {selectedKey && (
            <Text size="xs" c="dimmed">
              使用 {selectedKey.name} ({selectedKey.model || 'default'})
            </Text>
          )}
        </Stack>
      </Paper>
    </Stack>
  );
};