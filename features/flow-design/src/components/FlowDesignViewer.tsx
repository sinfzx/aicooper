"use client";

import React, { useState } from 'react';
import {
  Stack,
  Group,
  Title,
  Text,
  Button,
  Card,
  Badge,
  ActionIcon,
  Paper,
  Divider,
  Box,
  Timeline,
  Anchor,
  Progress,
  Stepper
} from '@mantine/core';
import {
  IconRoute,
  IconClock,
  IconTarget,
  IconTool,
  IconExternalLink,
  IconCheck,
  IconArrowRight,
  IconPlayerPlay,
  IconPlayerPause,
  IconRefresh,
  IconShare
} from '@tabler/icons-react';
import { FlowDesign, FlowStep } from '@my-platform/types';

interface FlowDesignViewerProps {
  flow: FlowDesign;
  onStepComplete?: (stepId: string) => void;
  onFlowComplete?: () => void;
  readonly?: boolean;
}

export const FlowDesignViewer: React.FC<FlowDesignViewerProps> = ({
  flow,
  onStepComplete,
  onFlowComplete,
  readonly = false
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
  const [isExecuting, setIsExecuting] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'green';
      case 'medium': return 'yellow';
      case 'hard': return 'red';
      default: return 'gray';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '简单';
      case 'medium': return '中等';
      case 'hard': return '困难';
      default: return '未知';
    }
  };

  const handleStepComplete = (step: FlowStep) => {
    const newCompleted = new Set(completedSteps);
    newCompleted.add(step.id);
    setCompletedSteps(newCompleted);
    
    onStepComplete?.(step.id);
    
    // 自动进入下一步
    if (activeStep < flow.steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      // 流程完成
      setIsExecuting(false);
      onFlowComplete?.();
    }
  };

  const getProgress = () => {
    return (completedSteps.size / flow.steps.length) * 100;
  };

  return (
    <Stack gap="lg">
      {/* 流程头部信息 */}
      <Paper p="lg" withBorder>
        <Group justify="space-between" mb="md">
          <Group>
            <IconRoute size={32} color="var(--mantine-color-teal-6)" />
            <Box>
              <Title order={2}>{flow.title}</Title>
              <Text c="dimmed">{flow.description}</Text>
            </Box>
          </Group>
          
          <Group>
            <Badge color={getDifficultyColor(flow.difficulty)}>
              {getDifficultyLabel(flow.difficulty)}
            </Badge>
            {flow.totalTime && (
              <Badge variant="outline">
                <Group gap="xs">
                  <IconClock size={12} />
                  {flow.totalTime}
                </Group>
              </Badge>
            )}
            {!readonly && (
              <Button
                leftSection={isExecuting ? <IconPlayerPause size={16} /> : <IconPlayerPlay size={16} />}
                onClick={() => setIsExecuting(!isExecuting)}
                variant={isExecuting ? 'light' : 'filled'}
              >
                {isExecuting ? '暂停执行' : '开始执行'}
              </Button>
            )}
          </Group>
        </Group>

        {/* 进度条 */}
        {!readonly && (
          <Box>
            <Group justify="space-between" mb="xs">
              <Text size="sm" fw={500}>执行进度</Text>
              <Text size="sm" c="dimmed">
                {completedSteps.size} / {flow.steps.length} 步骤完成
              </Text>
            </Group>
            <Progress value={getProgress()} size="lg" radius="md" />
          </Box>
        )}
      </Paper>

      {/* 前置条件 */}
      {flow.prerequisites && flow.prerequisites.length > 0 && (
        <Card withBorder>
          <Title order={4} mb="md">前置条件</Title>
          <Stack gap="xs">
            {flow.prerequisites.map((prereq, index) => (
              <Group key={index} gap="xs">
                <IconCheck size={16} color="var(--mantine-color-green-6)" />
                <Text size="sm">{prereq}</Text>
              </Group>
            ))}
          </Stack>
        </Card>
      )}

      {/* 执行步骤 */}
      <Card withBorder>
        <Title order={4} mb="md">执行步骤</Title>
        
        {readonly ? (
          // 只读模式：使用Timeline展示
          <Timeline active={-1} bulletSize={24} lineWidth={2}>
            {flow.steps.map((step, index) => (
              <Timeline.Item
                key={step.id}
                bullet={<Text size="xs">{index + 1}</Text>}
                title={step.title}
              >
                <Text size="sm" c="dimmed" mb="xs">
                  {step.description}
                </Text>
                
                <Group gap="xs" mb="sm">
                  {step.estimatedTime && (
                    <Badge size="xs" variant="outline">
                      预计 {step.estimatedTime}
                    </Badge>
                  )}
                  {step.difficulty && (
                    <Badge size="xs" color={getDifficultyColor(step.difficulty)}>
                      {getDifficultyLabel(step.difficulty)}
                    </Badge>
                  )}
                </Group>

                {step.resources && step.resources.length > 0 && (
                  <Stack gap="xs" mt="xs">
                    <Text size="sm" fw={500}>相关资源：</Text>
                    {step.resources.map((resource) => (
                      <Anchor
                        key={resource.id}
                        href={resource.url}
                        target="_blank"
                        size="sm"
                      >
                        <Group gap="xs">
                          <IconExternalLink size={12} />
                          {resource.title}
                        </Group>
                      </Anchor>
                    ))}
                  </Stack>
                )}

                {step.questions && step.questions.length > 0 && (
                  <Box mt="sm">
                    <Text size="sm" fw={500} mb="xs">检查要点：</Text>
                    <Stack gap="xs">
                      {step.questions.map((question, qIndex) => (
                        <Text key={qIndex} size="sm" c="dimmed">
                          • {question}
                        </Text>
                      ))}
                    </Stack>
                  </Box>
                )}
              </Timeline.Item>
            ))}
          </Timeline>
        ) : (
          // 交互模式：使用Stepper展示
          <Stepper 
            active={activeStep} 
            onStepClick={setActiveStep}
            allowNextStepsSelect={false}
          >
            {flow.steps.map((step, index) => (
              <Stepper.Step
                key={step.id}
                label={`步骤 ${index + 1}`}
                description={step.title}
                completedIcon={<IconCheck size={16} />}
              >
                <Paper p="md" bg="gray.0" mt="md">
                  <Stack gap="md">
                    <Box>
                      <Title order={5} mb="xs">{step.title}</Title>
                      <Text size="sm" mb="md">{step.description}</Text>
                      
                      <Group gap="xs" mb="md">
                        {step.estimatedTime && (
                          <Badge variant="outline">
                            <Group gap="xs">
                              <IconClock size={12} />
                              {step.estimatedTime}
                            </Group>
                          </Badge>
                        )}
                        {step.difficulty && (
                          <Badge color={getDifficultyColor(step.difficulty)}>
                            {getDifficultyLabel(step.difficulty)}
                          </Badge>
                        )}
                      </Group>
                    </Box>

                    {step.resources && step.resources.length > 0 && (
                      <Box>
                        <Text size="sm" fw={500} mb="xs">相关资源：</Text>
                        <Stack gap="xs">
                          {step.resources.map((resource) => (
                            <Anchor
                              key={resource.id}
                              href={resource.url}
                              target="_blank"
                              size="sm"
                            >
                              <Group gap="xs">
                                <IconExternalLink size={12} />
                                {resource.title}
                                {resource.description && (
                                  <Text size="xs" c="dimmed">
                                    - {resource.description}
                                  </Text>
                                )}
                              </Group>
                            </Anchor>
                          ))}
                        </Stack>
                      </Box>
                    )}

                    {step.questions && step.questions.length > 0 && (
                      <Box>
                        <Text size="sm" fw={500} mb="xs">完成检查：</Text>
                        <Stack gap="xs">
                          {step.questions.map((question, qIndex) => (
                            <Text key={qIndex} size="sm">
                              • {question}
                            </Text>
                          ))}
                        </Stack>
                      </Box>
                    )}

                    <Group justify="flex-end">
                      <Button
                        leftSection={<IconCheck size={16} />}
                        onClick={() => handleStepComplete(step)}
                        disabled={completedSteps.has(step.id)}
                        variant={completedSteps.has(step.id) ? 'light' : 'filled'}
                      >
                        {completedSteps.has(step.id) ? '已完成' : '标记完成'}
                      </Button>
                    </Group>
                  </Stack>
                </Paper>
              </Stepper.Step>
            ))}
          </Stepper>
        )}
      </Card>

      {/* 预期成果 */}
      {flow.outcomes && flow.outcomes.length > 0 && (
        <Card withBorder>
          <Title order={4} mb="md">预期成果</Title>
          <Stack gap="xs">
            {flow.outcomes.map((outcome, index) => (
              <Group key={index} gap="xs">
                <IconTarget size={16} color="var(--mantine-color-blue-6)" />
                <Text size="sm">{outcome}</Text>
              </Group>
            ))}
          </Stack>
        </Card>
      )}

      {/* 工具清单 */}
      {flow.tools && flow.tools.length > 0 && (
        <Card withBorder>
          <Title order={4} mb="md">推荐工具</Title>
          <Stack gap="sm">
            {flow.tools.map((tool) => (
              <Paper key={tool.id} p="sm" withBorder>
                <Group justify="space-between">
                  <Box style={{ flex: 1 }}>
                    <Group gap="xs" mb="xs">
                      <IconTool size={16} />
                      <Text fw={500}>{tool.name}</Text>
                      <Badge size="xs" variant="outline">
                        {tool.category}
                      </Badge>
                    </Group>
                    <Text size="sm" c="dimmed">
                      {tool.description}
                    </Text>
                  </Box>
                  <Anchor href={tool.url} target="_blank">
                    <ActionIcon variant="light">
                      <IconExternalLink size={16} />
                    </ActionIcon>
                  </Anchor>
                </Group>
              </Paper>
            ))}
          </Stack>
        </Card>
      )}
    </Stack>
  );
};