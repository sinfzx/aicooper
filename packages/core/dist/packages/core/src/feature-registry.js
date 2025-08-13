export class FeatureRegistry {
    constructor() {
        this.features = new Map();
    }
    // 自动发现和注册功能
    async discoverFeatures() {
        try {
            // 手动导入已知的功能配置
            const featureConfigs = await this.loadKnownFeatures();
            for (const config of featureConfigs) {
                if (this.validateConfig(config)) {
                    this.features.set(config.id, config);
                    console.log(`✓ Loaded feature: ${config.name} (${config.id})`);
                }
            }
            console.log(`Discovered ${this.features.size} features`);
        }
        catch (error) {
            console.error('Failed to discover features:', error);
        }
    }
    // 加载已知的功能配置
    async loadKnownFeatures() {
        const configs = [];
        try {
            // 尝试导入 AI 知识框架
            const aiKnowledgeModule = await import('../../../features/ai-knowledge/feature.config');
            configs.push(aiKnowledgeModule.default || aiKnowledgeModule.config);
        }
        catch (error) {
            console.warn('AI Knowledge feature not found');
        }
        try {
            // 尝试导入提示词模板
            const promptTemplatesModule = await import('../../../features/prompt-templates/feature.config');
            configs.push(promptTemplatesModule.default || promptTemplatesModule.config);
        }
        catch (error) {
            console.warn('Prompt Templates feature not found');
        }
        return configs;
    }
    // 验证配置
    validateConfig(config) {
        if (!config.id || !config.name || !config.version) {
            console.warn('Invalid feature config: missing required fields');
            return false;
        }
        if (!['development', 'beta', 'stable', 'deprecated', 'disabled'].includes(config.status)) {
            console.warn(`Invalid feature status: ${config.status}`);
            return false;
        }
        return true;
    }
    // 获取启用的功能列表
    getEnabledFeatures(context) {
        return Array.from(this.features.values())
            .filter(feature => {
            if (feature.status === 'disabled')
                return false;
            switch (context) {
                case 'desktop':
                    return feature.desktop.enabled;
                case 'website':
                    return feature.website.enabled && feature.status !== 'development';
                case 'api':
                    return feature.api?.endpoints && feature.api.endpoints.length > 0;
                default:
                    return false;
            }
        });
    }
    // 获取单个功能
    getFeature(id) {
        return this.features.get(id);
    }
    // 生成官网内容
    generateWebsiteContent() {
        const websiteFeatures = this.getEnabledFeatures('website');
        return {
            features: this.generateFeaturesShowcase(websiteFeatures),
            pricing: this.generatePricingTiers(websiteFeatures),
            navigation: this.generateNavigation(websiteFeatures)
        };
    }
    generateFeaturesShowcase(features) {
        return features.map(feature => ({
            id: feature.id,
            name: feature.name,
            description: feature.website.showcase?.description || feature.description,
            features: feature.website.showcase?.features || [],
            screenshots: feature.website.showcase?.screenshots || [],
            status: feature.status,
            tier: feature.website.pricing?.tier || 'free'
        }));
    }
    generatePricingTiers(features) {
        const tiers = new Map();
        // 基础套餐
        tiers.set('free', {
            name: '免费版',
            price: '¥0',
            features: []
        });
        tiers.set('pro', {
            name: '专业版',
            price: '¥99/月',
            features: [],
            popular: true
        });
        tiers.set('enterprise', {
            name: '企业版',
            price: '联系我们',
            features: []
        });
        // 根据功能配置生成套餐特性
        features.forEach(feature => {
            const tier = feature.website.pricing?.tier || 'free';
            const tierConfig = tiers.get(tier);
            if (tierConfig && feature.website.pricing?.features) {
                tierConfig.features.push(...feature.website.pricing.features);
            }
        });
        return Array.from(tiers.values());
    }
    generateNavigation(features) {
        return [
            { label: '首页', href: '/' },
            { label: '功能', href: '/features' },
            { label: '定价', href: '/pricing' },
            { label: '文档', href: '/docs' },
            { label: '下载', href: '/download' }
        ];
    }
}
