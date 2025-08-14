import { useState, useEffect } from 'react';

type TemplateListItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  content: string;
  localOnly?: boolean;
  serverId?: string | null;
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
};

// 临时类型定义
interface PromptTemplate {
  id: string;
  title: string;
  description: string;
  category: string;
  template: string;
}

export const usePromptTemplate = () => {
  const [templates, setTemplates] = useState<TemplateListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const API_BASE = (
    ((globalThis as any).process?.env?.NEXT_PUBLIC_API_BASE_URL as
      | string
      | undefined) || 'http://localhost:3001'
  ).replace(/\/$/, '');

  useEffect(() => {
    loadTemplates();
  }, []);

  const loadTemplates = async () => {
    try {
      setLoading(true);
      const list: TemplateListItem[] = [];
      // 服务器公开模板
      try {
        const res = await fetch(
          `${API_BASE}/api/prompt-templates?public=true&page=1&pageSize=50`
        );
        const data = await res.json();
        const serverItems: TemplateListItem[] =
          data?.success && Array.isArray(data?.data?.items)
            ? data.data.items
            : Array.isArray(data)
            ? data
            : [];
        list.push(
          ...serverItems.map((t: any) => ({
            id: t.id,
            title: t.title,
            description: t.description,
            category: t.category,
            content: t.content ?? t.prompt ?? '',
            localOnly: false,
            serverId: t.id,
            tags: Array.isArray(t.tags)
              ? t.tags.map((x: any) => x.name || x)
              : [],
            createdAt: t.createdAt || undefined,
            updatedAt: t.updatedAt || undefined,
          }))
        );
      } catch (e) {
        console.warn('Load server templates failed', e);
      }

      // 本地模板（Tauri）
      if (typeof window !== 'undefined' && (window as any).__TAURI__) {
        try {
          // @ts-ignore 动态导入在 web 环境下不存在类型
          const { invoke } = await import('@tauri-apps/api/core');
          const locals = (await invoke('get_local_prompt_templates')) as any[];
          const mapped: TemplateListItem[] = (locals || []).map((t: any) => ({
            id: t.id,
            title: t.title,
            description: t.description,
            category: t.category,
            content: t.content,
            localOnly: !!t.local_only,
            serverId: t.server_id || null,
            tags: Array.isArray(t.tags) ? t.tags : [],
            createdAt: t.created_at
              ? new Date(t.created_at).toISOString()
              : undefined,
            updatedAt: t.updated_at
              ? new Date(t.updated_at).toISOString()
              : undefined,
          }));
          // 过滤掉已在服务器存在同 serverId 的本地项，避免重复
          const serverIds = new Set(
            list.map((i) => i.serverId).filter(Boolean) as string[]
          );
          const finalLocals = mapped.filter(
            (m) => !m.serverId || !serverIds.has(m.serverId)
          );
          list.unshift(...finalLocals);
        } catch (e) {
          console.warn('Load local templates failed', e);
        }
      }

      setTemplates(list);
    } catch (error) {
      console.error('Failed to load templates:', error);
      setError('加载模板失败');
      setTemplates([]);
    } finally {
      setLoading(false);
    }
  };

  const createTemplate = async (templateData: any) => {
    try {
      // 本地保存分支（不经服务器）
      if (
        templateData.saveTarget === 'local' &&
        typeof window !== 'undefined' &&
        (window as any).__TAURI__
      ) {
        const { invoke } = await import('@tauri-apps/api/core');
        await invoke('save_local_prompt_template', {
          template: {
            id: '',
            title: templateData.title,
            description: templateData.description,
            category: templateData.category,
            content: templateData.content,
            parameters: templateData.parameters || [],
            article: templateData.article || null,
            tags: templateData.tags || [],
            is_public: false,
            local_only: true,
            created_at: 0,
            updated_at: 0,
          },
        });
        await loadTemplates();
        return;
      }

      const res = await fetch(`${API_BASE}/api/prompt-templates`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: templateData.title,
          description: templateData.description,
          prompt: templateData.content,
          category: templateData.category,
          parameters: templateData.parameters || [],
          article: templateData.article,
          tags: templateData.tags || [],
          isPublic: false,
          localOnly: true,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data?.success) throw new Error(data?.error || '创建失败');
      await loadTemplates();
    } catch (error) {
      console.error('Failed to create template:', error);
      throw error;
    }
  };

  const syncTemplate = async (localId: string) => {
    if (typeof window === 'undefined' || !(window as any).__TAURI__) return;
    // @ts-ignore
    const { invoke } = await import('@tauri-apps/api/core');
    await invoke('sync_local_prompt_template_to_server', { id: localId });
    await loadTemplates();
  };

  const downloadTemplate = async (serverId: string) => {
    if (typeof window === 'undefined' || !(window as any).__TAURI__) return;
    // @ts-ignore
    const { invoke } = await import('@tauri-apps/api/core');
    await invoke('download_prompt_template_from_server', { serverId });
    await loadTemplates();
  };

  const updateTemplate = async (
    id: string,
    updates: Partial<TemplateListItem>
  ) => {
    try {
      const res = await fetch(`${API_BASE}/api/prompt-templates/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || '更新失败');
      await loadTemplates();
    } catch (error) {
      console.error('Failed to update template:', error);
      throw error;
    }
  };

  const deleteTemplate = async (id: string) => {
    try {
      const res = await fetch(`${API_BASE}/api/prompt-templates/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || '删除失败');
      await loadTemplates();
    } catch (error) {
      console.error('Failed to delete template:', error);
      throw error;
    }
  };

  return {
    templates,
    loading,
    error,
    loadTemplates,
    createTemplate,
    updateTemplate,
    deleteTemplate,
    syncTemplate,
    downloadTemplate,
  };
};
