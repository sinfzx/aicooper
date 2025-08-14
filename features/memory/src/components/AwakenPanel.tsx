"use client";

import React, { useMemo, useState } from 'react';
import { Stack, Group, Title, Text, Button, Card, TextInput, NumberInput, Select, Badge, Chip, Divider, ActionIcon } from '@mantine/core';
import { IconWand, IconDeviceFloppy, IconRefresh } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { useAwaken } from '../hooks/useAwaken';

export const AwakenPanel: React.FC = () => {
  const { keywords, loading, generateKeywords, saveKeywords } = useAwaken();
  const currentYear = new Date().getFullYear();
  const [startYear, setStartYear] = useState<number>(currentYear - 20);
  const [endYear, setEndYear] = useState<number>(currentYear);
  const [region, setRegion] = useState<string>('CN');
  const [language, setLanguage] = useState<'zh-CN' | 'en-US'>('zh-CN');
  const [selected, setSelected] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string>(`${startYear}-${endYear}-${region}`);

  const chips = useMemo(() => (selected.length > 0 ? selected : keywords), [selected, keywords]);

  const onGenerate = async () => {
    if (startYear > endYear) {
      notifications.show({ title: '参数错误', message: '起始年份不能大于结束年份', color: 'red' });
      return;
    }
    try {
      await generateKeywords({ startYear, endYear, region, language });
      setFileName(`${startYear}-${endYear}-${region}`);
    } catch {}
  };

  const onSave = async () => {
    const list = chips.filter(Boolean);
    if (list.length === 0) {
      notifications.show({ title: '无关键词', message: '请先生成或选择关键词', color: 'orange' });
      return;
    }
    try {
      const path = await saveKeywords(fileName || `${startYear}-${endYear}-${region}`, list);
      if (path) notifications.show({ title: '已保存', message: path, color: 'green' });
    } catch (e) {
      notifications.show({ title: '保存失败', message: '无法保存关键词文件', color: 'red' });
    }
  };

  return (
    <Stack gap="md">
      <Group>
        <Title order={4}>记忆唤醒（关键词）</Title>
      </Group>
      <Card withBorder>
        <Stack gap="md">
          <Group grow>
            <NumberInput label="起始年份" value={startYear} onChange={(v) => setStartYear((v as number) || currentYear - 20)} min={1900} max={2100} />
            <NumberInput label="结束年份" value={endYear} onChange={(v) => setEndYear((v as number) || currentYear)} min={1900} max={2100} />
            <TextInput label="地区" placeholder="例如：CN-Guangdong/Guangzhou" value={region} onChange={(e) => setRegion(e.currentTarget.value)} />
            <Select label="语言" value={language} onChange={(v) => setLanguage(((v as any) || 'zh-CN'))} data={[{ value: 'zh-CN', label: '简体中文' }, { value: 'en-US', label: 'English' }]} />
          </Group>
          <Group>
            <Button leftSection={<IconWand size={16} />} loading={loading} onClick={onGenerate}>生成关键词</Button>
            <TextInput label="保存文件名" value={fileName} onChange={(e) => setFileName(e.currentTarget.value)} w={240} />
            <Button leftSection={<IconDeviceFloppy size={16} />} variant="light" onClick={onSave}>保存本地</Button>
            <ActionIcon variant="subtle" onClick={() => setSelected([])} title="重置选择"><IconRefresh size={16} /></ActionIcon>
          </Group>
        </Stack>
      </Card>
      <Divider label="关键词" />
      {chips.length === 0 ? (
        <Text c="dimmed">暂无关键词，请先生成。</Text>
      ) : (
        <Group gap="xs" wrap="wrap">
          {chips.map((kw, idx) => {
            const active = selected.includes(kw);
            return (
              <Chip
                key={`${kw}-${idx}`}
                checked={active}
                onChange={(v) => {
                  setSelected((prev) => {
                    if (v) return Array.from(new Set([...prev, kw]));
                    return prev.filter((x) => x !== kw);
                  });
                }}
              >
                {kw}
              </Chip>
            );
          })}
        </Group>
      )}
    </Stack>
  );
};


