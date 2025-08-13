"use client";

import React, { useState, useMemo } from 'react';
import {
  Stack,
  Group,
  Title,
  Text,
  Card,
  Badge,
  Grid,
  Image,
  Modal,
  Button,
  ActionIcon,
  Box,
  Center,
  Select,
  TextInput,
  Paper,
  Divider,
  Loader
} from '@mantine/core';
import {
  IconPhoto,
  IconSearch,
  IconFilter,
  IconEye,
  IconDownload,
  IconShare,
  IconRobot,
  IconCalendar,
  IconMapPin,
  IconHeart,
  IconPhotoPlus,
  IconX,
  IconChevronLeft,
  IconChevronRight
} from '@tabler/icons-react';
import { useMemory } from '../hooks/useMemory';
import { Memory } from '../types';

interface MemoryGalleryProps {
  onMemorySelect?: (memory: Memory) => void;
}

export const MemoryGallery: React.FC<MemoryGalleryProps> = ({
  onMemorySelect
}) => {
  const { memories, loading, generateImage } = useMemory();
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [filterType, setFilterType] = useState<'all' | 'ai' | 'original'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [generatingImage, setGeneratingImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 筛选有图片的记忆
  const memoriesWithImages = useMemo(() => {
    let filtered = memories.filter(memory => memory.imageUrl);
    
    // 按类型筛选
    if (filterType === 'ai') {
      filtered = filtered.filter(memory => memory.aiGenerated);
    } else if (filterType === 'original') {
      filtered = filtered.filter(memory => !memory.aiGenerated);
    }
    
    // 按搜索词筛选
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(memory => 
        memory.title.toLowerCase().includes(query) ||
        memory.content.toLowerCase().includes(query) ||
        memory.location?.toLowerCase().includes(query) ||
        (memory.tags && memory.tags.some(tag => tag.toLowerCase().includes(query)))
      );
    }
    
    return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [memories, filterType, searchQuery]);

  // 没有图片的记忆
  const memoriesWithoutImages = useMemo(() => {
    return memories.filter(memory => !memory.imageUrl);
  }, [memories]);

  const formatDate = (date: Date | string) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(dateObj);
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

  const handleImageClick = (memory: Memory) => {
    setSelectedMemory(memory);
    const index = memoriesWithImages.findIndex(m => m.id === memory.id);
    setCurrentImageIndex(index);
    setViewModalOpen(true);
    onMemorySelect?.(memory);
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

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedMemory) return;
    
    let newIndex = currentImageIndex;
    if (direction === 'prev') {
      newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : memoriesWithImages.length - 1;
    } else {
      newIndex = currentImageIndex < memoriesWithImages.length - 1 ? currentImageIndex + 1 : 0;
    }
    
    setCurrentImageIndex(newIndex);
    setSelectedMemory(memoriesWithImages[newIndex]);
  };

  if (loading) {
    return (
      <Center h={400}>
        <Stack align="center">
          <Loader size="lg" />
          <Text c="dimmed">加载画廊中...</Text>
        </Stack>
      </Center>
    );
  }

  return (
    <Stack gap="lg" p="md">
      {/* 头部 */}
      <Group justify="space-between">
        <Group>
          <IconPhoto size={28} color="var(--mantine-color-blue-6)" />
          <Box>
            <Title order={2}>记忆画廊</Title>
            <Text c="dimmed" size="sm">浏览你的记忆图像集合</Text>
          </Box>
        </Group>
        
        <Group>
          <Text size="sm" c="dimmed">
            {memoriesWithImages.length} 张图片
          </Text>
        </Group>
      </Group>

      {/* 搜索和筛选 */}
      <Group>
        <TextInput
          placeholder="搜索图片..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.currentTarget.value)}
          leftSection={<IconSearch size={16} />}
          style={{ flex: 1 }}
        />
        
        <Select
          placeholder="筛选类型"
          value={filterType}
          onChange={(value) => setFilterType(value as any)}
          data={[
            { value: 'all', label: '全部图片' },
            { value: 'ai', label: 'AI生成' },
            { value: 'original', label: '原始图片' }
          ]}
          w={120}
        />
      </Group>

      {/* 统计信息 */}
      <Grid>
        <Grid.Col span={{ base: 12, sm: 4 }}>
          <Paper p="md" withBorder>
            <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
              总图片数
            </Text>
            <Text size="xl" fw={700}>
              {memoriesWithImages.length}
            </Text>
          </Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 4 }}>
          <Paper p="md" withBorder>
            <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
              AI生成
            </Text>
            <Text size="xl" fw={700} c="violet">
              {memoriesWithImages.filter(m => m.aiGenerated).length}
            </Text>
          </Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 4 }}>
          <Paper p="md" withBorder>
            <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
              待生成
            </Text>
            <Text size="xl" fw={700} c="orange">
              {memoriesWithoutImages.length}
            </Text>
          </Paper>
        </Grid.Col>
      </Grid>

      {/* 图片网格 */}
      {memoriesWithImages.length === 0 ? (
        <Card shadow="sm" padding="xl" radius="md" withBorder>
          <Center>
            <Stack align="center" gap="md">
              <IconPhoto size={64} color="var(--mantine-color-gray-5)" />
              <Title order={3} ta="center">还没有图片</Title>
              <Text c="dimmed" ta="center" maw={400}>
                {memories.length === 0 
                  ? '先添加一些记忆，然后使用AI生成美丽的图像'
                  : '使用AI为你的记忆生成图像'
                }
              </Text>
            </Stack>
          </Center>
        </Card>
      ) : (
        <Grid>
          {memoriesWithImages.map((memory) => (
            <Grid.Col key={memory.id} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
              <Card shadow="sm" padding="xs" radius="md" withBorder>
                <Box pos="relative">
                  <Image
                    src={memory.imageUrl}
                    alt={memory.title}
                    height={200}
                    radius="md"
                    fallbackSrc="/images/placeholder.jpg"
                    onClick={() => handleImageClick(memory)}
                    style={{ cursor: 'pointer' }}
                  />
                  
                  {/* 覆盖层信息 */}
                  <Box
                    pos="absolute"
                    top={8}
                    right={8}
                    style={{
                      background: 'rgba(0, 0, 0, 0.7)',
                      borderRadius: '4px',
                      padding: '4px 8px'
                    }}
                  >
                    {memory.aiGenerated && (
                      <Badge size="xs" variant="light" color="violet">
                        AI
                      </Badge>
                    )}
                  </Box>
                </Box>
                
                <Stack gap="xs" mt="sm">
                  <Text size="sm" fw={500} lineClamp={1}>
                    {memory.title}
                  </Text>
                  
                  <Group justify="space-between">
                    <Text size="xs" c="dimmed">
                      {formatDate(memory.date)}
                    </Text>
                    {memory.location && (
                      <Group gap="xs">
                        <IconMapPin size={12} />
                        <Text size="xs" c="dimmed" lineClamp={1}>
                          {memory.location}
                        </Text>
                      </Group>
                    )}
                  </Group>
                  
                  {memory.emotions && memory.emotions.length > 0 && (
                    <Group gap="xs">
                      {memory.emotions.slice(0, 2).map((emotion, idx) => (
                        <Badge 
                          key={idx} 
                          size="xs" 
                          variant="light"
                          color={getEmotionColor(emotion)}
                        >
                          {emotion}
                        </Badge>
                      ))}
                      {memory.emotions.length > 2 && (
                        <Text size="xs" c="dimmed">
                          +{memory.emotions.length - 2}
                        </Text>
                      )}
                    </Group>
                  )}
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      )}

      {/* 待生成图片的记忆 */}
      {memoriesWithoutImages.length > 0 && (
        <Box>
          <Divider my="xl" />
          
          <Group mb="md">
            <IconPhotoPlus size={24} color="var(--mantine-color-orange-6)" />
            <Title order={3}>待生成图片的记忆</Title>
            <Badge variant="light" color="orange">
              {memoriesWithoutImages.length} 个
            </Badge>
          </Group>
          
          <Grid>
            {memoriesWithoutImages.slice(0, 6).map((memory) => (
              <Grid.Col key={memory.id} span={{ base: 12, sm: 6, md: 4 }}>
                <Card shadow="sm" padding="md" radius="md" withBorder>
                  <Stack gap="sm">
                    <Group justify="space-between">
                      <Text fw={500} size="sm" lineClamp={1}>
                        {memory.title}
                      </Text>
                      <Badge size="xs" variant="light">
                        {formatDate(memory.date)}
                      </Badge>
                    </Group>
                    
                    <Text size="xs" c="dimmed" lineClamp={2}>
                      {memory.content}
                    </Text>
                    
                    <Button
                      size="xs"
                      variant="light"
                      color="violet"
                      leftSection={<IconRobot size={12} />}
                      onClick={() => handleGenerateImage(memory)}
                      loading={generatingImage === memory.id}
                      fullWidth
                    >
                      AI生成图片
                    </Button>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
          
          {memoriesWithoutImages.length > 6 && (
            <Center mt="md">
              <Text size="sm" c="dimmed">
                还有 {memoriesWithoutImages.length - 6} 个记忆可以生成图片
              </Text>
            </Center>
          )}
        </Box>
      )}

      {/* 图片查看模态框 */}
      <Modal
        opened={viewModalOpen}
        onClose={() => setViewModalOpen(false)}
        size="xl"
        padding={0}
        withCloseButton={false}
        centered
      >
        {selectedMemory && (
          <Box pos="relative">
            {/* 关闭按钮 */}
            <ActionIcon
              pos="absolute"
              top={16}
              right={16}
              variant="filled"
              color="dark"
              size="lg"
              style={{ zIndex: 1000 }}
              onClick={() => setViewModalOpen(false)}
            >
              <IconX size={18} />
            </ActionIcon>
            
            {/* 导航按钮 */}
            {memoriesWithImages.length > 1 && (
              <>
                <ActionIcon
                  pos="absolute"
                  left={16}
                  top="50%"
                  variant="filled"
                  color="dark"
                  size="lg"
                  style={{ zIndex: 1000, transform: 'translateY(-50%)' }}
                  onClick={() => navigateImage('prev')}
                >
                  <IconChevronLeft size={18} />
                </ActionIcon>
                
                <ActionIcon
                  pos="absolute"
                  right={16}
                  top="50%"
                  variant="filled"
                  color="dark"
                  size="lg"
                  style={{ zIndex: 1000, transform: 'translateY(-50%)' }}
                  onClick={() => navigateImage('next')}
                >
                  <IconChevronRight size={18} />
                </ActionIcon>
              </>
            )}
            
            {/* 图片 */}
            <Image
              src={selectedMemory.imageUrl}
              alt={selectedMemory.title}
              mah="70vh"
              fit="contain"
              fallbackSrc="/images/placeholder.jpg"
            />
            
            {/* 信息面板 */}
            <Box p="lg" bg="white">
              <Stack gap="md">
                <Group justify="space-between">
                  <Title order={3}>{selectedMemory.title}</Title>
                  <Group>
                    {selectedMemory.aiGenerated && (
                      <Badge variant="light" color="violet">
                        AI生成
                      </Badge>
                    )}
                    <Badge variant="light">
                      {currentImageIndex + 1} / {memoriesWithImages.length}
                    </Badge>
                  </Group>
                </Group>
                
                <Text size="sm">{selectedMemory.content}</Text>
                
                <Group>
                  <Group gap="xs">
                    <IconCalendar size={16} />
                    <Text size="sm" c="dimmed">
                      {formatDate(selectedMemory.date)}
                    </Text>
                  </Group>
                  
                  {selectedMemory.location && (
                    <Group gap="xs">
                      <IconMapPin size={16} />
                      <Text size="sm" c="dimmed">
                        {selectedMemory.location}
                      </Text>
                    </Group>
                  )}
                </Group>
                
                {selectedMemory.emotions && selectedMemory.emotions.length > 0 && (
                  <Group gap="xs">
                    <IconHeart size={16} />
                    <Group gap="xs">
                      {selectedMemory.emotions.map((emotion, idx) => (
                        <Badge 
                          key={idx} 
                          variant="light"
                          color={getEmotionColor(emotion)}
                          size="sm"
                        >
                          {emotion}
                        </Badge>
                      ))}
                    </Group>
                  </Group>
                )}
                
                <Group justify="flex-end">
                  <Button
                    variant="light"
                    leftSection={<IconDownload size={16} />}
                    size="sm"
                  >
                    下载
                  </Button>
                  <Button
                    variant="light"
                    leftSection={<IconShare size={16} />}
                    size="sm"
                  >
                    分享
                  </Button>
                </Group>
              </Stack>
            </Box>
          </Box>
        )}
      </Modal>
    </Stack>
  );
};