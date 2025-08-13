# 邮箱+验证码登录系统设置指南

## 概述

本系统实现了无密码的邮箱+验证码登录方式，支持Web端和桌面端，登录状态保持30天。

## 功能特性

- ✅ 邮箱+验证码登录（无需密码）
- ✅ 自动注册新用户
- ✅ 登录状态保持30天
- ✅ Web端和桌面端支持
- ✅ 多种邮件服务支持（Resend、SMTP）
- ✅ 开发环境友好（控制台输出验证码）

## 环境配置

### 1. 数据库设置

确保PostgreSQL数据库已运行，并更新 `.env` 文件：

```bash
DATABASE_URL="postgresql://username:password@localhost:5432/aiplatform"
```

### 2. NextAuth 配置

```bash
NEXTAUTH_SECRET="your-nextauth-secret-key"
NEXTAUTH_URL="http://localhost:3001"
JWT_SECRET="your-jwt-secret-key"
```

### 3. 邮件服务配置

#### 方案1: Resend (推荐)

1. 注册 [Resend](https://resend.com) 账户
2. 获取 API Key
3. 配置环境变量：

```bash
RESEND_API_KEY="re_your_resend_api_key"
```

#### 方案2: Gmail SMTP

1. 启用Gmail的两步验证
2. 生成应用专用密码
3. 配置环境变量：

```bash
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_SECURE="false"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
```

#### 方案3: 开发环境

开发环境下，验证码会直接输出到控制台，无需配置邮件服务。

## 使用方法

### Web端

1. 访问 `http://localhost:3001/auth/signin`
2. 输入邮箱地址
3. 点击"发送验证码"
4. 检查邮箱或控制台获取验证码
5. 输入验证码完成登录

### 桌面端

1. 启动桌面应用
2. 如未登录，会自动跳转到登录页面
3. 输入邮箱地址和验证码
4. 完成登录后可使用所有功能

## API 接口

### 发送验证码

```typescript
// tRPC 调用
const result = await api.auth.sendVerificationCode.mutate({
  email: "user@example.com"
});
```

### 验证码登录

```typescript
// tRPC 调用
const result = await api.auth.verifyCodeAndAuth.mutate({
  email: "user@example.com",
  code: "123456"
});
```

### NextAuth 登录

```typescript
// NextAuth 调用
const result = await signIn('email-verification', {
  email: "user@example.com",
  code: "123456",
  redirect: false
});
```

## 安全特性

- 验证码10分钟过期
- 每个邮箱1分钟内只能发送一次验证码
- 验证码最多尝试5次
- 验证码使用后自动失效
- JWT Token 30天过期
- 自动清理过期的验证码

## 数据库表结构

### VerificationCode 表

```sql
CREATE TABLE verification_codes (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  code VARCHAR(6) NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  attempts INTEGER DEFAULT 0,
  used BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### User 表

```sql
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  email_verified TIMESTAMP,
  image TEXT,
  avatar TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## 故障排除

### 1. 验证码收不到

- 检查邮件服务配置是否正确
- 查看控制台是否有错误信息
- 开发环境下检查控制台输出

### 2. 登录失败

- 确认验证码未过期（10分钟内）
- 检查验证码是否正确（6位数字）
- 确认验证码未被使用过

### 3. 桌面端连接失败

- 确认API服务正在运行（端口3001）
- 检查网络连接
- 查看桌面端控制台错误信息

## 开发调试

### 开发环境验证码

开发环境下，验证码会输出到控制台：

```
=== 邮件发送 ===
收件人: user@example.com
验证码: 123456
================
```

### 桌面端调试

桌面端在Web环境下会使用固定验证码 `123456` 进行测试。

## 部署注意事项

1. 生产环境必须配置真实的邮件服务
2. 确保 `NEXTAUTH_SECRET` 和 `JWT_SECRET` 足够复杂
3. 配置正确的 `NEXTAUTH_URL`
4. 定期清理过期的验证码记录

## 扩展功能

系统设计支持以下扩展：

- 短信验证码登录
- 社交媒体登录
- 多因素认证
- 登录日志记录
- 设备管理