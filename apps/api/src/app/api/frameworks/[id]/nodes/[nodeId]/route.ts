import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const prisma = new PrismaClient();

// PUT /api/frameworks/[id]/nodes/[nodeId] - 更新节点
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string; nodeId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id: frameworkId, nodeId } = params;
    const body = await request.json();

    const framework = await prisma.knowledgeFramework.findUnique({
      where: { id: frameworkId },
    });
    if (!framework)
      return NextResponse.json(
        { success: false, error: 'Framework not found' },
        { status: 404 }
      );
    if (framework.authorId !== session.user.id)
      return NextResponse.json(
        { success: false, error: 'Access denied' },
        { status: 403 }
      );

    const node = await prisma.knowledgeNode.update({
      where: { id: nodeId },
      data: {
        ...(body.title !== undefined ? { title: body.title } : {}),
        ...(body.description !== undefined
          ? { description: body.description }
          : {}),
        ...(body.content !== undefined ? { content: body.content } : {}),
        ...(Array.isArray(body.questions) ? { questions: body.questions } : {}),
        ...(Array.isArray(body.urls) ? { urls: body.urls } : {}),
        ...(body.position !== undefined ? { position: body.position } : {}),
        ...(body.expanded !== undefined ? { expanded: !!body.expanded } : {}),
      },
      include: { children: true, parent: true },
    });

    // bump version
    await prisma.knowledgeFramework.update({
      where: { id: frameworkId },
      data: { version: { increment: 1 } },
    });

    return NextResponse.json({ success: true, data: node });
  } catch (error) {
    console.error('Update node error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update node' },
      { status: 500 }
    );
  }
}

// DELETE /api/frameworks/[id]/nodes/[nodeId] - 删除节点
export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string; nodeId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id: frameworkId, nodeId } = params;

    const framework = await prisma.knowledgeFramework.findUnique({
      where: { id: frameworkId },
    });
    if (!framework)
      return NextResponse.json(
        { success: false, error: 'Framework not found' },
        { status: 404 }
      );
    if (framework.authorId !== session.user.id)
      return NextResponse.json(
        { success: false, error: 'Access denied' },
        { status: 403 }
      );

    await prisma.$transaction([
      prisma.knowledgeNode.delete({ where: { id: nodeId } }),
      prisma.knowledgeFramework.update({
        where: { id: frameworkId },
        data: { version: { increment: 1 } },
      }),
    ]);

    return NextResponse.json({ success: true, data: { id: nodeId } });
  } catch (error) {
    console.error('Delete node error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete node' },
      { status: 500 }
    );
  }
}
