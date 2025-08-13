"use client";

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { LoginForm } from '@/components/auth/LoginForm';
import { 
  Card, 
  Text, 
  Stack, 
  Center, 
  Loader,
  Box,
  Title
} from '@mantine/core';
import { IconRobot, IconLock } from '@tabler/icons-react';
import { useNavigation } from '@/hooks/useNavigation';

interface AuthGuardProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ 
  children, 
  fallback 
}) => {
  const { isAuthenticated, isLoading, login } = useAuth();
  const { navigateTo } = useNavigation();
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      // 如果未登录，重定向到登录页面
      if (typeof window !== 'undefined' && window.location.pathname !== '/login') {
        navigateTo('/login');
        return;
      }
      
      if (!fallback) {
        setShowLogin(true);
      }
    }
  }, [isLoading, isAuthenticated, fallback, navigateTo]);

  const handleLoginSuccess = (user: any) => {
    login(user);
    setShowLogin(false);
    // 登录成功后跳转到主页
    navigateTo('/');
  };

  if (isLoading) {
    return (
      <Center h="100vh" bg="gray.0">
        <Card shadow="sm" padding="xl" radius="md" withBorder>
          <Stack align="center" gap="md">
            <Loader size="lg" />
            <Text c="dimmed">检查登录状态...</Text>
          </Stack>
        </Card>
      </Center>
    );
  }

  if (!isAuthenticated) {
    if (fallback) {
      return <>{fallback}</>;
    }
    
    if (showLogin) {
      return (
        <Center h="100vh" bg="gray.0" p="md">
          <Box maw={400} w="100%">
            <Stack align="center" gap="xl">
              <Stack align="center" gap="md">
                <IconRobot size={64} color="#228be6" />
                <Title order={2} ta="center">AI Desktop</Title>
                <Text c="dimmed" ta="center">
                  使用邮箱验证码快速登录或注册
                </Text>
              </Stack>
              
              <Card shadow="sm" padding="xl" radius="md" withBorder w="100%">
                <LoginForm 
                  onLoginSuccess={handleLoginSuccess}
                  onLogin={login}
                />
              </Card>
            </Stack>
          </Box>
        </Center>
      );
    }
    
    return (
      <Center h="100vh" bg="gray.0">
        <Card shadow="sm" padding="xl" radius="md" withBorder>
          <Stack align="center" gap="md">
            <IconLock size={48} color="var(--mantine-color-gray-5)" />
            <Text c="dimmed">需要登录才能访问</Text>
          </Stack>
        </Card>
      </Center>
    );
  }

  return <>{children}</>;
};