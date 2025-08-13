-- API Keys 表
CREATE TABLE IF NOT EXISTS api_keys (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    provider TEXT NOT NULL,
    api_key TEXT NOT NULL,
    base_url TEXT,
    model TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    is_default BOOLEAN NOT NULL DEFAULT false,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL
);

-- 知识框架表
CREATE TABLE IF NOT EXISTS knowledge_frameworks (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    domain TEXT NOT NULL,
    version INTEGER NOT NULL DEFAULT 1,
    is_built_in BOOLEAN NOT NULL DEFAULT false,
    is_public BOOLEAN NOT NULL DEFAULT false,
    local_only BOOLEAN NOT NULL DEFAULT true,
    synced_at DATETIME,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL
);

-- 知识节点表
CREATE TABLE IF NOT EXISTS knowledge_nodes (
    id TEXT PRIMARY KEY,
    framework_id TEXT NOT NULL,
    parent_id TEXT,
    title TEXT NOT NULL,
    description TEXT,
    content TEXT,
    questions TEXT NOT NULL DEFAULT '[]',
    urls TEXT NOT NULL DEFAULT '[]',
    level INTEGER NOT NULL,
    order_index INTEGER NOT NULL,
    expanded BOOLEAN NOT NULL DEFAULT false,
    position_x REAL,
    position_y REAL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    FOREIGN KEY (framework_id) REFERENCES knowledge_frameworks(id) ON DELETE CASCADE,
    FOREIGN KEY (parent_id) REFERENCES knowledge_nodes(id) ON DELETE CASCADE
);

-- 流程设计表
CREATE TABLE IF NOT EXISTS flow_designs (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    article TEXT NOT NULL,
    difficulty TEXT NOT NULL,
    total_time TEXT,
    is_public BOOLEAN NOT NULL DEFAULT false,
    local_only BOOLEAN NOT NULL DEFAULT true,
    synced_at DATETIME,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL
);

-- 流程步骤表
CREATE TABLE IF NOT EXISTS flow_steps (
    id TEXT PRIMARY KEY,
    flow_id TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    order_index INTEGER NOT NULL,
    estimated_time TEXT,
    difficulty TEXT NOT NULL,
    questions TEXT NOT NULL DEFAULT '[]',
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    FOREIGN KEY (flow_id) REFERENCES flow_designs(id) ON DELETE CASCADE
);

-- 提示模板表
CREATE TABLE IF NOT EXISTS prompt_templates (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    prompt TEXT NOT NULL,
    category TEXT NOT NULL,
    parameters TEXT NOT NULL DEFAULT '[]',
    article TEXT NOT NULL,
    usage_count INTEGER NOT NULL DEFAULT 0,
    rating REAL NOT NULL DEFAULT 0.0,
    is_public BOOLEAN NOT NULL DEFAULT false,
    local_only BOOLEAN NOT NULL DEFAULT true,
    synced_at DATETIME,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL
);

-- 标签表
CREATE TABLE IF NOT EXISTS tags (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    color TEXT,
    created_at DATETIME NOT NULL
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_knowledge_nodes_framework_id ON knowledge_nodes(framework_id);
CREATE INDEX IF NOT EXISTS idx_knowledge_nodes_parent_id ON knowledge_nodes(parent_id);
CREATE INDEX IF NOT EXISTS idx_flow_steps_flow_id ON flow_steps(flow_id);
CREATE INDEX IF NOT EXISTS idx_api_keys_provider ON api_keys(provider);
CREATE INDEX IF NOT EXISTS idx_api_keys_is_active ON api_keys(is_active);
CREATE INDEX IF NOT EXISTS idx_api_keys_is_default ON api_keys(is_default);