import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc';

const publishInput = z.object({
  title: z.string().min(1).max(120),
  demandPayload: z.object({
    id: z.string().optional(),
    title: z.string().min(1),
    painPoint: z.string().min(1).max(500),
    tags: z.array(z.string()).default([]),
    quotes: z
      .array(
        z.object({
          text: z.string().min(1),
          url: z.string().url().optional(),
          ts: z.string().optional(),
        })
      )
      .default([]),
    sources: z
      .array(
        z.object({ url: z.string().url(), platform: z.string().optional() })
      )
      .default([]),
    score: z.number().min(0).max(100).optional(),
  }),
  visibility: z.enum(['public', 'hidden']).default('public'),
});

export const ideaverifyRouter = createTRPCRouter({
  square: createTRPCRouter({
    list: protectedProcedure
      .input(
        z.object({
          page: z.number().int().min(1).default(1),
          pageSize: z.number().int().min(1).max(100).default(20),
          sortBy: z.enum(['time', 'hot']).default('time'),
        })
      )
      .query(async ({ ctx, input }) => {
        const skip = (input.page - 1) * input.pageSize;
        const where = { visibility: 'public' as const };
        const orderBy =
          input.sortBy === 'hot'
            ? [{ upvotes: 'desc' as const }, { createdAt: 'desc' as const }]
            : [{ createdAt: 'desc' as const }];
        const db: any = ctx.db as any;
        const [total, items] = await Promise.all([
          db.squarePost.count({ where }),
          db.squarePost.findMany({
            where,
            orderBy,
            skip,
            take: input.pageSize,
          }),
        ]);
        return {
          items,
          total,
          page: input.page,
          pageSize: input.pageSize,
          hasMore: skip + input.pageSize < total,
        };
      }),

    get: protectedProcedure
      .input(z.object({ id: z.string() }))
      .query(async ({ ctx, input }) => {
        const db: any = ctx.db as any;
        const post = await db.squarePost.findUnique({
          where: { id: input.id },
        });
        if (!post || post.visibility !== 'public') return null;
        return post;
      }),

    publish: protectedProcedure
      .input(publishInput)
      .mutation(async ({ ctx, input }) => {
        const userId = ctx.session.user.id;
        const db: any = ctx.db as any;
        const created = await db.squarePost.create({
          data: {
            userId,
            title: input.title,
            demandPayload: input.demandPayload,
            visibility: input.visibility,
          },
        });
        return created;
      }),

    vote: protectedProcedure
      .input(
        z.object({
          postId: z.string(),
          value: z.enum(['1', '-1']).transform((v) => Number(v)),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const userId = ctx.session.user.id;
        const db: any = ctx.db as any;
        const vote = await db.squareVote.upsert({
          where: { postId_userId: { postId: input.postId, userId } },
          create: { postId: input.postId, userId, value: input.value },
          update: { value: input.value },
        });
        // 重新计算 upvotes（简单做法）
        const agg = await db.squareVote.aggregate({
          where: { postId: input.postId },
          _sum: { value: true },
        });
        await db.squarePost.update({
          where: { id: input.postId },
          data: { upvotes: agg._sum.value ?? 0 },
        });
        return vote;
      }),

    delete: protectedProcedure
      .input(z.object({ id: z.string() }))
      .mutation(async ({ ctx, input }) => {
        const userId = ctx.session.user.id;
        const db: any = ctx.db as any;
        const existing = await db.squarePost.findUnique({
          where: { id: input.id },
        });
        if (!existing || existing.userId !== userId)
          return { success: false as const };
        await db.squarePost.update({
          where: { id: input.id },
          data: { visibility: 'hidden' },
        });
        return { success: true as const };
      }),
  }),
});
