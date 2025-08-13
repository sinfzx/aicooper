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
    loadMemories
  } = useMemory();

  const [activeTab, setActiveTab] = useState('list');
  // 创建改为二级页面
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentFilter, setCurrentFilter] = useState<MemoryFilter>({});
  const [generatingImage, setGeneratingImage] = useState<string | null>(null);
  const [generatingVideo, setGeneratingVideo] = useState(false);

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
        voiceoverText: '这些是我珍贵的记忆...'
      });
    } catch (error) {
      // Error handled in hook
    } finally {
      setGeneratingVideo(false);
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
    await loadMemories(currentFilter);
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
            生成视频
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
          <TextInput
            label="地点"
            placeholder="筛选特定地点的记忆"
            value={currentFilter.location || ''}
            onChange={(e) => setCurrentFilter({ ...currentFilter, location: e.currentTarget.value })}
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
    </Stack>
  );
};