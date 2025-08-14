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
  const isTauriEnv = typeof window !== 'undefined' && (window as any).__TAURI__;

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

  // tRPC 调用（定义在顶部，便于 Web 分支使用）
  const callTrpcApi = useCallback(async (path: string, input: any) => {
    try {
      const baseUrl =
        typeof window !== 'undefined' ? window.location.origin : '';
      const res = await fetch(
        `${baseUrl}/api/trpc/${encodeURIComponent(path)}?batch=1`,
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify([{ id: '1', json: input ?? null }]),
        }
      );
      if (!res.ok) throw new Error(`tRPC ${path} failed: ${res.status}`);
      const data = await res.json();
      if (!Array.isArray(data) || !data[0]?.result?.data) return null;
      return data[0].result.data;
    } catch (err) {
      console.error('tRPC call error:', err);
      throw err;
    }
  }, []);

  // 加载记忆列表
  const loadMemories = useCallback(async (filter?: MemoryFilter) => {
    setLoading(true);
    try {
      if (!isTauriEnv) {
        // Web 环境：走 tRPC
        const input = {
          startDate: filter?.dateRange?.start,
          endDate: filter?.dateRange?.end,
          location: filter?.location,
          people: filter?.people,
          tags: filter?.tags,
          emotions: filter?.emotions,
          sortBy: filter?.sortBy,
          sortOrder: filter?.sortOrder,
        };
        const data = await callTrpcApi('memory.list', input);
        const normalized = Array.isArray(data) ? data.map(normalizeMemory) : [];
        setMemories(normalized);
      } else {
        try {
          const { invoke } = await import('@tauri-apps/api/core');
          const raw = await invoke<any[]>('get_memories', { filter });
          const normalized = Array.isArray(raw) ? raw.map(normalizeMemory) : [];
          setMemories(normalized);
        } catch (e) {
          // 回退到 tRPC
          const input = {
            startDate: filter?.dateRange?.start,
            endDate: filter?.dateRange?.end,
            location: filter?.location,
            people: filter?.people,
            tags: filter?.tags,
            emotions: filter?.emotions,
            sortBy: filter?.sortBy,
            sortOrder: filter?.sortOrder,
          };
          const data = await callTrpcApi('memory.list', input);
          const normalized = Array.isArray(data)
            ? data.map(normalizeMemory)
            : [];
          setMemories(normalized);
        }
      }
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
        let newMemory: Memory;
        if (!isTauriEnv) {
          const created = await callTrpcApi('memory.create', {
            title: request.title,
            content: request.content,
            date: request.date,
            location: request.location,
            people: request.people ?? [],
            tags: request.tags ?? [],
            emotions: request.emotions ?? [],
            visibility: request.visibility ?? 'private',
          });
          newMemory = normalizeMemory(created);
        } else {
          try {
            const { invoke } = await import('@tauri-apps/api/core');
            const newRaw = await invoke<any>('create_memory', { request });
            newMemory = normalizeMemory(newRaw);
          } catch {
            // 回退到 tRPC
            const created = await callTrpcApi('memory.create', {
              title: request.title,
              content: request.content,
              date: request.date,
              location: request.location,
              people: request.people ?? [],
              tags: request.tags ?? [],
              emotions: request.emotions ?? [],
              visibility: request.visibility ?? 'private',
            });
            newMemory = normalizeMemory(created);
          }
        }
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

  // 导出时间线 JSON（仅本地媒体路径）
  const exportTimelineJson = useCallback(
    async (items?: Memory[], fileName?: string) => {
      const dataset = (items && items.length > 0 ? items : memories).sort(
        (a, b) => a.date.getTime() - b.date.getTime()
      );
      const payload = {
        title:
          fileName ||
          `timeline-${new Date().toISOString().replace(/[:.]/g, '-')}`,
        generatedAt: new Date().toISOString(),
        count: dataset.length,
        items: dataset.map((m) => ({
          id: m.id,
          date: m.date.toISOString(),
          title: m.title,
          content: m.content,
          location: m.location || null,
          people: m.people,
          tags: m.tags,
          emotions: m.emotions,
          imagePath: m.imageUrl || null,
          audioPath: m.audioUrl || null,
          videoPath: m.videoUrl || null,
          visibility: m.visibility,
        })),
      };

      const json = JSON.stringify(payload, null, 2);

      try {
        if (!isTauriEnv) {
          const blob = new Blob([json], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${payload.title}.json`;
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(url);
        } else {
          const { invoke } = await import('@tauri-apps/api/core');
          await invoke('save_timeline_json', {
            fileName: payload.title,
            contentJson: json,
          });
        }
        notifications.show({
          title: '已导出',
          message: '时间线 JSON 导出成功',
          color: 'green',
        });
      } catch (error) {
        console.error('Failed to export timeline:', error);
        notifications.show({
          title: '导出失败',
          message: '导出时间线失败',
          color: 'red',
        });
        throw error;
      }
    },
    [isTauriEnv, memories]
  );

  // 更新记忆
  const updateMemory = useCallback(
    async (id: string, updates: Partial<Memory>) => {
      try {
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
        let updatedMemory: Memory;
        if (!isTauriEnv) {
          const raw = await callTrpcApi('memory.update', {
            id,
            updates: {
              title: snakeUpdates.title,
              content: snakeUpdates.content,
              date: updates.date,
              location: snakeUpdates.location,
              people: snakeUpdates.people,
              tags: snakeUpdates.tags,
              emotions: snakeUpdates.emotions,
              visibility: snakeUpdates.visibility,
            },
          });
          updatedMemory = normalizeMemory(raw);
        } else {
          try {
            const { invoke } = await import('@tauri-apps/api/core');
            const raw = await invoke<any>('update_memory', {
              id,
              updates: snakeUpdates,
            });
            updatedMemory = normalizeMemory(raw);
          } catch {
            const raw = await callTrpcApi('memory.update', {
              id,
              updates: {
                title: snakeUpdates.title,
                content: snakeUpdates.content,
                date: updates.date,
                location: snakeUpdates.location,
                people: snakeUpdates.people,
                tags: snakeUpdates.tags,
                emotions: snakeUpdates.emotions,
                visibility: snakeUpdates.visibility,
              },
            });
            updatedMemory = normalizeMemory(raw);
          }
        }
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
      if (!isTauriEnv) {
        await callTrpcApi('memory.delete', { id });
      } else {
        try {
          const { invoke } = await import('@tauri-apps/api/core');
          await invoke('delete_memory', { id });
        } catch {
          await callTrpcApi('memory.delete', { id });
        }
      }
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
        if (!isTauriEnv) {
          const data = await callTrpcApi('memory.search', {
            q: query,
            page: 1,
            pageSize: 20,
          });
          return data as MemorySearchResult;
        } else {
          try {
            const { invoke } = await import('@tauri-apps/api/core');
            const result = await invoke<MemorySearchResult>('search_memories', {
              query,
            });
            return result;
          } catch {
            const data = await callTrpcApi('memory.search', {
              q: query,
              page: 1,
              pageSize: 20,
            });
            return data as MemorySearchResult;
          }
        }
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
        if (!isTauriEnv) {
          throw new Error('Not in Tauri environment');
        }

        const { invoke } = await import('@tauri-apps/api/core');
        // 读取本地设置默认风格/比例
        let style = request.style;
        let aspect = request.aspectRatio;
        try {
          const settings = await invoke<any>('get_settings');
          if (!style && settings?.image_style_default)
            style = settings.image_style_default;
          if (!aspect && settings?.image_aspect_default)
            aspect = settings.image_aspect_default;
        } catch {}
        const payload = {
          request: {
            memory_id: request.memoryId,
            prompt: request.prompt,
            style: style,
            aspect_ratio: aspect,
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
  const generateVideo = useCallback(
    async (request: VideoGenerationRequest) => {
      try {
        if (!isTauriEnv) {
          throw new Error('Not in Tauri environment');
        }

        const { invoke } = await import('@tauri-apps/api/core');
        // 将现有请求转换为 Tauri 侧期望的 snake_case 结构
        const images = memories
          .filter((m) => request.memoryIds.includes(m.id))
          .map((m) => m.imageUrl)
          .filter(Boolean) as string[];

        const payload = {
          request: {
            image_paths: images,
            audio_path: undefined, // 可由调用方预先合成后传入
            bgm_path: request.backgroundMusic || undefined,
            out_name: request.title ? `${request.title}.mp4` : undefined,
            width: undefined,
            height: undefined,
            fps: undefined,
          },
        };

        const videoUrl = await invoke<string>('generate_memory_video', payload);

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
    },
    [memories]
  );

  // 获取统计信息
  const loadStats = useCallback(async () => {
    try {
      if (!isTauriEnv) {
        const raw = await callTrpcApi('memory.stats', null);
        const normalized: MemoryStats = {
          totalMemories: raw.totalMemories,
          memoriesThisMonth: raw.memoriesThisMonth,
          memoriesThisYear: raw.memoriesThisYear,
          topLocations: raw.topLocations,
          topPeople: raw.topPeople,
          topEmotions: raw.topEmotions,
          aiGeneratedCount: raw.aiGeneratedCount,
        };
        setStats(normalized);
        return;
      }

      try {
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
      } catch {
        const raw = await callTrpcApi('memory.stats', null);
        const normalized: MemoryStats = {
          totalMemories: raw.totalMemories,
          memoriesThisMonth: raw.memoriesThisMonth,
          memoriesThisYear: raw.memoriesThisYear,
          topLocations: raw.topLocations,
          topPeople: raw.topPeople,
          topEmotions: raw.topEmotions,
          aiGeneratedCount: raw.aiGeneratedCount,
        };
        setStats(normalized);
      }
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

  // === 同步：仅非媒体字段（tRPC） ===
  const callTrpc = useCallback(async (path: string, input: any) => {
    try {
      const baseUrl =
        typeof window !== 'undefined' ? window.location.origin : '';
      const res = await fetch(
        `${baseUrl}/api/trpc/${encodeURIComponent(path)}?batch=1`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify([
            {
              id: '1',
              json: input ?? null,
            },
          ]),
        }
      );
      if (!res.ok) {
        throw new Error(`tRPC ${path} failed: ${res.status}`);
      }
      const data = await res.json();
      if (!Array.isArray(data) || !data[0]?.result?.data) return null;
      return data[0].result.data;
    } catch (err) {
      console.error('tRPC call error:', err);
      throw err;
    }
  }, []);

  const syncUp = useCallback(
    async (items?: Memory[]) => {
      try {
        // 仅非媒体字段
        const payload = {
          items: (items ?? memories).map((m) => ({
            id: m.id,
            title: m.title,
            content: m.content,
            date: m.date,
            location: m.location ?? null,
            people: m.people ?? [],
            tags: m.tags ?? [],
            emotions: m.emotions ?? [],
            visibility: m.visibility ?? 'private',
          })),
        };
        const result = await callTrpcApi('memory.syncUp', payload);
        notifications.show({
          title: '同步完成',
          message: '本地记忆已上行到服务器（仅非媒体字段）',
          color: 'green',
        });
        return result;
      } catch (error) {
        notifications.show({
          title: '同步失败',
          message: '上行失败',
          color: 'red',
        });
        throw error;
      }
    },
    [callTrpc, memories]
  );

  const syncDown = useCallback(
    async (opts?: { updatedSince?: Date; limit?: number }) => {
      try {
        const input = {
          updatedSince: opts?.updatedSince ?? undefined,
          limit: opts?.limit ?? undefined,
        };
        const result = await callTrpcApi('memory.syncDown', input);
        // 将下行数据与本地合并（仅非媒体字段）；简单策略：覆盖同 id 的元数据
        if (Array.isArray(result)) {
          setMemories((prev: Memory[]) => {
            const map = new Map<string, Memory>();
            for (const m of prev) map.set(m.id, m);
            for (const r of result) {
              const existing = map.get(r.id);
              const merged: Memory = existing
                ? {
                    ...existing,
                    title: r.title,
                    content: r.content,
                    date: new Date(r.date),
                    location: r.location ?? undefined,
                    people: r.people ?? [],
                    tags: r.tags ?? [],
                    emotions: r.emotions ?? [],
                    visibility: r.visibility ?? 'private',
                    createdAt: new Date(r.createdAt),
                    updatedAt: new Date(r.updatedAt),
                  }
                : ({
                    id: r.id,
                    userId: r.userId,
                    title: r.title,
                    content: r.content,
                    date: new Date(r.date),
                    location: r.location ?? undefined,
                    people: r.people ?? [],
                    tags: r.tags ?? [],
                    emotions: r.emotions ?? [],
                    visibility: r.visibility ?? 'private',
                    // 下行无媒体字段
                    createdAt: new Date(r.createdAt),
                    updatedAt: new Date(r.updatedAt),
                  } as Memory);
              map.set(r.id, merged);
            }
            return Array.from(map.values()).sort(
              (a, b) => b.date.getTime() - a.date.getTime()
            );
          });
        }
        notifications.show({
          title: '下载完成',
          message: '已从服务器拉取非媒体字段',
          color: 'green',
        });
        return result;
      } catch (error) {
        notifications.show({
          title: '下载失败',
          message: '下行失败',
          color: 'red',
        });
        throw error;
      }
    },
    [callTrpc]
  );

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
    syncUp,
    syncDown,
    exportTimelineJson,
  };
};
