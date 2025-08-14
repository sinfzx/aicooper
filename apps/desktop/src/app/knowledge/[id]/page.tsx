"use client";

import React, { useState, useEffect } from 'react';
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
  Grid,
  Box,
  Divider,
  Timeline,
  Paper,
  Breadcrumbs,
  Anchor
} from '@mantine/core';
import {
  IconBrain,
  IconEdit,
  IconTrash,
  IconArrowLeft,
  IconPlus,
  IconEye,
  IconHome,
  IconShare,
  IconDownload
} from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { PageLayout } from '@/components/layout/PageLayout';

const API_BASE = (
  ((globalThis as any).process?.env?.NEXT_PUBLIC_API_BASE_URL as string | undefined) ||
  'http://localhost:3001'
).replace(/\/$/, '');

// 模拟数据
const mockFramework = {
  id: '1',
  title: '前端开发完整学习路径',
  description: '从零基础到高级前端开发工程师的完整学习框架',
  domain: '软件开发',
  version: 1,
  is_built_in: false,
  is_public: false,
  is_blocked: false,
  local_only: true,
  created_at: '2024-01-15T10:00:00Z',
  updated_at: '2024-01-20T15:30:00Z',
  nodes: [
    {
      id: '1',
      title: 'HTML 基础',
      description: '学习 HTML 标签、语义化、表单等基础知识',
      level: 1,
      order_index: 1,
      questions: ['什么是语义化HTML？', 'HTML5有哪些新特性？', '如何创建响应式表单？'],
      urls: ['https://developer.mozilla.org/zh-CN/docs/Web/HTML'],
      completed: true
    },
    {
      id: '2',
      title: 'CSS 样式设计',
      description: '掌握CSS选择器、布局、动画等核心技能',
      level: 1,
      order_index: 2,
      questions: ['CSS盒模型是什么？', '如何实现Flexbox布局？', 'CSS Grid与Flexbox的区别？'],
      urls: ['https://developer.mozilla.org/zh-CN/docs/Web/CSS'],
      completed: true
    },
    {
      id: '3',
      title: 'JavaScript 编程',
      description: '学习JavaScript语法、DOM操作、异步编程',
      level: 1,
      order_index: 3,
      questions: ['什么是闭包？', '如何处理异步操作？', 'ES6有哪些新特性？'],
      urls: ['https://developer.mozilla.org/zh-CN/docs/Web/JavaScript'],
      completed: false
    },
    {
      id: '4',
      title: 'React 框架',
      description: '掌握React组件、状态管理、生命周期',
      level: 2,
      order_index: 1,
      questions: ['什么是虚拟DOM？', '如何使用Hooks？', '状态管理最佳实践？'],
      urls: ['https://react.dev/'],
      completed: false
    }
  ]
};

export default function KnowledgeFrameworkDetail() {
  const params = useParams();
  const router = useRouter();
  const [framework, setFramework] = useState(mockFramework);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addNodeModalOpen, setAddNodeModalOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState<any>(null);

  React.useEffect(() => {
    (async () => {
      try {
        const id = (params as any)?.id;
        if (!id) return;
        const res = await fetch(`${API_BASE}/api/knowledge-frameworks/${id}`);
        const data = await res.json();
        if (!res.ok || !data?.success) return;
        const fw = data.data;
        setFramework((prev) => ({
          ...prev,
          id: fw.id,
          title: fw.title,
          description: fw.description,
          domain: fw.domain || prev.domain,
          version: fw.version || prev.version,
          is_built_in: !!fw.isBuiltIn,
          is_public: !!fw.isPublic,
          is_blocked: !!fw.isBlocked,
          local_only: !!fw.localOnly,
          created_at: fw.createdAt || prev.created_at,
          updated_at: fw.updatedAt || prev.updated_at,
          // 仅用于展示，节点结构后续从专用节点接口获取
          nodes: prev.nodes,
          tags: Array.isArray(fw.tags) ? fw.tags : [],
        }) as any);
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
    if (confirm('确定要删除这个知识框架吗？此操作不可恢复！')) {
      notifications.show({
        title: '删除成功',
        message: '知识框架已删除',
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

  const toggleNodeCompletion = (nodeId: string) => {
    setFramework(prev => ({
      ...prev,
      nodes: prev.nodes.map(node => 
        node.id === nodeId 
          ? { ...node, completed: !node.completed }
          : node
      )
    }));
  };

  const completedNodes = framework.nodes.filter(node => node.completed).length;
  const totalNodes = framework.nodes.length;
  const progress = totalNodes > 0 ? (completedNodes / totalNodes) * 100 : 0;

  return (
    <PageLayout
      title={framework.title}
      description={framework.description}
      icon={<IconBrain size={28} color="var(--mantine-color-violet-6)" />}
      breadcrumbs={[
        { label: '首页', href: '/' },
        { label: '知识框架', href: '/' },
        { label: framework.title }
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
        {/* 框架信息卡片 */}
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="md">
            <Group justify="space-between">
              <Group>
                <Badge variant="light" color="violet">
                  {framework.domain}
                </Badge>
                {(framework as any).is_blocked && (
                  <Badge variant="light" color="red">已屏蔽</Badge>
                )}
                <Badge variant="light" color={framework.local_only ? 'orange' : 'green'}>
                  {framework.local_only ? '本地' : '已同步'}
                </Badge>
                <Badge variant="light" color="blue">
                  v{framework.version}
                </Badge>
              </Group>
              <Text size="sm" c="dimmed">
                更新于 {new Date(framework.updated_at).toLocaleDateString()}
              </Text>
            </Group>

            <Box>
              <Group justify="space-between" mb="xs">
                <Text fw={500}>学习进度</Text>
                <Text size="sm" c="dimmed">
                  {completedNodes}/{totalNodes} 已完成
                </Text>
              </Group>
              <div style={{ 
                width: '100%', 
                height: '8px', 
                backgroundColor: 'var(--mantine-color-gray-2)', 
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${progress}%`,
                  height: '100%',
                  backgroundColor: 'var(--mantine-color-violet-6)',
                  transition: 'width 0.3s ease'
                }} />
              </div>
            </Box>
            {/* 标签展示与聚合跳转 */}
            {Array.isArray((framework as any).tags) && (framework as any).tags.length > 0 && (
              <Group gap="xs">
                {(framework as any).tags.map((tg: any, idx: number) => {
                  const id = tg?.id || tg;
                  const label = tg?.parent ? `${tg.parent.name} / ${tg.name}` : (tg?.name || tg);
                  return (
                    <Badge
                      key={idx}
                      size="xs"
                      variant="light"
                      onClick={() => { if (typeof window !== 'undefined') window.location.href = `/knowledge?tags=${encodeURIComponent(id)}`; }}
                      style={{ cursor: 'pointer' }}
                    >
                      {label}
                    </Badge>
                  );
                })}
              </Group>
            )}
          </Stack>
        </Card>

        {/* 知识节点 */}
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group justify="space-between" mb="md">
            <Title order={3}>知识节点</Title>
            <Button
              size="sm"
              leftSection={<IconPlus size={16} />}
              onClick={() => setAddNodeModalOpen(true)}
            >
              添加节点
            </Button>
          </Group>

          <Timeline>
            {framework.nodes.map((node, index) => (
              <Timeline.Item
                key={node.id}
                bullet={
                  <ActionIcon
                    size="sm"
                    variant={node.completed ? 'filled' : 'light'}
                    color={node.completed ? 'green' : 'gray'}
                    onClick={() => toggleNodeCompletion(node.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {node.completed ? '✓' : index + 1}
                  </ActionIcon>
                }
                title={
                  <Group justify="space-between">
                    <Text fw={500} c={node.completed ? 'dimmed' : 'inherit'}>
                      {node.title}
                    </Text>
                    <Group gap="xs">
                      <Badge size="xs" variant="light">
                        Level {node.level}
                      </Badge>
                      <ActionIcon
                        size="sm"
                        variant="light"
                        onClick={() => setSelectedNode(node)}
                      >
                        <IconEye size={12} />
                      </ActionIcon>
                    </Group>
                  </Group>
                }
              >
                <Text size="sm" c="dimmed" mb="sm">
                  {node.description}
                </Text>
                
                {node.questions.length > 0 && (
                  <Box mb="sm">
                    <Text size="xs" fw={500} mb="xs">关键问题：</Text>
                    <Stack gap="xs">
                      {node.questions.slice(0, 2).map((question, idx) => (
                        <Text key={idx} size="xs" c="dimmed">
                          • {question}
                        </Text>
                      ))}
                      {node.questions.length > 2 && (
                        <Text size="xs" c="dimmed">
                          ... 还有 {node.questions.length - 2} 个问题
                        </Text>
                      )}
                    </Stack>
                  </Box>
                )}

                {node.urls.length > 0 && (
                  <Group gap="xs">
                    <Text size="xs" fw={500}>参考资料：</Text>
                    {node.urls.slice(0, 1).map((url, idx) => (
                      <Anchor key={idx} href={url} target="_blank" size="xs">
                        查看资源
                      </Anchor>
                    ))}
                  </Group>
                )}
              </Timeline.Item>
            ))}
          </Timeline>
        </Card>

        {/* 节点详情模态框 */}
        <Modal
          opened={!!selectedNode}
          onClose={() => setSelectedNode(null)}
          title={selectedNode?.title || '节点详情'}
          size="lg"
        >
          {selectedNode && (
            <Stack gap="md">
              <Group>
                <Badge color="violet">Level {selectedNode.level}</Badge>
                <Badge color={selectedNode.completed ? 'green' : 'gray'}>
                  {selectedNode.completed ? '已完成' : '未完成'}
                </Badge>
              </Group>
              
              <Text>{selectedNode.description}</Text>
              
              <Box>
                <Text fw={500} mb="sm">关键问题：</Text>
                <Stack gap="xs">
                  {selectedNode.questions.map((question: string, idx: number) => (
                    <Paper key={idx} p="sm" bg="gray.0">
                      <Text size="sm">{question}</Text>
                    </Paper>
                  ))}
                </Stack>
              </Box>
              
              {selectedNode.urls.length > 0 && (
                <Box>
                  <Text fw={500} mb="sm">参考资料：</Text>
                  <Stack gap="xs">
                    {selectedNode.urls.map((url: string, idx: number) => (
                      <Anchor key={idx} href={url} target="_blank">
                        {url}
                      </Anchor>
                    ))}
                  </Stack>
                </Box>
              )}
              
              <Group justify="flex-end" mt="md">
                <Button
                  variant={selectedNode.completed ? 'light' : 'filled'}
                  color={selectedNode.completed ? 'gray' : 'green'}
                  onClick={() => {
                    toggleNodeCompletion(selectedNode.id);
                    setSelectedNode({ ...selectedNode, completed: !selectedNode.completed });
                  }}
                >
                  {selectedNode.completed ? '标记为未完成' : '标记为完成'}
                </Button>
              </Group>
            </Stack>
          )}
        </Modal>

        {/* 编辑框架模态框 */}
        <Modal
          opened={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          title="编辑知识框架"
          size="lg"
        >
          <Stack gap="md">
            <TextInput
              label="框架标题"
              value={framework.title}
              onChange={(e) => setFramework(prev => ({ ...prev, title: e.currentTarget.value }))}
            />
            
            <Textarea
              label="框架描述"
              value={framework.description}
              onChange={(e) => setFramework(prev => ({ ...prev, description: e.currentTarget.value }))}
              minRows={3}
            />
            
            <TextInput
              label="领域"
              value={framework.domain}
              onChange={(e) => setFramework(prev => ({ ...prev, domain: e.currentTarget.value }))}
            />
            
            <Group justify="flex-end" mt="md">
              <Button variant="light" onClick={() => setEditModalOpen(false)}>
                取消
              </Button>
              <Button onClick={() => {
                setEditModalOpen(false);
                notifications.show({
                  title: '保存成功',
                  message: '知识框架已更新',
                  color: 'green'
                });
              }}>
                保存
              </Button>
            </Group>
          </Stack>
        </Modal>

        {/* 复制为我的框架（本地） */}
        <Group justify="flex-end">
          <Button
            variant="light"
            onClick={async () => {
              try {
                if (typeof window !== 'undefined' && (window as any).__TAURI__) {
                  // @ts-ignore
                  const { invoke } = await import('@tauri-apps/api/core');
                  const payload = {
                    id: '',
                    name: framework.title,
                    title: framework.title,
                    description: framework.description,
                    domain: framework.domain,
                    version: framework.version,
                    is_public: false,
                    local_only: true,
                    updated_at: Date.now(),
                    created_at: Date.now(),
                    tags: ((framework as any).tags || []).map((t: any) => t.id || t).filter(Boolean),
                    root_nodes: [],
                  } as any;
                  await invoke('save_knowledge_framework', { framework: payload });
                  notifications.show({ title: '已复制为我的框架', message: '已保存到本地', color: 'green' });
                } else {
                  notifications.show({ title: '仅桌面支持', message: '复制为我的框架需在桌面端使用', color: 'yellow' });
                }
              } catch {
                notifications.show({ title: '操作失败', message: '保存到本地失败', color: 'red' });
              }
            }}
          >
            复制为我的框架（本地）
          </Button>
        </Group>
      </Stack>
    </PageLayout>
  );
}