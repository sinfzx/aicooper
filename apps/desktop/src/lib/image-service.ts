// 图像生成服务：优先 Stability，兜底 Pollinations

type ImageOptions = {
  width?: number;
  height?: number;
  model?: string;
  style?: string;
  seed?: number;
};

type ImageResponse =
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

async function withRetry<T>(
  fn: () => Promise<T>,
  attempts = 2,
  delayMs = 500
): Promise<T> {
  let lastErr: any;
  for (let i = 0; i <= attempts; i++) {
    try {
      return await fn();
    } catch (e) {
      lastErr = e;
      if (i < attempts)
        await new Promise((r) => setTimeout(r, delayMs * Math.pow(2, i)));
    }
  }
  throw lastErr;
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

export async function generateImage(
  prompt: string,
  options: ImageOptions = {}
): Promise<ImageResponse> {
  try {
    const invoke = await getTauriInvoke();
    if (invoke) {
      const keys = (await invoke('get_api_keys')) as any[];
      const stability = keys.find(
        (k) => k.provider === 'stability' && k.is_active
      );
      if (stability) {
        const res = await withRetry(
          () => callStability(stability.api_key, prompt, options),
          2
        );
        if (res.success) return res;
      }
    }
    // fallback to Pollinations
    const url = buildPollinationsImageUrl(prompt, options);
    return { success: true, url };
  } catch (e) {
    return {
      success: false,
      error: e instanceof Error ? e.message : 'Unknown error',
    };
  }
}

function buildPollinationsImageUrl(prompt: string, opts: ImageOptions): string {
  const width = opts.width ?? 768;
  const height = opts.height ?? 432;
  const stylePrompt = opts.style ? `${opts.style}, ${prompt}` : prompt;
  const encoded = encodeURIComponent(stylePrompt);
  const seed = opts.seed ?? Date.now();
  return `https://image.pollinations.ai/prompt/${encoded}?width=${width}&height=${height}&seed=${seed}`;
}

async function callStability(
  apiKey: string,
  prompt: string,
  opts: ImageOptions
): Promise<ImageResponse> {
  const engine = opts.model || 'stable-diffusion-v1-6';
  const url = `https://api.stability.ai/v1/generation/${engine}/text-to-image`;
  const width = opts.width ?? 768;
  const height = opts.height ?? 512;
  const response = await fetchWithTimeout(
    url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        text_prompts: [{ text: prompt }],
        width,
        height,
        samples: 1,
      }),
    },
    20000
  );
  if (!response.ok) {
    const err = await response.text();
    return {
      success: false,
      error: `Stability error: ${response.status} ${err}`,
    };
  }
  const data = await withRetry(() => response.json());
  const base64 = data?.artifacts?.[0]?.base64 as string | undefined;
  if (!base64) return { success: false, error: 'Invalid Stability response' };
  const blob = await (await fetch(`data:image/png;base64,${base64}`)).blob();
  const objectUrl = URL.createObjectURL(blob);
  return { success: true, url: objectUrl };
}
