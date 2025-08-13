use sqlx::{sqlite::SqlitePool, Row};
use anyhow::Result;
use chrono::{DateTime, Utc, NaiveDateTime};
use uuid::Uuid;

use crate::models::*;

#[allow(dead_code)]
pub struct Database {
    pool: SqlitePool,
}

// 辅助函数：将NaiveDateTime转换为DateTime<Utc>
fn naive_to_utc(naive: NaiveDateTime) -> DateTime<Utc> {
    DateTime::from_naive_utc_and_offset(naive, Utc)
}

// 辅助函数：将Option<NaiveDateTime>转换为Option<DateTime<Utc>>
fn option_naive_to_utc(naive: Option<NaiveDateTime>) -> Option<DateTime<Utc>> {
    naive.map(|n| DateTime::from_naive_utc_and_offset(n, Utc))
}

impl Database {
    pub async fn new(database_url: &str) -> Result<Self> {
        let pool = SqlitePool::connect(database_url).await?;
        
        // 运行迁移
        sqlx::migrate!("./migrations").run(&pool).await?;
        
        Ok(Database { pool })
    }

    // API Keys 管理
    pub async fn create_api_key(&self, request: CreateApiKeyRequest) -> Result<ApiKeyConfig> {
        let id = Uuid::new_v4().to_string();
        let now = Utc::now();

        // 如果设置为默认，先取消其他默认设置
        if request.is_default {
            sqlx::query!("UPDATE api_keys SET is_default = false")
                .execute(&self.pool)
                .await?;
        }

        let row = sqlx::query(
            r#"
            INSERT INTO api_keys (id, name, provider, api_key, base_url, model, is_active, is_default, created_at, updated_at)
            VALUES (?1, ?2, ?3, ?4, ?5, ?6, true, ?7, ?8, ?9)
            RETURNING id, name, provider, api_key, base_url, model, is_active, is_default, created_at, updated_at
            "#
        )
        .bind(&id)
        .bind(&request.name)
        .bind(&request.provider)
        .bind(&request.api_key)
        .bind(&request.base_url)
        .bind(&request.model)
        .bind(request.is_default)
        .bind(now.naive_utc())
        .bind(now.naive_utc())
        .fetch_one(&self.pool)
        .await?;

        let api_key = ApiKeyConfig {
            id: row.get("id"),
            name: row.get("name"),
            provider: row.get("provider"),
            api_key: row.get("api_key"),
            base_url: row.get("base_url"),
            model: row.get("model"),
            is_active: row.get("is_active"),
            is_default: row.get("is_default"),
            created_at: naive_to_utc(row.get("created_at")),
            updated_at: naive_to_utc(row.get("updated_at")),
        };

        Ok(api_key)
    }

    pub async fn get_api_keys(&self) -> Result<Vec<ApiKeyConfig>> {
        let rows = sqlx::query(
            r#"SELECT id, name, provider, api_key, base_url, model, is_active, is_default, created_at, updated_at FROM api_keys ORDER BY is_default DESC, created_at DESC"#
        )
        .fetch_all(&self.pool)
        .await?;

        let api_keys = rows.into_iter().map(|row| {
            ApiKeyConfig {
                id: row.get("id"),
                name: row.get("name"),
                provider: row.get("provider"),
                api_key: row.get("api_key"),
                base_url: row.get("base_url"),
                model: row.get("model"),
                is_active: row.get("is_active"),
                is_default: row.get("is_default"),
                created_at: naive_to_utc(row.get("created_at")),
                updated_at: naive_to_utc(row.get("updated_at")),
            }
        }).collect();

        Ok(api_keys)
    }

    pub async fn update_api_key(&self, id: &str, name: Option<String>, is_active: Option<bool>, is_default: Option<bool>) -> Result<ApiKeyConfig> {
        let now = Utc::now();

        // 如果设置为默认，先取消其他默认设置
        if let Some(true) = is_default {
            sqlx::query!("UPDATE api_keys SET is_default = false WHERE id != ?1", id)
                .execute(&self.pool)
                .await?;
        }

        // 构建动态更新查询
        let mut query_parts = vec!["UPDATE api_keys SET updated_at = ?1".to_string()];
        let mut bind_index = 2;

        if name.is_some() {
            query_parts.push(format!("name = ?{}", bind_index));
            bind_index += 1;
        }
        if is_active.is_some() {
            query_parts.push(format!("is_active = ?{}", bind_index));
            bind_index += 1;
        }
        if is_default.is_some() {
            query_parts.push(format!("is_default = ?{}", bind_index));
            bind_index += 1;
        }

        query_parts.push(format!("WHERE id = ?{}", bind_index));
        let query = query_parts.join(", ").replace(", WHERE", " WHERE");

        // 执行更新
        let mut query_builder = sqlx::query(&query).bind(now).bind(id);

        if let Some(name) = name {
            query_builder = query_builder.bind(name);
        }
        if let Some(is_active) = is_active {
            query_builder = query_builder.bind(is_active);
        }
        if let Some(is_default) = is_default {
            query_builder = query_builder.bind(is_default);
        }

        query_builder.execute(&self.pool).await?;

        // 返回更新后的记录
        let row = sqlx::query(
            r#"SELECT id, name, provider, api_key, base_url, model, is_active, is_default, created_at, updated_at FROM api_keys WHERE id = ?1"#
        )
        .bind(&id)
        .fetch_one(&self.pool)
        .await?;

        let api_key = ApiKeyConfig {
            id: row.get("id"),
            name: row.get("name"),
            provider: row.get("provider"),
            api_key: row.get("api_key"),
            base_url: row.get("base_url"),
            model: row.get("model"),
            is_active: row.get("is_active"),
            is_default: row.get("is_default"),
            created_at: naive_to_utc(row.get("created_at")),
            updated_at: naive_to_utc(row.get("updated_at")),
        };

        Ok(api_key)
    }

    pub async fn delete_api_key(&self, id: &str) -> Result<()> {
        sqlx::query!("DELETE FROM api_keys WHERE id = ?1", id)
            .execute(&self.pool)
            .await?;
        Ok(())
    }

    // 知识框架管理
    pub async fn create_knowledge_framework(&self, title: &str, description: &str, domain: &str) -> Result<KnowledgeFramework> {
        let id = Uuid::new_v4().to_string();
        let now = Utc::now();

        let row = sqlx::query(
            r#"
            INSERT INTO knowledge_frameworks (id, title, description, domain, version, is_built_in, is_public, local_only, created_at, updated_at)
            VALUES (?1, ?2, ?3, ?4, 1, false, false, true, ?5, ?6)
            RETURNING id, title, description, domain, version, is_built_in, is_public, local_only, synced_at, created_at, updated_at
            "#
        )
        .bind(&id)
        .bind(title)
        .bind(description)
        .bind(domain)
        .bind(now.naive_utc())
        .bind(now.naive_utc())
        .fetch_one(&self.pool)
        .await?;

        let framework = KnowledgeFramework {
            id: row.get("id"),
            title: row.get("title"),
            description: row.get("description"),
            domain: row.get("domain"),
            version: row.get("version"),
            is_built_in: row.get("is_built_in"),
            is_public: row.get("is_public"),
            local_only: row.get("local_only"),
            synced_at: option_naive_to_utc(row.get("synced_at")),
            created_at: naive_to_utc(row.get("created_at")),
            updated_at: naive_to_utc(row.get("updated_at")),
        };

        Ok(framework)
    }

    pub async fn get_knowledge_frameworks(&self) -> Result<Vec<KnowledgeFramework>> {
        let rows = sqlx::query(
            r#"SELECT id, title, description, domain, version, is_built_in, is_public, local_only, synced_at, created_at, updated_at FROM knowledge_frameworks ORDER BY created_at DESC"#
        )
        .fetch_all(&self.pool)
        .await?;

        let frameworks = rows.into_iter().map(|row| {
            KnowledgeFramework {
                id: row.get("id"),
                title: row.get("title"),
                description: row.get("description"),
                domain: row.get("domain"),
                version: row.get("version"),
                is_built_in: row.get("is_built_in"),
                is_public: row.get("is_public"),
                local_only: row.get("local_only"),
                synced_at: option_naive_to_utc(row.get("synced_at")),
                created_at: naive_to_utc(row.get("created_at")),
                updated_at: naive_to_utc(row.get("updated_at")),
            }
        }).collect();

        Ok(frameworks)
    }

    // 暂时注释掉有问题的方法，等修复SQLx类型映射问题后再启用
    /*
    pub async fn get_knowledge_nodes(&self, framework_id: &str) -> Result<Vec<KnowledgeNode>> {
        let nodes = sqlx::query_as!(
            KnowledgeNode,
            r#"SELECT id, framework_id, parent_id, title, description, content, questions, urls, level, order_index, expanded as "expanded: bool", position_x, position_y, created_at, updated_at FROM knowledge_nodes WHERE framework_id = ?1 ORDER BY level, order_index"#,
            framework_id
        )
        .fetch_all(&self.pool)
        .await?;

        Ok(nodes)
    }

    pub async fn create_knowledge_node(&self, framework_id: &str, parent_id: Option<&str>, title: &str, description: Option<&str>, content: Option<&str>, questions: &str, level: i32, order_index: i32) -> Result<KnowledgeNode> {
        let id = Uuid::new_v4().to_string();
        let now = Utc::now();

        let node = sqlx::query_as!(
            KnowledgeNode,
            r#"
            INSERT INTO knowledge_nodes (id, framework_id, parent_id, title, description, content, questions, urls, level, order_index, expanded, created_at, updated_at)
            VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, '[]', ?8, ?9, false, ?10, ?11)
            RETURNING id, framework_id, parent_id, title, description, content, questions, urls, level, order_index, expanded as "expanded: bool", position_x, position_y, created_at, updated_at
            "#,
            id,
            framework_id,
            parent_id,
            title,
            description,
            content,
            questions,
            level,
            order_index,
            now,
            now
        )
        .fetch_one(&self.pool)
        .await?;

        Ok(node)
    }

    // 流程设计管理
    pub async fn create_flow_design(&self, title: &str, description: &str, article: &str, difficulty: &str, total_time: Option<&str>) -> Result<FlowDesign> {
        let id = Uuid::new_v4().to_string();
        let now = Utc::now();

        let flow = sqlx::query_as!(
            FlowDesign,
            r#"
            INSERT INTO flow_designs (id, title, description, article, difficulty, total_time, is_public, local_only, created_at, updated_at)
            VALUES (?1, ?2, ?3, ?4, ?5, ?6, false, true, ?7, ?8)
            RETURNING id, title, description, article, difficulty, total_time, is_public as "is_public: bool", local_only as "local_only: bool", synced_at, created_at, updated_at
            "#,
            id,
            title,
            description,
            article,
            difficulty,
            total_time,
            now,
            now
        )
        .fetch_one(&self.pool)
        .await?;

        Ok(flow)
    }

    pub async fn get_flow_designs(&self) -> Result<Vec<FlowDesign>> {
        let flows = sqlx::query_as!(
            FlowDesign,
            r#"SELECT id, title, description, article, difficulty, total_time, is_public as "is_public: bool", local_only as "local_only: bool", synced_at, created_at, updated_at FROM flow_designs ORDER BY created_at DESC"#
        )
        .fetch_all(&self.pool)
        .await?;

        Ok(flows)
    }

    // 提示模板管理
    pub async fn create_prompt_template(&self, title: &str, description: &str, prompt: &str, category: &str, parameters: &str, article: &str) -> Result<PromptTemplate> {
        let id = Uuid::new_v4().to_string();
        let now = Utc::now();

        let template = sqlx::query_as!(
            PromptTemplate,
            r#"
            INSERT INTO prompt_templates (id, title, description, prompt, category, parameters, article, usage_count, rating, is_public, local_only, created_at, updated_at)
            VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, 0, 0.0, false, true, ?8, ?9)
            RETURNING id, title, description, prompt, category, parameters, article, usage_count, rating, is_public as "is_public: bool", local_only as "local_only: bool", synced_at, created_at, updated_at
            "#,
            id,
            title,
            description,
            prompt,
            category,
            parameters,
            article,
            now,
            now
        )
        .fetch_one(&self.pool)
        .await?;

        Ok(template)
    }

    pub async fn get_prompt_templates(&self) -> Result<Vec<PromptTemplate>> {
        let templates = sqlx::query_as!(
            PromptTemplate,
            r#"SELECT id, title, description, prompt, category, parameters, article, usage_count, rating, is_public as "is_public: bool", local_only as "local_only: bool", synced_at, created_at, updated_at FROM prompt_templates ORDER BY created_at DESC"#
        )
        .fetch_all(&self.pool)
        .await?;

        Ok(templates)
    }

    pub async fn delete_knowledge_framework(&self, id: &str) -> Result<()> {
        // 删除相关节点
        sqlx::query!("DELETE FROM knowledge_nodes WHERE framework_id = ?1", id)
            .execute(&self.pool)
            .await?;
        
        // 删除框架
        sqlx::query!("DELETE FROM knowledge_frameworks WHERE id = ?1", id)
            .execute(&self.pool)
            .await?;
        
        Ok(())
    }

    pub async fn delete_flow_design(&self, id: &str) -> Result<()> {
        // 删除相关步骤
        sqlx::query!("DELETE FROM flow_steps WHERE flow_id = ?1", id)
            .execute(&self.pool)
            .await?;
        
        // 删除流程
        sqlx::query!("DELETE FROM flow_designs WHERE id = ?1", id)
            .execute(&self.pool)
            .await?;
        
        Ok(())
    }

    pub async fn delete_prompt_template(&self, id: &str) -> Result<()> {
        sqlx::query!("DELETE FROM prompt_templates WHERE id = ?1", id)
            .execute(&self.pool)
            .await?;
        
        Ok(())
    }
    */
}