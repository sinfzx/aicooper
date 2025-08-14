import { useCallback, useState } from 'react';

export function useSquare() {
  const [loading, setLoading] = useState(false);

  const callTrpc = useCallback(async (path: string, input: any) => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
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
    return data?.[0]?.result?.data ?? null;
  }, []);

  const list = useCallback(
    async (page = 1, pageSize = 20, sortBy: 'time' | 'hot' = 'time') => {
      return callTrpc('ideaverify.square.list', { page, pageSize, sortBy });
    },
    [callTrpc]
  );

  const get = useCallback(
    async (id: string) => {
      return callTrpc('ideaverify.square.get', { id });
    },
    [callTrpc]
  );

  const publish = useCallback(
    async (payload: any) => {
      setLoading(true);
      try {
        return await callTrpc('ideaverify.square.publish', payload);
      } finally {
        setLoading(false);
      }
    },
    [callTrpc]
  );

  const vote = useCallback(
    async (postId: string, value: 1 | -1) => {
      return callTrpc('ideaverify.square.vote', {
        postId,
        value: String(value),
      });
    },
    [callTrpc]
  );

  const remove = useCallback(
    async (id: string) => {
      return callTrpc('ideaverify.square.delete', { id });
    },
    [callTrpc]
  );

  return { loading, list, get, publish, vote, remove };
}
