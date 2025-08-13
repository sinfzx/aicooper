"use client";

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Button, Card, CardHeader, CardContent } from '@my-platform/ui';
import { api } from '@/trpc/react';

interface LoginFormProps {
  onSuccess?: () => void;
  redirectTo?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ 
  onSuccess, 
  redirectTo = '/' 
}) => {
  const [step, setStep] = useState<'email' | 'code'>('email');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const sendCodeMutation = api.auth.sendVerificationCode.useMutation();

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setIsLoading(true);
    try {
      await sendCodeMutation.mutateAsync({ email });
      setStep('code');
      setCountdown(60);
      
      // 倒计时
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      console.error('发送验证码失败:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !code || isLoading) return;

    setIsLoading(true);
    try {
      const result = await signIn('email-verification', {
        email,
        code,
        redirect: false,
      });

      if (result?.ok) {
        onSuccess?.();
        window.location.href = redirectTo;
      } else {
        throw new Error('验证失败');
      }
    } catch (error) {
      console.error('验证码验证失败:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = () => {
    if (countdown > 0) return;
    handleSendCode(new Event('submit') as any);
  };

  const handleBackToEmail = () => {
    setStep('email');
    setCode('');
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {step === 'email' ? '登录 / 注册' : '输入验证码'}
          </h1>
          <p className="text-gray-600">
            {step === 'email' 
              ? '输入邮箱地址，我们将发送验证码给您' 
              : `验证码已发送至 ${email}`
            }
          </p>
        </div>
      </CardHeader>
      
      <CardContent>
        {step === 'email' ? (
          <form onSubmit={handleSendCode} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                邮箱地址
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="请输入您的邮箱地址"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                disabled={isLoading}
              />
            </div>
            
            <Button
              type="submit"
              variant="primary"
              className="w-full"
              disabled={!email || isLoading}
            >
              {isLoading ? '发送中...' : '发送验证码'}
            </Button>
          </form>
        ) : (
          <form onSubmit={handleVerifyCode} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                验证码
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="请输入6位验证码"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg tracking-widest"
                maxLength={6}
                required
                disabled={isLoading}
                autoFocus
              />
            </div>
            
            <Button
              type="submit"
              variant="primary"
              className="w-full"
              disabled={code.length !== 6 || isLoading}
            >
              {isLoading ? '验证中...' : '验证并登录'}
            </Button>
            
            <div className="flex items-center justify-between text-sm">
              <button
                type="button"
                onClick={handleBackToEmail}
                className="text-blue-600 hover:text-blue-700"
                disabled={isLoading}
              >
                ← 返回修改邮箱
              </button>
              
              <button
                type="button"
                onClick={handleResendCode}
                className={`${
                  countdown > 0 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-blue-600 hover:text-blue-700'
                }`}
                disabled={countdown > 0 || isLoading}
              >
                {countdown > 0 ? `${countdown}s 后重发` : '重新发送'}
              </button>
            </div>
          </form>
        )}
        
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>
            登录即表示您同意我们的
            <a href="/terms" className="text-blue-600 hover:text-blue-700 mx-1">
              服务条款
            </a>
            和
            <a href="/privacy" className="text-blue-600 hover:text-blue-700 mx-1">
              隐私政策
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};