"use client";

import React from 'react';
import {
  Stack,
  Group,
  Title,
  Text,
  Button,
  ActionIcon,
  Box,
  Breadcrumbs,
  Anchor
} from '@mantine/core';
import { IconArrowLeft, IconHome } from '@tabler/icons-react';

interface PageLayoutProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  actions?: React.ReactNode;
  onBack?: () => void;
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  description,
  icon,
  breadcrumbs,
  actions,
  onBack,
  children
}) => {
  return (
    <Stack gap="lg" p="md" h="100%">
      {/* 面包屑导航 */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumbs separator=">">
          {breadcrumbs.map((crumb, index) => (
            <Anchor
              key={index}
              href={crumb.href}
              size="sm"
              c="dimmed"
              style={{ textDecoration: 'none' }}
            >
              {index === 0 && <IconHome size={14} style={{ marginRight: 4 }} />}
              {crumb.label}
            </Anchor>
          ))}
        </Breadcrumbs>
      )}

      {/* 页面头部 */}
      <Group justify="space-between" align="flex-start">
        <Group align="flex-start">
          {onBack && (
            <ActionIcon
              variant="light"
              size="lg"
              onClick={onBack}
              style={{ marginTop: 4 }}
            >
              <IconArrowLeft size={18} />
            </ActionIcon>
          )}
          
          <Group align="flex-start">
            {icon && (
              <Box style={{ marginTop: 2 }}>
                {icon}
              </Box>
            )}
            <Box>
              <Title order={2} mb={description ? 4 : 0}>
                {title}
              </Title>
              {description && (
                <Text c="dimmed" size="sm">
                  {description}
                </Text>
              )}
            </Box>
          </Group>
        </Group>
        
        {actions && (
          <Group>
            {actions}
          </Group>
        )}
      </Group>

      {/* 页面内容 */}
      <Box style={{ flex: 1, overflow: 'auto' }}>
        {children}
      </Box>
    </Stack>
  );
};