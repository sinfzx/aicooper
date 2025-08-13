"use client";

import React, { useState, useEffect } from 'react';
import { 
  Button, 
  Card, 
  Text, 
  Stack, 
  Group, 
  TextInput, 
  PasswordInput,
  Select, 
  Badge, 
  Paper, 
  Loader,
  Center,
  Box,
  Title,
  ActionIcon,
  Grid,
  Divider,
  Alert
} from '@mantine/core';
import { 
  IconKey, 
  IconPlus, 
  IconTrash, 
  IconCheck, 
  IconX,
  IconRobot,
  IconBrain,
  IconSettings,
  IconTestPipe
} from '@tabler/icons-react';
import { ApiKeyConfig, LLMProvider } from '@my-platform/types';

// 图标映射函数
const getProviderIcon = (iconName: string, size = 24) => {
  switch (iconName) {
    case 'robot':
      return <IconRobot size={size} />;
    case 'brain':
      return <IconBrain size={size} />;
    default:
      return <IconKey size={size} />;
  }
};


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

const LLM_PROVIDERS: LLMProvider[] = [
  {
    id: 'openai',
    name: 'OpenAI',
    description: '文本/工具调用（热门）',
    icon: 'robot',
    models: [
      { id: 'gpt-4', name: 'GPT-4', contextLength: 8192 },
      { id: 'gpt-4-turbo', name: 'GPT-4 Turbo', contextLength: 128000 },
      { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', contextLength: 4096 },
    ],
    requiredFields: [
      { key: 'apiKey', label: 'API Key', type: 'password', required: true, placeholder: 'sk-...' },
      { key: 'baseUrl', label: 'Base URL (可选)', type: 'url', required: false, placeholder: 'https://api.openai.com/v1' },
    ],
    capabilities: ['text'],
    serviceType: 'llm',
  },
  {
    id: 'anthropic',
    name: 'Anthropic',
    description: '文本（Claude 系列）',
    icon: 'brain',
    models: [
      { id: 'claude-3-opus-20240229', name: 'Claude 3 Opus', contextLength: 200000 },
      { id: 'claude-3-sonnet-20240229', name: 'Claude 3 Sonnet', contextLength: 200000 },
      { id: 'claude-3-haiku-20240307', name: 'Claude 3 Haiku', contextLength: 200000 },
    ],
    requiredFields: [
      { key: 'apiKey', label: 'API Key', type: 'password', required: true, placeholder: 'sk-ant-...' },
    ],
    capabilities: ['text'],
    serviceType: 'llm',
  },
  {
    id: 'google',
    name: 'Google (Gemini)',
    description: '文本/文生图/文生视频',
    icon: 'robot',
    models: [
      { id: 'gemini-1.5-pro', name: 'Gemini 1.5 Pro', contextLength: 1000000 },
      { id: 'gemini-1.5-flash', name: 'Gemini 1.5 Flash', contextLength: 1000000 },
    ],
    requiredFields: [
      { key: 'apiKey', label: 'API Key', type: 'password', required: true, placeholder: 'AIza...' },
      { key: 'baseUrl', label: 'Base URL (可选)', type: 'url', required: false, placeholder: 'https://generativelanguage.googleapis.com/v1beta' },
    ],
    capabilities: ['text', 'image', 'video'],
    serviceType: 'llm',
  },
  {
    id: 'openrouter',
    name: 'OpenRouter',
    description: '聚合文生文路由（含多家模型）',
    icon: 'robot',
    models: [
      { id: 'openrouter/auto', name: 'Auto (route)', contextLength: 128000 },
    ],
    requiredFields: [
      { key: 'apiKey', label: 'API Key', type: 'password', required: true, placeholder: 'sk-or-v1-...' },
      { key: 'baseUrl', label: 'Base URL (可选)', type: 'url', required: false, placeholder: 'https://openrouter.ai/api/v1' },
    ],
    capabilities: ['text'],
    serviceType: 'llm',
  },
  {
    id: 'stability',
    name: 'Stability AI',
    description: '文生图（Stable Image）',
    icon: 'robot',
    models: [
      { id: 'stable-image-core', name: 'Stable Image Core', contextLength: 0 },
    ],
    requiredFields: [
      { key: 'apiKey', label: 'API Key', type: 'password', required: true, placeholder: 'sk-stable-...' },
      { key: 'baseUrl', label: 'Base URL (可选)', type: 'url', required: false, placeholder: 'https://api.stability.ai/v2' },
    ],
    capabilities: ['image'],
    serviceType: 'image',
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: '文本转语音（TTS）',
    icon: 'robot',
    models: [
      { id: 'eleven_monolingual_v1', name: 'Monolingual v1', contextLength: 0 },
    ],
    requiredFields: [
      { key: 'apiKey', label: 'API Key', type: 'password', required: true, placeholder: 'eleven-...' },
      { key: 'baseUrl', label: 'Base URL (可选)', type: 'url', required: false, placeholder: 'https://api.elevenlabs.io/v1' },
    ],
    capabilities: ['audio'],
    serviceType: 'tts',
  },
  {
    id: 'qwen',
    name: '阿里 通义千问 (Qwen)',
    description: '文本/文生图（热门国产）',
    icon: 'robot',
    models: [
      { id: 'qwen-plus', name: 'Qwen Plus', contextLength: 200000 },
      { id: 'qwen2.5-7b-instruct', name: 'Qwen2.5 7B Instruct', contextLength: 32000 },
    ],
    requiredFields: [
      { key: 'apiKey', label: 'API Key', type: 'password', required: true, placeholder: 'sk-...' },
      { key: 'baseUrl', label: 'Base URL (可选)', type: 'url', required: false, placeholder: 'https://dashscope.aliyuncs.com/compatible-mode/v1' },
    ],
    capabilities: ['text', 'image'],
    serviceType: 'llm',
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    description: '性价比高的文本生成',
    icon: 'robot',
    models: [
      { id: 'deepseek-chat', name: 'DeepSeek Chat', contextLength: 32768 },
    ],
    requiredFields: [
      { key: 'apiKey', label: 'API Key', type: 'password', required: true, placeholder: 'sk-...' },
      { key: 'baseUrl', label: 'Base URL (可选)', type: 'url', required: false, placeholder: 'https://api.deepseek.com' },
    ],
    capabilities: ['text'],
    serviceType: 'llm',
  },
  {
    id: 'zhipu',
    name: '智谱 GLM',
    description: '文本/代码（国产）',
    icon: 'robot',
    models: [
      { id: 'glm-4', name: 'GLM-4', contextLength: 128000 },
    ],
    requiredFields: [
      { key: 'apiKey', label: 'API Key', type: 'password', required: true, placeholder: 'sk-...' },
      { key: 'baseUrl', label: 'Base URL (可选)', type: 'url', required: false, placeholder: 'https://open.bigmodel.cn/api/paas/v4' },
    ],
    capabilities: ['text'],
    serviceType: 'llm',
  },
  {
    id: 'moonshot',
    name: 'Moonshot (Kimi)',
    description: '长文本处理（国产）',
    icon: 'robot',
    models: [
      { id: 'moonshot-v1-8k', name: 'moonshot v1 8k', contextLength: 8192 },
    ],
    requiredFields: [
      { key: 'apiKey', label: 'API Key', type: 'password', required: true, placeholder: 'sk-...' },
      { key: 'baseUrl', label: 'Base URL (可选)', type: 'url', required: false, placeholder: 'https://api.moonshot.cn/v1' },
    ],
    capabilities: ['text'],
    serviceType: 'llm',
  },
  {
    id: 'baidu',
    name: '百度文心',
    description: '文本/文生图（国产）',
    icon: 'robot',
    models: [
      { id: 'ernie-speed', name: 'ERNIE Speed', contextLength: 32768 },
    ],
    requiredFields: [
      { key: 'apiKey', label: 'API Key', type: 'password', required: true, placeholder: 'access_token' },
      { key: 'baseUrl', label: 'Base URL (可选)', type: 'url', required: false, placeholder: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1' },
    ],
    capabilities: ['text', 'image'],
    serviceType: 'llm',
  },
  {
    id: 'pollinations',
    name: 'Pollinations (兜底)',
    description: '多模态兜底（文/图/音）',
    icon: 'robot',
    models: [
      { id: 'openai', name: 'Text (openai proxy)', contextLength: 0 },
      { id: 'image', name: 'Image', contextLength: 0 },
      { id: 'audio', name: 'Audio', contextLength: 0 },
    ],
    requiredFields: [],
    capabilities: ['text', 'image', 'audio'],
    serviceType: 'llm',
  },
];

export const ApiKeyManager: React.FC = () => {
  const [apiKeys, setApiKeys] = useState<ApiKeyConfig[]>([]);
  const [isAddingKey, setIsAddingKey] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<LLMProvider | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [testResults, setTestResults] = useState<Record<string, boolean>>({});
  
  useEffect(() => {
    loadApiKeys();
  }, []);

  const loadApiKeys = async () => {
    try {
      const invoke = await getTauriInvoke();
      if (!invoke) {
        console.warn('Tauri API not available');
        return;
      }
      const keys = await invoke<ApiKeyConfig[]>('get_api_keys');
      setApiKeys(keys);
    } catch (error) {
      console.error('Failed to load API keys:', error);
    }
  };

  const handleAddKey = () => {
    setIsAddingKey(true);
    setSelectedProvider(null);
    setFormData({});
  };

  const handleProviderSelect = (provider: LLMProvider) => {
    setSelectedProvider(provider);
    setFormData({});
  };

  const handleInputChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleTestKey = async () => {
    if (!selectedProvider || !formData.apiKey) return;

    setIsLoading(true);
    try {
      const invoke = await getTauriInvoke();
      if (!invoke) {
        alert('Tauri API 不可用，无法测试 API Key');
        return;
      }

      const isValid = await invoke<boolean>('test_api_key', {
        provider: selectedProvider.id,
        apiKey: formData.apiKey,
        baseUrl: formData.baseUrl || null,
      });

      setTestResults(prev => ({ ...prev, [selectedProvider.id]: isValid }));

      if (isValid) {
        alert('API Key 测试成功！');
      } else {
        alert('API Key 测试失败，请检查密钥是否正确。');
      }
    } catch (error) {
      console.error('API Key test failed:', error);
      alert(`测试失败: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveKey = async () => {
    if (!selectedProvider || !formData.apiKey) return;

    const invoke = await getTauriInvoke();
    if (!invoke) {
      alert('Tauri API 不可用，无法保存 API Key');
      return;
    }

    const newKey: ApiKeyConfig = {
      id: Date.now().toString(),
      name: formData.name || `${selectedProvider.name} Key`,
      provider: selectedProvider.id as ApiKeyConfig['provider'],
      apiKey: formData.apiKey,
      baseUrl: formData.baseUrl || undefined,
      model: formData.model || selectedProvider.models[0]?.id,
      isDefault: apiKeys.filter(k => k.provider === selectedProvider.id).length === 0,
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    try {
      await invoke('save_api_key', { apiKey: newKey });
      await loadApiKeys();
      setIsAddingKey(false);
      setSelectedProvider(null);
      setFormData({});
    } catch (error) {
      console.error('Failed to save API key:', error);
      alert(`保存失败: ${error}`);
    }
  };

  const handleDeleteKey = async (keyId: string) => {
    if (!confirm('确定要删除这个 API Key 吗？')) return;

    const invoke = await getTauriInvoke();
    if (!invoke) {
      alert('Tauri API 不可用，无法删除 API Key');
      return;
    }

    try {
      await invoke('delete_api_key', { keyId });
      await loadApiKeys();
    } catch (error) {
      console.error('Failed to delete API key:', error);
      alert(`删除失败: ${error}`);
    }
  };

  const handleToggleDefault = async (key: ApiKeyConfig) => {
    const invoke = await getTauriInvoke();
    if (!invoke) {
      alert('Tauri API 不可用，无法更新 API Key');
      return;
    }

    const updatedKey = { ...key, isDefault: !key.isDefault, updatedAt: new Date().toISOString() };

    try {
      await invoke('save_api_key', { apiKey: updatedKey });
      await loadApiKeys();
    } catch (error) {
      console.error('Failed to update API key:', error);
    }
  };



  return (
    <Stack gap="lg" p="md">
      <Group justify="space-between">
        <Group>
          <IconKey size={28} color="var(--mantine-color-blue-6)" />
          <Box>
            <Title order={2}>API Key 管理</Title>
            <Text c="dimmed">管理您的 AI 服务提供商 API 密钥</Text>
          </Box>
        </Group>
        <Button 
          leftSection={<IconPlus size={16} />}
          onClick={handleAddKey}
        >
          添加 API Key
        </Button>
      </Group>

      {/* 现有 API Keys */}
      <Grid>
        {apiKeys.map((key) => {
          const provider = LLM_PROVIDERS.find(p => p.id === key.provider);
          return (
            <Grid.Col key={key.id} span={{ base: 12, md: 6, lg: 4 }}>
              <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                <Group justify="space-between" mb="md">
                  <Group>
                    {provider?.icon || <IconKey size={24} />}
                    <Box>
                      <Text fw={500}>{key.name}</Text>
                      <Text size="sm" c="dimmed">{provider?.name}</Text>
                    </Box>
                  </Group>
                  {key.isDefault && (
                    <Badge variant="light" color="blue" size="sm">
                      默认
                    </Badge>
                  )}
                </Group>

                <Stack gap="xs" mb="md">
                  <Group justify="space-between">
                    <Text size="sm" c="dimmed">API Key:</Text>
                    <Text size="sm" ff="monospace">
                      {key.apiKey.substring(0, 8)}...{key.apiKey.slice(-4)}
                    </Text>
                  </Group>
                  {key.model && (
                    <Group justify="space-between">
                      <Text size="sm" c="dimmed">模型:</Text>
                      <Text size="sm">{key.model}</Text>
                    </Group>
                  )}
                  <Group justify="space-between">
                    <Text size="sm" c="dimmed">状态:</Text>
                    <Badge 
                      variant="light" 
                      color={key.isActive ? 'green' : 'gray'}
                      size="sm"
                    >
                      {key.isActive ? '活跃' : '禁用'}
                    </Badge>
                  </Group>
                </Stack>

                <Group gap="xs">
                  <Button
                    variant="light"
                    size="xs"
                    onClick={() => handleToggleDefault(key)}
                    style={{ flex: 1 }}
                  >
                    {key.isDefault ? '取消默认' : '设为默认'}
                  </Button>
                  <ActionIcon
                    variant="light"
                    color="red"
                    onClick={() => handleDeleteKey(key.id)}
                  >
                    <IconTrash size={16} />
                  </ActionIcon>
                </Group>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>

      {/* 添加新 API Key 对话框 */}
      {isAddingKey && (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={3} mb="md">添加新的 API Key</Title>
          
          {!selectedProvider ? (
            <Stack gap="md">
              <Text c="dimmed">选择 AI 服务提供商：</Text>
              <Grid>
                {LLM_PROVIDERS.map((provider) => (
                  <Grid.Col key={provider.id} span={{ base: 12, sm: 6 }}>
                    <Paper
                      p="md"
                      withBorder
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleProviderSelect(provider)}
                      className="hover:shadow-md transition-shadow"
                    >
                      <Group>
                        {getProviderIcon(provider.icon)}
                        <Box>
                          <Text fw={500}>{provider.name}</Text>
                          <Text size="sm" c="dimmed">{provider.description}</Text>
                        </Box>
                      </Group>
                    </Paper>
                  </Grid.Col>
                ))}
              </Grid>
            </Stack>
          ) : (
            <Stack gap="md">
              <Group mb="md">
                {getProviderIcon(selectedProvider.icon)}
                <Box>
                  <Text fw={500}>{selectedProvider.name}</Text>
                  <Text size="sm" c="dimmed">{selectedProvider.description}</Text>
                </Box>
              </Group>

              <TextInput
                label="配置名称"
                placeholder={`${selectedProvider.name} 配置`}
                value={formData.name || ''}
                onChange={(e) => handleInputChange('name', e.currentTarget.value)}
              />

              {selectedProvider.requiredFields.map((field) => (
                <Box key={field.key}>
                  {field.type === 'password' ? (
                    <PasswordInput
                      label={
                        <Group gap="xs">
                          <Text>{field.label}</Text>
                          {field.required && <Text c="red">*</Text>}
                        </Group>
                      }
                      placeholder={field.placeholder}
                      value={formData[field.key] || ''}
                      onChange={(e) => handleInputChange(field.key, e.currentTarget.value)}
                      required={field.required}
                    />
                  ) : (
                    <TextInput
                      label={
                        <Group gap="xs">
                          <Text>{field.label}</Text>
                          {field.required && <Text c="red">*</Text>}
                        </Group>
                      }
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.key] || ''}
                      onChange={(e) => handleInputChange(field.key, e.currentTarget.value)}
                      required={field.required}
                    />
                  )}
                  {field.description && (
                    <Text size="xs" c="dimmed" mt="xs">{field.description}</Text>
                  )}
                </Box>
              ))}

              <Select
                label="默认模型"
                value={formData.model || selectedProvider.models[0]?.id || ''}
                onChange={(value) => handleInputChange('model', value || '')}
                data={selectedProvider.models.map((model) => ({
                  value: model.id,
                  label: model.name
                }))}
              />

              <Group justify="flex-end" mt="md">
                <Button
                  variant="subtle"
                  onClick={() => {
                    setIsAddingKey(false);
                    setSelectedProvider(null);
                    setFormData({});
                  }}
                >
                  取消
                </Button>
                <Button
                  variant="light"
                  leftSection={<IconTestPipe size={16} />}
                  onClick={handleTestKey}
                  disabled={!formData.apiKey || isLoading}
                  loading={isLoading}
                >
                  测试连接
                </Button>
                <Button
                  onClick={handleSaveKey}
                  disabled={!formData.apiKey}
                >
                  保存
                </Button>
              </Group>
            </Stack>
          )}
        </Card>
      )}

      {apiKeys.length === 0 && !isAddingKey && (
        <Card shadow="sm" padding="xl" radius="md" withBorder>
          <Center>
            <Stack align="center" gap="md">
              <IconKey size={64} color="var(--mantine-color-gray-5)" />
              <Title order={3} ta="center">还没有 API Key</Title>
              <Text c="dimmed" ta="center" maw={400}>
                添加您的第一个 AI 服务提供商 API Key 来开始使用
              </Text>
              <Button 
                leftSection={<IconPlus size={16} />}
                onClick={handleAddKey}
              >
                添加 API Key
              </Button>
            </Stack>
          </Center>
        </Card>
      )}
    </Stack>
  );
};