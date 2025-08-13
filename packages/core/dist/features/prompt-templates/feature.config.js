export const config = {
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
            subtitle: '专业的 AI 提示词集合',
            description: '精心设计的提示词模板库，涵盖写作、编程、分析、创意等多个领域。每个模板都经过优化测试，帮助您快速获得高质量的 AI 输出结果。',
            features: [
                '500+ 精选提示词模板',
                '分类管理和标签系统',
                '自定义模板创建',
                '模板效果预览',
                '一键复制和分享',
                '社区模板市场'
            ],
            screenshots: [
                '/images/prompt-templates/library.png',
                '/images/prompt-templates/editor.png',
                '/images/prompt-templates/preview.png'
            ],
            demoVideo: '/videos/prompt-templates-demo.mp4'
        },
        pricing: {
            tier: 'free',
            features: [
                '基础模板库访问',
                '自定义模板创建',
                '模板导入导出',
                '基础分类管理'
            ]
        }
    },
    // API 配置
    api: {
        endpoints: [
            '/api/templates/list',
            '/api/templates/create',
            '/api/templates/search',
            '/api/templates/share'
        ],
        permissions: ['templates:read', 'templates:write']
    },
    // 依赖配置
    dependencies: {
        ai: ['openai'],
        ui: ['@radix-ui/react-select', '@radix-ui/react-tabs'],
        core: ['@my-platform/core']
    }
};
export default config;
