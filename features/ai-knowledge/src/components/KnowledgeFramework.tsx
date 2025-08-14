import React, { useState, useEffect, useCallback } from 'react'
import {
  Card,
  Text,
  Button,
  Stack,
  Group,
  Select,
  Badge,
  Paper,
  Loader,
  Alert,
  ActionIcon,
  Collapse,
  Divider,
  Box,
  Title,
  TextInput,
  Textarea
} from '@mantine/core'
import {
  IconBrain,
  IconFolder,
  IconFolderOpen,
  IconFile,
  IconRobot,
  IconEye,
  IconEyeOff,
  IconSearch,
  IconChevronDown,
  IconChevronRight,
  IconEdit,
  IconTrash,
  IconCheck,
  IconX
} from '@tabler/icons-react'
import { KnowledgeFramework as KnowledgeFrameworkType, KnowledgeNode, SearchProvider } from '@my-platform/types'
import { builtInFrameworks } from '@/data/builtInFrameworks'

// Safely import Tauri API with fallback
const getTauriInvoke = async () => {
  try {
    if (typeof window !== 'undefined' && (window as any).__TAURI__) {
      const { invoke } = await import('@tauri-apps/api/core');
      return invoke;
    }
  } catch (error) {
    console.warn('Tauri API not available:', error);
  }
  return null;
};

const API_BASE = (
  ((globalThis as any).process?.env?.NEXT_PUBLIC_API_BASE_URL as string | undefined) ||
  'http://localhost:3001'
).replace(/\/$/, '');

interface NodeComponentProps {
  node: KnowledgeNode
  onToggleExpand: (nodeId: string) => void
  onGenerateChildren: (node: KnowledgeNode) => void
  onGenerateChildrenFromUrls: (node: KnowledgeNode) => void
  onSearch: (query: string) => void
  searchProviders: SearchProvider[]
  onUpdateNode: (nodeId: string, updates: { title?: string; description?: string; questions?: string[] }) => void
  onDeleteNode: (nodeId: string) => void
}

const NodeComponent: React.FC<NodeComponentProps> = ({
  node,
  onToggleExpand,
  onGenerateChildren,
  onSearch,
  onGenerateChildrenFromUrls,
  searchProviders,
  onUpdateNode,
  onDeleteNode
}) => {
  const [showQuestions, setShowQuestions] = useState(false)
  const [editing, setEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(node.title)
  const [editDescription, setEditDescription] = useState(node.description || '')
  const [editQuestions, setEditQuestions] = useState<string>((node.questions || []).join('\n'))

  const getNodeIcon = () => {
    if (node.children.length > 0) {
      return node.expanded ? <IconFolderOpen size={18} /> : <IconFolder size={18} />
    }
    return <IconFile size={18} />
  }

  return (
    <Box mb="md">
      <Card shadow="sm" padding="md" radius="md" withBorder>
        <Group justify="space-between" mb="xs">
          <Group gap="sm">
            <ActionIcon
              variant="subtle"
              onClick={() => onToggleExpand(node.id)}
              size="sm"
            >
              {getNodeIcon()}
            </ActionIcon>
            <Title order={4} size="md">{node.title}</Title>
          </Group>

          <Group gap="xs">
            <ActionIcon
              variant="subtle"
              onClick={() => setShowQuestions(!showQuestions)}
              size="sm"
            >
              {showQuestions ? <IconEyeOff size={16} /> : <IconEye size={16} />}
            </ActionIcon>
            <ActionIcon variant="subtle" size="sm" onClick={() => setEditing(!editing)}>
              <IconEdit size={16} />
            </ActionIcon>
            <ActionIcon variant="subtle" color="red" size="sm" onClick={() => onDeleteNode(node.id)}>
              <IconTrash size={16} />
            </ActionIcon>
            <Button
              variant="light"
              size="xs"
              leftSection={<IconRobot size={14} />}
              onClick={() => onGenerateChildren(node)}
            >
              AI扩展
            </Button>
            <Button
              variant="light"
              size="xs"
              leftSection={<IconRobot size={14} />}
              onClick={() => onGenerateChildrenFromUrls(node)}
            >
              URL扩展
            </Button>
          </Group>
        </Group>

        {!editing && node.description && (
          <Text size="sm" c="dimmed" mb="sm">
            {node.description}
          </Text>
        )}

        {editing && (
          <Stack gap="xs" mb="sm">
            <TextInput label="标题" value={editTitle} onChange={(e) => setEditTitle(e.currentTarget.value)} />
            <Textarea label="描述" value={editDescription} onChange={(e) => setEditDescription(e.currentTarget.value)} minRows={2} />
            <Textarea label="问题（每行一个）" value={editQuestions} onChange={(e) => setEditQuestions(e.currentTarget.value)} minRows={3} />
            <Group justify="flex-end" gap="xs">
              <Button size="xs" variant="light" leftSection={<IconX size={14} />} onClick={() => {
                setEditing(false)
                setEditTitle(node.title)
                setEditDescription(node.description || '')
                setEditQuestions((node.questions || []).join('\n'))
              }}>取消</Button>
              <Button size="xs" leftSection={<IconCheck size={14} />} onClick={() => {
                onUpdateNode(node.id, {
                  title: editTitle,
                  description: editDescription,
                  questions: editQuestions.split('\n').map(s => s.trim()).filter(Boolean)
                })
                setEditing(false)
              }}>保存</Button>
            </Group>
          </Stack>
        )}

        <Collapse in={showQuestions && node.questions.length > 0}>
          <Paper p="sm" bg="gray.0" radius="sm" mt="sm">
            <Text size="sm" fw={500} mb="xs">相关问题：</Text>
            <Stack gap="xs">
              {node.questions.map((question, index) => (
                <Group key={index} justify="space-between" align="flex-start">
                  <Text size="sm" style={{ flex: 1 }}>
                    • {question}
                  </Text>
                  <Group gap="xs">
                    {searchProviders.filter(p => p.enabled).map(provider => (
                      <ActionIcon
                        key={provider.id}
                        size="xs"
                        variant="light"
                        onClick={() => onSearch(`${question} ${node.title}`)}
                        title={`在${provider.name}中搜索`}
                      >
                        <IconSearch size={12} />
                      </ActionIcon>
                    ))}
                  </Group>
                </Group>
              ))}
            </Stack>
          </Paper>
        </Collapse>
      </Card>

      <Collapse in={node.expanded && node.children.length > 0}>
        <Box ml="xl" pl="md" style={{ borderLeft: '2px solid var(--mantine-color-gray-3)' }}>
          <Stack gap="sm" mt="sm">
            {node.children.map(child => (
              <NodeComponent
                key={child.id}
                node={child}
                onToggleExpand={onToggleExpand}
                onGenerateChildren={onGenerateChildren}
                onGenerateChildrenFromUrls={onGenerateChildrenFromUrls}
                onSearch={onSearch}
                searchProviders={searchProviders}
                onUpdateNode={onUpdateNode}
                onDeleteNode={onDeleteNode}
              />
            ))}
          </Stack>
        </Box>
      </Collapse>
    </Box>
  )
}

export const KnowledgeFramework: React.FC = () => {
  const [frameworks, setFrameworks] = useState<KnowledgeFrameworkType[]>([])
  const [selectedFramework, setSelectedFramework] = useState<KnowledgeFrameworkType | null>(null)
  const [searchProviders, setSearchProviders] = useState<SearchProvider[]>([])
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    loadFrameworks()
    loadSearchProviders()
  }, [])

  const loadFrameworks = async () => {
    try {
      const invoke = await getTauriInvoke();
      if (!invoke) {
        // Fallback to built-in frameworks if Tauri is not available
        setFrameworks(builtInFrameworks);
        if (builtInFrameworks.length > 0 && !selectedFramework) {
          setSelectedFramework(builtInFrameworks[0]);
        }
        return;
      }

      let frameworks = await invoke<KnowledgeFrameworkType[]>('get_knowledge_frameworks')

      // 如果没有框架，初始化内置框架
      if (frameworks.length === 0) {
        for (const framework of builtInFrameworks) {
          await invoke('save_knowledge_framework', { framework })
        }
        frameworks = builtInFrameworks
      }

      setFrameworks(frameworks)
      if (frameworks.length > 0 && !selectedFramework) {
        setSelectedFramework(frameworks[0])
      }
    } catch (error) {
      console.error('Failed to load frameworks:', error)
      // Fallback to built-in frameworks on error
      setFrameworks(builtInFrameworks);
      if (builtInFrameworks.length > 0 && !selectedFramework) {
        setSelectedFramework(builtInFrameworks[0]);
      }
    }
  }

  const loadSearchProviders = async () => {
    try {
      const invoke = await getTauriInvoke();
      if (!invoke) {
        // Fallback to default search providers
        const defaultProviders: SearchProvider[] = [
          {
            id: 'google',
            name: 'Google',
            icon: '🔍',
            baseUrl: 'https://www.google.com/search',
            searchParam: 'q',
            enabled: true
          }
        ];
        setSearchProviders(defaultProviders);
        return;
      }

      const providers = await invoke<SearchProvider[]>('get_search_providers')
      setSearchProviders(providers)
    } catch (error) {
      console.error('Failed to load search providers:', error)
      // Fallback to default providers
      const defaultProviders: SearchProvider[] = [
        {
          id: 'google',
          name: 'Google',
          icon: '🔍',
          baseUrl: 'https://www.google.com/search',
          searchParam: 'q',
          enabled: true
        }
      ];
      setSearchProviders(defaultProviders);
    }
  }

  const handleToggleExpand = useCallback((nodeId: string) => {
    if (!selectedFramework) return

    const findNodeById = (nodes: KnowledgeNode[], id: string): any | null => {
      for (const n of nodes) {
        if (n.id === id) return n as any;
        if (n.children?.length) {
          const f = findNodeById(n.children, id);
          if (f) return f;
        }
      }
      return null;
    };

    const targetBefore = findNodeById(selectedFramework.rootNodes, nodeId);
    const prevExpanded = !!(targetBefore && (targetBefore as any).expanded);

    // 如果没有 serverId，则尝试根据 title+level+序号匹配到服务端 id（简化版映射）
    const ensureServerIds = (fw: any) => {
      if (fw && fw.serverId) return fw;
      // 这里可以根据远端接口补充完整映射逻辑；当前占位
      return fw;
    };
    const frameworkForSync = ensureServerIds(selectedFramework as any);

    const updateNodeExpansion = (nodes: KnowledgeNode[]): KnowledgeNode[] => {
      return nodes.map(node => {
        if (node.id === nodeId) {
          return { ...node, expanded: !node.expanded }
        }
        if (node.children.length > 0) {
          return { ...node, children: updateNodeExpansion(node.children) }
        }
        return node
      })
    }

    const updatedFramework = {
      ...selectedFramework,
      rootNodes: updateNodeExpansion(selectedFramework.rootNodes),
      updatedAt: new Date().toISOString()
    }

    setSelectedFramework(updatedFramework)

    // 保存到本地 (如果Tauri可用)
    getTauriInvoke().then(invoke => {
      if (invoke) {
        invoke('save_knowledge_framework', { framework: updatedFramework })
          .catch(error => console.error('Failed to save framework:', error));
      }
    });

    // 可选：同步服务端节点展开状态（需要 serverId 映射）
    try {
      const serverFrameworkId = (frameworkForSync as any).serverId;
      const serverNodeId = (targetBefore as any)?.serverId;
      const shouldSync = (() => {
        try {
          const raw = typeof window !== 'undefined' ? window.localStorage.getItem('settings_cache') : null;
          if (!raw) return false;
          const s = JSON.parse(raw);
          return !!s?.framework_sync_expanded;
        } catch { return false; }
      })();
      if (shouldSync && serverFrameworkId && serverNodeId) {
        const newExpanded = !prevExpanded;
        fetch(`${API_BASE}/api/frameworks/${serverFrameworkId}/nodes/${serverNodeId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ expanded: newExpanded })
        }).catch(() => {});
      }
    } catch {}
  }, [selectedFramework])

  const handleGenerateChildren = async (parentNode: KnowledgeNode) => {
    if (!selectedFramework) return

    setIsGenerating(true)
    try {
      const invoke = await getTauriInvoke();
      if (!invoke) {
        alert('AI扩展功能需要在桌面应用中使用');
        return;
      }

      // 获取用户的 API Key
      const apiKeys = await invoke<any[]>('get_api_keys')
      const defaultKey = apiKeys.find(k => k.is_default && k.is_active) || apiKeys[0]

      let response: string
      if (defaultKey) {
        response = await invoke<string>('generate_child_nodes', {
          provider: defaultKey.provider,
          apiKey: defaultKey.api_key,
          model: defaultKey.model || 'gpt-3.5-turbo',
          parentTitle: parentNode.title,
          parentDescription: parentNode.description || '',
          domainContext: selectedFramework.domain,
          nodeCount: 3,
          targetUser: '进阶学习者',
          baseUrl: defaultKey.base_url || null
        })
      } else {
        // 使用兜底服务
        response = await invoke<string>('generate_child_nodes', {
          provider: 'pollinations',
          apiKey: '',
          model: '',
          parentTitle: parentNode.title,
          parentDescription: parentNode.description || '',
          domainContext: selectedFramework.domain,
          nodeCount: 3,
          targetUser: '进阶学习者',
          baseUrl: null
        })
      }

      // 解析 AI 响应并创建子节点
      const childNodes = parseAIResponseToNodes(response, parentNode.level + 1)

      // 更新框架
      const updateNodeChildren = (nodes: KnowledgeNode[]): KnowledgeNode[] => {
        return nodes.map(node => {
          if (node.id === parentNode.id) {
            return {
              ...node,
              children: [...node.children, ...childNodes],
              expanded: true
            }
          }
          if (node.children.length > 0) {
            return { ...node, children: updateNodeChildren(node.children) }
          }
          return node
        })
      }

      const updatedFramework = {
        ...selectedFramework,
        rootNodes: updateNodeChildren(selectedFramework.rootNodes),
        updatedAt: new Date().toISOString()
      }

      setSelectedFramework(updatedFramework)
      await invoke('save_knowledge_framework', { framework: updatedFramework })

    } catch (error) {
      console.error('Failed to generate child nodes:', error)
      alert(`生成失败: ${error}`)
    } finally {
      setIsGenerating(false)
    }
  }

  const extractJson = (text: string): any | null => {
    try {
      const fenced = text.match(/```json([\s\S]*?)```/i);
      const raw = fenced ? fenced[1] : text;
      const start = raw.indexOf('{');
      const end = raw.lastIndexOf('}');
      if (start >= 0 && end > start) {
        const slice = raw.substring(start, end + 1);
        return JSON.parse(slice);
      }
    } catch {}
    return null;
  };

  const handleGenerateChildrenFromUrls = async (parentNode: KnowledgeNode) => {
    if (!selectedFramework) return;
    const input = window.prompt('请输入1-3个URL，换行分隔');
    if (!input) return;
    const urls = input
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean)
      .slice(0, 3);
    if (urls.length === 0) return;

    setIsGenerating(true);
    try {
      let template = '';
      try {
        // @ts-ignore 仅桌面端存在该路径
        const mod: any = await import('@/prompts/framework-prompts');
        template = mod.URL_SUMMARY_PROMPT || '';
      } catch {}

      // 抓取 URL 文本内容
      const invoke = await getTauriInvoke();
      let fetchedContents: string[] = [];
      if (invoke) {
        try {
          fetchedContents = await Promise.all(
            urls.map(async (u) => {
              try { return await invoke('fetch_url_text', { url: u }) as unknown as string } catch { return '' }
            })
          );
        } catch {}
      }
      const combined = fetchedContents
        .map((c, i) => `# Source ${i+1}: ${urls[i]}\n${(c || '').slice(0, 3000)}`)
        .join('\n\n');

      const filled = template
        .replace('{urls}', urls.map((u) => `- ${u}`).join('\n'))
        .replace('{parentTitle}', parentNode.title)
        .replace('{parentContent}', (parentNode.content || ''))
        .replace('{domain}', selectedFramework.domain)
        .replace('{level}', String((parentNode as any).level ? (parentNode as any).level + 1 : 1))
        .concat(`\n\n---\n请基于以下抓取内容进行更准确的要点提取与子节点生成：\n${combined}`);

      let text = '';
      if (invoke) {
        const keys = await invoke<any[]>('get_api_keys');
        const def = keys.find((k) => k.is_default && k.is_active) || keys[0];
        if (def) {
          const messages = [{ role: 'user', content: filled }];
          text = await invoke<string>('chat_with_ai', {
            provider: def.provider,
            apiKey: def.api_key,
            model: def.model || 'gpt-3.5-turbo',
            messages,
            baseUrl: def.base_url || null,
          });
        }
      }
      if (!text) {
        const res = await fetch('https://text.pollinations.ai/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: [{ role: 'user', content: filled }], model: 'openai', jsonMode: false }),
        });
        text = await res.text();
      }

      const json = extractJson(text);
      const nodesArr = json?.nodes || [];
      if (!Array.isArray(nodesArr) || nodesArr.length === 0) return;

      const level = (parentNode as any).level ? (parentNode as any).level + 1 : 1;
      const newNodes: KnowledgeNode[] = nodesArr.map((n: any, idx: number) => ({
        id: `node-${Date.now()}-${idx}`,
        title: n.title || `子节点-${idx + 1}`,
        content: n.content || '',
        questions: Array.isArray(n.questions) ? n.questions : [],
        urls: [],
        parentId: parentNode.id,
        children: [],
        level,
        expanded: false,
        position: { x: idx * 200, y: level * 150 },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }));

      const updateNodeChildren = (nodes: KnowledgeNode[]): KnowledgeNode[] =>
        nodes.map((node) =>
          node.id === parentNode.id
            ? { ...node, children: [...node.children, ...newNodes], expanded: true }
            : { ...node, children: node.children.length ? updateNodeChildren(node.children) : [] }
        );

      const updatedFramework = {
        ...selectedFramework,
        rootNodes: updateNodeChildren(selectedFramework.rootNodes),
        updatedAt: new Date().toISOString(),
      };
      setSelectedFramework(updatedFramework);
      const inv2 = await getTauriInvoke();
      if (inv2) await inv2('save_knowledge_framework', { framework: updatedFramework });
    } catch (e) {
      console.error('URL 扩展失败:', e);
      alert('URL 扩展失败');
    } finally {
      setIsGenerating(false);
    }
  };

  const updateNodeLocal = (nodeId: string, updates: { title?: string; description?: string; questions?: string[] }) => {
    if (!selectedFramework) return;
    const patch = (nodes: KnowledgeNode[]): KnowledgeNode[] => nodes.map(n => {
      if (n.id === nodeId) {
        return {
          ...n,
          ...(updates.title !== undefined ? { title: updates.title } : {}),
          ...(updates.description !== undefined ? { description: updates.description } : {}),
          ...(updates.questions !== undefined ? { questions: updates.questions } : {}),
          updatedAt: new Date().toISOString() as any,
        } as any;
      }
      return { ...n, children: n.children && n.children.length ? patch(n.children) : [] } as any;
    });
    const updated = { ...selectedFramework, rootNodes: patch(selectedFramework.rootNodes) } as any;
    setSelectedFramework(updated);
    getTauriInvoke().then(inv => { if (inv) inv('save_knowledge_framework', { framework: updated }); });
  };

  const deleteNodeLocal = (nodeId: string) => {
    if (!selectedFramework) return;
    const remove = (nodes: KnowledgeNode[]): KnowledgeNode[] => nodes
      .filter(n => n.id !== nodeId)
      .map(n => ({ ...n, children: n.children && n.children.length ? remove(n.children) : [] } as any));
    const updated = { ...selectedFramework, rootNodes: remove(selectedFramework.rootNodes), updatedAt: new Date().toISOString() } as any;
    setSelectedFramework(updated);
    getTauriInvoke().then(inv => { if (inv) inv('save_knowledge_framework', { framework: updated }); });
  };

  const parseAIResponseToNodes = (response: string, level: number): KnowledgeNode[] => {
    const nodes: KnowledgeNode[] = []
    const sections = response.split('---').filter(s => s.trim())

    sections.forEach((section, index) => {
      const lines = section.trim().split('\n')
      let title = ''
      let description = ''
      const questions: string[] = []

      for (const line of lines) {
        if (line.startsWith('## ')) {
          title = line.replace('## ', '').replace(/节点\d+：/, '').trim()
        } else if (line.startsWith('**描述**：')) {
          description = line.replace('**描述**：', '').trim()
        } else if (line.match(/^\d+\. /)) {
          questions.push(line.replace(/^\d+\. /, '').trim())
        }
      }

      if (title) {
        nodes.push({
          id: `node-${Date.now()}-${index}`,
          title,
          description: description || undefined,
          children: [],
          questions,
          urls: [],
          expanded: false,
          level,
          position: { x: index * 200, y: level * 150 }
        })
      }
    })

    return nodes
  }

  const handleSearch = async (query: string) => {
    try {
      const invoke = await getTauriInvoke();
      if (!invoke) {
        // Fallback to direct search URL
        const enabledProviders = searchProviders.filter(p => p.enabled)
        if (enabledProviders.length > 0) {
          const provider = enabledProviders[0];
          const searchUrl = `${provider.baseUrl}?${provider.searchParam}=${encodeURIComponent(query)}`;
          window.open(searchUrl, '_blank');
        }
        return;
      }

      const enabledProviders = searchProviders.filter(p => p.enabled)
      if (enabledProviders.length > 0) {
        const searchUrl = await invoke<string>('search_with_provider', {
          providerId: enabledProviders[0].id,
          query
        })

        // 使用 Tauri 的 opener 插件打开搜索链接
        await invoke('plugin:opener|open', { path: searchUrl })
      }
    } catch (error) {
      console.error('Search failed:', error)
      // Fallback to direct search
      const enabledProviders = searchProviders.filter(p => p.enabled)
      if (enabledProviders.length > 0) {
        const provider = enabledProviders[0];
        const searchUrl = `${provider.baseUrl}?${provider.searchParam}=${encodeURIComponent(query)}`;
        window.open(searchUrl, '_blank');
      }
    }
  }

  return (
    <Stack gap="lg" p="md">
      <Group justify="space-between">
        <Stack gap="xs">
          <Group>
            <IconBrain size={28} color="var(--mantine-color-blue-6)" />
            <Title order={2}>知识框架</Title>
          </Group>
          <Text c="dimmed">系统性地构建和管理领域知识</Text>
        </Stack>

        <Select
          placeholder="选择知识框架"
          value={selectedFramework?.id || null}
          onChange={(value) => {
            const framework = frameworks.find(f => f.id === value)
            setSelectedFramework(framework || null)
          }}
          data={frameworks.map(framework => ({
            value: framework.id,
            label: framework.name
          }))}
          w={250}
        />
      </Group>

      {selectedFramework ? (
        <Stack gap="md">
          <Paper p="lg" radius="md" bg="blue.0" withBorder>
            <Group justify="space-between" mb="sm">
              <Title order={3} c="blue.8">
                {selectedFramework.name}
              </Title>
              <Group gap="xs">
                <Badge variant="light" color="blue">
                  {selectedFramework.domain}
                </Badge>
                <Badge variant="outline" size="sm">
                  v{selectedFramework.version}
                </Badge>
              </Group>
            </Group>
            <Text c="blue.7">{selectedFramework.description}</Text>
          </Paper>

          {isGenerating && (
            <Alert
              icon={<Loader size={16} />}
              color="yellow"
              variant="light"
              radius="md"
            >
              <Text>AI 正在生成新的知识节点...</Text>
            </Alert>
          )}

          <Stack gap="sm">
            {selectedFramework.rootNodes.map(node => (
              <NodeComponent
                key={node.id}
                node={node}
                onToggleExpand={handleToggleExpand}
                onGenerateChildren={handleGenerateChildren}
                onGenerateChildrenFromUrls={handleGenerateChildrenFromUrls}
                onSearch={handleSearch}
                searchProviders={searchProviders}
                onUpdateNode={updateNodeLocal}
                onDeleteNode={deleteNodeLocal}
              />
            ))}
          </Stack>
        </Stack>
      ) : (
        <Card shadow="sm" padding="xl" radius="md" withBorder>
          <Stack align="center" gap="md">
            <IconBrain size={64} color="var(--mantine-color-gray-5)" />
            <Title order={3} ta="center">选择知识框架</Title>
            <Text c="dimmed" ta="center" maw={400}>
              选择一个领域开始构建您的知识体系
            </Text>
            {frameworks.length === 0 && (
              <Button
                variant="filled"
                onClick={loadFrameworks}
                leftSection={<IconBrain size={16} />}
              >
                初始化内置框架
              </Button>
            )}
          </Stack>
        </Card>
      )}
    </Stack>
  )
}