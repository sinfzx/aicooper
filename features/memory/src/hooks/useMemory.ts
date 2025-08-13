import { useState, useEffect, useCallback } from 'react';
import { notifications } from '@mantine/notifications';
import {
  Memory,
  MemoryCreationRequest,
  MemoryFilter,
  MemoryStats,
  MemorySearchResult,
  AIImageGenerationRequest,
  VideoGenerationRequest,
} from '../types';

export const useMemory = () => {
  const [memories, setMemories] = useState<Memory[]>([]);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState<MemoryStats | null>(null);

  const normalizeMemory = (raw: any): Memory => {
    const parseDate = (v: any): Date => {
      if (!v) return new Date();
      const d = new Date(v);
      return Number.isNaN(d.getTime()) ? new Date() : d;
    };
    const toArray = (v: any): string[] => {
      if (Array.isArray(v)) return v as string[];
      if (typeof v === 'string') {
        try {
          const parsed = JSON.parse(v);
          return Array.isArray(parsed) ? parsed : [];
        } catch {
          return [];
        }
      }
      return [];
    };

    return {
      id: raw.id,
      userId: raw.userId ?? raw.user_id ?? 'user1',
      title: raw.title,
      content: raw.content,
      date: parseDate(raw.date),
      location: raw.location ?? undefined,
      people: toArray(raw.people),
      tags: toArray(raw.tags),
      emotions: toArray(raw.emotions),
      imageUrl: raw.imageUrl ?? raw.image_url ?? undefined,
      audioUrl: raw.audioUrl ?? raw.audio_url ?? undefined,
      videoUrl: raw.videoUrl ?? raw.video_url ?? undefined,
      aiGenerated: raw.aiGenerated ?? raw.ai_generated ?? false,
      visibility: (raw.visibility ?? 'private') as
        | 'private'
        | 'shared'
        | 'public',
      createdAt: parseDate(raw.createdAt ?? raw.created_at),
      updatedAt: parseDate(raw.updatedAt ?? raw.updated_at),
    };
  };

  // 加载记忆列表
  const loadMemories = useCallback(async (filter?: MemoryFilter) => {
    setLoading(true);
    try {
      // 检查是否在 Tauri 环境中
      if (typeof window === 'undefined' || !window.__TAURI__) {
        console.log('Not in Tauri environment, using empty memories');
        setMemories([]);
        return;
      }

      const { invoke } = await import('@tauri-apps/api/core');
      const raw = await invoke<any[]>('get_memories', { filter });
      const normalized = Array.isArray(raw) ? raw.map(normalizeMemory) : [];
      setMemories(normalized);
    } catch (error) {
      console.error('Failed to load memories:', error);
      notifications.show({
        title: '加载失败',
        message: '无法加载记忆列表',
        color: 'red',
      });
      setMemories([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // 创建记忆
  const createMemory = useCallback(
    async (request: MemoryCreationRequest): Promise<Memory> => {
      try {
        if (typeof window === 'undefined' || !window.__TAURI__) {
          throw new Error('Not in Tauri environment');
        }

        const { invoke } = await import('@tauri-apps/api/core');
        const newRaw = await invoke<any>('create_memory', { request });
        const newMemory = normalizeMemory(newRaw);
        setMemories((prev: Memory[]) => [newMemory, ...prev]);

        notifications.show({
          title: '创建成功',
          message: '记忆已保存',
          color: 'green',
        });

        return newMemory;
      } catch (error) {
        console.error('Failed to create memory:', error);
        notifications.show({
          title: '创建失败',
          message: '无法保存记忆',
          color: 'red',
        });
        throw error;
      }
    },
    []
  );

  // 更新记忆
  const updateMemory = useCallback(
    async (id: string, updates: Partial<Memory>) => {
      try {
        if (typeof window === 'undefined' || !window.__TAURI__) {
          throw new Error('Not in Tauri environment');
        }

        const { invoke } = await import('@tauri-apps/api/core');
        const snakeUpdates: any = {
          title: updates.title,
          content: updates.content,
          date: updates.date ? updates.date.toISOString() : undefined,
          location: updates.location,
          people: updates.people,
          tags: updates.tags,
          emotions: updates.emotions,
          image_url: updates.imageUrl,
          audio_url: updates.audioUrl,
          video_url: updates.videoUrl,
          ai_generated: updates.aiGenerated,
          visibility: updates.visibility,
        };
        const raw = await invoke<any>('update_memory', {
          id,
          updates: snakeUpdates,
        });
        const updatedMemory = normalizeMemory(raw);
        setMemories((prev: Memory[]) =>
          prev.map((m: Memory) => (m.id === id ? updatedMemory : m))
        );

        notifications.show({
          title: '更新成功',
          message: '记忆已更新',
          color: 'green',
        });
      } catch (error) {
        console.error('Failed to update memory:', error);
        notifications.show({
          title: '更新失败',
          message: '无法更新记忆',
          color: 'red',
        });
      }
    },
    []
  );

  // 删除记忆
  const deleteMemory = useCallback(async (id: string) => {
    try {
      if (typeof window === 'undefined' || !window.__TAURI__) {
        throw new Error('Not in Tauri environment');
      }

      const { invoke } = await import('@tauri-apps/api/core');
      await invoke('delete_memory', { id });
      setMemories((prev: Memory[]) => prev.filter((m: Memory) => m.id !== id));

      notifications.show({
        title: '删除成功',
        message: '记忆已删除',
        color: 'green',
      });
    } catch (error) {
      console.error('Failed to delete memory:', error);
      notifications.show({
        title: '删除失败',
        message: '无法删除记忆',
        color: 'red',
      });
    }
  }, []);

  // 搜索记忆
  const searchMemories = useCallback(
    async (query: string): Promise<MemorySearchResult> => {
      try {
        if (typeof window === 'undefined' || !window.__TAURI__) {
          return {
            memories: [],
            total: 0,
            page: 1,
            page_size: 20,
            has_more: false,
          };
        }

        const { invoke } = await import('@tauri-apps/api/core');
        const result = await invoke<MemorySearchResult>('search_memories', {
          query,
        });
        return result;
      } catch (error) {
        console.error('Failed to search memories:', error);
        throw error;
      }
    },
    []
  );

  // AI 生成图像
  const generateImage = useCallback(
    async (request: AIImageGenerationRequest) => {
      try {
        if (typeof window === 'undefined' || !window.__TAURI__) {
          throw new Error('Not in Tauri environment');
        }

        const { invoke } = await import('@tauri-apps/api/core');
        const payload = {
          request: {
            memory_id: request.memoryId,
            prompt: request.prompt,
            style: request.style,
            aspect_ratio: request.aspectRatio,
            quality: request.quality,
          },
        };
        const imageUrl = await invoke<string>('generate_memory_image', payload);

        // 更新记忆的图像URL
        await updateMemory(request.memoryId, {
          imageUrl,
          aiGenerated: true,
        });

        notifications.show({
          title: 'AI 图像生成完成',
          message: '记忆图像已生成并保存',
          color: 'green',
        });

        return imageUrl;
      } catch (error) {
        console.error('Failed to generate image:', error);
        notifications.show({
          title: '图像生成失败',
          message: 'AI 图像生成遇到问题',
          color: 'red',
        });
        throw error;
      }
    },
    [updateMemory]
  );

  // 生成视频
  const generateVideo = useCallback(async (request: VideoGenerationRequest) => {
    try {
      if (typeof window === 'undefined' || !window.__TAURI__) {
        throw new Error('Not in Tauri environment');
      }

      const { invoke } = await import('@tauri-apps/api/core');
      const videoUrl = await invoke<string>('generate_memory_video', {
        request,
      });

      notifications.show({
        title: '视频生成完成',
        message: '记忆视频已生成',
        color: 'green',
      });

      return videoUrl;
    } catch (error) {
      console.error('Failed to generate video:', error);
      notifications.show({
        title: '视频生成失败',
        message: '视频生成遇到问题',
        color: 'red',
      });
      throw error;
    }
  }, []);

  // 获取统计信息
  const loadStats = useCallback(async () => {
    try {
      if (typeof window === 'undefined' || !window.__TAURI__) {
        setStats(null);
        return;
      }

      const { invoke } = await import('@tauri-apps/api/core');
      const raw = await invoke<any>('get_memory_stats');
      const normalized: MemoryStats = {
        totalMemories: raw.total_memories,
        memoriesThisMonth: raw.memories_this_month,
        memoriesThisYear: raw.memories_this_year,
        topLocations: raw.top_locations,
        topPeople: raw.top_people,
        topEmotions: raw.top_emotions,
        aiGeneratedCount: raw.ai_generated_count,
      };
      setStats(normalized);
    } catch (error) {
      console.error('Failed to load stats:', error);
      setStats(null);
    }
  }, []);

  // 初始化加载
  useEffect(() => {
    loadMemories();
    loadStats();
  }, [loadMemories, loadStats]);

  return {
    memories,
    loading,
    stats,
    loadMemories,
    createMemory,
    updateMemory,
    deleteMemory,
    searchMemories,
    generateImage,
    generateVideo,
    loadStats,
  };
};
