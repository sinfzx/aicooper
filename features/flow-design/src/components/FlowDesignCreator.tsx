"use client";

import React, { useState } from 'react';
import { Stack, Group, TextInput, Textarea, Select, Button, Alert, MultiSelect, Switch } from '@mantine/core';
import { IconRobot } from '@tabler/icons-react';
import { useFlowDesign } from '../hooks/useFlowDesign';
import { FlowAISchema } from '@my-platform/core';

interface FlowDesignCreatorProps {
  mode?: 'ai' | 'manual';
  onCancel?: () => void;
  onCreated?: (id: string) => void;
}

export const FlowDesignCreator: React.FC<FlowDesignCreatorProps> = ({ mode, onCancel, onCreated }) => {
  const { createFlow } = useFlowDesign();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [submitting, setSubmitting] = useState(false);
  const [tagIds, setTagIds] = useState<string[]>([]);
  const [availableTags, setAvailableTags] = useState<{ value: string; label: string }[]>([]);
  const [saveTarget, setSaveTarget] = useState<'local' | 'sync'>('local');
  const [generating, setGenerating] = useState(false);
  const [article, setArticle] = useState<string | undefined>(undefined);
  const [totalTime, setTotalTime] = useState<string | undefined>(undefined);
  const [steps, setSteps] = useState<any[] | undefined>(undefined);
  const [tools, setTools] = useState<any[] | undefined>(undefined);
  const [isPublic, setIsPublic] = useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        const API_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001').replace(/\/$/, '');
        const res = await fetch(`${API_BASE}/api/tags`);
        const data = await res.json();
        if (data.success) {
          setAvailableTags(
            data.data.map((t: any) => ({ value: t.id, label: t.parent ? `${t.parent.name} / ${t.name}` : t.name }))
          );
        }
      } catch {}
    })();
  }, []);

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      const flow = await createFlow({ title, description, difficulty, tags: tagIds, saveTarget, article, totalTime, steps, tools, isPublic } as any);
      onCreated?.(flow.id as unknown as string);
    } finally {
      setSubmitting(false);
    }
  };

  const extractJson = (text: string): any | null => {
    try {
      const fenced = text.match(/```json([\s\S]*?)```/i);
      const raw = fenced ? fenced[1] : text;
      const start = raw.indexOf('{');
      const end = raw.lastIndexOf('}');
      if (start >= 0 && end > start) {
        const slice = raw.substring(start, end + 1);
        return JSON.parse(slice);
      }
    } catch {}
    return null;
  };

  const aiGenerate = async () => {
    try {
      setGenerating(true);
      let template = '';
      try {
        const mod: any = await import('@/prompts/flow-prompts');
        template = mod.FLOW_CREATE_PROMPT || '';
      } catch {}
      const filled = template
        .replace('{title}', title || '')
        .replace('{description}', description || '')
        .replace('{goals}', '')
        .replace('{domain}', 'general')
        .replace('{difficulty}', difficulty || 'medium')
        .replace('{referenceUrls}', '');

      let text = '';
      if (typeof window !== 'undefined' && (window as any).__TAURI__) {
        const { invoke } = await import('@tauri-apps/api/core');
        const keys = await invoke<any[]>('get_api_keys');
        const def = keys.find((k) => k.is_default && k.is_active) || keys[0];
        if (def) {
          const messages = [{ role: 'user', content: filled }];
          text = await invoke<string>('chat_with_ai', {
            provider: def.provider,
            apiKey: def.api_key,
            model: def.model || 'gpt-3.5-turbo',
            messages,
            baseUrl: def.base_url || null,
          });
        }
      }
      if (!text) {
        const res = await fetch('https://text.pollinations.ai/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: [{ role: 'user', content: filled }], model: 'openai', jsonMode: false }),
        });
        text = await res.text();
      }

      const json = extractJson(text);
      const parsed = json ? FlowAISchema.safeParse(json) : { success: false } as any;
      if (parsed.success) {
        const fl = parsed.data.flow;
        setArticle(fl.article || undefined);
        setTotalTime(fl.totalTime || undefined);
        setSteps(fl.steps || []);
        setTools(fl.tools || []);
      }
    } finally {
      setGenerating(false);
    }
  };

  return (
    <Stack gap="md">
      {mode === 'ai' && (
        <Alert color="blue" variant="light" icon={<IconRobot size={16} />}>AI 将根据输入自动生成流程内容</Alert>
      )}
      <TextInput label="标题" placeholder="流程标题" value={title} onChange={(e) => setTitle(e.currentTarget.value)} required />
      <Textarea label="描述" placeholder="简要描述流程" value={description} onChange={(e) => setDescription(e.currentTarget.value)} minRows={3} required />
      <Select label="难度" value={difficulty} onChange={(v) => setDifficulty((v as any) || 'medium')} data={[{ value: 'easy', label: '简单' }, { value: 'medium', label: '中等' }, { value: 'hard', label: '困难' }]} />
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
      {mode === 'ai' && (
        <Group justify="flex-end">
          <Button variant="light" loading={generating} onClick={aiGenerate}>
            AI 生成草案
          </Button>
        </Group>
      )}
      <Group justify="flex-end">
        {onCancel && <Button variant="light" onClick={onCancel}>取消</Button>}
        <Button onClick={handleSubmit} loading={submitting} disabled={!title || !description}>保存</Button>
      </Group>
    </Stack>
  );
};


