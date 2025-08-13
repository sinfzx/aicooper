import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
  try {
    const { email, code } = await request.json();

    if (!email || !code) {
      return NextResponse.json(
        { error: '邮箱和验证码都是必需的' },
        { status: 400 }
      );
    }

    // 查找验证码记录
    const verificationRecord = await prisma.verificationCode.findFirst({
      where: {
        email,
        code,
        used: false,
        expiresAt: {
          gt: new Date()
        }
      }
    });

    if (!verificationRecord) {
      // 增加尝试次数
      await prisma.verificationCode.updateMany({
        where: { email, code },
        data: {
          attempts: {
            increment: 1
          }
        }
      });

      return NextResponse.json(
        { error: '验证码无效或已过期' },
        { status: 400 }
      );
    }

    // 标记验证码为已使用
    await prisma.verificationCode.update({
      where: { id: verificationRecord.id },
      data: { used: true }
    });

    // 查找或创建用户
    let user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      // 创建新用户
      user = await prisma.user.create({
        data: {
          email,
          name: email.split('@')[0], // 使用邮箱前缀作为默认用户名
          emailVerified: new Date()
        }
      });
    } else {
      // 更新邮箱验证状态
      user = await prisma.user.update({
        where: { id: user.id },
        data: {
          emailVerified: new Date()
        }
      });
    }

    // 生成JWT token
    const token = jwt.sign(
      { 
        userId: user.id, 
        email: user.email 
      },
      process.env.NEXTAUTH_SECRET || 'fallback-secret',
      { expiresIn: '7d' }
    );

    // 清理该邮箱的所有验证码
    await prisma.verificationCode.deleteMany({
      where: { email }
    });

    return NextResponse.json({
      success: true,
      message: '登录成功',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar
      },
      token,
      expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000 // 7天后过期
    });

  } catch (error) {
    console.error('Verify code error:', error);
    return NextResponse.json(
      { error: '服务器内部错误' },
      { status: 500 }
    );
  }
}