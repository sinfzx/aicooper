// 共享标签系统
export interface Tag {
  id: string;
  name: string;
  parentId?: string; // 支持二级标签
  level: number; // 1 或 2
  createdAt: string;
  updatedAt: string;
}

// 基础实体接口
export interface BaseEntity {
  id: string;
  title: string;
  description: string;
  tags: string[]; // 标签ID数组
  isPublic: boolean; // 是否社区可见
  isBlocked: boolean; // 后台管控屏蔽
  authorId: string;
  authorName: string;
  createdAt: string;
  updatedAt: string;
  syncedAt?: string; // 最后同步时间
  localOnly: boolean; // 是否仅本地存储
}

// 知识框架相关
export interface KnowledgeNode {
  id: string;
  title: string;
  content: string;
  questions: string[]; // 相关问题
  parentId?: string;
  children: KnowledgeNode[];
  level: number;
  expanded: boolean;
  position: { x: number; y: number };
  createdAt: string;
  updatedAt: string;
}

export interface KnowledgeFramework extends BaseEntity {
  type: 'framework';
  rootNodes: KnowledgeNode[];
  version: number;
  domain: string; // 领域
}

// 提示模板相关
export interface PromptParameter {
  name: string;
  description: string;
  required: boolean;
  defaultValue?: string;
  type: 'text' | 'number' | 'select' | 'textarea';
  options?: string[]; // 用于 select 类型
}

export interface PromptTemplate extends BaseEntity {
  type: 'template';
  prompt: string; // 包含 {参数} 的提示词
  parameters: PromptParameter[];
  article: string; // MD 说明文章
  category: string; // 模板分类
  usage: number; // 使用次数
  rating: number; // 评分
}

// 流程设计相关
export interface FlowTool {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
}

export interface FlowResource {
  id: string;
  type: 'url';
  title: string;
  url: string;
  description?: string;
}

export interface FlowStep {
  id: string;
  title: string;
  description: string;
  order: number;
  resources: FlowResource[];
  tools: string[]; // 工具ID数组
  questions: string[]; // 相关问题
  estimatedTime?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface FlowDesign extends BaseEntity {
  type: 'flow';
  article: string; // MD 说明文章
  steps: FlowStep[];
  tools: FlowTool[];
  totalTime?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  prerequisites: string[];
  outcomes: string[];
}

// AI 辅助创建请求
export interface AICreateRequest {
  type: 'framework' | 'template' | 'flow';
  basicInfo: {
    title: string;
    description: string;
    domain?: string;
    category?: string;
    tags?: string[];
  };
  additionalData?: {
    urls?: string[]; // 参考文章URL
    parentNodeId?: string; // 用于框架节点扩展
    requirements?: string[]; // 额外需求
  };
}

// AI 服务配置
export interface AIServiceConfig {
  id: string;
  name: string;
  provider: 'openai' | 'anthropic' | 'pollinations' | 'custom';
  apiKey?: string;
  baseUrl?: string;
  model: string;
  priority: number; // 优先级，数字越小优先级越高
  isActive: boolean;
  isDefault: boolean;
}

// 内置提示词模板（用于AI辅助创建）
export interface InternalPromptTemplate {
  id: string;
  name: string;
  type: 'framework_create' | 'framework_expand' | 'template_create' | 'flow_create' | 'url_summary';
  prompt: string;
  description: string;
  version: string;
}

// 同步状态
export interface SyncStatus {
  entityType: 'framework' | 'template' | 'flow';
  entityId: string;
  localVersion: number;
  remoteVersion?: number;
  status: 'synced' | 'local_newer' | 'remote_newer' | 'conflict' | 'not_synced';
  lastSyncAt?: string;
}

// API 响应类型
export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

// 搜索和过滤
export interface SearchFilters {
  query?: string;
  tags?: string[];
  author?: string;
  isPublic?: boolean;
  dateRange?: {
    start: string;
    end: string;
  };
  sortBy?: 'created' | 'updated' | 'title' | 'usage' | 'rating';
  sortOrder?: 'asc' | 'desc';
}