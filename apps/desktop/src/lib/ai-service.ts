// 桌面端AI服务 - 直接调用用户配置的AI服务或兜底服务

import { ApiKeyConfig } from '@my-platform/types';

interface AIServiceResponse {
  success: boolean;
  data?: string;
  error?: string;
  tokens?: number;
  model?: string;
}

// Safely import Tauri API with fallback
const getTauriInvoke = async () => {
  try {
    if (typeof window !== 'undefined' && (window as any).__TAURI__) {
      const { invoke } = await import('@tauri-apps/api/core');
      return invoke;
    }
  } catch (error) {
    console.warn('Tauri API not available:', error);
  }
  return null;
};

// 调用 AI 服务
export async function callAIService(
  prompt: string,
  options: {
    model?: string;
    maxTokens?: number;
    temperature?: number;
  } = {}
): Promise<AIServiceResponse> {
  try {
    const invoke = await getTauriInvoke();

    if (!invoke) {
      // Web环境下直接调用兜底服务
      console.log('Web environment: using fallback Pollinations service');
      return await callPollinationsAPI(prompt, options);
    }

    // 获取用户的 API Keys，按优先级排序
    const apiKeys = await invoke<ApiKeyConfig[]>('get_api_keys');
    const activeKeys = apiKeys
      .filter((k) => k.isActive)
      .sort((a, b) => {
        // 默认的排在前面
        if (a.isDefault && !b.isDefault) return -1;
        if (!a.isDefault && b.isDefault) return 1;
        // 按创建时间排序
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });

    // 尝试使用用户配置的 API Keys
    for (const apiKey of activeKeys) {
      try {
        console.log(`Trying ${apiKey.provider} API...`);
        const response = await callProviderAPI(apiKey, prompt, options);
        if (response.success) {
          console.log(`Successfully called ${apiKey.provider}`);
          return response;
        }
      } catch (error) {
        console.warn(`Failed to call ${apiKey.provider}:`, error);
        continue;
      }
    }

    // 兜底：使用 Pollinations
    console.log('All user APIs failed, falling back to Pollinations service');
    return await callPollinationsAPI(prompt, options);
  } catch (error) {
    console.error('AI service error:', error);
    return {
      success: false,
      error: 'AI service unavailable',
    };
  }
}

// 调用具体的 AI 提供商 API
async function callProviderAPI(
  apiKey: ApiKeyConfig,
  prompt: string,
  options: any
): Promise<AIServiceResponse> {
  const { provider, apiKey: key, baseUrl, model: defaultModel } = apiKey;

  switch (provider) {
    case 'openai':
      return await callOpenAI(key, prompt, {
        ...options,
        baseUrl,
        model: options.model || defaultModel,
      });
    case 'anthropic':
      return await callAnthropic(key, prompt, {
        ...options,
        model: options.model || defaultModel,
      });
    case 'google':
      return await callGoogle(key, prompt, {
        ...options,
        baseUrl,
        model: options.model || defaultModel,
      });
    case 'openrouter':
      return await callOpenAI(key, prompt, {
        ...options,
        baseUrl: baseUrl || 'https://openrouter.ai/api/v1',
        model: options.model || defaultModel,
      });
    case 'qwen':
      return await callOpenAI(key, prompt, {
        ...options,
        baseUrl: baseUrl || 'https://dashscope.aliyuncs.com/compatible-mode/v1',
        model: options.model || defaultModel,
      });
    case 'deepseek':
      return await callOpenAI(key, prompt, {
        ...options,
        baseUrl: baseUrl || 'https://api.deepseek.com/v1',
        model: options.model || defaultModel,
      });
    case 'zhipu':
      return await callOpenAI(key, prompt, {
        ...options,
        baseUrl: baseUrl || 'https://open.bigmodel.cn/api/paas/v4',
        model: options.model || defaultModel,
      });
    case 'moonshot':
      return await callOpenAI(key, prompt, {
        ...options,
        baseUrl: baseUrl || 'https://api.moonshot.cn/v1',
        model: options.model || defaultModel,
      });
    case 'baidu':
      return await callBaidu(key, prompt, {
        ...options,
        baseUrl: baseUrl || 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1',
        model: options.model || defaultModel,
      });
    default:
      throw new Error(`Unsupported provider: ${provider}`);
  }
}

// OpenAI API 调用
async function callOpenAI(
  apiKey: string,
  prompt: string,
  options: any
): Promise<AIServiceResponse> {
  const url = options.baseUrl
    ? `${options.baseUrl.replace(/\/$/, '')}/chat/completions`
    : 'https://api.openai.com/v1/chat/completions';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: options.model || 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: options.maxTokens || 2000,
      temperature: options.temperature || 0.7,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI API error: ${response.status} - ${errorText}`);
  }

  const data = await response.json();

  return {
    success: true,
    data: data.choices[0].message.content,
    tokens: data.usage?.total_tokens,
    model: data.model,
  };
}

// Anthropic API 调用
async function callAnthropic(
  apiKey: string,
  prompt: string,
  options: any
): Promise<AIServiceResponse> {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: options.model || 'claude-3-sonnet-20240229',
      max_tokens: options.maxTokens || 2000,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Anthropic API error: ${response.status} - ${errorText}`);
  }

  const data = await response.json();

  return {
    success: true,
    data: data.content[0].text,
    tokens: data.usage?.input_tokens + data.usage?.output_tokens,
    model: data.model,
  };
}

// Google Gemini API 调用（文本）
async function callGoogle(
  apiKey: string,
  prompt: string,
  options: any
): Promise<AIServiceResponse> {
  const base = (
    options.baseUrl || 'https://generativelanguage.googleapis.com/v1beta'
  ).replace(/\/$/, '');
  const model = options.model || 'models/gemini-1.5-flash';
  const url = `${base}/${model}:generateContent?key=${encodeURIComponent(
    apiKey
  )}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        temperature: options.temperature ?? 0.7,
        maxOutputTokens: options.maxTokens ?? 2000,
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Google API error: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

  return {
    success: true,
    data: text,
    model: data?.model || model,
  };
}

// Baidu 文心（ERNIE） 简化文本接口
async function callBaidu(
  accessToken: string,
  prompt: string,
  options: any
): Promise<AIServiceResponse> {
  const base = (
    options.baseUrl || 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1'
  ).replace(/\/$/, '');
  const model = options.model || 'ernie-speed';
  const url = `${base}/wenxinworkshop/chat/completions?access_token=${encodeURIComponent(
    accessToken
  )}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Baidu API error: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  const text = data?.result || '';

  return { success: true, data: text, model };
}

// Pollinations API 调用（兜底服务）
async function callPollinationsAPI(
  prompt: string,
  options: any
): Promise<AIServiceResponse> {
  try {
    const response = await fetch('https://text.pollinations.ai/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: prompt }],
        model: 'openai',
        jsonMode: false,
      }),
    });

    if (!response.ok) {
      throw new Error(`Pollinations API error: ${response.status}`);
    }

    const data = await response.text();

    return {
      success: true,
      data: data,
      model: 'pollinations',
    };
  } catch (error) {
    console.error('Pollinations API error:', error);
    return {
      success: false,
      error: 'Pollinations service unavailable',
    };
  }
}

// 测试AI服务连接
export async function testAIService(
  apiKey: ApiKeyConfig
): Promise<AIServiceResponse> {
  const testPrompt = "请回复'测试成功'";

  try {
    const response = await callProviderAPI(apiKey, testPrompt, {
      maxTokens: 50,
      temperature: 0,
    });

    return response;
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
