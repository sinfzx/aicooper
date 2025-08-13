"use client";

import React, { useState } from 'react';
import { Button, Card, CardHeader, CardContent } from '@my-platform/ui';
import { ChatInterface } from '@/components/ChatInterface';
import { KnowledgeFrameworkManager } from '@my-platform/ai-knowledge';
import { PromptTemplateManager } from '@my-platform/prompt-templates';
import { ApiKeyManager } from '@/components/ApiKeyManager';
import { SettingsManager } from '@/components/SettingsManager';

type ActiveFeature = 'chat' | 'knowledge' | 'templates' | 'apikeys' | 'settings';

export default function FeaturesTestPage() {
  const [activeFeature, setActiveFeature] = useState<ActiveFeature>('chat');

  const features = [
    { id: 'chat' as const, label: 'AI 聊天', icon: '💬', component: ChatInterface },
    { id: 'knowledge' as const, label: '知识框架', icon: '🧠', component: KnowledgeFrameworkManager },
    { id: 'templates' as const, label: '提示词模板', icon: '📝', component: PromptTemplateManager },
    { id: 'apikeys' as const, label: 'API 密钥', icon: '🔑', component: ApiKeyManager },
    { id: 'settings' as const, label: '设置', icon: '⚙️', component: SettingsManager },
  ];

  const ActiveComponent = features.find(f => f.id === activeFeature)?.component || ChatInterface;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-semibold text-gray-900">功能测试页面</h1>
            <div className="text-sm text-gray-500">
              测试所有桌面应用功能是否正常显示
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* 侧边栏 */}
        <div className="w-64 bg-white shadow-sm min-h-screen">
          <div className="p-4">
            <h2 className="text-lg font-medium text-gray-900 mb-4">功能列表</h2>
            <div className="space-y-2">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left transition-colors ${
                    activeFeature === feature.id
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-lg">{feature.icon}</span>
                  <span className="font-medium">{feature.label}</span>
                  {activeFeature === feature.id && (
                    <span className="ml-auto text-blue-500">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 测试信息 */}
          <div className="p-4 border-t">
            <Card>
              <CardContent className="p-3">
                <h3 className="text-sm font-medium text-gray-900 mb-2">测试状态</h3>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span>当前功能:</span>
                    <span className="font-medium">{features.find(f => f.id === activeFeature)?.label}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>环境检测:</span>
                    <span className="text-green-600">✅ 已移除</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>直接显示:</span>
                    <span className="text-green-600">✅ 启用</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 主内容区域 */}
        <div className="flex-1">
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
}