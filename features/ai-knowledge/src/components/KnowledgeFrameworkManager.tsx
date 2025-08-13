"use client";

import React, { useState, useEffect } from 'react';
import {
    Stack,
    Group,
    Title,
    Text,
    Button,
    Card,
    Badge,
    ActionIcon,
    Modal,
    TextInput,
    Textarea,
    Select,
    Grid,
    Center,
    Divider,
    Box
} from '@mantine/core';
import {
    IconBrain,
    IconPlus,
    IconEdit,
    IconTrash,
    IconEye,
    IconRobot,
    IconExternalLink
} from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
// 暂时注释掉PageLayout导入，直接使用Stack布局
// import { PageLayout } from '../../../apps/desktop/src/components/layout/PageLayout';

// 临时类型定义，应该从@my-platform/types导入
interface KnowledgeFramework {
    id: string;
    title: string;
    description: string;
    domain: string;
    version: number;
    is_built_in: boolean;
    is_public: boolean;
    local_only: boolean;
    created_at: string;
    updated_at: string;
}

interface KnowledgeFrameworkManagerProps {
    onFrameworkSelect?: (framework: KnowledgeFramework) => void;
}

export const KnowledgeFrameworkManager: React.FC<KnowledgeFrameworkManagerProps> = ({
    onFrameworkSelect
}) => {
    const [frameworks, setFrameworks] = useState<KnowledgeFramework[]>([]);
    const [loading, setLoading] = useState(true);
    // 创建改为二级页面路由
    const [selectedFramework, setSelectedFramework] = useState<KnowledgeFramework | null>(null);

    // 表单状态
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        domain: ''
    });

    // AI 创建状态
    const [aiFormData, setAiFormData] = useState({
        title: '',
        description: '',
        domain: '',
        targetUser: '',
        complexity: 'medium'
    });
    const [aiGenerating, setAiGenerating] = useState(false);

    useEffect(() => {
        loadFrameworks();
    }, []);

    const loadFrameworks = async () => {
        try {
            setLoading(true);
            // 这里应该调用实际的API或Tauri命令
            // const frameworks = await dbApi.getKnowledgeFrameworks();
            // setFrameworks(frameworks.data || []);

            // 临时使用空数组
            setFrameworks([]);
        } catch (error) {
            console.error('Failed to load frameworks:', error);
            notifications.show({
                title: '加载失败',
                message: '无法加载知识框架',
                color: 'red'
            });
        } finally {
            setLoading(false);
        }
    };

    const handleCreateFramework = async () => {
        try {
            // 这里应该调用实际的创建API
            notifications.show({
                title: '创建成功',
                message: '知识框架已创建',
                color: 'green'
            });
            resetFormData();
            loadFrameworks();
        } catch (error) {
            notifications.show({
                title: '创建失败',
                message: '无法创建知识框架',
                color: 'red'
            });
        }
    };

    const handleAICreate = async () => {
        try {
            setAiGenerating(true);
            // 这里应该调用AI创建API
            notifications.show({
                title: 'AI 创建成功',
                message: '知识框架已通过 AI 辅助创建',
                color: 'green'
            });
            setAiFormData({
                title: '',
                description: '',
                domain: '',
                targetUser: '',
                complexity: 'medium'
            });
            loadFrameworks();
        } catch (error) {
            notifications.show({
                title: 'AI 创建失败',
                message: '无法通过 AI 创建知识框架',
                color: 'red'
            });
        } finally {
            setAiGenerating(false);
        }
    };

    const resetFormData = () => {
        setFormData({
            title: '',
            description: '',
            domain: ''
        });
    };

    if (loading) {
        return (
            <Center h={400}>
                <Stack align="center">
                    <IconBrain size={64} color="var(--mantine-color-gray-5)" />
                    <Text c="dimmed">加载知识框架...</Text>
                </Stack>
            </Center>
        );
    }

    return (
        <Stack gap="lg" p="md">
            {/* 头部操作栏 */}
            <Group justify="space-between">
                <Group>
                    <IconBrain size={28} color="var(--mantine-color-violet-6)" />
                    <Box>
                        <Title order={2}>知识框架</Title>
                        <Text c="dimmed" size="sm">创建和管理结构化知识体系</Text>
                    </Box>
                </Group>

                <Group>
                    <Button
                        leftSection={<IconRobot size={16} />}
                        variant="gradient"
                        gradient={{ from: 'violet', to: 'purple' }}
                        onClick={() => { if (typeof window !== 'undefined') window.location.href = '/knowledge/new?mode=ai' }}
                    >
                        AI 创建
                    </Button>
                    <Button
                        leftSection={<IconPlus size={16} />}
                        onClick={() => { if (typeof window !== 'undefined') window.location.href = '/knowledge/new' }}
                    >
                        手动创建
                    </Button>
                </Group>
            </Group>

            {/* 框架列表 */}
            {frameworks.length === 0 ? (
                <Card shadow="sm" padding="xl" radius="md" withBorder>
                    <Center>
                        <Stack align="center" gap="md">
                            <IconBrain size={64} color="var(--mantine-color-gray-5)" />
                            <Title order={3} ta="center">还没有知识框架</Title>
                            <Text c="dimmed" ta="center" maw={400}>
                                创建您的第一个知识框架来组织和管理知识体系
                            </Text>
                            <Group>
                                <Button
                                    leftSection={<IconRobot size={16} />}
                                    variant="gradient"
                                    gradient={{ from: 'violet', to: 'purple' }}
                                    onClick={() => { if (typeof window !== 'undefined') window.location.href = '/knowledge/new?mode=ai' }}
                                >
                                    AI 辅助创建
                                </Button>
                                <Button
                                    leftSection={<IconPlus size={16} />}
                                    variant="light"
                                    onClick={() => { if (typeof window !== 'undefined') window.location.href = '/knowledge/new' }}
                                >
                                    手动创建
                                </Button>
                            </Group>
                        </Stack>
                    </Center>
                </Card>
            ) : (
                <Grid>
                    {frameworks.map((framework) => (
                        <Grid.Col key={framework.id} span={{ base: 12, md: 6, lg: 4 }}>
                            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                                <Stack gap="sm" h="100%">
                                    <Group justify="space-between">
                                        <Badge
                                            variant="light"
                                            color={framework.local_only ? 'orange' : 'green'}
                                            size="sm"
                                        >
                                            {framework.local_only ? '本地' : '已同步'}
                                        </Badge>
                                        <Badge variant="outline" size="xs">
                                            {framework.domain}
                                        </Badge>
                                    </Group>

                                    <Box style={{ flex: 1 }}>
                                        <Title order={4} mb="xs">{framework.title}</Title>
                                        <Text size="sm" c="dimmed" mb="sm" lineClamp={3}>
                                            {framework.description}
                                        </Text>
                                    </Box>

                                    <Divider />

                                    <Group justify="space-between">
                                        <Group gap="xs">
                                            <ActionIcon
                                                variant="light"
                                                size="sm"
                                                onClick={() => {
                                                    // 导航到详情页面
                                                    if (typeof window !== 'undefined') {
                                                        window.location.href = `/knowledge/${framework.id}`;
                                                    }
                                                }}
                                            >
                                                <IconEye size={14} />
                                            </ActionIcon>
                                            <ActionIcon
                                                variant="light"
                                                size="sm"
                                                onClick={() => {
                                                    // 编辑功能
                                                }}
                                            >
                                                <IconEdit size={14} />
                                            </ActionIcon>
                                        </Group>

                                        <ActionIcon
                                            variant="light"
                                            color="red"
                                            size="sm"
                                            onClick={() => {
                                                // 删除功能
                                            }}
                                        >
                                            <IconTrash size={14} />
                                        </ActionIcon>
                                    </Group>
                                </Stack>
                            </Card>
                        </Grid.Col>
                    ))}
                </Grid>
            )}

            {/* 创建与 AI 创建改为二级页面 /knowledge/new */}
        </Stack>
    );
};