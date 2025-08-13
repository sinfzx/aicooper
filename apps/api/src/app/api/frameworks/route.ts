import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { KnowledgeFramework } from '@my-platform/types';

const prisma = new PrismaClient();

// GET /api/frameworks - 获取知识框架列表
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const { searchParams } = new URL(request.url);
    
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '20');
    const query = searchParams.get('query');
    const domain = searchParams.get('domain');
    const tags = searchParams.get('tags')?.split(',').filter(Boolean);
    const isPublic = searchParams.get('isPublic');
    const authorId = searchParams.get('authorId');
    const localOnly = searchParams.get('localOnly');

    const where: any = {
      isBlocked: false
    };

    // 公开内容或用户自己的内容
    if (session?.user) {
      if (isPublic === 'true') {
        where.isPublic = true;
      } else if (authorId) {
        where.authorId = authorId;
      } else {
        where.OR = [
          { isPublic: true },
          { authorId: session.user.id }
        ];
      }
    } else {
      where.isPublic = true;
    }

    if (query) {
      where.OR = [
        { name: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } },
        { domain: { contains: query, mode: 'insensitive' } }
      ];
    }

    if (domain) {
      where.domain = domain;
    }

    if (tags && tags.length > 0) {
      where.tags = {
        some: {
          id: { in: tags }
        }
      };
    }

    if (localOnly !== null) {
      where.localOnly = localOnly === 'true';
    }

    const [frameworks, total] = await Promise.all([
      prisma.knowledgeFramework.findMany({
        where,
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
            where: { parentId: null },
            include: {
              children: {
                include: {
                  children: true
                }
              }
            }
          },
          _count: {
            select: {
              nodes: true
            }
          }
        },
        orderBy: [
          { usageCount: 'desc' },
          { createdAt: 'desc' }
        ],
        skip: (page - 1) * pageSize,
        take: pageSize
      }),
      prisma.knowledgeFramework.count({ where })
    ]);

    return NextResponse.json({
      success: true,
      data: {
        items: frameworks,
        total,
        page,
        pageSize,
        hasMore: page * pageSize < total
      }
    });
  } catch (error) {
    console.error('Get frameworks error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch frameworks' },
      { status: 500 }
    );
  }
}

// POST /api/frameworks - 创建知识框架
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const {
      name,
      description,
      domain,
      tags = [],
      isPublic = false,
      localOnly = true,
      rootNodes = []
    } = body;

    if (!name || !description || !domain) {
      return NextResponse.json(
        { success: false, error: 'Name, description, and domain are required' },
        { status: 400 }
      );
    }

    const framework = await prisma.knowledgeFramework.create({
      data: {
        name,
        description,
        domain,
        isPublic,
        localOnly,
        authorId: session.user.id,
        tags: {
          connect: tags.map((tagId: string) => ({ id: tagId }))
        }
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

    // 创建根节点
    if (rootNodes.length > 0) {
      await createNodes(framework.id, rootNodes, null, 1);
    }

    return NextResponse.json({
      success: true,
      data: framework
    });
  } catch (error) {
    console.error('Create framework error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create framework' },
      { status: 500 }
    );
  }
}

// 递归创建节点
async function createNodes(
  frameworkId: string,
  nodes: any[],
  parentId: string | null,
  level: number
) {
  for (let i = 0; i < nodes.length; i++) {
    const nodeData = nodes[i];
    const node = await prisma.knowledgeNode.create({
      data: {
        frameworkId,
        parentId,
        title: nodeData.title,
        description: nodeData.description,
        content: nodeData.content,
        questions: nodeData.questions || [],
        urls: nodeData.urls || [],
        level,
        order: i,
        position: nodeData.position
      }
    });

    // 递归创建子节点
    if (nodeData.children && nodeData.children.length > 0) {
      await createNodes(frameworkId, nodeData.children, node.id, level + 1);
    }
  }
}