"use client";

import React, { useState } from 'react';
import { 
  TextInput, 
  Button, 
  Stack, 
  Text, 
  Alert, 
  Group, 
  PinInput,
  Paper,
  Divider,
  Badge
} from '@mantine/core';
import { 
  IconMail, 
  IconShield, 
  IconArrowLeft, 
  IconRefresh,
  IconAlertCircle
} from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';

// Safely import Tauri API with fallback
const getTauriInvoke = async () => {
  try {
    if (typeof window !== 'undefined' && (window as any).__TAURI__) {
      const { invoke } = await import('@tauri-apps/api/core');
      return invoke;
    }
  } catch (error) {
    console.warn('Tauri API not available:', error);
  }
  return null;
};

interface LoginFormProps {
  onSuccess?: (user: any) => void;
  onLoginSuccess?: (user: any) => void;
  onLogin?: (user: any) => void;
}

interface AuthResponse {
  success: boolean;
  message: string;
  user?: {
    id: string;
    email: string;
    name: string;
    avatar?: string;
  };
  token?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess, onLoginSuccess, onLogin }) => {
  const [step, setStep] = useState<'email' | 'code'>('email');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [error, setError] = useState('');

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setIsLoading(true);
    setError('');
    
    try {
      const invoke = await getTauriInvoke();
      if (!invoke) {
        // Web环境下的模拟
        console.log(`模拟发送验证码到: ${email}`);
        setStep('code');
        setCountdown(60);
        
        const timer = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
        return;
      }

      const response = await invoke<{ success: boolean; message: string }>('send_verification_code', {
        email
      });

      if (response.success) {
        setStep('code');
        setCountdown(60);
        
        const timer = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.error('发送验证码失败:', error);
      setError('发送验证码失败，请稍后重试');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !code || isLoading) return;

    setIsLoading(true);
    setError('');
    
    try {
      const invoke = await getTauriInvoke();
      if (!invoke) {
        // Web环境下的模拟
        if (code === '123456') {
          const mockUser = {
            id: 'mock-user-id',
            email,
            name: email.split('@')[0],
            avatar: undefined
          };
          
          // 保存到localStorage
          localStorage.setItem('auth_user', JSON.stringify(mockUser));
          localStorage.setItem('auth_token', 'mock-token');
          localStorage.setItem('auth_expires', (Date.now() + 30 * 24 * 60 * 60 * 1000).toString());
          
          // 调用所有回调函数
          onSuccess?.(mockUser);
          onLoginSuccess?.(mockUser);
          onLogin?.(mockUser);
        } else {
          setError('验证码错误，请输入 123456');
        }
        return;
      }

      const response = await invoke<AuthResponse>('verify_code_and_login', {
        email,
        code
      });

      if (response.success && response.user && response.token) {
        // 保存认证信息到本地存储
        await invoke('save_auth_data', {
          user: response.user,
          token: response.token,
          expiresAt: Date.now() + 30 * 24 * 60 * 60 * 1000 // 30天
        });
        
        // 调用所有回调函数
        onSuccess?.(response.user);
        onLoginSuccess?.(response.user);
        onLogin?.(response.user);
      } else {
        setError(response.message || '验证失败');
      }
    } catch (error) {
      console.error('验证码验证失败:', error);
      setError('验证失败，请检查验证码是否正确');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = () => {
    if (countdown > 0) return;
    handleSendCode(new Event('submit') as any);
  };

  const handleBackToEmail = () => {
    setStep('email');
    setCode('');
    setError('');
  };

  if (step === 'email') {
    return (
      <Stack gap="md">
        {error && (
          <Alert 
            icon={<IconAlertCircle size={16} />} 
            color="red" 
            variant="light"
            radius="md"
          >
            {error}
          </Alert>
        )}
        
        <form onSubmit={handleSendCode}>
          <Stack gap="md">
            <TextInput
              label="邮箱地址"
              placeholder="请输入您的邮箱地址"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              leftSection={<IconMail size={16} />}
              required
              disabled={isLoading}
              radius="md"
              size="md"
              autoFocus
            />
            
            <Button
              type="submit"
              size="md"
              radius="md"
              disabled={!email.trim() || isLoading}
              loading={isLoading}
              className="flat-button"
            >
              发送验证码
            </Button>
          </Stack>
        </form>
        
        <Text size="xs" c="dimmed" ta="center">
          我们将向您的邮箱发送6位数字验证码
        </Text>
      </Stack>
    );
  }

  return (
    <Stack gap="md">
      {error && (
        <Alert 
          icon={<IconAlertCircle size={16} />} 
          color="red" 
          variant="light"
          radius="md"
        >
          {error}
        </Alert>
      )}
      
      <Paper p="md" bg="blue.0" radius="md">
        <Text size="sm" c="blue" ta="center">
          验证码已发送至
        </Text>
        <Text fw={600} ta="center" mt="xs">{email}</Text>
      </Paper>
      
      <form onSubmit={handleVerifyCode}>
        <Stack gap="md">
          <Stack gap="xs" align="center">
            <Text size="sm" fw={500}>请输入6位验证码</Text>
            <PinInput
              value={code}
              onChange={setCode}
              length={6}
              size="lg"
              radius="md"
              disabled={isLoading}
              autoFocus
            />
          </Stack>
          
          <Button
            type="submit"
            size="md"
            radius="md"
            disabled={code.length !== 6 || isLoading}
            loading={isLoading}
            className="flat-button"
          >
            验证并登录
          </Button>
        </Stack>
      </form>
      
      <Divider />
      
      <Group justify="space-between">
        <Button
          variant="subtle"
          leftSection={<IconArrowLeft size={16} />}
          onClick={handleBackToEmail}
          disabled={isLoading}
          size="sm"
        >
          修改邮箱
        </Button>
        
        <Button
          variant="subtle"
          leftSection={<IconRefresh size={16} />}
          onClick={handleResendCode}
          disabled={countdown > 0 || isLoading}
          size="sm"
        >
          {countdown > 0 ? `${countdown}s 后重发` : '重新发送'}
        </Button>
      </Group>
      
      {/* 开发环境测试 */}
      {process.env.NODE_ENV === 'development' && (
        <Paper p="xs" bg="gray.0" radius="md">
          <Text size="xs" c="dimmed" mb="xs">开发环境测试</Text>
          <Group gap="xs">
            <Button
              size="xs"
              variant="light"
              onClick={() => setCode('123456')}
            >
              填入测试码
            </Button>
            <Button
              size="xs"
              variant="light"
              color="gray"
              onClick={() => setCode('')}
            >
              清空
            </Button>
          </Group>
        </Paper>
      )}
      
      <Text size="xs" c="dimmed" ta="center">
        登录即表示您同意我们的服务条款和隐私政策
      </Text>
    </Stack>
  );
};