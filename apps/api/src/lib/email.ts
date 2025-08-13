import { Resend } from 'resend';
import nodemailer from 'nodemailer';
import { env } from '@/env';

// 邮件服务接口
interface EmailService {
  sendVerificationCode(email: string, code: string): Promise<void>;
}

// Resend 邮件服务
class ResendEmailService implements EmailService {
  private resend: Resend;

  constructor(apiKey: string) {
    this.resend = new Resend(apiKey);
  }

  async sendVerificationCode(email: string, code: string): Promise<void> {
    await this.resend.emails.send({
      from: 'AI Platform <noreply@aiplatform.com>',
      to: email,
      subject: '您的验证码',
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; margin: 0;">🤖 AI Platform</h1>
          </div>
          
          <div style="background: #f8fafc; padding: 30px; border-radius: 8px; text-align: center;">
            <h2 style="color: #1f2937; margin-bottom: 20px;">您的验证码</h2>
            <div style="font-size: 32px; font-weight: bold; color: #2563eb; letter-spacing: 8px; margin: 20px 0;">
              ${code}
            </div>
            <p style="color: #6b7280; margin: 20px 0;">
              验证码有效期为 10 分钟，请及时使用。
            </p>
          </div>
          
          <div style="margin-top: 30px; text-align: center; color: #9ca3af; font-size: 14px;">
            <p>如果您没有请求此验证码，请忽略此邮件。</p>
            <p>此邮件由系统自动发送，请勿回复。</p>
          </div>
        </div>
      `,
    });
  }
}

// Nodemailer 邮件服务（用于自定义SMTP）
class NodemailerEmailService implements EmailService {
  private transporter: nodemailer.Transporter;

  constructor(config: {
    host: string;
    port: number;
    secure: boolean;
    auth: {
      user: string;
      pass: string;
    };
  }) {
    this.transporter = nodemailer.createTransporter(config);
  }

  async sendVerificationCode(email: string, code: string): Promise<void> {
    const fromEmail = process.env.EMAIL_FROM || '"AI Platform" <noreply@aiplatform.com>';
    await this.transporter.sendMail({
      from: fromEmail,
      to: email,
      subject: '【AI Platform】您的验证码',
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; margin: 0;">🤖 AI Platform</h1>
          </div>
          
          <div style="background: #f8fafc; padding: 30px; border-radius: 8px; text-align: center;">
            <h2 style="color: #1f2937; margin-bottom: 20px;">您的验证码</h2>
            <div style="font-size: 32px; font-weight: bold; color: #2563eb; letter-spacing: 8px; margin: 20px 0;">
              ${code}
            </div>
            <p style="color: #6b7280; margin: 20px 0;">
              验证码有效期为 10 分钟，请及时使用。
            </p>
          </div>
          
          <div style="margin-top: 30px; text-align: center; color: #9ca3af; font-size: 14px;">
            <p>如果您没有请求此验证码，请忽略此邮件。</p>
            <p>此邮件由系统自动发送，请勿回复。</p>
          </div>
        </div>
      `,
    });
  }
}

// 控制台邮件服务（开发环境）
class ConsoleEmailService implements EmailService {
  async sendVerificationCode(email: string, code: string): Promise<void> {
    console.log('\n=== 邮件发送 ===');
    console.log(`收件人: ${email}`);
    console.log(`验证码: ${code}`);
    console.log('================\n');
  }
}

// 创建邮件服务实例
export function createEmailService(): EmailService {
  // 优先使用环境变量中的邮件服务器配置
  if (process.env.EMAIL_SERVER_HOST && process.env.EMAIL_SERVER_USER && process.env.EMAIL_SERVER_PASSWORD) {
    console.log('Using configured email service:', process.env.EMAIL_SERVER_HOST);
    return new NodemailerEmailService({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
      secure: parseInt(process.env.EMAIL_SERVER_PORT || '587') === 465, // 465端口使用SSL
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });
  }

  // 生产环境优先使用 Resend
  if (process.env.RESEND_API_KEY) {
    return new ResendEmailService(process.env.RESEND_API_KEY);
  }

  // 备选方案：使用 Nodemailer
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return new NodemailerEmailService({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  // 开发环境或无配置时使用控制台输出
  console.warn('No email service configured, using console output');
  return new ConsoleEmailService();
}

// 导出默认邮件服务实例
export const emailService = createEmailService();