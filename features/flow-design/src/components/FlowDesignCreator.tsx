"use client";

import React, { useState } from 'react';
import { Stack, Group, TextInput, Textarea, Select, Button, Alert, MultiSelect, Switch, Modal, Title, Paper, Timeline, Badge, Text } from '@mantine/core';
import { IconRobot } from '@tabler/icons-react';
import { useFlowDesign } from '../hooks/useFlowDesign';
// @ts-ignore 类型在 web 环境下可能不可用
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
  const [loadedDraft, setLoadedDraft] = useState(false);
  const validateForm = () => {
    if (!title?.trim()) return false;
    if (!description?.trim()) return false;
    if (!['easy','medium','hard'].includes(difficulty)) return false;
    return true;
  };
  // RHF 统一校验将作为后续升级接入（当前使用轻量校验，避免引入依赖差异）
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewData, setPreviewData] = useState<{ article?: string; totalTime?: string; steps?: any[]; tools?: any[] } | null>(null);

  React.useEffect(() => {
    (async () => {
      try {
        const API_BASE = (((globalThis as any).process?.env?.NEXT_PUBLIC_API_BASE_URL as string | undefined) || 'http://localhost:3001').replace(/\/$/, '');
        const res = await fetch(`${API_BASE}/api/tags`);
        const data = await res.json();
        if (data.success) {
          setAvailableTags(
            data.data.map((t: any) => ({ value: t.id, label: t.parent ? `${t.parent.name} / ${t.name}` : t.name }))
          );
        }
        // 草稿回填
        try {
          const search = typeof window !== 'undefined' ? window.location.search : '';
          const params = new URLSearchParams(search);
          const isEdit = params.get('edit') === '1';
          if (isEdit && !loadedDraft) {
            const raw = typeof window !== 'undefined' ? window.localStorage.getItem('flowDraft') : null;
            if (raw) {
              const draft = JSON.parse(raw);
              setTitle(draft.title || '');
              setDescription(draft.description || '');
              setDifficulty(draft.difficulty || 'medium');
              setArticle(draft.article || undefined);
              setTotalTime(draft.totalTime || undefined);
              setSteps(Array.isArray(draft.steps) ? draft.steps : []);
              setTools(Array.isArray(draft.tools) ? draft.tools : []);
              const tagNamesOrIds: string[] = Array.isArray(draft.tags) ? draft.tags : [];
              const mappedIds = tagNamesOrIds
                .map((x: any) => {
                  const found = (data.success ? data.data : []).find((t: any) => t.id === x || t.name === x);
                  return found ? found.id : (typeof x === 'string' ? x : null);
                })
                .filter(Boolean) as string[];
              setTagIds(mappedIds);
              setLoadedDraft(true);
            }
          }
        } catch {}
        // 默认保存目标读取设置
        if (typeof window !== 'undefined' && (window as any).__TAURI__) {
          // @ts-ignore
          const { invoke } = await import('@tauri-apps/api/core');
          const settings = (await invoke('get_settings')) as any;
          const def = settings?.default_save_targets?.flow;
          if (def === 'local' || def === 'sync') setSaveTarget(def);
        }
      } catch {}
    })();
  }, []);

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      if (!validateForm()) return;
      const flow = await createFlow({ title, description, difficulty, tags: tagIds, saveTarget, article, totalTime, steps, tools, isPublic } as any);
      try { if (typeof window !== 'undefined') window.localStorage.removeItem('flowDraft'); } catch {}
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
        // @ts-ignore 桌面端存在该路径
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
        // @ts-ignore
        const { invoke } = await import('@tauri-apps/api/core');
        const keys = (await invoke('get_api_keys')) as any[];
        const def = keys.find((k: any) => k.is_default && k.is_active) || keys[0];
        if (def) {
          const messages = [{ role: 'user', content: filled }];
          // @ts-ignore
          text = (await invoke('chat_with_ai', {
            provider: def.provider,
            apiKey: def.api_key,
            model: def.model || 'gpt-3.5-turbo',
            messages,
            baseUrl: def.base_url || null,
          })) as string;
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
        setPreviewData({
          article: fl.article || undefined,
          totalTime: fl.totalTime || undefined,
          steps: fl.steps || [],
          tools: fl.tools || [],
        });
        setPreviewOpen(true);
      }
    } finally {
      setGenerating(false);
    }
  };

  return (
    <Stack gap="md">
      <Modal opened={previewOpen} onClose={() => setPreviewOpen(false)} title="AI 生成预览" size="xl">
        {previewData && (
          <Stack gap="md">
            {previewData.article && (
              <Paper p="md" withBorder>
                <Title order={5} mb="xs">说明</Title>
                <Text size="sm" style={{ whiteSpace: 'pre-wrap' }}>{previewData.article}</Text>
              </Paper>
            )}
            <Group gap="md">
              {previewData.totalTime && <Badge variant="light">{previewData.totalTime}</Badge>}
              {Array.isArray(previewData.steps) && <Badge variant="light">{previewData.steps.length} 步骤</Badge>}
              {Array.isArray(previewData.tools) && <Badge variant="light">{previewData.tools.length} 工具</Badge>}
            </Group>
            {Array.isArray(previewData.steps) && previewData.steps.length > 0 && (
              <Paper p="md" withBorder>
                <Title order={5} mb="sm">步骤</Title>
                <Timeline>
                  {previewData.steps.map((s: any, idx: number) => (
                    <Timeline.Item key={idx} title={s.title}>
                      <Text size="sm" c="dimmed">{s.description}</Text>
                    </Timeline.Item>
                  ))}
                </Timeline>
              </Paper>
            )}
            <Group justify="flex-end">
              <Button variant="light" onClick={() => setPreviewOpen(false)}>取消</Button>
              <Button onClick={() => {
                setArticle(previewData.article);
                setTotalTime(previewData.totalTime);
                setSteps(previewData.steps);
                setTools(previewData.tools);
                setPreviewOpen(false);
              }}>应用回填</Button>
            </Group>
          </Stack>
        )}
      </Modal>
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


