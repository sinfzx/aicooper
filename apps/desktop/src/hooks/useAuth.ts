import { useState, useEffect } from 'react';
import { importTauriApi, isTauriApp, checkTauriEnvironment, logEnvironmentInfo } from '@/lib/tauri';

interface AuthUser {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface AuthData {
  user: AuthUser;
  token: string;
  expires_at: number;
}

export const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isTauriEnv, setIsTauriEnv] = useState(false);

  useEffect(() => {
    // 显示环境信息（调试用）
    logEnvironmentInfo();
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    // 首先检测Tauri环境
    const tauriDetected = await checkTauriEnvironment();
    setIsTauriEnv(tauriDetected);
    console.log(`🔍 Tauri环境检测结果: ${tauriDetected ? '✅ 是' : '❌ 否'}`);
    
    // 然后检查认证状态
    await checkAuthStatus();
  };

  const checkAuthStatus = async () => {
    setIsLoading(true);
    try {
      const { invoke } = await importTauriApi();
      
      if (!isTauriEnv || !invoke) {
        // Web环境下检查localStorage
        console.log('🌐 Web环境：检查localStorage认证状态');
        const authUser = localStorage.getItem('auth_user');
        const authToken = localStorage.getItem('auth_token');
        const authExpires = localStorage.getItem('auth_expires');
        
        if (authUser && authToken && authExpires) {
          const expiresAt = parseInt(authExpires);
          if (Date.now() < expiresAt) {
            const userData = JSON.parse(authUser);
            setUser(userData);
            setIsAuthenticated(true);
            console.log('✅ Web环境：找到有效的认证数据');
          } else {
            // 清除过期数据
            localStorage.removeItem('auth_user');
            localStorage.removeItem('auth_token');
            localStorage.removeItem('auth_expires');
            console.log('⏰ Web环境：认证数据已过期，已清除');
          }
        } else {
          console.log('❌ Web环境：未找到认证数据');
        }
        return;
      }

      // Tauri环境下检查本地存储
      console.log('🖥️ Tauri环境：检查本地认证状态');
      const authData = await invoke<AuthData | null>('get_auth_data');
      if (authData) {
        setUser(authData.user);
        setIsAuthenticated(true);
        console.log('✅ Tauri环境：找到有效的认证数据');
      } else {
        console.log('❌ Tauri环境：未找到认证数据');
      }
    } catch (error) {
      console.error('❌ 检查认证状态失败:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = (userData: AuthUser) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    try {
      const { invoke } = await importTauriApi();
      
      if (!isTauriEnv || !invoke) {
        // Web环境下清除localStorage
        console.log('🌐 Web环境：清除认证数据');
        localStorage.removeItem('auth_user');
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_expires');
      } else {
        // Tauri环境下调用logout命令
        console.log('🖥️ Tauri环境：调用logout命令');
        await invoke('logout');
      }
    } catch (error) {
      console.error('❌ 登出失败:', error);
    } finally {
      setUser(null);
      setIsAuthenticated(false);
      console.log('✅ 登出成功');
      
      // 退出登录后跳转到登录页面
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
    }
  };

  return {
    user,
    isLoading,
    isAuthenticated,
    isTauriEnv,
    login,
    logout,
    checkAuthStatus,
  };
};