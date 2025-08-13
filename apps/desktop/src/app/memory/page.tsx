"use client";

import React from 'react';
import { Container, Title, Text, Stack } from '@mantine/core';
import { MemoryManager } from '../../../../features/memory/src/components/MemoryManager';

export default function MemoryPage() {
  return (
    <Container size="xl" py="md">
      <Stack gap="lg">
        <div>
          <Title order={1}>记忆管理</Title>
          <Text c="dimmed" size="lg">
            记录和管理你的珍贵记忆
          </Text>
        </div>
        
        <MemoryManager />
      </Stack>
    </Container>
  );
}