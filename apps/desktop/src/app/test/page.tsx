"use client";

import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, Button } from '@my-platform/ui';

export default function TestPage() {
  const { user, isAuthenticated, isLoading, logout } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card>
          <CardContent className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">加载中...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardContent className="py-8">
            <h1 className="text-2xl font-bold mb-6">认证状态测试</h1>
            
            <div className="space-y-4">
              <div>
                <strong>认证状态:</strong> {isAuthenticated ? '已登录' : '未登录'}
              </div>
              
              <div>
                <strong>加载状态:</strong> {isLoading ? '加载中' : '已完成'}
              </div>
              
              {user && (
                <div className="space-y-2">
                  <div><strong>用户ID:</strong> {user.id}</div>
                  <div><strong>邮箱:</strong> {user.email}</div>
                  <div><strong>姓名:</strong> {user.name}</div>
                  {user.avatar && <div><strong>头像:</strong> {user.avatar}</div>}
                </div>
              )}
              
              <div className="pt-4">
                {isAuthenticated ? (
                  <Button onClick={logout} variant="outline">
                    退出登录
                  </Button>
                ) : (
                  <p className="text-gray-600">请先登录</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}