export interface FeatureConfig {
    id: string;
    name: string;
    description: string;
    version: string;
    status: 'development' | 'beta' | 'stable' | 'deprecated' | 'disabled';
    desktop: {
        enabled: boolean;
        menuItems?: MenuItem[];
        shortcuts?: Shortcut[];
        routes?: Route[];
    };
    website: {
        enabled: boolean;
        showcase?: {
            title: string;
            subtitle: string;
            description: string;
            features: string[];
            screenshots: string[];
            demoVideo?: string;
        };
        pricing?: {
            tier: 'free' | 'pro' | 'enterprise';
            features: string[];
        };
    };
    api?: {
        endpoints: string[];
        permissions: string[];
    };
    dependencies?: {
        ai?: string[];
        ui?: string[];
        core?: string[];
    };
}
export interface MenuItem {
    label: string;
    path: string;
    icon: string;
    children?: MenuItem[];
}
export interface Shortcut {
    key: string;
    action: string;
    description?: string;
}
export interface Route {
    path: string;
    component: string;
    exact?: boolean;
}
export interface WebsiteContent {
    features: FeatureShowcase[];
    pricing: PricingTier[];
    navigation: NavigationItem[];
}
export interface FeatureShowcase {
    id: string;
    name: string;
    description: string;
    features: string[];
    screenshots: string[];
    status: FeatureConfig['status'];
    tier: 'free' | 'pro' | 'enterprise';
}
export interface PricingTier {
    name: string;
    price: string;
    features: string[];
    popular?: boolean;
}
export interface NavigationItem {
    label: string;
    href: string;
    children?: NavigationItem[];
}
