export * from './aiSchemas';
export * from './feature-registry';
export * from './logger';
export * from '@my-platform/types';

// Convenience function for registering features
import { FeatureRegistry } from './feature-registry';
import { FeatureConfig } from '@my-platform/types';

const globalRegistry = new FeatureRegistry();

export function registerFeature(config: FeatureConfig): void {
  globalRegistry.registerFeature(config);
}

export function getFeatureRegistry(): FeatureRegistry {
  return globalRegistry;
}
