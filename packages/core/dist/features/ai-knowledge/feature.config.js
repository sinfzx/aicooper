export const config = {
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
            subtitle: '构建专业领域知识体系',
            description: '通过 AI 技术自动构建、组织和管理知识图谱，支持多维度知识关联和智能检索。帮助您快速建立领域专业知识库，提升学习和工作效率。',
            features: [
                '自动知识提取和分类',
                '可视化知识图谱展示',
                '智能知识推荐系统',
                '多格式文档支持',
                '知识关联分析',
                '协作知识构建'
            ],
            screenshots: [
                '/images/ai-knowledge/screenshot-1.png',
                '/images/ai-knowledge/screenshot-2.png',
                '/images/ai-knowledge/knowledge-graph.png'
            ],
            demoVideo: '/videos/ai-knowledge-demo.mp4'
        },
        pricing: {
            tier: 'pro',
            features: [
                '无限知识节点',
                '高级可视化图表',
                'API 集成支持',
                '团队协作功能',
                '数据导入导出'
            ]
        }
    },
    // API 配置
    api: {
        endpoints: [
            '/api/knowledge/create',
            '/api/knowledge/search',
            '/api/knowledge/graph',
            '/api/knowledge/analyze'
        ],
        permissions: ['knowledge:read', 'knowledge:write', 'knowledge:admin']
    },
    // 依赖配置
    dependencies: {
        ai: ['openai', 'anthropic'],
        ui: ['@radix-ui/react-dialog', 'd3', 'react-flow-renderer'],
        core: ['@my-platform/core']
    }
};
export default config;
