"use client";

import React, { useState, useMemo } from 'react';
import {
  Stack,
  Group,
  Title,
  Text,
  TextInput,
  Select,
  MultiSelect,
  Button,
  Card,
  Badge,
  Grid,
  Box,
  ActionIcon,
  Divider,
  Center,
  Loader
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import {
  IconSearch,
  IconFilter,
  IconCalendar,
  IconMapPin,
  IconUsers,
  IconTag,
  IconHeart,
  IconX,
  IconFilterOff,
  IconEye
} from '@tabler/icons-react';
import { useMemory } from '../hooks/useMemory';
import { Memory, MemorySearchFilters } from '../types';

interface MemorySearchProps {
  onMemorySelect?: (memory: Memory) => void;
  onFiltersChange?: (filters: MemorySearchFilters) => void;
}

export const MemorySearch: React.FC<MemorySearchProps> = ({
  onMemorySelect,
  onFiltersChange
}) => {
  const { memories, loading, searchMemories } = useMemory();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<MemorySearchFilters>({});
  const [searchResults, setSearchResults] = useState<Memory[]>([]);
  const [searching, setSearching] = useState(false);

  // 从现有记忆中提取选项
  const filterOptions = useMemo(() => {
    const locations = new Set<string>();
    const people = new Set<string>();
    const tags = new Set<string>();
    const emotions = new Set<string>();

    memories.forEach(memory => {
      if (memory.location) locations.add(memory.location);
      memory.people.forEach(person => people.add(person));
      memory.tags.forEach(tag => tags.add(tag));
      memory.emotions.forEach(emotion => emotions.add(emotion));
    });

    return {
      locations: Array.from(locations).sort(),
      people: Array.from(people).sort(),
      tags: Array.from(tags).sort(),
      emotions: Array.from(emotions).sort()
    };
  }, [memories]);

  const handleSearch = async () => {
    if (!searchQuery.trim() && Object.keys(filters).length === 0) {
      setSearchResults([]);
      return;
    }

    setSearching(true);
    try {
      const results = await searchMemories({
        query: searchQuery.trim() || undefined,
        ...filters
      });
      setSearchResults(results);
      onFiltersChange?.({ query: searchQuery.trim() || undefined, ...filters });
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setSearching(false);
    }
  };

  const handleFilterChange = (key: keyof MemorySearchFilters, value: any) => {
    const newFilters = { ...filters, [key]: value };
    if (value === null || value === undefined || (Array.isArray(value) && value.length === 0)) {
      delete newFilters[key];
    }
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters({});
    setSearchQuery('');
    setSearchResults([]);
    onFiltersChange?.({});
  };

  const hasActiveFilters = searchQuery.trim() || Object.keys(filters).length > 0;

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
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

  return (
    <Stack gap="lg" p="md">
      {/* 头部 */}
      <Group justify="space-between">
        <Group>
          <IconSearch size={28} color="var(--mantine-color-blue-6)" />
          <Box>
            <Title order={2}>搜索记忆</Title>
            <Text c="dimmed" size="sm">查找你的珍贵回忆</Text>
          </Box>
        </Group>
        
        {hasActiveFilters && (
          <Button
            variant="light"
            color="gray"
            leftSection={<IconFilterOff size={16} />}
            onClick={clearFilters}
          >
            清除筛选
          </Button>
        )}
      </Group>

      {/* 搜索框 */}
      <Card shadow="sm" padding="md" radius="md" withBorder>
        <Stack gap="md">
          <TextInput
            placeholder="搜索记忆内容、标题、地点..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.currentTarget.value)}
            leftSection={<IconSearch size={16} />}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            size="md"
          />
          
          <Group>
            <Button
              onClick={handleSearch}
              loading={searching}
              leftSection={<IconSearch size={16} />}
            >
              搜索
            </Button>
            
            <Text size="sm" c="dimmed">
              共 {memories.length} 条记忆
            </Text>
          </Group>
        </Stack>
      </Card>

      {/* 高级筛选 */}
      <Card shadow="sm" padding="md" radius="md" withBorder>
        <Stack gap="md">
          <Group>
            <IconFilter size={20} />
            <Title order={4}>高级筛选</Title>
          </Group>
          
          <Grid>
            <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
              <DateInput
                label="开始日期"
                placeholder="选择开始日期"
                value={filters.startDate}
                onChange={(date) => handleFilterChange('startDate', date)}
                leftSection={<IconCalendar size={16} />}
                clearable
              />
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
              <DateInput
                label="结束日期"
                placeholder="选择结束日期"
                value={filters.endDate}
                onChange={(date) => handleFilterChange('endDate', date)}
                leftSection={<IconCalendar size={16} />}
                clearable
              />
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
              <Select
                label="地点"
                placeholder="选择地点"
                data={filterOptions.locations}
                value={filters.location}
                onChange={(value) => handleFilterChange('location', value)}
                leftSection={<IconMapPin size={16} />}
                searchable
                clearable
              />
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
              <Select
                label="媒体类型"
                placeholder="选择媒体类型"
                data={[
                  { value: 'image', label: '有图片' },
                  { value: 'audio', label: '有音频' },
                  { value: 'video', label: '有视频' },
                  { value: 'ai-generated', label: 'AI生成' }
                ]}
                value={filters.mediaType}
                onChange={(value) => handleFilterChange('mediaType', value as any)}
                clearable
              />
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <MultiSelect
                label="相关人物"
                placeholder="选择相关人物"
                data={filterOptions.people}
                value={filters.people || []}
                onChange={(value) => handleFilterChange('people', value)}
                leftSection={<IconUsers size={16} />}
                searchable
                clearable
              />
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <MultiSelect
                label="情感标签"
                placeholder="选择情感标签"
                data={filterOptions.emotions}
                value={filters.emotions || []}
                onChange={(value) => handleFilterChange('emotions', value)}
                leftSection={<IconHeart size={16} />}
                searchable
                clearable
              />
            </Grid.Col>
            
            <Grid.Col span={12}>
              <MultiSelect
                label="标签"
                placeholder="选择标签"
                data={filterOptions.tags}
                value={filters.tags || []}
                onChange={(value) => handleFilterChange('tags', value)}
                leftSection={<IconTag size={16} />}
                searchable
                clearable
              />
            </Grid.Col>
          </Grid>
        </Stack>
      </Card>

      {/* 搜索结果 */}
      {searching && (
        <Center py="xl">
          <Stack align="center">
            <Loader size="lg" />
            <Text c="dimmed">搜索中...</Text>
          </Stack>
        </Center>
      )}

      {!searching && searchResults.length > 0 && (
        <Card shadow="sm" padding="md" radius="md" withBorder>
          <Stack gap="md">
            <Group justify="space-between">
              <Title order={4}>搜索结果</Title>
              <Badge variant="light">
                找到 {searchResults.length} 条记忆
              </Badge>
            </Group>
            
            <Divider />
            
            <Stack gap="md">
              {searchResults.map((memory) => (
                <Card key={memory.id} shadow="xs" padding="md" radius="md" withBorder>
                  <Group justify="space-between" align="flex-start">
                    <Box style={{ flex: 1 }}>
                      <Group mb="xs">
                        <Title order={5}>{memory.title}</Title>
                        <Badge size="xs" variant="light">
                          {formatDate(memory.date)}
                        </Badge>
                      </Group>
                      
                      <Text size="sm" c="dimmed" lineClamp={2} mb="sm">
                        {memory.content}
                      </Text>
                      
                      <Group gap="xs">
                        {memory.location && (
                          <Badge size="xs" variant="outline" color="green">
                            <Group gap="xs">
                              <IconMapPin size={10} />
                              {memory.location}
                            </Group>
                          </Badge>
                        )}
                        
                        {memory.people.slice(0, 2).map((person, idx) => (
                          <Badge key={idx} size="xs" variant="outline">
                            {person}
                          </Badge>
                        ))}
                        
                        {memory.people.length > 2 && (
                          <Text size="xs" c="dimmed">
                            +{memory.people.length - 2} 人
                          </Text>
                        )}
                        
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
                        
                        {memory.emotions.length > 3 && (
                          <Text size="xs" c="dimmed">
                            +{memory.emotions.length - 3}
                          </Text>
                        )}
                      </Group>
                      
                      {memory.tags.length > 0 && (
                        <Group gap="xs" mt="xs">
                          {memory.tags.slice(0, 4).map((tag, idx) => (
                            <Badge key={idx} size="xs" variant="light" color="gray">
                              #{tag}
                            </Badge>
                          ))}
                          {memory.tags.length > 4 && (
                            <Text size="xs" c="dimmed">
                              +{memory.tags.length - 4} 标签
                            </Text>
                          )}
                        </Group>
                      )}
                    </Box>
                    
                    <ActionIcon
                      variant="light"
                      onClick={() => onMemorySelect?.(memory)}
                    >
                      <IconEye size={16} />
                    </ActionIcon>
                  </Group>
                </Card>
              ))}
            </Stack>
          </Stack>
        </Card>
      )}

      {!searching && hasActiveFilters && searchResults.length === 0 && (
        <Card shadow="sm" padding="xl" radius="md" withBorder>
          <Center>
            <Stack align="center" gap="md">
              <IconSearch size={64} color="var(--mantine-color-gray-5)" />
              <Title order={3} ta="center">没有找到匹配的记忆</Title>
              <Text c="dimmed" ta="center" maw={400}>
                尝试调整搜索条件或筛选器，或者检查拼写是否正确
              </Text>
              <Button variant="light" onClick={clearFilters}>
                清除所有筛选条件
              </Button>
            </Stack>
          </Center>
        </Card>
      )}
    </Stack>
  );
};