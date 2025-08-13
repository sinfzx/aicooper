// Flow Design Feature - 流程设计功能模块
export { FlowDesignManager } from './components/FlowDesignManager';
export { FlowDesignViewer } from './components/FlowDesignViewer';
export { FlowDesignCreator } from './components/FlowDesignCreator';

// Types
export type {
  FlowDesign,
  FlowStep,
  FlowTool,
  FlowResource,
} from '@my-platform/types';

// Hooks
export { useFlowDesign } from './hooks/useFlowDesign';

// Feature configuration
export { flowDesignFeature } from '../feature.config';
