"use client";

import React, { useState } from 'react';
import { Stack, Group, TextInput, Textarea, Select, Button, MultiSelect, Switch } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { usePromptTemplate } from '../hooks/usePromptTemplate';
import { TemplateAISchema } from '@my-platform/core';

interface PromptTemplateCreatorProps {
  mode?: 'ai' | 'manual';
  onCancel?: () => void;
  onCreated?: () => void;
}

export const PromptTemplateCreator: React.FC<PromptTemplateCreatorProps> = ({ mode, onCancel, onCreated }) => {
  const { createTemplate } = usePromptTemplate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [tagIds, setTagIds] = useState<string[]>([]);
  const [availableTags, setAvailableTags] = useState<{ value: string; label: string }[]>([]);
  const [saveTarget, setSaveTarget] = useState<'local' | 'sync'>('local');
  const [generating, setGenerating] = useState(false);
  const [isPublic, setIsPublic] = useState(false);

  const extractJson = (text: string): any | null => {
    try {
      // 优先尝试代码块中的 JSON
      const fenced = text.match(/```json([\s\S]*?)```/i);
      const raw = fenced ? fenced[1] : text;
      // 粗略截取第一个大括号到最后一个大括号
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
      // 动态导入本地 prompt（仅桌面端有效）
      let promptTemplate = '';
      try {
        const mod: any = await import('@/prompts/template-prompts');
        promptTemplate = mod.TEMPLATE_CREATE_PROMPT || '';
      } catch {}
      const filled = promptTemplate
        .replace('{title}', title || '')
        .replace('{description}', description || '')
        .replace('{category}', category || '')
        .replace('{purpose}', '通用')
        .replace('{targetUser}', '通用用户');

      let text = '';
      // 优先走 Tauri 本地密钥
      if (typeof window !== 'undefined' && (window as any).__TAURI__) {
        const { invoke } = await import('@tauri-apps/api/core');
        const keys = await invoke<any[]>('get_api_keys');
        const def = keys.find((k) => k.is_default && k.is_active) || keys[0];
        if (def) {
          const messages = [
            { role: 'user', content: filled },
          ];
          text = await invoke<string>('chat_with_ai', {
            provider: def.provider,
            apiKey: def.api_key,
            model: def.model || 'gpt-3.5-turbo',
            messages,
            baseUrl: def.base_url || null,
          });
        }
      }
      // 兜底走 Pollinations 文本接口
      if (!text) {
        const res = await fetch('https://text.pollinations.ai/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: [{ role: 'user', content: filled }], model: 'openai', jsonMode: false }),
        });
        text = await res.text();
      }

      const json = extractJson(text);
      const parsed = json ? TemplateAISchema.safeParse(json) : { success: false } as any;
      if (parsed.success) {
        const tpl = parsed.data.template;
        setContent(tpl.prompt || content);
        // TODO: 参数与文章后续可回填
      }
    } finally {
      setGenerating(false);
    }
  };

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
      await createTemplate({ title, description, category, content, mode, tags: tagIds, saveTarget, isPublic });
      notifications.show({ title: '创建成功', message: '模板已创建', color: 'green', icon: <IconCheck size={16} /> });
      onCreated?.();
    } catch (error) {
      notifications.show({ title: '创建失败', message: '无法创建模板', color: 'red', icon: <IconX size={16} /> });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Stack gap="md">
      <TextInput label="标题" placeholder="模板标题" value={title} onChange={(e) => setTitle(e.currentTarget.value)} required />
      <Textarea label="描述" placeholder="简要描述模板用途" value={description} onChange={(e) => setDescription(e.currentTarget.value)} minRows={2} required />
      <Select label="分类" placeholder="选择分类" value={category} onChange={(v) => setCategory(v || '')} data={[ '写作', '编程', '分析', '翻译', '教育', '营销', '其他' ]} required />
      <Textarea label="模板内容" placeholder="输入模板内容，使用 {参数名} 表示可替换参数" value={content} onChange={(e) => setContent(e.currentTarget.value)} minRows={8} required />
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
        <Button onClick={handleSubmit} loading={submitting} disabled={!title || !description || !category || !content}>
          保存
        </Button>
      </Group>
    </Stack>
  );
};


