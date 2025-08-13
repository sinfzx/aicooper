"use client";

import { api } from "@/trpc/react";
import { Button, Card, CardHeader, CardContent } from "@my-platform/ui";

export default function DashboardPage() {
  const { data: features, isLoading: featuresLoading } = api.features.getAll.useQuery();
  const { data: profile, isLoading: profileLoading } = api.auth.getProfile.useQuery();

  if (featuresLoading || profileLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">加载中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">控制台</h1>
            {profile && (
              <p className="text-gray-600 mt-2">欢迎回来，{profile.name}！</p>
            )}
          </div>

          {/* 功能卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {features?.map((feature) => (
              <Card key={feature.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {feature.name}
                      </h3>
                      <p className="text-gray-600 mt-1">{feature.description}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      feature.status === 'stable' ? 'bg-green-100 text-green-800' :
                      feature.status === 'beta' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {feature.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      feature.tier === 'free' ? 'bg-gray-100 text-gray-800' :
                      feature.tier === 'pro' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {feature.tier === 'free' ? '免费' : feature.tier === 'pro' ? '专业版' : '企业版'}
                    </span>
                    <Button variant="primary" size="sm">
                      使用功能
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 用户信息卡片 */}
          {profile && (
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900">账户信息</h3>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">姓名</label>
                    <p className="mt-1 text-sm text-gray-900">{profile.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">邮箱</label>
                    <p className="mt-1 text-sm text-gray-900">{profile.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">订阅状态</label>
                    <p className="mt-1 text-sm text-gray-900">
                      {profile.subscription?.tier || '免费版'}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">API 密钥数量</label>
                    <p className="mt-1 text-sm text-gray-900">
                      {profile.apiKeys?.length || 0} 个
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}