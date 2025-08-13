"use client";

import React, { useState } from 'react';
import {
  Stack,
  Group,
  Title,
  Text,
  Button,
  Card,
  TextInput,
  Textarea,
  Select,
  MultiSelect,
  FileInput,
  Image,
  Box,
  Badge,
  ActionIcon,
  Paper,
  Divider,
  Alert,
  Progress,
  Stepper
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import {
  IconPlus,
  IconPhoto,
  IconMicrophone,
  IconVideo,
  IconMapPin,
  IconUsers,
  IconTag,
  IconHeart,
  IconCalendar,
  IconUpload,
  IconX,
  IconRobot,
  IconInfoCircle,
  IconCheck
} from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { useMemory } from '../hooks/useMemory';
import { MemoryCreationRequest } from '../types';

interface MemoryCreatorProps {
  onMemoryCreated?: (memoryId: string) => void;
  onCancel?: () => void;
}

export const MemoryCreator: React.FC<MemoryCreatorProps> = ({
  onMemoryCreated,
  onCancel
}) => {
  const { createMemory, generateImage } = useMemory();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [generatingImage, setGeneratingImage] = useState(false);
  
  // 表单数据
  const [formData, setFormData] = useState<MemoryCreationRequest>({
    title: '',
    content: '',
    date: new Date(),
    location: '',
    people: [],
    tags: [],
    emotions: [],
    visibility: 'private'
  });
  
  // 媒体文件
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  // AI生成选项
  const [generateAIImage, setGenerateAIImage] = useState(false);
  const [aiImageStyle, setAiImageStyle] = useState<'realistic' | 'artistic' | 'cartoon' | 'vintage'>('artistic');
  
  const steps = [
    { label: '基本信息', description: '记忆的标题和内容' },
    { label: '详细信息', description: '时间、地点、人物等' },
    { label: '媒体文件', description: '图片、音频、视频' },
    { label: '确认创建', description: '检查并保存记忆' }
  ];
  
  const emotionOptions = [
    '快乐', '悲伤', '兴奋', '平静', '紧张', '感激', '不舍', '成就感', '温馨',
    '惊喜', '满足', '骄傲', '怀念', '期待', '安心', '感动', '轻松', '充实'
  ];
  
  const tagSuggestions = [
    '家庭', '朋友', '工作', '学习', '旅行', '美食', '运动', '音乐', '电影',
    '读书', '摄影', '节日', '生日', '毕业', '婚礼', '聚会', '户外', '城市',
    '自然', '动物', '艺术', '科技', '健康', '成长', '挑战', '成功', '失败',
    '第一次', '最后一次', '重要时刻', '日常生活'
  ];
  
  const handleImageFileChange = (file: File | null) => {
    setImageFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };
  
  const handleSubmit = async () => {
    setLoading(true);
    try {
      // 创建记忆
      const memory = await createMemory(formData);
      
      // 如果选择生成AI图像
      if (generateAIImage && !imageFile) {
        setGeneratingImage(true);
        try {
          await generateImage({
            memoryId: memory.id,
            prompt: `${formData.title}: ${formData.content}`,
            style: aiImageStyle,
            aspectRatio: '16:9',
            quality: 'standard'
          });
        } catch (error) {
          console.error('Failed to generate AI image:', error);
        } finally {
          setGeneratingImage(false);
        }
      }
      
      notifications.show({
        title: '记忆创建成功',
        message: generateAIImage ? 'AI图像正在生成中...' : '记忆已保存',
        color: 'green'
      });
      
      onMemoryCreated?.(memory.id);
    } catch (error) {
      console.error('Failed to create memory:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const canProceedToNext = () => {
    switch (currentStep) {
      case 0:
        return formData.title.trim() && formData.content.trim();
      case 1:
        return true; // 详细信息是可选的
      case 2:
        return true; // 媒体文件是可选的
      case 3:
        return true;
      default:
        return false;
    }
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <Stack gap="md">
            <TextInput
              label="记忆标题"
              placeholder="给这个记忆起个有意义的标题"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.currentTarget.value })}
              required
              error={!formData.title.trim() && '请输入标题'}
            />
            
            <Textarea
              label="记忆内容"
              placeholder="详细描述这个记忆，包括发生了什么、你的感受等"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.currentTarget.value })}
              minRows={6}
              required
              error={!formData.content.trim() && '请输入内容'}
            />
            
            <Alert icon={<IconInfoCircle size={16} />} color="blue" variant="light">
              <Text size="sm">
                详细的描述有助于AI生成更准确的图像。尽量包含场景、人物、情感等信息。
              </Text>
            </Alert>
          </Stack>
        );
        
      case 1:
        return (
          <Stack gap="md">
            <DateInput
              label="发生日期"
              description="这个记忆发生的日期"
              value={formData.date}
              onChange={(date) => setFormData({ ...formData, date: date || new Date() })}
            />
            
            <TextInput
              label="地点"
              placeholder="这个记忆发生的地点"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.currentTarget.value })}
              leftSection={<IconMapPin size={16} />}
            />
            
            <MultiSelect
              label="相关人物"
              description="参与这个记忆的人物"
              placeholder="添加相关的人物"
              data={formData.people || []}
              value={formData.people || []}
              onChange={(value) => setFormData({ ...formData, people: value })}
              searchable
              creatable
              getCreateLabel={(query) => `+ 添加 "${query}"`}
              onCreate={(query) => {
                const newPeople = [...(formData.people || []), query];
                setFormData({ ...formData, people: newPeople });
                return query;
              }}
              leftSection={<IconUsers size={16} />}
            />
            
            <MultiSelect
              label="情感标签"
              description="这个记忆让你感受到什么情感"
              placeholder="选择或添加情感标签"
              data={emotionOptions}
              value={formData.emotions || []}
              onChange={(value) => setFormData({ ...formData, emotions: value })}
              searchable
              creatable
              getCreateLabel={(query) => `+ 添加 "${query}"`}
              onCreate={(query) => {
                const newEmotions = [...(formData.emotions || []), query];
                setFormData({ ...formData, emotions: newEmotions });
                return query;
              }}
              leftSection={<IconHeart size={16} />}
            />
            
            <MultiSelect
              label="标签"
              description="为这个记忆添加标签，便于分类和搜索"
              placeholder="选择或添加标签"
              data={tagSuggestions}
              value={formData.tags || []}
              onChange={(value) => setFormData({ ...formData, tags: value })}
              searchable
              creatable
              getCreateLabel={(query) => `+ 添加 "${query}"`}
              onCreate={(query) => {
                const newTags = [...(formData.tags || []), query];
                setFormData({ ...formData, tags: newTags });
                return query;
              }}
              leftSection={<IconTag size={16} />}
            />
            
            <Select
              label="可见性"
              description="谁可以看到这个记忆"
              value={formData.visibility}
              onChange={(value) => setFormData({ ...formData, visibility: value as any })}
              data={[
                { value: 'private', label: '私密 - 只有我可以看到' },
                { value: 'shared', label: '分享 - 朋友可以看到' },
                { value: 'public', label: '公开 - 所有人可以看到' }
              ]}
            />
          </Stack>
        );
        
      case 2:
        return (
          <Stack gap="md">
            <Card shadow="sm" padding="md" radius="md" withBorder>
              <Stack gap="md">
                <Group>
                  <IconPhoto size={20} color="var(--mantine-color-blue-6)" />
                  <Title order={4}>图片</Title>
                </Group>
                
                <FileInput
                  label="上传图片"
                  placeholder="选择图片文件"
                  accept="image/*"
                  value={imageFile}
                  onChange={handleImageFileChange}
                  leftSection={<IconUpload size={16} />}
                />
                
                {imagePreview && (
                  <Box pos="relative">
                    <Image
                      src={imagePreview}
                      alt="预览"
                      height={200}
                      radius="md"
                    />
                    <ActionIcon
                      pos="absolute"
                      top={8}
                      right={8}
                      variant="filled"
                      color="red"
                      size="sm"
                      onClick={() => handleImageFileChange(null)}
                    >
                      <IconX size={14} />
                    </ActionIcon>
                  </Box>
                )}
                
                <Divider label="或者" labelPosition="center" />
                
                <Paper p="md" bg="violet.0" radius="md">
                  <Stack gap="sm">
                    <Group>
                      <IconRobot size={20} color="var(--mantine-color-violet-6)" />
                      <Text fw={500}>AI生成图片</Text>
                    </Group>
                    
                    <Text size="sm" c="dimmed">
                      基于记忆内容自动生成图片
                    </Text>
                    
                    <Group>
                      <Button
                        variant={generateAIImage ? 'filled' : 'light'}
                        color="violet"
                        size="sm"
                        onClick={() => setGenerateAIImage(!generateAIImage)}
                        disabled={!!imageFile}
                      >
                        {generateAIImage ? '已启用' : '启用AI生成'}
                      </Button>
                      
                      {generateAIImage && (
                        <Select
                          placeholder="选择风格"
                          value={aiImageStyle}
                          onChange={(value) => setAiImageStyle(value as any)}
                          data={[
                            { value: 'realistic', label: '写实风格' },
                            { value: 'artistic', label: '艺术风格' },
                            { value: 'cartoon', label: '卡通风格' },
                            { value: 'vintage', label: '复古风格' }
                          ]}
                          size="sm"
                          w={120}
                        />
                      )}
                    </Group>
                  </Stack>
                </Paper>
              </Stack>
            </Card>
          </Stack>
        );
        
      case 3:
        return (
          <Stack gap="md">
            <Alert icon={<IconCheck size={16} />} color="green" variant="light">
              <Text fw={500} mb="xs">记忆信息确认</Text>
              <Text size="sm">
                请检查以下信息，确认无误后点击"创建记忆"按钮。
              </Text>
            </Alert>
            
            <Card shadow="sm" padding="md" radius="md" withBorder>
              <Stack gap="sm">
                <Group>
                  <Text fw={500}>标题:</Text>
                  <Text>{formData.title}</Text>
                </Group>
                
                <Box>
                  <Text fw={500} mb="xs">内容:</Text>
                  <Text size="sm" c="dimmed" style={{ whiteSpace: 'pre-wrap' }}>
                    {formData.content}
                  </Text>
                </Box>
                
                <Group>
                  <Text fw={500}>日期:</Text>
                  <Badge variant="light">
                    <Group gap="xs">
                      <IconCalendar size={12} />
                      {new Intl.DateTimeFormat('zh-CN').format(formData.date)}
                    </Group>
                  </Badge>
                </Group>
                
                {formData.location && (
                  <Group>
                    <Text fw={500}>地点:</Text>
                    <Badge variant="light" color="green">
                      <Group gap="xs">
                        <IconMapPin size={12} />
                        {formData.location}
                      </Group>
                    </Badge>
                  </Group>
                )}
                
                {formData.people && formData.people.length > 0 && (
                  <Box>
                    <Text fw={500} mb="xs">相关人物:</Text>
                    <Group gap="xs">
                      {formData.people.map((person, idx) => (
                        <Badge key={idx} variant="outline" size="sm">
                          {person}
                        </Badge>
                      ))}
                    </Group>
                  </Box>
                )}
                
                {formData.emotions && formData.emotions.length > 0 && (
                  <Box>
                    <Text fw={500} mb="xs">情感:</Text>
                    <Group gap="xs">
                      {formData.emotions.map((emotion, idx) => (
                        <Badge key={idx} variant="light" color="pink" size="sm">
                          {emotion}
                        </Badge>
                      ))}
                    </Group>
                  </Box>
                )}
                
                {formData.tags && formData.tags.length > 0 && (
                  <Box>
                    <Text fw={500} mb="xs">标签:</Text>
                    <Group gap="xs">
                      {formData.tags.map((tag, idx) => (
                        <Badge key={idx} variant="light" size="sm">
                          #{tag}
                        </Badge>
                      ))}
                    </Group>
                  </Box>
                )}
                
                <Group>
                  <Text fw={500}>可见性:</Text>
                  <Badge 
                    variant="light" 
                    color={formData.visibility === 'private' ? 'gray' : 'blue'}
                  >
                    {formData.visibility === 'private' ? '私密' : 
                     formData.visibility === 'shared' ? '分享' : '公开'}
                  </Badge>
                </Group>
                
                {(imageFile || generateAIImage || audioFile || videoFile) && (
                  <Box>
                    <Text fw={500} mb="xs">媒体文件:</Text>
                    <Group gap="xs">
                      {imageFile && (
                        <Badge variant="light" color="blue">
                          <Group gap="xs">
                            <IconPhoto size={12} />
                            图片
                          </Group>
                        </Badge>
                      )}
                      {generateAIImage && !imageFile && (
                        <Badge variant="light" color="violet">
                          <Group gap="xs">
                            <IconRobot size={12} />
                            AI图片
                          </Group>
                        </Badge>
                      )}
                      {audioFile && (
                        <Badge variant="light" color="green">
                          <Group gap="xs">
                            <IconMicrophone size={12} />
                            音频
                          </Group>
                        </Badge>
                      )}
                      {videoFile && (
                        <Badge variant="light" color="orange">
                          <Group gap="xs">
                            <IconVideo size={12} />
                            视频
                          </Group>
                        </Badge>
                      )}
                    </Group>
                  </Box>
                )}
              </Stack>
            </Card>
            
            {generateAIImage && (
              <Alert icon={<IconRobot size={16} />} color="violet" variant="light">
                <Text size="sm">
                  AI将在记忆创建后自动生成图片，这可能需要几分钟时间。
                </Text>
              </Alert>
            )}
          </Stack>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <Stack gap="lg" p="md">
      {/* 头部 */}
      <Group justify="space-between">
        <Group>
          <IconPlus size={28} color="var(--mantine-color-blue-6)" />
          <Box>
            <Title order={2}>创建新记忆</Title>
            <Text c="dimmed" size="sm">记录你的珍贵时刻</Text>
          </Box>
        </Group>
        
        {onCancel && (
          <Button variant="light" onClick={onCancel}>
            取消
          </Button>
        )}
      </Group>
      
      {/* 进度指示器 */}
      <Card shadow="sm" padding="md" radius="md" withBorder>
        <Stepper active={currentStep} onStepClick={setCurrentStep}>
          {steps.map((step, index) => (
            <Stepper.Step
              key={index}
              label={step.label}
              description={step.description}
              allowStepSelect={index <= currentStep}
            />
          ))}
        </Stepper>
      </Card>
      
      {/* 步骤内容 */}
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        {renderStepContent()}
      </Card>
      
      {/* 操作按钮 */}
      <Group justify="space-between">
        <Button
          variant="light"
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
        >
          上一步
        </Button>
        
        <Group>
          {currentStep < steps.length - 1 ? (
            <Button
              onClick={() => setCurrentStep(currentStep + 1)}
              disabled={!canProceedToNext()}
            >
              下一步
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              loading={loading || generatingImage}
              disabled={!canProceedToNext()}
              leftSection={<IconCheck size={16} />}
            >
              {loading ? '创建中...' : generatingImage ? 'AI生成中...' : '创建记忆'}
            </Button>
          )}
        </Group>
      </Group>
      
      {/* 进度条 */}
      {(loading || generatingImage) && (
        <Card shadow="sm" padding="md" radius="md" withBorder>
          <Stack gap="sm">
            <Text size="sm" fw={500}>
              {loading ? '正在保存记忆...' : 'AI正在生成图片...'}
            </Text>
            <Progress value={loading ? 50 : 80} animated />
          </Stack>
        </Card>
      )}
    </Stack>
  );
};