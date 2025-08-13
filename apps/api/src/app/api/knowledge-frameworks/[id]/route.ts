import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/server/db';
import { getServerAuthSession } from '@/server/auth';

// GET /api/knowledge-frameworks/[id]
export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const item = await db.knowledgeFramework.findUnique({
      where: { id: params.id },
      include: {
        tags: true,
        author: { select: { id: true, name: true } },
      },
    });
    if (!item)
      return NextResponse.json(
        { success: false, error: 'Not found' },
        { status: 404 }
      );
    return NextResponse.json({ success: true, data: item });
  } catch (e) {
    console.error('Get framework error:', e);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch framework' },
      { status: 500 }
    );
  }
}

// PUT /api/knowledge-frameworks/[id]
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerAuthSession();
    if (!session?.user)
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );

    const body = await request.json();
    const { name, description, domain, isPublic, tags } = body;

    const updated = await db.knowledgeFramework.update({
      where: { id: params.id },
      data: {
        ...(name !== undefined ? { name } : {}),
        ...(description !== undefined ? { description } : {}),
        ...(domain !== undefined ? { domain } : {}),
        ...(isPublic !== undefined ? { isPublic } : {}),
        ...(Array.isArray(tags)
          ? { tags: { set: [], connect: tags.map((id: string) => ({ id })) } }
          : {}),
      },
      include: { tags: true, author: { select: { id: true, name: true } } },
    });
    return NextResponse.json({ success: true, data: updated });
  } catch (e) {
    console.error('Update framework error:', e);
    return NextResponse.json(
      { success: false, error: 'Failed to update framework' },
      { status: 500 }
    );
  }
}

// DELETE /api/knowledge-frameworks/[id]
export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerAuthSession();
    if (!session?.user)
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );

    await db.knowledgeFramework.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true, data: { id: params.id } });
  } catch (e) {
    console.error('Delete framework error:', e);
    return NextResponse.json(
      { success: false, error: 'Failed to delete framework' },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// GET /api/knowledge-frameworks/[id] - 获取单个知识框架
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const framework = await prisma.knowledgeFramework.findUnique({
      where: { id: params.id },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        nodes: {
          orderBy: [{ level: 'asc' }, { order: 'asc' }],
        },
      },
    });

    if (!framework) {
      return NextResponse.json(
        { error: 'Framework not found' },
        { status: 404 }
      );
    }

    // 检查权限：公开框架或者是作者本人
    if (!framework.isPublic && framework.author.email !== session.user.email) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }

    return NextResponse.json(framework);
  } catch (error) {
    console.error('Failed to fetch knowledge framework:', error);
    return NextResponse.json(
      { error: 'Failed to fetch knowledge framework' },
      { status: 500 }
    );
  }
}

// PUT /api/knowledge-frameworks/[id] - 更新知识框架
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const framework = await prisma.knowledgeFramework.findUnique({
      where: { id: params.id },
      include: {
        author: true,
      },
    });

    if (!framework) {
      return NextResponse.json(
        { error: 'Framework not found' },
        { status: 404 }
      );
    }

    // 只有作者可以更新
    if (framework.author.email !== session.user.email) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }

    const body = await request.json();
    const { name, description, domain, isPublic } = body;

    const updatedFramework = await prisma.knowledgeFramework.update({
      where: { id: params.id },
      data: {
        ...(name && { name }),
        ...(description !== undefined && { description }),
        ...(domain && { domain }),
        ...(isPublic !== undefined && { isPublic }),
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        nodes: true,
      },
    });

    return NextResponse.json(updatedFramework);
  } catch (error) {
    console.error('Failed to update knowledge framework:', error);
    return NextResponse.json(
      { error: 'Failed to update knowledge framework' },
      { status: 500 }
    );
  }
}

// DELETE /api/knowledge-frameworks/[id] - 删除知识框架
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const framework = await prisma.knowledgeFramework.findUnique({
      where: { id: params.id },
      include: {
        author: true,
      },
    });

    if (!framework) {
      return NextResponse.json(
        { error: 'Framework not found' },
        { status: 404 }
      );
    }

    // 只有作者可以删除
    if (framework.author.email !== session.user.email) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }

    await prisma.knowledgeFramework.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: 'Framework deleted successfully' });
  } catch (error) {
    console.error('Failed to delete knowledge framework:', error);
    return NextResponse.json(
      { error: 'Failed to delete knowledge framework' },
      { status: 500 }
    );
  }
}
