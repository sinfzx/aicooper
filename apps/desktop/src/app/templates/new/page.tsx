"use client";

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { PageLayout } from '@/components/layout/PageLayout';
import { Group, Button } from '@mantine/core';
import { IconTemplate } from '@tabler/icons-react';
import { PromptTemplateCreator } from '@my-platform/prompt-templates';

export default function NewTemplatePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams?.get('mode');
  const isEdit = searchParams?.get('edit') === '1';

  return (
    <PageLayout
      title={mode === 'ai' ? 'AI 创建模板' : '创建模板'}
      description={mode === 'ai' ? '通过 AI 辅助快速生成提示词模板' : '手动创建一个提示词模板'}
      icon={<IconTemplate size={28} color="var(--mantine-color-green-6)" />}
      breadcrumbs={[{ label: '首页', href: '/' }, { label: '提示词模板', href: '/' }, { label: '创建模板' }]}
      onBack={() => router.back()}
      actions={<Group><Button variant="light" onClick={() => router.back()}>返回</Button></Group>}
    >
      <PromptTemplateCreator mode={mode === 'ai' ? 'ai' : 'manual'} onCancel={() => router.back()} onCreated={() => router.push('/')} />
    </PageLayout>
  );
}


