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
    Grid,
    Center,
    Divider,
    Box,
    MultiSelect,
    Switch
} from '@mantine/core';
import {
    IconBrain,
    IconPlus,
    IconEdit,
    IconTrash,
    IconEye,
    IconRobot,
    IconExternalLink,
    IconDownload,
    IconUpload
} from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
// 暂时注释掉PageLayout导入，直接使用Stack布局
// import { PageLayout } from '../../../apps/desktop/src/components/layout/PageLayout';

// 临时类型定义，应该从@my-platform/types导入
interface KnowledgeFramework {
    id: string;
    title: string;
    description: string;
    domain: string;
    version: number;
    is_built_in: boolean;
    is_public: boolean;
    local_only: boolean;
    created_at: string;
    updated_at: string;
}

interface KnowledgeFrameworkManagerProps {
    onFrameworkSelect?: (framework: KnowledgeFramework) => void;
}

export const KnowledgeFrameworkManager: React.FC<KnowledgeFrameworkManagerProps> = ({
    onFrameworkSelect
}) => {
    const [frameworks, setFrameworks] = useState<KnowledgeFramework[]>([]);
    const [loading, setLoading] = useState(true);
    // 创建改为二级页面路由
    const [selectedFramework, setSelectedFramework] = useState<KnowledgeFramework | null>(null);

    // 表单状态
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        domain: ''
    });

    // AI 创建状态
    const [aiFormData, setAiFormData] = useState({
        title: '',
        description: '',
        domain: '',
        targetUser: '',
        complexity: 'medium'
    });
    const [aiGenerating, setAiGenerating] = useState(false);
    const [tagFilter, setTagFilter] = useState<string[]>([]);
    const [allTags, setAllTags] = useState<any[]>([]);
    const [onlyLocal, setOnlyLocal] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const API_BASE = (
      ((globalThis as any).process?.env?.NEXT_PUBLIC_API_BASE_URL as string | undefined) ||
      'http://localhost:3001'
    ).replace(/\/$/, '');

    useEffect(() => {
        loadFrameworks();
        (async () => {
          try {
            const res = await fetch(`${API_BASE}/api/tags`);
            const data = await res.json();
            if (data?.success) setAllTags(data.data);
          } catch {}
        })();
    }, []);

    const loadFrameworks = async () => {
        try {
            setLoading(true);
            setError(null);
            const res = await fetch(`${API_BASE}/api/knowledge-frameworks`);
            const data = await res.json();
            if (res.ok && data?.success) {
                const list = (data.data || []).map((fw: any) => ({
                  id: fw.id,
                  title: fw.title,
                  description: fw.description,
                  domain: fw.domain || '-',
                  version: fw.version || 1,
                  is_built_in: !!fw.isBuiltIn,
                  is_public: !!fw.isPublic,
                  is_blocked: !!fw.isBlocked,
                  local_only: false,
                  created_at: fw.createdAt,
                  updated_at: fw.updatedAt,
                  // 透传 tags 供筛选与展示
                  tags: Array.isArray(fw.tags) ? fw.tags : [],
                }));
                let combined = [...list];
                // 合并本地（Tauri）框架
                try {
                  if (typeof window !== 'undefined' && (window as any).__TAURI__) {
                    // @ts-ignore
                    const { invoke } = await import('@tauri-apps/api/core');
                    const locals = (await invoke('get_knowledge_frameworks')) as any[];
                    const serverTitles = new Set(list.map((x: any) => x.title as string));
                    const mappedLocals = (locals || []).map((f: any) => ({
                      id: f.id,
                      title: f.title || f.name,
                      description: f.description || '',
                      domain: f.domain || '-',
                      version: f.version || 1,
                      is_built_in: false,
                      is_public: !!f.is_public,
                      is_blocked: !!f.is_blocked,
                      local_only: true,
                      created_at: f.created_at,
                      updated_at: f.updated_at,
                      tags: Array.isArray(f.tags) ? f.tags : [],
                    }));
                    const dedupLocals = mappedLocals.filter((m: any) => !serverTitles.has(m.title));
                    combined = [...dedupLocals, ...combined];
                  }
                } catch {}
                setFrameworks(combined);
            } else {
                setFrameworks([]);
                setError('无法加载知识框架');
            }
        } catch (error) {
            console.error('Failed to load frameworks:', error);
            notifications.show({
                title: '加载失败',
                message: '无法加载知识框架',
                color: 'red'
            });
            setError('无法加载知识框架');
        } finally {
            setLoading(false);
        }
    };

    const handleCreateFramework = async () => {
        try {
            // 这里应该调用实际的创建API
            notifications.show({
                title: '创建成功',
                message: '知识框架已创建',
                color: 'green'
            });
            resetFormData();
            loadFrameworks();
        } catch (error) {
            notifications.show({
                title: '创建失败',
                message: '无法创建知识框架',
                color: 'red'
            });
        }
    };

    const handleAICreate = async () => {
        try {
            setAiGenerating(true);
            // 这里应该调用AI创建API
            notifications.show({
                title: 'AI 创建成功',
                message: '知识框架已通过 AI 辅助创建',
                color: 'green'
            });
            setAiFormData({
                title: '',
                description: '',
                domain: '',
                targetUser: '',
                complexity: 'medium'
            });
            loadFrameworks();
        } catch (error) {
            notifications.show({
                title: 'AI 创建失败',
                message: '无法通过 AI 创建知识框架',
                color: 'red'
            });
        } finally {
            setAiGenerating(false);
        }
    };

    const resetFormData = () => {
        setFormData({
            title: '',
            description: '',
            domain: ''
        });
    };

    if (loading) {
        return (
            <Center h={400}>
                <Stack align="center">
                    <IconBrain size={64} color="var(--mantine-color-gray-5)" />
                    <Text c="dimmed">加载知识框架...</Text>
                </Stack>
            </Center>
        );
    }

    return (
        <Stack gap="lg" p="md">
            {error && (
              <Card withBorder>
                <Group justify="space-between">
                  <Text c="red">{error}</Text>
                  <Button variant="light" onClick={loadFrameworks}>重试</Button>
                </Group>
              </Card>
            )}
            {/* 头部操作栏 */}
            <Group justify="space-between">
                <Group>
                    <IconBrain size={28} color="var(--mantine-color-violet-6)" />
                    <Box>
                        <Title order={2}>知识框架</Title>
                        <Text c="dimmed" size="sm">创建和管理结构化知识体系</Text>
                    </Box>
                </Group>

                <Group>
                    <Button
                        leftSection={<IconRobot size={16} />}
                        variant="gradient"
                        gradient={{ from: 'violet', to: 'purple' }}
                        onClick={() => { if (typeof window !== 'undefined') window.location.href = '/knowledge/new?mode=ai' }}
                    >
                        AI 创建
                    </Button>
                    <Button
                        leftSection={<IconPlus size={16} />}
                        onClick={() => { if (typeof window !== 'undefined') window.location.href = '/knowledge/new' }}
                    >
                        手动创建
                    </Button>
                </Group>
            </Group>

            {/* 框架列表 */}
            {frameworks.length === 0 ? (
                <Card shadow="sm" padding="xl" radius="md" withBorder>
                    <Center>
                        <Stack align="center" gap="md">
                            <IconBrain size={64} color="var(--mantine-color-gray-5)" />
                            <Title order={3} ta="center">还没有知识框架</Title>
                            <Text c="dimmed" ta="center" maw={400}>
                                创建您的第一个知识框架来组织和管理知识体系
                            </Text>
                            <Group>
                                <Button
                                    leftSection={<IconRobot size={16} />}
                                    variant="gradient"
                                    gradient={{ from: 'violet', to: 'purple' }}
                                    onClick={() => { if (typeof window !== 'undefined') window.location.href = '/knowledge/new?mode=ai' }}
                                >
                                    AI 辅助创建
                                </Button>
                                <Button
                                    leftSection={<IconPlus size={16} />}
                                    variant="light"
                                    onClick={() => { if (typeof window !== 'undefined') window.location.href = '/knowledge/new' }}
                                >
                                    手动创建
                                </Button>
                            </Group>
                        </Stack>
                    </Center>
                </Card>
            ) : (
                <>
                    <Group>
                      <MultiSelect
                        placeholder="按标签筛选"
                        data={allTags.map((t: any) => ({ value: t.id, label: t.parent ? `${t.parent.name} / ${t.name}` : t.name }))}
                        value={tagFilter}
                        onChange={setTagFilter}
                        searchable
                        clearable
                        style={{ minWidth: 260 }}
                      />
                      <Switch label="仅显示本地" checked={onlyLocal} onChange={(e) => setOnlyLocal(e.currentTarget.checked)} />
                    </Group>
                    <Grid>
                    {frameworks
                      .filter((fw) => {
                        if (tagFilter.length === 0) return true;
                        const tags = (fw as any).tags || [];
                        if (!Array.isArray(tags) || tags.length === 0) return false;
                        const tagIds: string[] = tags.map((t: any) => (t && typeof t === 'object' ? t.id : t)).filter(Boolean);
                        const tagNames: string[] = tags.map((t: any) => (t && typeof t === 'object' ? t.name : t)).filter(Boolean);
                        const matchesTag = tagFilter.some((id) => tagIds.includes(id) || tagNames.includes(((allTags || []).find((t: any) => t.id === id) || {}).name));
                        const matchesLocal = !onlyLocal || !!(fw as any).local_only;
                        return matchesTag && matchesLocal;
                      })
                      .map((framework) => (
                        <Grid.Col key={framework.id} span={{ base: 12, md: 6, lg: 4 }}>
                            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                                <Stack gap="sm" h="100%">
                                    <Group justify="space-between">
                                        <Badge
                                            variant="light"
                                            color={framework.local_only ? 'orange' : 'green'}
                                            size="sm"
                                        >
                                            {framework.local_only ? '本地' : '已同步'}
                                        </Badge>
                                        {(framework as any).is_blocked && (
                                          <Badge variant="light" color="red" size="sm">已屏蔽</Badge>
                                        )}
                                        <Badge variant="outline" size="xs">
                                            {framework.domain}
                                        </Badge>
                                    </Group>

                                    <Box style={{ flex: 1 }}>
                                        <Title order={4} mb="xs">{framework.title}</Title>
                                        <Text size="sm" c="dimmed" mb="sm" lineClamp={3}>
                                            {framework.description}
                                        </Text>
                                        {/* 标签展示并支持聚合跳转 */}
                                        {Array.isArray((framework as any).tags) && (framework as any).tags.length > 0 && (
                                          <Group gap="xs" wrap="wrap">
                                            {(framework as any).tags.map((tg: any, idx: number) => (
                                              <Badge
                                                key={idx}
                                                size="xs"
                                                variant="light"
                                                onClick={() => {
                                                  // 点击将标签加入过滤
                                                  setTagFilter((prev) => Array.from(new Set([...(prev || []), tg.id || tg])));
                                                }}
                                                style={{ cursor: 'pointer' }}
                                              >
                                                {tg.parent ? `${tg.parent.name} / ${tg.name}` : tg.name || tg}
                                              </Badge>
                                            ))}
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
                                                        window.location.href = `/knowledge/${framework.id}`;
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
                                                            id: (framework as any).id,
                                                            title: framework.title,
                                                            description: framework.description,
                                                            domain: framework.domain,
                                                            tags: (framework as any).tags || [],
                                                          } as any;
                                                          window.localStorage.setItem('frameworkDraft', JSON.stringify(draft));
                                                          window.location.href = '/knowledge/new?edit=1';
                                                        }
                                                      } catch {}
                                                }}
                                            >
                                                <IconEdit size={14} />
                                            </ActionIcon>
                                            {/* 本地 → 服务器 上传 */}
                                            {framework.local_only && (
                                              <ActionIcon
                                                variant="light"
                                                color="blue"
                                                size="sm"
                                                onClick={async () => {
                                                  try {
                                                    // 冲突检查：同名服务器项且服务器较新
                                                    let shouldContinue = true;
                                                    try {
                                                      const listRes = await fetch(`${API_BASE}/api/knowledge-frameworks`);
                                                      const listData = await listRes.json();
                                                      const same = Array.isArray(listData?.data)
                                                        ? listData.data.find((x: any) => x.title === framework.title)
                                                        : null;
                                                      if (same) {
                                                        const remoteUpdated = new Date(same.updatedAt || 0).getTime();
                                                        const localUpdated = new Date((framework as any).updated_at || 0).getTime();
                                                        if (remoteUpdated > localUpdated) {
                                                          shouldContinue = window.confirm('服务器版本较新，继续上传将覆盖服务器最新内容。是否继续上传？');
                                                        }
                                                      }
                                                    } catch {}
                                                    if (!shouldContinue) return;

                                                    const body = {
                                                      title: framework.title,
                                                      description: (framework as any).description || '',
                                                      domain: (framework as any).domain || 'general',
                                                      tags: ((framework as any).tags || []).map((t: any) => t.id || t).filter(Boolean),
                                                      isPublic: !!(framework as any).is_public,
                                                    };
                                                    const resp = await fetch(`${API_BASE}/api/knowledge-frameworks`, {
                                                      method: 'POST',
                                                      headers: { 'Content-Type': 'application/json' },
                                                      body: JSON.stringify(body),
                                                    });
                                                    const d = await resp.json();
                                                    if (!resp.ok || !d?.success) throw new Error(d?.error || '上传失败');
                                                    notifications.show({ title: '上传成功', message: '已同步到服务器', color: 'green' });
                                                    await loadFrameworks();
                                                  } catch (e) {
                                                    notifications.show({ title: '上传失败', message: '无法上传到服务器', color: 'red' });
                                                  }
                                                }}
                                              >
                                                <IconUpload size={14} />
                                              </ActionIcon>
                                            )}
                                             {/* 从服务器下载覆盖到本地 */}
                                             <ActionIcon
                                                 variant="light"
                                                 color="teal"
                                                 size="sm"
                                                 onClick={async () => {
                                                   try {
                                                      // 冲突检查：若存在同名本地项且本地较新，提醒覆盖
                                                      try {
                                                        const localSame = frameworks.find((f: any) => f.local_only && f.title === framework.title);
                                                        if (localSame) {
                                                          const localUpdated = new Date((localSame as any).updated_at || 0).getTime();
                                                          const remoteUpdated = new Date((framework as any).updated_at || 0).getTime();
                                                          if (localUpdated > remoteUpdated) {
                                                            const cont = window.confirm('本地版本较新，继续下载将覆盖本地内容。是否继续下载？');
                                                            if (!cont) return;
                                                          }
                                                        }
                                                      } catch {}

                                                      if (typeof window !== 'undefined' && (window as any).__TAURI__) {
                                                       // @ts-ignore
                                                       const { invoke } = await import('@tauri-apps/api/core');
                                                       // 服务器返回的结构与本地结构字段对齐
                                                       const payload = {
                                                         id: framework.id,
                                                         name: framework.title,
                                                         title: framework.title,
                                                         description: (framework as any).description || '',
                                                         domain: (framework as any).domain || '-',
                                                         version: (framework as any).version || 1,
                                                         is_public: !!(framework as any).is_public,
                                                         local_only: false,
                                                         updated_at: Date.now(),
                                                         created_at: Date.now(),
                                                         tags: ((framework as any).tags || []).map((t: any) => t.id || t.name).filter(Boolean),
                                                         root_nodes: (framework as any).rootNodes || (framework as any).root_nodes || [],
                                                       } as any;
                                                       await invoke('save_knowledge_framework', { framework: payload });
                                                       notifications.show({ title: '已下载到本地', message: '本地知识框架已更新', color: 'green' });
                                                     } else {
                                                       notifications.show({ title: '仅桌面支持', message: '下载到本地功能需在桌面端使用', color: 'yellow' });
                                                     }
                                                   } catch (e) {
                                                     notifications.show({ title: '下载失败', message: '无法保存到本地', color: 'red' });
                                                   }
                                                 }}
                                             >
                                                 <IconDownload size={14} />
                                             </ActionIcon>
                                        </Group>

                                        <ActionIcon
                                            variant="light"
                                            color="red"
                                            size="sm"
                                            onClick={() => {
                                                // 删除功能
                                            }}
                                        >
                                            <IconTrash size={14} />
                                        </ActionIcon>
                                    </Group>
                                </Stack>
                            </Card>
                        </Grid.Col>
                    ))}
                    </Grid>
                </>
            )}

            {/* 创建与 AI 创建改为二级页面 /knowledge/new */}
        </Stack>
    );
};