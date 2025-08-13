"use client";

import React, { useState, useMemo } from 'react';
import {
  Stack,
  Group,
  Title,
  Text,
  Card,
  Badge,
  Timeline,
  Avatar,
  Box,
  Select,
  Button,
  ActionIcon,
  Image,
  Paper,
  Center,
  Divider
} from '@mantine/core';
import {
  IconTimeline,
  IconCalendar,
  IconMapPin,
  IconUsers,
  IconHeart,
  IconBrain,
  IconPhoto,
  IconMicrophone,
  IconVideo,
  IconFilter,
  IconEye
} from '@tabler/icons-react';
import { useMemory } from '../hooks/useMemory';
import { Memory } from '../types';

interface MemoryTimelineProps {
  onMemorySelect?: (memory: Memory) => void;
}

export const MemoryTimeline: React.FC<MemoryTimelineProps> = ({
  onMemorySelect
}) => {
  const { memories, loading } = useMemory();
  const [viewMode, setViewMode] = useState<'all' | 'year' | 'month'>('all');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedMonth, setSelectedMonth] = useState<string>('');

  // 按时间分组记忆
  const groupedMemories = useMemo(() => {
    const sorted = [...memories].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    if (viewMode === 'all') {
      return sorted;
    }
    
    return sorted.filter(memory => {
      const memoryDate = new Date(memory.date);
      
      if (viewMode === 'year' && selectedYear) {
        return memoryDate.getFullYear().toString() === selectedYear;
      }
      
      if (viewMode === 'month' && selectedYear && selectedMonth) {
        return (
          memoryDate.getFullYear().toString() === selectedYear &&
          (memoryDate.getMonth() + 1).toString().padStart(2, '0') === selectedMonth
        );
      }
      
      return true;
    });
  }, [memories, viewMode, selectedYear, selectedMonth]);

  // 获取可用的年份
  const availableYears = useMemo(() => {
    const years = new Set(memories.map(m => new Date(m.date).getFullYear().toString()));
    return Array.from(years).sort((a, b) => b.localeCompare(a));
  }, [memories]);

  // 获取可用的月份
  const availableMonths = useMemo(() => {
    if (!selectedYear) return [];
    
    const months = new Set(
      memories
        .filter(m => new Date(m.date).getFullYear().toString() === selectedYear)
        .map(m => (new Date(m.date).getMonth() + 1).toString().padStart(2, '0'))
    );
    
    return Array.from(months).sort();
  }, [memories, selectedYear]);

  const formatDate = (date: Date | string) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
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

  const getTimelineBullet = (memory: Memory) => {
    if (memory.imageUrl) {
      return (
        <Avatar 
          src={memory.imageUrl} 
          size="md" 
          radius="xl"
          style={{ border: '2px solid var(--mantine-color-violet-4)' }}
        />
      );
    }
    
    return (
      <Avatar 
        color="violet" 
        size="md" 
        radius="xl"
      >
        <IconBrain size={20} />
      </Avatar>
    );
  };

  if (loading) {
    return (
      <Center h={400}>
        <Stack align="center">
          <IconTimeline size={64} color="var(--mantine-color-gray-5)" />
          <Text c="dimmed">加载时间线中...</Text>
        </Stack>
      </Center>
    );
  }

  return (
    <Stack gap="lg" p="md">
      {/* 头部 */}
      <Group justify="space-between">
        <Group>
          <IconTimeline size={28} color="var(--mantine-color-violet-6)" />
          <Box>
            <Title order={2}>记忆时间线</Title>
            <Text c="dimmed" size="sm">按时间顺序浏览你的记忆</Text>
          </Box>
        </Group>
      </Group>

      {/* 筛选控件 */}
      <Card shadow="sm" padding="md" radius="md" withBorder>
        <Group>
          <Select
            placeholder="选择视图模式"
            value={viewMode}
            onChange={(value) => {
              setViewMode(value as any);
              setSelectedYear('');
              setSelectedMonth('');
            }}
            data={[
              { value: 'all', label: '全部记忆' },
              { value: 'year', label: '按年份' },
              { value: 'month', label: '按月份' }
            ]}
            w={150}
          />
          
          {(viewMode === 'year' || viewMode === 'month') && (
            <Select
              placeholder="选择年份"
              value={selectedYear}
              onChange={(value) => {
                setSelectedYear(value || '');
                setSelectedMonth('');
              }}
              data={availableYears.map(year => ({ value: year, label: `${year}年` }))}
              w={120}
            />
          )}
          
          {viewMode === 'month' && selectedYear && (
            <Select
              placeholder="选择月份"
              value={selectedMonth}
              onChange={(value) => setSelectedMonth(value || '')}
              data={availableMonths.map(month => ({ 
                value: month, 
                label: `${parseInt(month)}月` 
              }))}
              w={100}
            />
          )}
          
          <Text size="sm" c="dimmed">
            共 {groupedMemories.length} 条记忆
          </Text>
        </Group>
      </Card>

      {/* 时间线 */}
      {groupedMemories.length === 0 ? (
        <Card shadow="sm" padding="xl" radius="md" withBorder>
          <Center>
            <Stack align="center" gap="md">
              <IconTimeline size={64} color="var(--mantine-color-gray-5)" />
              <Title order={3} ta="center">没有找到记忆</Title>
              <Text c="dimmed" ta="center">
                在选定的时间范围内没有记忆记录
              </Text>
            </Stack>
          </Center>
        </Card>
      ) : (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Timeline bulletSize={60} lineWidth={3}>
            {groupedMemories.map((memory, index) => {
              const isLastItem = index === groupedMemories.length - 1;
              
              return (
                <Timeline.Item
                  key={memory.id}
                  bullet={getTimelineBullet(memory)}
                  title={
                    <Group justify="space-between" align="flex-start">
                      <Box style={{ flex: 1 }}>
                        <Title order={4} mb="xs">
                          {memory.title}
                        </Title>
                        <Group gap="xs" mb="sm">
                          <Badge variant="light" color="blue" size="sm">
                            <Group gap="xs">
                              <IconCalendar size={12} />
                              {formatDate(memory.date)}
                            </Group>
                          </Badge>
                          {memory.location && (
                            <Badge variant="light" color="green" size="sm">
                              <Group gap="xs">
                                <IconMapPin size={12} />
                                {memory.location}
                              </Group>
                            </Badge>
                          )}
                        </Group>
                      </Box>
                      
                      <ActionIcon
                        variant="light"
                        size="sm"
                        onClick={() => onMemorySelect?.(memory)}
                      >
                        <IconEye size={16} />
                      </ActionIcon>
                    </Group>
                  }
                >
                  <Stack gap="md" mb={isLastItem ? 0 : "xl"}>
                    {/* 记忆内容 */}
                    <Paper p="md" bg="gray.0" radius="md">
                      <Text size="sm" style={{ whiteSpace: 'pre-wrap' }}>
                        {memory.content}
                      </Text>
                    </Paper>
                    
                    {/* 相关人物 */}
                    {memory.people && memory.people.length > 0 && (
                      <Box>
                        <Group gap="xs" mb="xs">
                          <IconUsers size={16} color="var(--mantine-color-gray-6)" />
                          <Text size="sm" fw={500} c="dimmed">
                            相关人物
                          </Text>
                        </Group>
                        <Group gap="xs">
                          {memory.people.map((person, idx) => (
                            <Badge key={idx} variant="outline" size="sm">
                              {person}
                            </Badge>
                          ))}
                        </Group>
                      </Box>
                    )}
                    
                    {/* 情感标签 */}
                    {memory.emotions && memory.emotions.length > 0 && (
                      <Box>
                        <Group gap="xs" mb="xs">
                          <IconHeart size={16} color="var(--mantine-color-gray-6)" />
                          <Text size="sm" fw={500} c="dimmed">
                            情感
                          </Text>
                        </Group>
                        <Group gap="xs">
                          {memory.emotions.map((emotion, idx) => (
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
                      </Box>
                    )}
                    
                    {/* 标签 */}
                    {memory.tags && memory.tags.length > 0 && (
                      <Group gap="xs">
                        {memory.tags.map((tag, idx) => (
                          <Badge key={idx} variant="light" size="xs">
                            #{tag}
                          </Badge>
                        ))}
                      </Group>
                    )}
                    
                    {/* 分隔线 */}
                    {!isLastItem && <Divider mt="md" />}
                  </Stack>
                </Timeline.Item>
              );
            })}
          </Timeline>
        </Card>
      )}
    </Stack>
  );
};