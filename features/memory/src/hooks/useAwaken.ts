import { useCallback, useState } from 'react';
import { notifications } from '@mantine/notifications';
import {
  IMAGE_PROMPT_TEMPLATE,
  KEYWORDS_PROMPT_TEMPLATE,
  RADIO_YEAR_SCRIPT_TEMPLATE,
} from '../prompts/templates';

const getTauriInvoke = async () => {
  try {
    if (typeof window !== 'undefined' && (window as any).__TAURI__) {
      const { invoke } = await import('@tauri-apps/api/core');
      return invoke;
    }
  } catch {}
  return null;
};

function fillTemplate(tpl: string, vars: Record<string, any>): string {
  return tpl.replace(/\{(\w+)\}/g, (_, k) => `${vars[k] ?? ''}`);
}

export function useAwaken() {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const callTrpc = useCallback(async (path: string) => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    const res = await fetch(
      `${baseUrl}/api/trpc/${encodeURIComponent(path)}?batch=1`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify([{ id: '1', json: null }]),
      }
    );
    if (!res.ok) throw new Error(`tRPC ${path} failed: ${res.status}`);
    const data = await res.json();
    return data?.[0]?.result?.data ?? null;
  }, []);

  const generateKeywords = useCallback(
    async (params: {
      startYear: number;
      endYear: number;
      region: string;
      language: string;
    }) => {
      setLoading(true);
      try {
        // 注入本地设置作为默认值
        let region = params.region;
        let language = params.language;
        try {
          const invoke = await getTauriInvoke();
          if (invoke) {
            const settings = await invoke<any>('get_settings');
            if (!region && settings?.birth_region)
              region = settings.birth_region;
            if (!language && (settings?.memory_language || settings?.language))
              language = settings.memory_language || settings.language;
          } else {
            const s = await callTrpc('settings.get');
            if (s) {
              if (!region && s.birthRegion) region = s.birthRegion;
              if (!language && (s.memoryLanguage || s.language))
                language = s.memoryLanguage || s.language;
            }
          }
        } catch {}
        const prompt = fillTemplate(KEYWORDS_PROMPT_TEMPLATE, {
          ...params,
          region,
          language,
        });
        const invoke = await getTauriInvoke();
        if (!invoke) throw new Error('Tauri not available');
        // 走桌面端 AI 服务（本地直连第三方）
        const resp = await invoke<any>('db_call_ai', {
          request: {
            provider: 'pollinations',
            prompt,
            jsonMode: true,
          },
        });
        let parsed: any = resp?.data || resp;
        if (typeof parsed === 'string') {
          try {
            parsed = JSON.parse(parsed);
          } catch {}
        }
        const list: string[] = Array.isArray(parsed?.keywords)
          ? parsed.keywords
          : [];
        setKeywords(list);
        return list;
      } catch (e) {
        notifications.show({
          title: '生成失败',
          message: '关键词生成失败',
          color: 'red',
        });
        throw e;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const saveKeywords = useCallback(async (fileName: string, list: string[]) => {
    const invoke = await getTauriInvoke();
    if (!invoke) return null;
    const json = JSON.stringify({ keywords: list }, null, 2);
    return await invoke<string>('save_keywords_file', {
      fileName,
      contentJson: json,
    });
  }, []);

  return { keywords, loading, generateKeywords, saveKeywords };
}
