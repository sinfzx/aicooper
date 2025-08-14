"use client";

import React from 'react';
import { Stack, Group, Title, Select, Card, Button, Switch } from '@mantine/core';

export default function SettingsPage() {
  const [template, setTemplate] = React.useState<'local' | 'sync'>('local');
  const [flow, setFlow] = React.useState<'local' | 'sync'>('local');
  const [framework, setFramework] = React.useState<'local' | 'sync'>('local');
  const [frameworkSyncExpanded, setFrameworkSyncExpanded] = React.useState<boolean>(false);

  React.useEffect(() => {
    (async () => {
      try {
        if (typeof window !== 'undefined' && (window as any).__TAURI__) {
          // @ts-ignore
          const { invoke } = await import('@tauri-apps/api/core');
          const settings = await invoke<any>('get_settings');
          const targets = settings?.default_save_targets || { template: 'local', flow: 'local', framework: 'local' };
          setTemplate((targets.template as any) || 'local');
          setFlow((targets.flow as any) || 'local');
          setFramework((targets.framework as any) || 'local');
          setFrameworkSyncExpanded(!!settings?.framework_sync_expanded);
        }
      } catch {}
    })();
  }, []);

  const save = async () => {
    if (typeof window === 'undefined' || !(window as any).__TAURI__) return;
    // @ts-ignore
    const { invoke } = await import('@tauri-apps/api/core');
    const settings = await invoke<any>('get_settings');
    await invoke('save_settings', {
      settings: {
        ...settings,
        default_save_targets: { template, flow, framework },
        framework_sync_expanded: frameworkSyncExpanded,
      },
    });
    try {
      const cached = {
        ...(settings || {}),
        default_save_targets: { template, flow, framework },
        framework_sync_expanded: frameworkSyncExpanded,
      };
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('settings_cache', JSON.stringify(cached));
      }
    } catch {}
    // eslint-disable-next-line no-alert
    alert('已保存');
  };

  const options = [
    { value: 'local', label: '仅本地' },
    { value: 'sync', label: '本地并同步' },
  ];

  return (
    <Stack p="md" gap="lg">
      <Group>
        <Title order={2}>设置</Title>
      </Group>

      <Card withBorder>
        <Stack gap="md">
          <Group grow>
            <Select label="模板默认保存" data={options} value={template} onChange={(v) => setTemplate(((v as any) || 'local'))} />
            <Select label="流程默认保存" data={options} value={flow} onChange={(v) => setFlow(((v as any) || 'local'))} />
            <Select label="框架默认保存" data={options} value={framework} onChange={(v) => setFramework(((v as any) || 'local'))} />
          </Group>
          <Switch label="知识框架：同步节点展开状态到服务器" checked={frameworkSyncExpanded} onChange={(e) => setFrameworkSyncExpanded(e.currentTarget.checked)} />
          <Group justify="flex-end">
            <Button onClick={save}>保存</Button>
          </Group>
        </Stack>
      </Card>
    </Stack>
  );
}


