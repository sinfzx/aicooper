import { FeatureShowcase, PricingTier } from '@my-platform/types'

// 这些函数会读取构建时生成的内容文件
export async function getAllFeatures(): Promise<FeatureShowcase[]> {
  try {
    const featuresData = await import('@/content/features.json')
    const features = featuresData.default || []
    // 确保类型正确
    return features.map((feature: any) => ({
      ...feature,
      status: feature.status as FeatureShowcase['status'],
      tier: feature.tier as FeatureShowcase['tier']
    }))
  } catch (error) {
    console.warn('Failed to load features data:', error)
    return []
  }
}

export async function getFeatureById(id: string): Promise<FeatureShowcase | null> {
  const features = await getAllFeatures()
  return features.find(f => f.id === id) || null
}

export async function getPricingTiers(): Promise<PricingTier[]> {
  try {
    const pricingData = await import('@/content/pricing.json')
    return pricingData.default || []
  } catch (error) {
    console.warn('Failed to load pricing data:', error)
    return []
  }
}

export async function getNavigation() {
  try {
    const navigationData = await import('@/content/navigation.json')
    return navigationData.default || []
  } catch (error) {
    console.warn('Failed to load navigation data:', error)
    return []
  }
}