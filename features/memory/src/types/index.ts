export interface Memory {
  id: string;
  userId: string;
  title: string;
  content: string;
  date: Date;
  location?: string;
  people: string[];
  tags: string[];
  emotions: string[];
  imageUrl?: string;
  audioUrl?: string;
  videoUrl?: string;
  aiGenerated?: boolean;
  visibility: 'private' | 'shared' | 'public';
  createdAt: Date;
  updatedAt: Date;
}

export interface MemoryCreationRequest {
  title: string;
  content: string;
  date: Date;
  location?: string;
  people?: string[];
  tags?: string[];
  emotions?: string[];
  visibility?: 'private' | 'shared' | 'public';
}

export interface MemoryFilter {
  dateRange?: {
    start: Date;
    end: Date;
  };
  location?: string;
  people?: string[];
  tags?: string[];
  emotions?: string[];
  hasImage?: boolean;
  hasAudio?: boolean;
  hasVideo?: boolean;
  sortBy?: 'date' | 'title' | 'created';
  sortOrder?: 'asc' | 'desc';
}

export interface MemoryStats {
  totalMemories: number;
  memoriesThisMonth: number;
  memoriesThisYear: number;
  topLocations: Array<{ location: string; count: number }>;
  topPeople: Array<{ person: string; count: number }>;
  topEmotions: Array<{ emotion: string; count: number }>;
  aiGeneratedCount: number;
}

export interface AIImageGenerationRequest {
  memoryId: string;
  prompt: string;
  style?: 'realistic' | 'artistic' | 'cartoon' | 'vintage';
  aspectRatio?: '1:1' | '16:9' | '9:16' | '4:3';
  quality?: 'draft' | 'standard' | 'high';
}

export interface VideoGenerationRequest {
  memoryIds: string[];
  title: string;
  duration?: number;
  transitions?: 'fade' | 'slide' | 'zoom' | 'dissolve';
  backgroundMusic?: string;
  voiceoverText?: string;
  voiceSettings?: {
    voice: string;
    speed: number;
    pitch: number;
  };
}

export interface MemorySearchResult {
  memories: Memory[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface KeywordTrigger {
  id: string;
  keyword: string;
  memoryIds: string[];
  enabled: boolean;
  createdAt: Date;
}

export interface MemoryExportOptions {
  format: 'json' | 'pdf' | 'html' | 'markdown';
  includeImages: boolean;
  includeAudio: boolean;
  includeVideos: boolean;
  dateRange?: {
    start: Date;
    end: Date;
  };
}

// 用于组件中的搜索筛选
export interface MemorySearchFilters {
  query?: string;
  dateRange?: {
    start: Date;
    end: Date;
  };
  startDate?: Date;
  endDate?: Date;
  location?: string;
  people?: string[];
  tags?: string[];
  emotions?: string[];
  hasImage?: boolean;
  hasAudio?: boolean;
  hasVideo?: boolean;
  mediaType?: 'image' | 'audio' | 'video' | 'ai-generated';
  sortBy?: 'date' | 'title' | 'created';
  sortOrder?: 'asc' | 'desc';
}

// 用于记忆更新
export interface MemoryUpdateRequest {
  title?: string;
  content?: string;
  date?: Date;
  location?: string;
  people?: string[];
  tags?: string[];
  emotions?: string[];
  imageUrl?: string;
  audioUrl?: string;
  videoUrl?: string;
  aiGenerated?: boolean;
  visibility?: 'private' | 'shared' | 'public';
}

// AI 图片生成响应
export interface AIImageGenerationResponse {
  imageUrl: string;
  memoryId: string;
  aiGenerated: boolean;
}

// 图片生成请求（简化版本）
export interface ImageGenerationRequest {
  memoryId: string;
  prompt: string;
  style?: 'realistic' | 'artistic' | 'cartoon' | 'vintage';
  aspectRatio?: '1:1' | '16:9' | '9:16' | '4:3';
  quality?: 'standard' | 'hd';
}
