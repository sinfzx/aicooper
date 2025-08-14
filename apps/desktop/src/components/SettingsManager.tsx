"use client";

import React, { useState, useEffect } from 'react';
import {
  Stack,
  Group,
  Title,
  Text,
  Button,
  Card,
  Select,
  NumberInput,
  Slider,
  Switch,
  Divider,
  Box,
  Alert,
  ActionIcon
} from '@mantine/core';
import {
  IconSettings,
  IconPalette,
  IconRobot,
  IconDatabase,
  IconDownload,
  IconUpload,
  IconTrash,
  IconInfoCircle
} from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { AppSettings } from '@my-platform/types';
import { PageLayout } from './layout/PageLayout';


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

export const SettingsManager: React.FC = () => {
  const [settings, setSettings] = useState<AppSettings>({
    theme: 'system',
    language: 'zh-CN',
    autoSave: true,
    defaultProvider: '',
    maxTokens: 4000,
    temperature: 0.7,
    enableTelemetry: false,
    // memory defaults
    memoryLanguage: 'zh-CN',
    imageStyleDefault: 'artistic',
    imageAspectDefault: '16:9',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  
  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const invoke = await getTauriInvoke();
      if (!invoke) {
        console.warn('Tauri API not available, using default settings');
        return;
      }
      const loadedSettings = await invoke<AppSettings>('get_settings');
      setSettings(loadedSettings);
    } catch (error) {
      console.error('Failed to load settings:', error);
    }
  };

  const handleSaveSettings = async () => {
    const invoke = await getTauriInvoke();
    if (!invoke) {
      alert('Tauri API 不可用，无法保存设置');
      return;
    }

    setIsLoading(true);
    try {
      await invoke('save_settings', { settings });
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000);
    } catch (error) {
      console.error('Failed to save settings:', error);
      alert(`保存失败: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSettingChange = (key: keyof AppSettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };



  const handleSaveSettingsWithNotification = async () => {
    await handleSaveSettings();
    if (!isLoading) {
      notifications.show({
        title: '保存成功',
        message: '设置已保存',
        color: 'green'
      });
    }
  };

  return (
    <PageLayout
      title="应用设置"
      description="自定义您的应用体验"
      icon={<IconSettings size={28} color="var(--mantine-color-blue-6)" />}
      actions={
        <Button
          onClick={handleSaveSettingsWithNotification}
          loading={isLoading}
          color={isSaved ? 'green' : 'blue'}
        >
          {isSaved ? '已保存' : '保存设置'}
        </Button>
      }
    >
      <Stack gap="lg">
        {/* 外观设置 */}
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="md">
            <Group>
              <IconPalette size={20} color="var(--mantine-color-blue-6)" />
              <Title order={4}>外观设置</Title>
            </Group>
            
            <Divider />
            
            <Select
              label="主题"
              description="选择应用的外观主题"
              value={settings.theme}
              onChange={(value) => handleSettingChange('theme', value || 'system')}
              data={[
                { value: 'light', label: '浅色' },
                { value: 'dark', label: '深色' },
                { value: 'system', label: '跟随系统' }
              ]}
            />
            
            <Select
              label="语言"
              description="选择应用界面语言"
              value={settings.language}
              onChange={(value) => handleSettingChange('language', value || 'zh-CN')}
              data={[
                { value: 'zh-CN', label: '简体中文' },
                { value: 'en-US', label: 'English' }
              ]}
            />
          </Stack>
        </Card>

        {/* AI 配置 */}
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="md">
            <Group>
              <IconRobot size={20} color="var(--mantine-color-green-6)" />
              <Title order={4}>AI 配置</Title>
            </Group>
            
            <Divider />
            
            <NumberInput
              label="最大 Token 数量"
              description="控制 AI 响应的最大长度，较高的值会消耗更多 token"
              value={settings.maxTokens}
              onChange={(value) => handleSettingChange('maxTokens', value || 4000)}
              min={100}
              max={32000}
              step={100}
            />
            
            <Box>
              <Text size="sm" fw={500} mb="xs">
                温度 (Temperature): {settings.temperature}
              </Text>
              <Slider
                value={settings.temperature}
                onChange={(value) => handleSettingChange('temperature', value)}
                min={0}
                max={2}
                step={0.1}
                marks={[
                  { value: 0, label: '保守' },
                  { value: 1, label: '平衡' },
                  { value: 2, label: '创造性' }
                ]}
              />
              <Text size="xs" c="dimmed" mt="xs">
                控制 AI 响应的随机性和创造性
              </Text>
            </Box>
          </Stack>
        </Card>

        {/* Memory 偏好设置（桌面端本地生效） */}
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="md">
            <Group>
              <IconRobot size={20} color="var(--mantine-color-teal-6)" />
              <Title order={4}>记忆偏好</Title>
            </Group>

            <Divider />

            <Group grow>
              <NumberInput
                label="出生年份"
                value={settings.birthYear as any}
                onChange={(v) => handleSettingChange('birthYear', (v as number) || undefined)}
                min={1900}
                max={2100}
              />
              <Select
                label="出生地区"
                placeholder="例如：CN-Guangdong/Guangzhou"
                value={settings.birthRegion}
                onChange={(v) => handleSettingChange('birthRegion', v || undefined)}
                data={[]}
              />
            </Group>

            <Group grow>
              <Select
                label="记忆语言"
                value={settings.memoryLanguage}
                onChange={(v) => handleSettingChange('memoryLanguage', (v as any) || 'zh-CN')}
                data={[
                  { value: 'zh-CN', label: '简体中文' },
                  { value: 'en-US', label: 'English' },
                ]}
              />
              <Select
                label="生图默认风格"
                value={settings.imageStyleDefault}
                onChange={(v) => handleSettingChange('imageStyleDefault', (v as any) || 'artistic')}
                data={[
                  { value: 'realistic', label: '写实' },
                  { value: 'artistic', label: '艺术' },
                  { value: 'cartoon', label: '卡通' },
                  { value: 'vintage', label: '复古' },
                ]}
              />
              <Select
                label="生图默认比例"
                value={settings.imageAspectDefault}
                onChange={(v) => handleSettingChange('imageAspectDefault', (v as any) || '16:9')}
                data={[
                  { value: '1:1', label: '1:1' },
                  { value: '16:9', label: '16:9' },
                  { value: '9:16', label: '9:16' },
                  { value: '4:3', label: '4:3' },
                ]}
              />
            </Group>
          </Stack>
        </Card>

        {/* 行为设置 */}
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="md">
            <Group>
              <IconSettings size={20} color="var(--mantine-color-orange-6)" />
              <Title order={4}>行为设置</Title>
            </Group>
            
            <Divider />
            
            <Group justify="space-between">
              <Box>
                <Text size="sm" fw={500}>自动保存</Text>
                <Text size="xs" c="dimmed">自动保存聊天记录和设置</Text>
              </Box>
              <Switch
                checked={settings.autoSave}
                onChange={(e) => handleSettingChange('autoSave', e.currentTarget.checked)}
              />
            </Group>
            
            <Group justify="space-between">
              <Box>
                <Text size="sm" fw={500}>启用遥测</Text>
                <Text size="xs" c="dimmed">帮助改进应用体验（匿名数据）</Text>
              </Box>
              <Switch
                checked={settings.enableTelemetry}
                onChange={(e) => handleSettingChange('enableTelemetry', e.currentTarget.checked)}
              />
            </Group>
          </Stack>
        </Card>

        {/* 数据管理 */}
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="md">
            <Group>
              <IconDatabase size={20} color="var(--mantine-color-violet-6)" />
              <Title order={4}>数据管理</Title>
            </Group>
            
            <Divider />
            
            <Alert icon={<IconInfoCircle size={16} />} color="blue" variant="light">
              <Text size="sm">
                数据管理功能可以帮助您备份和恢复应用数据
              </Text>
            </Alert>
            
            <Group justify="space-between">
              <Box>
                <Text size="sm" fw={500}>导出数据</Text>
                <Text size="xs" c="dimmed">导出您的聊天记录和设置</Text>
              </Box>
              <Button
                variant="light"
                leftSection={<IconDownload size={16} />}
                size="sm"
              >
                导出
              </Button>
            </Group>
            
            <Group justify="space-between">
              <Box>
                <Text size="sm" fw={500}>导入数据</Text>
                <Text size="xs" c="dimmed">从备份文件恢复数据</Text>
              </Box>
              <Button
                variant="light"
                leftSection={<IconUpload size={16} />}
                size="sm"
              >
                导入
              </Button>
            </Group>
            
            <Divider />
            
            <Group justify="space-between">
              <Box>
                <Text size="sm" fw={500} c="red">清除所有数据</Text>
                <Text size="xs" c="dimmed">删除所有聊天记录、API Key 和设置</Text>
              </Box>
              <Button
                variant="light"
                color="red"
                leftSection={<IconTrash size={16} />}
                size="sm"
                onClick={() => {
                  if (confirm('确定要清除所有数据吗？此操作不可恢复！')) {
                    // TODO: 实现清除数据功能
                    notifications.show({
                      title: '功能开发中',
                      message: '此功能正在开发中...',
                      color: 'orange'
                    });
                  }
                }}
              >
                清除
              </Button>
            </Group>
          </Stack>
        </Card>
      </Stack>
    </PageLayout>
  );
};