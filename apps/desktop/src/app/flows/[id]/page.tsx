"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  Stack,
  Group,
  Title,
  Text,
  Button,
  Card,
  Badge,
  ActionIcon,
  Modal,
  TextInput,
  Textarea,
  Select,
  Paper,
  Divider,
  Box,
  Timeline,
  Progress,
  Tabs,
  Alert,
  Stepper,
  Anchor
} from '@mantine/core';
import {
  IconRoute,
  IconEdit,
  IconTrash,
  IconArrowLeft,
  IconShare,
  IconDownload,
  IconClock,
  IconTarget,
  IconTool,
  IconCheckbox,
  IconInfoCircle,
  IconListDetails,
  IconProgress
} from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { PageLayout } from '@/components/layout/PageLayout';

const API_BASE = (
  ((globalThis as any).process?.env?.NEXT_PUBLIC_API_BASE_URL as string | undefined) ||
  'http://localhost:3001'
).replace(/\/$/, '');

// 模拟数据
const mockFlowDesign = {
  id: '1',
  title: '网站开发完整流程',
  description: '从需求分析到上线部署的完整网站开发流程',
  difficulty: 'medium',
  total_time: '4-6周',
  article: `# 网站开发完整流程

## 项目概述
本流程涵盖了从项目启动到最终部署的完整网站开发过程，适用于中小型网站项目。

## 目标成果
- 功能完整的网站
- 良好的用户体验
- 稳定的技术架构
- 完善的文档

## 前置条件
- 基础的前端开发知识
- 了解后端开发概念
- 熟悉版本控制工具`,
  steps: [
    {
      id: '1',
      title: '需求分析与规划',
      description: '明确项目目标、功能需求和技术选型',
      estimated_time: '3-5天',
      difficulty: 'easy',
      order_index: 1,
      completed: true,
      tasks: [
        '收集业务需求',
        '制作原型图',
        '确定技术栈',
        '制定项目计划'
      ]
    },
    {
      id: '2',
      title: '设计阶段',
      description: '创建UI/UX设计和系统架构设计',
      estimated_time: '5-7天',
      difficulty: 'medium',
      order_index: 2,
      completed: true,
      tasks: [
        '制作设计稿',
        '设计系统架构',
        '数据库设计',
        'API接口设计'
      ]
    },
    {
      id: '3',
      title: '前端开发',
      description: '实现用户界面和交互功能',
      estimated_time: '10-14天',
      difficulty: 'medium',
      order_index: 3,
      completed: false,
      tasks: [
        '搭建项目框架',
        '实现页面布局',
        '开发交互功能',
        '响应式适配'
      ]
    },
    {
      id: '4',
      title: '后端开发',
      description: '开发服务器端逻辑和数据库',
      estimated_time: '8-12天',
      difficulty: 'hard',
      order_index: 4,
      completed: false,
      tasks: [
        '搭建服务器框架',
        '实现业务逻辑',
        '数据库开发',
        'API接口开发'
      ]
    },
    {
      id: '5',
      title: '测试与优化',
      description: '进行功能测试、性能优化和bug修复',
      estimated_time: '3-5天',
      difficulty: 'medium',
      order_index: 5,
      completed: false,
      tasks: [
        '功能测试',
        '性能测试',
        'Bug修复',
        '代码优化'
      ]
    },
    {
      id: '6',
      title: '部署上线',
      description: '配置生产环境并部署网站',
      estimated_time: '2-3天',
      difficulty: 'medium',
      order_index: 6,
      completed: false,
      tasks: [
        '服务器配置',
        '域名解析',
        'SSL证书',
        '监控配置'
      ]
    }
  ],
  tools: [
    'React/Vue.js',
    'Node.js',
    'MongoDB/PostgreSQL',
    'Git',
    'Docker',
    'Nginx'
  ],
  prerequisites: [
    'HTML/CSS基础',
    'JavaScript编程',
    '数据库基础',
    'Linux基础命令'
  ],
  outcomes: [
    '完整的网站项目',
    '项目文档',
    '部署脚本',
    '维护指南'
  ],
  is_public: false,
  local_only: true,
  created_at: '2024-01-12T09:00:00Z',
  updated_at: '2024-01-22T16:45:00Z'
};

export default function FlowDesignDetail() {
  const params = useParams();
  const router = useRouter();
  const [flowDesign, setFlowDesign] = useState(mockFlowDesign);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [activeStep, setActiveStep] = useState(2); // 当前进行到第3步
  const [editTasksOpen, setEditTasksOpen] = useState<null | { id: string; tasks: string[] }>(null);

  React.useEffect(() => {
    (async () => {
      try {
        const id = (params as any)?.id;
        if (!id) return;
        const res = await fetch(`${API_BASE}/api/flows/${id}`);
        const data = await res.json();
        if (!res.ok || !data?.success) return;
        const f = data.data;
        setFlowDesign((prev) => ({
          ...prev,
          id: f.id,
          title: f.title,
          description: f.description,
          difficulty: f.difficulty || prev.difficulty,
          total_time: f.totalTime || prev.total_time,
          article: f.article || prev.article,
          is_blocked: !!f.isBlocked,
          steps: Array.isArray(f.steps) ? f.steps.map((s: any, idx: number) => ({
            id: s.id,
            title: s.title,
            description: s.description,
            estimated_time: s.estimatedTime,
            difficulty: s.difficulty || 'medium',
            order_index: s.order ?? idx,
            completed: false,
            tasks: Array.isArray(s.questions) ? s.questions : [],
          })) : prev.steps,
          // 展示用：仅名称
          tools: Array.isArray(f.tools) ? f.tools.map((t: any) => t.name || t) : prev.tools,
          prerequisites: Array.isArray(f.prerequisites) ? f.prerequisites : (() => { try { return JSON.parse(f.prerequisites || '[]') } catch { return prev.prerequisites } })(),
          outcomes: Array.isArray(f.outcomes) ? f.outcomes : (() => { try { return JSON.parse(f.outcomes || '[]') } catch { return prev.outcomes } })(),
          tags: Array.isArray(f.tags) ? f.tags : [],
          is_public: !!f.isPublic,
          local_only: !!f.localOnly,
          created_at: f.createdAt || prev.created_at,
          updated_at: f.updatedAt || prev.updated_at,
        }));
      } catch {}
    })();
  }, [params]);

  const handleBack = () => {
    router.back();
  };

  const handleEdit = () => {
    setEditModalOpen(true);
  };

  const handleDelete = () => {
    if (confirm('确定要删除这个流程设计吗？此操作不可恢复！')) {
      notifications.show({
        title: '删除成功',
        message: '流程设计已删除',
        color: 'green'
      });
      router.push('/');
    }
  };

  const handleShare = () => {
    notifications.show({
      title: '分享功能',
      message: '分享功能正在开发中...',
      color: 'blue'
    });
  };

  const handleExport = () => {
    notifications.show({
      title: '导出功能',
      message: '导出功能正在开发中...',
      color: 'blue'
    });
  };

  const toggleStepCompletion = (stepId: string) => {
    setFlowDesign(prev => ({
      ...prev,
      steps: prev.steps.map(step => 
        step.id === stepId 
          ? { ...step, completed: !step.completed }
          : step
      )
    }));
  };

  const tasksToDisplay = (tasks: string[]) => tasks.map((task, idx) => {
    const isUrl = /^https?:\/\//i.test(task);
    return (
      <Text key={idx} size="xs" c="dimmed">
        {isUrl ? (
          <Anchor href={task} target="_blank">{task}</Anchor>
        ) : (
          <>• {task}</>
        )}
      </Text>
    );
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'green';
      case 'medium': return 'yellow';
      case 'hard': return 'red';
      default: return 'gray';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '简单';
      case 'medium': return '中等';
      case 'hard': return '困难';
      default: return '未知';
    }
  };

  const completedSteps = flowDesign.steps.filter(step => step.completed).length;
  const totalSteps = flowDesign.steps.length;
  const progress = totalSteps > 0 ? (completedSteps / totalSteps) * 100 : 0;

  return (
    <PageLayout
      title={flowDesign.title}
      description={flowDesign.description}
      icon={<IconRoute size={28} color="var(--mantine-color-teal-6)" />}
      breadcrumbs={[
        { label: '首页', href: '/' },
        { label: '流程设计', href: '/' },
        { label: flowDesign.title }
      ]}
      onBack={handleBack}
      actions={
        <Group>
          <Button
            variant="light"
            leftSection={<IconShare size={16} />}
            onClick={handleShare}
          >
            分享
          </Button>
          <Button
            variant="light"
            leftSection={<IconDownload size={16} />}
            onClick={handleExport}
          >
            导出
          </Button>
          <Button
            leftSection={<IconEdit size={16} />}
            onClick={handleEdit}
          >
            编辑
          </Button>
          <Button
            variant="light"
            onClick={() => {
              try {
                if (typeof window !== 'undefined') {
                  const draft = {
                    id: (flowDesign as any).id,
                    title: flowDesign.title,
                    description: flowDesign.description,
                    difficulty: flowDesign.difficulty,
                    article: (flowDesign as any).article || '',
                    totalTime: (flowDesign as any).total_time || '',
                    steps: (flowDesign as any).steps || [],
                    tools: (flowDesign as any).tools || [],
                    tags: (flowDesign as any).tags || [],
                  } as any;
                  window.localStorage.setItem('flowDraft', JSON.stringify(draft));
                  window.location.href = '/flows/new?edit=1';
                }
              } catch {}
            }}
          >
            编辑副本
          </Button>
          <Button
            variant="light"
            onClick={async () => {
              try {
                if (typeof window !== 'undefined' && (window as any).__TAURI__) {
                  // @ts-ignore
                  const { invoke } = await import('@tauri-apps/api/core');
                  const payload = {
                    id: '',
                    title: flowDesign.title,
                    description: flowDesign.description,
                    difficulty: flowDesign.difficulty,
                    total_time: flowDesign.total_time || null,
                    article: flowDesign.article || null,
                    steps: (flowDesign.steps || []).map((s) => ({
                      title: s.title,
                      description: s.description,
                      estimated_time: s.estimated_time,
                      difficulty: s.difficulty,
                      order_index: s.order_index,
                      questions: s.tasks || [],
                    })),
                    tools: (flowDesign.tools || []).map((t) => ({ name: t })),
                    tags: ((flowDesign as any).tags || []).map((t: any) => t.id || t).filter(Boolean),
                    local_only: true,
                    created_at: 0,
                    updated_at: 0,
                  } as any;
                  await invoke('save_local_flow', { flow: payload });
                  notifications.show({ title: '已复制为我的流程', message: '已保存到本地', color: 'green' });
                } else {
                  notifications.show({ title: '仅桌面支持', message: '复制为我的流程需在桌面端使用', color: 'yellow' });
                }
              } catch {
                notifications.show({ title: '操作失败', message: '保存到本地失败', color: 'red' });
              }
            }}
          >
            复制为我的流程（本地）
          </Button>
          <ActionIcon
            variant="light"
            color="red"
            onClick={handleDelete}
          >
            <IconTrash size={16} />
          </ActionIcon>
        </Group>
      }
    >
      <Stack gap="lg">
        {/* 流程信息卡片 */}
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="md">
            <Group justify="space-between">
              <Group>
                <Badge variant="light" color={getDifficultyColor(flowDesign.difficulty)}>
                  {getDifficultyLabel(flowDesign.difficulty)}
                </Badge>
              {(flowDesign as any).is_blocked && (
                <Badge variant="light" color="red">已屏蔽</Badge>
              )}
                <Badge variant="light" color="blue">
                  <Group gap="xs">
                    <IconClock size={12} />
                    {flowDesign.total_time}
                  </Group>
                </Badge>
                <Badge variant="light" color={flowDesign.local_only ? 'orange' : 'green'}>
                  {flowDesign.local_only ? '本地' : '已同步'}
                </Badge>
              </Group>
              <Text size="sm" c="dimmed">
                更新于 {new Date(flowDesign.updated_at).toLocaleDateString()}
              </Text>
            </Group>

            {/* 标签展示与聚合跳转 */}
            {Array.isArray((flowDesign as any).tags) && (flowDesign as any).tags.length > 0 && (
              <Group gap="xs">
                {(flowDesign as any).tags.map((tg: any) => (
                  <Badge
                    key={tg.id}
                    size="xs"
                    variant="light"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.location.href = `/flows?tags=${encodeURIComponent(tg.id)}`
                      }
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {tg.parent ? `${tg.parent.name} / ${tg.name}` : tg.name}
                  </Badge>
                ))}
              </Group>
            )}

            <Box>
              <Group justify="space-between" mb="xs">
                <Text fw={500}>执行进度</Text>
                <Text size="sm" c="dimmed">
                  {completedSteps}/{totalSteps} 已完成
                </Text>
              </Group>
              <Progress value={progress} color="teal" size="lg" radius="md" />
            </Box>
          </Stack>
        </Card>

        {/* 标签页内容 */}
        <Tabs value={activeTab} onChange={(value) => setActiveTab(value || 'overview')}>
          <Tabs.List>
            <Tabs.Tab value="overview" leftSection={<IconInfoCircle size={16} />}>
              概览
            </Tabs.Tab>
            <Tabs.Tab value="steps" leftSection={<IconListDetails size={16} />}>
              执行步骤
            </Tabs.Tab>
            <Tabs.Tab value="progress" leftSection={<IconProgress size={16} />}>
              进度跟踪
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview" pt="md">
            <Stack gap="md">
              {/* 流程描述 */}
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Title order={4} mb="md">流程描述</Title>
                <Paper p="md" bg="gray.0" radius="md">
                  <Text style={{ whiteSpace: 'pre-wrap' }}>
                    {flowDesign.article}
                  </Text>
                </Paper>
              </Card>

              {/* 工具和资源 */}
              <Group align="flex-start" grow>
                <Card shadow="sm" padding="md" radius="md" withBorder>
                  <Group mb="sm">
                    <IconTool size={20} color="var(--mantine-color-blue-6)" />
                    <Title order={5}>所需工具</Title>
                  </Group>
                  <Stack gap="xs">
                    {flowDesign.tools.map((tool, index) => (
                      <Badge key={index} variant="light" size="sm">
                        {tool}
                      </Badge>
                    ))}
                  </Stack>
                </Card>

                <Card shadow="sm" padding="md" radius="md" withBorder>
                  <Group mb="sm">
                    <IconCheckbox size={20} color="var(--mantine-color-green-6)" />
                    <Title order={5}>前置条件</Title>
                  </Group>
                  <Stack gap="xs">
                    {flowDesign.prerequisites.map((prereq, index) => (
                      <Text key={index} size="sm">
                        • {prereq}
                      </Text>
                    ))}
                  </Stack>
                </Card>

                <Card shadow="sm" padding="md" radius="md" withBorder>
                  <Group mb="sm">
                    <IconTarget size={20} color="var(--mantine-color-violet-6)" />
                    <Title order={5}>预期成果</Title>
                  </Group>
                  <Stack gap="xs">
                    {flowDesign.outcomes.map((outcome, index) => (
                      <Text key={index} size="sm">
                        • {outcome}
                      </Text>
                    ))}
                  </Stack>
                </Card>
              </Group>
            </Stack>
          </Tabs.Panel>

          <Tabs.Panel value="steps" pt="md">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Title order={4} mb="md">执行步骤</Title>
              <Timeline>
                {flowDesign.steps.map((step, index) => (
                  <Timeline.Item
                    key={step.id}
                    bullet={
                      <ActionIcon
                        size="sm"
                        variant={step.completed ? 'filled' : 'light'}
                        color={step.completed ? 'green' : 'gray'}
                        onClick={() => toggleStepCompletion(step.id)}
                        style={{ cursor: 'pointer' }}
                      >
                        {step.completed ? '✓' : index + 1}
                      </ActionIcon>
                    }
                    title={
                      <Group justify="space-between">
                        <Text fw={500} c={step.completed ? 'dimmed' : 'inherit'}>
                          {step.title}
                        </Text>
                        <Group gap="xs">
                          <Badge size="xs" variant="light" color={getDifficultyColor(step.difficulty)}>
                            {getDifficultyLabel(step.difficulty)}
                          </Badge>
                          <Badge size="xs" variant="light">
                            {step.estimated_time}
                          </Badge>
                        </Group>
                      </Group>
                    }
                  >
                    <Text size="sm" c="dimmed" mb="sm">
                      {step.description}
                    </Text>
                    
                    <Box mb="sm">
                      <Text size="xs" fw={500} mb="xs">主要任务：</Text>
                      <Stack gap="xs">
                    {tasksToDisplay(step.tasks)}
                      </Stack>
                    </Box>
                <Group justify="flex-end">
                  <Button
                    variant="light"
                    size="xs"
                    onClick={() => setEditTasksOpen({ id: step.id, tasks: step.tasks })}
                  >
                    编辑问题/任务
                  </Button>
                </Group>
                  </Timeline.Item>
                ))}
              </Timeline>
            </Card>
          </Tabs.Panel>

          <Tabs.Panel value="progress" pt="md">
            <Stack gap="md">
              <Alert icon={<IconInfoCircle size={16} />} color="blue" variant="light">
                <Text size="sm">
                  当前进度：{completedSteps}/{totalSteps} 步骤已完成 ({Math.round(progress)}%)
                </Text>
              </Alert>

              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Title order={4} mb="md">进度概览</Title>
                <Stepper active={activeStep} onStepClick={setActiveStep}>
                  {flowDesign.steps.map((step, index) => (
                    <Stepper.Step
                      key={step.id}
                      label={step.title}
                      description={step.estimated_time}
                      completedIcon={<IconCheckbox size={18} />}
                      color={step.completed ? 'green' : 'gray'}
                    >
                      <Box p="md">
                        <Text mb="sm">{step.description}</Text>
                        <Group>
                          <Badge color={getDifficultyColor(step.difficulty)}>
                            {getDifficultyLabel(step.difficulty)}
                          </Badge>
                          <Badge variant="light">
                            {step.estimated_time}
                          </Badge>
                        </Group>
                      </Box>
                    </Stepper.Step>
                  ))}
                </Stepper>
              </Card>
            </Stack>
          </Tabs.Panel>
        </Tabs>

        {/* 编辑步骤任务/问题 */}
        <Modal
          opened={!!editTasksOpen}
          onClose={() => setEditTasksOpen(null)}
          title="编辑问题/任务"
        >
          {editTasksOpen && (
            <Stack>
              <Textarea
                minRows={8}
                value={(editTasksOpen.tasks || []).join('\n')}
                onChange={(e) => setEditTasksOpen((prev) => prev ? { ...prev, tasks: e.currentTarget.value.split('\n').map(s => s.trim()).filter(Boolean) } : prev)}
              />
              <Group justify="flex-end">
                <Button variant="light" onClick={() => setEditTasksOpen(null)}>取消</Button>
                <Button onClick={() => {
                  const payload = editTasksOpen;
                  setFlowDesign((prev) => ({
                    ...prev,
                    steps: prev.steps.map(s => s.id === payload.id ? { ...s, tasks: payload.tasks } : s)
                  }));
                  setEditTasksOpen(null);
                }}>保存</Button>
              </Group>
            </Stack>
          )}
        </Modal>

        {/* 编辑模态框 */}
        <Modal
          opened={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          title="编辑流程设计"
          size="lg"
        >
          <Stack gap="md">
            <TextInput
              label="流程标题"
              value={flowDesign.title}
              onChange={(e) => setFlowDesign(prev => ({ ...prev, title: e.currentTarget.value }))}
            />
            
            <Textarea
              label="流程描述"
              value={flowDesign.description}
              onChange={(e) => setFlowDesign(prev => ({ ...prev, description: e.currentTarget.value }))}
              minRows={3}
            />
            
            <Select
              label="难度等级"
              value={flowDesign.difficulty}
              onChange={(value) => setFlowDesign(prev => ({ ...prev, difficulty: value || 'medium' }))}
              data={[
                { value: 'easy', label: '简单' },
                { value: 'medium', label: '中等' },
                { value: 'hard', label: '困难' }
              ]}
            />
            
            <TextInput
              label="预计时间"
              value={flowDesign.total_time}
              onChange={(e) => setFlowDesign(prev => ({ ...prev, total_time: e.currentTarget.value }))}
            />
            
            <Group justify="flex-end" mt="md">
              <Button variant="light" onClick={() => setEditModalOpen(false)}>
                取消
              </Button>
              <Button onClick={() => {
                setEditModalOpen(false);
                notifications.show({
                  title: '保存成功',
                  message: '流程设计已更新',
                  color: 'green'
                });
              }}>
                保存
              </Button>
            </Group>
          </Stack>
        </Modal>
      </Stack>
    </PageLayout>
  );
}