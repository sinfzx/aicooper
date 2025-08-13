import { sampleMemories } from '../data/sampleMemories';

export async function initializeMemories() {
  try {
    // 检查是否在 Tauri 环境中
    if (typeof window === 'undefined' || !window.__TAURI__) {
      console.log('Not in Tauri environment, skipping memory initialization');
      return;
    }

    const { invoke } = await import('@tauri-apps/api/core');

    // 检查是否已有记忆数据
    const existingMemories = await invoke('get_memories', { filter: null });

    if (Array.isArray(existingMemories) && existingMemories.length > 0) {
      console.log('Memories already exist, skipping initialization');
      return;
    }

    // 创建示例记忆
    console.log('Initializing sample memories...');

    for (const memory of sampleMemories) {
      const request = {
        title: memory.title,
        content: memory.content,
        date: memory.date,
        location: memory.location,
        people: memory.people,
        tags: memory.tags,
        emotions: memory.emotions,
        visibility: memory.visibility,
      };

      await invoke('create_memory', { request });
    }

    console.log('Sample memories initialized successfully');
  } catch (error) {
    console.error('Failed to initialize memories:', error);
  }
}
