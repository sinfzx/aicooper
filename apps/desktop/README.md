# AI Platform Desktop

基于 Tauri 的桌面 AI 工具集，提供本地化的 API Key 管理和 AI 聊天功能。

## 功能特性

### 🔑 API Key 管理
- **本地存储**：所有 API Key 都存储在本地，保护用户隐私
- **多提供商支持**：支持 OpenAI、Anthropic 等主流 AI 服务商
- **连接测试**：添加 API Key 时可以测试连接有效性
- **简单配置**：快速设置和管理 API Key

### 💬 AI 聊天
- **多模型支持**：支持 GPT-4、Claude 等多种 AI 模型
- **实时对话**：流畅的聊天体验
- **模型切换**：随时切换不同的 AI 模型
- **简洁界面**：专注于对话体验

### ⚙️ 设置管理
- **主题切换**：支持浅色、深色和跟随系统主题
- **语言设置**：支持中文和英文界面
- **AI 参数调节**：可调节温度、最大 token 数等参数
- **简单易用**：直观的设置界面

## 开发指南

### 环境要求
- Node.js 18+
- Rust 1.70+
- pnpm

### 开发模式
```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm tauri:dev
```

### 构建应用
```bash
# 构建桌面应用
pnpm tauri:build
```

## 支持的 AI 提供商

### OpenAI
- **模型**：GPT-4, GPT-4 Turbo, GPT-3.5 Turbo
- **配置**：API Key, Base URL (可选)
- **测试端点**：`/v1/models`

### Anthropic
- **模型**：Claude 3 Opus, Sonnet, Haiku
- **配置**：API Key
- **测试端点**：`/v1/messages`

## 数据存储

所有用户数据都存储在本地：

### macOS
```
~/Library/Application Support/com.tauri.dev/
├── api_keys.json      # API Key 配置
├── settings.json      # 应用设置
└── chat_history.json  # 聊天历史 (计划中)
```

### Windows
```
%APPDATA%/com.tauri.dev/
├── api_keys.json
├── settings.json
└── chat_history.json
```

### Linux
```
~/.local/share/com.tauri.dev/
├── api_keys.json
├── settings.json
└── chat_history.json
```

## 安全性

- **本地存储**：API Key 仅存储在用户本地设备
- **加密传输**：所有 API 请求都通过 HTTPS 加密
- **无服务器依赖**：不依赖任何第三方服务器
- **开源透明**：代码完全开源，可审计

## 使用示例

### 添加 API Key
1. 点击侧边栏的 "🔑 API 密钥"
2. 点击 "添加 API Key"
3. 选择提供商（OpenAI 或 Anthropic）
4. 输入您的 API Key
5. 点击 "测试连接" 验证
6. 点击 "保存"

### 开始聊天
1. 点击侧边栏的 "💬 AI 聊天"
2. 选择要使用的 API Key
3. 输入消息开始对话
4. 按 Enter 发送消息

### 调整设置
1. 点击侧边栏的 "⚙️ 设置"
2. 调整主题和语言偏好
3. 配置 AI 参数
4. 点击 "保存设置"

## 故障排除

### API Key 测试失败
- 检查 API Key 是否正确
- 确认网络连接正常
- 验证 Base URL 设置（如果使用自定义端点）

### 聊天无响应
- 确认选择的 API Key 有效
- 检查余额是否充足
- 查看错误消息获取详细信息

### 应用无法启动
- 确认系统满足最低要求
- 检查防火墙设置
- 查看应用日志文件

## 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 创建 Pull Request

## 许可证

MIT License