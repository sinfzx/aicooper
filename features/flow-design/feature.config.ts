import { FeatureConfig } from '@my-platform/types';

export const flowDesignFeature: FeatureConfig = {
  id: 'flow-design',
  name: '流程设计',
  description: '创建和管理结构化的执行流程，支持AI辅助生成',
  version: '1.0.0',
  status: 'stable',

  // 桌面应用配置
  desktop: {
    enabled: true,
    menuItems: [
      {
        label: '流程设计',
        path: '/flows',
        icon: 'IconRoute'
      }
    ],
    shortcuts: [
      {
        key: 'cmd+shift+f',
        action: 'create_flow',
        description: '创建新流程'
      }
    ],
    routes: [
      {
        path: '/flows',
        component: 'FlowDesignManager',
        exact: true
      },
      {
        path: '/flows/:id',
        component: 'FlowDesignViewer',
        exact: true
      }
    ]
  },

  // 官网展示配置
  website: {
    enabled: true,
    showcase: {
      title: '流程设计',
      subtitle: '结构化任务执行',
      description: '创建详细的执行流程，包含步骤、工具、资源和时间估算，支持AI辅助生成',
      features: [
        '步骤化流程设计',
        'AI辅助创建流程',
        '工具和资源管理',
        '时间估算和难度评级',
        '最佳实践提取',
        '团队协作分享'
      ],
      screenshots: [
        '/images/features/flow-design-manager.png',
        '/images/features/flow-design-creator.png',
        '/images/features/flow-design-viewer.png'
      ],
      demoVideo: '/videos/flow-design-demo.mp4'
    },
    pricing: {
      tier: 'pro',
      features: [
        '无限流程创建',
        'AI辅助生成',
        '团队协作',
        '高级分析'
      ]
    }
  },

  // API 配置
  api: {
    endpoints: [
      '/api/flows',
      '/api/flows/:id',
      '/api/flows/:id/steps',
      '/api/flows/:id/tools'
    ],
    permissions: [
      'flow:read',
      'flow:write',
      'flow:delete',
      'flow:share'
    ]
  },

  // 依赖配置
  dependencies: {
    ai: ['openai', 'anthropic', 'pollinations'],
    ui: ['@mantine/core', '@tabler/icons-react'],
    core: ['@my-platform/types']
  }
};