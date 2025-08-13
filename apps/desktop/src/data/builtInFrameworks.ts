import { KnowledgeFramework } from '@my-platform/types';

export const builtInFrameworks: KnowledgeFramework[] = [
  {
    id: 'office-productivity',
    name: '办公效率',
    description: '现代办公环境下的效率提升方法和工具',
    domain: 'office',
    version: 1,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    rootNodes: [
      {
        id: 'time-management',
        title: '时间管理',
        description: '有效管理时间，提升工作效率',
        level: 0,
        expanded: false,
        position: { x: 0, y: 0 },
        questions: [
          '如何制定有效的时间计划？',
          '怎样避免时间浪费？',
          '如何平衡工作和生活？'
        ],
        urls: [],
        children: [
          {
            id: 'pomodoro-technique',
            title: '番茄工作法',
            description: '25分钟专注工作，5分钟休息的时间管理方法',
            level: 1,
            expanded: false,
            position: { x: -200, y: 100 },
            questions: [
              '番茄工作法的具体步骤是什么？',
              '如何选择合适的番茄时长？'
            ],
            urls: [],
            children: []
          },
          {
            id: 'gtd-method',
            title: 'GTD 方法',
            description: 'Getting Things Done - 完整的任务管理系统',
            level: 1,
            expanded: false,
            position: { x: 200, y: 100 },
            questions: [
              'GTD 的五个步骤是什么？',
              '如何建立有效的收集系统？'
            ],
            urls: [],
            children: []
          }
        ]
      },
      {
        id: 'communication-skills',
        title: '沟通技巧',
        description: '职场沟通和协作技能',
        level: 0,
        expanded: false,
        position: { x: 300, y: 0 },
        questions: [
          '如何进行有效的会议沟通？',
          '怎样处理工作冲突？',
          '如何提升演讲能力？'
        ],
        urls: [],
        children: []
      },
      {
        id: 'digital-tools',
        title: '数字化工具',
        description: '提升办公效率的软件和工具',
        level: 0,
        expanded: false,
        position: { x: -300, y: 0 },
        questions: [
          '有哪些好用的办公软件？',
          '如何选择合适的项目管理工具？',
          '怎样实现文档协作？'
        ],
        urls: [],
        children: []
      }
    ]
  },
  {
    id: 'digital-marketing',
    name: '数字营销',
    description: '数字化时代的营销策略和方法',
    domain: 'marketing',
    version: 1,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    rootNodes: [
      {
        id: 'content-marketing',
        title: '内容营销',
        description: '通过有价值的内容吸引和留住客户',
        level: 0,
        expanded: false,
        position: { x: 0, y: 0 },
        questions: [
          '如何制定内容营销策略？',
          '什么样的内容更容易传播？',
          '如何衡量内容营销效果？'
        ],
        urls: [],
        children: []
      },
      {
        id: 'social-media-marketing',
        title: '社交媒体营销',
        description: '利用社交平台进行品牌推广',
        level: 0,
        expanded: false,
        position: { x: 300, y: 0 },
        questions: [
          '如何选择合适的社交媒体平台？',
          '怎样制作吸引人的社交媒体内容？',
          '如何与粉丝互动？'
        ],
        urls: [],
        children: []
      },
      {
        id: 'seo-optimization',
        title: 'SEO 优化',
        description: '搜索引擎优化技术和策略',
        level: 0,
        expanded: false,
        position: { x: -300, y: 0 },
        questions: [
          'SEO 的基本原理是什么？',
          '如何进行关键词研究？',
          '怎样优化网站结构？'
        ],
        urls: [],
        children: []
      }
    ]
  },
  {
    id: 'global-expansion',
    name: '海外推广',
    description: '企业国际化和海外市场拓展',
    domain: 'international',
    version: 1,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    rootNodes: [
      {
        id: 'market-research',
        title: '市场调研',
        description: '了解目标市场的需求和竞争环境',
        level: 0,
        expanded: false,
        position: { x: 0, y: 0 },
        questions: [
          '如何分析海外市场机会？',
          '怎样了解当地消费者习惯？',
          '如何评估竞争对手？'
        ],
        urls: [],
        children: []
      },
      {
        id: 'localization',
        title: '本地化策略',
        description: '产品和服务的本地化适配',
        level: 0,
        expanded: false,
        position: { x: 300, y: 0 },
        questions: [
          '如何进行文化适配？',
          '怎样处理语言本地化？',
          '如何适应当地法规？'
        ],
        urls: [],
        children: []
      },
      {
        id: 'cross-border-ecommerce',
        title: '跨境电商',
        description: '跨境电子商务运营策略',
        level: 0,
        expanded: false,
        position: { x: -300, y: 0 },
        questions: [
          '如何选择跨境电商平台？',
          '怎样处理国际物流？',
          '如何管理汇率风险？'
        ],
        urls: [],
        children: []
      }
    ]
  }
];

export const defaultSearchProviders = [
  {
    id: 'google',
    name: 'Google',
    icon: '🔍',
    baseUrl: 'https://www.google.com/search',
    searchParam: 'q',
    enabled: true
  },
  {
    id: 'bing',
    name: 'Bing',
    icon: '🔎',
    baseUrl: 'https://www.bing.com/search',
    searchParam: 'q',
    enabled: false
  },
  {
    id: 'baidu',
    name: '百度',
    icon: '🐻',
    baseUrl: 'https://www.baidu.com/s',
    searchParam: 'wd',
    enabled: true
  }
];