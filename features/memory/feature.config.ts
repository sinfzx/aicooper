import { FeatureConfig } from '@my-platform/types';

export const memoryFeatureConfig: FeatureConfig = {
  id: 'memory',
  name: '记忆管理',
  description: '管理和组织个人记忆，支持AI图像生成和视频制作',
  version: '0.1.0',
  icon: 'IconPhoto',
  category: 'productivity',
  enabled: true,
  routes: [
    {
      path: '/memory',
      component: 'MemoryManager',
      name: '记忆管理',
      description: '查看和管理所有记忆'
    },
    {
      path: '/memory/create',
      component: 'MemoryCreator',
      name: '创建记忆',
      description: '添加新的记忆'
    },
    {
      path: '/memory/timeline',
      component: 'MemoryTimeline',
      name: '时间线',
      description: '按时间查看记忆'
    },
    {
      path: '/memory/gallery',
      component: 'MemoryGallery',
      name: '记忆画廊',
      description: 'AI生成的记忆图像'
    }
  ],
  permissions: [
    'memory:read',
    'memory:write',
    'memory:delete',
    'memory:ai-generate'
  ],
  dependencies: [
    '@my-platform/ai-knowledge',
    '@my-platform/prompt-templates'
  ]
};

export default memoryFeatureConfig;