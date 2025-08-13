import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerAuthSession } from '@/server/auth';

const prisma = new PrismaClient();

// GET /api/flows - 获取流程设计列表
export async function GET(request: NextRequest) {
  try {
    const session = await getServerAuthSession();
    const { searchParams } = new URL(request.url);

    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '20');
    const query = searchParams.get('query');
    const difficulty = searchParams.get('difficulty');
    const tags = searchParams.get('tags')?.split(',').filter(Boolean);
    const isPublic = searchParams.get('isPublic');
    const authorId = searchParams.get('authorId');
    const localOnly = searchParams.get('localOnly');

    const where: any = {
      isBlocked: false,
    };

    // 公开内容或用户自己的内容
    if (session?.user) {
      if (isPublic === 'true') {
        where.isPublic = true;
      } else if (authorId) {
        where.authorId = authorId;
      } else {
        where.OR = [{ isPublic: true }, { authorId: session.user.id }];
      }
    } else {
      where.isPublic = true;
    }

    if (query) {
      where.OR = [
        { title: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } },
      ];
    }

    if (difficulty) {
      where.difficulty = difficulty;
    }

    if (tags && tags.length > 0) {
      where.tags = {
        some: {
          id: { in: tags },
        },
      };
    }

    if (localOnly !== null) {
      where.localOnly = localOnly === 'true';
    }

    const [flows, total] = await Promise.all([
      prisma.flowDesign.findMany({
        where,
        include: {
          author: {
            select: {
              id: true,
              name: true,
              avatar: true,
            },
          },
          tags: true,
          steps: {
            include: {
              resources: true,
            },
          },
          tools: true,
          _count: {
            select: {
              steps: true,
              tools: true,
            },
          },
        },
        orderBy: [{ usageCount: 'desc' }, { createdAt: 'desc' }],
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      prisma.flowDesign.count({ where }),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        items: flows,
        total,
        page,
        pageSize,
        hasMore: page * pageSize < total,
      },
    });
  } catch (error) {
    console.error('Get flows error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch flows' },
      { status: 500 }
    );
  }
}

// POST /api/flows - 创建流程设计
export async function POST(request: NextRequest) {
  try {
    const session = await getServerAuthSession();
    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const {
      title,
      description,
      article,
      difficulty = 'medium',
      totalTime,
      tags = [],
      isPublic = false,
      localOnly = true,
      steps = [],
      tools = [],
      prerequisites = [],
      outcomes = [],
    } = body;

    if (!title || !description) {
      return NextResponse.json(
        { success: false, error: 'Title and description are required' },
        { status: 400 }
      );
    }

    const flow = await prisma.flowDesign.create({
      data: {
        title,
        description,
        article: article || `# ${title}\n\n${description}`,
        difficulty,
        totalTime,
        isPublic,
        localOnly,
        authorId: session.user.id,
        prerequisites: JSON.stringify(prerequisites),
        outcomes: JSON.stringify(outcomes),
        tags: {
          connect: tags.map((tagId: string) => ({ id: tagId })),
        },
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
        tags: true,
        steps: true,
        tools: true,
      },
    });

    // 创建步骤和工具
    if (steps.length > 0) {
      await createStepsAndTools(flow.id, steps, tools);
    }

    return NextResponse.json({
      success: true,
      data: flow,
    });
  } catch (error) {
    console.error('Create flow error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create flow' },
      { status: 500 }
    );
  }
}

// 创建步骤和工具的辅助函数
async function createStepsAndTools(flowId: string, steps: any[], tools: any[]) {
  // 创建工具
  const toolMap = new Map();
  for (const tool of tools) {
    const createdTool = await prisma.flowTool.create({
      data: {
        flowId,
        name: tool.name,
        description: tool.description,
        url: tool.url,
        category: tool.category || 'general',
      },
    });
    toolMap.set(tool.id, createdTool.id);
  }

  // 创建步骤
  for (let i = 0; i < steps.length; i++) {
    const stepData = steps[i];
    const step = await prisma.flowStep.create({
      data: {
        flowId,
        title: stepData.title,
        description: stepData.description,
        order: stepData.order || i,
        estimatedTime: stepData.estimatedTime,
        difficulty: stepData.difficulty || 'medium',
        questions: stepData.questions || [],
      },
    });

    // 创建资源
    if (stepData.resources) {
      for (const resource of stepData.resources) {
        await prisma.flowResource.create({
          data: {
            stepId: step.id,
            type: resource.type || 'url',
            title: resource.title,
            url: resource.url,
            description: resource.description,
          },
        });
      }
    }

    // 关联工具
    if (stepData.tools) {
      for (const toolId of stepData.tools) {
        const actualToolId = toolMap.get(toolId);
        if (actualToolId) {
          await prisma.flowStepTool.create({
            data: {
              stepId: step.id,
              toolId: actualToolId,
            },
          });
        }
      }
    }
  }
}
