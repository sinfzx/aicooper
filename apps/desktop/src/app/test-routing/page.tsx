"use client";

import { Button, Stack, Text, Title } from '@mantine/core';
import { useNavigation } from '@/hooks/useNavigation';
import { useAuth } from '@/hooks/useAuth';

export default function TestRoutingPage() {
  const { navigateTo } = useNavigation();
  const { logout, isAuthenticated, user } = useAuth();

  return (
    <Stack gap="md" p="lg">
      <Title order={2}>路由测试页面</Title>
      
      <Text>认证状态: {isAuthenticated ? '已登录' : '未登录'}</Text>
      {user && <Text>用户: {user.email}</Text>}
      
      <Stack gap="sm">
        <Button onClick={() => navigateTo('/')}>
          跳转到主页
        </Button>
        <Button onClick={() => navigateTo('/login')}>
          跳转到登录页
        </Button>
        <Button color="red" onClick={logout}>
          退出登录
        </Button>
      </Stack>
    </Stack>
  );
}