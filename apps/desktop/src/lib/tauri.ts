// Tauri 环境检测和工具函数

/**
 * 检查是否在 Tauri 环境中运行
 */
export function isTauriApp(): boolean {
  if (typeof window === 'undefined') return false;
  
  // 检查多个Tauri特征
  const windowAny = window as any;
  
  // 方法1: 检查 __TAURI__ 对象
  if (windowAny.__TAURI__ !== undefined) {
    return true;
  }
  
  // 方法2: 检查 __TAURI_INTERNALS__ 对象
  if (windowAny.__TAURI_INTERNALS__ !== undefined) {
    return true;
  }
  
  // 方法3: 检查用户代理字符串
  if (window.navigator.userAgent.includes('Tauri')) {
    return true;
  }
  
  // 方法4: 检查是否有 tauri:// 协议支持
  try {
    if (windowAny.location && windowAny.location.protocol === 'tauri:') {
      return true;
    }
  } catch (e) {
    // 忽略错误
  }
  
  // 方法5: 检查是否在文件协议下运行（Tauri构建后的特征）
  if (window.location.protocol === 'file:' || window.location.protocol === 'tauri:') {
    return true;
  }
  
  return false;
}

/**
 * 检查是否在开发环境中
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development';
}

/**
 * 检查是否在构建环境中
 */
export function isTauriBuild(): boolean {
  return process.env.TAURI_BUILD === 'true';
}

/**
 * 获取当前运行环境信息
 */
export function getEnvironmentInfo() {
  return {
    isTauri: isTauriApp(),
    isDev: isDevelopment(),
    isBuild: isTauriBuild(),
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server',
    platform: typeof window !== 'undefined' ? window.navigator.platform : 'server',
  };
}

/**
 * 异步检查是否在 Tauri 环境中运行（更可靠）
 */
export async function checkTauriEnvironment(): Promise<boolean> {
  if (typeof window === 'undefined') return false;
  
  // 首先尝试同步检测
  if (isTauriApp()) {
    return true;
  }
  
  // 异步检测：尝试导入和使用Tauri API
  try {
    const { invoke } = await import('@tauri-apps/api/core');
    if (invoke) {
      // 尝试调用一个简单的命令来确认Tauri环境
      await invoke('greet');
      return true;
    }
  } catch (error) {
    console.warn('Tauri API test failed:', error);
  }
  
  return false;
}

/**
 * 安全地导入 Tauri API
 */
export async function importTauriApi() {
  try {
    // 使用异步检测
    const isTauri = await checkTauriEnvironment();
    if (isTauri) {
      const { invoke } = await import('@tauri-apps/api/core');
      const { getCurrentWindow } = await import('@tauri-apps/api/window');
      const currentWindow = getCurrentWindow();
      return { invoke, currentWindow };
    }
  } catch (error) {
    console.warn('Failed to import Tauri API:', error);
  }
  return { invoke: null, currentWindow: null };
}

/**
 * 显示环境信息（调试用）
 */
export function logEnvironmentInfo() {
  const info = getEnvironmentInfo();
  console.log('🔍 Environment Info:', info);
  
  if (info.isTauri) {
    console.log('✅ Running in Tauri desktop app');
  } else {
    console.log('🌐 Running in web browser');
  }
}