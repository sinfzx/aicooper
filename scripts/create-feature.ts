#!/usr/bin/env tsx

import { mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'

function createFeature(featureName: string) {
  const featureId = featureName.toLowerCase().replace(/\s+/g, '-')
  const featureDir = join(process.cwd(), 'features', featureId)
  
  console.log(`🚀 Creating feature: ${featureName} (${featureId})`)
  
  // 创建目录结构
  mkdirSync(join(featureDir, 'src', 'components'), { recursive: true })
  
  // 创建 package.json
  const packageJson = {
    name: `@my-platform/feature-${featureId}`,
    version: '1.0.0',
    private: true,
    main: './src/index.ts',
    scripts: {
      build: 'tsc',
      dev: 'tsc --watch'
    },
    dependencies: {
      '@my-platform/core': 'workspace:*',
      '@my-platform/types': 'workspace:*',
      '@my-platform/ui': 'workspace:*',
      'react': '^19.1.0'
    },
    devDependencies: {
      '@types/react': '^19.1.8',
      'typescript': '~5.8.3'
    }
  }
  
  writeFileSync(
    join(featureDir, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  )
  
  // 创建功能配置
  const configContent = `import { FeatureConfig } from '@my-platform/types'

export const config: FeatureConfig = {
  id: '${featureId}',
  name: '${featureName}',
  description: '${featureName}功能描述',
  version: '1.0.0',
  status: 'development',
  
  // 桌面应用配置
  desktop: {
    enabled: true,
    menuItems: [
      {
        label: '${featureName}',
        path: '/${featureId}',
        icon: '${featureId}-icon'
      }
    ],
    routes: [
      {
        path: '/${featureId}',
        component: '${featureName.replace(/\s+/g, '')}'
      }
    ]
  },
  
  // 官网展示配置
  website: {
    enabled: false, // 开发完成后改为 true
    showcase: {
      title: '${featureName}',
      subtitle: '${featureName}副标题',
      description: '${featureName}的详细描述',
      features: [
        '功能特性 1',
        '功能特性 2',
        '功能特性 3'
      ],
      screenshots: []
    },
    pricing: {
      tier: 'free',
      features: [
        '基础功能'
      ]
    }
  },
  
  // API 配置
  api: {
    endpoints: [
      '/api/${featureId}/action'
    ],
    permissions: ['${featureId}:read', '${featureId}:write']
  }
}

export default config`
  
  writeFileSync(join(featureDir, 'feature.config.ts'), configContent)
  
  // 创建组件
  const componentName = featureName.replace(/\s+/g, '')
  const componentContent = `import React from 'react'
import { Card, CardHeader, CardContent, Button } from '@my-platform/ui'

export const ${componentName}: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">${featureName}</h1>
        <p className="text-gray-600">${featureName}功能页面</p>
      </div>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">开始使用</h3>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            这是 ${featureName} 功能的主页面。请根据需要自定义内容。
          </p>
          <Button variant="primary">
            开始使用
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}`
  
  writeFileSync(
    join(featureDir, 'src', 'components', `${componentName}.tsx`),
    componentContent
  )
  
  // 创建入口文件
  const indexContent = `export * from './components/${componentName}'
export { default as config } from '../feature.config'`
  
  writeFileSync(join(featureDir, 'src', 'index.ts'), indexContent)
  
  // 创建 tsconfig.json
  const tsconfigContent = {
    compilerOptions: {
      target: 'ES2021',
      lib: ['dom', 'dom.iterable', 'esnext'],
      allowJs: true,
      skipLibCheck: true,
      strict: true,
      noEmit: true,
      esModuleInterop: true,
      module: 'esnext',
      moduleResolution: 'bundler',
      resolveJsonModule: true,
      isolatedModules: true,
      jsx: 'preserve',
      incremental: true
    },
    include: ['src/**/*', 'feature.config.ts'],
    exclude: ['node_modules']
  }
  
  writeFileSync(
    join(featureDir, 'tsconfig.json'),
    JSON.stringify(tsconfigContent, null, 2)
  )
  
  // 创建 README
  const readmeContent = `# ${featureName}

${featureName}功能模块

## 开发

\`\`\`bash
# 开发模式
pnpm dev:feature ${featureId}

# 构建
pnpm build:feature ${featureId}
\`\`\`

## 配置

功能配置位于 \`feature.config.ts\` 文件中。

## 组件

主要组件位于 \`src/components/\` 目录中。
`
  
  writeFileSync(join(featureDir, 'README.md'), readmeContent)
  
  console.log('✅ Feature created successfully!')
  console.log(`   📁 ${featureDir}`)
  console.log(`   📝 Don't forget to run: pnpm install`)
  console.log(`   🚀 Start developing: pnpm dev:feature ${featureId}`)
}

// 获取命令行参数
const featureName = process.argv[2]

if (!featureName) {
  console.error('❌ Please provide a feature name')
  console.log('Usage: tsx scripts/create-feature.ts "Feature Name"')
  process.exit(1)
}

createFeature(featureName)