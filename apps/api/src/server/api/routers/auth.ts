import { z } from "zod";
import { TRPCError } from "@trpc/server";
import jwt from "jsonwebtoken";
import { env } from "@/env";
import { emailService } from "@/lib/email";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

// 生成6位验证码
function generateVerificationCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export const authRouter = createTRPCRouter({
  // 发送验证码
  sendVerificationCode: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { email } = input;

      // 检查是否在短时间内重复发送
      const recentCode = await ctx.db.verificationCode.findFirst({
        where: {
          email,
          createdAt: {
            gte: new Date(Date.now() - 60 * 1000), // 1分钟内
          },
        },
      });

      if (recentCode) {
        throw new TRPCError({
          code: "TOO_MANY_REQUESTS",
          message: "请等待1分钟后再次发送验证码",
        });
      }

      // 生成验证码
      const code = generateVerificationCode();
      const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10分钟后过期

      // 删除旧的验证码
      await ctx.db.verificationCode.deleteMany({
        where: { email },
      });

      // 保存新验证码
      await ctx.db.verificationCode.create({
        data: {
          email,
          code,
          expiresAt,
        },
      });

      // 发送邮件
      await emailService.sendVerificationCode(email, code);

      return {
        success: true,
        message: "验证码已发送到您的邮箱",
      };
    }),

  // 验证码登录/注册
  verifyCodeAndAuth: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        code: z.string().length(6),
        name: z.string().min(1).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { email, code, name } = input;

      // 查找验证码
      const verificationCode = await ctx.db.verificationCode.findFirst({
        where: {
          email,
          code,
          used: false,
          expiresAt: {
            gt: new Date(),
          },
        },
      });

      if (!verificationCode) {
        // 增加尝试次数
        await ctx.db.verificationCode.updateMany({
          where: { email, code },
          data: {
            attempts: {
              increment: 1,
            },
          },
        });

        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "验证码无效或已过期",
        });
      }

      // 检查尝试次数
      if (verificationCode.attempts >= 5) {
        throw new TRPCError({
          code: "TOO_MANY_REQUESTS",
          message: "验证码尝试次数过多，请重新发送",
        });
      }

      // 标记验证码为已使用
      await ctx.db.verificationCode.update({
        where: { id: verificationCode.id },
        data: { used: true },
      });

      // 查找或创建用户
      let user = await ctx.db.user.findUnique({
        where: { email },
      });

      if (!user) {
        // 创建新用户
        user = await ctx.db.user.create({
          data: {
            email,
            name: name || email.split('@')[0],
            emailVerified: new Date(),
          },
        });
      } else if (!user.emailVerified) {
        // 验证现有用户的邮箱
        user = await ctx.db.user.update({
          where: { id: user.id },
          data: { emailVerified: new Date() },
        });
      }

      // 生成 JWT token
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        env.JWT_SECRET,
        { expiresIn: '7d' }
      );

      return {
        success: true,
        message: "登录成功",
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          avatar: user.avatar,
          createdAt: user.createdAt.toISOString(),
          updatedAt: user.updatedAt.toISOString(),
        },
        token,
      };
    }),

  // 获取用户资料
  getProfile: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: { id: ctx.session.user.id },
      include: {
        subscription: true,
        _count: {
          select: {
            promptTemplates: true,
            promptExecutions: true,
          },
        },
      },
    });

    if (!user) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "User not found",
      });
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      avatar: user.avatar,
      emailVerified: user.emailVerified,
      subscription: user.subscription,
      stats: {
        templatesCreated: user._count.promptTemplates,
        templatesUsed: user._count.promptExecutions,
      },
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    };
  }),

  // 更新用户资料
  updateProfile: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1).optional(),
        avatar: z.string().url().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: input,
      });

      return {
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        createdAt: user.createdAt.toISOString(),
        updatedAt: user.updatedAt.toISOString(),
      };
    }),
});