"use client";

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { PageLayout } from '@/components/layout/PageLayout';
import { Group, Button } from '@mantine/core';
import { IconRoute } from '@tabler/icons-react';
import { FlowDesignCreator } from '@my-platform/flow-design';

export default function NewFlowPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams?.get('mode');

  return (
    <PageLayout
      title={mode === 'ai' ? 'AI 创建流程' : '创建流程'}
      description={mode === 'ai' ? '通过 AI 辅助生成流程设计' : '手动创建一个流程设计'}
      icon={<IconRoute size={28} color="var(--mantine-color-green-6)" />}
      breadcrumbs={[{ label: '首页', href: '/' }, { label: '流程设计', href: '/' }, { label: '创建流程' }]}
      onBack={() => router.back()}
      actions={<Group><Button variant="light" onClick={() => router.back()}>返回</Button></Group>}
    >
      <FlowDesignCreator mode={mode === 'ai' ? 'ai' : 'manual'} onCancel={() => router.back()} onCreated={() => router.push('/')} />
    </PageLayout>
  );
}


