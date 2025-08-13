import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/server/auth';
import { Button } from '@my-platform/ui';
import Link from 'next/link';

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="text-6xl mb-8">🤖</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              欢迎使用 AI Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              强大的 AI 工具平台，提供智能聊天、提示词模板、知识管理等多种功能，
              助您提升工作效率。
            </p>
            
            <div className="flex justify-center space-x-4">
              <Link href="/auth/signin">
                <Button variant="primary" size="lg">
                  立即开始
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" size="lg">
                  了解更多
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-lg font-semibold mb-2">智能聊天</h3>
              <p className="text-gray-600">
                与 AI 进行自然对话，获得智能回答和建议
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-lg font-semibold mb-2">提示词模板</h3>
              <p className="text-gray-600">
                丰富的提示词模板库，快速生成高质量内容
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-lg font-semibold mb-2">知识管理</h3>
              <p className="text-gray-600">
                系统化管理知识框架，构建个人知识体系
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl">🤖</span>
              <span className="ml-2 text-xl font-bold text-gray-900">AI Platform</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">欢迎，{session.user?.name || session.user?.email}</span>
              <Link href="/api/auth/signout">
                <Button variant="outline" size="sm">
                  退出登录
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            欢迎回来！
          </h1>
          <p className="text-gray-600">
            选择您需要的功能开始使用
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Link href="/chat" className="block">
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-lg font-semibold mb-2">AI 聊天</h3>
              <p className="text-gray-600">
                与 AI 助手进行智能对话
              </p>
            </div>
          </Link>
          
          <Link href="/templates" className="block">
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-lg font-semibold mb-2">提示词模板</h3>
              <p className="text-gray-600">
                使用和创建提示词模板
              </p>
            </div>
          </Link>
          
          <Link href="/profile" className="block">
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-lg font-semibold mb-2">个人资料</h3>
              <p className="text-gray-600">
                管理您的账户和设置
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}