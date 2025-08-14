// TTS 服务：优先 ElevenLabs，兜底 Pollinations 音频

type TTSOptions = {
  voiceId?: string;
  model?: string;
};

type TTSResponse =
  | { success: true; url: string }
  | { success: false; error: string };

async function fetchWithTimeout(
  input: RequestInfo,
  init: RequestInit = {},
  timeoutMs = 15000
): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(input, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(id);
  }
}

const getTauriInvoke = async () => {
  try {
    if (typeof window !== 'undefined' && (window as any).__TAURI__) {
      const { invoke } = await import('@tauri-apps/api/core');
      return invoke;
    }
  } catch {}
  return null;
};

export async function synthesizeSpeech(
  text: string,
  options: TTSOptions = {}
): Promise<TTSResponse> {
  try {
    const invoke = await getTauriInvoke();
    if (invoke) {
      const keys = (await invoke('get_api_keys')) as any[];
      const el = keys.find((k) => k.provider === 'elevenlabs' && k.is_active);
      if (el) {
        const res = await callElevenLabs(el.api_key, text, options);
        if (res.success) return res;
      }
    }
    // 兜底：Pollinations audio
    const url = `https://audio.pollinations.ai/polly?text=${encodeURIComponent(
      text
    )}`;
    return { success: true, url };
  } catch (e) {
    return {
      success: false,
      error: e instanceof Error ? e.message : 'Unknown error',
    };
  }
}

async function callElevenLabs(
  apiKey: string,
  text: string,
  opts: TTSOptions
): Promise<TTSResponse> {
  const voiceId = opts.voiceId || '21m00Tcm4TlvDq8ikWAM';
  const model = opts.model || 'eleven_multilingual_v2';
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream`;
  const response = await fetchWithTimeout(
    url,
    {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        'Content-Type': 'application/json',
        Accept: 'audio/mpeg',
      },
      body: JSON.stringify({ text, model_id: model }),
    },
    20000
  );
  if (!response.ok) {
    const err = await response.text();
    return {
      success: false,
      error: `ElevenLabs error: ${response.status} ${err}`,
    };
  }
  const blob = await response.blob();
  const urlObj = URL.createObjectURL(blob);
  return { success: true, url: urlObj };
}
