"use client";

import { useState, useEffect } from "react";
import {
  AppShell,
  Text,
  NavLink,
  Group,
  Title,
  Badge,
  Box,
  Stack,
  Divider
} from '@mantine/core';
import {
  IconMessageCircle,
  IconBrain,
  IconTemplate,
  IconKey,
  IconSettings,
  IconUser,
  IconRobot,
  IconRoute,
  IconPhoto
} from '@tabler/icons-react';
import { ApiKeyManager } from "@/components/ApiKeyManager";
import { SettingsManager } from "@/components/SettingsManager";
import { ChatInterface } from "@/components/ChatInterface";
import { ProfileManager } from "@/components/ProfileManager";
import { KnowledgeFrameworkManager } from "@my-platform/ai-knowledge";
import { FlowDesignManager } from "@my-platform/flow-design";
import { PromptTemplateManager } from "@my-platform/prompt-templates";
import { MemoryManager } from "@my-platform/memory";
import { initializeMemories } from "@/lib/initializeMemories";

type ActiveTab = 'chat' | 'knowledge' | 'templates' | 'flows' | 'memory' | 'apikeys' | 'settings' | 'profile';

export default function Home() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('chat');

  // 初始化示例数据
  useEffect(() => {
    initializeMemories();
  }, []);

  const tabs = [
    { id: 'chat' as const, label: '聊天', icon: IconMessageCircle, color: 'blue' },
    { id: 'knowledge' as const, label: '知识', icon: IconBrain, color: 'violet' },
    { id: 'templates' as const, label: '模板', icon: IconTemplate, color: 'green' },
    { id: 'flows' as const, label: '流程', icon: IconRoute, color: 'teal' },
    { id: 'memory' as const, label: '记忆', icon: IconPhoto, color: 'indigo' },
    { id: 'apikeys' as const, label: '密钥', icon: IconKey, color: 'orange' },
    { id: 'settings' as const, label: '设置', icon: IconSettings, color: 'gray' },
    { id: 'profile' as const, label: '资料', icon: IconUser, color: 'pink' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'chat':
        return <ChatInterface />;
      case 'knowledge':
        return <KnowledgeFrameworkManager />;
      case 'templates':
        return <PromptTemplateManager />;
      case 'flows':
        return <FlowDesignManager />;
      case 'memory':
        return <MemoryManager />;
      case 'apikeys':
        return <ApiKeyManager />;
      case 'settings':
        return <SettingsManager />;
      case 'profile':
        return <ProfileManager />;
      default:
        return <ChatInterface />;
    }
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 140, breakpoint: 'sm' }}
      padding={0}
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <IconRobot size={28} color="#228be6" />
            <Title order={3} c="dark">AI Desktop</Title>
          </Group>
          <Badge variant="light" color="blue" size="sm">
            v0.2.0
          </Badge>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="sm" className="sidebar-nav">
        <Stack gap="xs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <NavLink
                key={tab.id}
                active={activeTab === tab.id}
                label={
                  <Text size="xs" fw={500}>
                    {tab.label}
                  </Text>
                }
                leftSection={<Icon size={18} />}
                onClick={() => setActiveTab(tab.id)}
                variant="filled"
                color={tab.color}
                style={{
                  borderRadius: '6px',
                  minHeight: '36px',
                  padding: '6px 8px',
                }}
              />
            );
          })}

          <Box mt="auto" pt="md">
            <Text size="xs" c="dimmed" ta="center">
              AI Desktop
            </Text>
          </Box>
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main className="content-area">
        {renderContent()}
      </AppShell.Main>
    </AppShell>
  );
}
