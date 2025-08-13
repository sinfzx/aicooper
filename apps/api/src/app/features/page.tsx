import { Card, CardHeader, CardContent, Button } from '@my-platform/ui'
import { getAllFeatures } from '@/lib/content'
import Link from 'next/link'

export default async function FeaturesPage() {
  const features = await getAllFeatures()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">AI Platform</Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/features" className="text-blue-600 font-medium">功能</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900">定价</Link>
              <Link href="/docs" className="text-gray-600 hover:text-gray-900">文档</Link>
              <Button variant="primary" size="sm">
                下载应用
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* 页面标题 */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">功能特性</h1>
          <p className="text-xl text-gray-600">
            探索 AI Platform 的强大功能，提升您的工作效率
          </p>
        </div>
      </section>

      {/* 功能列表 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <Card key={feature.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">{feature.name}</h3>
                      <p className="text-gray-600 mt-2">{feature.description}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      feature.status === 'stable' ? 'bg-green-100 text-green-800' :
                      feature.status === 'beta' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {feature.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">主要功能：</h4>
                    <ul className="space-y-2">
                      {feature.features.map((item, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded text-sm font-medium ${
                      feature.tier === 'free' ? 'bg-gray-100 text-gray-800' :
                      feature.tier === 'pro' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {feature.tier === 'free' ? '免费功能' : feature.tier === 'pro' ? '专业版功能' : '企业版功能'}
                    </span>
                    <Link href={`/features/${feature.id}`}>
                      <Button variant="primary">
                        查看详情
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {features.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">暂无功能模块</p>
              <p className="text-gray-400 mt-2">功能正在开发中，敬请期待</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}