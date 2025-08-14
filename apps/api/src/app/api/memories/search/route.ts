import { NextRequest, NextResponse } from 'next/server';
import { getServerAuthSession } from '@/server/auth';
import { db } from '@/server/db';

// GET /api/memories/search - 搜索记忆
export async function GET(request: NextRequest) {
  try {
    const session = await getServerAuthSession();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '20');

    const skip = (page - 1) * pageSize;

    const userId = session.user.id;

    // 构建搜索条件
    const where = {
      userId,
      OR: [
        {
          title: {
            contains: query,
            mode: 'insensitive' as const,
          },
        },
        {
          content: {
            contains: query,
            mode: 'insensitive' as const,
          },
        },
        {
          location: {
            contains: query,
            mode: 'insensitive' as const,
          },
        },
        {
          tags: {
            has: query,
          },
        },
        {
          people: {
            has: query,
          },
        },
        {
          emotions: {
            has: query,
          },
        },
      ],
    };

    // 获取总数
    const total = await db.memory.count({ where });

    // 获取记忆列表
    const memories = await db.memory.findMany({
      where,
      orderBy: {
        date: 'desc',
      },
      skip,
      take: pageSize,
    });

    return NextResponse.json({
      memories: memories.map((memory) => ({
        ...memory,
        date: memory.date.toISOString(),
        createdAt: memory.createdAt.toISOString(),
        updatedAt: memory.updatedAt.toISOString(),
      })),
      total,
      page,
      pageSize,
      hasMore: skip + pageSize < total,
    });
  } catch (error) {
    console.error('Failed to search memories:', error);
    return NextResponse.json(
      { error: 'Failed to search memories' },
      { status: 500 }
    );
  }
}
