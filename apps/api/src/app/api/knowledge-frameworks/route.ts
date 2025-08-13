import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/server/db';
import { getServerAuthSession } from '@/server/auth';

// GET /api/knowledge-frameworks - 列表（公开/我的）
export async function GET(request: NextRequest) {
  try {
    const session = await getServerAuthSession();
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '20');
    const isPublic = searchParams.get('public');
    const authorId = searchParams.get('authorId');

    const where: any = { isBlocked: false };
    if (isPublic === 'true') {
      where.isPublic = true;
    } else if (authorId) {
      where.authorId = authorId;
    } else if (session?.user) {
      where.OR = [{ isPublic: true }, { authorId: session.user.id }];
    } else {
      where.isPublic = true;
    }

    const [items, total] = await Promise.all([
      db.knowledgeFramework.findMany({
        where,
        orderBy: [{ usageCount: 'desc' }, { createdAt: 'desc' }],
        skip: (page - 1) * pageSize,
        take: pageSize,
        include: {
          tags: true,
          author: { select: { id: true, name: true } },
        },
      }),
      db.knowledgeFramework.count({ where }),
    ]);

    return NextResponse.json({
      success: true,
      data: { items, total, page, pageSize, hasMore: page * pageSize < total },
    });
  } catch (e) {
    console.error('List frameworks error:', e);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch frameworks' },
      { status: 500 }
    );
  }
}

// POST /api/knowledge-frameworks - 创建
export async function POST(request: NextRequest) {
  try {
    const session = await getServerAuthSession();
    if (!session?.user)
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );

    const body = await request.json();
    const {
      title,
      description,
      domain = 'general',
      isPublic = false,
      tags = [],
    } = body;
    if (!title || !description) {
      return NextResponse.json(
        { success: false, error: 'Title and description are required' },
        { status: 400 }
      );
    }

    const created = await db.knowledgeFramework.create({
      data: {
        name: title,
        description,
        domain,
        isPublic,
        localOnly: false,
        authorId: session.user.id,
        tags: { connect: tags.map((id: string) => ({ id })) },
      },
      include: {
        tags: true,
        author: { select: { id: true, name: true } },
      },
    });

    return NextResponse.json({ success: true, data: created });
  } catch (e) {
    console.error('Create framework error:', e);
    return NextResponse.json(
      { success: false, error: 'Failed to create framework' },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// GET /api/knowledge-frameworks - 获取知识框架列表
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const domain = searchParams.get('domain');
    const isPublic = searchParams.get('public') === 'true';

    const where: any = {
      OR: [{ isPublic: true }, { author: { email: session.user.email } }],
    };

    if (domain && domain !== 'all') {
      where.domain = domain;
    }

    const frameworks = await prisma.knowledgeFramework.findMany({
      where,
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
        _count: {
          select: {
            nodes: true,
          },
        },
      },
      orderBy: [{ usageCount: 'desc' }, { createdAt: 'desc' }],
    });

    return NextResponse.json(frameworks);
  } catch (error) {
    console.error('Failed to fetch knowledge frameworks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch knowledge frameworks' },
      { status: 500 }
    );
  }
}

// POST /api/knowledge-frameworks - 创建新的知识框架
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const body = await request.json();
    const {
      name,
      description,
      domain = 'general',
      isPublic = false,
      nodes = [],
    } = body;

    if (!name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    const framework = await prisma.knowledgeFramework.create({
      data: {
        name,
        description: description || '',
        domain,
        isPublic,
        authorId: user.id,
        nodes: {
          create: nodes.map((node: any, index: number) => ({
            title: node.title,
            description: node.description || '',
            content: node.content || '',
            questions: node.questions || [],
            urls: node.urls || [],
            position: node.position || null,
            level: node.level || 0,
            order: index,
            parentId: node.parentId || null,
          })),
        },
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

    return NextResponse.json(framework, { status: 201 });
  } catch (error) {
    console.error('Failed to create knowledge framework:', error);
    return NextResponse.json(
      { error: 'Failed to create knowledge framework' },
      { status: 500 }
    );
  }
}
