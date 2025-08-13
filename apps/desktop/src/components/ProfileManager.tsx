"use client";

import React, { useState } from 'react';
import { 
  Container, 
  Paper, 
  Title, 
  Text, 
  Group, 
  Avatar, 
  Button, 
  Grid, 
  Card, 
  Stack, 
  Divider,
  Badge,
  ActionIcon,
  Box,
  SimpleGrid,
  Alert,
  Loader,
  Center
} from '@mantine/core';
import { 
  IconUser, 
  IconLogout, 
  IconKey, 
  IconSettings, 
  IconTemplate, 
  IconBrain,
  IconMail,
  IconCalendar,
  IconShield,
  IconInfoCircle
} from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { useAuth } from '@/hooks/useAuth';

export const ProfileManager: React.FC = () => {
  const { user, logout, isLoading } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    if (isLoggingOut) return;
    
    try {
      setIsLoggingOut(true);
      await logout();
      notifications.show({
        title: '退出成功',
        message: '您已安全退出登录',
        color: 'green',
      });
    } catch (error) {
      console.error('Logout failed:', error);
      notifications.show({
        title: '退出失败',
        message: '退出登录失败，请稍后重试',
        color: 'red',
      });
    } finally {
      setIsLoggingOut(false);
    }
  };

  if (isLoading) {
    return (
      <Center h="100vh">
        <Stack align="center">
          <Loader size="lg" />
          <Text c="dimmed">加载用户信息...</Text>
        </Stack>
      </Center>
    );
  }

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        {/* 页面标题 */}
        <Group>
          <IconUser size={32} color="#228be6" />
          <Box>
            <Title order={2}>个人中心</Title>
            <Text c="dimmed" size="sm">管理您的账户信息和偏好设置</Text>
          </Box>
        </Group>

        {/* 用户信息卡片 */}
        <Paper shadow="xs" p="xl" radius="md" className="flat-card">
          <Group>
            <Avatar 
              size={80} 
              radius="md" 
              src={user?.avatar}
              color="blue"
            >
              <IconUser size={40} />
            </Avatar>
            <Stack gap="xs" flex={1}>
              <Title order={3}>{user?.name || '未设置姓名'}</Title>
              <Group gap="xs">
                <IconMail size={16} />
                <Text c="dimmed">{user?.email}</Text>
              </Group>
              <Group gap="md">
                <Badge variant="light" color="blue" leftSection={<IconShield size={12} />}>
                  已验证用户
                </Badge>
                <Badge variant="light" color="green">
                  桌面应用
                </Badge>
              </Group>
            </Stack>
          </Group>
        </Paper>

        {/* 统计信息 */}
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
          <Card shadow="xs" padding="lg" radius="md" className="flat-card">
            <Group justify="space-between">
              <Box>
                <Text c="dimmed" size="sm">使用天数</Text>
                <Text size="xl" fw={700} c="blue">--</Text>
              </Box>
              <IconCalendar size={24} color="#228be6" />
            </Group>
          </Card>
          
          <Card shadow="xs" padding="lg" radius="md" className="flat-card">
            <Group justify="space-between">
              <Box>
                <Text c="dimmed" size="sm">创建的模板</Text>
                <Text size="xl" fw={700} c="green">--</Text>
              </Box>
              <IconTemplate size={24} color="#40c057" />
            </Group>
          </Card>
          
          <Card shadow="xs" padding="lg" radius="md" className="flat-card">
            <Group justify="space-between">
              <Box>
                <Text c="dimmed" size="sm">知识框架</Text>
                <Text size="xl" fw={700} c="violet">--</Text>
              </Box>
              <IconBrain size={24} color="#7c3aed" />
            </Group>
          </Card>
        </SimpleGrid>

        {/* 快速操作 */}
        <Paper shadow="xs" p="xl" radius="md" className="flat-card">
          <Title order={4} mb="md">快速操作</Title>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            <Button 
              variant="light" 
              leftSection={<IconKey size={18} />}
              justify="start"
              className="flat-button"
            >
              管理 API 密钥
            </Button>
            <Button 
              variant="light" 
              leftSection={<IconSettings size={18} />}
              justify="start"
              className="flat-button"
            >
              应用设置
            </Button>
            <Button 
              variant="light" 
              leftSection={<IconTemplate size={18} />}
              justify="start"
              className="flat-button"
            >
              我的模板
            </Button>
            <Button 
              variant="light" 
              leftSection={<IconBrain size={18} />}
              justify="start"
              className="flat-button"
            >
              我的框架
            </Button>
          </SimpleGrid>
        </Paper>

        {/* 系统信息 */}
        <Paper shadow="xs" p="xl" radius="md" className="flat-card">
          <Title order={4} mb="md">系统信息</Title>
          <Stack gap="sm">
            <Group justify="space-between">
              <Text c="dimmed">应用版本</Text>
              <Badge variant="outline">v0.2.0</Badge>
            </Group>
            <Group justify="space-between">
              <Text c="dimmed">平台</Text>
              <Badge variant="outline" color="blue">Tauri Desktop</Badge>
            </Group>
            <Group justify="space-between">
              <Text c="dimmed">环境</Text>
              <Badge 
                variant="outline" 
                color={process.env.NODE_ENV === 'development' ? 'orange' : 'green'}
              >
                {process.env.NODE_ENV === 'development' ? '开发环境' : '生产环境'}
              </Badge>
            </Group>
            <Group justify="space-between">
              <Text c="dimmed">最后登录</Text>
              <Text size="sm">刚刚</Text>
            </Group>
          </Stack>
        </Paper>

        {/* 账户操作 */}
        <Alert 
          icon={<IconInfoCircle size={16} />} 
          title="账户操作" 
          color="red"
          variant="light"
          radius="md"
        >
          <Group justify="space-between" mt="md">
            <Box>
              <Text fw={500}>退出登录</Text>
              <Text size="sm" c="dimmed">
                退出当前账户，需要重新登录才能使用应用
              </Text>
            </Box>
            <Button
              color="red"
              variant="light"
              leftSection={<IconLogout size={16} />}
              onClick={handleLogout}
              loading={isLoggingOut}
              className="flat-button"
            >
              {isLoggingOut ? '退出中...' : '退出登录'}
            </Button>
          </Group>
        </Alert>

        {/* 帮助信息 */}
        <Paper p="md" radius="md" bg="gray.0">
          <Text ta="center" size="sm" c="dimmed">
            如果您遇到任何问题，请联系技术支持
          </Text>
          <Text ta="center" size="sm" mt="xs">
            <Text 
              component="a" 
              href="mailto:support@aiplatform.com" 
              c="blue"
              td="none"
              style={{ cursor: 'pointer' }}
            >
              support@aiplatform.com
            </Text>
          </Text>
        </Paper>
      </Stack>
    </Container>
  );
};