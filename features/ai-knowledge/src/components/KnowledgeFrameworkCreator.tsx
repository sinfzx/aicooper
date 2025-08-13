"use client";

import React, { useState } from 'react';
import { Stack, Group, TextInput, Textarea, Button, Alert } from '@mantine/core';
import { IconRobot } from '@tabler/icons-react';

interface KnowledgeFrameworkCreatorProps {
  mode?: 'ai' | 'manual';
  onCancel?: () => void;
  onCreated?: () => void;
}

export const KnowledgeFrameworkCreator: React.FC<KnowledgeFrameworkCreatorProps> = ({ mode, onCancel, onCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      if (typeof window !== 'undefined' && (window as any).__TAURI__) {
        const { invoke } = await import('@tauri-apps/api/core');
        await invoke('create_knowledge_framework', { framework: { title, description } });
      }
      onCreated?.();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Stack gap="md">
      {mode === 'ai' && (
        <Alert color="blue" variant="light" icon={<IconRobot size={16} />}>AI 将根据输入自动生成知识框架草案</Alert>
      )}
      <TextInput label="标题" placeholder="框架标题" value={title} onChange={(e) => setTitle(e.currentTarget.value)} required />
      <Textarea label="描述" placeholder="简要描述框架" value={description} onChange={(e) => setDescription(e.currentTarget.value)} minRows={3} required />
      <Group justify="flex-end">
        {onCancel && <Button variant="light" onClick={onCancel}>取消</Button>}
        <Button onClick={handleSubmit} loading={submitting} disabled={!title || !description}>保存</Button>
      </Group>
    </Stack>
  );
};


