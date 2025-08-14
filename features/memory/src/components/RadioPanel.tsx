"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Stack, Group, Title, Button, Card, NumberInput, Textarea, Text, Divider, Progress } from '@mantine/core';
import { IconPlayerPlay, IconPlayerPause, IconMicrophone, IconWand } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { useRadio } from '../hooks/useRadio';

export const RadioPanel: React.FC = () => {
  const { isGenerating, scripts, audios, generateYearScript, synthesizeYearAudio, currentYearRef, bindAudioProgress, progressSec, getSavedProgress } = useRadio();
  const now = new Date().getFullYear();
  const [year, setYear] = useState<number>(now);
  const [text, setText] = useState<string>('');
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onGenerate = async () => {
    try {
      const content = await generateYearScript(year);
      setText(content);
      notifications.show({ title: '脚本已生成', message: `年份 ${year}`, color: 'green' });
    } catch {}
  };

  const onTTS = async () => {
    try {
      const script = text || scripts[year];
      if (!script) {
        notifications.show({ title: '无脚本', message: '请先生成或输入脚本', color: 'orange' });
        return;
      }
      const path = await synthesizeYearAudio(year, script);
      if (path) {
        if (audioRef.current) {
          audioRef.current.src = path;
          audioRef.current.load();
          bindAudioProgress(audioRef.current, year);
        }
        notifications.show({ title: '已生成语音', message: path, color: 'green' });
      }
    } catch {}
  };

  const togglePlay = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      await audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      bindAudioProgress(audioRef.current, year);
    }
  }, [bindAudioProgress, year]);

  useEffect(() => {
    (async () => {
      const p = await getSavedProgress();
      if (p) {
        setYear(p.year);
        // 加载对应音频
        const path = audios[p.year];
        if (path && audioRef.current) {
          audioRef.current.src = path;
          audioRef.current.currentTime = p.seconds;
          audioRef.current.load();
        }
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack gap="md">
      <Group>
        <Title order={4}>个性化时代电台</Title>
      </Group>
      <Card withBorder>
        <Stack gap="md">
          <Group>
            <NumberInput label="年份" value={year} onChange={(v) => setYear((v as number) || now)} min={1900} max={2100} />
            <Button leftSection={<IconWand size={16} />} loading={isGenerating} onClick={onGenerate}>生成脚本</Button>
            <Button leftSection={<IconMicrophone size={16} />} variant="light" onClick={onTTS}>合成语音</Button>
            <Button leftSection={isPlaying ? <IconPlayerPause size={16} /> : <IconPlayerPlay size={16} />} variant="default" onClick={togglePlay}>{isPlaying ? '暂停' : '播放'}</Button>
          </Group>
          <Textarea label="脚本预览/编辑" minRows={8} autosize value={text || scripts[year] || ''} onChange={(e) => setText(e.currentTarget.value)} />
          <audio ref={audioRef} controls style={{ width: '100%' }} />
          <Text size="xs" c="dimmed">进度：{Math.floor(progressSec)}s</Text>
        </Stack>
      </Card>
    </Stack>
  );
};


