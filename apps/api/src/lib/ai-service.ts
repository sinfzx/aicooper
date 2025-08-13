import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface AIServiceResponse {
  success: boolean;
  data?: string;
  error?: string;
  tokens?: number;
  model?: string;
}

// 调用 AI 服务
export async function callAIService(
  userId: string,
  prompt: string,
  options: {
    model?: string;
    maxTokens?: number;
    temperature?: number;
  } = {}
): Promise<AIServiceResponse> {
  try {
    // 获取用户的 API Keys，按优先级排序
    const apiKeys = await prisma.apiKey.findMany({
      where: {
        userId,
        isActive: true
      },
      orderBy: [
        { provider: 'asc' }, // 可以根据优先级调整
        { createdAt: 'desc' }
      ]
    });

    // 尝试使用用户配置的 API Keys
    for (const apiKey of apiKeys) {
      try {
        const response = await callProviderAPI(apiKey, prompt, options);
        if (response.success) {
          // 记录使用统计
          await recordUsage(userId, apiKey.provider, response.tokens);
          return response;
        }
      } catch (error) {
        console.warn(`Failed to call ${apiKey.provider}:`, error);
        continue;
      }
    }

    // 兜底：使用 Pollinations
    console.log('Falling back to Pollinations service');
    return await callPollinationsAPI(prompt, options);

  } catch (error) {
    console.error('AI service error:', error);
    return {
      success: false,
      error: 'AI service unavailable'
    };
  }
}

// 调用具体的 AI 提供商 API
async function callProviderAPI(
  apiKey: any,
  prompt: string,
  options: any
): Promise<AIServiceResponse> {
  const { provider, key } = apiKey;

  switch (provider) {
    case 'openai':
      return await callOpenAI(key, prompt, options);
    case 'anthropic':
      return await callAnthropic(key, prompt, options);
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
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: options.model || 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: prompt }
      ],
      max_tokens: options.maxTokens || 2000,
      temperature: options.temperature || 0.7
    })
  });

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.status}`);
  }

  const data = await response.json();
  
  return {
    success: true,
    data: data.choices[0].message.content,
    tokens: data.usage?.total_tokens,
    model: data.model
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
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: options.model || 'claude-3-sonnet-20240229',
      max_tokens: options.maxTokens || 2000,
      messages: [
        { role: 'user', content: prompt }
      ]
    })
  });

  if (!response.ok) {
    throw new Error(`Anthropic API error: ${response.status}`);
  }

  const data = await response.json();
  
  return {
    success: true,
    data: data.content[0].text,
    tokens: data.usage?.input_tokens + data.usage?.output_tokens,
    model: data.model
  };
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
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages: [
          { role: 'user', content: prompt }
        ],
        model: 'openai',
        jsonMode: false
      })
    });

    if (!response.ok) {
      throw new Error(`Pollinations API error: ${response.status}`);
    }

    const data = await response.text();
    
    return {
      success: true,
      data: data,
      model: 'pollinations'
    };
  } catch (error) {
    console.error('Pollinations API error:', error);
    return {
      success: false,
      error: 'Pollinations service unavailable'
    };
  }
}

// 记录使用统计
async function recordUsage(
  userId: string,
  provider: string,
  tokens?: number
) {
  try {
    await prisma.usage.create({
      data: {
        userId,
        featureId: 'ai-assistant',
        action: 'generate',
        tokens: tokens || 0,
        metadata: {
          provider,
          timestamp: new Date().toISOString()
        }
      }
    });
  } catch (error) {
    console.error('Failed to record usage:', error);
  }
}

// 图片生成接口
interface ImageGenerationOptions {
  prompt: string;
  style?: 'realistic' | 'artistic' | 'cartoon' | 'vintage';
  aspectRatio?: '1:1' | '16:9' | '9:16' | '4:3';
  quality?: 'standard' | 'hd';
}

// 生成图片
export async function generateImage(options: ImageGenerationOptions): Promise<string> {
  try {
    // 使用 Pollinations 图片生成服务
    const { prompt, style = 'artistic', aspectRatio = '16:9' } = options;
    
    // 构建样式提示词
    let stylePrompt = prompt;
    switch (style) {
      case 'realistic':
        stylePrompt = `photorealistic, high quality, detailed, ${prompt}`;
        break;
      case 'artistic':
        stylePrompt = `artistic, beautiful, creative, ${prompt}`;
        break;
      case 'cartoon':
        stylePrompt = `cartoon style, animated, colorful, ${prompt}`;
        break;
      case 'vintage':
        stylePrompt = `vintage style, retro, nostalgic, ${prompt}`;
        break;
    }
    
    // 添加宽高比信息
    const dimensions = getDimensions(aspectRatio);
    
    // 调用 Pollinations 图片生成 API
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(stylePrompt)}?width=${dimensions.width}&height=${dimensions.height}&seed=${Math.floor(Math.random() * 1000000)}`;
    
    // 验证图片是否可访问
    const response = await fetch(imageUrl, { method: 'HEAD' });
    if (!response.ok) {
      throw new Error('Failed to generate image');
    }
    
    return imageUrl;
  } catch (error) {
    console.error('Image generation error:', error);
    throw new Error('Failed to generate image');
  }
}

// 获取尺寸
function getDimensions(aspectRatio: string) {
  switch (aspectRatio) {
    case '1:1':
      return { width: 512, height: 512 };
    case '16:9':
      return { width: 768, height: 432 };
    case '9:16':
      return { width: 432, height: 768 };
    case '4:3':
      return { width: 640, height: 480 };
    default:
      return { width: 512, height: 512 };
  }
}