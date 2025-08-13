"use client";

import React, { useEffect, useState } from 'react';

export default function AdminTagsPage() {
  const [tags, setTags] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [parentId, setParentId] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/tags');
      const data = await res.json();
      if (data.success) setTags(data.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const create = async () => {
    if (!name.trim()) return;
    setLoading(true);
    try {
      await fetch('/api/tags', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, parentId: parentId || null }),
      });
      setName("");
      setParentId(undefined);
      await load();
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: 16 }}>
      <h1>标签管理</h1>
      <section style={{ margin: '16px 0' }}>
        <input placeholder="标签名" value={name} onChange={(e) => setName(e.target.value)} />
        <select value={parentId || ''} onChange={(e) => setParentId(e.target.value || undefined)}>
          <option value="">无父标签</option>
          {tags.filter((t) => !t.parentId).map((t) => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>
        <button onClick={create} disabled={loading}>创建</button>
      </section>

      <section>
        {loading ? <p>加载中...</p> : (
          <ul>
            {tags.map((t) => (
              <li key={t.id}>
                {t.name} {t.parent ? `(父: ${t.parent.name})` : ''}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}


