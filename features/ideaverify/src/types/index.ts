export type IdeaCategory = 'software' | 'hardware' | 'service' | 'other';

export interface Idea {
  id: string;
  name: string;
  category: IdeaCategory;
  stage?: 'idea' | 'mvp' | 'launched';
  description?: string;
  targetUsers?: string[];
  links?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface SourceItem {
  url: string;
  platform?: string;
  capturedAt?: string;
  title?: string;
}

export interface DemandCard {
  id: string;
  title: string;
  painPoint: string;
  tags: string[];
  quotes: { text: string; url?: string; ts?: string }[];
  sources: { url: string; platform?: string }[];
  priority?: number;
  score?: number;
}
