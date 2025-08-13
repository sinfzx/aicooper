import { FeatureConfig } from '@my-platform/types'

export const config: FeatureConfig = {
  id: 'prompt-templates',
  name: '提示词模板库',
  description: '专业的 AI 提示词模板库，涵盖各种应用场景和行业领域',
  version: '1.0.0',
  status: 'beta',

  // 桌面应用配置
  desktop: {
    enabled: true,
    menuItems: [
      {
        label: '提示词库',
        path: '/prompt-templates',
        icon: 'template-icon'
      }
    ],
    shortcuts: [
      {
        key: 'Cmd+T',
        action: 'open-template-search',
        description: '打开模板搜索'
      }
    ],
    routes: [
      {
        path: '/prompt-templates',
        component: 'PromptTemplates'
      }
    ]
  },

  // 官网展示配置
  website: {
    enabled: true,
    showcase: {
      title: '提示词模板库',
      subtitle: '实用的 AI 提示词集合',
      description: '精选的提示词模板，涵盖写作、编程、翻译等常用场景，帮助您快速获得高质量的 AI 输出。',
      features: [
        '精选提示词模板',
        '分类管理系统',
        '一键复制使用',
        '自定义模板创建'
      ],
      screenshots: [],
    },
    pricing: {
      tier: 'free',
      features: [
        '基础模板库',
        '模板复制功能',
        '简单分类管理'
      ]
    }
  },

  // API 配置
  api: {
    endpoints: [
      '/api/templates/list',
      '/api/templates/create'
    ],
    permissions: ['templates:read', 'templates:write']
  },

  // 依赖配置
  dependencies: {
    ui: ['@radix-ui/react-select'],
    core: ['@my-platform/core']
  }
}

export default config