"use client";

import React, { useState } from 'react';
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
  Box,
  Tabs,
  Paper,
  Image,
  Avatar,
  Timeline,
  Progress,
  Divider,
  MultiSelect,
  Loader
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import {
  IconBrain,
  IconPlus,
  IconEdit,
  IconTrash,
  IconEye,
  IconSearch,
  IconFilter,
  IconPhoto,
  IconVideo,
  IconMicrophone,
  IconCalendar,
  IconMapPin,
  IconUsers,
  IconTag,
  IconHeart,
  IconRobot,
  IconDownload,
  IconShare,
  IconTimeline,
  IconPhotoPlus,
  IconVideoPlus
} from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { useMemory } from '../hooks/useMemory';
import { Memory, MemoryFilter } from '../types';
import { AwakenPanel } from './AwakenPanel';
import { RadioPanel } from './RadioPanel';

interface MemoryManagerProps {
  onMemorySelect?: (memory: Memory) => void;
}

export const MemoryManager: React.FC<MemoryManagerProps> = ({
  onMemorySelect
}) => {
  const {
    memories,
    loading,
    stats,
    createMemory,
    updateMemory,
    deleteMemory,
    searchMemories,
    generateImage,
    generateVideo,
    loadMemories,
    exportTimelineJson,
    syncUp,
    syncDown
  } = useMemory();

  const [activeTab, setActiveTab] = useState('list');
  // 创建改为二级页面
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [filterSyncScope, setFilterSyncScope] = useState<'all' | 'filtered'>('all');
  const [conflictModalOpen, setConflictModalOpen] = useState(false);
  const [mergeCandidates, setMergeCandidates] = useState<Memory[]>([]);
  const [mergeSelections, setMergeSelections] = useState<Record<string, 'local' | 'remote'>>({});
  const [sortBy, setSortBy] = useState<'date' | 'title' | 'created'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentFilter, setCurrentFilter] = useState<MemoryFilter>({});
  const [generatingImage, setGeneratingImage] = useState<string | null>(null);
  const [generatingVideo, setGeneratingVideo] = useState(false);
  const [bgmPath, setBgmPath] = useState<string | null>(null);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(true);
  const [syncModalOpen, setSyncModalOpen] = useState(false);
  const [syncStrategy, setSyncStrategy] = useState<'local' | 'remote'>('local');

  // 简易鉴权（桌面端）：未登录则提示登录
  React.useEffect(() => {
    (async () => {
      try {
        if (typeof window === 'undefined') return;
        // Web 环境：检查 localStorage
        if (!(window as any).__TAURI__) {
          const u = localStorage.getItem('auth_user');
          const t = localStorage.getItem('auth_token');
          const e = localStorage.getItem('auth_expires');
          setIsAuthorized(!!u && !!t && !!e && Date.now() < parseInt(e || '0'));
          // 读取排序持久化
          const sb = localStorage.getItem('memory_sort_by') as any;
          const so = localStorage.getItem('memory_sort_order') as any;
          if (sb === 'date' || sb === 'title' || sb === 'created') setSortBy(sb);
          if (so === 'asc' || so === 'desc') setSortOrder(so);
          return;
        }
        const { invoke } = await import('@tauri-apps/api/core');
        const auth = await invoke<any>('get_auth_data');
        setIsAuthorized(!!auth);
      } catch {
        setIsAuthorized(true);
      }
    })();
  }, []);

  // 排序选项持久化
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem('memory_sort_by', sortBy);
      localStorage.setItem('memory_sort_order', sortOrder);
    } catch {}
  }, [sortBy, sortOrder]);

  // 表单状态
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    date: new Date(),
    location: '',
    people: [] as string[],
    tags: [] as string[],
    emotions: [] as string[],
    visibility: 'private' as 'private' | 'shared' | 'public'
  });

  const handleCreateMemory = async () => {
    try {
      await createMemory(formData);
      setFormData({
        title: '',
        content: '',
        date: new Date(),
        location: '',
        people: [],
        tags: [],
        emotions: [],
        visibility: 'private'
      });
    } catch (error) {
      // Error handled in hook
    }
  };

  const handleDeleteMemory = async (id: string) => {
    if (confirm('确定要删除这个记忆吗？此操作不可恢复！')) {
      await deleteMemory(id);
    }
  };

  const handleGenerateImage = async (memory: Memory) => {
    setGeneratingImage(memory.id);
    try {
      await generateImage({
        memoryId: memory.id,
        prompt: `${memory.title}: ${memory.content}`,
        style: 'artistic',
        aspectRatio: '16:9',
        quality: 'standard'
      });
    } catch (error) {
      // Error handled in hook
    } finally {
      setGeneratingImage(null);
    }
  };

  const handleGenerateVideo = async (selectedMemoryIds: string[]) => {
    setGeneratingVideo(true);
    try {
      await generateVideo({
        memoryIds: selectedMemoryIds,
        title: '我的记忆视频',
        duration: 60,
        transitions: 'fade',
        voiceoverText: '这些是我珍贵的记忆...',
        backgroundMusic: bgmPath || undefined,
      });
    } catch (error) {
      // Error handled in hook
    } finally {
      setGeneratingVideo(false);
    }
  };

  const pickBgm = async () => {
    try {
      if (typeof window === 'undefined' || !(window as any).__TAURI__) {
        notifications.show({ title: '仅支持桌面端', message: '请选择在桌面端使用本地 BGM', color: 'orange' });
        return;
      }
      // @ts-ignore dynamic import available only in Tauri runtime
      const { open } = await import('@tauri-apps/api/dialog');
      const selected = await open({ multiple: false, filters: [{ name: 'Audio', extensions: ['mp3','wav','m4a','flac','aac','ogg'] }] });
      if (typeof selected === 'string') setBgmPath(selected);
    } catch (e) {
      notifications.show({ title: '选择失败', message: '无法选择本地音频', color: 'red' });
    }
  };

  const doSync = async () => {
    try {
      if (syncStrategy === 'local') {
        if (filterSyncScope === 'filtered') {
          const filtered = memories.filter((m) => {
            if (currentFilter.location && m.location !== currentFilter.location) return false;
            if (currentFilter.people && currentFilter.people.length > 0) {
              if (!currentFilter.people.some((p) => m.people.includes(p))) return false;
            }
            if (currentFilter.emotions && currentFilter.emotions.length > 0) {
              if (!currentFilter.emotions.some((e) => m.emotions.includes(e))) return false;
            }
            if (currentFilter.dateRange?.start && new Date(m.date) < new Date(currentFilter.dateRange.start)) return false;
            if (currentFilter.dateRange?.end && new Date(m.date) > new Date(currentFilter.dateRange.end)) return false;
            return true;
          });
          await syncUp(filtered);
        } else {
          await syncUp();
        }
      } else if (syncStrategy === 'remote') {
        await syncDown();
      } else if (syncStrategy === 'merge') {
        // 拉取远端，构造逐项合并候选
        const remote = await syncDown({ limit: 500 });
        const byId = new Map<string, Memory>();
        memories.forEach((m) => byId.set(m.id, m));
        const candidates: Memory[] = [];
        const selections: Record<string, 'local' | 'remote'> = {};
        // 精准拉取每条远端详情
        const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
        const trpcCall = async (id: string) => {
          const res = await fetch(`${baseUrl}/api/trpc/${encodeURIComponent('memory.get')}?batch=1`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify([{ id: '1', json: { id } }]),
          });
          if (!res.ok) return null;
          const data = await res.json();
          return data?.[0]?.result?.data ?? null;
        };
        for (const r of (Array.isArray(remote) ? remote : [])) {
          const local = byId.get(r.id);
          if (!local) continue;
          const remoteFull = await trpcCall(r.id);
          if (!remoteFull) continue;
          const diff = local.title !== remoteFull.title || local.content !== remoteFull.content || new Date(local.date).getTime() !== new Date(remoteFull.date).getTime() || (local.location || '') !== (remoteFull.location || '') || (local.people || []).join('|') !== (remoteFull.people || []).join('|') || (local.tags || []).join('|') !== (remoteFull.tags || []).join('|') || (local.emotions || []).join('|') !== (remoteFull.emotions || []).join('|') || local.visibility !== (remoteFull.visibility || 'private');
          if (diff) {
            candidates.push({ ...local } as Memory);
            selections[r.id] = 'local';
          }
        }
        setMergeCandidates(candidates);
        setMergeSelections(selections);
        setConflictModalOpen(true);
      }
      setSyncModalOpen(false);
      notifications.show({ title: '同步完成', message: '已完成同步（仅非媒体字段）', color: 'green' });
    } catch (e) {
      notifications.show({ title: '同步失败', message: '请稍后重试', color: 'red' });
    }
  };

  const applyMerge = async () => {
    try {
      // 逐项合并：根据选择应用本地或远端值
      for (const cand of mergeCandidates) {
        const choice = mergeSelections[cand.id];
        if (choice === 'remote') {
          // 使用精确 memory.get 代替模糊搜索
          const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
          try {
            const res = await fetch(`${baseUrl}/api/trpc/${encodeURIComponent('memory.get')}?batch=1`, {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              credentials: 'include',
              body: JSON.stringify([{ id: '1', json: { id: cand.id } }]),
            });
            if (res.ok) {
              const data = await res.json();
              const remote = data?.[0]?.result?.data;
              if (remote) {
                await updateMemory(cand.id, {
                  title: remote.title,
                  content: remote.content,
                  date: new Date(remote.date),
                  location: remote.location ?? undefined,
                  people: remote.people ?? [],
                  tags: remote.tags ?? [],
                  emotions: remote.emotions ?? [],
                  visibility: remote.visibility ?? 'private',
                });
              }
            }
          } catch {}
        }
      }
      setConflictModalOpen(false);
      notifications.show({ title: '合并完成', message: '已应用逐项合并', color: 'green' });
    } catch {
      notifications.show({ title: '合并失败', message: '请稍后重试', color: 'red' });
    }
  };

  const handleSearch = async () => {
    if (searchQuery.trim()) {
      try {
        const result = await searchMemories(searchQuery);
        // 这里可以更新显示的记忆列表
        console.log('Search results:', result);
      } catch (error) {
        notifications.show({
          title: '搜索失败',
          message: '搜索记忆时出现问题',
          color: 'red'
        });
      }
    }
  };

  const handleApplyFilter = async () => {
    await loadMemories({ ...currentFilter, sortBy, sortOrder });
    setFilterModalOpen(false);
  };

  const getEmotionColor = (emotion: string) => {
    const emotionColors: Record<string, string> = {
      '快乐': 'yellow',
      '悲伤': 'blue',
      '兴奋': 'orange',
      '平静': 'green',
      '紧张': 'red',
      '感激': 'violet',
      '不舍': 'gray',
      '成就感': 'teal',
      '温馨': 'pink'
    };
    return emotionColors[emotion] || 'gray';
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  if (!isAuthorized) {
    return (
      <Center h={400}>
        <Stack align="center">
          <Text c="dimmed">该功能需要登录后使用，请先登录。</Text>
        </Stack>
      </Center>
    );
  }

  if (loading) {
    return (
      <Center h={400}>
        <Stack align="center">
          <Loader size="lg" />
          <Text c="dimmed">加载记忆中...</Text>
        </Stack>
      </Center>
    );
  }

  return (
    <Stack gap="lg" p="md">
      {/* 头部操作栏 */}
      <Group justify="space-between">
        <Group>
          <IconBrain size={28} color="var(--mantine-color-violet-6)" />
          <Box>
            <Title order={2}>记忆管理</Title>
            <Text c="dimmed" size="sm">管理和组织你的珍贵记忆</Text>
          </Box>
        </Group>
        
        <Group>
          <Button
            leftSection={<IconVideoPlus size={16} />}
            variant="gradient"
            gradient={{ from: 'violet', to: 'purple' }}
            onClick={() => handleGenerateVideo(memories.map(m => m.id))}
            loading={generatingVideo}
          >
            导出视频 MP4
          </Button>
          <Button
            variant="light"
            onClick={() => {
              const withImages = memories.filter((m) => !!m.imageUrl);
              if (withImages.length === 0) {
                notifications.show({ title: '缺少图片', message: '请先为记忆生成/添加图片后再导出视频', color: 'orange' });
                return;
              }
              handleGenerateVideo(withImages.map((m) => m.id));
            }}
          >
            导出筛选视频
          </Button>
          <Button variant="default" onClick={() => setSyncModalOpen(true)}>
            手动同步
          </Button>
          <Button variant="light" onClick={pickBgm}>
            {bgmPath ? '已选择 BGM' : '选择 BGM'}
          </Button>
          <Button
            variant="light"
            leftSection={<IconDownload size={16} />}
            onClick={() => exportTimelineJson(memories)}
          >
            导出时间线 JSON
          </Button>
          <Button
            variant="light"
            leftSection={<IconDownload size={16} />}
            onClick={() => {
              const subset = memories
                .filter((m) => !currentFilter.location || m.location?.includes(currentFilter.location || ''))
                .sort((a, b) => a.date.getTime() - b.date.getTime());
              exportTimelineJson(subset, 'timeline-filtered');
            }}
          >
            导出筛选 JSON
          </Button>
          <Button
            leftSection={<IconPlus size={16} />}
            onClick={() => { if (typeof window !== 'undefined') window.location.href = '/memory/new' }}
          >
            添加记忆
          </Button>
        </Group>
      </Group>

      {/* 搜索和过滤 */}
      <Group>
        <TextInput
          placeholder="搜索记忆..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.currentTarget.value)}
          leftSection={<IconSearch size={16} />}
          style={{ flex: 1 }}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <Button
          variant="light"
          leftSection={<IconFilter size={16} />}
          onClick={() => setFilterModalOpen(true)}
        >
          筛选
        </Button>
      </Group>

      {/* 统计信息 */}
      {stats && (
        <Grid>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Paper p="md" withBorder>
              <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
                总记忆数
              </Text>
              <Text size="xl" fw={700}>
                {stats.totalMemories}
              </Text>
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Paper p="md" withBorder>
              <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
                本月新增
              </Text>
              <Text size="xl" fw={700} c="blue">
                {stats.memoriesThisMonth}
              </Text>
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Paper p="md" withBorder>
              <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
                AI 生成
              </Text>
              <Text size="xl" fw={700} c="violet">
                {stats.aiGeneratedCount}
              </Text>
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Paper p="md" withBorder>
              <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
                今年记录
              </Text>
              <Text size="xl" fw={700} c="green">
                {stats.memoriesThisYear}
              </Text>
            </Paper>
          </Grid.Col>
        </Grid>
      )}

      {/* 标签页 */}
      <Tabs value={activeTab} onChange={(value) => setActiveTab(value || 'list')}>
        <Tabs.List>
          <Tabs.Tab value="list" leftSection={<IconEye size={16} />}>
            列表视图
          </Tabs.Tab>
          <Tabs.Tab value="timeline" leftSection={<IconTimeline size={16} />}>
            时间线
          </Tabs.Tab>
          <Tabs.Tab value="gallery" leftSection={<IconPhoto size={16} />}>
            图片画廊
          </Tabs.Tab>
          <Tabs.Tab value="awaken" leftSection={<IconBrain size={16} />}>
            唤醒
          </Tabs.Tab>
          <Tabs.Tab value="radio" leftSection={<IconMicrophone size={16} />}>
            电台
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="list" pt="md">
          {memories.length === 0 ? (
            <Card shadow="sm" padding="xl" radius="md" withBorder>
              <Center>
                <Stack align="center" gap="md">
                  <IconBrain size={64} color="var(--mantine-color-gray-5)" />
                  <Title order={3} ta="center">还没有记忆</Title>
                  <Text c="dimmed" ta="center" maw={400}>
                    开始记录你的珍贵时刻，让AI帮你生成美丽的图像
                  </Text>
                  <Button
                    leftSection={<IconPlus size={16} />}
                    onClick={() => { if (typeof window !== 'undefined') window.location.href = '/memory/new' }}
                  >
                    添加第一个记忆
                  </Button>
                </Stack>
              </Center>
            </Card>
          ) : (
            <Grid>
              {memories.map((memory) => (
                <Grid.Col key={memory.id} span={{ base: 12, md: 6, lg: 4 }}>
                  <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                    <Stack gap="sm" h="100%">
                      {memory.imageUrl && (
                        <Image
                          src={memory.imageUrl}
                          alt={memory.title}
                          height={160}
                          radius="md"
                          fallbackSrc="/images/placeholder.jpg"
                        />
                      )}
                      
                      <Group justify="space-between">
                        <Badge
                          variant="light"
                          color={memory.visibility === 'private' ? 'gray' : 'blue'}
                          size="sm"
                        >
                          {memory.visibility === 'private' ? '私密' : 
                           memory.visibility === 'shared' ? '分享' : '公开'}
                        </Badge>
                        {memory.aiGenerated && (
                          <Badge variant="light" color="violet" size="sm">
                            AI生成
                          </Badge>
                        )}
                      </Group>

                      <Box style={{ flex: 1 }}>
                        <Title order={4} mb="xs">{memory.title}</Title>
                        <Text size="sm" c="dimmed" mb="sm" lineClamp={3}>
                          {memory.content}
                        </Text>
                        
                        <Group gap="xs" mb="sm">
                          <Group gap="xs">
                            <IconCalendar size={14} />
                            <Text size="xs" c="dimmed">
                              {formatDate(memory.date)}
                            </Text>
                          </Group>
                          {memory.location && (
                            <Group gap="xs">
                              <IconMapPin size={14} />
                              <Text size="xs" c="dimmed">
                                {memory.location}
                              </Text>
                            </Group>
                          )}
                        </Group>

                        {memory.people.length > 0 && (
                          <Group gap="xs" mb="sm">
                            <IconUsers size={14} />
                            <Group gap="xs">
                              {memory.people.slice(0, 3).map((person, idx) => (
                                <Badge key={idx} size="xs" variant="outline">
                                  {person}
                                </Badge>
                              ))}
                              {memory.people.length > 3 && (
                                <Text size="xs" c="dimmed">
                                  +{memory.people.length - 3}
                                </Text>
                              )}
                            </Group>
                          </Group>
                        )}

                        {memory.emotions.length > 0 && (
                          <Group gap="xs" mb="sm">
                            <IconHeart size={14} />
                            <Group gap="xs">
                              {memory.emotions.slice(0, 3).map((emotion, idx) => (
                                <Badge 
                                  key={idx} 
                                  size="xs" 
                                  variant="light"
                                  color={getEmotionColor(emotion)}
                                >
                                  {emotion}
                                </Badge>
                              ))}
                            </Group>
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
                              setSelectedMemory(memory);
                              setViewModalOpen(true);
                              onMemorySelect?.(memory);
                            }}
                          >
                            <IconEye size={14} />
                          </ActionIcon>
                          <ActionIcon
                            variant="light"
                            size="sm"
                            onClick={() => {
                              // TODO: 编辑功能
                            }}
                          >
                            <IconEdit size={14} />
                          </ActionIcon>
                          {!memory.imageUrl && (
                            <ActionIcon
                              variant="light"
                              color="violet"
                              size="sm"
                              onClick={() => handleGenerateImage(memory)}
                              loading={generatingImage === memory.id}
                            >
                              <IconPhotoPlus size={14} />
                            </ActionIcon>
                          )}
                        </Group>
                        
                        <Group gap="xs">
                          {memory.audioUrl && (
                            <ActionIcon variant="light" color="blue" size="sm">
                              <IconMicrophone size={14} />
                            </ActionIcon>
                          )}
                          {memory.videoUrl && (
                            <ActionIcon variant="light" color="green" size="sm">
                              <IconVideo size={14} />
                            </ActionIcon>
                          )}
                          <ActionIcon
                            variant="light"
                            color="red"
                            size="sm"
                            onClick={() => handleDeleteMemory(memory.id)}
                          >
                            <IconTrash size={14} />
                          </ActionIcon>
                        </Group>
                      </Group>
                    </Stack>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          )}
        </Tabs.Panel>

        <Tabs.Panel value="timeline" pt="md">
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Title order={4} mb="md">记忆时间线</Title>
            <Timeline>
              {memories
                .sort((a, b) => b.date.getTime() - a.date.getTime())
                .map((memory) => (
                  <Timeline.Item
                    key={memory.id}
                    title={memory.title}
                    bullet={
                      memory.imageUrl ? (
                        <Avatar src={memory.imageUrl} size="sm" radius="xl" />
                      ) : (
                        <IconBrain size={16} />
                      )
                    }
                  >
                    <Text size="sm" c="dimmed" mb="xs">
                      {formatDate(memory.date)} {memory.location && `• ${memory.location}`}
                    </Text>
                    <Text size="sm" mb="sm" lineClamp={2}>
                      {memory.content}
                    </Text>
                    <Group gap="xs">
                      {memory.emotions.slice(0, 3).map((emotion, idx) => (
                        <Badge 
                          key={idx} 
                          size="xs" 
                          variant="light"
                          color={getEmotionColor(emotion)}
                        >
                          {emotion}
                        </Badge>
                      ))}
                    </Group>
                  </Timeline.Item>
                ))}
            </Timeline>
          </Card>
        </Tabs.Panel>

        <Tabs.Panel value="gallery" pt="md">
          <Grid>
            {memories
              .filter(memory => memory.imageUrl)
              .map((memory) => (
                <Grid.Col key={memory.id} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <Card shadow="sm" padding="xs" radius="md" withBorder>
                    <Image
                      src={memory.imageUrl}
                      alt={memory.title}
                      height={200}
                      radius="md"
                      fallbackSrc="/images/placeholder.jpg"
                      onClick={() => {
                        setSelectedMemory(memory);
                        setViewModalOpen(true);
                      }}
                      style={{ cursor: 'pointer' }}
                    />
                    <Text size="sm" fw={500} mt="xs" lineClamp={1}>
                      {memory.title}
                    </Text>
                    <Text size="xs" c="dimmed">
                      {formatDate(memory.date)}
                    </Text>
                  </Card>
                </Grid.Col>
              ))}
          </Grid>
        </Tabs.Panel>

        <Tabs.Panel value="awaken" pt="md">
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <AwakenPanel />
          </Card>
        </Tabs.Panel>

        <Tabs.Panel value="radio" pt="md">
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <RadioPanel />
          </Card>
        </Tabs.Panel>
      </Tabs>

      {/* 创建记忆改为二级页面 /memory/new */}

      {/* 查看详情模态框 */}
      <Modal
        opened={viewModalOpen}
        onClose={() => setViewModalOpen(false)}
        title={selectedMemory?.title || '记忆详情'}
        size="xl"
      >
        {selectedMemory && (
          <Stack gap="md">
            {selectedMemory.imageUrl && (
              <Image
                src={selectedMemory.imageUrl}
                alt={selectedMemory.title}
                radius="md"
                fallbackSrc="/images/placeholder.jpg"
              />
            )}
            
            <Group>
              <Badge color={getEmotionColor('快乐')}>
                {formatDate(selectedMemory.date)}
              </Badge>
              {selectedMemory.location && (
                <Badge variant="light">
                  <Group gap="xs">
                    <IconMapPin size={12} />
                    {selectedMemory.location}
                  </Group>
                </Badge>
              )}
              {selectedMemory.aiGenerated && (
                <Badge variant="light" color="violet">
                  AI生成
                </Badge>
              )}
            </Group>
            
            <Text>{selectedMemory.content}</Text>
            
            {selectedMemory.people.length > 0 && (
              <Box>
                <Text fw={500} mb="sm">相关人物：</Text>
                <Group gap="xs">
                  {selectedMemory.people.map((person, idx) => (
                    <Badge key={idx} variant="outline">
                      {person}
                    </Badge>
                  ))}
                </Group>
              </Box>
            )}
            
            {selectedMemory.emotions.length > 0 && (
              <Box>
                <Text fw={500} mb="sm">情感：</Text>
                <Group gap="xs">
                  {selectedMemory.emotions.map((emotion, idx) => (
                    <Badge 
                      key={idx} 
                      variant="light"
                      color={getEmotionColor(emotion)}
                    >
                      {emotion}
                    </Badge>
                  ))}
                </Group>
              </Box>
            )}
            
            {selectedMemory.tags.length > 0 && (
              <Box>
                <Text fw={500} mb="sm">标签：</Text>
                <Group gap="xs">
                  {selectedMemory.tags.map((tag, idx) => (
                    <Badge key={idx} variant="light">
                      {tag}
                    </Badge>
                  ))}
                </Group>
              </Box>
            )}
            
            <Group justify="flex-end" mt="md">
              {!selectedMemory.imageUrl && (
                <Button
                  leftSection={<IconPhotoPlus size={16} />}
                  variant="light"
                  color="violet"
                  onClick={() => {
                    handleGenerateImage(selectedMemory);
                    setViewModalOpen(false);
                  }}
                  loading={generatingImage === selectedMemory.id}
                >
                  生成图像
                </Button>
              )}
              <Button
                leftSection={<IconShare size={16} />}
                variant="light"
              >
                分享
              </Button>
            </Group>
          </Stack>
        )}
      </Modal>

      {/* 筛选模态框 */}
      <Modal
        opened={filterModalOpen}
        onClose={() => setFilterModalOpen(false)}
        title="筛选记忆"
        size="md"
      >
        <Stack gap="md">
          <Group grow>
            <DateInput
              label="开始日期"
              value={(currentFilter.dateRange?.start as Date | null) ?? null}
              onChange={(d) => {
                const start = (d as Date | null) ?? (currentFilter.dateRange?.start as Date | undefined) ?? new Date();
                const end = (currentFilter.dateRange?.end as Date | undefined) ?? start;
                setCurrentFilter({ ...currentFilter, dateRange: { start, end } });
              }}
            />
            <DateInput
              label="结束日期"
              value={(currentFilter.dateRange?.end as Date | null) ?? null}
              onChange={(d) => {
                const end = (d as Date | null) ?? (currentFilter.dateRange?.end as Date | undefined) ?? new Date();
                const start = (currentFilter.dateRange?.start as Date | undefined) ?? end;
                setCurrentFilter({ ...currentFilter, dateRange: { start, end } });
              }}
            />
          </Group>
          <TextInput
            label="地点"
            placeholder="筛选特定地点的记忆"
            value={currentFilter.location || ''}
            onChange={(e) => setCurrentFilter({ ...currentFilter, location: e.currentTarget.value })}
          />
          <MultiSelect
            label="标签"
            placeholder="选择标签"
            data={Array.from(new Set(memories.flatMap((m) => m.tags))).sort()}
            value={currentFilter.tags || []}
            onChange={(v) => setCurrentFilter({ ...currentFilter, tags: v })}
            searchable
            leftSection={<IconTag size={16} />}
          />
          <MultiSelect
            label="情感"
            placeholder="选择情感"
            data={Array.from(new Set(memories.flatMap((m) => m.emotions))).sort()}
            value={currentFilter.emotions || []}
            onChange={(v) => setCurrentFilter({ ...currentFilter, emotions: v })}
            searchable
            leftSection={<IconHeart size={16} />}
          />
          <Group grow>
            <Select
              label="排序字段"
              data={[{ value: 'date', label: '日期' }, { value: 'title', label: '标题' }, { value: 'created', label: '创建时间' }]}
              value={sortBy}
              onChange={(v) => setSortBy(((v as any) || 'date'))}
            />
            <Select
              label="排序方向"
              data={[{ value: 'desc', label: '降序' }, { value: 'asc', label: '升序' }]}
              value={sortOrder}
              onChange={(v) => setSortOrder(((v as any) || 'desc'))}
            />
          </Group>
          <MultiSelect
            label="相关人物"
            placeholder="选择相关人物"
            data={Array.from(new Set(memories.flatMap((m) => m.people))).sort()}
            value={currentFilter.people || []}
            onChange={(v) => setCurrentFilter({ ...currentFilter, people: v })}
            searchable
            leftSection={<IconUsers size={16} />}
          />
          
          <Group justify="flex-end" mt="md">
            <Button variant="light" onClick={() => setFilterModalOpen(false)}>
              取消
            </Button>
            <Button onClick={handleApplyFilter}>
              应用筛选
            </Button>
          </Group>
        </Stack>
      </Modal>

      {/* 同步策略选择 */}
      <Modal
        opened={syncModalOpen}
        onClose={() => setSyncModalOpen(false)}
        title="选择同步策略"
        size="sm"
      >
        <Stack gap="md">
          <Text c="dimmed" size="sm">
            仅同步非媒体字段。请选择本地与远端的冲突处理策略：
          </Text>
          <Select
            label="策略"
            data={[
              { value: 'local', label: '以上行为准（将本地元数据上行覆盖）' },
              { value: 'remote', label: '以下行为准（从服务器下行覆盖本地）' },
              { value: 'merge', label: '逐项合并（逐条选择保留本地/远端）' },
            ]}
            value={syncStrategy}
            onChange={(v) => setSyncStrategy(((v as any) || 'local'))}
          />
          {syncStrategy === 'local' && (
            <Select
              label="同步范围"
              data={[
                { value: 'all', label: '全部本地记忆' },
                { value: 'filtered', label: '仅当前筛选结果' },
              ]}
              value={filterSyncScope}
              onChange={(v) => setFilterSyncScope(((v as any) || 'all'))}
            />
          )}
          <Group justify="flex-end">
            <Button variant="light" onClick={() => setSyncModalOpen(false)}>取消</Button>
            <Button onClick={doSync}>开始同步</Button>
          </Group>
        </Stack>
      </Modal>

      {/* 冲突逐项合并 */}
      <Modal
        opened={conflictModalOpen}
        onClose={() => setConflictModalOpen(false)}
        title="逐项合并冲突"
        size="lg"
      >
        <Stack gap="md">
          {mergeCandidates.length === 0 ? (
            <Text c="dimmed">没有需要合并的条目</Text>
          ) : (
            mergeCandidates.map((m) => (
              <Card key={m.id} withBorder>
                <Stack gap="xs">
                  <Text fw={500}>{m.title}</Text>
                  <Text size="sm" c="dimmed" lineClamp={2}>{m.content}</Text>
                  <Group>
                    <Select
                      label="选择保留"
                      data={[{ value: 'local', label: '保留本地' }, { value: 'remote', label: '保留远端' }]}
                      value={mergeSelections[m.id] || 'local'}
                      onChange={(v) => setMergeSelections((s) => ({ ...s, [m.id]: ((v as any) || 'local') }))}
                      w={180}
                    />
                  </Group>
                </Stack>
              </Card>
            ))
          )}
          <Group justify="flex-end">
            <Button variant="light" onClick={() => setConflictModalOpen(false)}>取消</Button>
            <Button onClick={applyMerge}>应用合并</Button>
          </Group>
        </Stack>
      </Modal>
    </Stack>
  );
};