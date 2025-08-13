"use client";

import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { PageLayout } from '@/components/layout/PageLayout';
import {
  Stack,
  Group,
  Title,
  Text,
  Card,
  Badge,
  Paper,
  Image,
  Button,
  ActionIcon,
  Alert
} from '@mantine/core';
import {
  IconPhoto,
  IconTrash,
  IconPhotoPlus,
  IconShare,
  IconMapPin,
  IconCalendar
} from '@tabler/icons-react';
import { useMemory, type Memory } from '@my-platform/memory';

export default function MemoryDetailPage() {
  const router = useRouter();
  const params = useParams();
  const memoryId = Array.isArray(params?.id) ? params?.id[0] : (params?.id as string);

  const { memories, loadMemories, deleteMemory, generateImage, updateMemory } = useMemory();
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        await loadMemories();
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [loadMemories]);

  const memory: Memory | undefined = useMemo(
    () => memories.find((m) => m.id === memoryId),
    [memories, memoryId]
  );

  const handleDelete = async () => {
    if (!memoryId) return;
    if (confirm('确定要删除这个记忆吗？此操作不可恢复！')) {
      await deleteMemory(memoryId);
      router.push('/');
    }
  };

  const handleGenerateImage = async () => {
    if (!memory) return;
    try {
      setGenerating(true);
      const url = await generateImage({
        memoryId: memory.id,
        prompt: `${memory.title}: ${memory.content}`,
        style: 'artistic',
        aspectRatio: '16:9',
        quality: 'standard'
      });
      await updateMemory(memory.id, { imageUrl: url, aiGenerated: true });
    } finally {
      setGenerating(false);
    }
  };

  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);

  return (
    <PageLayout
      title={memory?.title || '记忆详情'}
      description={memory ? '查看和管理这条记忆' : undefined}
      icon={<IconPhoto size={28} color="var(--mantine-color-indigo-6)" />}
      breadcrumbs={[{ label: '首页', href: '/' }, { label: '记忆', href: '/' }, { label: memory?.title || '详情' }]}
      onBack={() => router.back()}
      actions={
        memory && (
          <Group>
            {!memory.imageUrl && (
              <Button
                variant="light"
                leftSection={<IconPhotoPlus size={16} />}
                onClick={handleGenerateImage}
                loading={generating}
              >
                生成图像
              </Button>
            )}
            <ActionIcon variant="light" onClick={() => alert('分享功能开发中')}>
              <IconShare size={16} />
            </ActionIcon>
            <ActionIcon variant="light" color="red" onClick={handleDelete}>
              <IconTrash size={16} />
            </ActionIcon>
          </Group>
        )
      }
    >
      {loading ? (
        <Alert color="gray" variant="light">加载中...</Alert>
      ) : !memory ? (
        <Alert color="red" variant="light">未找到该记忆</Alert>
      ) : (
        <Stack gap="lg">
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Stack gap="md">
              {memory.imageUrl && (
                <Image src={memory.imageUrl} alt={memory.title} height={220} radius="md" fallbackSrc="/images/placeholder.jpg" />)
              }

              <Group gap="xs">
                <Badge variant="light" color={memory.visibility === 'private' ? 'gray' : memory.visibility === 'shared' ? 'blue' : 'green'}>
                  {memory.visibility === 'private' ? '私密' : memory.visibility === 'shared' ? '分享' : '公开'}
                </Badge>
                {memory.aiGenerated && (
                  <Badge variant="light" color="violet">AI生成</Badge>
                )}
              </Group>

              <Group gap="md">
                <Group gap="xs">
                  <IconCalendar size={14} />
                  <Text size="sm" c="dimmed">{formatDate(memory.date)}</Text>
                </Group>
                {memory.location && (
                  <Group gap="xs">
                    <IconMapPin size={14} />
                    <Text size="sm" c="dimmed">{memory.location}</Text>
                  </Group>
                )}
              </Group>

              <Text size="sm" c="dimmed" style={{ whiteSpace: 'pre-wrap' }}>{memory.content}</Text>

              {(memory.people?.length || 0) > 0 && (
                <Group gap="xs">
                  {memory.people.map((p, idx) => (
                    <Badge key={idx} size="xs" variant="outline">{p}</Badge>
                  ))}
                </Group>
              )}

              {(memory.emotions?.length || 0) > 0 && (
                <Group gap="xs">
                  {memory.emotions.map((e, idx) => (
                    <Badge key={idx} size="xs" variant="light" color="pink">{e}</Badge>
                  ))}
                </Group>
              )}

              {(memory.tags?.length || 0) > 0 && (
                <Group gap="xs">
                  {memory.tags.map((t, idx) => (
                    <Badge key={idx} size="xs" variant="light">#{t}</Badge>
                  ))}
                </Group>
              )}

              <Paper p="sm" bg="gray.0" radius="md">
                <Text size="xs" c="dimmed">创建于 {formatDate(memory.createdAt)}</Text>
              </Paper>
            </Stack>
          </Card>
        </Stack>
      )}
    </PageLayout>
  );
}


