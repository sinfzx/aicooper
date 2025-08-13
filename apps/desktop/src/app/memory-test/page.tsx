"use client";

import React, { useEffect, useState } from 'react';
import { Container, Title, Text, Stack, Card, Button, Group, Badge, Loader } from '@mantine/core';

interface Memory {
  id: string;
  title: string;
  content: string;
  date: string;
  location?: string;
  people: string[];
  tags: string[];
  emotions: string[];
  visibility: string;
  createdAt: string;
  updatedAt: string;
}

export default function MemoryTestPage() {
  const [memories, setMemories] = useState<Memory[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadMemories = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/memories');
      if (!response.ok) {
        throw new Error('Failed to load memories');
      }
      const data = await response.json();
      setMemories(data.memories || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMemories();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Container size="xl" py="md">
      <Stack gap="lg">
        <div>
          <Title order={1}>记忆功能测试</Title>
          <Text c="dimmed" size="lg">
            测试记忆 API 和数据显示
          </Text>
        </div>
        
        <Group>
          <Button onClick={loadMemories} loading={loading}>
            重新加载
          </Button>
          <Text size="sm" c="dimmed">
            共 {memories.length} 条记忆
          </Text>
        </Group>

        {error && (
          <Card shadow="sm" padding="md" radius="md" withBorder>
            <Text c="red">错误: {error}</Text>
          </Card>
        )}

        {loading ? (
          <Card shadow="sm" padding="xl" radius="md" withBorder>
            <Group justify="center">
              <Loader size="md" />
              <Text>加载中...</Text>
            </Group>
          </Card>
        ) : (
          <Stack gap="md">
            {memories.map((memory) => (
              <Card key={memory.id} shadow="sm" padding="lg" radius="md" withBorder>
                <Stack gap="md">
                  <Group justify="space-between">
                    <Title order={3}>{memory.title}</Title>
                    <Badge variant="light" color="blue">
                      {formatDate(memory.date)}
                    </Badge>
                  </Group>
                  
                  <Text>{memory.content}</Text>
                  
                  {memory.location && (
                    <Group gap="xs">
                      <Text size="sm" fw={500}>地点:</Text>
                      <Badge variant="outline" size="sm">{memory.location}</Badge>
                    </Group>
                  )}
                  
                  {memory.people.length > 0 && (
                    <Group gap="xs">
                      <Text size="sm" fw={500}>人物:</Text>
                      {memory.people.map((person, idx) => (
                        <Badge key={idx} variant="outline" size="sm" color="green">
                          {person}
                        </Badge>
                      ))}
                    </Group>
                  )}
                  
                  {memory.emotions.length > 0 && (
                    <Group gap="xs">
                      <Text size="sm" fw={500}>情感:</Text>
                      {memory.emotions.map((emotion, idx) => (
                        <Badge key={idx} variant="light" size="sm" color="pink">
                          {emotion}
                        </Badge>
                      ))}
                    </Group>
                  )}
                  
                  {memory.tags.length > 0 && (
                    <Group gap="xs">
                      <Text size="sm" fw={500}>标签:</Text>
                      {memory.tags.map((tag, idx) => (
                        <Badge key={idx} variant="light" size="sm">
                          #{tag}
                        </Badge>
                      ))}
                    </Group>
                  )}
                  
                  <Group justify="space-between">
                    <Badge variant="light" color="gray" size="xs">
                      {memory.visibility}
                    </Badge>
                    <Text size="xs" c="dimmed">
                      创建于 {formatDate(memory.createdAt)}
                    </Text>
                  </Group>
                </Stack>
              </Card>
            ))}
          </Stack>
        )}
      </Stack>
    </Container>
  );
}