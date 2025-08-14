import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerAuthSession } from '@/server/auth';

const prisma = new PrismaClient();

// GET /api/flows/[id] - 获取单个流程详情
export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const flow = await prisma.flowDesign.findUnique({
      where: { id: params.id },
      include: {
        author: { select: { id: true, name: true, avatar: true } },
        tags: true,
        tools: true,
        steps: { include: { resources: true, stepTools: true } },
      },
    });

    if (!flow) {
      return NextResponse.json(
        { success: false, error: 'Not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: flow });
  } catch (error) {
    console.error('Get flow error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch flow' },
      { status: 500 }
    );
  }
}

// PUT /api/flows/[id] - 更新流程（仅作者）
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

    const current = await prisma.flowDesign.findUnique({
      where: { id: params.id },
      select: { id: true, authorId: true },
    });
    if (!current) {
      return NextResponse.json(
        { success: false, error: 'Not found' },
        { status: 404 }
      );
    }
    if (current.authorId !== session.user.id) {
      return NextResponse.json(
        { success: false, error: 'Forbidden' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const {
      title,
      description,
      article,
      difficulty,
      totalTime,
      isPublic,
      tags,
    } = body;

    const updated = await prisma.flowDesign.update({
      where: { id: params.id },
      data: {
        ...(title !== undefined ? { title } : {}),
        ...(description !== undefined ? { description } : {}),
        ...(article !== undefined ? { article } : {}),
        ...(difficulty !== undefined ? { difficulty } : {}),
        ...(totalTime !== undefined ? { totalTime } : {}),
        ...(isPublic !== undefined ? { isPublic } : {}),
        ...(Array.isArray(tags)
          ? { tags: { set: [], connect: tags.map((id: string) => ({ id })) } }
          : {}),
      },
      include: {
        author: { select: { id: true, name: true, avatar: true } },
        tags: true,
        tools: true,
        steps: { include: { resources: true, stepTools: true } },
      },
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error('Update flow error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update flow' },
      { status: 500 }
    );
  }
}

// DELETE /api/flows/[id] - 删除流程（仅作者）
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

    const current = await prisma.flowDesign.findUnique({
      where: { id: params.id },
      select: { id: true, authorId: true },
    });
    if (!current) {
      return NextResponse.json(
        { success: false, error: 'Not found' },
        { status: 404 }
      );
    }
    if (current.authorId !== session.user.id) {
      return NextResponse.json(
        { success: false, error: 'Forbidden' },
        { status: 403 }
      );
    }

    await prisma.flowDesign.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true, data: { id: params.id } });
  } catch (error) {
    console.error('Delete flow error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete flow' },
      { status: 500 }
    );
  }
}
