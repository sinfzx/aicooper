"use client";

import React, { useEffect, useMemo, useState } from 'react';

export default function AdminTagsPage() {
  const [tags, setTags] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [parentId, setParentId] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState<Record<string, { name: string; parentId: string | null }>>({});

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

  const startEdit = (t: any) => {
    setEditing((prev) => ({
      ...prev,
      [t.id]: { name: t.name, parentId: t.parentId || null }
    }));
  };

  const cancelEdit = (id: string) => {
    setEditing((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const saveEdit = async (id: string) => {
    const draft = editing[id];
    if (!draft || !draft.name.trim()) return;
    setLoading(true);
    try {
      await fetch(`/api/tags/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: draft.name, parentId: draft.parentId })
      });
      cancelEdit(id);
      await load();
    } finally {
      setLoading(false);
    }
  };

  const remove = async (id: string) => {
    if (!confirm('确定删除该标签？其子标签的父级将被清空。')) return;
    setLoading(true);
    try {
      await fetch(`/api/tags/${id}`, { method: 'DELETE' });
      await load();
    } finally {
      setLoading(false);
    }
  };

  const parentOptions = useMemo(() => tags.filter((t) => !t.parentId), [tags]);

  return (
    <main style={{ padding: 16 }}>
      <h1>标签管理</h1>
      <section style={{ margin: '16px 0' }}>
        <input placeholder="标签名" value={name} onChange={(e) => setName(e.target.value)} />
        <select value={parentId || ''} onChange={(e) => setParentId(e.target.value || undefined)}>
          <option value="">无父标签</option>
          {parentOptions.map((t) => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>
        <button onClick={create} disabled={loading}>创建</button>
      </section>

      <section>
        {loading ? <p>加载中...</p> : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>名称</th>
                <th style={{ textAlign: 'left' }}>父标签</th>
                <th style={{ textAlign: 'left' }}>操作</th>
              </tr>
            </thead>
            <tbody>
              {tags.map((t) => {
                const isEditing = !!editing[t.id];
                const draft = editing[t.id];
                return (
                  <tr key={t.id}>
                    <td style={{ padding: '4px 8px' }}>
                      {isEditing ? (
                        <input
                          value={draft!.name}
                          onChange={(e) => setEditing((prev) => ({ ...prev, [t.id]: { ...draft!, name: e.target.value } }))}
                        />
                      ) : (
                        <span>{t.name}</span>
                      )}
                    </td>
                    <td style={{ padding: '4px 8px' }}>
                      {isEditing ? (
                        <select
                          value={draft!.parentId || ''}
                          onChange={(e) => setEditing((prev) => ({ ...prev, [t.id]: { ...draft!, parentId: e.target.value || null } }))}
                        >
                          <option value="">无父标签</option>
                          {parentOptions.filter((p) => p.id !== t.id).map((p) => (
                            <option key={p.id} value={p.id}>{p.name}</option>
                          ))}
                        </select>
                      ) : (
                        <span>{t.parent ? t.parent.name : '-'}</span>
                      )}
                    </td>
                    <td style={{ padding: '4px 8px' }}>
                      {!isEditing ? (
                        <>
                          <button onClick={() => startEdit(t)} disabled={loading}>编辑</button>
                          <button onClick={() => remove(t.id)} disabled={loading} style={{ marginLeft: 8 }}>删除</button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => saveEdit(t.id)} disabled={loading}>保存</button>
                          <button onClick={() => cancelEdit(t.id)} disabled={loading} style={{ marginLeft: 8 }}>取消</button>
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </section>
    </main>
  );
}


