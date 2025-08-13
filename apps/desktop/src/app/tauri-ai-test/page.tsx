"use client";

import React, { useState, useEffect } from 'react';
import {
  Stack,
  Group,
  Title,
  Text,
  Button,
  Card,
  Badge,
  TextInput,
  Textarea,
  Select,
  Divider,
  Alert,
  Code,
  Tabs,
  Box,
  Loader,
  ActionIcon,
  Modal
} from '@mantine/core';
import {
  IconRobot,
  IconDatabase,
  IconKey,
  IconBrain,
  IconTemplate,
  IconRoute,
  IconRefresh,
  IconPlus,
  IconTrash,
  IconTestPipe
} from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { dbApi } from '@/lib/tauri-api';

export default function TauriAITestPage() {
  const [loading, setLoading] = useState(false);
  const [apiKeys, setApiKeys] = useState<any[]>([]);
  const [knowledgeFrameworks, setKnowledgeFrameworks] = useState<any[]>([]);
  const [flowDesigns, setFlowDesigns] = useState<any[]>([]);
  const [promptTemplates, setPromptTemplates] = useState<any[]>([]);
  
  // API Key 表单
  const [apiKeyForm, setApiKeyForm] = useState({
    name: '',
    provider: 'openai',
    apiKey: '',
    baseUrl: '',
    model: '',
    isDefault: false
  });
  
  // AI 测试表单
  const [aiTestForm, setAiTestForm] = useState({
    prompt: '你好，请介绍一下你自己',
    systemPrompt: '你是一个友好的AI助手',
    model: '',
    maxTokens: 1000,
    temperature: 0.7
  });
  
  // 知识框架表单
  const [frameworkForm, setFrameworkForm] = useState({
    title: '',
    description: '',
    domain: ''
  });
  
  // 流程设计表单
  const [flowForm, setFlowForm] = useState({
    title: '',
    description: '',
    goals: '',
    difficulty: 'medium'
  });
  
  // 提示模板表单
  const [templateForm, setTemplateForm] = useState({
    title: '',
    description: '',
    category: '',
    purpose: '',
    targetUser: ''
  });
  
  const [aiResponse, setAiResponse] = useState<any>(null);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [createType, setCreateType] = useState<'apikey' | 'framework' | 'flow' | 'template'>('apikey');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [apiKeysResult, frameworksResult, flowsResult, templatesResult] = await Promise.all([
        dbApi.getApiKeys(),
        dbApi.getKnowledgeFrameworks(),
        dbApi.getFlowDesigns(),
        dbApi.getPromptTemplates()
      ]);

      if (apiKeysResult.success) setApiKeys(apiKeysResult.data || []);
      if (frameworksResult.success) setKnowledgeFrameworks(frameworksResult.data || []);
      if (flowsResult.success) setFlowDesigns(flowsResult.data || []);
      if (templatesResult.success) setPromptTemplates(templatesResult.data || []);
    } catch (error) {
      console.error('Failed to load data:', error);
      notifications.show({
        title: '加载失败',
        message: '无法加载数据',
        color: 'red'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCreateApiKey = async () => {
    if (!apiKeyForm.name || !apiKeyForm.provider || !apiKeyForm.apiKey) {
      notifications.show({
        title: '表单错误',
        message: '请填写必填字段',
        color: 'red'
      });
      return;
    }

    const result = await dbApi.createApiKey(
      apiKeyForm.name,
      apiKeyForm.provider,
      apiKeyForm.apiKey,
      apiKeyForm.baseUrl || undefined,
      apiKeyForm.model || undefined,
      apiKeyForm.isDefault
    );

    if (result.success) {
      notifications.show({
        title: '创建成功',
        message: 'API Key 已创建',
        color: 'green'
      });
      setApiKeyForm({
        name: '',
        provider: 'openai',
        apiKey: '',
        baseUrl: '',
        model: '',
        isDefault: false
      });
      setCreateModalOpen(false);
      loadData();
    } else {
      notifications.show({
        title: '创建失败',
        message: result.error || '未知错误',
        color: 'red'
      });
    }
  };

  const handleTestAI = async () => {
    if (!aiTestForm.prompt) {
      notifications.show({
        title: '表单错误',
        message: '请输入提示词',
        color: 'red'
      });
      return;
    }

    setLoading(true);
    const result = await dbApi.callAi(
      aiTestForm.prompt,
      aiTestForm.systemPrompt || undefined,
      aiTestForm.model || undefined,
      aiTestForm.maxTokens,
      aiTestForm.temperature
    );

    if (result.success) {
      setAiResponse(result.data);
      notifications.show({
        title: 'AI 调用成功',
        message: '已获得AI响应',
        color: 'green'
      });
    } else {
      notifications.show({
        title: 'AI 调用失败',
        message: result.error || '未知错误',
        color: 'red'
      });
    }
    setLoading(false);
  };

  const handleCreateWithAI = async (type: 'framework' | 'flow' | 'template') => {
    setLoading(true);
    let result;

    try {
      switch (type) {
        case 'framework':
          if (!frameworkForm.title || !frameworkForm.description || !frameworkForm.domain) {
            throw new Error('请填写所有必填字段');
          }
          result = await dbApi.createKnowledgeFrameworkWithAi(
            frameworkForm.title,
            frameworkForm.description,
            frameworkForm.domain
          );
          break;
        case 'flow':
          if (!flowForm.title || !flowForm.description || !flowForm.goals) {
            throw new Error('请填写所有必填字段');
          }
          result = await dbApi.createFlowDesignWithAi(
            flowForm.title,
            flowForm.description,
            flowForm.goals,
            flowForm.difficulty
          );
          break;
        case 'template':
          if (!templateForm.title || !templateForm.description || !templateForm.category) {
            throw new Error('请填写所有必填字段');
          }
          result = await dbApi.createPromptTemplateWithAi(
            templateForm.title,
            templateForm.description,
            templateForm.category,
            templateForm.purpose,
            templateForm.targetUser
          );
          break;
      }

      if (result?.success) {
        notifications.show({
          title: 'AI 创建成功',
          message: `${type === 'framework' ? '知识框架' : type === 'flow' ? '流程设计' : '提示模板'}已创建`,
          color: 'green'
        });
        setCreateModalOpen(false);
        loadData();
      } else {
        throw new Error(result?.error || '创建失败');
      }
    } catch (error) {
      notifications.show({
        title: 'AI 创建失败',
        message: error instanceof Error ? error.message : '未知错误',
        color: 'red'
      });
    } finally {
      setLoading(false);
    }
  };

  const renderCreateModal = () => {
    switch (createType) {
      case 'apikey':
        return (
          <Stack gap="md">
            <TextInput
              label="名称"
              placeholder="我的 OpenAI Key"
              value={apiKeyForm.name}
              onChange={(e) => setApiKeyForm({ ...apiKeyForm, name: e.target.value })}
              required
            />
            <Select
              label="提供商"
              value={apiKeyForm.provider}
              onChange={(value) => setApiKeyForm({ ...apiKeyForm, provider: value || 'openai' })}
              data={[
                { value: 'openai', label: 'OpenAI' },
                { value: 'anthropic', label: 'Anthropic' },
              ]}
              required
            />
            <TextInput
              label="API Key"
              placeholder="sk-..."
              value={apiKeyForm.apiKey}
              onChange={(e) => setApiKeyForm({ ...apiKeyForm, apiKey: e.target.value })}
              required
            />
            <TextInput
              label="Base URL (可选)"
              placeholder="https://api.openai.com/v1"
              value={apiKeyForm.baseUrl}
              onChange={(e) => setApiKeyForm({ ...apiKeyForm, baseUrl: e.target.value })}
            />
            <TextInput
              label="默认模型 (可选)"
              placeholder="gpt-3.5-turbo"
              value={apiKeyForm.model}
              onChange={(e) => setApiKeyForm({ ...apiKeyForm, model: e.target.value })}
            />
            <Button onClick={handleCreateApiKey} loading={loading}>
              创建 API Key
            </Button>
          </Stack>
        );
      case 'framework':
        return (
          <Stack gap="md">
            <TextInput
              label="标题"
              placeholder="React 开发框架"
              value={frameworkForm.title}
              onChange={(e) => setFrameworkForm({ ...frameworkForm, title: e.target.value })}
              required
            />
            <Textarea
              label="描述"
              placeholder="一个完整的React开发学习框架"
              value={frameworkForm.description}
              onChange={(e) => setFrameworkForm({ ...frameworkForm, description: e.target.value })}
              required
            />
            <TextInput
              label="领域"
              placeholder="前端开发"
              value={frameworkForm.domain}
              onChange={(e) => setFrameworkForm({ ...frameworkForm, domain: e.target.value })}
              required
            />
            <Button onClick={() => handleCreateWithAI('framework')} loading={loading}>
              AI 创建知识框架
            </Button>
          </Stack>
        );
      case 'flow':
        return (
          <Stack gap="md">
            <TextInput
              label="标题"
              placeholder="部署React应用"
              value={flowForm.title}
              onChange={(e) => setFlowForm({ ...flowForm, title: e.target.value })}
              required
            />
            <Textarea
              label="描述"
              placeholder="详细的React应用部署流程"
              value={flowForm.description}
              onChange={(e) => setFlowForm({ ...flowForm, description: e.target.value })}
              required
            />
            <Textarea
              label="目标"
              placeholder="成功部署一个React应用到生产环境"
              value={flowForm.goals}
              onChange={(e) => setFlowForm({ ...flowForm, goals: e.target.value })}
              required
            />
            <Select
              label="难度"
              value={flowForm.difficulty}
              onChange={(value) => setFlowForm({ ...flowForm, difficulty: value || 'medium' })}
              data={[
                { value: 'easy', label: '简单' },
                { value: 'medium', label: '中等' },
                { value: 'hard', label: '困难' },
              ]}
            />
            <Button onClick={() => handleCreateWithAI('flow')} loading={loading}>
              AI 创建流程设计
            </Button>
          </Stack>
        );
      case 'template':
        return (
          <Stack gap="md">
            <TextInput
              label="标题"
              placeholder="代码审查助手"
              value={templateForm.title}
              onChange={(e) => setTemplateForm({ ...templateForm, title: e.target.value })}
              required
            />
            <Textarea
              label="描述"
              placeholder="帮助进行代码审查的AI助手"
              value={templateForm.description}
              onChange={(e) => setTemplateForm({ ...templateForm, description: e.target.value })}
              required
            />
            <TextInput
              label="分类"
              placeholder="开发工具"
              value={templateForm.category}
              onChange={(e) => setTemplateForm({ ...templateForm, category: e.target.value })}
              required
            />
            <Textarea
              label="用途"
              placeholder="审查代码质量，提供改进建议"
              value={templateForm.purpose}
              onChange={(e) => setTemplateForm({ ...templateForm, purpose: e.target.value })}
            />
            <TextInput
              label="目标用户"
              placeholder="软件开发者"
              value={templateForm.targetUser}
              onChange={(e) => setTemplateForm({ ...templateForm, targetUser: e.target.value })}
            />
            <Button onClick={() => handleCreateWithAI('template')} loading={loading}>
              AI 创建提示模板
            </Button>
          </Stack>
        );
    }
  };

  return (
    <Stack gap="lg" p="md">
      <Group justify="space-between">
        <Group>
          <IconRobot size={32} color="var(--mantine-color-blue-6)" />
          <Box>
            <Title order={2}>Tauri AI 服务测试</Title>
            <Text c="dimmed" size="sm">测试本地数据库和AI服务功能</Text>
          </Box>
        </Group>
        
        <Group>
          <ActionIcon variant="light" onClick={loadData} loading={loading}>
            <IconRefresh size={16} />
          </ActionIcon>
          <Button
            leftSection={<IconPlus size={16} />}
            onClick={() => setCreateModalOpen(true)}
          >
            创建
          </Button>
        </Group>
      </Group>

      <Tabs defaultValue="ai-test">
        <Tabs.List>
          <Tabs.Tab value="ai-test" leftSection={<IconRobot size={16} />}>
            AI 测试
          </Tabs.Tab>
          <Tabs.Tab value="api-keys" leftSection={<IconKey size={16} />}>
            API Keys ({apiKeys.length})
          </Tabs.Tab>
          <Tabs.Tab value="frameworks" leftSection={<IconBrain size={16} />}>
            知识框架 ({knowledgeFrameworks.length})
          </Tabs.Tab>
          <Tabs.Tab value="flows" leftSection={<IconRoute size={16} />}>
            流程设计 ({flowDesigns.length})
          </Tabs.Tab>
          <Tabs.Tab value="templates" leftSection={<IconTemplate size={16} />}>
            提示模板 ({promptTemplates.length})
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="ai-test" pt="md">
          <Stack gap="md">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Stack gap="md">
                <Title order={4}>AI 服务测试</Title>
                <Textarea
                  label="提示词"
                  placeholder="输入你的问题..."
                  value={aiTestForm.prompt}
                  onChange={(e) => setAiTestForm({ ...aiTestForm, prompt: e.target.value })}
                  minRows={3}
                />
                <Textarea
                  label="系统提示词 (可选)"
                  placeholder="你是一个..."
                  value={aiTestForm.systemPrompt}
                  onChange={(e) => setAiTestForm({ ...aiTestForm, systemPrompt: e.target.value })}
                  minRows={2}
                />
                <Group>
                  <TextInput
                    label="模型 (可选)"
                    placeholder="gpt-3.5-turbo"
                    value={aiTestForm.model}
                    onChange={(e) => setAiTestForm({ ...aiTestForm, model: e.target.value })}
                    style={{ flex: 1 }}
                  />
                  <TextInput
                    label="最大Token"
                    type="number"
                    value={aiTestForm.maxTokens}
                    onChange={(e) => setAiTestForm({ ...aiTestForm, maxTokens: parseInt(e.target.value) || 1000 })}
                    style={{ width: 120 }}
                  />
                  <TextInput
                    label="温度"
                    type="number"
                    step="0.1"
                    min="0"
                    max="2"
                    value={aiTestForm.temperature}
                    onChange={(e) => setAiTestForm({ ...aiTestForm, temperature: parseFloat(e.target.value) || 0.7 })}
                    style={{ width: 100 }}
                  />
                </Group>
                <Button
                  leftSection={<IconTestPipe size={16} />}
                  onClick={handleTestAI}
                  loading={loading}
                >
                  测试 AI
                </Button>
              </Stack>
            </Card>

            {aiResponse && (
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Stack gap="md">
                  <Group justify="space-between">
                    <Title order={4}>AI 响应</Title>
                    <Group gap="xs">
                      {aiResponse.provider && (
                        <Badge variant="light" color="blue">
                          {aiResponse.provider}
                        </Badge>
                      )}
                      {aiResponse.model && (
                        <Badge variant="outline">
                          {aiResponse.model}
                        </Badge>
                      )}
                      {aiResponse.tokens && (
                        <Badge variant="light" color="green">
                          {aiResponse.tokens} tokens
                        </Badge>
                      )}
                    </Group>
                  </Group>
                  
                  {aiResponse.success ? (
                    <Box>
                      <Text size="sm" c="dimmed" mb="xs">响应内容：</Text>
                      <Code block>{aiResponse.data}</Code>
                    </Box>
                  ) : (
                    <Alert color="red" title="错误">
                      {aiResponse.error}
                    </Alert>
                  )}
                </Stack>
              </Card>
            )}
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="api-keys" pt="md">
          <Stack gap="md">
            {apiKeys.length === 0 ? (
              <Card shadow="sm" padding="xl" radius="md" withBorder>
                <Stack align="center" gap="md">
                  <IconKey size={64} color="var(--mantine-color-gray-5)" />
                  <Title order={4} ta="center">还没有 API Keys</Title>
                  <Text c="dimmed" ta="center">
                    添加你的第一个 API Key 来开始使用 AI 服务
                  </Text>
                  <Button
                    leftSection={<IconPlus size={16} />}
                    onClick={() => {
                      setCreateType('apikey');
                      setCreateModalOpen(true);
                    }}
                  >
                    添加 API Key
                  </Button>
                </Stack>
              </Card>
            ) : (
              apiKeys.map((key) => (
                <Card key={key.id} shadow="sm" padding="lg" radius="md" withBorder>
                  <Group justify="space-between">
                    <Stack gap="xs">
                      <Group gap="xs">
                        <Text fw={500}>{key.name}</Text>
                        <Badge variant="light" color={key.provider === 'openai' ? 'green' : 'blue'}>
                          {key.provider}
                        </Badge>
                        {key.is_default && (
                          <Badge variant="filled" color="orange" size="sm">
                            默认
                          </Badge>
                        )}
                        {key.is_active ? (
                          <Badge variant="light" color="green" size="sm">
                            活跃
                          </Badge>
                        ) : (
                          <Badge variant="light" color="gray" size="sm">
                            禁用
                          </Badge>
                        )}
                      </Group>
                      <Text size="sm" c="dimmed">
                        {key.model && `模型: ${key.model} • `}
                        创建于: {new Date(key.created_at).toLocaleString()}
                      </Text>
                    </Stack>
                    <ActionIcon variant="light" color="red" size="sm">
                      <IconTrash size={14} />
                    </ActionIcon>
                  </Group>
                </Card>
              ))
            )}
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="frameworks" pt="md">
          <Stack gap="md">
            {knowledgeFrameworks.length === 0 ? (
              <Card shadow="sm" padding="xl" radius="md" withBorder>
                <Stack align="center" gap="md">
                  <IconBrain size={64} color="var(--mantine-color-gray-5)" />
                  <Title order={4} ta="center">还没有知识框架</Title>
                  <Text c="dimmed" ta="center">
                    使用 AI 创建你的第一个知识框架
                  </Text>
                  <Button
                    leftSection={<IconRobot size={16} />}
                    onClick={() => {
                      setCreateType('framework');
                      setCreateModalOpen(true);
                    }}
                  >
                    AI 创建框架
                  </Button>
                </Stack>
              </Card>
            ) : (
              knowledgeFrameworks.map((framework) => (
                <Card key={framework.id} shadow="sm" padding="lg" radius="md" withBorder>
                  <Stack gap="xs">
                    <Group justify="space-between">
                      <Text fw={500}>{framework.title}</Text>
                      <Badge variant="light">{framework.domain}</Badge>
                    </Group>
                    <Text size="sm" c="dimmed">{framework.description}</Text>
                    <Text size="xs" c="dimmed">
                      创建于: {new Date(framework.created_at).toLocaleString()}
                    </Text>
                  </Stack>
                </Card>
              ))
            )}
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="flows" pt="md">
          <Stack gap="md">
            {flowDesigns.length === 0 ? (
              <Card shadow="sm" padding="xl" radius="md" withBorder>
                <Stack align="center" gap="md">
                  <IconRoute size={64} color="var(--mantine-color-gray-5)" />
                  <Title order={4} ta="center">还没有流程设计</Title>
                  <Text c="dimmed" ta="center">
                    使用 AI 创建你的第一个流程设计
                  </Text>
                  <Button
                    leftSection={<IconRobot size={16} />}
                    onClick={() => {
                      setCreateType('flow');
                      setCreateModalOpen(true);
                    }}
                  >
                    AI 创建流程
                  </Button>
                </Stack>
              </Card>
            ) : (
              flowDesigns.map((flow) => (
                <Card key={flow.id} shadow="sm" padding="lg" radius="md" withBorder>
                  <Stack gap="xs">
                    <Group justify="space-between">
                      <Text fw={500}>{flow.title}</Text>
                      <Badge variant="light" color={
                        flow.difficulty === 'easy' ? 'green' : 
                        flow.difficulty === 'medium' ? 'yellow' : 'red'
                      }>
                        {flow.difficulty}
                      </Badge>
                    </Group>
                    <Text size="sm" c="dimmed">{flow.description}</Text>
                    <Text size="xs" c="dimmed">
                      创建于: {new Date(flow.created_at).toLocaleString()}
                    </Text>
                  </Stack>
                </Card>
              ))
            )}
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="templates" pt="md">
          <Stack gap="md">
            {promptTemplates.length === 0 ? (
              <Card shadow="sm" padding="xl" radius="md" withBorder>
                <Stack align="center" gap="md">
                  <IconTemplate size={64} color="var(--mantine-color-gray-5)" />
                  <Title order={4} ta="center">还没有提示模板</Title>
                  <Text c="dimmed" ta="center">
                    使用 AI 创建你的第一个提示模板
                  </Text>
                  <Button
                    leftSection={<IconRobot size={16} />}
                    onClick={() => {
                      setCreateType('template');
                      setCreateModalOpen(true);
                    }}
                  >
                    AI 创建模板
                  </Button>
                </Stack>
              </Card>
            ) : (
              promptTemplates.map((template) => (
                <Card key={template.id} shadow="sm" padding="lg" radius="md" withBorder>
                  <Stack gap="xs">
                    <Group justify="space-between">
                      <Text fw={500}>{template.title}</Text>
                      <Badge variant="light">{template.category}</Badge>
                    </Group>
                    <Text size="sm" c="dimmed">{template.description}</Text>
                    <Group gap="xs">
                      <Text size="xs" c="dimmed">
                        使用次数: {template.usage_count}
                      </Text>
                      <Text size="xs" c="dimmed">
                        评分: {template.rating.toFixed(1)}
                      </Text>
                    </Group>
                    <Text size="xs" c="dimmed">
                      创建于: {new Date(template.created_at).toLocaleString()}
                    </Text>
                  </Stack>
                </Card>
              ))
            )}
          </Stack>
        </Tabs.Panel>
      </Tabs>

      <Modal
        opened={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        title={
          createType === 'apikey' ? '创建 API Key' :
          createType === 'framework' ? 'AI 创建知识框架' :
          createType === 'flow' ? 'AI 创建流程设计' :
          'AI 创建提示模板'
        }
        size="md"
      >
        {renderCreateModal()}
      </Modal>
    </Stack>
  );
}