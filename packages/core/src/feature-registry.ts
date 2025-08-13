import { FeatureConfig, WebsiteContent, FeatureShowcase, PricingTier } from '@my-platform/types'
import { z } from 'zod'

// Zod schema for feature config validation
const FeatureConfigSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  description: z.string().min(1),
  version: z.string().min(1),
  status: z.enum(['development', 'beta', 'stable', 'deprecated', 'disabled']),
  desktop: z.object({
    enabled: z.boolean(),
    menuItems: z.array(z.any()).optional(),
    shortcuts: z.array(z.any()).optional(),
    routes: z.array(z.any()).optional(),
  }),
  website: z.object({
    enabled: z.boolean(),
    showcase: z.object({
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      features: z.array(z.string()),
      screenshots: z.array(z.string()),
      demoVideo: z.string().optional(),
    }).optional(),
    pricing: z.object({
      tier: z.enum(['free', 'pro', 'enterprise']),
      features: z.array(z.string()),
    }).optional(),
  }),
  api: z.object({
    endpoints: z.array(z.string()),
    permissions: z.array(z.string()),
  }).optional(),
  dependencies: z.object({
    ai: z.array(z.string()).optional(),
    ui: z.array(z.string()).optional(),
    core: z.array(z.string()).optional(),
  }).optional(),
})

export class FeatureRegistry {
  private features = new Map<string, FeatureConfig>()
  
  // Register a feature with validation
  registerFeature(config: FeatureConfig): void {
    try {
      const validatedConfig = FeatureConfigSchema.parse(config)
      
      if (this.features.has(validatedConfig.id)) {
        throw new Error(`Feature with id '${validatedConfig.id}' is already registered`)
      }
      
      this.features.set(validatedConfig.id, validatedConfig)
      console.log(`✓ Registered feature: ${validatedConfig.name} (${validatedConfig.id})`)
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error(`Feature config validation failed for '${config.id}':`, error.errors)
        throw new Error(`Invalid feature config: ${error.errors.map(e => e.message).join(', ')}`)
      }
      throw error
    }
  }
  
  // 自动发现和注册功能
  async discoverFeatures() {
    try {
      // 手动导入已知的功能配置
      const featureConfigs = await this.loadKnownFeatures()
      
      for (const config of featureConfigs) {
        if (this.validateConfig(config)) {
          this.features.set(config.id, config)
          console.log(`✓ Loaded feature: ${config.name} (${config.id})`)
        }
      }
      
      console.log(`Discovered ${this.features.size} features`)
    } catch (error) {
      console.error('Failed to discover features:', error)
    }
  }
  
  // 加载已知的功能配置
  private async loadKnownFeatures(): Promise<FeatureConfig[]> {
    const configs: FeatureConfig[] = []
    
    try {
      // 尝试导入 AI 知识框架
      const aiKnowledgeModule = await import('../../../features/ai-knowledge/feature.config')
      configs.push(aiKnowledgeModule.default || aiKnowledgeModule.config)
    } catch (error) {
      console.warn('AI Knowledge feature not found')
    }
    
    try {
      // 尝试导入提示词模板
      const promptTemplatesModule = await import('../../../features/prompt-templates/feature.config')
      configs.push(promptTemplatesModule.default || promptTemplatesModule.config)
    } catch (error) {
      console.warn('Prompt Templates feature not found')
    }
    
    return configs
  }
  
  // 验证配置 (now using Zod schema)
  private validateConfig(config: FeatureConfig): boolean {
    try {
      FeatureConfigSchema.parse(config)
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.warn(`Invalid feature config for '${config.id}':`, error.errors)
      }
      return false
    }
  }
  
  // 获取启用的功能列表
  getEnabledFeatures(context: 'desktop' | 'website' | 'api'): FeatureConfig[] {
    return Array.from(this.features.values())
      .filter(feature => {
        if (feature.status === 'disabled') return false
        
        switch (context) {
          case 'desktop':
            return feature.desktop.enabled
          case 'website':
            return feature.website.enabled && feature.status !== 'development'
          case 'api':
            return feature.api?.endpoints && feature.api.endpoints.length > 0
          default:
            return false
        }
      })
  }
  
  // 获取单个功能
  getFeature(id: string): FeatureConfig | undefined {
    return this.features.get(id)
  }
  
  // 生成官网内容
  generateWebsiteContent(): WebsiteContent {
    const websiteFeatures = this.getEnabledFeatures('website')
    
    return {
      features: this.generateFeaturesShowcase(websiteFeatures),
      pricing: this.generatePricingTiers(websiteFeatures),
      navigation: this.generateNavigation(websiteFeatures)
    }
  }
  
  private generateFeaturesShowcase(features: FeatureConfig[]): FeatureShowcase[] {
    return features.map(feature => ({
      id: feature.id,
      name: feature.name,
      description: feature.website.showcase?.description || feature.description,
      features: feature.website.showcase?.features || [],
      screenshots: feature.website.showcase?.screenshots || [],
      status: feature.status,
      tier: feature.website.pricing?.tier || 'free'
    }))
  }
  
  private generatePricingTiers(features: FeatureConfig[]): PricingTier[] {
    const tiers = new Map<string, PricingTier>()
    
    // 基础套餐
    tiers.set('free', {
      name: '免费版',
      price: '¥0',
      features: []
    })
    
    tiers.set('pro', {
      name: '专业版',
      price: '¥99/月',
      features: [],
      popular: true
    })
    
    tiers.set('enterprise', {
      name: '企业版',
      price: '联系我们',
      features: []
    })
    
    // 根据功能配置生成套餐特性
    features.forEach(feature => {
      const tier = feature.website.pricing?.tier || 'free'
      const tierConfig = tiers.get(tier)
      
      if (tierConfig && feature.website.pricing?.features) {
        tierConfig.features.push(...feature.website.pricing.features)
      }
    })
    
    return Array.from(tiers.values())
  }
  
  private generateNavigation(features: FeatureConfig[]) {
    return [
      { label: '首页', href: '/' },
      { label: '功能', href: '/features' },
      { label: '定价', href: '/pricing' },
      { label: '文档', href: '/docs' },
      { label: '下载', href: '/download' }
    ]
  }
}