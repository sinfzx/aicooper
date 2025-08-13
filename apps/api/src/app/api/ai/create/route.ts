import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { AICreateRequest } from '@my-platform/types';
import { callAIService } from '@/lib/ai-service';

// POST /api/ai/create - AI 辅助创建
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { prompt } = body;

    if (!prompt) {
      return NextResponse.json(
        { success: false, error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // 调用 AI 服务
    const aiResponse = await callAIService(session.user.id, prompt);

    if (!aiResponse.success) {
      return NextResponse.json(
        { success: false, error: aiResponse.error },
        { status: 500 }
      );
    }

    // 解析 AI 响应
    let parsedResponse;
    try {
      // 尝试从响应中提取 JSON
      const jsonMatch = aiResponse.data.match(/```json\s*([\s\S]*?)\s*```/);
      if (jsonMatch) {
        parsedResponse = JSON.parse(jsonMatch[1]);
      } else {
        parsedResponse = JSON.parse(aiResponse.data);
      }
    } catch (parseError) {
      console.error('Failed to parse AI response:', parseError);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to parse AI response',
          rawResponse: aiResponse.data
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        generated: parsedResponse,
        rawResponse: aiResponse.data
      }
    });
  } catch (error) {
    console.error('AI create error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create with AI assistance' },
      { status: 500 }
    );
  }
}