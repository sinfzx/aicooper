import { z } from 'zod';
import { TRPCError } from '@trpc/server';

import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc';

const visibilityEnum = z.enum(['private', 'shared', 'public']);

const memoryBaseSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  date: z.coerce.date(),
  location: z.string().optional().nullable(),
  people: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  emotions: z.array(z.string()).default([]),
  visibility: visibilityEnum.default('private'),
});

const memoryCreateInput = memoryBaseSchema;

const memoryUpdateInput = memoryBaseSchema.partial();

const listFilterSchema = z.object({
  startDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional(),
  location: z.string().optional(),
  people: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  emotions: z.array(z.string()).optional(),
  hasImage: z.boolean().optional(), // ignored on API (media not stored), reserved for local filter symmetry
  hasAudio: z.boolean().optional(),
  hasVideo: z.boolean().optional(),
  sortBy: z.enum(['date', 'title', 'created']).optional(),
  sortOrder: z.enum(['asc', 'desc']).optional(),
});

const searchSchema = z.object({
  q: z.string().default(''),
  page: z.number().int().min(1).default(1),
  pageSize: z.number().int().min(1).max(100).default(20),
});

const syncUpSchema = z.object({
  items: z
    .array(
      z.object({
        id: z.string().optional(),
        title: z.string().min(1),
        content: z.string().min(1),
        date: z.coerce.date(),
        location: z.string().nullish(),
        people: z.array(z.string()).default([]),
        tags: z.array(z.string()).default([]),
        emotions: z.array(z.string()).default([]),
        visibility: visibilityEnum.default('private'),
        // 明确排除媒体字段
      })
    )
    .min(1),
});

const syncDownSchema = z.object({
  updatedSince: z.coerce.date().optional(),
  limit: z.number().int().min(1).max(1000).default(500),
});

export const memoryRouter = createTRPCRouter({
  list: protectedProcedure
    .input(listFilterSchema.optional())
    .query(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const where: any = { userId };

      if (input?.startDate || input?.endDate) {
        where.date = {};
        if (input.startDate) where.date.gte = input.startDate;
        if (input.endDate) where.date.lte = input.endDate;
      }
      if (input?.location) {
        where.location = { contains: input.location, mode: 'insensitive' };
      }
      if (input?.people?.length) {
        where.people = { hasSome: input.people };
      }
      if (input?.tags?.length) {
        where.tags = { hasSome: input.tags };
      }
      if (input?.emotions?.length) {
        where.emotions = { hasSome: input.emotions };
      }

      const sortField =
        input?.sortBy === 'title'
          ? 'title'
          : input?.sortBy === 'created'
          ? 'createdAt'
          : 'date';
      const sortDir = input?.sortOrder ?? 'desc';
      const memories = await ctx.db.memory.findMany({
        where,
        orderBy: { [sortField]: sortDir },
      });
      return memories.map((m) => ({ ...m }));
    }),

  get: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const memory = await ctx.db.memory.findFirst({
        where: { id: input.id, userId },
      });
      if (!memory) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'Memory not found' });
      }
      return memory;
    }),

  create: protectedProcedure
    .input(memoryCreateInput)
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const created = await ctx.db.memory.create({
        data: {
          userId,
          title: input.title,
          content: input.content,
          date: input.date,
          location: input.location ?? undefined,
          people: input.people ?? [],
          tags: input.tags ?? [],
          emotions: input.emotions ?? [],
          visibility: input.visibility ?? 'private',
        },
      });
      return created;
    }),

  update: protectedProcedure
    .input(z.object({ id: z.string(), updates: memoryUpdateInput }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const existing = await ctx.db.memory.findFirst({
        where: { id: input.id, userId },
      });
      if (!existing) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'Memory not found' });
      }
      const updated = await ctx.db.memory.update({
        where: { id: input.id },
        data: {
          title: input.updates.title ?? existing.title,
          content: input.updates.content ?? existing.content,
          date: input.updates.date ?? existing.date,
          location: input.updates.location ?? existing.location,
          people: input.updates.people ?? existing.people,
          tags: input.updates.tags ?? existing.tags,
          emotions: input.updates.emotions ?? existing.emotions,
          visibility: input.updates.visibility ?? existing.visibility,
        },
      });
      return updated;
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const existing = await ctx.db.memory.findFirst({
        where: { id: input.id, userId },
      });
      if (!existing) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'Memory not found' });
      }
      await ctx.db.memory.delete({ where: { id: input.id } });
      return { success: true } as const;
    }),

  search: protectedProcedure
    .input(searchSchema)
    .query(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const skip = (input.page - 1) * input.pageSize;
      const where: any = {
        userId,
        OR: [
          { title: { contains: input.q, mode: 'insensitive' } },
          { content: { contains: input.q, mode: 'insensitive' } },
          { location: { contains: input.q, mode: 'insensitive' } },
          { tags: { has: input.q } },
          { people: { has: input.q } },
          { emotions: { has: input.q } },
        ],
      };

      const [total, memories] = await Promise.all([
        ctx.db.memory.count({ where }),
        ctx.db.memory.findMany({
          where,
          orderBy: { date: 'desc' },
          skip,
          take: input.pageSize,
        }),
      ]);

      return {
        memories,
        total,
        page: input.page,
        pageSize: input.pageSize,
        hasMore: skip + input.pageSize < total,
      };
    }),

  stats: protectedProcedure.query(async ({ ctx }) => {
    const now = new Date();
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const thisYear = new Date(now.getFullYear(), 0, 1);
    const userId = ctx.session.user.id;

    const [
      totalMemories,
      memoriesThisMonth,
      memoriesThisYear,
      aiGeneratedCount,
      allMemories,
    ] = await Promise.all([
      ctx.db.memory.count({ where: { userId } }),
      ctx.db.memory.count({ where: { userId, createdAt: { gte: thisMonth } } }),
      ctx.db.memory.count({ where: { userId, createdAt: { gte: thisYear } } }),
      ctx.db.memory.count({ where: { userId, aiGenerated: true } }),
      ctx.db.memory.findMany({
        where: { userId },
        select: { location: true, people: true, emotions: true },
      }),
    ]);

    const locationCounts: Record<string, number> = {};
    const peopleCounts: Record<string, number> = {};
    const emotionCounts: Record<string, number> = {};

    for (const m of allMemories) {
      if (m.location)
        locationCounts[m.location] = (locationCounts[m.location] ?? 0) + 1;
      for (const p of m.people) peopleCounts[p] = (peopleCounts[p] ?? 0) + 1;
      for (const e of m.emotions)
        emotionCounts[e] = (emotionCounts[e] ?? 0) + 1;
    }

    return {
      totalMemories,
      memoriesThisMonth,
      memoriesThisYear,
      aiGeneratedCount,
      topLocations: Object.entries(locationCounts)
        .map(([location, count]) => ({ location, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5),
      topPeople: Object.entries(peopleCounts)
        .map(([person, count]) => ({ person, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5),
      topEmotions: Object.entries(emotionCounts)
        .map(([emotion, count]) => ({ emotion, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5),
    } as const;
  }),

  syncUp: protectedProcedure
    .input(syncUpSchema)
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const results: Array<{ id: string; action: 'created' | 'updated' }> = [];
      for (const item of input.items) {
        if (item.id) {
          const exists = await ctx.db.memory.findFirst({
            where: { id: item.id, userId },
          });
          if (exists) {
            await ctx.db.memory.update({
              where: { id: item.id },
              data: {
                title: item.title,
                content: item.content,
                date: item.date,
                location: item.location ?? undefined,
                people: item.people ?? [],
                tags: item.tags ?? [],
                emotions: item.emotions ?? [],
                visibility: item.visibility ?? 'private',
              },
            });
            results.push({ id: item.id, action: 'updated' });
            continue;
          }
        }

        const created = await ctx.db.memory.create({
          data: {
            userId,
            title: item.title,
            content: item.content,
            date: item.date,
            location: item.location ?? undefined,
            people: item.people ?? [],
            tags: item.tags ?? [],
            emotions: item.emotions ?? [],
            visibility: item.visibility ?? 'private',
          },
        });
        results.push({ id: created.id, action: 'created' });
      }
      return { success: true as const, results };
    }),

  syncDown: protectedProcedure
    .input(syncDownSchema.optional())
    .query(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const where: any = { userId };
      if (input?.updatedSince) where.updatedAt = { gte: input.updatedSince };
      const memories = await ctx.db.memory.findMany({
        where,
        orderBy: { updatedAt: 'desc' },
        take: input?.limit,
      });
      // 明确只返回非媒体字段，但 Prisma 模型包含媒体字段；前端需自觉忽略或服务端在此做剥离
      return memories.map((m) => ({
        id: m.id,
        userId: m.userId,
        title: m.title,
        content: m.content,
        date: m.date,
        location: m.location,
        people: m.people,
        tags: m.tags,
        emotions: m.emotions,
        visibility: m.visibility,
        createdAt: m.createdAt,
        updatedAt: m.updatedAt,
      }));
    }),
});
