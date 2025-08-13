#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 开始测试桌面应用构建...');

try {
  // 切换到桌面应用目录
  process.chdir(path.join(__dirname));
  
  console.log('📦 安装依赖...');
  execSync('npm install', { stdio: 'inherit' });
  
  console.log('🔨 构建应用...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('✅ 构建成功！');
  
} catch (error) {
  console.error('❌ 构建失败:', error.message);
  process.exit(1);
}