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
  ActionIcon,
  Modal,
  TextInput,
  Textarea,
  Select,
  MultiSelect,
  Grid,
  Paper,
  Loader,
  Center,
  Divider,
  Alert,
  Box,
  Timeline,
  Anchor,
  Switch
} from '@mantine/core';
import {
  IconRoute,
  IconPlus,
  IconEdit,
  IconTrash,
  IconEye,
  IconUpload,
  IconRobot,
  IconClock,
  IconTarget,
  IconTool,
  IconExternalLink
} from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { FlowDesign, Tag } from '@my-platform/types';
import { useFlowDesign } from '../hooks/useFlowDesign';
import { useTags } from '../hooks/useTags';
// 暂时注释掉PageLayout导入，直接使用Stack布局
// import { PageLayout } from '../../../apps/desktop/src/components/layout/PageLayout';

interface FlowDesignManagerProps {
  onFlowSelect?: (flow: FlowDesign) => void;
}

export const FlowDesignManager: React.FC<FlowDesignManagerProps> = ({
  onFlowSelect
}) => {
  const {
    flows,
    loading,
    error,
    createFlow,
    deleteFlow,
    syncFlow,
    downloadFlow,
  } = useFlowDesign();

  const { tags: allTags } = useTags();
  const [tagFilter, setTagFilter] = useState<string[]>([]);
  const [onlyLocal, setOnlyLocal] = useState<boolean>(false);
  const [onlyBestPractice, setOnlyBestPractice] = useState<boolean>(false);

  const [selectedFlow, setSelectedFlow] = useState<FlowDesign | null>(null);
  // 创建改为二级页面路由
  const [viewModalOpen, setViewModalOpen] = useState(false);
  
  // 表单状态
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    difficulty: 'medium' as 'easy' | 'medium' | 'hard',

  });
  
  // AI 创建状态
  const [aiFormData, setAiFormData] = useState({
    title: '',
    description: '',
    goals: '',
    domain: '',
    difficulty: 'medium' as 'easy' | 'medium' | 'hard',
    referenceUrls: ''
  });
  const [aiGenerating, setAiGenerating] = useState(false);

  const API_BASE = (
    ((globalThis as any).process?.env?.NEXT_PUBLIC_API_BASE_URL as string | undefined) ||
    'http://localhost:3001'
  ).replace(/\/$/, '');

  const confirmSyncIfConflict = async (flow: any): Promise<boolean> => {
    try {
      if (!flow.serverId) return true;
      const res = await fetch(`${API_BASE}/api/flows/${flow.serverId}`);
      const data = await res.json();
      if (!res.ok || !data?.success) return true;
      const remoteUpdated = new Date(data.data.updatedAt || 0).getTime();
      const localUpdated = new Date(flow.updatedAt || flow.updated_at || 0).getTime();
      if (remoteUpdated > localUpdated) {
        return window.confirm('服务器版本较新，继续上传将覆盖服务器最新内容。是否继续上传？');
      }
      return true;
    } catch {
      return true;
    }
  };

  const confirmDownloadIfConflict = async (flow: any): Promise<boolean> => {
    try {
      if (!flow.serverId) return true;
      const res = await fetch(`${API_BASE}/api/flows/${flow.serverId}`);
      const data = await res.json();
      if (!res.ok || !data?.success) return true;
      const remoteUpdated = new Date(data.data.updatedAt || 0).getTime();
      const localUpdated = new Date(flow.updatedAt || flow.updated_at || 0).getTime();
      if (localUpdated > remoteUpdated) {
        return window.confirm('本地版本较新，继续下载将覆盖本地内容。是否继续下载？');
      }
      return true;
    } catch {
      return true;
    }
  };

  const handleCreateFlow = async () => {
    try {
      await createFlow(formData);
      setFormData({
        title: '',
        description: '',
        difficulty: 'medium',

      });
      
      notifications.show({
        title: '创建成功',
        message: '流程设计已创建',
        color: 'green'
      });
    } catch (error) {
      notifications.show({
        title: '创建失败',
        message: '无法创建流程设计',
        color: 'red'
      });
    }
  };

  const handleAICreate = async () => {
    try {
      setAiGenerating(true);
      // TODO: 实现AI创建流程的逻辑
      await createFlow({
        title: aiFormData.title,
        description: aiFormData.description,
        difficulty: aiFormData.difficulty,
        article: `# ${aiFormData.title}\n\n${aiFormData.description}`,
        steps: [],
        tools: [],
        prerequisites: [],
        outcomes: []
      });
      setAiFormData({
        title: '',
        description: '',
        goals: '',
        domain: '',
        difficulty: 'medium',
        referenceUrls: ''
      });
      
      notifications.show({
        title: 'AI 创建成功',
        message: '流程设计已通过 AI 辅助创建',
        color: 'green'
      });
    } catch (error) {
      notifications.show({
        title: 'AI 创建失败',
        message: error instanceof Error ? error.message : '无法通过 AI 创建流程设计',
        color: 'red'
      });
    } finally {
      setAiGenerating(false);
    }
  };

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

  if (loading) {
    return (
      <Center h={400}>
        <Stack align="center">
          <Loader size="lg" />
          <Text c="dimmed">加载流程设计...</Text>
        </Stack>
      </Center>
    );
  }

  return (
    <Stack gap="lg" p="md">
      {error && (
        <Alert color="red" variant="light">{error}</Alert>
      )}
      {/* 头部操作栏 */}
      <Group justify="space-between">
        <Group>
          <IconRoute size={28} color="var(--mantine-color-green-6)" />
          <Box>
            <Title order={2}>流程设计</Title>
            <Text c="dimmed" size="sm">创建和管理执行流程</Text>
          </Box>
        </Group>
        
        <Group>
          <Button
            leftSection={<IconRobot size={16} />}
            variant="gradient"
            gradient={{ from: 'green', to: 'teal' }}
            onClick={() => { if (typeof window !== 'undefined') window.location.href = '/flows/new?mode=ai' }}
          >
            AI 创建
          </Button>
          <Button
            leftSection={<IconPlus size={16} />}
            onClick={() => { if (typeof window !== 'undefined') window.location.href = '/flows/new' }}
          >
            手动创建
          </Button>
        </Group>
      </Group>

      {/* 过滤条件 */}
      <Group>
        <MultiSelect
          placeholder="按标签筛选"
          data={(allTags || []).map((t: any) => ({ value: t.id, label: t.parent ? `${t.parent.name} / ${t.name}` : t.name }))}
          value={tagFilter}
          onChange={setTagFilter}
          searchable
          clearable
          style={{ minWidth: 260 }}
        />
        <Switch label="仅显示本地" checked={onlyLocal} onChange={(e) => setOnlyLocal(e.currentTarget.checked)} />
        <Switch label="仅最佳实践" checked={onlyBestPractice} onChange={(e) => setOnlyBestPractice(e.currentTarget.checked)} />
      </Group>

      {/* 流程列表 */}
      {flows.length === 0 ? (
        <Card shadow="sm" padding="xl" radius="md" withBorder>
          <Center>
            <Stack align="center" gap="md">
              <IconRoute size={64} color="var(--mantine-color-gray-5)" />
              <Title order={3} ta="center">还没有流程设计</Title>
              <Text c="dimmed" ta="center" maw={400}>
                创建您的第一个流程设计来规划和执行复杂任务
              </Text>
              <Group>
                <Button
                  leftSection={<IconRobot size={16} />}
                  variant="gradient"
                  gradient={{ from: 'green', to: 'teal' }}
                  onClick={() => { if (typeof window !== 'undefined') window.location.href = '/flows/new?mode=ai' }}
                >
                  AI 辅助创建
                </Button>
                <Button
                  leftSection={<IconPlus size={16} />}
                  variant="light"
                  onClick={() => { if (typeof window !== 'undefined') window.location.href = '/flows/new' }}
                >
                  手动创建
                </Button>
              </Group>
            </Stack>
          </Center>
        </Card>
      ) : (
        <Grid>
          {flows
            .filter((flow) => {
              if (tagFilter.length === 0) return true;
              const tags = (flow as any).tags || [];
              if (!Array.isArray(tags) || tags.length === 0) return false;
              const matchesTag = tagFilter.some(
                (id) =>
                  tags.includes(id) ||
                  tags.includes((allTags || []).find((t: any) => t.id === id)?.name)
              );
              const matchesLocal = !onlyLocal || !!(flow as any).localOnly;
              const bestPractice = Array.isArray(tags) && (tags.includes('best-practice') || tags.includes('最佳实践'));
              const matchesBest = !onlyBestPractice || bestPractice;
              return matchesTag && matchesLocal && matchesBest;
            })
            .map((flow) => (
            <Grid.Col key={flow.id} span={{ base: 12, md: 6, lg: 4 }}>
              <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                <Stack gap="sm" h="100%">
                  <Group justify="space-between">
                    <Badge
                      variant="light"
                      color={flow.localOnly ? 'orange' : 'green'}
                      size="sm"
                    >
                      {flow.localOnly ? '本地' : '已同步'}
                    </Badge>
                    {(flow as any).isBlocked && (
                      <Badge variant="light" color="red" size="sm">已屏蔽</Badge>
                    )}
                    <Badge
                      variant="light"
                      color={getDifficultyColor(flow.difficulty)}
                      size="sm"
                    >
                      {getDifficultyLabel(flow.difficulty)}
                    </Badge>
                  </Group>

                  <Box style={{ flex: 1 }}>
                    <Title order={4} mb="xs">{flow.title}</Title>
                    <Text size="sm" c="dimmed" mb="sm" lineClamp={2}>
                      {flow.description}
                    </Text>
                    
                    <Group gap="xs" mb="sm">
                      {flow.totalTime && (
                        <Group gap="xs">
                          <IconClock size={14} />
                          <Text size="xs" c="dimmed">{flow.totalTime}</Text>
                        </Group>
                      )}
                      {flow.steps && (
                        <Group gap="xs">
                          <IconTarget size={14} />
                          <Text size="xs" c="dimmed">{flow.steps.length} 步骤</Text>
                        </Group>
                      )}
                      {flow.tools && (
                        <Group gap="xs">
                          <IconTool size={14} />
                          <Text size="xs" c="dimmed">{flow.tools.length} 工具</Text>
                        </Group>
                      )}
                    </Group>
                  </Box>

                  <Divider />

                  <Group justify="space-between">
                    <Group gap="xs">
                      <ActionIcon
                        variant="light"
                        size="sm"
                        onClick={() => {
                          // 导航到详情页面
                          if (typeof window !== 'undefined') {
                            window.location.href = `/flows/${flow.id}`;
                          }
                        }}
                      >
                        <IconEye size={14} />
                      </ActionIcon>
                      <ActionIcon
                        variant="light"
                        size="sm"
                        onClick={() => {
                          try {
                            if (typeof window !== 'undefined') {
                              const draft = {
                                id: (flow as any).id,
                                title: flow.title,
                                description: flow.description,
                                difficulty: flow.difficulty,
                                article: (flow as any).article || '',
                                totalTime: (flow as any).totalTime || '',
                                steps: (flow as any).steps || [],
                                tools: (flow as any).tools || [],
                                tags: (flow as any).tags || [],
                              } as any;
                              window.localStorage.setItem('flowDraft', JSON.stringify(draft));
                              window.location.href = '/flows/new?edit=1';
                            }
                          } catch {}
                        }}
                      >
                        <IconEdit size={14} />
                      </ActionIcon>
                      {flow.localOnly && (
                        <ActionIcon
                          variant="light"
                          color="blue"
                          size="sm"
                          onClick={async () => {
                            if (await confirmSyncIfConflict(flow)) {
                              await syncFlow(flow.id);
                            }
                          }}
                        >
                          <IconUpload size={14} />
                        </ActionIcon>
                      )}
                      {!flow.localOnly && (
                        <ActionIcon
                          variant="light"
                          color="teal"
                          size="sm"
                          onClick={async () => {
                            if (await confirmDownloadIfConflict(flow)) {
                              await downloadFlow((flow as any).serverId || flow.id);
                            }
                          }}
                        >
                          <IconExternalLink size={14} />
                        </ActionIcon>
                      )}
                    </Group>
                    
                    <ActionIcon
                      variant="light"
                      color="red"
                      size="sm"
                      onClick={() => deleteFlow(flow.id)}
                    >
                      <IconTrash size={14} />
                    </ActionIcon>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      )}

      {/* 创建与 AI 创建改为二级页面 /flows/new */}

      {/* 查看详情模态框 */}
      <Modal
        opened={viewModalOpen}
        onClose={() => setViewModalOpen(false)}
        title={selectedFlow?.title || '流程详情'}
        size="xl"
      >
        {selectedFlow && (
          <Stack gap="md">
            <Group>
              <Badge color={getDifficultyColor(selectedFlow.difficulty)}>
                {getDifficultyLabel(selectedFlow.difficulty)}
              </Badge>
              {selectedFlow.totalTime && (
                <Badge variant="light">
                  <Group gap="xs">
                    <IconClock size={12} />
                    {selectedFlow.totalTime}
                  </Group>
                </Badge>
              )}
            </Group>
            
            <Text>{selectedFlow.description}</Text>
            
            {selectedFlow.article && (
              <Paper p="md" withBorder>
                <Text size="sm" style={{ whiteSpace: 'pre-wrap' }}>
                  {selectedFlow.article}
                </Text>
              </Paper>
            )}
            
            {selectedFlow.steps && selectedFlow.steps.length > 0 && (
              <Box>
                <Title order={4} mb="md">流程步骤</Title>
                <Timeline>
                  {selectedFlow.steps.map((step, index) => (
                    <Timeline.Item key={index} title={step.title}>
                      <Text size="sm" c="dimmed">{step.description}</Text>
                      {step.estimatedTime && (
                        <Text size="xs" c="dimmed" mt="xs">
                          预计时间: {step.estimatedTime}
                        </Text>
                      )}
                    </Timeline.Item>
                  ))}
                </Timeline>
              </Box>
            )}
          </Stack>
        )}
      </Modal>
    </Stack>
  );
};