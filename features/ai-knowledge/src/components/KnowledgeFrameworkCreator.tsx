"use client";

import React, { useState } from 'react';
import { Stack, Group, TextInput, Textarea, Button, Alert, MultiSelect, Select, Switch } from '@mantine/core';
import { IconRobot } from '@tabler/icons-react';

interface KnowledgeFrameworkCreatorProps {
  mode?: 'ai' | 'manual';
  onCancel?: () => void;
  onCreated?: () => void;
}

export const KnowledgeFrameworkCreator: React.FC<KnowledgeFrameworkCreatorProps> = ({ mode, onCancel, onCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [domain, setDomain] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [tagIds, setTagIds] = useState<string[]>([]);
  const [availableTags, setAvailableTags] = useState<{ value: string; label: string }[]>([]);
  const [saveTarget, setSaveTarget] = useState<'local' | 'sync'>('local');
  const [isPublic, setIsPublic] = useState(false);
  const [loadedDraft, setLoadedDraft] = useState(false);

  const API_BASE = (
    ((globalThis as any).process?.env?.NEXT_PUBLIC_API_BASE_URL as string | undefined) ||
    'http://localhost:3001'
  ).replace(/\/$/, '');

  React.useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/tags`);
        const data = await res.json();
        if (data.success) {
          setAvailableTags(
            data.data.map((t: any) => ({ value: t.id, label: t.parent ? `${t.parent.name} / ${t.name}` : t.name }))
          );
        }
        if (typeof window !== 'undefined' && (window as any).__TAURI__) {
          const { invoke } = await import('@tauri-apps/api/core');
          const settings = (await invoke('get_settings')) as any;
          const def = settings?.default_save_targets?.framework;
          if (def === 'local' || def === 'sync') setSaveTarget(def);
        }
        // 草稿回填
        try {
          const search = typeof window !== 'undefined' ? window.location.search : '';
          const params = new URLSearchParams(search);
          const isEdit = params.get('edit') === '1';
          if (isEdit && !loadedDraft) {
            const raw = typeof window !== 'undefined' ? window.localStorage.getItem('frameworkDraft') : null;
            if (raw) {
              const draft = JSON.parse(raw);
              setTitle(draft.title || '');
              setDescription(draft.description || '');
              setDomain(draft.domain || '');
              const tagNamesOrIds: string[] = Array.isArray(draft.tags) ? draft.tags : [];
              setTagIds(tagNamesOrIds as string[]);
              setLoadedDraft(true);
            }
          }
        } catch {}
      } catch {}
    })();
  }, []);

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      if (saveTarget === 'local' && typeof window !== 'undefined' && (window as any).__TAURI__) {
        const { invoke } = await import('@tauri-apps/api/core');
        const payload = {
          id: '',
          name: title,
          title,
          description,
          domain: domain || 'general',
          version: 1,
          is_public: isPublic,
          local_only: true,
          created_at: 0,
          updated_at: 0,
          tags: tagIds,
          root_nodes: [],
        } as any;
        await invoke('save_knowledge_framework', { framework: payload });
      } else {
        const res = await fetch(`${API_BASE}/api/knowledge-frameworks`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, description, domain: domain || 'general', isPublic, tags: tagIds }),
        });
        const data = await res.json();
        if (!res.ok || !data?.success) throw new Error(data?.error || '创建失败');
      }
      try { if (typeof window !== 'undefined') window.localStorage.removeItem('frameworkDraft'); } catch {}
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
      <TextInput label="领域" placeholder="如 software, design..." value={domain} onChange={(e) => setDomain(e.currentTarget.value)} />
      <MultiSelect label="标签" placeholder="选择标签" data={availableTags} value={tagIds} onChange={setTagIds} searchable clearable />
      <Switch label="社区可见（isPublic）" checked={isPublic} onChange={(e) => setIsPublic(e.currentTarget.checked)} />
      <Select
        label="保存到"
        value={saveTarget}
        onChange={(v) => setSaveTarget(((v as any) || 'local'))}
        data={[
          { value: 'local', label: '仅本地' },
          { value: 'sync', label: '本地并同步到服务器' },
        ]}
      />
      <Group justify="flex-end">
        {onCancel && <Button variant="light" onClick={onCancel}>取消</Button>}
        <Button onClick={handleSubmit} loading={submitting} disabled={!title || !description}>保存</Button>
      </Group>
    </Stack>
  );
};


