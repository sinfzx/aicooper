import { useEffect, useState } from 'react';

export const useTags = () => {
  const [tags, setTags] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const API_BASE = (
        ((globalThis as any).process?.env?.NEXT_PUBLIC_API_BASE_URL as
          | string
          | undefined) || 'http://localhost:3001'
      ).replace(/\/$/, '');
      try {
        setLoading(true);
        // 从缓存读取
        try {
          const cached =
            typeof window !== 'undefined'
              ? window.localStorage.getItem('tags_cache')
              : null;
          if (cached) {
            const obj = JSON.parse(cached);
            if (Array.isArray(obj) && obj.length) setTags(obj);
          }
        } catch {}

        const res = await fetch(`${API_BASE}/api/tags`);
        const data = await res.json();
        if (res.ok && data?.success && Array.isArray(data.data)) {
          setTags(data.data);
          try {
            if (typeof window !== 'undefined')
              window.localStorage.setItem(
                'tags_cache',
                JSON.stringify(data.data)
              );
          } catch {}
        }
      } catch (e: any) {
        setError(e?.message || '加载标签失败');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { tags, loading, error };
};
