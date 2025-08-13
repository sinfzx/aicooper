#!/bin/bash

echo "🚀 启动 Tauri 桌面应用..."

# 检查是否在正确的目录
if [ ! -f "src-tauri/Cargo.toml" ]; then
    echo "❌ 错误: 请在 apps/desktop 目录中运行此脚本"
    exit 1
fi

# 检查依赖
echo "📦 检查依赖..."
if ! command -v cargo &> /dev/null; then
    echo "❌ 错误: 未找到 Rust/Cargo，请先安装 Rust"
    exit 1
fi

if ! command -v pnpm &> /dev/null; then
    echo "❌ 错误: 未找到 pnpm，请先安装 pnpm"
    exit 1
fi

# 安装前端依赖
echo "📦 安装前端依赖..."
pnpm install

# 启动 Tauri 开发服务器
echo "🔧 启动 Tauri 开发服务器..."
echo "📝 注意: 这将启动前端开发服务器和 Tauri 应用"
echo "🌐 前端服务器: http://localhost:3002"
echo "🖥️  Tauri 应用将自动打开"
echo ""

pnpm tauri:dev