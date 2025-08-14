import { useCallback, useMemo, useRef, useState } from 'react';
import { notifications } from '@mantine/notifications';
import { RADIO_YEAR_SCRIPT_TEMPLATE } from '../prompts/templates';

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

export function useRadio() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [scripts, setScripts] = useState<Record<number, string>>({});
  const [audios, setAudios] = useState<Record<number, string>>({});
  const currentYearRef = useRef<number | null>(null);
  const [progressSec, setProgressSec] = useState<number>(0);

  const getAppSettings = useCallback(async () => {
    try {
      const invoke = await getTauriInvoke();
      if (invoke) {
        return await invoke<any>('get_settings');
      }
      // Web 环境：从 tRPC settings.get 读取
      const baseUrl =
        typeof window !== 'undefined' ? window.location.origin : '';
      const res = await fetch(
        `${baseUrl}/api/trpc/${encodeURIComponent('settings.get')}?batch=1`,
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify([{ id: '1', json: null }]),
        }
      );
      if (!res.ok) return null;
      const data = await res.json();
      return data?.[0]?.result?.data ?? null;
    } catch {
      return null;
    }
  }, []);

  const generateYearScript = useCallback(async (year: number) => {
    setIsGenerating(true);
    try {
      const settings = (await getAppSettings()) || {};
      const prompt = fillTemplate(RADIO_YEAR_SCRIPT_TEMPLATE, {
        year,
        region: settings.birthRegion || 'CN',
        birthYear: settings.birthYear || year,
        language: settings.memoryLanguage || settings.language || 'zh-CN',
      });

      const invoke = await getTauriInvoke();
      if (!invoke) throw new Error('Tauri not available');
      const resp = await invoke<any>('db_call_ai', {
        request: { provider: 'pollinations', prompt, jsonMode: false },
      });
      const text =
        typeof resp?.data === 'string' ? resp.data : String(resp || '');
      await invoke('save_radio_script_file', { year, content: text });
      setScripts((prev) => ({ ...prev, [year]: text }));
      return text;
    } catch (e) {
      notifications.show({
        title: '生成失败',
        message: '脚本生成失败',
        color: 'red',
      });
      throw e;
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const synthesizeYearAudio = useCallback(
    async (year: number, text: string) => {
      try {
        const invoke = await getTauriInvoke();
        if (!invoke) throw new Error('Tauri not available');
        // 用桌面端 TTS 兜底（Pollinations audio）或 ElevenLabs
        const tts = await import('@/lib/tts-service');
        const res = await tts.synthesizeSpeech(text, {});
        if (res.success) {
          // 下载音频 Blob 并转 base64 保存到本地文件
          const audioUrl = res.url;
          const fileResp = await fetch(audioUrl);
          const blob = await fileResp.blob();
          const ab = await blob.arrayBuffer();
          const b64 = (() => {
            const bytes = new Uint8Array(ab);
            let binary = '';
            for (let i = 0; i < bytes.byteLength; i++)
              binary += String.fromCharCode(bytes[i]);
            // btoa expects binary string
            return typeof window !== 'undefined'
              ? window.btoa(binary)
              : Buffer.from(binary, 'binary').toString('base64');
          })();
          const path = await invoke<string>('save_radio_audio_file', {
            year,
            base64Audio: b64,
          });
          setAudios((prev) => ({ ...prev, [year]: path }));
          return path;
        } else {
          throw new Error(res.error || 'TTS failed');
        }
      } catch (e) {
        notifications.show({
          title: '合成失败',
          message: '语音合成失败',
          color: 'red',
        });
        throw e;
      }
    },
    []
  );

  const getSavedProgress = useCallback(async (): Promise<{
    year: number;
    seconds: number;
  } | null> => {
    try {
      const invoke = await getTauriInvoke();
      if (!invoke) return null;
      const settings = await invoke<any>('get_settings');
      const p = settings?.radio_progress;
      if (p && typeof p.year === 'number' && typeof p.seconds === 'number') {
        return { year: p.year, seconds: p.seconds };
      }
      return null;
    } catch {
      return null;
    }
  }, []);

  const persistProgress = useCallback(async (year: number, seconds: number) => {
    try {
      const invoke = await getTauriInvoke();
      if (!invoke) return;
      const settings = await invoke<any>('get_settings');
      const next = { ...(settings || {}), radio_progress: { year, seconds } };
      await invoke('save_settings', { settings: next });
    } catch {}
  }, []);

  const bindAudioProgress = useCallback(
    (el: HTMLAudioElement | null, year: number) => {
      if (!el) return;
      const onTimeUpdate = () => {
        setProgressSec(el.currentTime);
        persistProgress(year, el.currentTime);
      };
      el.addEventListener('timeupdate', onTimeUpdate);
    },
    [persistProgress]
  );

  return {
    isGenerating,
    scripts,
    audios,
    generateYearScript,
    synthesizeYearAudio,
    currentYearRef,
    progressSec,
    bindAudioProgress,
    getSavedProgress,
  };
}
