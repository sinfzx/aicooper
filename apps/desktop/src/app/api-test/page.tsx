"use client";

import React, { useState } from 'react';
import { Button, Card, CardHeader, CardContent } from '@my-platform/ui';

// Safely import Tauri API with fallback
const getTauriInvoke = async () => {
  try {
    if (typeof window !== 'undefined' && (window as any).__TAURI__) {
      const { invoke } = await import('@tauri-apps/api/core');
      return invoke;
    }
  } catch (error) {
    console.warn('Tauri API not available:', error);
  }
  return null;
};

export default function ApiTestPage() {
  const [results, setResults] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({});

  const testApi = async (apiName: string, apiCall: () => Promise<any>) => {
    setIsLoading(prev => ({ ...prev, [apiName]: true }));
    try {
      const result = await apiCall();
      setResults(prev => ({ 
        ...prev, 
        [apiName]: { success: true, data: result } 
      }));
    } catch (error) {
      setResults(prev => ({ 
        ...prev, 
        [apiName]: { success: false, error: String(error) } 
      }));
    } finally {
      setIsLoading(prev => ({ ...prev, [apiName]: false }));
    }
  };

  const testKnowledgeFrameworks = async () => {
    const invoke = await getTauriInvoke();
    if (invoke) {
      console.log('Testing Tauri command: get_knowledge_frameworks');
      const result = await invoke('get_knowledge_frameworks');
      console.log('Tauri result:', result);
      return result;
    } else {
      throw new Error('Tauri API not available');
    }
  };

  const testPromptTemplates = async () => {
    const invoke = await getTauriInvoke();
    if (invoke) {
      console.log('Testing Tauri command: get_prompt_templates');
      const result = await invoke('get_prompt_templates');
      console.log('Tauri result:', result);
      return result;
    } else {
      throw new Error('Tauri API not available');
    }
  };

  const testCreateKnowledgeFramework = async () => {
    const invoke = await getTauriInvoke();
    const testFramework = {
      title: '测试框架',
      description: '这是一个测试知识框架'
    };
    
    if (invoke) {
      console.log('Testing Tauri command: create_knowledge_framework');
      const result = await invoke('create_knowledge_framework', { framework: testFramework });
      console.log('Tauri result:', result);
      return result || 'Created successfully';
    } else {
      throw new Error('Tauri API not available');
    }
  };

  const testCreatePromptTemplate = async () => {
    const invoke = await getTauriInvoke();
    const testTemplate = {
      title: '测试模板',
      description: '这是一个测试提示词模板',
      category: '测试',
      content: '这是测试内容：{变量}',
      tags: ['测试']
    };
    
    if (invoke) {
      console.log('Testing Tauri command: create_prompt_template');
      const result = await invoke('create_prompt_template', { template: testTemplate });
      console.log('Tauri result:', result);
      return result || 'Created successfully';
    } else {
      throw new Error('Tauri API not available');
    }
  };

  const apis = [
    {
      name: 'get_knowledge_frameworks',
      label: '获取知识框架',
      test: testKnowledgeFrameworks
    },
    {
      name: 'get_prompt_templates',
      label: '获取提示词模板',
      test: testPromptTemplates
    },
    {
      name: 'create_knowledge_framework',
      label: '创建知识框架',
      test: testCreateKnowledgeFramework
    },
    {
      name: 'create_prompt_template',
      label: '创建提示词模板',
      test: testCreatePromptTemplate
    }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">🧪 API 测试页面</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {apis.map((api) => (
          <Card key={api.name}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{api.label}</h3>
                <Button
                  onClick={() => testApi(api.name, api.test)}
                  disabled={isLoading[api.name]}
                  variant="outline"
                  size="sm"
                >
                  {isLoading[api.name] ? '测试中...' : '测试'}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">
                  <strong>API:</strong> {api.name}
                </div>
                
                {results[api.name] && (
                  <div className="mt-3">
                    <div className={`flex items-center gap-2 mb-2 ${
                      results[api.name].success ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <span>{results[api.name].success ? '✅' : '❌'}</span>
                      <span className="font-medium">
                        {results[api.name].success ? '成功' : '失败'}
                      </span>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-md max-h-40 overflow-y-auto">
                      <pre className="text-xs">
                        {JSON.stringify(
                          results[api.name].success 
                            ? results[api.name].data 
                            : results[api.name].error, 
                          null, 
                          2
                        )}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-8">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">批量测试</h3>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Button
                onClick={() => {
                  apis.forEach(api => {
                    testApi(api.name, api.test);
                  });
                }}
                variant="primary"
              >
                测试所有 API
              </Button>
              <Button
                onClick={() => {
                  setResults({});
                }}
                variant="outline"
              >
                清空结果
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}