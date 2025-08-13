#!/usr/bin/env tsx

import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'
import { z } from 'zod'

// Schema validation for feature configs
const FeatureConfigSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  status: z.enum(['development', 'beta', 'stable']),
  website: z.object({
    enabled: z.boolean(),
    showcase: z.object({
      description: z.string().optional(),
      features: z.array(z.string()).optional(),
      screenshots: z.array(z.string()).optional(),
    }).optional(),
    pricing: z.object({
      tier: z.enum(['free', 'pro', 'enterprise']).optional(),
    }).optional(),
  }),
})

// Schema for generated content
const GeneratedContentSchema = z.object({
  features: z.array(z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    features: z.array(z.string()),
    screenshots: z.array(z.string()),
    status: z.string(),
    tier: z.string(),
  })),
  pricing: z.array(z.object({
    name: z.string(),
    price: z.string(),
    features: z.array(z.string()),
    popular: z.boolean().optional(),
  })),
  navigation: z.array(z.object({
    label: z.string(),
    href: z.string(),
  })),
  metadata: z.object({
    generatedAt: z.string(),
    version: z.string(),
  }),
})

// 直接导入功能配置
async function loadFeatureConfigs() {
  const configs = []
  
  try {
    // 导入 AI 知识框架配置
    const aiKnowledgeConfig = await import('../../../features/ai-knowledge/feature.config.js')
    const config = aiKnowledgeConfig.default || aiKnowledgeConfig.config
    const validatedConfig = FeatureConfigSchema.parse(config)
    configs.push(validatedConfig)
  } catch (error) {
    console.warn('AI Knowledge feature not found or invalid:', error instanceof Error ? error.message : error)
  }
  
  try {
    // 导入提示词模板配置
    const promptTemplatesConfig = await import('../../../features/prompt-templates/feature.config.js')
    const config = promptTemplatesConfig.default || promptTemplatesConfig.config
    const validatedConfig = FeatureConfigSchema.parse(config)
    configs.push(validatedConfig)
  } catch (error) {
    console.warn('Prompt Templates feature not found or invalid:', error instanceof Error ? error.message : error)
  }
  
  return configs
}

async function generateWebsiteContent() {
  console.log('🚀 Generating website content...')
  
  try {
    const featureConfigs = await loadFeatureConfigs()
    
    // 过滤启用的功能
    const websiteFeatures = featureConfigs.filter(config => 
      config.website.enabled && config.status !== 'development'
    )
    
    // 生成功能展示数据
    const features = websiteFeatures.map(feature => ({
      id: feature.id,
      name: feature.name,
      description: feature.website.showcase?.description || feature.description,
      features: feature.website.showcase?.features || [],
      screenshots: feature.website.showcase?.screenshots || [],
      status: feature.status,
      tier: feature.website.pricing?.tier || 'free'
    }))
    
    // 生成定价数据
    const pricing = [
      {
        name: '免费版',
        price: '¥0',
        features: ['基础功能访问', '社区支持', '基础模板库']
      },
      {
        name: '专业版',
        price: '¥99/月',
        features: ['所有高级功能', '优先支持', '无限模板', 'API 访问'],
        popular: true
      },
      {
        name: '企业版',
        price: '联系我们',
        features: ['企业级功能', '专属支持', '私有部署', '定制开发']
      }
    ]
    
    // 生成导航数据
    const navigation = [
      { label: '首页', href: '/' },
      { label: '功能', href: '/features' },
      { label: '定价', href: '/pricing' },
      { label: '文档', href: '/docs' },
      { label: '下载', href: '/download' }
    ]
    
    // 生成元数据
    const metadata = {
      generatedAt: new Date().toISOString(),
      version: '1.0.0',
    }
    
    // 构建完整内容对象
    const content = {
      features,
      pricing,
      navigation,
      metadata,
    }
    
    // 验证生成的内容
    const validatedContent = GeneratedContentSchema.parse(content)
    
    // 确保目录存在
    const contentDir = join(process.cwd(), 'src', 'content')
    mkdirSync(contentDir, { recursive: true })
    
    // 写入内容文件
    writeFileSync(
      join(contentDir, 'features.json'),
      JSON.stringify(validatedContent.features, null, 2)
    )
    
    writeFileSync(
      join(contentDir, 'pricing.json'),
      JSON.stringify(validatedContent.pricing, null, 2)
    )
    
    writeFileSync(
      join(contentDir, 'navigation.json'),
      JSON.stringify(validatedContent.navigation, null, 2)
    )
    
    writeFileSync(
      join(contentDir, 'metadata.json'),
      JSON.stringify(validatedContent.metadata, null, 2)
    )
    
    console.log('✅ Website content generated successfully!')
    console.log(`   - ${validatedContent.features.length} features`)
    console.log(`   - ${validatedContent.pricing.length} pricing tiers`)
    console.log(`   - ${validatedContent.navigation.length} navigation items`)
    console.log(`   - Generated at: ${validatedContent.metadata.generatedAt}`)
    
  } catch (error) {
    console.error('❌ Failed to generate website content:', error)
    if (error instanceof z.ZodError) {
      console.error('Validation errors:', error.errors)
    }
    process.exit(1)
  }
}

// 如果直接运行此脚本
if (import.meta.url === `file://${process.argv[1]}`) {
  generateWebsiteContent()
}