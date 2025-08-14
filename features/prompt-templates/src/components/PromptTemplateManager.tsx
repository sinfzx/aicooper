import React, { useMemo, useState } from 'react'
import {
  Stack,
  Group,
  Title,
  Text,
  Button,
  Card,
  Badge,
  ActionIcon,
  TextInput,
  Grid,
  Center,
  Box,
  Paper,
  Divider,
  Modal,
  Tabs,
  MultiSelect,
  Switch
} from '@mantine/core';
import {
  IconTemplate,
  IconSearch,
  IconCopy,
  IconEye,
  IconEdit,
  IconPlus,
  IconRobot,
  IconUpload,
  IconDownload
} from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
// 暂时注释掉PageLayout导入，直接使用Stack布局
// import { PageLayout } from '../../../apps/desktop/src/components/layout/PageLayout';

type TemplateItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  content: string; // API 字段名为 content
  localOnly?: boolean;
  serverId?: string | null;
}

import { usePromptTemplate } from '../hooks/usePromptTemplate';
import { useTags } from '../hooks/useTags';

export const PromptTemplateManager: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('全部')
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateItem | null>(null)
  const [viewModalOpen, setViewModalOpen] = useState(false)
  const { templates, loading, error, syncTemplate, downloadTemplate } = usePromptTemplate();
  const API_BASE = (
    ((globalThis as any).process?.env?.NEXT_PUBLIC_API_BASE_URL as string | undefined) ||
    'http://localhost:3001'
  ).replace(/\/$/, '');

  const confirmUpload = async (tpl: any) => {
    try {
      if (!tpl?.serverId) return true;
      const res = await fetch(`${API_BASE}/api/prompt-templates/${tpl.serverId}`);
      const data = await res.json();
      if (!res.ok || !data?.success) return true;
      const remoteUpdated = new Date(data.data.updatedAt || 0).getTime();
      const localUpdated = new Date(tpl.updatedAt || 0).getTime();
      if (remoteUpdated > localUpdated) {
        return window.confirm('服务器版本较新，继续上传将覆盖服务器最新内容。是否继续上传？');
      }
      return true;
    } catch {
      return true;
    }
  };

  const confirmDownload = async (tpl: any) => {
    try {
      if (!tpl?.serverId) return true;
      const res = await fetch(`${API_BASE}/api/prompt-templates/${tpl.serverId}`);
      const data = await res.json();
      if (!res.ok || !data?.success) return true;
      const remoteUpdated = new Date(data.data.updatedAt || 0).getTime();
      const localUpdated = new Date(tpl.updatedAt || 0).getTime();
      if (localUpdated > remoteUpdated) {
        return window.confirm('本地版本较新，继续下载将覆盖本地内容。是否继续下载？');
      }
      return true;
    } catch {
      return true;
    }
  };
  const { tags: allTags } = useTags();
  const [tagFilter, setTagFilter] = useState<string[]>([]);
  const [onlyLocal, setOnlyLocal] = useState<boolean>(false);
  // 原弹窗创建入口已移除，改为二级页面

  const categories = ['全部', 'general', 'writing', 'coding', 'analysis', 'translation', 'education']

  // 数据加载由 usePromptTemplate 内部完成

  const filteredTemplates = useMemo(() => {
    const list = Array.isArray(templates) ? templates : []
    return list.filter((template) => {
      const matchesCategory = selectedCategory === '全部' || template.category === selectedCategory
      const searchLower = searchTerm.toLowerCase()
      const matchesSearch = template.title.toLowerCase().includes(searchLower) || (template.description || '').toLowerCase().includes(searchLower)
      const matchesTags = tagFilter.length === 0 || (
        Array.isArray((template as any).tags) && (template as any).tags.length > 0 &&
        tagFilter.some(id => (template as any).tags.includes(id) || (template as any).tags.includes((allTags || []).find((t: any) => t.id === id)?.name))
      )
      const matchesOnlyLocal = !onlyLocal || !!template.localOnly
      return matchesCategory && matchesSearch && matchesTags && matchesOnlyLocal
    })
  }, [templates, selectedCategory, searchTerm, tagFilter, allTags, onlyLocal])

  const handleCopyTemplate = (template: string) => {
    navigator.clipboard.writeText(template)
    notifications.show({
      title: '复制成功',
      message: '模板已复制到剪贴板',
      color: 'green'
    })
  }

  return (
    <Stack gap="lg" p="md">
      {error && (
        <Card shadow="sm" padding="sm" withBorder>
          <Text c="red">{error}</Text>
        </Card>
      )}
      {/* 头部操作栏 */}
      <Group justify="space-between">
        <Group>
          <IconTemplate size={28} color="var(--mantine-color-green-6)" />
          <Box>
            <Title order={2}>提示词模板库</Title>
            <Text c="dimmed" size="sm">精选的 AI 提示词模板，提升您的工作效率</Text>
          </Box>
        </Group>
        
        <Group>
          <Button
            leftSection={<IconRobot size={16} />}
            variant="gradient"
            gradient={{ from: 'green', to: 'teal' }}
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.href = '/templates/new?mode=ai'
              }
            }}
          >
            AI 生成
          </Button>
          <Button
            leftSection={<IconPlus size={16} />}
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.href = '/templates/new'
              }
            }}
          >
            创建模板
          </Button>
        </Group>
      </Group>

      {/* 搜索和筛选 */}
      <Group>
        <TextInput
          placeholder="搜索模板..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.currentTarget.value)}
          leftSection={<IconSearch size={16} />}
          style={{ flex: 1 }}
        />
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
      </Group>

      {/* 分类标签 */}
      <Tabs value={selectedCategory} onChange={(value) => setSelectedCategory(value || '全部')}>
        <Tabs.List>
          {categories.map(category => (
            <Tabs.Tab key={category} value={category}>
              {category}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>

      {/* 模板列表 */}
      {loading ? (
        <Card shadow="sm" padding="xl" radius="md" withBorder>
          <Center>
            <Text c="dimmed">加载中...</Text>
          </Center>
        </Card>
      ) : filteredTemplates.length === 0 ? (
        <Card shadow="sm" padding="xl" radius="md" withBorder>
          <Center>
            <Stack align="center" gap="md">
              <IconTemplate size={64} color="var(--mantine-color-gray-5)" />
              <Title order={3} ta="center">没有找到匹配的模板</Title>
              <Text c="dimmed" ta="center" maw={400}>
                {error ? `加载失败：${error}` : '尝试调整搜索条件或选择其他分类'}
              </Text>
            </Stack>
          </Center>
        </Card>
      ) : (
        <Grid>
          {filteredTemplates.map(template => (
            <Grid.Col key={template.id} span={{ base: 12, md: 6, lg: 4 }}>
              <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                <Stack gap="sm" h="100%">
                   <Group justify="space-between">
                    <Badge variant="light" color="blue" size="sm">
                      {template.category}
                    </Badge>
                     {template.localOnly ? (
                       <Badge variant="light" color="orange" size="sm">本地</Badge>
                     ) : (
                       <Badge variant="light" color="green" size="sm">已同步</Badge>
                     )}
                     {(template as any).isBlocked && (
                       <Badge variant="light" color="red" size="sm">已屏蔽</Badge>
                     )}
                  </Group>

                  <Box style={{ flex: 1 }}>
                    <Title order={4} mb="xs">{template.title}</Title>
                    <Text size="sm" c="dimmed" mb="sm" lineClamp={2}>
                      {template.description}
                    </Text>
                    
                    <Paper p="sm" bg="gray.0" radius="md" mb="sm">
                      <Text size="xs" c="dimmed" lineClamp={4} style={{ fontFamily: 'monospace' }}>
                        {template.content}
                      </Text>
                    </Paper>

                    {/* 标签展示与聚合筛选 */}
                    {Array.isArray((template as any).tags) && (template as any).tags.length > 0 && (
                      <Group gap="xs" wrap="wrap">
                        {(template as any).tags.map((tg: any, idx: number) => {
                          const id = tg && typeof tg === 'object' ? tg.id : tg;
                          const found = (allTags || []).find((t: any) => t.id === id || t.name === id);
                          const label = found ? (found.parent ? `${found.parent.name} / ${found.name}` : found.name) : (tg?.name || tg);
                          return (
                            <Badge
                              key={idx}
                              size="xs"
                              variant="light"
                              onClick={() => setTagFilter((prev) => Array.from(new Set([...(prev || []), id])))}
                              style={{ cursor: 'pointer' }}
                            >
                              {label}
                            </Badge>
                          );
                        })}
                      </Group>
                    )}
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
                            window.location.href = `/templates/${template.id}`;
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
                                id: template.id,
                                title: template.title,
                                description: template.description,
                                category: template.category,
                                content: (template as any).content,
                                parameters: (template as any).parameters || [],
                                article: (template as any).article || '',
                                tags: (template as any).tags || [],
                              } as any;
                              window.localStorage.setItem('templateDraft', JSON.stringify(draft));
                              window.location.href = '/templates/new?edit=1';
                            }
                          } catch {}
                        }}
                      >
                        <IconEdit size={14} />
                      </ActionIcon>
                      {template.localOnly && (
                        <ActionIcon
                          variant="light"
                          color="blue"
                          size="sm"
                          onClick={async () => {
                            if (await confirmUpload(template)) {
                              await syncTemplate(template.id);
                            }
                          }}
                        >
                          <IconUpload size={14} />
                        </ActionIcon>
                      )}
                      {!template.localOnly && (
                        <ActionIcon
                          variant="light"
                          color="teal"
                          size="sm"
                          onClick={async () => {
                            if (await confirmDownload(template)) {
                              await downloadTemplate(template.serverId || template.id);
                            }
                          }}
                        >
                          <IconDownload size={14} />
                        </ActionIcon>
                      )}
                    </Group>
                    
                    <Button
                      size="xs"
                      leftSection={<IconCopy size={12} />}
                      onClick={() => handleCopyTemplate(template.content)}
                    >
                      复制
                    </Button>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      )}

      {/* 查看详情模态框 */}
      <Modal
        opened={viewModalOpen}
        onClose={() => setViewModalOpen(false)}
        title={selectedTemplate?.title || '模板详情'}
        size="lg"
      >
        {selectedTemplate && (
          <Stack gap="md">
            <Group>
              <Badge color="blue">{selectedTemplate.category}</Badge>
            </Group>
            
            <Text>{selectedTemplate.description}</Text>
            
            <Box>
              <Text fw={500} mb="sm">模板内容：</Text>
              <Paper p="md" withBorder bg="gray.0">
                <Text size="sm" style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
                  {selectedTemplate.content}
                </Text>
              </Paper>
            </Box>
            
            <Group justify="flex-end">
              <Button
                leftSection={<IconCopy size={16} />}
                onClick={() => {
                  handleCopyTemplate(selectedTemplate.content)
                  setViewModalOpen(false)
                }}
              >
                复制模板
              </Button>
            </Group>
          </Stack>
        )}
      </Modal>

      {/* 创建模板改为二级页面 /templates/new */}
    </Stack>
  )
}