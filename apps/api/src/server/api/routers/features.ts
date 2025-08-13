import { z } from "zod";
import { TRPCError } from "@trpc/server";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

export const featuresRouter = createTRPCRouter({
  // 获取所有可用功能
  getAll: publicProcedure.query(async ({ ctx }) => {
    // 这里可以从功能注册表获取数据
    // 或者从数据库获取功能配置
    return [
      {
        id: "ai-knowledge",
        name: "AI 知识框架",
        description: "构建和管理领域知识体系",
        status: "stable",
        tier: "pro",
      },
      {
        id: "prompt-templates",
        name: "提示词模板库",
        description: "专业的 AI 提示词模板库",
        status: "beta",
        tier: "free",
      },
    ];
  }),

  // 获取用户可访问的功能
  getUserFeatures: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: { id: ctx.session.user.id },
      include: {
        subscription: true,
      },
    });

    if (!user) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "User not found",
      });
    }

    // 根据用户订阅级别返回可用功能
    const userTier = user.subscription?.tier || "free";
    
    // 这里可以实现更复杂的权限逻辑
    return {
      tier: userTier,
      features: [
        "ai-knowledge",
        "prompt-templates",
      ],
    };
  }),

  // 记录功能使用情况
  recordUsage: protectedProcedure
    .input(
      z.object({
        featureId: z.string(),
        action: z.string(),
        tokens: z.number().optional(),
        cost: z.number().optional(),
        metadata: z.record(z.any()).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const usage = await ctx.db.usage.create({
        data: {
          userId: ctx.session.user.id,
          featureId: input.featureId,
          action: input.action,
          tokens: input.tokens,
          cost: input.cost,
          metadata: input.metadata,
        },
      });

      return usage;
    }),

  // 获取用户使用统计
  getUsageStats: protectedProcedure
    .input(
      z.object({
        featureId: z.string().optional(),
        startDate: z.date().optional(),
        endDate: z.date().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const where: any = {
        userId: ctx.session.user.id,
      };

      if (input.featureId) {
        where.featureId = input.featureId;
      }

      if (input.startDate || input.endDate) {
        where.createdAt = {};
        if (input.startDate) {
          where.createdAt.gte = input.startDate;
        }
        if (input.endDate) {
          where.createdAt.lte = input.endDate;
        }
      }

      const usage = await ctx.db.usage.findMany({
        where,
        orderBy: {
          createdAt: "desc",
        },
        take: 100,
      });

      const stats = await ctx.db.usage.aggregate({
        where,
        _sum: {
          tokens: true,
          cost: true,
        },
        _count: {
          id: true,
        },
      });

      return {
        usage,
        totalTokens: stats._sum.tokens || 0,
        totalCost: stats._sum.cost || 0,
        totalRequests: stats._count.id,
      };
    }),
});