import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/server/db';
import { getServerAuthSession } from '@/server/auth';

// GET /api/prompt-templates - 获取提示词模板列表
export async function GET(request: NextRequest) {
  try {
    const session = await getServerAuthSession();

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const isPublic = searchParams.get('public') === 'true';
    const search = searchParams.get('search');

    const localOnly = searchParams.get('localOnly');
    const tags = searchParams.get('tags')?.split(',').filter(Boolean);

    const where: any = { isBlocked: false };

    // 公开内容或用户自己的内容
    if (isPublic) {
      where.isPublic = true;
    } else if (session?.user?.email) {
      where.OR = [
        { isPublic: true },
        { author: { email: session.user.email } },
      ];
    } else {
      // 未登录默认只返回公开模板
      where.isPublic = true;
    }

    if (category && category !== 'all') {
      where.category = category;
    }

    if (localOnly !== null) {
      where.localOnly = localOnly === 'true';
    }

    if (tags && tags.length > 0) {
      where.tags = {
        some: {
          id: { in: tags },
        },
      };
    }

    if (search) {
      where.AND = [
        where.AND || {},
        {
          OR: [
            { title: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
          ],
        },
      ];
    }

    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '20');

    const [templates, total] = await Promise.all([
      db.promptTemplate.findMany({
        where,
        include: {
          author: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
          tags: true,
          _count: {
            select: {
              executions: true,
              ratings: true,
            },
          },
        },
        orderBy: [{ usageCount: 'desc' }, { createdAt: 'desc' }],
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      db.promptTemplate.count({ where }),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        items: templates,
        total,
        page,
        pageSize,
        hasMore: page * pageSize < total,
      },
    });
  } catch (error) {
    console.error('Failed to fetch prompt templates:', error);
    return NextResponse.json(
      { error: 'Failed to fetch prompt templates' },
      { status: 500 }
    );
  }
}

// POST /api/prompt-templates - 创建新的提示词模板
export async function POST(request: NextRequest) {
  try {
    const session = await getServerAuthSession();
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await db.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const body = await request.json();
    const {
      title,
      description,
      prompt,
      category,
      parameters = [],
      article = '',
      tags = [],
      isPublic = false,
      localOnly = true,
    } = body;

    if (!title || !prompt) {
      return NextResponse.json(
        { error: 'Title and prompt are required' },
        { status: 400 }
      );
    }

    const template = await db.promptTemplate.create({
      data: {
        title,
        description: description || '',
        content: prompt,
        category: category || 'general',
        parameters,
        article: article || `# ${title}\n\n${description}`,
        isPublic,
        localOnly,
        authorId: user.id,
        tags: {
          connect: tags.map((tagId: string) => ({ id: tagId })),
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
        tags: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: template,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Failed to create prompt template:', error);
    return NextResponse.json(
      { error: 'Failed to create prompt template' },
      { status: 500 }
    );
  }
}
