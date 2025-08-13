"use client";

import React, { useState, useEffect } from 'react';
import { Button, Card, CardHeader, CardContent } from '@my-platform/ui';

export default function TauriDebugPage() {
    const [envInfo, setEnvInfo] = useState<any>(null);
    const [tauriTest, setTauriTest] = useState<any>(null);
    const [apiTest, setApiTest] = useState<any>(null);

    useEffect(() => {
        checkEnvironment();
    }, []);

    const checkEnvironment = () => {
        if (typeof window === 'undefined') {
            setEnvInfo({ error: 'Window is undefined' });
            return;
        }

        const windowAny = window as any;
        const info = {
            // 基本环境信息
            userAgent: window.navigator.userAgent,
            protocol: window.location.protocol,
            host: window.location.host,
            href: window.location.href,

            // Tauri 特征检测
            hasTauri: !!windowAny.__TAURI__,
            hasTauriInternals: !!windowAny.__TAURI_INTERNALS__,

            // 环境变量
            nodeEnv: process.env.NODE_ENV,
            tauriBuild: process.env.TAURI_BUILD,

            // 详细的Tauri对象信息
            tauriObject: windowAny.__TAURI__ ? Object.keys(windowAny.__TAURI__) : null,
            tauriInternals: windowAny.__TAURI_INTERNALS__ ? Object.keys(windowAny.__TAURI_INTERNALS__) : null,
        };

        setEnvInfo(info);
    };

    const testTauriImport = async () => {
        try {
            console.log('Testing Tauri import...');
            const { invoke } = await import('@tauri-apps/api/core');
            console.log('Tauri import successful:', !!invoke);

            setTauriTest({
                success: true,
                hasInvoke: !!invoke,
                invokeType: typeof invoke
            });
        } catch (error) {
            console.error('Tauri import failed:', error);
            setTauriTest({
                success: false,
                error: String(error)
            });
        }
    };

    const testTauriAPI = async () => {
        try {
            console.log('Testing Tauri API...');
            const { invoke } = await import('@tauri-apps/api/core');

            if (!invoke) {
                throw new Error('Invoke function not available');
            }

            // 测试greet命令
            const result = await invoke('greet');
            console.log('Tauri API test successful:', result);

            setApiTest({
                success: true,
                result: result
            });
        } catch (error) {
            console.error('Tauri API test failed:', error);
            setApiTest({
                success: false,
                error: String(error)
            });
        }
    };

    const testKnowledgeFrameworks = async () => {
        try {
            console.log('Testing knowledge frameworks API...');
            const { invoke } = await import('@tauri-apps/api/core');

            const result = await invoke('get_knowledge_frameworks');
            console.log('Knowledge frameworks API test successful:', result);

            setApiTest({
                success: true,
                command: 'get_knowledge_frameworks',
                result: result
            });
        } catch (error) {
            console.error('Knowledge frameworks API test failed:', error);
            setApiTest({
                success: false,
                command: 'get_knowledge_frameworks',
                error: String(error)
            });
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">🔧 Tauri 环境调试</h1>

            {/* 环境信息 */}
            <Card className="mb-6">
                <CardHeader>
                    <h2 className="text-lg font-semibold">环境信息</h2>
                </CardHeader>
                <CardContent>
                    {envInfo ? (
                        <div className="space-y-2 text-sm">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <strong>User Agent:</strong>
                                    <div className="text-xs text-gray-600 break-all">{envInfo.userAgent}</div>
                                </div>
                                <div>
                                    <strong>Protocol:</strong> {envInfo.protocol}
                                </div>
                                <div>
                                    <strong>Host:</strong> {envInfo.host}
                                </div>
                                <div>
                                    <strong>Node Env:</strong> {envInfo.nodeEnv}
                                </div>
                            </div>

                            <div className="mt-4 p-3 bg-gray-50 rounded">
                                <h3 className="font-medium mb-2">Tauri 检测结果</h3>
                                <div className="space-y-1 text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className={`w-3 h-3 rounded-full ${envInfo.hasTauri ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                        <span>__TAURI__: {envInfo.hasTauri ? '✅ 存在' : '❌ 不存在'}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className={`w-3 h-3 rounded-full ${envInfo.hasTauriInternals ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                        <span>__TAURI_INTERNALS__: {envInfo.hasTauriInternals ? '✅ 存在' : '❌ 不存在'}</span>
                                    </div>
                                </div>

                                {envInfo.tauriObject && (
                                    <div className="mt-2">
                                        <strong>Tauri Object Keys:</strong>
                                        <div className="text-xs text-gray-600">{envInfo.tauriObject.join(', ')}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <p>正在检测环境...</p>
                    )}
                </CardContent>
            </Card>

            {/* 测试按钮 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Button onClick={testTauriImport} variant="outline">
                    测试 Tauri 导入
                </Button>
                <Button onClick={testTauriAPI} variant="outline">
                    测试 Tauri API
                </Button>
                <Button onClick={testKnowledgeFrameworks} variant="outline">
                    测试知识框架API
                </Button>
            </div>

            {/* 测试结果 */}
            {(tauriTest || apiTest) && (
                <Card>
                    <CardHeader>
                        <h2 className="text-lg font-semibold">测试结果</h2>
                    </CardHeader>
                    <CardContent>
                        {tauriTest && (
                            <div className="mb-4 p-3 bg-gray-50 rounded">
                                <h3 className="font-medium mb-2">Tauri 导入测试</h3>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`w-3 h-3 rounded-full ${tauriTest.success ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                    <span>{tauriTest.success ? '✅ 成功' : '❌ 失败'}</span>
                                </div>
                                <pre className="text-xs bg-white p-2 rounded border">
                                    {JSON.stringify(tauriTest, null, 2)}
                                </pre>
                            </div>
                        )}

                        {apiTest && (
                            <div className="p-3 bg-gray-50 rounded">
                                <h3 className="font-medium mb-2">API 测试</h3>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`w-3 h-3 rounded-full ${apiTest.success ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                    <span>{apiTest.success ? '✅ 成功' : '❌ 失败'}</span>
                                    {apiTest.command && <span className="text-sm text-gray-600">({apiTest.command})</span>}
                                </div>
                                <pre className="text-xs bg-white p-2 rounded border">
                                    {JSON.stringify(apiTest, null, 2)}
                                </pre>
                            </div>
                        )}
                    </CardContent>
                </Card>
            )}

            {/* 说明 */}
            <Card className="mt-6">
                <CardHeader>
                    <h2 className="text-lg font-semibold">调试说明</h2>
                </CardHeader>
                <CardContent>
                    <div className="text-sm space-y-2">
                        <p><strong>如果Tauri API不可用，可能的原因：</strong></p>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>应用没有在Tauri环境中运行（在浏览器中打开了开发服务器）</li>
                            <li>Tauri开发服务器没有正确启动</li>
                            <li>Tauri配置有问题</li>
                            <li>前端和后端版本不匹配</li>
                        </ul>
                        <p className="mt-4"><strong>解决方案：</strong></p>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>确保使用 <code className="bg-gray-100 px-1 rounded">pnpm tauri:dev</code> 启动应用</li>
                            <li>检查Tauri配置文件</li>
                            <li>重新安装依赖</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}