// 内置提示词模板索引

import { InternalPromptTemplate } from '@my-platform/types';
import { 
  FRAMEWORK_CREATE_PROMPT, 
  FRAMEWORK_EXPAND_PROMPT, 
  URL_SUMMARY_PROMPT 
} from './framework-prompts';
import { 
  TEMPLATE_CREATE_PROMPT, 
  TEMPLATE_OPTIMIZE_PROMPT 
} from './template-prompts';
import { 
  FLOW_CREATE_PROMPT, 
  FLOW_OPTIMIZE_PROMPT, 
  BEST_PRACTICE_EXTRACT_PROMPT 
} from './flow-prompts';

export * from './framework-prompts';
export * from './template-prompts';
export * from './flow-prompts';

// 所有内置提示词模板的配置
export const INTERNAL_PROMPT_TEMPLATES: InternalPromptTemplate[] = [
  // 知识框架相关
  {
    id: 'framework_create',
    name: '创建知识框架',
    type: 'framework_create',
    prompt: FRAMEWORK_CREATE_PROMPT,
    description: '根据用户输入的基本信息创建系统性的知识框架',
    version: '1.0.0'
  },
  {
    id: 'framework_expand',
    name: '扩展框架节点',
    type: 'framework_expand',
    prompt: FRAMEWORK_EXPAND_PROMPT,
    description: '为现有知识框架节点生成子节点',
    version: '1.0.0'
  },
  {
    id: 'url_summary',
    name: 'URL内容总结',
    type: 'url_summary',
    prompt: URL_SUMMARY_PROMPT,
    description: '分析URL内容并生成相关知识节点',
    version: '1.0.0'
  },
  // 提示模板相关
  {
    id: 'template_create',
    name: '创建提示模板',
    type: 'template_create',
    prompt: TEMPLATE_CREATE_PROMPT,
    description: '根据用户需求创建结构化的提示词模板',
    version: '1.0.0'
  },
  {
    id: 'template_optimize',
    name: '优化提示模板',
    type: 'template_create', // 复用同一类型
    prompt: TEMPLATE_OPTIMIZE_PROMPT,
    description: '优化现有的提示词模板',
    version: '1.0.0'
  },
  // 流程设计相关
  {
    id: 'flow_create',
    name: '创建执行流程',
    type: 'flow_create',
    prompt: FLOW_CREATE_PROMPT,
    description: '根据用户需求创建详细的执行流程',
    version: '1.0.0'
  },
  {
    id: 'flow_optimize',
    name: '优化执行流程',
    type: 'flow_create', // 复用同一类型
    prompt: FLOW_OPTIMIZE_PROMPT,
    description: '优化现有的执行流程',
    version: '1.0.0'
  },
  {
    id: 'best_practice_extract',
    name: '提取最佳实践',
    type: 'flow_create', // 复用同一类型
    prompt: BEST_PRACTICE_EXTRACT_PROMPT,
    description: '从内容中提取最佳实践',
    version: '1.0.0'
  }
];

// 获取指定类型的提示词模板
export function getPromptTemplate(type: InternalPromptTemplate['type']): string {
  const template = INTERNAL_PROMPT_TEMPLATES.find(t => t.type === type);
  if (!template) {
    throw new Error(`Unknown prompt template type: ${type}`);
  }
  return template.prompt;
}

// 根据ID获取提示词模板
export function getPromptTemplateById(id: string): string {
  const template = INTERNAL_PROMPT_TEMPLATES.find(t => t.id === id);
  if (!template) {
    throw new Error(`Unknown prompt template id: ${id}`);
  }
  return template.prompt;
}

// 替换提示词中的参数
export function replacePromptParameters(
  template: string,
  parameters: Record<string, any>
): string {
  let result = template;
  
  Object.entries(parameters).forEach(([key, value]) => {
    const placeholder = `{${key}}`;
    const replacement = Array.isArray(value) ? value.join(', ') : String(value || '');
    result = result.replace(new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replacement);
  });
  
  return result;
}

// 获取所有可用的模板
export function getAllPromptTemplates(): InternalPromptTemplate[] {
  return INTERNAL_PROMPT_TEMPLATES;
}

// 根据类型获取模板列表
export function getPromptTemplatesByType(type: InternalPromptTemplate['type']): InternalPromptTemplate[] {
  return INTERNAL_PROMPT_TEMPLATES.filter(t => t.type === type);
}