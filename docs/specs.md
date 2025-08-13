## 技术架构总览

本仓库是一个基于 Turborepo 的多包（Monorepo）AI 平台，包含桌面应用（Tauri + Next.js）、全栈网站与 API（Next.js App Router + tRPC + Prisma），以及一组共享包与可插拔的功能模块（Features）。

- **包管理**: pnpm + Turborepo（工作区在 `pnpm-workspace.yaml` 中定义）
- **应用**:
  - `apps/desktop`：Tauri 桌面应用（Next.js 前端）
  - `apps/api`：全栈网站与 API（Next.js 15 + tRPC 11 + Prisma 6）
- **共享包**:
  - `packages/core`：核心功能包（功能注册与运行时集成）
  - `packages/types`：共享类型定义
  - `packages/ui`：通用 UI 组件库（Tailwind CSS）
- **功能模块（Features）**:
  - 位于 `features/*`，每个功能模块具备自描述的 `feature.config.ts` 与组件/入口

与 README 描述一致，平台支持将功能以模块化方式装配到桌面应用与官网，并通过脚本自动生成展示内容。

## 目录结构

```
apps/
  desktop/            # Tauri + Next.js 桌面端
  api/                # Next.js App Router（官网 + API）
packages/
  core/               # 核心运行时与功能注册
  types/              # 共享类型
  ui/                 # UI 组件库
features/
  <feature-name>/     # 功能模块（含 feature.config.ts）
scripts/              # 脚本（如 create-feature.ts）
docs/                 # 文档（本文件、开发规则、建议）
```

## 技术栈与版本

- **Next.js**: 15.x（`apps/api`）
- **React**: 19.x
- **TypeScript**: ~5.8.3（严格模式建议开启）
- **tRPC**: 11.x（`@trpc/*`）
- **Prisma**: 6.x（数据库：PostgreSQL）
- **UI**: Tailwind CSS 4.x + `@tailwindcss/postcss` 4.x
- **认证**: 当前依赖 `next-auth@^4.24.x`（目标建议迁移至 NextAuth v5 + Magic Link，见建议）
- **环境变量**: `@t3-oss/env-nextjs`
- **序列化**: SuperJSON（建议 tRPC 层启用）

## 构建与开发流程

- 根脚本（`package.json`）

  - `pnpm dev`：并行启动所有应用
  - `pnpm dev:desktop` / `pnpm dev:api`
  - `pnpm build`、`pnpm build:desktop`、`pnpm build:api`
  - `pnpm tauri:dev`、`pnpm tauri:build`
  - 内容生成：`pnpm content:generate`（透传到 `apps/api`）
  - 数据库：`pnpm db:push`、`pnpm db:migrate`、`pnpm db:studio`（过滤到 `@my-platform/api`）

- Turborepo 任务（`turbo.json`）
  - `build` 产物缓存 `.next/**`、`dist/**`、`target/**`
  - `dev` 非缓存、持久化任务
  - `content:generate` 将产物输出到 `apps/api/src/content/**`

## 应用分层

### apps/api（官网 + API）

- **路由与渲染**: Next.js App Router（`src/app`）
- **tRPC 服务**: `@trpc/server` + `@trpc/next` + `@trpc/react-query`
  - 推荐在 `src/trpc` 下维护：
    - `router.ts`（服务端路由聚合）
    - `procedures.ts`（`publicProcedure` / `protectedProcedure` with Zod）
    - `client.tsx`（`createTRPCClient` with `httpBatchStreamLink`）
    - 启用 `superjson` 作为 transformer
- **数据层**: Prisma 6 + PostgreSQL（`prisma/schema.prisma`）
  - 命令：`pnpm db:push`、`pnpm db:migrate`、`pnpm db:studio`
- **认证**: 当前包引入 `next-auth@^4.24.x` + `@auth/prisma-adapter`，建议迁移到 v5 并启用 Magic Link（见建议）
- **环境变量**: `@t3-oss/env-nextjs` 管理（`src/env.ts`）
- **内容生成**: `scripts/generate-content.ts` 负责生成/更新 `src/content/*.json`，用于官网/文档展示与 API 输出
- **样式**: Tailwind CSS 4（无传统 `tailwind.config.js` 的场景需确认 PostCSS 插件链）

### apps/desktop（Tauri 桌面应用）

- **外壳**: Tauri（Rust）
- **前端**: Next.js（共享 `packages/ui`、`packages/types`）
- **打包**: `pnpm tauri:build` 产物位于 `apps/desktop/src-tauri/target/...`
- **安全**: 需确保 Tauri 权限与资源访问策略（`src-tauri/capabilities/*.json`）正确配置

## 共享包

### packages/core

- 职责：
  - 功能注册与运行时装配（Feature 生命周期、菜单/路由注入、依赖检查）
  - 与 `features/*` 的 `feature.config.ts` 协议对接

### packages/types

- 职责：
  - 跨应用与功能模块的公共类型定义（例如 Feature 元数据、菜单/快捷键、API 契约）

### packages/ui

- 职责：
  - 共享 UI 组件库，统一样式体系（Tailwind 4）
  - 输出通用基础组件与布局、主题切换等能力

## 功能模块（Features）

- 每个功能模块位于 `features/<feature-name>`：
  - `feature.config.ts`：功能元数据与集成配置
  - `src/`：React 组件与业务逻辑（桌面/官网复用）
  - `package.json`：依赖声明

### feature.config.ts 建议结构

```ts
export default {
  id: "ai-knowledge",
  name: "AI 知识框架",
  status: "development" | "beta" | "stable" | "deprecated" | "disabled",
  website: {
    enabled: boolean,
    route: "/features/ai-knowledge",
    hero: { title: string, subtitle?: string },
    screenshots?: string[],
    pricing?: Array<{ plan: string; price: string; features: string[] }>,
  },
  desktop: {
    menus?: Array<{ label: string; route: string; shortcut?: string }>,
    routes?: Array<{ path: string; component: string }>,
  },
  api: {
    trpcRouters?: string[],
    restRoutes?: string[],
    permissions?: string[],
  },
  dependencies: {
    packages?: string[],
    services?: string[], // 例如：数据库、外部 API
  },
} as const
```

> 实际字段以各模块需求为准，核心是“可发布到官网 + 可注入到桌面端 + 可注册到 API”的三端一致性。

## API 设计（tRPC）

- 路由分类：`query`（查询）、`mutation`（变更）
- 输入校验：Zod（所有输入参数必须校验）
- 认证：`protectedProcedure` 限制受保护路由（结合 NextAuth 会话）
- Transformer：`superjson`
- 客户端：React Query 作为数据层（`@trpc/react-query`）

## 数据层（Prisma）

- 模型位于 `apps/api/prisma/schema.prisma`
- 通过迁移管理变更（优先 `migrate`，必要时使用 `db push` 同步开发态）
- 性能预算：复杂查询建议 < 200ms（合理索引、连接池、N+1 规避）

## 认证与授权

- 现状：`next-auth@4` + Prisma Adapter 依赖已安装
- 目标：Magic Link 登录（NextAuth v5）
- 路线：详见 `docs/suggestion.md` 升级建议

## 内容生成流水线

- 入口：`apps/api/scripts/generate-content.ts`
- 产物：`apps/api/src/content/*.json`
- 用途：
  - 官网展示文案、功能清单与截图链接
  - 可被 API 或页面静态导入

## 环境与配置

- `@t3-oss/env-nextjs` 统一管理 `.env`（示例：`DATABASE_URL`、`NEXTAUTH_SECRET`、`STRIPE_KEY` 等）
- `@t3-oss/env-nextjs` 统一管理 `.env`（示例：`DATABASE_URL`、`NEXTAUTH_SECRET` 等）
- Next.js `next.config.ts`（API/桌面端各自维护）
- Tauri 配置：`apps/desktop/src-tauri/*`

## 测试与质量

- Lint：`pnpm lint`（Next + ESLint 9）
- 测试：`pnpm test`（可在各包内自定义测试框架）
- 统一提交与发布策略依赖 Turborepo pipeline（建议在 CI 中启用构建与类型检查）
