import { FeatureConfig } from '@my-platform/types'

export const config: FeatureConfig = {
  id: 'ai-knowledge',
  name: 'AI 知识框架',
  description: '构建和管理领域知识体系，支持知识图谱可视化和智能检索',
  version: '1.0.0',
  status: 'stable',
  
  // 桌面应用配置
  desktop: {
    enabled: true,
    menuItems: [
      {
        label: '知识框架',
        path: '/ai-knowledge',
        icon: 'knowledge-icon'
      }
    ],
    shortcuts: [
      {
        key: 'Cmd+K',
        action: 'open-knowledge-search',
        description: '打开知识搜索'
      }
    ],
    routes: [
      {
        path: '/ai-knowledge',
        component: 'KnowledgeFramework'
      }
    ]
  },
  
  // 官网展示配置
  website: {
    enabled: true,
    showcase: {
      title: 'AI 知识框架',
      subtitle: '智能知识管理工具',
      description: '帮助您整理、管理和检索知识内容，提升学习和工作效率。',
      features: [
        '知识笔记整理',
        '智能内容检索',
        '结构化知识管理',
        '多格式文档支持'
      ],
      screenshots: [],
    },
    pricing: {
      tier: 'free',
      features: [
        '基础知识管理',
        '文档导入导出',
        '简单搜索功能'
      ]
    }
  },
  
  // API 配置
  api: {
    endpoints: [
      '/api/knowledge/create',
      '/api/knowledge/search'
    ],
    permissions: ['knowledge:read', 'knowledge:write']
  },
  
  // 依赖配置
  dependencies: {
    ai: ['openai'],
    ui: ['@radix-ui/react-dialog'],
    core: ['@my-platform/core']
  }
}

export default config