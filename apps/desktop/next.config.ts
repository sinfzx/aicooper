import type { NextConfig } from "next";

const isTauri = process.env.TAURI_BUILD === 'true'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@my-platform/core', '@my-platform/types', '@my-platform/ui'],
  
  // Tauri 构建配置
  ...(isTauri && {
    output: "export",
    images: {
      unoptimized: true,
    },
    distDir: "dist",
  }),
};

export default nextConfig;