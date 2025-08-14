import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export interface TagItem {
  id: string;
  name: string;
  parentId?: string | null;
  level: number;
  parent?: { id: string; name: string } | null;
  children?: TagItem[];
}

type Cache = { data: TagItem[]; ts: number } | null;
const TAGS_CACHE_KEY = '__tags_cache__';
const CACHE_TTL = 30_000; // 30s

const getCache = (): Cache => {
  try {
    const raw =
      typeof window !== 'undefined'
        ? localStorage.getItem(TAGS_CACHE_KEY)
        : null;
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.ts > CACHE_TTL) return null;
    return parsed as Cache;
  } catch {
    return null;
  }
};

const setCache = (data: TagItem[]) => {
  try {
    if (typeof window === 'undefined') return;
    localStorage.setItem(
      TAGS_CACHE_KEY,
      JSON.stringify({ data, ts: Date.now() })
    );
  } catch {}
};

export function useTags() {
  const [tags, setTags] = useState<TagItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const API_BASE = (
    ((globalThis as any).process?.env?.NEXT_PUBLIC_API_BASE_URL as
      | string
      | undefined) || 'http://localhost:3001'
  ).replace(/\/$/, '');

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // use cache first
      const cache = getCache();
      if (cache) {
        setTags(cache.data);
      }

      if (abortRef.current) abortRef.current.abort();
      abortRef.current = new AbortController();

      const res = await fetch(`${API_BASE}/api/tags`, {
        signal: abortRef.current.signal,
      });
      const data = await res.json();
      if (!res.ok || !data?.success) throw new Error(data?.error || '加载失败');
      const items = Array.isArray(data.data) ? data.data : [];
      setTags(items);
      setCache(items);
    } catch (e: any) {
      if (e?.name === 'AbortError') return;
      setError(e?.message || '加载失败');
    } finally {
      setLoading(false);
    }
  }, [API_BASE]);

  useEffect(() => {
    load();
    return () => abortRef.current?.abort();
  }, [load]);

  const flat = useMemo(() => tags, [tags]);
  const root = useMemo(() => tags.filter((t) => !t.parentId), [tags]);

  return { tags, root, flat, loading, error, reload: load };
}
