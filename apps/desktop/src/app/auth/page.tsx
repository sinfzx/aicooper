"use client";

import React from 'react';
import { LoginForm } from '@/components/auth/LoginForm';
import { useAuth } from '@/hooks/useAuth';
import { useNavigation } from '@/hooks/useNavigation';

export default function AuthPage() {
  const { login } = useAuth();
  const { navigateTo } = useNavigation();

  const handleLoginSuccess = (user: any) => {
    login(user);
    navigateTo('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            欢迎使用 AI Desktop
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            使用邮箱验证码快速登录或注册
          </p>
        </div>
        
        <LoginForm onSuccess={handleLoginSuccess} />
      </div>
    </div>
  );
}