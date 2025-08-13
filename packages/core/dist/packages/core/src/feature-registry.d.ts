import { FeatureConfig, WebsiteContent } from '@my-platform/types';
export declare class FeatureRegistry {
    private features;
    discoverFeatures(): Promise<void>;
    private loadKnownFeatures;
    private validateConfig;
    getEnabledFeatures(context: 'desktop' | 'website' | 'api'): FeatureConfig[];
    getFeature(id: string): FeatureConfig | undefined;
    generateWebsiteContent(): WebsiteContent;
    private generateFeaturesShowcase;
    private generatePricingTiers;
    private generateNavigation;
}
