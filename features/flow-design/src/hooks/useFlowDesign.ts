import { useState, useEffect } from 'react';
import { FlowDesign } from '@my-platform/types';

export interface UseFlowDesignOptions {
  flowId?: string;
  autoLoad?: boolean;
}

export interface UseFlowDesignReturn {
  flow: FlowDesign | null;
  flows: FlowDesign[];
  loading: boolean;
  error: string | null;
  createFlow: (flowData: Partial<FlowDesign>) => Promise<FlowDesign>;
  updateFlow: (
    flowId: string,
    updates: Partial<FlowDesign>
  ) => Promise<FlowDesign>;
  deleteFlow: (flowId: string) => Promise<void>;
  loadFlow: (flowId: string) => Promise<FlowDesign>;
  loadFlows: () => Promise<FlowDesign[]>;
  duplicateFlow: (flowId: string) => Promise<FlowDesign>;
  syncFlow: (localId: string) => Promise<string | void>;
  downloadFlow: (serverId: string) => Promise<void>;
}

export const useFlowDesign = (
  options: UseFlowDesignOptions = {}
): UseFlowDesignReturn => {
  const { flowId, autoLoad = true } = options;
  const API_BASE = (
    ((globalThis as any).process?.env?.NEXT_PUBLIC_API_BASE_URL as
      | string
      | undefined) || 'http://localhost:3001'
  ).replace(/\/$/, '');

  const [flow, setFlow] = useState<FlowDesign | null>(null);
  const [flows, setFlows] = useState<FlowDesign[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (autoLoad) {
      if (flowId) {
        loadFlow(flowId);
      } else {
        loadFlows();
      }
    }
  }, [flowId, autoLoad]);

  const loadFlow = async (id: string): Promise<FlowDesign> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE}/api/flows/${id}`);
      const data = await response.json();

      if (data.success) {
        setFlow(data.data);
        return data.data;
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to load flow';
      setError(errorMessage);
      // 不再向上传播，避免 useEffect 未捕获 Promise 拒绝
      // 返回一个占位对象用于 UI 兜底
      return Promise.reject(err);
    } finally {
      setLoading(false);
    }
  };

  const loadFlows = async (): Promise<FlowDesign[]> => {
    setLoading(true);
    setError(null);

    try {
      const combined: FlowDesign[] = [];
      // 服务器列表
      try {
        const response = await fetch(`${API_BASE}/api/flows`);
        const data = await response.json();
        if (data.success) {
          const items = Array.isArray(data.data?.items) ? data.data.items : [];
          combined.push(...items);
        }
      } catch (e) {
        console.warn('Load server flows failed', e);
      }

      // 本地列表（Tauri）
      if (typeof window !== 'undefined' && (window as any).__TAURI__) {
        try {
          // @ts-ignore 动态导入在 web 环境下不存在类型
          const { invoke } = await import('@tauri-apps/api/core');
          const locals = (await invoke('get_local_flows')) as any[];
          const mapped = (locals || []).map(
            (f: any) =>
              ({
                id: f.id,
                title: f.title,
                description: f.description,
                tags: f.tags || [],
                isPublic: !!f.is_public,
                isBlocked: false,
                authorId: 'local',
                authorName: 'local',
                createdAt: new Date(f.created_at || Date.now()).toISOString(),
                updatedAt: new Date(f.updated_at || Date.now()).toISOString(),
                syncedAt: f.server_id ? new Date().toISOString() : undefined,
                localOnly: !!f.local_only,
                type: 'flow',
                article: f.article || '',
                steps: [],
                tools: [],
                totalTime: f.total_time || undefined,
                difficulty: (f.difficulty as any) || 'medium',
                prerequisites: [],
                outcomes: [],
                serverId: f.server_id || null,
              } as any)
          );
          const serverIds = new Set(
            combined.map((i: any) => i.serverId || i.id)
          );
          const finalLocals = mapped.filter(
            (m: any) => !m.serverId || !serverIds.has(m.serverId)
          );
          combined.unshift(...finalLocals);
        } catch (e) {
          console.warn('Load local flows failed', e);
        }
      }

      setFlows(combined);
      return combined;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to load flows';
      setError(errorMessage);
      setFlows([]);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const createFlow = async (
    flowData: Partial<FlowDesign> & {
      tags?: string[];
      saveTarget?: 'local' | 'sync';
    }
  ): Promise<FlowDesign> => {
    setLoading(true);
    setError(null);

    try {
      // 本地保存分支
      if (
        flowData.saveTarget === 'local' &&
        typeof window !== 'undefined' &&
        (window as any).__TAURI__
      ) {
        // @ts-ignore
        const { invoke } = await import('@tauri-apps/api/core');
        const now = Date.now();
        const saved = (await invoke('save_local_flow', {
          flow: {
            id: '',
            title: flowData.title,
            description: flowData.description,
            difficulty: flowData.difficulty || 'medium',
            total_time: (flowData as any).totalTime || null,
            article: (flowData as any).article || null,
            steps: (flowData as any).steps || [],
            tools: (flowData as any).tools || [],
            tags: flowData.tags || [],
            local_only: true,
            created_at: 0,
            updated_at: 0,
          },
        })) as any;
        setFlows((prev) => [saved, ...prev]);
        return saved as FlowDesign;
      }

      const response = await fetch(`${API_BASE}/api/flows`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(flowData),
      });

      const data = await response.json();

      if (data.success) {
        const newFlow = data.data;
        setFlows((prev) => [newFlow, ...prev]);
        return newFlow;
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to create flow';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateFlow = async (
    id: string,
    updates: Partial<FlowDesign>
  ): Promise<FlowDesign> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE}/api/flows/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });

      const data = await response.json();

      if (data.success) {
        const updatedFlow = data.data;
        setFlows((prev) => prev.map((f) => (f.id === id ? updatedFlow : f)));
        if (flow?.id === id) {
          setFlow(updatedFlow);
        }
        return updatedFlow;
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to update flow';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteFlow = async (id: string): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE}/api/flows/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        setFlows((prev) => prev.filter((f) => f.id !== id));
        if (flow?.id === id) {
          setFlow(null);
        }
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to delete flow';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const duplicateFlow = async (id: string): Promise<FlowDesign> => {
    const originalFlow = flows.find((f) => f.id === id) || flow;
    if (!originalFlow) {
      throw new Error('Flow not found');
    }

    const duplicatedFlow = {
      ...originalFlow,
      title: `${originalFlow.title} (副本)`,
      id: undefined, // 让服务器生成新ID
      createdAt: undefined,
      updatedAt: undefined,
    };

    return createFlow(duplicatedFlow);
  };

  const syncFlow = async (localId: string): Promise<string | void> => {
    if (typeof window === 'undefined' || !(window as any).__TAURI__) return;
    // @ts-ignore
    const { invoke } = await import('@tauri-apps/api/core');
    const serverId = (await invoke('sync_local_flow_to_server', {
      id: localId,
    })) as string;
    await loadFlows();
    return serverId;
  };

  const downloadFlow = async (serverId: string): Promise<void> => {
    if (typeof window === 'undefined' || !(window as any).__TAURI__) return;
    // @ts-ignore
    const { invoke } = await import('@tauri-apps/api/core');
    await invoke('download_flow_from_server', { serverId });
    await loadFlows();
  };

  return {
    flow,
    flows,
    loading,
    error,
    createFlow,
    updateFlow,
    deleteFlow,
    loadFlow,
    loadFlows,
    duplicateFlow,
    syncFlow,
    downloadFlow,
  };
};
