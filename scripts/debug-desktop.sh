#!/bin/bash

echo "🔍 AI Desktop 调试启动脚本"
echo "================================"

# 检查当前目录
echo "📁 当前目录: $(pwd)"

# 检查 Tauri CLI 是否安装
echo "🔧 检查 Tauri CLI..."
if command -v tauri &> /dev/null; then
    echo "✅ Tauri CLI 已安装: $(tauri --version)"
else
    echo "❌ Tauri CLI 未安装"
    echo "请运行: cargo install tauri-cli"
    exit 1
fi

# 检查 Rust 是否安装
echo "🦀 检查 Rust..."
if command -v rustc &> /dev/null; then
    echo "✅ Rust 已安装: $(rustc --version)"
else
    echo "❌ Rust 未安装"
    echo "请访问 https://rustup.rs/ 安装 Rust"
    exit 1
fi

# 进入桌面应用目录
echo "📂 进入桌面应用目录..."
cd apps/desktop || {
    echo "❌ 无法进入 apps/desktop 目录"
    exit 1
}

# 检查依赖
echo "📦 检查依赖..."
if [ ! -d "node_modules" ]; then
    echo "⚠️  node_modules 不存在，正在安装依赖..."
    pnpm install
fi

# 检查 Tauri 配置
echo "⚙️  检查 Tauri 配置..."
if [ ! -f "src-tauri/tauri.conf.json" ]; then
    echo "❌ Tauri 配置文件不存在"
    exit 1
fi

# 显示配置信息
echo "📋 Tauri 配置信息:"
echo "   - 产品名称: $(jq -r '.productName' src-tauri/tauri.conf.json)"
echo "   - 版本: $(jq -r '.version' src-tauri/tauri.conf.json)"
echo "   - 开发URL: $(jq -r '.build.devUrl' src-tauri/tauri.conf.json)"

# 启动桌面应用
echo ""
echo "🚀 启动桌面应用..."
echo "如果出现问题，请检查以下内容："
echo "1. 确保 API 服务正在运行 (端口 3001)"
echo "2. 检查防火墙设置"
echo "3. 查看终端错误信息"
echo ""

# 启动 Tauri 开发服务器
pnpm tauri:dev