import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc';

const settingsSchema = z.object({
  birthYear: z.number().int().optional().nullable(),
  birthRegion: z.string().optional().nullable(),
  language: z.string().optional().nullable(),
  imageStyleDefault: z.string().optional().nullable(),
  imageAspectDefault: z.string().optional().nullable(),
});

export const settingsRouter = createTRPCRouter({
  get: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;
    const found = await (ctx.db as any).userSettings.findUnique({
      where: { userId },
    });
    return found ?? null;
  }),
  update: protectedProcedure
    .input(settingsSchema)
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const updated = await (ctx.db as any).userSettings.upsert({
        where: { userId },
        create: {
          userId,
          birthYear: input.birthYear ?? undefined,
          birthRegion: input.birthRegion ?? undefined,
          language: input.language ?? undefined,
          imageStyleDefault: input.imageStyleDefault ?? undefined,
          imageAspectDefault: input.imageAspectDefault ?? undefined,
        },
        update: {
          birthYear: input.birthYear ?? undefined,
          birthRegion: input.birthRegion ?? undefined,
          language: input.language ?? undefined,
          imageStyleDefault: input.imageStyleDefault ?? undefined,
          imageAspectDefault: input.imageAspectDefault ?? undefined,
        },
      });
      return updated;
    }),
});
