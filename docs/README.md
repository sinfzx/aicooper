# AI Platform - 模块化 AI 工具集

基于 Turborepo 的模块化 AI 工具平台，支持桌面应用、官网和后台服务。

## 项目结构

```
ai-platform/
├── apps/
│   ├── desktop/          # Tauri 桌面应用
│   └── api/              # T3 Stack 全栈应用 (官网 + API)
├── packages/
│   ├── core/             # 核心功能包
│   ├── types/            # TypeScript 类型定义
│   └── ui/               # UI 组件库
├── features/             # 功能模块
│   ├── ai-knowledge/     # AI 知识框架
│   └── prompt-templates/ # 提示词模板库
└── scripts/              # 开发工具脚本
```

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
# 启动所有应用
pnpm dev

# 只启动桌面应用
pnpm dev:desktop

# 只启动 API/官网服务
pnpm dev:api
```

### 构建

```bash
# 构建所有应用
pnpm build

# 构建桌面应用
pnpm build:desktop

# 构建官网
pnpm build:web

# 构建并打包桌面应用
pnpm tauri:build
```

## 功能模块开发

### 创建新功能模块

```bash
# 使用脚本创建新功能
tsx scripts/create-feature.ts "媒体创作工具"

# 安装依赖
pnpm install
```

### 功能模块结构

每个功能模块包含：

- `feature.config.ts` - 功能配置文件
- `src/components/` - React 组件
- `src/index.ts` - 模块入口
- `package.json` - 依赖配置

### 功能配置

在 `feature.config.ts` 中配置：

- **桌面应用集成**：菜单项、快捷键、路由
- **官网展示**：功能介绍、截图、定价
- **API 端点**：后台服务接口
- **依赖管理**：所需的包和服务

### 发布功能

1. 完善功能开发
2. 更新配置文件，设置 `website.enabled: true`
3. 构建项目，官网内容会自动更新
4. 部署应用

## 技术栈

### 桌面应用
- **框架**：Tauri + Next.js
- **语言**：TypeScript + Rust
- **样式**：Tailwind CSS
- **状态管理**：React Hooks

### 全栈应用 (T3 Stack)
- **框架**：Next.js 15
- **语言**：TypeScript
- **样式**：Tailwind CSS
- **数据库**：Prisma + PostgreSQL
- **认证**：NextAuth.js
- **支付**：Stripe
- **环境变量**：@t3-oss/env-nextjs
- **内容管理**：自动生成

### 共享包
- **UI 组件**：React + Tailwind
- **类型定义**：TypeScript
- **核心功能**：功能注册和管理

## 开发工具

### 脚本命令

```bash
# 创建新功能模块
tsx scripts/create-feature.ts "功能名称"

# 生成官网内容
pnpm content:generate

# 数据库操作
pnpm db:push          # 推送 schema 到数据库
pnpm db:migrate       # 创建迁移文件
pnpm db:studio        # 打开 Prisma Studio

# 代码检查
pnpm lint

# 运行测试
pnpm test
```

### 功能状态

- `development` - 开发中，不出现在官网
- `beta` - 测试版，官网标记为 Beta
- `stable` - 稳定版，正常展示
- `deprecated` - 已弃用
- `disabled` - 已禁用

## 部署

### 桌面应用

```bash
# 构建桌面应用
pnpm tauri:build

# 生成的安装包位于：
# apps/desktop/src-tauri/target/release/bundle/
```

### 全栈应用

```bash
# 设置环境变量
cp apps/api/.env.example apps/api/.env
# 编辑 apps/api/.env 填入实际值

# 设置数据库
pnpm db:push

# 构建应用
pnpm build:api

# 部署到 Vercel
vercel --prod

# 或部署到其他平台
```

## 贡献指南

1. Fork 项目
2. 创建功能分支：`git checkout -b feature/new-feature`
3. 提交更改：`git commit -am 'Add new feature'`
4. 推送分支：`git push origin feature/new-feature`
5. 创建 Pull Request

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件。