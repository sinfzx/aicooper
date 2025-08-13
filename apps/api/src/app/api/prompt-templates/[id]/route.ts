import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/server/db';
import { getServerAuthSession } from '@/server/auth';

// GET /api/prompt-templates/[id] - 获取单个提示词模板
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerAuthSession();

    const template = await db.promptTemplate.findUnique({
      where: { id: params.id },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        ratings: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    if (!template) {
      return NextResponse.json(
        { error: 'Template not found' },
        { status: 404 }
      );
    }

    // 检查权限：公开模板或者是作者本人
    if (
      !template.isPublic &&
      (!session?.user?.email || template.author.email !== session.user.email)
    ) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }

    return NextResponse.json(template);
  } catch (error) {
    console.error('Failed to fetch prompt template:', error);
    return NextResponse.json(
      { error: 'Failed to fetch prompt template' },
      { status: 500 }
    );
  }
}

// PUT /api/prompt-templates/[id] - 更新提示词模板
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerAuthSession();
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const template = await db.promptTemplate.findUnique({
      where: { id: params.id },
      include: {
        author: true,
      },
    });

    if (!template) {
      return NextResponse.json(
        { error: 'Template not found' },
        { status: 404 }
      );
    }

    // 只有作者可以更新
    if (template.author.email !== session.user.email) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }

    const body = await request.json();
    const { title, description, content, category, tags, isPublic } = body;

    const updatedTemplate = await db.promptTemplate.update({
      where: { id: params.id },
      data: {
        ...(title && { title }),
        ...(description !== undefined && { description }),
        ...(content && { content }),
        ...(category && { category }),
        ...(tags && { tags }),
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
      },
    });

    return NextResponse.json(updatedTemplate);
  } catch (error) {
    console.error('Failed to update prompt template:', error);
    return NextResponse.json(
      { error: 'Failed to update prompt template' },
      { status: 500 }
    );
  }
}

// DELETE /api/prompt-templates/[id] - 删除提示词模板
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerAuthSession();
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const template = await db.promptTemplate.findUnique({
      where: { id: params.id },
      include: {
        author: true,
      },
    });

    if (!template) {
      return NextResponse.json(
        { error: 'Template not found' },
        { status: 404 }
      );
    }

    // 只有作者可以删除
    if (template.author.email !== session.user.email) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }

    await db.promptTemplate.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: 'Template deleted successfully' });
  } catch (error) {
    console.error('Failed to delete prompt template:', error);
    return NextResponse.json(
      { error: 'Failed to delete prompt template' },
      { status: 500 }
    );
  }
}
