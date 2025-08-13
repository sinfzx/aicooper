import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { emailService } from '@/lib/email';

// 生成6位数字验证码
function generateVerificationCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: '邮箱地址是必需的' },
        { status: 400 }
      );
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '邮箱格式不正确' },
        { status: 400 }
      );
    }

    // 生成验证码
    const code = generateVerificationCode();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10分钟后过期

    // 删除该邮箱的旧验证码
    await prisma.verificationCode.deleteMany({
      where: { email }
    });

    // 保存新验证码
    await prisma.verificationCode.create({
      data: {
        email,
        code,
        expiresAt,
        attempts: 0,
        used: false
      }
    });

    // 发送验证码邮件
    try {
      await emailService.sendVerificationCode(email, code);
      console.log(`Verification code sent to ${email}: ${code}`);
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      // 即使邮件发送失败，也不要删除验证码，以便调试
      return NextResponse.json(
        { error: '邮件发送失败，请稍后重试' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: '验证码已发送到您的邮箱',
      // 在开发环境中返回验证码用于调试
      ...(process.env.NODE_ENV === 'development' && { code })
    });

  } catch (error) {
    console.error('Send verification code error:', error);
    return NextResponse.json(
      { error: '服务器内部错误' },
      { status: 500 }
    );
  }
}