import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const prisma = new PrismaClient();

// POST /api/frameworks/[id]/nodes - 创建节点
export async function POST(
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

    const { id: frameworkId } = params;
    const body = await request.json();

    // 检查框架所有权
    const framework = await prisma.knowledgeFramework.findUnique({
      where: { id: frameworkId }
    });

    if (!framework) {
      return NextResponse.json(
        { success: false, error: 'Framework not found' },
        { status: 404 }
      );
    }

    if (framework.authorId !== session.user.id) {
      return NextResponse.json(
        { success: false, error: 'Access denied' },
        { status: 403 }
      );
    }

    const {
      parentId,
      title,
      description,
      content,
      questions = [],
      urls = [],
      position
    } = body;

    if (!title) {
      return NextResponse.json(
        { success: false, error: 'Title is required' },
        { status: 400 }
      );
    }

    // 计算层级和顺序
    let level = 1;
    let order = 0;

    if (parentId) {
      const parent = await prisma.knowledgeNode.findUnique({
        where: { id: parentId },
        include: { children: true }
      });

      if (!parent || parent.frameworkId !== frameworkId) {
        return NextResponse.json(
          { success: false, error: 'Invalid parent node' },
          { status: 400 }
        );
      }

      level = parent.level + 1;
      order = parent.children.length;
    } else {
      // 根节点
      const rootNodes = await prisma.knowledgeNode.findMany({
        where: {
          frameworkId,
          parentId: null
        }
      });
      order = rootNodes.length;
    }

    const node = await prisma.knowledgeNode.create({
      data: {
        frameworkId,
        parentId: parentId || null,
        title,
        description,
        content,
        questions,
        urls,
        position,
        level,
        order
      },
      include: {
        children: true,
        parent: true
      }
    });

    // 更新框架版本
    await prisma.knowledgeFramework.update({
      where: { id: frameworkId },
      data: {
        version: { increment: 1 },
        syncedAt: framework.localOnly ? null : new Date()
      }
    });

    return NextResponse.json({
      success: true,
      data: node
    });
  } catch (error) {
    console.error('Create node error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create node' },
      { status: 500 }
    );
  }
}