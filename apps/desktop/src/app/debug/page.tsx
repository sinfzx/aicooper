"use client";

import React, { useState, useEffect } from 'react';
import { Button, Card, CardHeader, CardContent } from '@my-platform/ui';
import { getEnvironmentInfo, importTauriApi, isTauriApp } from '@/lib/tauri';

export default function DebugPage() {
  const [envInfo, setEnvInfo] = useState<any>(null);
  const [tauriCommands, setTauriCommands] = useState<string[]>([]);
  const [testResults, setTestResults] = useState<Record<string, any>>({});

  useEffect(() => {
    setEnvInfo(getEnvironmentInfo());
    checkTauriCommands();
  }, []);

  const checkTauriCommands = async () => {
    try {
      const { invoke } = await importTauriApi();
      if (invoke) {
        // 尝试调用一个简单的命令来测试连接
        const result = await invoke('greet');
        setTestResults(prev => ({ ...prev, greet: result }));
        
        // 列出可用的命令（这里手动列出，实际项目中可以从某个配置获取）
        setTauriCommands([
          'greet',
          'get_auth_data',
          'send_verification_code',
          'verify_code_and_login',
          'get_api_keys',
          'get_settings',
          'chat_with_ai'
        ]);
      }
    } catch (error) {
      setTestResults(prev => ({ ...prev, error: String(error) }));
    }
  };

  const testCommand = async (command: string) => {
    try {
      const { invoke } = await importTauriApi();
      if (!invoke) {
        setTestResults(prev => ({ ...prev, [command]: 'Tauri API not available' }));
        return;
      }

      let result;
      switch (command) {
        case 'greet':
          result = await invoke('greet');
          break;
        case 'get_auth_data':
          result = await invoke('get_auth_data');
          break;
        case 'get_api_keys':
          result = await invoke('get_api_keys');
          break;
        case 'get_settings':
          result = await invoke('get_settings');
          break;
        default:
          result = 'Command not implemented in test';
      }
      
      setTestResults(prev => ({ ...prev, [command]: result }));
    } catch (error) {
      setTestResults(prev => ({ ...prev, [command]: `Error: ${error}` }));
    }
  };

  const clearResults = () => {
    setTestResults({});
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">🔍 Tauri 调试页面</h1>
      
      {/* 环境信息 */}
      <Card className="mb-6">
        <CardHeader>
          <h2 className="text-lg font-semibold">环境信息</h2>
        </CardHeader>
        <CardContent>
          {envInfo && (
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className={`w-3 h-3 rounded-full ${envInfo.isTauri ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span>Tauri 环境: {envInfo.isTauri ? '✅ 是' : '❌ 否'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`w-3 h-3 rounded-full ${envInfo.isDev ? 'bg-yellow-500' : 'bg-blue-500'}`}></span>
                <span>开发环境: {envInfo.isDev ? '✅ 是' : '❌ 否'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`w-3 h-3 rounded-full ${envInfo.isBuild ? 'bg-purple-500' : 'bg-gray-500'}`}></span>
                <span>构建环境: {envInfo.isBuild ? '✅ 是' : '❌ 否'}</span>
              </div>
              <div className="text-sm text-gray-600">
                <p>用户代理: {envInfo.userAgent}</p>
                <p>平台: {envInfo.platform}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Tauri 命令测试 */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Tauri 命令测试</h2>
            <Button onClick={clearResults} variant="outline" size="sm">
              清除结果
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {isTauriApp() ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {tauriCommands.map((command) => (
                  <Button
                    key={command}
                    onClick={() => testCommand(command)}
                    variant="outline"
                    size="sm"
                    className="text-left"
                  >
                    {command}
                  </Button>
                ))}
              </div>
              
              {Object.keys(testResults).length > 0 && (
                <div className="mt-4">
                  <h3 className="font-medium mb-2">测试结果:</h3>
                  <div className="bg-gray-50 p-4 rounded-md max-h-96 overflow-y-auto">
                    <pre className="text-sm">
                      {JSON.stringify(testResults, null, 2)}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">🌐</div>
              <p className="text-gray-600">
                当前运行在Web环境中，Tauri命令不可用
              </p>
              <p className="text-sm text-gray-500 mt-2">
                请使用 <code className="bg-gray-100 px-2 py-1 rounded">pnpm tauri:dev</code> 启动桌面应用
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* 启动说明 */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">🚀 启动说明</h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">桌面应用 (Tauri):</h3>
              <div className="bg-gray-100 p-3 rounded-md">
                <code>cd apps/desktop && pnpm tauri:dev</code>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                这将启动真正的桌面应用，可以使用所有Tauri功能
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Web预览 (Next.js):</h3>
              <div className="bg-gray-100 p-3 rounded-md">
                <code>cd apps/desktop && pnpm dev</code>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                这将启动Web预览模式，用于开发UI组件
              </p>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-md">
              <p className="text-sm text-yellow-800">
                <strong>注意:</strong> 如果 <code>pnpm tauri:dev</code> 启动的是Web预览，
                请检查Tauri CLI是否正确安装，或者查看终端错误信息。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}