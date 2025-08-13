import { KnowledgeFramework } from '@my-platform/types';

export const builtInFrameworks: KnowledgeFramework[] = [
  {
    id: 'framework-office-efficiency',
    name: '办公效率',
    description: '提升工作效率的系统性方法',
    domain: 'productivity',
    version: 1,
    isBuiltIn: true,
    rootNodes: [
      {
        id: 'node-time-management',
        title: '时间管理',
        description: '科学管理时间，提高工作效率',
        children: [],
        questions: [
          '如何使用番茄工作法？',
          '什么是时间块管理？',
          '如何处理时间碎片？'
        ],
        urls: [],
        expanded: false,
        level: 0,
        position: { x: 0, y: 0 }
      },
      {
        id: 'node-communication',
        title: '沟通技巧',
        description: '有效沟通的方法和技巧',
        children: [],
        questions: [
          '如何进行有效的会议？',
          '怎样写出清晰的邮件？',
          '如何处理工作冲突？'
        ],
        urls: [],
        expanded: false,
        level: 0,
        position: { x: 200, y: 0 }
      }
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'framework-digital-marketing',
    name: '数字营销',
    description: '数字化时代的营销策略和方法',
    domain: 'marketing',
    version: 1,
    isBuiltIn: true,
    rootNodes: [
      {
        id: 'node-content-marketing',
        title: '内容营销',
        description: '通过优质内容吸引和转化客户',
        children: [],
        questions: [
          '如何创作吸引人的内容？',
          '什么是内容营销漏斗？',
          '如何分发内容？'
        ],
        urls: [],
        expanded: false,
        level: 0,
        position: { x: 0, y: 0 }
      },
      {
        id: 'node-seo',
        title: 'SEO优化',
        description: '搜索引擎优化的策略和技巧',
        children: [],
        questions: [
          '什么是关键词研究？',
          '如何优化网站结构？',
          '怎样建设外链？'
        ],
        urls: [],
        expanded: false,
        level: 0,
        position: { x: 200, y: 0 }
      }
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];