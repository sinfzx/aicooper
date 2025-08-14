export type AppSettings = {
  theme: 'light' | 'dark' | 'system';
  language: 'zh-CN' | 'en-US';
  autoSave: boolean;
  defaultProvider: string;
  maxTokens: number;
  temperature: number;
  enableTelemetry: boolean;
  birthYear?: number;
  birthRegion?: string;
  memoryLanguage?: 'zh-CN' | 'en-US';
  imageStyleDefault?: 'realistic' | 'artistic' | 'cartoon' | 'vintage';
  imageAspectDefault?: '1:1' | '16:9' | '9:16' | '4:3';
};

const getTauriInvoke = async () => {
  try {
    if (typeof window !== 'undefined' && (window as any).__TAURI__) {
      const { invoke } = await import('@tauri-apps/api/core');
      return invoke;
    }
  } catch {}
  return null;
};

export async function getAppSettings(): Promise<AppSettings | null> {
  const invoke = await getTauriInvoke();
  if (!invoke) return null;
  try {
    const settings = await invoke<AppSettings>('get_settings');
    return settings;
  } catch {
    return null;
  }
}
