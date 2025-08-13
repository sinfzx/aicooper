import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const prisma = new PrismaClient();

// GET /api/frameworks/[id] - 获取单个知识框架
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    const { id } = params;

    const framework = await prisma.knowledgeFramework.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            avatar: true
          }
        },
        tags: true,
        nodes: {
          orderBy: [
            { level: 'asc' },
            { order: 'asc' }
          ]
        }
      }
    });

    if (!framework) {
      return NextResponse.json(
        { success: false, error: 'Framework not found' },
        { status: 404 }
      );
    }

    // 检查访问权限
    if (!framework.isPublic && framework.authorId !== session?.user?.id) {
      return NextResponse.json(
        { success: false, error: 'Access denied' },
        { status: 403 }
      );
    }

    // 增加使用计数
    if (framework.authorId !== session?.user?.id) {
      await prisma.knowledgeFramework.update({
        where: { id },
        data: { usageCount: { increment: 1 } }
      });
    }

    return NextResponse.json({
      success: true,
      data: framework
    });
  } catch (error) {
    console.error('Get framework error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch framework' },
      { status: 500 }
    );
  }
}

// PUT /api/frameworks/[id] - 更新知识框架
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = params;
    const body = await request.json();

    // 检查所有权
    const existing = await prisma.knowledgeFramework.findUnique({
      where: { id }
    });

    if (!existing) {
      return NextResponse.json(
        { success: false, error: 'Framework not found' },
        { status: 404 }
      );
    }

    if (existing.authorId !== session.user.id) {
      return NextResponse.json(
        { success: false, error: 'Access denied' },
        { status: 403 }
      );
    }

    const {
      name,
      description,
      domain,
      tags,
      isPublic,
      localOnly
    } = body;

    const framework = await prisma.knowledgeFramework.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(description && { description }),
        ...(domain && { domain }),
        ...(isPublic !== undefined && { isPublic }),
        ...(localOnly !== undefined && { localOnly }),
        ...(tags && {
          tags: {
            set: [],
            connect: tags.map((tagId: string) => ({ id: tagId }))
          }
        }),
        version: { increment: 1 },
        syncedAt: localOnly ? null : new Date()
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            avatar: true
          }
        },
        tags: true,
        nodes: true
      }
    });

    return NextResponse.json({
      success: true,
      data: framework
    });
  } catch (error) {
    console.error('Update framework error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update framework' },
      { status: 500 }
    );
  }
}

// DELETE /api/frameworks/[id] - 删除知识框架
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = params;

    // 检查所有权
    const existing = await prisma.knowledgeFramework.findUnique({
      where: { id }
    });

    if (!existing) {
      return NextResponse.json(
        { success: false, error: 'Framework not found' },
        { status: 404 }
      );
    }

    if (existing.authorId !== session.user.id) {
      return NextResponse.json(
        { success: false, error: 'Access denied' },
        { status: 403 }
      );
    }

    // 删除框架（级联删除节点）
    await prisma.knowledgeFramework.delete({
      where: { id }
    });

    return NextResponse.json({
      success: true,
      message: 'Framework deleted successfully'
    });
  } catch (error) {
    console.error('Delete framework error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete framework' },
      { status: 500 }
    );
  }
}