import { invoke } from '@tauri-apps/api/core';

// 基础API调用
export const tauriApi = {
  greet: () => invoke<string>('greet'),
  
  // API Key 管理 (原有文件系统方式)
  getApiKeys: () => invoke<any[]>('get_api_keys'),
  saveApiKey: (apiKey: any) => invoke<void>('save_api_key', { apiKey }),
  deleteApiKey: (keyId: string) => invoke<void>('delete_api_key', { keyId }),
  testApiKey: (provider: string, apiKey: string, baseUrl?: string) => 
    invoke<boolean>('test_api_key', { provider, apiKey, baseUrl }),
  
  // API Key 管理 (新数据库方式)
  dbCreateApiKey: (request: any) => invoke<any>('db_create_api_key', { request }),
  dbGetApiKeys: () => invoke<any[]>('db_get_api_keys'),
  
  // 设置管理
  getSettings: () => invoke<any>('get_settings'),
  saveSettings: (settings: any) => invoke<void>('save_settings', { settings }),
  
  // AI 聊天 (原有方式)
  chatWithAi: (provider: string, apiKey: string, model: string, messages: any[], baseUrl?: string) =>
    invoke<string>('chat_with_ai', { provider, apiKey, model, messages, baseUrl }),
  
  // AI 服务 (新数据库方式)
  dbCallAi: (request: any) => invoke<any>('db_call_ai', { request }),
  
  // 知识框架管理 (原有文件系统方式)
  getKnowledgeFrameworks: () => invoke<any[]>('get_knowledge_frameworks'),
  createKnowledgeFramework: (framework: any) => invoke<void>('create_knowledge_framework', { framework }),
  saveKnowledgeFramework: (framework: any) => invoke<void>('save_knowledge_framework', { framework }),
  deleteKnowledgeFramework: (frameworkId: string) => invoke<void>('delete_knowledge_framework', { frameworkId }),
  generateChildNodes: (provider: string, apiKey: string, model: string, parentTitle: string, parentDescription: string, domainContext: string, nodeCount: number, targetUser: string, baseUrl?: string) =>
    invoke<string>('generate_child_nodes', { provider, apiKey, model, parentTitle, parentDescription, domainContext, nodeCount, targetUser, baseUrl }),
  
  // 知识框架管理 (新数据库方式)
  dbGetKnowledgeFrameworks: () => invoke<any[]>('db_get_knowledge_frameworks'),
  dbCreateKnowledgeFrameworkWithAi: (title: string, description: string, domain: string) =>
    invoke<any>('db_create_knowledge_framework_with_ai', { title, description, domain }),
  
  // 流程设计 (新数据库方式)
  dbGetFlowDesigns: () => invoke<any[]>('db_get_flow_designs'),
  dbCreateFlowDesignWithAi: (title: string, description: string, goals: string, difficulty: string) =>
    invoke<any>('db_create_flow_design_with_ai', { title, description, goals, difficulty }),
  
  // 提示模板 (原有API方式)
  getPromptTemplates: () => invoke<any[]>('get_prompt_templates'),
  createPromptTemplate: (template: any) => invoke<void>('create_prompt_template', { template }),
  updatePromptTemplate: (template: any) => invoke<void>('update_prompt_template', { template }),
  deletePromptTemplate: (id: string) => invoke<void>('delete_prompt_template', { id }),
  
  // 提示模板 (新数据库方式)
  dbGetPromptTemplates: () => invoke<any[]>('db_get_prompt_templates'),
  dbCreatePromptTemplateWithAi: (title: string, description: string, category: string, purpose: string, targetUser: string) =>
    invoke<any>('db_create_prompt_template_with_ai', { title, description, category, purpose, targetUser }),
  
  // 认证
  sendVerificationCode: (email: string) => invoke<any>('send_verification_code', { email }),
  verifyCodeAndLogin: (email: string, code: string) => invoke<any>('verify_code_and_login', { email, code }),
  saveAuthData: (user: any, token: string, expiresAt: number) => invoke<void>('save_auth_data', { user, token, expiresAt }),
  getAuthData: () => invoke<any>('get_auth_data'),
  logout: () => invoke<void>('logout'),
  
  // 搜索提供商
  getSearchProviders: () => invoke<any[]>('get_search_providers'),
  saveSearchProviders: (providers: any[]) => invoke<void>('save_search_providers', { providers }),
  searchWithProvider: (providerId: string, query: string) => invoke<string>('search_with_provider', { providerId, query }),
};

// 错误处理包装器
export const safeInvoke = async <T>(fn: () => Promise<T>): Promise<{ success: boolean; data?: T; error?: string }> => {
  try {
    const data = await fn();
    return { success: true, data };
  } catch (error) {
    console.error('Tauri invoke error:', error);
    return { success: false, error: error as string };
  }
};

// 新的数据库API包装器
export const dbApi = {
  // API Key 管理
  createApiKey: (name: string, provider: string, apiKey: string, baseUrl?: string, model?: string, isDefault = false) =>
    safeInvoke(() => tauriApi.dbCreateApiKey({ name, provider, apiKey, baseUrl, model, isDefault })),
  
  getApiKeys: () => safeInvoke(() => tauriApi.dbGetApiKeys()),
  
  // AI 服务
  callAi: (prompt: string, systemPrompt?: string, model?: string, maxTokens?: number, temperature?: number) =>
    safeInvoke(() => tauriApi.dbCallAi({ prompt, systemPrompt, model, maxTokens, temperature })),
  
  // 知识框架
  getKnowledgeFrameworks: () => safeInvoke(() => tauriApi.dbGetKnowledgeFrameworks()),
  createKnowledgeFrameworkWithAi: (title: string, description: string, domain: string) =>
    safeInvoke(() => tauriApi.dbCreateKnowledgeFrameworkWithAi(title, description, domain)),
  
  // 流程设计
  getFlowDesigns: () => safeInvoke(() => tauriApi.dbGetFlowDesigns()),
  createFlowDesignWithAi: (title: string, description: string, goals: string, difficulty: string) =>
    safeInvoke(() => tauriApi.dbCreateFlowDesignWithAi(title, description, goals, difficulty)),
  
  // 提示模板
  getPromptTemplates: () => safeInvoke(() => tauriApi.dbGetPromptTemplates()),
  createPromptTemplateWithAi: (title: string, description: string, category: string, purpose: string, targetUser: string) =>
    safeInvoke(() => tauriApi.dbCreatePromptTemplateWithAi(title, description, category, purpose, targetUser)),
};