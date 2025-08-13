/** @type {import('next').NextConfig} */
const nextConfig = {
  // 暂时禁用静态导出以支持动态路由
  // output: process.env.TAURI_BUILD ? 'export' : undefined,

  // 禁用图片优化（静态导出不支持）
  images: {
    unoptimized: process.env.TAURI_BUILD ? true : false,
  },

  // 转译feature包
  transpilePackages: [
    '@my-platform/ai-knowledge',
    '@my-platform/flow-design',
    '@my-platform/prompt-templates',
  ],

  // 配置 trailingSlash 以避免路由问题
  trailingSlash: true,

  // 禁用 x-powered-by 头
  poweredByHeader: false,

  // Turbopack（Next.js 15 起稳定，替换 experimental.turbo）
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // Webpack 配置
  webpack: (config, { isServer }) => {
    // 修复 Tauri 相关的模块解析问题
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }

    return config;
  },

  // 环境变量
  env: {
    TAURI_BUILD: process.env.TAURI_BUILD,
  },
};

export default nextConfig;
