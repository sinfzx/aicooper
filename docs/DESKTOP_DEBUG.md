# 🖥️ 桌面应用调试指南

## 问题诊断

如果 `pnpm tauri:dev` 启动的是Web预览而不是桌面应用，请按以下步骤排查：

## 1. 检查环境

### 检查 Tauri CLI
```bash
cd apps/desktop
pnpm tauri --version
```
应该显示类似：`tauri-cli 2.7.0`

### 检查 Rust
```bash
rustc --version
```
如果未安装，请访问 https://rustup.rs/ 安装

## 2. 正确的启动方式

### 方式1: 从根目录启动
```bash
# 从项目根目录
pnpm desktop:dev
```

### 方式2: 从桌面应用目录启动
```bash
cd apps/desktop
pnpm tauri:dev
```

### 方式3: 使用调试脚本
```bash
./scripts/debug-desktop.sh
```

## 3. 启动过程说明

正确的启动过程应该是：

1. **启动 Next.js 开发服务器** (端口 3002)
   ```
   ▲ Next.js 15.4.2
   - Local:        http://localhost:3002
   ```

2. **编译 Rust 代码**
   ```
   Compiling tauri-nextjs-template v0.1.0
   ```

3. **打开桌面窗口**
   - 应该会弹出一个独立的桌面窗口
   - 窗口标题显示 "AI Desktop"
   - 窗口大小为 1200x800

## 4. 如何区分Web预览和桌面应用

### Web预览模式 (错误)
- 在浏览器中打开
- 地址栏显示 `http://localhost:3002`
- 无法使用 Tauri API
- 调试页面显示 "🌐 当前运行在Web环境中"

### 桌面应用模式 (正确)
- 独立的桌面窗口
- 没有浏览器地址栏
- 可以使用 Tauri API
- 调试页面显示 "✅ Tauri 环境: 是"

## 5. 调试工具

### 访问调试页面
无论在哪种模式下，都可以访问调试页面：
```
http://localhost:3002/debug
```

### 查看环境信息
调试页面会显示：
- 是否在 Tauri 环境中
- 是否在开发环境中
- 可用的 Tauri 命令
- 命令测试结果

## 6. 常见问题解决

### 问题1: 启动后只有Web页面
**原因**: Tauri 编译失败或配置错误
**解决**:
```bash
cd apps/desktop
# 清理缓存
rm -rf .next
rm -rf src-tauri/target
# 重新启动
pnpm tauri:dev
```

### 问题2: Rust 编译错误
**原因**: Rust 依赖问题
**解决**:
```bash
cd apps/desktop/src-tauri
cargo clean
cargo build
```

### 问题3: 端口冲突
**原因**: 端口 3002 被占用
**解决**:
```bash
# 查找占用进程
lsof -ti:3002
# 终止进程
kill -9 $(lsof -ti:3002)
```

### 问题4: 权限问题 (macOS)
**原因**: macOS 安全限制
**解决**:
- 系统偏好设置 > 安全性与隐私
- 允许应用运行

## 7. 开发工作流

### 推荐的开发流程
1. **启动 API 服务** (端口 3001)
   ```bash
   pnpm dev:api
   ```

2. **启动桌面应用** (端口 3002)
   ```bash
   pnpm desktop:dev
   ```

3. **访问调试页面** 确认环境
   ```
   http://localhost:3002/debug
   ```

### 热重载
- **前端代码**: 自动热重载
- **Rust代码**: 需要重启应用
- **配置文件**: 需要重启应用

## 8. 生产构建

### 构建桌面应用
```bash
cd apps/desktop
pnpm tauri:build
```

构建产物位置：
- **macOS**: `src-tauri/target/release/bundle/macos/`
- **Windows**: `src-tauri/target/release/bundle/msi/`
- **Linux**: `src-tauri/target/release/bundle/deb/`

## 9. 日志查看

### 开发环境日志
- **Next.js**: 终端输出
- **Rust**: 终端输出
- **浏览器**: 开发者工具控制台

### 生产环境日志
- **macOS**: `~/Library/Logs/AI Desktop/`
- **Windows**: `%APPDATA%\AI Desktop\logs\`
- **Linux**: `~/.local/share/AI Desktop/logs/`

## 10. 性能优化

### 开发环境优化
```bash
# 使用 turbopack (更快的构建)
pnpm dev --turbo
```

### 构建优化
```bash
# 优化构建大小
pnpm tauri:build --release
```

## 需要帮助？

如果仍然遇到问题，请提供以下信息：
1. 操作系统版本
2. Node.js 版本 (`node --version`)
3. Rust 版本 (`rustc --version`)
4. 完整的错误日志
5. 调试页面的环境信息截图