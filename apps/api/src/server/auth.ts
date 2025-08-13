import { PrismaAdapter } from "@auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";

import { env } from "@/env";
import { db } from "@/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
      },
    }),
    jwt: ({ token, user }) => {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    CredentialsProvider({
      id: "email-verification",
      name: "Email Verification",
      credentials: {
        email: { label: "Email", type: "email" },
        code: { label: "Verification Code", type: "text" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.code) {
          return null;
        }

        // 验证验证码
        const verificationCode = await db.verificationCode.findFirst({
          where: {
            email: credentials.email,
            code: credentials.code,
            used: false,
            expiresAt: {
              gt: new Date()
            }
          }
        });

        if (!verificationCode) {
          return null;
        }

        // 标记验证码为已使用
        await db.verificationCode.update({
          where: { id: verificationCode.id },
          data: { used: true }
        });

        // 查找或创建用户
        let user = await db.user.findUnique({
          where: { email: credentials.email }
        });

        if (!user) {
          // 创建新用户
          user = await db.user.create({
            data: {
              email: credentials.email,
              emailVerified: new Date(),
              name: credentials.email.split('@')[0], // 使用邮箱前缀作为默认用户名
            }
          });
        } else {
          // 更新邮箱验证状态
          user = await db.user.update({
            where: { id: user.id },
            data: { emailVerified: new Date() }
          });
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
        };
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  secret: env.NEXTAUTH_SECRET,
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);