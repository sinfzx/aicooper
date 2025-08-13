// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::fs;
use std::path::PathBuf;
use std::time::{SystemTime, UNIX_EPOCH};
use std::sync::Arc;
use tauri::{AppHandle, Manager};
use chrono::{Datelike, Timelike};

mod models;
mod database;
mod ai_service;

use models::*;
use database::Database;
use ai_service::AIService;

// 应用状态
#[allow(dead_code)]
struct AppState {
    database: Arc<Database>,
    ai_service: Arc<AIService>,
}

// ApiKeyConfig is now defined in models.rs

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct AppSettings {
    pub theme: String,
    pub language: String,
    pub auto_save: bool,
    pub default_provider: String,
    pub max_tokens: u32,
    pub temperature: f32,
    pub enable_telemetry: bool,
}

// KnowledgeFramework is now defined in models.rs

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct KnowledgeNode {
    pub id: String,
    pub title: String,
    pub description: Option<String>,
    pub content: Option<String>,
    pub children: Vec<KnowledgeNode>,
    pub questions: Vec<String>,
    pub urls: Vec<String>,
    pub position: Option<NodePosition>,
    pub expanded: bool,
    pub level: u32,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct NodePosition {
    pub x: f64,
    pub y: f64,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct SearchProvider {
    pub id: String,
    pub name: String,
    pub icon: String,
    pub base_url: String,
    pub search_param: String,
    pub enabled: bool,
}

// PromptTemplate is now defined in models.rs

impl Default for AppSettings {
    fn default() -> Self {
        Self {
            theme: "system".to_string(),
            language: "zh-CN".to_string(),
            auto_save: true,
            default_provider: "".to_string(),
            max_tokens: 4000,
            temperature: 0.7,
            enable_telemetry: false,
        }
    }
}

fn get_app_data_dir(app: &AppHandle) -> Result<PathBuf, String> {
    app.path()
        .app_data_dir()
        .map_err(|e| format!("Failed to get app data dir: {}", e))
}

fn ensure_data_dir(app: &AppHandle) -> Result<PathBuf, String> {
    let data_dir = get_app_data_dir(app)?;
    if !data_dir.exists() {
        fs::create_dir_all(&data_dir)
            .map_err(|e| format!("Failed to create data directory: {}", e))?;
    }
    Ok(data_dir)
}

#[tauri::command]
fn greet() -> String {
    let now = SystemTime::now();
    let epoch_ms = now.duration_since(UNIX_EPOCH).unwrap().as_millis();
    format!("Hello world from Rust! Current epoch: {epoch_ms}")
}

// API Key 管理命令
#[tauri::command]
async fn get_api_keys(app: AppHandle) -> Result<Vec<ApiKeyConfig>, String> {
    let data_dir = ensure_data_dir(&app)?;
    let keys_file = data_dir.join("api_keys.json");
    
    if !keys_file.exists() {
        return Ok(vec![]);
    }
    
    let content = fs::read_to_string(&keys_file)
        .map_err(|e| format!("Failed to read API keys file: {}", e))?;
    
    let keys: Vec<ApiKeyConfig> = serde_json::from_str(&content)
        .map_err(|e| format!("Failed to parse API keys: {}", e))?;
    
    Ok(keys)
}

#[tauri::command]
async fn save_api_key(app: AppHandle, api_key: ApiKeyConfig) -> Result<(), String> {
    let data_dir = ensure_data_dir(&app)?;
    let keys_file = data_dir.join("api_keys.json");
    
    let mut keys = get_api_keys(app.clone()).await?;
    
    // 如果设置为默认，取消其他默认设置
    if api_key.is_default {
        for key in &mut keys {
            if key.provider == api_key.provider {
                key.is_default = false;
            }
        }
    }
    
    // 更新或添加 API Key
    if let Some(existing) = keys.iter_mut().find(|k| k.id == api_key.id) {
        *existing = api_key;
    } else {
        keys.push(api_key);
    }
    
    let content = serde_json::to_string_pretty(&keys)
        .map_err(|e| format!("Failed to serialize API keys: {}", e))?;
    
    fs::write(&keys_file, content)
        .map_err(|e| format!("Failed to write API keys file: {}", e))?;
    
    Ok(())
}

#[tauri::command]
async fn delete_api_key(app: AppHandle, key_id: String) -> Result<(), String> {
    let data_dir = ensure_data_dir(&app)?;
    let keys_file = data_dir.join("api_keys.json");
    
    let mut keys = get_api_keys(app.clone()).await?;
    keys.retain(|k| k.id != key_id);
    
    let content = serde_json::to_string_pretty(&keys)
        .map_err(|e| format!("Failed to serialize API keys: {}", e))?;
    
    fs::write(&keys_file, content)
        .map_err(|e| format!("Failed to write API keys file: {}", e))?;
    
    Ok(())
}

#[tauri::command]
async fn test_api_key(provider: String, api_key: String, base_url: Option<String>) -> Result<bool, String> {
    // 这里实现 API Key 测试逻辑
    // 根据不同的 provider 调用相应的测试端点
    match provider.as_str() {
        "openai" => test_openai_key(api_key, base_url).await,
        "anthropic" => test_anthropic_key(api_key).await,
        "google" => test_google_key(api_key).await,
        _ => Err("Unsupported provider".to_string()),
    }
}

async fn test_openai_key(api_key: String, base_url: Option<String>) -> Result<bool, String> {
    let client = reqwest::Client::new();
    let url = base_url.unwrap_or_else(|| "https://api.openai.com/v1/models".to_string());
    
    let response = client
        .get(&url)
        .header("Authorization", format!("Bearer {}", api_key))
        .send()
        .await
        .map_err(|e| format!("Request failed: {}", e))?;
    
    Ok(response.status().is_success())
}

async fn test_anthropic_key(api_key: String) -> Result<bool, String> {
    let client = reqwest::Client::new();
    
    let response = client
        .post("https://api.anthropic.com/v1/messages")
        .header("x-api-key", api_key)
        .header("anthropic-version", "2023-06-01")
        .header("content-type", "application/json")
        .json(&serde_json::json!({
            "model": "claude-3-haiku-20240307",
            "max_tokens": 1,
            "messages": [{"role": "user", "content": "test"}]
        }))
        .send()
        .await
        .map_err(|e| format!("Request failed: {}", e))?;
    
    Ok(response.status().is_success() || response.status() == 400) // 400 可能是参数问题，但 key 有效
}

async fn test_google_key(api_key: String) -> Result<bool, String> {
    let client = reqwest::Client::new();
    // 简单列模型接口校验
    let url = format!(
        "https://generativelanguage.googleapis.com/v1beta/models?key={}",
        api_key
    );
    let response = client
        .get(&url)
        .send()
        .await
        .map_err(|e| format!("Request failed: {}", e))?;
    Ok(response.status().is_success())
}

// 设置管理命令
#[tauri::command]
async fn get_settings(app: AppHandle) -> Result<AppSettings, String> {
    let data_dir = ensure_data_dir(&app)?;
    let settings_file = data_dir.join("settings.json");
    
    if !settings_file.exists() {
        return Ok(AppSettings::default());
    }
    
    let content = fs::read_to_string(&settings_file)
        .map_err(|e| format!("Failed to read settings file: {}", e))?;
    
    let settings: AppSettings = serde_json::from_str(&content)
        .map_err(|e| format!("Failed to parse settings: {}", e))?;
    
    Ok(settings)
}

#[tauri::command]
async fn save_settings(app: AppHandle, settings: AppSettings) -> Result<(), String> {
    let data_dir = ensure_data_dir(&app)?;
    let settings_file = data_dir.join("settings.json");
    
    let content = serde_json::to_string_pretty(&settings)
        .map_err(|e| format!("Failed to serialize settings: {}", e))?;
    
    fs::write(&settings_file, content)
        .map_err(|e| format!("Failed to write settings file: {}", e))?;
    
    Ok(())
}

// AI 聊天命令
#[tauri::command]
async fn chat_with_ai(
    provider: String,
    api_key: String,
    model: String,
    messages: Vec<HashMap<String, String>>,
    base_url: Option<String>,
) -> Result<String, String> {
    match provider.as_str() {
        "openai" => chat_with_openai(api_key, model, messages, base_url).await,
        "anthropic" => chat_with_anthropic(api_key, model, messages).await,
        _ => Err("Unsupported provider".to_string()),
    }
}

async fn chat_with_openai(
    api_key: String,
    model: String,
    messages: Vec<HashMap<String, String>>,
    base_url: Option<String>,
) -> Result<String, String> {
    let client = reqwest::Client::new();
    let url = base_url.unwrap_or_else(|| "https://api.openai.com/v1/chat/completions".to_string());
    
    let response = client
        .post(&url)
        .header("Authorization", format!("Bearer {}", api_key))
        .header("Content-Type", "application/json")
        .json(&serde_json::json!({
            "model": model,
            "messages": messages,
            "max_tokens": 1000,
            "temperature": 0.7
        }))
        .send()
        .await
        .map_err(|e| format!("Request failed: {}", e))?;
    
    if !response.status().is_success() {
        let error_text = response.text().await.unwrap_or_else(|_| "Unknown error".to_string());
        return Err(format!("API request failed: {}", error_text));
    }
    
    let json: serde_json::Value = response.json().await
        .map_err(|e| format!("Failed to parse response: {}", e))?;
    
    let content = json["choices"][0]["message"]["content"]
        .as_str()
        .unwrap_or("No response")
        .to_string();
    
    Ok(content)
}

async fn chat_with_anthropic(
    api_key: String,
    model: String,
    messages: Vec<HashMap<String, String>>,
) -> Result<String, String> {
    let client = reqwest::Client::new();
    
    let response = client
        .post("https://api.anthropic.com/v1/messages")
        .header("x-api-key", api_key)
        .header("anthropic-version", "2023-06-01")
        .header("content-type", "application/json")
        .json(&serde_json::json!({
            "model": model,
            "max_tokens": 1000,
            "messages": messages
        }))
        .send()
        .await
        .map_err(|e| format!("Request failed: {}", e))?;
    
    if !response.status().is_success() {
        let error_text = response.text().await.unwrap_or_else(|_| "Unknown error".to_string());
        return Err(format!("API request failed: {}", error_text));
    }
    
    let json: serde_json::Value = response.json().await
        .map_err(|e| format!("Failed to parse response: {}", e))?;
    
    let content = json["content"][0]["text"]
        .as_str()
        .unwrap_or("No response")
        .to_string();
    
    Ok(content)
}

// 知识框架管理命令
#[tauri::command]
async fn get_knowledge_frameworks(app: AppHandle) -> Result<Vec<KnowledgeFramework>, String> {
    let data_dir = ensure_data_dir(&app)?;
    let frameworks_file = data_dir.join("knowledge_frameworks.json");
    
    println!("Looking for frameworks file at: {:?}", frameworks_file);
    
    if !frameworks_file.exists() {
        println!("Frameworks file doesn't exist, returning empty array");
        return Ok(vec![]);
    }
    
    let content = fs::read_to_string(&frameworks_file)
        .map_err(|e| {
            println!("Failed to read frameworks file: {}", e);
            format!("Failed to read frameworks file: {}", e)
        })?;
    
    println!("File content: {}", content);
    
    if content.trim().is_empty() {
        println!("File is empty, returning empty array");
        return Ok(vec![]);
    }
    
    let frameworks: Vec<KnowledgeFramework> = serde_json::from_str(&content)
        .map_err(|e| {
            println!("Failed to parse frameworks JSON: {}", e);
            format!("Failed to parse frameworks: {}", e)
        })?;
    
    println!("Successfully loaded {} frameworks", frameworks.len());
    Ok(frameworks)
}

// 本地 Prompt Templates 文件存储（与知识框架类似）
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct LocalPromptTemplate {
    pub id: String,
    pub title: String,
    pub description: String,
    pub category: String,
    pub content: String,
    #[serde(default)]
    pub parameters: Option<serde_json::Value>,
    #[serde(default)]
    pub article: Option<String>,
    #[serde(default)]
    pub tags: Vec<String>,
    #[serde(default)]
    pub is_public: bool,
    #[serde(default = "default_true")]
    pub local_only: bool,
    pub created_at: u64,
    pub updated_at: u64,
}

fn default_true() -> bool { true }

#[tauri::command]
async fn get_local_prompt_templates(app: AppHandle) -> Result<Vec<LocalPromptTemplate>, String> {
    let data_dir = ensure_data_dir(&app)?;
    let file = data_dir.join("prompt_templates.json");
    if !file.exists() {
        return Ok(vec![]);
    }
    let content = fs::read_to_string(&file).map_err(|e| format!("Failed to read templates file: {}", e))?;
    if content.trim().is_empty() { return Ok(vec![]); }
    let templates: Vec<LocalPromptTemplate> = serde_json::from_str(&content)
        .map_err(|e| format!("Failed to parse templates: {}", e))?;
    Ok(templates)
}

#[tauri::command]
async fn save_local_prompt_template(app: AppHandle, mut template: LocalPromptTemplate) -> Result<LocalPromptTemplate, String> {
    let data_dir = ensure_data_dir(&app)?;
    let file = data_dir.join("prompt_templates.json");
    let mut templates = if file.exists() { get_local_prompt_templates(app.clone()).await? } else { vec![] };

    if template.id.is_empty() {
        template.id = format!("tmpl_{}", SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_millis());
    }
    let now_ms = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_millis() as u64;
    if template.created_at == 0 { template.created_at = now_ms; }
    template.updated_at = now_ms;

    if let Some(existing) = templates.iter_mut().find(|t| t.id == template.id) {
        *existing = template.clone();
    } else {
        templates.insert(0, template.clone());
    }

    let content = serde_json::to_string_pretty(&templates).map_err(|e| format!("Failed to serialize templates: {}", e))?;
    fs::write(&file, content).map_err(|e| format!("Failed to write templates file: {}", e))?;
    Ok(template)
}

#[tauri::command]
async fn delete_local_prompt_template(app: AppHandle, id: String) -> Result<(), String> {
    let data_dir = ensure_data_dir(&app)?;
    let file = data_dir.join("prompt_templates.json");
    let mut templates = if file.exists() { get_local_prompt_templates(app.clone()).await? } else { vec![] };
    templates.retain(|t| t.id != id);
    let content = serde_json::to_string_pretty(&templates).map_err(|e| format!("Failed to serialize templates: {}", e))?;
    fs::write(&file, content).map_err(|e| format!("Failed to write templates file: {}", e))?;
    Ok(())
}

// 本地 Flow 结构与存储
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct LocalFlowStep {
    pub id: String,
    pub title: String,
    pub description: String,
    pub order: i32,
    pub estimated_time: Option<String>,
    pub difficulty: Option<String>,
    #[serde(default)]
    pub resources: Vec<serde_json::Value>,
    #[serde(default)]
    pub tools: Vec<String>,
    #[serde(default)]
    pub questions: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct LocalFlow {
    pub id: String,
    #[serde(default)]
    pub server_id: Option<String>,
    pub title: String,
    pub description: String,
    pub difficulty: String,
    #[serde(default)]
    pub total_time: Option<String>,
    #[serde(default)]
    pub article: Option<String>,
    #[serde(default)]
    pub steps: Vec<LocalFlowStep>,
    #[serde(default)]
    pub tools: Vec<serde_json::Value>,
    #[serde(default)]
    pub tags: Vec<String>,
    #[serde(default)]
    pub is_public: bool,
    #[serde(default = "default_true")]
    pub local_only: bool,
    pub created_at: u64,
    pub updated_at: u64,
}

#[tauri::command]
async fn get_local_flows(app: AppHandle) -> Result<Vec<LocalFlow>, String> {
    let data_dir = ensure_data_dir(&app)?;
    let file = data_dir.join("flows.json");
    if !file.exists() { return Ok(vec![]); }
    let content = fs::read_to_string(&file).map_err(|e| format!("Failed to read flows file: {}", e))?;
    if content.trim().is_empty() { return Ok(vec![]); }
    let flows: Vec<LocalFlow> = serde_json::from_str(&content).map_err(|e| format!("Failed to parse flows: {}", e))?;
    Ok(flows)
}

#[tauri::command]
async fn save_local_flow(app: AppHandle, mut flow: LocalFlow) -> Result<LocalFlow, String> {
    let data_dir = ensure_data_dir(&app)?;
    let file = data_dir.join("flows.json");
    let mut flows = if file.exists() { get_local_flows(app.clone()).await? } else { vec![] };

    if flow.id.is_empty() {
        flow.id = format!("flow_{}", SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_millis());
    }
    let now_ms = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_millis() as u64;
    if flow.created_at == 0 { flow.created_at = now_ms; }
    flow.updated_at = now_ms;

    if let Some(existing) = flows.iter_mut().find(|f| f.id == flow.id) {
        *existing = flow.clone();
    } else {
        flows.insert(0, flow.clone());
    }

    let content = serde_json::to_string_pretty(&flows).map_err(|e| format!("Failed to serialize flows: {}", e))?;
    fs::write(&file, content).map_err(|e| format!("Failed to write flows file: {}", e))?;
    Ok(flow)
}

#[tauri::command]
async fn delete_local_flow(app: AppHandle, id: String) -> Result<(), String> {
    let data_dir = ensure_data_dir(&app)?;
    let file = data_dir.join("flows.json");
    let mut flows = if file.exists() { get_local_flows(app.clone()).await? } else { vec![] };
    flows.retain(|f| f.id != id);
    let content = serde_json::to_string_pretty(&flows).map_err(|e| format!("Failed to serialize flows: {}", e))?;
    fs::write(&file, content).map_err(|e| format!("Failed to write flows file: {}", e))?;
    Ok(())
}

#[tauri::command]
async fn sync_local_flow_to_server(app: AppHandle, id: String) -> Result<String, String> {
    // 读取本地 flow
    let mut flows = get_local_flows(app.clone()).await?;
    let flow = flows.iter_mut().find(|f| f.id == id).ok_or("Flow not found")?;

    // 获取认证
    let auth = get_auth_data(app.clone()).await?.ok_or("User not authenticated")?;
    let client = reqwest::Client::new();

    // 组装服务器 payload
    let payload = serde_json::json!({
        "title": flow.title,
        "description": flow.description,
        "difficulty": flow.difficulty,
        "totalTime": flow.total_time,
        "article": flow.article,
        "steps": flow.steps,
        "tools": flow.tools,
        "prerequisites": [],
        "outcomes": [],
        "tags": [],
        "isPublic": flow.is_public,
        "localOnly": false
    });

    let res = client
        .post("http://localhost:3001/api/flows")
        .header("Authorization", format!("Bearer {}", auth.token))
        .header("Content-Type", "application/json")
        .body(payload.to_string())
        .send()
        .await
        .map_err(|e| format!("Request failed: {}", e))?;

    if !res.status().is_success() {
        let text = res.text().await.unwrap_or_default();
        return Err(format!("Sync failed: {}", text));
    }

    let json: serde_json::Value = res.json().await.map_err(|e| format!("Parse failed: {}", e))?;
    let server_id = json["data"]["id"].as_str().unwrap_or("").to_string();
    if server_id.is_empty() { return Err("Invalid server id".to_string()); }

    // 更新本地标记
    flow.server_id = Some(server_id.clone());
    flow.local_only = false;
    flow.updated_at = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_millis() as u64;

    // 覆盖写回
    let data_dir = ensure_data_dir(&app)?;
    let file = data_dir.join("flows.json");
    let content = serde_json::to_string_pretty(&flows).map_err(|e| format!("Failed to serialize flows: {}", e))?;
    fs::write(&file, content).map_err(|e| format!("Failed to write flows file: {}", e))?;

    Ok(server_id)
}

#[tauri::command]
async fn download_flow_from_server(app: AppHandle, server_id: String) -> Result<(), String> {
    let auth = get_auth_data(app.clone()).await?.ok_or("User not authenticated")?;
    let client = reqwest::Client::new();
    let res = client
        .get(&format!("http://localhost:3001/api/flows/{}", server_id))
        .header("Authorization", format!("Bearer {}", auth.token))
        .send()
        .await
        .map_err(|e| format!("Request failed: {}", e))?;
    if !res.status().is_success() {
        let text = res.text().await.unwrap_or_default();
        return Err(format!("Download failed: {}", text));
    }
    let json: serde_json::Value = res.json().await.map_err(|e| format!("Parse failed: {}", e))?;
    let data = &json["data"];

    let mut flows = get_local_flows(app.clone()).await?;
    let now_ms = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_millis() as u64;
    let local = LocalFlow {
        id: format!("flow_{}", now_ms),
        server_id: Some(server_id),
        title: data["title"].as_str().unwrap_or("").to_string(),
        description: data["description"].as_str().unwrap_or("").to_string(),
        difficulty: data["difficulty"].as_str().unwrap_or("medium").to_string(),
        total_time: data["totalTime"].as_str().map(|s| s.to_string()),
        article: data["article"].as_str().map(|s| s.to_string()),
        steps: vec![],
        tools: vec![],
        tags: vec![],
        is_public: data["isPublic"].as_bool().unwrap_or(false),
        local_only: false,
        created_at: now_ms,
        updated_at: now_ms,
    };
    flows.insert(0, local);

    let data_dir = ensure_data_dir(&app)?;
    let file = data_dir.join("flows.json");
    let content = serde_json::to_string_pretty(&flows).map_err(|e| format!("Failed to serialize flows: {}", e))?;
    fs::write(&file, content).map_err(|e| format!("Failed to write flows file: {}", e))?;
    Ok(())
}
#[tauri::command]
async fn save_knowledge_framework(app: AppHandle, framework: KnowledgeFramework) -> Result<(), String> {
    let data_dir = ensure_data_dir(&app)?;
    let frameworks_file = data_dir.join("knowledge_frameworks.json");
    
    let mut frameworks = get_knowledge_frameworks(app.clone()).await?;
    
    // 更新或添加框架
    if let Some(existing) = frameworks.iter_mut().find(|f| f.id == framework.id) {
        *existing = framework;
    } else {
        frameworks.push(framework);
    }
    
    let content = serde_json::to_string_pretty(&frameworks)
        .map_err(|e| format!("Failed to serialize frameworks: {}", e))?;
    
    fs::write(&frameworks_file, content)
        .map_err(|e| format!("Failed to write frameworks file: {}", e))?;
    
    Ok(())
}

#[tauri::command]
async fn delete_knowledge_framework(app: AppHandle, framework_id: String) -> Result<(), String> {
    let data_dir = ensure_data_dir(&app)?;
    let frameworks_file = data_dir.join("knowledge_frameworks.json");
    
    let mut frameworks = get_knowledge_frameworks(app.clone()).await?;
    frameworks.retain(|f| f.id != framework_id);
    
    let content = serde_json::to_string_pretty(&frameworks)
        .map_err(|e| format!("Failed to serialize frameworks: {}", e))?;
    
    fs::write(&frameworks_file, content)
        .map_err(|e| format!("Failed to write frameworks file: {}", e))?;
    
    Ok(())
}

#[tauri::command]
async fn generate_child_nodes(
    provider: String,
    api_key: String,
    model: String,
    parent_title: String,
    parent_description: String,
    domain_context: String,
    node_count: u32,
    target_user: String,
    base_url: Option<String>,
) -> Result<String, String> {
    let prompt = format!(
        "基于父节点\"{}\"，请生成 {} 个相关的下级知识节点。\n\n父节点描述：{}\n领域背景：{}\n\n请为每个下级节点提供：\n1. **节点标题**：简洁明确的标题（不超过10个字）\n2. **节点描述**：简要说明（20-50字）\n3. **相关问题**：3个相关的学习问题\n4. **学习要点**：2-3个关键学习点\n\n要求：\n- 节点之间要有逻辑关联但不重复\n- 适合 {} 的知识水平\n- 注重实用性和可操作性\n\n请按以下格式输出：\n## 节点1：[标题]\n**描述**：[描述内容]\n**问题**：\n1. [问题1]\n2. [问题2]\n3. [问题3]\n**要点**：[学习要点]\n\n---",
        parent_title, node_count, parent_description, domain_context, target_user
    );

    let messages = vec![
        HashMap::from([
            ("role".to_string(), "user".to_string()),
            ("content".to_string(), prompt.clone())
        ])
    ];

    match provider.as_str() {
        "openai" => chat_with_openai(api_key, model, messages, base_url).await,
        "anthropic" => chat_with_anthropic(api_key, model, messages).await,
        _ => {
            // 兜底使用 Pollinations API
            generate_with_pollinations(prompt).await
        }
    }
}

async fn generate_with_pollinations(prompt: String) -> Result<String, String> {
    let client = reqwest::Client::new();
    
    let response = client
        .post("https://text.pollinations.ai/")
        .header("Content-Type", "application/json")
        .json(&serde_json::json!({
            "messages": [{"role": "user", "content": prompt}],
            "model": "openai"
        }))
        .send()
        .await
        .map_err(|e| format!("Pollinations request failed: {}", e))?;
    
    if !response.status().is_success() {
        return Err("Pollinations API request failed".to_string());
    }
    
    let content = response.text().await
        .map_err(|e| format!("Failed to read response: {}", e))?;
    
    Ok(content)
}

// 认证相关结构体
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct AuthUser {
    pub id: String,
    pub email: String,
    pub name: String,
    pub avatar: Option<String>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct AuthData {
    pub user: AuthUser,
    pub token: String,
    pub expires_at: u64,
}

// 认证相关命令
#[tauri::command]
async fn send_verification_code(email: String) -> Result<serde_json::Value, String> {
    let client = reqwest::Client::new();
    
    // 调用API发送验证码
    let response = client
        .post("http://localhost:3001/api/auth/send-verification-code")
        .header("Content-Type", "application/json")
        .json(&serde_json::json!({
            "email": email
        }))
        .send()
        .await
        .map_err(|e| format!("Request failed: {}", e))?;
    
    if !response.status().is_success() {
        let error_text = response.text().await.unwrap_or_else(|_| "Unknown error".to_string());
        return Err(format!("Failed to send verification code: {}", error_text));
    }
    
    let result: serde_json::Value = response.json().await
        .map_err(|e| format!("Failed to parse response: {}", e))?;
    
    println!("Verification code sent successfully to: {}", email);
    Ok(result)
}

#[tauri::command]
async fn verify_code_and_login(email: String, code: String) -> Result<serde_json::Value, String> {
    let client = reqwest::Client::new();
    
    // 调用API验证验证码并登录
    let response = client
        .post("http://localhost:3001/api/auth/verify-code")
        .header("Content-Type", "application/json")
        .json(&serde_json::json!({
            "email": email,
            "code": code
        }))
        .send()
        .await
        .map_err(|e| format!("Request failed: {}", e))?;
    
    if !response.status().is_success() {
        let error_text = response.text().await.unwrap_or_else(|_| "Unknown error".to_string());
        return Err(format!("验证失败: {}", error_text));
    }
    
    let result: serde_json::Value = response.json().await
        .map_err(|e| format!("Failed to parse response: {}", e))?;
    
    println!("User authenticated successfully: {}", email);
    Ok(result)
}

#[tauri::command]
async fn save_auth_data(app: AppHandle, user: AuthUser, token: String, expires_at: u64) -> Result<(), String> {
    let data_dir = ensure_data_dir(&app)?;
    let auth_file = data_dir.join("auth.json");
    
    let auth_data = AuthData {
        user,
        token,
        expires_at,
    };
    
    let content = serde_json::to_string_pretty(&auth_data)
        .map_err(|e| format!("Failed to serialize auth data: {}", e))?;
    
    fs::write(&auth_file, content)
        .map_err(|e| format!("Failed to write auth file: {}", e))?;
    
    Ok(())
}

#[tauri::command]
async fn get_auth_data(app: AppHandle) -> Result<Option<AuthData>, String> {
    let data_dir = ensure_data_dir(&app)?;
    let auth_file = data_dir.join("auth.json");
    
    if !auth_file.exists() {
        return Ok(None);
    }
    
    let content = fs::read_to_string(&auth_file)
        .map_err(|e| format!("Failed to read auth file: {}", e))?;
    
    let auth_data: AuthData = serde_json::from_str(&content)
        .map_err(|e| format!("Failed to parse auth data: {}", e))?;
    
    // 检查是否过期
    let now = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap()
        .as_millis() as u64;
    
    if auth_data.expires_at < now {
        // 删除过期的认证数据
        let _ = fs::remove_file(&auth_file);
        return Ok(None);
    }
    
    Ok(Some(auth_data))
}

#[tauri::command]
async fn logout(app: AppHandle) -> Result<(), String> {
    let data_dir = ensure_data_dir(&app)?;
    let auth_file = data_dir.join("auth.json");
    
    if auth_file.exists() {
        fs::remove_file(&auth_file)
            .map_err(|e| format!("Failed to remove auth file: {}", e))?;
    }
    
    Ok(())
}

// 搜索提供商管理
#[tauri::command]
async fn get_search_providers(app: AppHandle) -> Result<Vec<SearchProvider>, String> {
    let data_dir = ensure_data_dir(&app)?;
    let providers_file = data_dir.join("search_providers.json");
    
    if !providers_file.exists() {
        // 返回默认搜索提供商
        let default_providers = vec![
            SearchProvider {
                id: "google".to_string(),
                name: "Google".to_string(),
                icon: "🔍".to_string(),
                base_url: "https://www.google.com/search".to_string(),
                search_param: "q".to_string(),
                enabled: true,
            },
            SearchProvider {
                id: "baidu".to_string(),
                name: "百度".to_string(),
                icon: "🐻".to_string(),
                base_url: "https://www.baidu.com/s".to_string(),
                search_param: "wd".to_string(),
                enabled: true,
            }
        ];
        return Ok(default_providers);
    }
    
    let content = fs::read_to_string(&providers_file)
        .map_err(|e| format!("Failed to read providers file: {}", e))?;
    
    let providers: Vec<SearchProvider> = serde_json::from_str(&content)
        .map_err(|e| format!("Failed to parse providers: {}", e))?;
    
    Ok(providers)
}

#[tauri::command]
async fn save_search_providers(app: AppHandle, providers: Vec<SearchProvider>) -> Result<(), String> {
    let data_dir = ensure_data_dir(&app)?;
    let providers_file = data_dir.join("search_providers.json");
    
    let content = serde_json::to_string_pretty(&providers)
        .map_err(|e| format!("Failed to serialize providers: {}", e))?;
    
    fs::write(&providers_file, content)
        .map_err(|e| format!("Failed to write providers file: {}", e))?;
    
    Ok(())
}

#[tauri::command]
async fn search_with_provider(provider_id: String, query: String, app: AppHandle) -> Result<String, String> {
    let providers = get_search_providers(app).await?;
    
    let provider = providers.iter()
        .find(|p| p.id == provider_id && p.enabled)
        .ok_or("Provider not found or disabled")?;
    
    let search_url = format!("{}?{}={}", provider.base_url, provider.search_param, urlencoding::encode(&query));
    
    Ok(search_url)
}

// 提示词模板管理命令 - 调用API服务器
#[tauri::command]
async fn get_prompt_templates(app: AppHandle) -> Result<Vec<PromptTemplate>, String> {
    // 获取认证信息
    let auth_data = get_auth_data(app.clone()).await?;
    
    if auth_data.is_none() {
        return Err("User not authenticated".to_string());
    }
    
    let auth = auth_data.unwrap();
    let client = reqwest::Client::new();
    
    let response = client
        .get("http://localhost:3001/api/prompt-templates")
        .header("Authorization", format!("Bearer {}", auth.token))
        .send()
        .await
        .map_err(|e| format!("Failed to fetch templates from API: {}", e))?;
    
    if !response.status().is_success() {
        return Err(format!("API request failed: {}", response.status()));
    }
    
    let api_templates: Vec<serde_json::Value> = response.json().await
        .map_err(|e| format!("Failed to parse API response: {}", e))?;
    
    // 转换API响应到本地格式
    let templates: Vec<PromptTemplate> = api_templates.into_iter().map(|t| {
        PromptTemplate {
            id: t["id"].as_str().unwrap_or("").to_string(),
            title: t["title"].as_str().unwrap_or("").to_string(),
            description: t["description"].as_str().unwrap_or("").to_string(),
            category: t["category"].as_str().unwrap_or("general").to_string(),
            prompt: t["content"].as_str().unwrap_or("").to_string(),
            parameters: "[]".to_string(),
            article: "".to_string(),
            usage_count: 0,
            rating: 0.0,
            is_public: false,
            local_only: true,
            synced_at: None,
            created_at: chrono::Utc::now(),
            updated_at: chrono::Utc::now(),
        }
    }).collect();
    
    println!("Successfully loaded {} templates from API", templates.len());
    Ok(templates)
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CreatePromptTemplateRequest {
    pub title: String,
    pub description: String,
    pub category: String,
    pub content: String,
    pub tags: Vec<String>,
}

#[tauri::command]
async fn create_prompt_template(app: AppHandle, template: CreatePromptTemplateRequest) -> Result<(), String> {
    // 获取认证信息
    let auth_data = get_auth_data(app.clone()).await?;
    
    if auth_data.is_none() {
        return Err("User not authenticated".to_string());
    }
    
    let auth = auth_data.unwrap();
    let client = reqwest::Client::new();
    
    let response = client
        .post("http://localhost:3001/api/prompt-templates")
        .header("Authorization", format!("Bearer {}", auth.token))
        .header("Content-Type", "application/json")
        .json(&serde_json::json!({
            "title": template.title,
            "description": template.description,
            "category": template.category,
            "content": template.content,
            "tags": template.tags,
            "isPublic": false // 默认私有，用户可以后续修改
        }))
        .send()
        .await
        .map_err(|e| format!("Failed to create template via API: {}", e))?;
    
    if !response.status().is_success() {
        let status = response.status();
        let error_text = response.text().await.unwrap_or_else(|_| "Unknown error".to_string());
        return Err(format!("API request failed: {} - {}", status, error_text));
    }
    
    println!("Successfully created template: {}", template.title);
    Ok(())
}

#[tauri::command]
async fn update_prompt_template(app: AppHandle, template: PromptTemplate) -> Result<(), String> {
    let data_dir = ensure_data_dir(&app)?;
    let templates_file = data_dir.join("prompt_templates.json");
    
    let mut templates = get_prompt_templates(app.clone()).await?;
    
    // 更新模板
    if let Some(existing) = templates.iter_mut().find(|t| t.id == template.id) {
        *existing = PromptTemplate {
            updated_at: chrono::Utc::now(),
            ..template
        };
    } else {
        return Err("Template not found".to_string());
    }
    
    let content = serde_json::to_string_pretty(&templates)
        .map_err(|e| format!("Failed to serialize templates: {}", e))?;
    
    fs::write(&templates_file, content)
        .map_err(|e| format!("Failed to write templates file: {}", e))?;
    
    Ok(())
}

#[tauri::command]
async fn delete_prompt_template(app: AppHandle, id: String) -> Result<(), String> {
    // 获取认证信息
    let auth_data = get_auth_data(app.clone()).await?;
    
    if auth_data.is_none() {
        return Err("User not authenticated".to_string());
    }
    
    let auth = auth_data.unwrap();
    let client = reqwest::Client::new();
    
    let response = client
        .delete(&format!("http://localhost:3001/api/prompt-templates/{}", id))
        .header("Authorization", format!("Bearer {}", auth.token))
        .send()
        .await
        .map_err(|e| format!("Failed to delete template via API: {}", e))?;
    
    if !response.status().is_success() {
        let status = response.status();
        let error_text = response.text().await.unwrap_or_else(|_| "Unknown error".to_string());
        return Err(format!("API request failed: {} - {}", status, error_text));
    }
    
    println!("Successfully deleted template: {}", id);
    Ok(())
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CreateKnowledgeFrameworkRequest {
    pub title: String,
    pub description: String,
}

// 修改知识框架命令以匹配前端接口
#[tauri::command]
async fn create_knowledge_framework(app: AppHandle, framework: CreateKnowledgeFrameworkRequest) -> Result<(), String> {
    let data_dir = ensure_data_dir(&app)?;
    let frameworks_file = data_dir.join("knowledge_frameworks.json");
    
    let mut frameworks = get_knowledge_frameworks(app.clone()).await?;
    
    // 生成新的ID和时间戳
    let now = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap()
        .as_millis()
        .to_string();
    
    let framework_name = framework.title.clone();
    let new_framework = KnowledgeFramework {
        id: format!("framework_{}", now),
        title: framework.title,
        description: framework.description,
        domain: "general".to_string(),
        version: 1,
        is_built_in: false,
        is_public: false,
        local_only: true,
        synced_at: None,
        created_at: chrono::Utc::now(),
        updated_at: chrono::Utc::now(),
    };
    
    frameworks.push(new_framework);
    
    let content = serde_json::to_string_pretty(&frameworks)
        .map_err(|e| format!("Failed to serialize frameworks: {}", e))?;
    
    fs::write(&frameworks_file, content)
        .map_err(|e| format!("Failed to write frameworks file: {}", e))?;
    
    println!("Successfully created framework: {}", framework_name);
    Ok(())
}

// 提交知识框架到服务器
#[tauri::command]
async fn submit_knowledge_framework_to_server(app: AppHandle, framework_id: String, is_public: bool) -> Result<(), String> {
    // 获取认证信息
    let auth_data = get_auth_data(app.clone()).await?;
    
    if auth_data.is_none() {
        return Err("User not authenticated".to_string());
    }
    
    let auth = auth_data.unwrap();
    
    // 从本地获取框架数据
    let frameworks = get_knowledge_frameworks(app.clone()).await?;
    let framework = frameworks.iter().find(|f| f.id == framework_id)
        .ok_or("Framework not found")?;
    
    let client = reqwest::Client::new();
    
    let response = client
        .post("http://localhost:3001/api/knowledge-frameworks")
        .header("Authorization", format!("Bearer {}", auth.token))
        .header("Content-Type", "application/json")
        .json(&serde_json::json!({
            "title": framework.title,
            "description": framework.description,
            "domain": framework.domain,
            "isPublic": is_public,
            "nodes": []
        }))
        .send()
        .await
        .map_err(|e| format!("Failed to submit framework to server: {}", e))?;
    
    if !response.status().is_success() {
        let status = response.status();
        let error_text = response.text().await.unwrap_or_else(|_| "Unknown error".to_string());
        return Err(format!("API request failed: {} - {}", status, error_text));
    }
    
    println!("Successfully submitted framework to server: {}", framework.title);
    Ok(())
}

// 从服务器获取知识框架
#[tauri::command]
async fn get_server_knowledge_frameworks(app: AppHandle) -> Result<Vec<KnowledgeFramework>, String> {
    // 获取认证信息
    let auth_data = get_auth_data(app.clone()).await?;
    
    if auth_data.is_none() {
        return Err("User not authenticated".to_string());
    }
    
    let auth = auth_data.unwrap();
    let client = reqwest::Client::new();
    
    let response = client
        .get("http://localhost:3001/api/knowledge-frameworks")
        .header("Authorization", format!("Bearer {}", auth.token))
        .send()
        .await
        .map_err(|e| format!("Failed to fetch frameworks from server: {}", e))?;
    
    if !response.status().is_success() {
        return Err(format!("API request failed: {}", response.status()));
    }
    
    let api_frameworks: Vec<serde_json::Value> = response.json().await
        .map_err(|e| format!("Failed to parse API response: {}", e))?;
    
    // 转换API响应到本地格式
    let frameworks: Vec<KnowledgeFramework> = api_frameworks.into_iter().map(|f| {
        KnowledgeFramework {
            id: f["id"].as_str().unwrap_or("").to_string(),
            title: f["name"].as_str().unwrap_or("").to_string(),
            description: f["description"].as_str().unwrap_or("").to_string(),
            domain: f["domain"].as_str().unwrap_or("general").to_string(),
            version: f["version"].as_u64().unwrap_or(1) as i64,
            is_built_in: f["isBuiltIn"].as_bool().unwrap_or(false),
            is_public: f["isPublic"].as_bool().unwrap_or(false),
            local_only: false,
            synced_at: Some(chrono::Utc::now()),
            created_at: chrono::Utc::now(),
            updated_at: chrono::Utc::now(),
        }
    }).collect();
    
    println!("Successfully loaded {} frameworks from server", frameworks.len());
    Ok(frameworks)
}

// 数据库和AI服务命令 (暂时注释掉，等修复完SQLx类型映射问题后再启用)
/*
#[tauri::command]
async fn db_create_api_key(
    state: State<'_, AppState>,
    request: CreateApiKeyRequest,
) -> Result<ApiKeyConfig, String> {
    match state.database.create_api_key(request).await {
        Ok(api_key) => Ok(api_key),
        Err(e) => Err(e.to_string()),
    }
}

#[tauri::command]
async fn db_get_api_keys(
    state: State<'_, AppState>,
) -> Result<Vec<ApiKeyConfig>, String> {
    match state.database.get_api_keys().await {
        Ok(api_keys) => Ok(api_keys),
        Err(e) => Err(e.to_string()),
    }
}

#[tauri::command]
async fn db_call_ai(
    state: State<'_, AppState>,
    request: AIRequest,
) -> Result<AIResponse, String> {
    match state.ai_service.call_ai(request).await {
        Ok(response) => Ok(response),
        Err(e) => Err(e.to_string()),
    }
}

#[tauri::command]
async fn db_create_knowledge_framework_with_ai(
    state: State<'_, AppState>,
    title: String,
    description: String,
    domain: String,
) -> Result<KnowledgeFramework, String> {
    match state.ai_service.create_knowledge_framework_with_ai(&title, &description, &domain).await {
        Ok(framework) => Ok(framework),
        Err(e) => Err(e.to_string()),
    }
}

#[tauri::command]
async fn db_create_flow_design_with_ai(
    state: State<'_, AppState>,
    title: String,
    description: String,
    goals: String,
    difficulty: String,
) -> Result<FlowDesign, String> {
    match state.ai_service.create_flow_design_with_ai(&title, &description, &goals, &difficulty).await {
        Ok(flow) => Ok(flow),
        Err(e) => Err(e.to_string()),
    }
}

#[tauri::command]
async fn db_create_prompt_template_with_ai(
    state: State<'_, AppState>,
    title: String,
    description: String,
    category: String,
    purpose: String,
    target_user: String,
) -> Result<PromptTemplate, String> {
    match state.ai_service.create_prompt_template_with_ai(&title, &description, &category, &purpose, &target_user).await {
        Ok(template) => Ok(template),
        Err(e) => Err(e.to_string()),
    }
}

#[tauri::command]
async fn db_get_knowledge_frameworks(
    state: State<'_, AppState>,
) -> Result<Vec<KnowledgeFramework>, String> {
    match state.database.get_knowledge_frameworks().await {
        Ok(frameworks) => Ok(frameworks),
        Err(e) => Err(e.to_string()),
    }
}

#[tauri::command]
async fn db_get_flow_designs(
    state: State<'_, AppState>,
) -> Result<Vec<FlowDesign>, String> {
    match state.database.get_flow_designs().await {
        Ok(flows) => Ok(flows),
        Err(e) => Err(e.to_string()),
    }
}

#[tauri::command]
async fn db_get_prompt_templates(
    state: State<'_, AppState>,
) -> Result<Vec<PromptTemplate>, String> {
    match state.database.get_prompt_templates().await {
        Ok(templates) => Ok(templates),
        Err(e) => Err(e.to_string()),
    }
}
*/

// 第一个 run 函数已删除，使用文件末尾的完整版本

// 记忆管理命令
#[tauri::command]
async fn get_memories(app: AppHandle, filter: Option<models::MemoryFilter>) -> Result<Vec<models::Memory>, String> {
    let data_dir = ensure_data_dir(&app)?;
    let memories_file = data_dir.join("memories.json");
    
    if !memories_file.exists() {
        return Ok(vec![]);
    }
    
    let content = fs::read_to_string(&memories_file)
        .map_err(|e| format!("Failed to read memories file: {}", e))?;
    
    if content.trim().is_empty() {
        return Ok(vec![]);
    }
    
    let mut memories: Vec<models::Memory> = serde_json::from_str(&content)
        .map_err(|e| format!("Failed to parse memories: {}", e))?;
    
    // 应用筛选器
    if let Some(filter) = filter {
        if let Some(date_range) = filter.date_range {
            memories.retain(|m| m.date >= date_range.start && m.date <= date_range.end);
        }
        
        if let Some(location) = filter.location {
            memories.retain(|m| {
                if let Some(mem_location) = &m.location {
                    mem_location.to_lowercase().contains(&location.to_lowercase())
                } else {
                    false
                }
            });
        }
        
        if let Some(people) = filter.people {
            memories.retain(|m| {
                let mem_people: Vec<String> = serde_json::from_str(&m.people).unwrap_or_default();
                people.iter().any(|person| {
                    mem_people.iter().any(|p| p.to_lowercase().contains(&person.to_lowercase()))
                })
            });
        }
        
        if let Some(tags) = filter.tags {
            memories.retain(|m| {
                let mem_tags: Vec<String> = serde_json::from_str(&m.tags).unwrap_or_default();
                tags.iter().any(|tag| {
                    mem_tags.iter().any(|t| t.to_lowercase().contains(&tag.to_lowercase()))
                })
            });
        }
        
        if let Some(emotions) = filter.emotions {
            memories.retain(|m| {
                let mem_emotions: Vec<String> = serde_json::from_str(&m.emotions).unwrap_or_default();
                emotions.iter().any(|emotion| {
                    mem_emotions.iter().any(|e| e.to_lowercase().contains(&emotion.to_lowercase()))
                })
            });
        }
        
        if let Some(has_image) = filter.has_image {
            memories.retain(|m| m.image_url.is_some() == has_image);
        }
        
        if let Some(has_audio) = filter.has_audio {
            memories.retain(|m| m.audio_url.is_some() == has_audio);
        }
        
        if let Some(has_video) = filter.has_video {
            memories.retain(|m| m.video_url.is_some() == has_video);
        }
    }
    
    // 按日期降序排序
    memories.sort_by(|a, b| b.date.cmp(&a.date));
    
    Ok(memories)
}

#[tauri::command]
async fn create_memory(app: AppHandle, request: models::CreateMemoryRequest) -> Result<models::Memory, String> {
    let data_dir = ensure_data_dir(&app)?;
    let memories_file = data_dir.join("memories.json");
    
    let mut memories = get_memories(app.clone(), None).await?;
    
    let now = chrono::Utc::now();
    let memory_id = format!("memory_{}", now.timestamp_millis());
    
    let new_memory = models::Memory {
        id: memory_id,
        title: request.title,
        content: request.content,
        date: request.date,
        location: request.location,
        people: serde_json::to_string(&request.people.unwrap_or_default())
            .map_err(|e| format!("Failed to serialize people: {}", e))?,
        tags: serde_json::to_string(&request.tags.unwrap_or_default())
            .map_err(|e| format!("Failed to serialize tags: {}", e))?,
        emotions: serde_json::to_string(&request.emotions.unwrap_or_default())
            .map_err(|e| format!("Failed to serialize emotions: {}", e))?,
        image_url: None,
        audio_url: None,
        video_url: None,
        ai_generated: false,
        visibility: request.visibility.unwrap_or_else(|| "private".to_string()),
        created_at: now,
        updated_at: now,
    };
    
    memories.insert(0, new_memory.clone());
    
    let content = serde_json::to_string_pretty(&memories)
        .map_err(|e| format!("Failed to serialize memories: {}", e))?;
    
    fs::write(&memories_file, content)
        .map_err(|e| format!("Failed to write memories file: {}", e))?;
    
    println!("Successfully created memory: {}", new_memory.title);
    Ok(new_memory)
}

#[tauri::command]
async fn update_memory(app: AppHandle, id: String, updates: models::UpdateMemoryRequest) -> Result<models::Memory, String> {
    let data_dir = ensure_data_dir(&app)?;
    let memories_file = data_dir.join("memories.json");
    
    let mut memories = get_memories(app.clone(), None).await?;
    
    let updated_memory = {
        let memory = memories.iter_mut()
            .find(|m| m.id == id)
            .ok_or("Memory not found")?;
        
        // 应用更新
        if let Some(title) = updates.title {
            memory.title = title;
        }
        if let Some(content) = updates.content {
            memory.content = content;
        }
        if let Some(date) = updates.date {
            memory.date = date;
        }
        if let Some(location) = updates.location {
            memory.location = Some(location);
        }
        if let Some(people) = updates.people {
            memory.people = serde_json::to_string(&people)
                .map_err(|e| format!("Failed to serialize people: {}", e))?;
        }
        if let Some(tags) = updates.tags {
            memory.tags = serde_json::to_string(&tags)
                .map_err(|e| format!("Failed to serialize tags: {}", e))?;
        }
        if let Some(emotions) = updates.emotions {
            memory.emotions = serde_json::to_string(&emotions)
                .map_err(|e| format!("Failed to serialize emotions: {}", e))?;
        }
        if let Some(image_url) = updates.image_url {
            memory.image_url = Some(image_url);
        }
        if let Some(audio_url) = updates.audio_url {
            memory.audio_url = Some(audio_url);
        }
        if let Some(video_url) = updates.video_url {
            memory.video_url = Some(video_url);
        }
        if let Some(ai_generated) = updates.ai_generated {
            memory.ai_generated = ai_generated;
        }
        if let Some(visibility) = updates.visibility {
            memory.visibility = visibility;
        }
        
        memory.updated_at = chrono::Utc::now();
        memory.clone()
    };
    
    let content = serde_json::to_string_pretty(&memories)
        .map_err(|e| format!("Failed to serialize memories: {}", e))?;
    
    fs::write(&memories_file, content)
        .map_err(|e| format!("Failed to write memories file: {}", e))?;
    
    println!("Successfully updated memory: {}", updated_memory.title);
    Ok(updated_memory)
}

#[tauri::command]
async fn delete_memory(app: AppHandle, id: String) -> Result<(), String> {
    let data_dir = ensure_data_dir(&app)?;
    let memories_file = data_dir.join("memories.json");
    
    let mut memories = get_memories(app.clone(), None).await?;
    
    let original_len = memories.len();
    memories.retain(|m| m.id != id);
    
    if memories.len() == original_len {
        return Err("Memory not found".to_string());
    }
    
    let content = serde_json::to_string_pretty(&memories)
        .map_err(|e| format!("Failed to serialize memories: {}", e))?;
    
    fs::write(&memories_file, content)
        .map_err(|e| format!("Failed to write memories file: {}", e))?;
    
    println!("Successfully deleted memory: {}", id);
    Ok(())
}

#[tauri::command]
async fn search_memories(app: AppHandle, query: String) -> Result<models::MemorySearchResult, String> {
    let memories = get_memories(app, None).await?;
    
    let query_lower = query.to_lowercase();
    let filtered_memories: Vec<models::Memory> = memories.into_iter()
        .filter(|memory| {
            memory.title.to_lowercase().contains(&query_lower) ||
            memory.content.to_lowercase().contains(&query_lower) ||
            memory.location.as_ref().map_or(false, |loc| loc.to_lowercase().contains(&query_lower)) ||
            {
                let people: Vec<String> = serde_json::from_str(&memory.people).unwrap_or_default();
                people.iter().any(|person| person.to_lowercase().contains(&query_lower))
            } ||
            {
                let tags: Vec<String> = serde_json::from_str(&memory.tags).unwrap_or_default();
                tags.iter().any(|tag| tag.to_lowercase().contains(&query_lower))
            }
        })
        .collect();
    
    let total = filtered_memories.len() as i64;
    
    Ok(models::MemorySearchResult {
        memories: filtered_memories,
        total,
        page: 1,
        page_size: total,
        has_more: false,
    })
}

#[tauri::command]
async fn get_memory_stats(app: AppHandle) -> Result<models::MemoryStats, String> {
    let memories = get_memories(app, None).await?;
    
    let now = chrono::Utc::now();
    let this_month_start = now.with_day(1).unwrap().with_hour(0).unwrap().with_minute(0).unwrap().with_second(0).unwrap();
    let this_year_start = now.with_month(1).unwrap().with_day(1).unwrap().with_hour(0).unwrap().with_minute(0).unwrap().with_second(0).unwrap();
    
    let total_memories = memories.len() as i64;
    let memories_this_month = memories.iter().filter(|m| m.created_at >= this_month_start).count() as i64;
    let memories_this_year = memories.iter().filter(|m| m.created_at >= this_year_start).count() as i64;
    let ai_generated_count = memories.iter().filter(|m| m.ai_generated).count() as i64;
    
    // 统计地点
    let mut location_counts = std::collections::HashMap::new();
    for memory in &memories {
        if let Some(location) = &memory.location {
            *location_counts.entry(location.clone()).or_insert(0) += 1;
        }
    }
    let mut top_locations: Vec<models::LocationCount> = location_counts.into_iter()
        .map(|(location, count)| models::LocationCount { location, count })
        .collect();
    top_locations.sort_by(|a, b| b.count.cmp(&a.count));
    top_locations.truncate(5);
    
    // 统计人物
    let mut people_counts = std::collections::HashMap::new();
    for memory in &memories {
        let people: Vec<String> = serde_json::from_str(&memory.people).unwrap_or_default();
        for person in people {
            *people_counts.entry(person).or_insert(0) += 1;
        }
    }
    let mut top_people: Vec<models::PersonCount> = people_counts.into_iter()
        .map(|(person, count)| models::PersonCount { person, count })
        .collect();
    top_people.sort_by(|a, b| b.count.cmp(&a.count));
    top_people.truncate(5);
    
    // 统计情感
    let mut emotion_counts = std::collections::HashMap::new();
    for memory in &memories {
        let emotions: Vec<String> = serde_json::from_str(&memory.emotions).unwrap_or_default();
        for emotion in emotions {
            *emotion_counts.entry(emotion).or_insert(0) += 1;
        }
    }
    let mut top_emotions: Vec<models::EmotionCount> = emotion_counts.into_iter()
        .map(|(emotion, count)| models::EmotionCount { emotion, count })
        .collect();
    top_emotions.sort_by(|a, b| b.count.cmp(&a.count));
    top_emotions.truncate(5);
    
    Ok(models::MemoryStats {
        total_memories,
        memories_this_month,
        memories_this_year,
        top_locations,
        top_people,
        top_emotions,
        ai_generated_count,
    })
}

#[tauri::command]
async fn generate_memory_image(_app: AppHandle, request: models::AIImageGenerationRequest) -> Result<String, String> {
    // 使用 Pollinations API 生成图片
    let style_prompt = match request.style.as_deref() {
        Some("realistic") => format!("photorealistic, high quality, detailed, {}", request.prompt),
        Some("artistic") => format!("artistic, beautiful, creative, {}", request.prompt),
        Some("cartoon") => format!("cartoon style, animated, colorful, {}", request.prompt),
        Some("vintage") => format!("vintage style, retro, nostalgic, {}", request.prompt),
        _ => format!("artistic, beautiful, creative, {}", request.prompt),
    };
    
    // 构建图片URL
    let encoded_prompt = urlencoding::encode(&style_prompt);
    let seed = std::time::SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .unwrap()
        .as_millis();
    
    let image_url = format!(
        "https://image.pollinations.ai/prompt/{}?width=768&height=432&seed={}",
        encoded_prompt, seed
    );
    
    // 验证图片是否可访问
    let client = reqwest::Client::new();
    let response = client.head(&image_url).send().await
        .map_err(|e| format!("Failed to verify image: {}", e))?;
    
    if !response.status().is_success() {
        return Err("Failed to generate image".to_string());
    }
    
    println!("Successfully generated image for memory: {}", request.memory_id);
    Ok(image_url)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            get_api_keys,
            save_api_key,
            delete_api_key,
            test_api_key,
            get_settings,
            save_settings,
            chat_with_ai,
            get_knowledge_frameworks,
            save_knowledge_framework,
            delete_knowledge_framework,
            generate_child_nodes,
            send_verification_code,
            verify_code_and_login,
            save_auth_data,
            get_auth_data,
            logout,
            get_search_providers,
            save_search_providers,
            search_with_provider,
            get_prompt_templates,
            create_prompt_template,
            update_prompt_template,
            delete_prompt_template,
            create_knowledge_framework,
            submit_knowledge_framework_to_server,
            get_server_knowledge_frameworks,
            // 记忆管理命令
            get_memories,
            create_memory,
            update_memory,
            delete_memory,
            search_memories,
            get_memory_stats,
            generate_memory_image,
            // 本地模板管理
            get_local_prompt_templates,
            save_local_prompt_template,
            delete_local_prompt_template,
            // 本地流程管理
            get_local_flows,
            save_local_flow,
            delete_local_flow
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}