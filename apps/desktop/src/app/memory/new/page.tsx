"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { PageLayout } from '@/components/layout/PageLayout';
import { Group, Button } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';
import { MemoryCreator } from '@my-platform/memory';

export default function NewMemoryPage() {
  const router = useRouter();

  return (
    <PageLayout
      title="创建记忆"
      description="记录你的珍贵时刻"
      icon={<IconPhoto size={28} color="var(--mantine-color-indigo-6)" />}
      breadcrumbs={[{ label: '首页', href: '/' }, { label: '记忆', href: '/' }, { label: '创建' }]}
      onBack={() => router.back()}
      actions={<Group><Button variant="light" onClick={() => router.back()}>返回</Button></Group>}
    >
      <MemoryCreator onCancel={() => router.back()} onMemoryCreated={() => router.push('/')} />
    </PageLayout>
  );
}


