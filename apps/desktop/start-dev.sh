#!/bin/bash

# AI Platform Desktop 开发启动脚本

echo "🚀 启动 AI Platform Desktop 开发环境..."

# 检查是否安装了依赖
if [ ! -d "node_modules" ]; then
    echo "📦 安装依赖中..."
    npm install
fi

# 检查 Tauri 是否安装
if ! command -v cargo &> /dev/null; then
    echo "❌ 错误: 需要安装 Rust 和 Cargo"
    echo "请访问 https://rustup.rs/ 安装 Rust"
    exit 1
fi

# 启动开发服务器
echo "🔧 启动开发服务器..."
npm run tauri dev

echo "✅ 开发环境已启动！"