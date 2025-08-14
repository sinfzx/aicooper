import { NextRequest, NextResponse } from 'next/server';
import { getServerAuthSession } from '@/server/auth';
import { db } from '@/server/db';

// GET /api/memories - 获取记忆列表
export async function GET(request: NextRequest) {
  try {
    const session = await getServerAuthSession();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { searchParams } = new URL(request.url);

    // 构建查询条件
    const where: any = { userId: session.user.id };

    // 日期范围筛选
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    if (startDate || endDate) {
      where.date = {};
      if (startDate) where.date.gte = new Date(startDate);
      if (endDate) where.date.lte = new Date(endDate);
    }

    // 地点筛选
    const location = searchParams.get('location');
    if (location) {
      where.location = {
        contains: location,
        mode: 'insensitive',
      };
    }

    // 标签筛选
    const tags = searchParams.get('tags');
    if (tags) {
      const tagList = tags.split(',');
      where.tags = {
        hasSome: tagList,
      };
    }

    // 情感筛选
    const emotions = searchParams.get('emotions');
    if (emotions) {
      const emotionList = emotions.split(',');
      where.emotions = {
        hasSome: emotionList,
      };
    }

    // 人物筛选
    const people = searchParams.get('people');
    if (people) {
      const peopleList = people.split(',');
      where.people = {
        hasSome: peopleList,
      };
    }

    // 媒体类型筛选
    const hasImage = searchParams.get('hasImage');
    if (hasImage !== null) {
      if (hasImage === 'true') {
        where.imageUrl = { not: null };
      } else {
        where.imageUrl = null;
      }
    }

    const hasAudio = searchParams.get('hasAudio');
    if (hasAudio !== null) {
      if (hasAudio === 'true') {
        where.audioUrl = { not: null };
      } else {
        where.audioUrl = null;
      }
    }

    const hasVideo = searchParams.get('hasVideo');
    if (hasVideo !== null) {
      if (hasVideo === 'true') {
        where.videoUrl = { not: null };
      } else {
        where.videoUrl = null;
      }
    }

    // 查询记忆
    const memories = await db.memory.findMany({
      where,
      orderBy: {
        date: 'desc',
      },
    });

    return NextResponse.json({
      memories: memories.map((memory) => ({
        ...memory,
        date: memory.date.toISOString(),
        createdAt: memory.createdAt.toISOString(),
        updatedAt: memory.updatedAt.toISOString(),
      })),
    });
  } catch (error) {
    console.error('Failed to fetch memories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch memories' },
      { status: 500 }
    );
  }
}

// POST /api/memories - 创建新记忆
export async function POST(request: NextRequest) {
  try {
    const session = await getServerAuthSession();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const body = await request.json();

    const memory = await db.memory.create({
      data: {
        title: body.title,
        content: body.content,
        date: new Date(body.date),
        location: body.location,
        people: body.people || [],
        tags: body.tags || [],
        emotions: body.emotions || [],
        visibility: body.visibility || 'private',
        userId: session.user.id,
      },
    });

    return NextResponse.json({
      ...memory,
      date: memory.date.toISOString(),
      createdAt: memory.createdAt.toISOString(),
      updatedAt: memory.updatedAt.toISOString(),
    });
  } catch (error) {
    console.error('Failed to create memory:', error);
    return NextResponse.json(
      { error: 'Failed to create memory' },
      { status: 500 }
    );
  }
}
