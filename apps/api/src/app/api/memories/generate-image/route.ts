import { NextRequest, NextResponse } from 'next/server';
import { generateImage } from '../../../lib/ai-service';

// POST /api/memories/generate-image - 生成AI图片
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { memoryId, prompt, style = 'artistic', aspectRatio = '16:9', quality = 'standard' } = body;
    
    if (!memoryId || !prompt) {
      return NextResponse.json(
        { error: 'Memory ID and prompt are required' },
        { status: 400 }
      );
    }
    
    // 构建完整的提示词
    const fullPrompt = `Create a ${style} style image for this memory: ${prompt}. Make it beautiful and emotionally resonant.`;
    
    // 调用AI服务生成图片
    const imageUrl = await generateImage({
      prompt: fullPrompt,
      style,
      aspectRatio,
      quality
    });
    
    return NextResponse.json({
      imageUrl,
      memoryId,
      aiGenerated: true
    });
  } catch (error) {
    console.error('Failed to generate image:', error);
    return NextResponse.json(
      { error: 'Failed to generate image' },
      { status: 500 }
    );
  }
}