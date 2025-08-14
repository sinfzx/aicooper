import { NextRequest, NextResponse } from 'next/server';
import { getServerAuthSession } from '@/server/auth';
import { db } from '@/server/db';

// GET /api/memories/[id] - 获取单个记忆
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerAuthSession();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const userId = session.user.id;

    const memory = await db.memory.findFirst({
      where: {
        id: params.id,
        userId,
      },
    });

    if (!memory) {
      return NextResponse.json({ error: 'Memory not found' }, { status: 404 });
    }

    return NextResponse.json({
      ...memory,
      date: memory.date.toISOString(),
      createdAt: memory.createdAt.toISOString(),
      updatedAt: memory.updatedAt.toISOString(),
    });
  } catch (error) {
    console.error('Failed to fetch memory:', error);
    return NextResponse.json(
      { error: 'Failed to fetch memory' },
      { status: 500 }
    );
  }
}

// PUT /api/memories/[id] - 更新记忆
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerAuthSession();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const userId = session.user.id;
    const body = await request.json();

    const updateData: any = {};

    if (body.title !== undefined) updateData.title = body.title;
    if (body.content !== undefined) updateData.content = body.content;
    if (body.date !== undefined) updateData.date = new Date(body.date);
    if (body.location !== undefined) updateData.location = body.location;
    if (body.people !== undefined) updateData.people = body.people;
    if (body.tags !== undefined) updateData.tags = body.tags;
    if (body.emotions !== undefined) updateData.emotions = body.emotions;
    if (body.imageUrl !== undefined) updateData.imageUrl = body.imageUrl;
    if (body.audioUrl !== undefined) updateData.audioUrl = body.audioUrl;
    if (body.videoUrl !== undefined) updateData.videoUrl = body.videoUrl;
    if (body.aiGenerated !== undefined)
      updateData.aiGenerated = body.aiGenerated;
    if (body.visibility !== undefined) updateData.visibility = body.visibility;

    const memory = await db.memory.update({
      where: {
        id: params.id,
      },
      data: updateData,
    });

    return NextResponse.json({
      ...memory,
      date: memory.date.toISOString(),
      createdAt: memory.createdAt.toISOString(),
      updatedAt: memory.updatedAt.toISOString(),
    });
  } catch (error) {
    console.error('Failed to update memory:', error);
    return NextResponse.json(
      { error: 'Failed to update memory' },
      { status: 500 }
    );
  }
}

// DELETE /api/memories/[id] - 删除记忆
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerAuthSession();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const userId = session.user.id;

    const existing = await db.memory.findFirst({
      where: { id: params.id, userId },
    });
    if (!existing) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    await db.memory.delete({ where: { id: params.id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete memory:', error);
    return NextResponse.json(
      { error: 'Failed to delete memory' },
      { status: 500 }
    );
  }
}
