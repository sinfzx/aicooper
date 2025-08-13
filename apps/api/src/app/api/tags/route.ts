import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/server/db';
import { getServerAuthSession } from '@/server/auth';

// GET /api/tags - 获取标签列表
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const level = searchParams.get('level');
    const parentId = searchParams.get('parentId');

    const where: any = {};

    if (level) {
      where.level = parseInt(level);
    }

    if (parentId) {
      where.parentId = parentId;
    } else if (parentId === null) {
      where.parentId = null;
    }

    const tags = await db.tag.findMany({
      where,
      include: {
        children: true,
        parent: true,
        _count: {
          select: {
            frameworks: true,
            templates: true,
            flows: true,
          },
        },
      },
      orderBy: {
        name: 'asc',
      },
    });

    return NextResponse.json({
      success: true,
      data: tags,
    });
  } catch (error) {
    console.error('Get tags error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch tags' },
      { status: 500 }
    );
  }
}

// POST /api/tags - 创建标签（管理员功能）
export async function POST(request: NextRequest) {
  try {
    const session = await getServerAuthSession();
    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // TODO: 检查管理员权限
    // if (!isAdmin(session.user)) {
    //   return NextResponse.json(
    //     { success: false, error: 'Admin access required' },
    //     { status: 403 }
    //   );
    // }

    const body = await request.json();
    const { name, parentId, level = 1 } = body;

    if (!name) {
      return NextResponse.json(
        { success: false, error: 'Name is required' },
        { status: 400 }
      );
    }

    // 检查重复
    const existing = await db.tag.findFirst({
      where: {
        name,
        parentId: parentId || null,
      },
    });

    if (existing) {
      return NextResponse.json(
        { success: false, error: 'Tag already exists' },
        { status: 400 }
      );
    }

    const tag = await db.tag.create({
      data: {
        name,
        parentId: parentId || null,
        level,
      },
      include: {
        parent: true,
        children: true,
      },
    });

    return NextResponse.json({
      success: true,
      data: tag,
    });
  } catch (error) {
    console.error('Create tag error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create tag' },
      { status: 500 }
    );
  }
}
