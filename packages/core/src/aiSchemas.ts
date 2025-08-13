import { z } from 'zod';

export const TemplateParameterSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  type: z.enum(['text', 'number', 'select', 'textarea']).optional(),
  required: z.boolean().optional(),
  defaultValue: z.string().optional(),
  options: z.array(z.string()).optional(),
});

export const TemplateAISchema = z.object({
  template: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    category: z.string().optional(),
    prompt: z.string(),
    parameters: z.array(TemplateParameterSchema).optional(),
    article: z.string().optional(),
  }),
});

export type TemplateAIParsed = z.infer<typeof TemplateAISchema>;

export const FlowResourceSchema = z.object({
  id: z.string().optional(),
  type: z.literal('url').default('url'),
  title: z.string(),
  url: z.string(),
  description: z.string().optional(),
});

export const FlowStepSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  order: z.number().int().optional(),
  estimatedTime: z.string().optional(),
  difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
  resources: z.array(FlowResourceSchema).optional().default([]),
  tools: z.array(z.string()).optional().default([]),
  questions: z.array(z.string()).optional().default([]),
});

export const FlowToolSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional(),
  url: z.string().optional(),
  category: z.string().optional(),
});

export const FlowAISchema = z.object({
  flow: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
    totalTime: z.string().optional(),
    article: z.string().optional(),
    prerequisites: z.array(z.string()).optional().default([]),
    outcomes: z.array(z.string()).optional().default([]),
    steps: z.array(FlowStepSchema).optional().default([]),
    tools: z.array(FlowToolSchema).optional().default([]),
  }),
});

export type FlowAIParsed = z.infer<typeof FlowAISchema>;
