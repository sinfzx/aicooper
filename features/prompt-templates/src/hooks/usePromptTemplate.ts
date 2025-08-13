import { useState, useEffect } from 'react';

type TemplateListItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  content: string;
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
    process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001'
  ).replace(/\/$/, '');

  useEffect(() => {
    loadTemplates();
  }, []);

  const loadTemplates = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${API_BASE}/api/prompt-templates?public=true&page=1&pageSize=50`
      );
      const data = await res.json();
      if (data?.success && Array.isArray(data?.data?.items)) {
        setTemplates(data.data.items);
      } else if (Array.isArray(data)) {
        setTemplates(data);
      } else {
        setTemplates([]);
      }
    } catch (error) {
      console.error('Failed to load templates:', error);
      setError('加载模板失败');
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
  };
};
