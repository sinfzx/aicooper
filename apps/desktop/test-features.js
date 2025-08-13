#!/usr/bin/env node

/**
 * AI Platform 功能测试脚本
 * 验证所有核心功能模块是否正常工作
 */

const fs = require('fs');
const path = require('path');

console.log('🧪 AI Platform 功能测试开始...\n');

// 测试结果收集
const testResults = [];

function addTest(name, passed, message = '') {
  testResults.push({ name, passed, message });
  const status = passed ? '✅' : '❌';
  console.log(`${status} ${name}${message ? ': ' + message : ''}`);
}

// 1. 检查核心文件是否存在
console.log('📁 检查核心文件...');

const coreFiles = [
  'src/app/page.tsx',
  'src/components/ChatInterface.tsx',
  'src/components/ApiKeyManager.tsx',
  'src/components/SettingsManager.tsx',
  'src/data/builtInFrameworks.ts',
  'src/data/builtInTemplates.ts',
];

coreFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  const exists = fs.existsSync(filePath);
  addTest(`核心文件 ${file}`, exists, exists ? '存在' : '缺失');
});

// 2. 检查功能模块
console.log('\n🧩 检查功能模块...');

const featureModules = [
  '../../features/ai-knowledge/src/components/KnowledgeFramework.tsx',
  '../../features/prompt-templates/src/components/PromptTemplates.tsx',
];

featureModules.forEach(module => {
  const modulePath = path.join(__dirname, module);
  const exists = fs.existsSync(modulePath);
  addTest(`功能模块 ${path.basename(module)}`, exists, exists ? '存在' : '缺失');
});

// 3. 检查数据文件
console.log('\n📊 检查数据文件...');

try {
  const frameworksPath = path.join(__dirname, 'src/data/builtInFrameworks.ts');
  if (fs.existsSync(frameworksPath)) {
    const frameworksContent = fs.readFileSync(frameworksPath, 'utf8');
    const hasFrameworks = frameworksContent.includes('export const builtInFrameworks');
    addTest('内置知识框架数据', hasFrameworks, hasFrameworks ? '包含框架数据' : '数据格式错误');
  }

  const templatesPath = path.join(__dirname, 'src/data/builtInTemplates.ts');
  if (fs.existsSync(templatesPath)) {
    const templatesContent = fs.readFileSync(templatesPath, 'utf8');
    const hasTemplates = templatesContent.includes('export const builtInTemplates');
    addTest('内置提示词模板数据', hasTemplates, hasTemplates ? '包含模板数据' : '数据格式错误');
  }
} catch (error) {
  addTest('数据文件读取', false, error.message);
}

// 4. 检查包依赖
console.log('\n📦 检查包依赖...');

const packageJsonPath = path.join(__dirname, 'package.json');
if (fs.existsSync(packageJsonPath)) {
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const requiredDeps = [
      '@my-platform/ui',
      '@my-platform/types',
      '@my-platform/core',
      'next',
      'react',
      '@tauri-apps/api'
    ];

    requiredDeps.forEach(dep => {
      const hasDepency = packageJson.dependencies && packageJson.dependencies[dep];
      addTest(`依赖 ${dep}`, !!hasDepency, hasDepency ? `版本 ${hasDepency}` : '缺失');
    });
  } catch (error) {
    addTest('package.json 解析', false, error.message);
  }
}

// 5. 检查 Tauri 配置
console.log('\n🦀 检查 Tauri 配置...');

const tauriConfigPath = path.join(__dirname, 'src-tauri/tauri.conf.json');
if (fs.existsSync(tauriConfigPath)) {
  try {
    const tauriConfig = JSON.parse(fs.readFileSync(tauriConfigPath, 'utf8'));
    addTest('Tauri 配置文件', true, `应用名称: ${tauriConfig.productName || 'AI Platform'}`);
  } catch (error) {
    addTest('Tauri 配置解析', false, error.message);
  }
} else {
  addTest('Tauri 配置文件', false, '配置文件不存在');
}

// 6. 生成测试报告
console.log('\n📋 测试报告');
console.log('='.repeat(50));

const totalTests = testResults.length;
const passedTests = testResults.filter(test => test.passed).length;
const failedTests = totalTests - passedTests;

console.log(`总测试数: ${totalTests}`);
console.log(`通过: ${passedTests} ✅`);
console.log(`失败: ${failedTests} ❌`);
console.log(`成功率: ${((passedTests / totalTests) * 100).toFixed(1)}%`);

if (failedTests > 0) {
  console.log('\n❌ 失败的测试:');
  testResults
    .filter(test => !test.passed)
    .forEach(test => {
      console.log(`  - ${test.name}: ${test.message}`);
    });
}

console.log('\n🎯 建议的下一步操作:');

if (failedTests === 0) {
  console.log('✅ 所有测试通过！可以启动开发服务器:');
  console.log('   npm run tauri:dev');
} else {
  console.log('🔧 请修复失败的测试项，然后重新运行测试');
  console.log('   node test-features.js');
}

console.log('\n📚 更多信息请查看:');
console.log('   - FEATURES.md: 功能说明文档');
console.log('   - PROJECT_SUMMARY.md: 项目总结');
console.log('   - README.md: 快速开始指南');

process.exit(failedTests > 0 ? 1 : 0);