import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/server/db';
import { getServerAuthSession } from '@/server/auth';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerAuthSession();
    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }
    const id = params.id;
    const body = await request.json();
    const { name, parentId, level } = body;

    const tag = await db.tag.update({
      where: { id },
      data: { name, parentId: parentId || null, level: level ?? undefined },
      include: { parent: true, children: true },
    });

    return NextResponse.json({ success: true, data: tag });
  } catch (error) {
    console.error('Update tag error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update tag' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerAuthSession();
    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }
    const id = params.id;

    // 级联清理关系（Prisma 会在多对多关联上处理断开）
    await db.tag.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete tag error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete tag' },
      { status: 500 }
    );
  }
}
