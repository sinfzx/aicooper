// 功能模块类型定义
export interface FeatureConfig {
  id: string;
  name: string;
  description: string;
  version: string;
  status: 'development' | 'beta' | 'stable' | 'deprecated' | 'disabled';

  // 桌面应用配置
  desktop: {
    enabled: boolean;
    menuItems?: MenuItem[];
    shortcuts?: Shortcut[];
    routes?: Route[];
  };

  // 官网展示配置
  website: {
    enabled: boolean;
    showcase?: {
      title: string;
      subtitle: string;
      description: string;
      features: string[];
      screenshots: string[];
      demoVideo?: string;
    };
    pricing?: {
      tier: 'free' | 'pro' | 'enterprise';
      features: string[];
    };
  };

  // API 配置
  api?: {
    endpoints: string[];
    permissions: string[];
  };

  // 依赖配置
  dependencies?: {
    ai?: string[];
    ui?: string[];
    core?: string[];
  };
}

export interface MenuItem {
  label: string;
  path: string;
  icon: string;
  children?: MenuItem[];
}

export interface Shortcut {
  key: string;
  action: string;
  description?: string;
}

export interface Route {
  path: string;
  component: string;
  exact?: boolean;
}

// 网站内容类型
export interface WebsiteContent {
  features: FeatureShowcase[];
  pricing: PricingTier[];
  navigation: NavigationItem[];
}

export interface FeatureShowcase {
  id: string;
  name: string;
  description: string;
  features: string[];
  screenshots: string[];
  status: FeatureConfig['status'];
  tier: 'free' | 'pro' | 'enterprise';
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

// API Key 管理相关类型
export interface ApiKeyConfig {
  id: string;
  name: string;
  provider:
    | 'openai'
    | 'anthropic'
    | 'google'
    | 'azure'
    | 'local'
    | 'openrouter'
    | 'stability'
    | 'elevenlabs'
    | 'qwen'
    | 'deepseek'
    | 'zhipu'
    | 'moonshot'
    | 'baidu';
  apiKey: string;
  baseUrl?: string;
  model?: string;
  isDefault: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface LLMProvider {
  id: string;
  name: string;
  description: string;
  icon: string;
  models: LLMModel[];
  requiredFields: ApiKeyField[];
  testEndpoint?: string;
  // 可选能力标记：用于区分文本/语音/图片/视频/3D
  capabilities?: Array<'text' | 'image' | 'audio' | 'video' | '3d'>;
  // 提供商主类型（便于 UI 分组展示）
  serviceType?: 'llm' | 'tts' | 'image' | 'video' | '3d';
}

export interface LLMModel {
  id: string;
  name: string;
  contextLength: number;
}

export interface ApiKeyField {
  key: string;
  label: string;
  type: 'text' | 'password' | 'url';
  required: boolean;
  placeholder?: string;
  description?: string;
}

// 设置相关类型
export interface AppSettings {
  theme: 'light' | 'dark' | 'system';
  language: 'zh-CN' | 'en-US';
  autoSave: boolean;
  defaultProvider: string;
  maxTokens: number;
  temperature: number;
  enableTelemetry: boolean;
  // Memory feature related preferences (desktop-only persistence)
  birthYear?: number;
  birthRegion?: string; // e.g., "CN-Guangdong/Guangzhou"
  memoryLanguage?: 'zh-CN' | 'en-US';
  imageStyleDefault?: 'realistic' | 'artistic' | 'cartoon' | 'vintage';
  imageAspectDefault?: '1:1' | '16:9' | '9:16' | '4:3';
}

// AI 聊天相关类型
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  tokens?: number;
  model?: string;
}

export interface ChatSession {
  id: string;
  title: string;
  messages: ChatMessage[];
  provider: string;
  model: string;
  createdAt: string;
  updatedAt: string;
}

// 简化的用户类型（用于桌面应用）
export interface User {
  id: string;
  name: string;
  email?: string;
}

// 提示词模板相关类型
export interface PromptTemplate {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  parameters: PromptParameter[];
  documentation?: string; // markdown 文档
  createdAt: string;
  updatedAt: string;
}

export interface PromptParameter {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'number';
  required: boolean;
  defaultValue?: string;
  placeholder?: string;
  description?: string;
  options?: string[]; // for select type
  min?: number; // for number type
  max?: number; // for number type
}

// 知识框架相关类型
export interface KnowledgeFramework {
  id: string;
  name: string;
  description: string;
  domain: string;
  rootNodes: KnowledgeNode[];
  version: number;
  isBuiltIn: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface KnowledgeNode {
  id: string;
  title: string;
  description?: string;
  content?: string;
  children: KnowledgeNode[];
  questions: string[];
  urls: string[];
  position?: { x: number; y: number };
  expanded: boolean;
  level: number;
}

export interface SearchProvider {
  id: string;
  name: string;
  icon: string;
  baseUrl: string;
  searchParam: string;
  enabled: boolean;
}

export interface CloudSyncConfig {
  enabled: boolean;
  r2Endpoint?: string;
  accessKey?: string;
  secretKey?: string;
  bucketName?: string;
}

// 导出新的功能类型
export * from './features';
