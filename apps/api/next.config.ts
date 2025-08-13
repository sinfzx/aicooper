import type { NextConfig } from "next";
import { execSync } from 'child_process'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@my-platform/core', '@my-platform/types', '@my-platform/ui'],
  
  // T3 Stack 配置
  serverExternalPackages: ['@prisma/client', 'bcryptjs'],
  
  webpack: (config, { isServer }) => {
    if (isServer) {
      // 构建时生成内容
      try {
        execSync('tsx scripts/generate-content.ts', { stdio: 'inherit' })
      } catch (error) {
        console.warn('Failed to generate content:', error)
      }
    }
    return config
  }
};

export default nextConfig;