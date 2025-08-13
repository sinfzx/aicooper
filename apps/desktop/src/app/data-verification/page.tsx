"use client";

import React, { useState, useEffect } from 'react';
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

export default function DataVerificationPage() {
  const [frameworks, setFrameworks] = useState<any[]>([]);
  const [templates, setTemplates] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const invoke = await getTauriInvoke();
      if (!invoke) {
        throw new Error('Tauri API not available');
      }

      // 加载知识框架
      const frameworksData = await invoke('get_knowledge_frameworks');
      setFrameworks(Array.isArray(frameworksData) ? frameworksData : []);

      // 加载提示词模板
      const templatesData = await invoke('get_prompt_templates');
      setTemplates(Array.isArray(templatesData) ? templatesData : []);

    } catch (error) {
      console.error('Failed to load data:', error);
      setError(String(error));
    } finally {
      setIsLoading(false);
    }
  };

  const createTestFramework = async () => {
    try {
      const invoke = await getTauriInvoke();
      if (!invoke) {
        throw new Error('Tauri API not available');
      }

      const testData = {
        title: `测试框架 ${new Date().toLocaleTimeString()}`,
        description: '这是一个用于验证数据持久化的测试框架'
      };

      await invoke('create_knowledge_framework', { framework: testData });
      await loadAllData(); // 重新加载数据
    } catch (error) {
      console.error('Failed to create test framework:', error);
      setError(String(error));
    }
  };

  const createTestTemplate = async () => {
    try {
      const invoke = await getTauriInvoke();
      if (!invoke) {
        throw new Error('Tauri API not available');
      }

      const testData = {
        title: `测试模板 ${new Date().toLocaleTimeString()}`,
        description: '这是一个用于验证数据持久化的测试模板',
        category: '测试',
        content: '这是测试内容，包含变量：{测试变量}',
        tags: ['测试', '验证']
      };

      await invoke('create_prompt_template', { template: testData });
      await loadAllData(); // 重新加载数据
    } catch (error) {
      console.error('Failed to create test template:', error);
      setError(String(error));
    }
  };

  const deleteFramework = async (id: string) => {
    try {
      const invoke = await getTauriInvoke();
      if (!invoke) {
        throw new Error('Tauri API not available');
      }

      await invoke('delete_knowledge_framework', { id });
      await loadAllData(); // 重新加载数据
    } catch (error) {
      console.error('Failed to delete framework:', error);
      setError(String(error));
    }
  };

  const deleteTemplate = async (id: string) => {
    try {
      const invoke = await getTauriInvoke();
      if (!invoke) {
        throw new Error('Tauri API not available');
      }

      await invoke('delete_prompt_template', { id });
      await loadAllData(); // 重新加载数据
    } catch (error) {
      console.error('Failed to delete template:', error);
      setError(String(error));
    }
  };

  if (isLoading) {
    return (
      <div className="p-6 max-w-6xl mx-auto">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>正在加载数据...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">📊 数据验证页面</h1>
      
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-700">{error}</p>
          <Button variant="outline" size="sm" onClick={loadAllData} className="mt-2">
            重新加载
          </Button>
        </div>
      )}

      {/* 操作按钮 */}
      <div className="flex gap-4 mb-6">
        <Button onClick={createTestFramework} variant="primary">
          创建测试框架
        </Button>
        <Button onClick={createTestTemplate} variant="primary">
          创建测试模板
        </Button>
        <Button onClick={loadAllData} variant="outline">
          刷新数据
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 知识框架数据 */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold">知识框架数据 ({frameworks.length})</h2>
          </CardHeader>
          <CardContent>
            {frameworks.length === 0 ? (
              <p className="text-gray-500 text-center py-8">暂无数据</p>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {frameworks.map((framework) => (
                  <div key={framework.id} className="p-3 bg-gray-50 rounded-md">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{framework.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{framework.description}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                          <span>ID: {framework.id}</span>
                          <span>域: {framework.domain}</span>
                          <span>版本: v{framework.version}</span>
                        </div>
                        <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                          <span>创建: {new Date(framework.created_at).toLocaleString()}</span>
                          <span>更新: {new Date(framework.updated_at).toLocaleString()}</span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => deleteFramework(framework.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        删除
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* 提示词模板数据 */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold">提示词模板数据 ({templates.length})</h2>
          </CardHeader>
          <CardContent>
            {templates.length === 0 ? (
              <p className="text-gray-500 text-center py-8">暂无数据</p>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {templates.map((template) => (
                  <div key={template.id} className="p-3 bg-gray-50 rounded-md">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{template.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {template.category}
                          </span>
                          {template.tags.map((tag: string, index: number) => (
                            <span key={index} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                          <span>ID: {template.id}</span>
                        </div>
                        <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                          <span>创建: {new Date(template.created_at).toLocaleString()}</span>
                          <span>更新: {new Date(template.updated_at).toLocaleString()}</span>
                        </div>
                        <div className="mt-2 p-2 bg-white rounded text-xs">
                          <strong>内容预览:</strong>
                          <div className="mt-1 text-gray-600 truncate">
                            {template.content.substring(0, 100)}
                            {template.content.length > 100 && '...'}
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => deleteTemplate(template.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        删除
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* 数据统计 */}
      <Card className="mt-6">
        <CardHeader>
          <h2 className="text-lg font-semibold">数据统计</h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-blue-50 rounded-md">
              <div className="text-2xl font-bold text-blue-600">{frameworks.length}</div>
              <div className="text-sm text-blue-800">知识框架</div>
            </div>
            <div className="p-4 bg-green-50 rounded-md">
              <div className="text-2xl font-bold text-green-600">{templates.length}</div>
              <div className="text-sm text-green-800">提示词模板</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-md">
              <div className="text-2xl font-bold text-purple-600">
                {frameworks.reduce((sum, f) => sum + f.root_nodes.length, 0)}
              </div>
              <div className="text-sm text-purple-800">知识节点</div>
            </div>
            <div className="p-4 bg-orange-50 rounded-md">
              <div className="text-2xl font-bold text-orange-600">
                {templates.reduce((sum, t) => sum + t.tags.length, 0)}
              </div>
              <div className="text-sm text-orange-800">模板标签</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 说明 */}
      <Card className="mt-6">
        <CardHeader>
          <h2 className="text-lg font-semibold">数据存储说明</h2>
        </CardHeader>
        <CardContent>
          <div className="text-sm space-y-2">
            <p><strong>存储方式:</strong> 本地JSON文件</p>
            <p><strong>存储位置:</strong> 应用数据目录</p>
            <p><strong>时间戳生成:</strong> 服务器端（Rust后端）自动生成</p>
            <p><strong>ID生成:</strong> 服务器端基于时间戳生成唯一ID</p>
            <p><strong>数据持久化:</strong> ✅ 重启应用后数据仍然存在</p>
            <p className="text-green-600"><strong>✅ 所有时间戳字段都由后端自动生成，前端不再发送时间戳数据</strong></p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}