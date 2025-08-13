"use client";

import React from 'react';
import { 
  Container, 
  Paper, 
  Title, 
  Text, 
  Stack, 
  Group, 
  Badge,
  Box,
  Center
} from '@mantine/core';
import { IconRobot } from '@tabler/icons-react';
import { LoginForm } from '@/components/auth/LoginForm';
import { useAuth } from '@/hooks/useAuth';
import { useNavigation } from '@/hooks/useNavigation';

export default function LoginPage() {
  const { login } = useAuth();
  const { navigateTo } = useNavigation();

  const handleLoginSuccess = () => {
    // 登录成功后跳转到主页
    navigateTo('/');
  };

  return (
    <Box 
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}
    >
      <Container size={420}>
        <Stack gap="xl">
          {/* Logo和标题 */}
          <Center>
            <Stack align="center" gap="md">
              <Group>
                <IconRobot size={48} color="white" />
                <Title order={1} c="white" fw={700}>
                  AI Desktop
                </Title>
              </Group>
              <Text c="white" size="lg" ta="center" opacity={0.9}>
                智能桌面助手平台
              </Text>
              <Badge variant="light" color="white" size="lg">
                桌面应用版本
              </Badge>
            </Stack>
          </Center>

          {/* 登录表单 */}
          <Paper 
            shadow="xl" 
            p="xl" 
            radius="lg"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <Stack gap="md">
              <Box ta="center">
                <Title order={3} mb="xs">欢迎回来</Title>
                <Text c="dimmed" size="sm">
                  使用邮箱验证码快速登录或注册
                </Text>
              </Box>
              
              <LoginForm 
                onLoginSuccess={handleLoginSuccess}
                onLogin={login}
              />
            </Stack>
          </Paper>

          {/* 版本信息 */}
          <Center>
            <Stack align="center" gap="xs">
              <Text c="white" size="sm" opacity={0.8}>
                AI Desktop Platform
              </Text>
              <Badge variant="outline" color="white" size="sm">
                v0.2.0
              </Badge>
            </Stack>
          </Center>
        </Stack>
      </Container>
    </Box>
  );
}