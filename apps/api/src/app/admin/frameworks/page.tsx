"use client";

import React, { useEffect, useState } from 'react';

export default function AdminFrameworksPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/knowledge-frameworks?page=1&pageSize=100');
      const data = await res.json();
      const list = data?.success ? (data.data?.items || data.data || []) : [];
      setItems(list);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const toggleBlock = async (id: string, isBlocked: boolean) => {
    setLoading(true);
    try {
      await fetch(`/api/knowledge-frameworks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isBlocked: !isBlocked })
      });
      await load();
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: 16 }}>
      <h1>知识框架屏蔽管理</h1>
      {loading ? <p>加载中...</p> : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>标题</th>
              <th style={{ textAlign: 'left' }}>作者</th>
              <th style={{ textAlign: 'left' }}>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {items.map((t: any) => (
              <tr key={t.id}>
                <td style={{ padding: '6px 8px' }}>{t.title || t.name}</td>
                <td style={{ padding: '6px 8px' }}>{t.author?.name || '-'}</td>
                <td style={{ padding: '6px 8px' }}>{t.isBlocked ? '已屏蔽' : '正常'}</td>
                <td style={{ textAlign: 'center' }}>
                  <button onClick={() => toggleBlock(t.id, !!t.isBlocked)} disabled={loading}>
                    {t.isBlocked ? '取消屏蔽' : '屏蔽'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}


