"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Stack, Group, Title, Text, Card, Badge, Button, Paper, Loader, Center, Table } from '@mantine/core';
import { IconCopy, IconDownload } from '@tabler/icons-react';

type TemplateDetail = {
  id: string;
  title: string;
  description: string;
  category: string;
  content: string;
  isPublic?: boolean;
  isBlocked?: boolean;
  parameters?: Array<{ name: string; description?: string; required?: boolean; type?: string; defaultValue?: string; }>;
  article?: string;
  tags?: Array<{ id: string; name: string; parent?: { name: string } }>;
};

export default function TemplateDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tpl, setTpl] = useState<TemplateDetail | null>(null);
  const API_BASE = (
    ((globalThis as any).process?.env?.NEXT_PUBLIC_API_BASE_URL as string | undefined) ||
    'http://localhost:3001'
  ).replace(/\/$/, '');

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/api/prompt-templates/${params.id}`, { signal: controller.signal });
        const data = await res.json();
        if (res.ok && data?.success) {
          const t = data.data;
          setTpl({
            id: t.id,
            title: t.title,
            description: t.description,
            category: t.category,
            content: t.content ?? t.prompt ?? '',
            isPublic: t.isPublic,
            isBlocked: t.isBlocked,
            parameters: Array.isArray(t.parameters) ? t.parameters : [],
            article: t.article || '',
            tags: Array.isArray(t.tags) ? t.tags : [],
          });
        } else {
          throw new Error(data?.error || '加载失败');
        }
      } catch (e: any) {
        setError(e?.message || '加载失败');
      } finally {
        setLoading(false);
      }
    })();
    return () => controller.abort();
  }, [params.id]);

  const copyToMine = async () => {
    if (!tpl) return;
    try {
      if (typeof window !== 'undefined' && (window as any).__TAURI__) {
        // @ts-ignore
        const { invoke } = await import('@tauri-apps/api/core');
        await invoke('save_local_prompt_template', {
          template: {
            id: '',
            title: tpl.title,
            description: tpl.description,
            category: tpl.category,
            content: tpl.content,
            parameters: tpl.parameters || [],
            article: tpl.article || null,
            tags: (tpl.tags || []).map((x) => x.name),
            is_public: false,
            local_only: true,
            created_at: 0,
            updated_at: 0,
          },
        });
        alert('已复制为我的模板（本地）');
      }
    } catch (e) {
      alert('保存失败');
    }
  };

  if (loading) {
    return (
      <Center h={400}>
        <Loader />
      </Center>
    );
  }

  if (error || !tpl) {
    return (
      <Center h={400}>
        <Text c="red">{error || '未找到模板'}</Text>
      </Center>
    );
  }

  return (
    <Stack p="md" gap="lg">
      <Group justify="space-between">
        <Group>
          <Badge color="blue" variant="light">{tpl.category}</Badge>
          {tpl.isBlocked && (
            <Badge color="red" variant="light">已屏蔽</Badge>
          )}
          {tpl.isPublic ? (
            <Badge color="green" variant="light">公开</Badge>
          ) : (
            <Badge color="gray" variant="light">私有</Badge>
          )}
        </Group>
        <Group>
          <Button leftSection={<IconCopy size={16} />} onClick={copyToMine}>
            复制为我的模板（本地）
          </Button>
          <Button variant="light" onClick={() => router.back()}>返回</Button>
        </Group>
      </Group>

      <Card withBorder>
        <Stack>
          <Title order={2}>{tpl.title}</Title>
          <Text c="dimmed">{tpl.description}</Text>
          <Paper p="md" bg="gray.0" withBorder>
            <Text size="sm" style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>{tpl.content}</Text>
          </Paper>

          {/* 标签展示与聚合跳转 */}
          {Array.isArray(tpl.tags) && tpl.tags.length > 0 && (
            <Group gap="xs">
              {tpl.tags.map((tg: any, idx: number) => {
                const isObj = tg && typeof tg === 'object';
                const id = isObj ? tg.id : tg;
                const name = isObj ? tg.name : tg;
                const label = isObj && tg.parent ? `${tg.parent.name} / ${name}` : name;
                return (
                  <Badge
                    key={idx}
                    size="xs"
                    variant="light"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.location.href = `/templates?tags=${encodeURIComponent(id)}`;
                      }
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {label}
                  </Badge>
                );
              })}
            </Group>
          )}

          {tpl.parameters && tpl.parameters.length > 0 && (
            <Card withBorder>
              <Title order={4} mb="sm">参数表</Title>
              <Table withColumnBorders stickyHeader>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>参数名</Table.Th>
                    <Table.Th>类型</Table.Th>
                    <Table.Th>必填</Table.Th>
                    <Table.Th>默认值</Table.Th>
                    <Table.Th>说明</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {tpl.parameters.map((p, idx) => (
                    <Table.Tr key={idx}>
                      <Table.Td>{p.name}</Table.Td>
                      <Table.Td>{p.type || '-'}</Table.Td>
                      <Table.Td>{p.required ? '是' : '否'}</Table.Td>
                      <Table.Td>{p.defaultValue || '-'}</Table.Td>
                      <Table.Td>{p.description || '-'}</Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </Card>
          )}

          {tpl.article && (
            <Card withBorder>
              <Title order={4} mb="sm">说明</Title>
              <Paper p="md" bg="gray.0" withBorder>
                <Text size="sm" style={{ whiteSpace: 'pre-wrap' }}>{tpl.article}</Text>
              </Paper>
            </Card>
          )}
        </Stack>
      </Card>
    </Stack>
  );
}


