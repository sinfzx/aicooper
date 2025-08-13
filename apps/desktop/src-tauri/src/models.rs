use serde::{Deserialize, Serialize};
use chrono::{DateTime, Utc};

// API Key 配置
#[derive(Debug, Clone, Serialize, Deserialize, sqlx::FromRow)]
pub struct ApiKeyConfig {
    pub id: String,
    pub name: String,
    pub provider: String, // openai, anthropic, etc.
    pub api_key: String,
    pub base_url: Option<String>,
    pub model: Option<String>,
    pub is_active: bool,
    pub is_default: bool,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CreateApiKeyRequest {
    pub name: String,
    pub provider: String,
    pub api_key: String,
    pub base_url: Option<String>,
    pub model: Option<String>,
    pub is_default: bool,
}

// 知识框架
#[derive(Debug, Clone, Serialize, Deserialize, sqlx::FromRow)]
pub struct KnowledgeFramework {
    pub id: String,
    pub title: String,
    pub description: String,
    pub domain: String,
    pub version: i64,
    pub is_built_in: bool,
    pub is_public: bool,
    pub local_only: bool,
    pub synced_at: Option<DateTime<Utc>>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Clone, Serialize, Deserialize, sqlx::FromRow)]
pub struct KnowledgeNode {
    pub id: String,
    pub framework_id: String,
    pub parent_id: Option<String>,
    pub title: String,
    pub description: Option<String>,
    pub content: Option<String>,
    pub questions: String, // JSON array
    pub urls: String, // JSON array
    pub level: i64,
    pub order_index: i64,
    pub expanded: bool,
    pub position_x: Option<f64>,
    pub position_y: Option<f64>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

// 流程设计
#[derive(Debug, Clone, Serialize, Deserialize, sqlx::FromRow)]
pub struct FlowDesign {
    pub id: String,
    pub title: String,
    pub description: String,
    pub article: String,
    pub difficulty: String, // easy, medium, hard
    pub total_time: Option<String>,
    pub is_public: bool,
    pub local_only: bool,
    pub synced_at: Option<DateTime<Utc>>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Clone, Serialize, Deserialize, sqlx::FromRow)]
pub struct FlowStep {
    pub id: String,
    pub flow_id: String,
    pub title: String,
    pub description: String,
    pub order_index: i64,
    pub estimated_time: Option<String>,
    pub difficulty: String,
    pub questions: String, // JSON array
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

// 提示模板
#[derive(Debug, Clone, Serialize, Deserialize, sqlx::FromRow)]
pub struct PromptTemplate {
    pub id: String,
    pub title: String,
    pub description: String,
    pub prompt: String,
    pub category: String,
    pub parameters: String, // JSON array
    pub article: String,
    pub usage_count: i64,
    pub rating: f64,
    pub is_public: bool,
    pub local_only: bool,
    pub synced_at: Option<DateTime<Utc>>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

// AI 服务请求和响应
#[derive(Debug, Serialize, Deserialize)]
pub struct AIRequest {
    pub prompt: String,
    pub model: Option<String>,
    pub max_tokens: Option<u32>,
    pub temperature: Option<f32>,
    pub system_prompt: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct AIResponse {
    pub success: bool,
    pub data: Option<String>,
    pub error: Option<String>,
    pub tokens: Option<u32>,
    pub model: Option<String>,
    pub provider: Option<String>,
}

// OpenAI API 结构
#[derive(Debug, Serialize, Deserialize)]
pub struct OpenAIMessage {
    pub role: String,
    pub content: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct OpenAIRequest {
    pub model: String,
    pub messages: Vec<OpenAIMessage>,
    pub max_tokens: Option<u32>,
    pub temperature: Option<f32>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct OpenAIChoice {
    pub message: OpenAIMessage,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct OpenAIUsage {
    pub total_tokens: u32,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct OpenAIResponse {
    pub choices: Vec<OpenAIChoice>,
    pub usage: Option<OpenAIUsage>,
    pub model: String,
}

// Anthropic API 结构
#[derive(Debug, Serialize, Deserialize)]
pub struct AnthropicMessage {
    pub role: String,
    pub content: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct AnthropicRequest {
    pub model: String,
    pub max_tokens: u32,
    pub messages: Vec<AnthropicMessage>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct AnthropicContent {
    pub text: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct AnthropicUsage {
    pub input_tokens: u32,
    pub output_tokens: u32,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct AnthropicResponse {
    pub content: Vec<AnthropicContent>,
    pub usage: Option<AnthropicUsage>,
    pub model: String,
}

// Pollinations API 结构
#[derive(Debug, Serialize, Deserialize)]
pub struct PollinationsMessage {
    pub role: String,
    pub content: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PollinationsRequest {
    pub messages: Vec<PollinationsMessage>,
    pub model: String,
    #[serde(rename = "jsonMode")]
    pub json_mode: bool,
}

// 记忆管理
#[derive(Debug, Clone, Serialize, Deserialize, sqlx::FromRow)]
pub struct Memory {
    pub id: String,
    pub title: String,
    pub content: String,
    pub date: DateTime<Utc>,
    pub location: Option<String>,
    pub people: String, // JSON array
    pub tags: String, // JSON array
    pub emotions: String, // JSON array
    pub image_url: Option<String>,
    pub audio_url: Option<String>,
    pub video_url: Option<String>,
    pub ai_generated: bool,
    pub visibility: String, // private, shared, public
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CreateMemoryRequest {
    pub title: String,
    pub content: String,
    pub date: DateTime<Utc>,
    pub location: Option<String>,
    pub people: Option<Vec<String>>,
    pub tags: Option<Vec<String>>,
    pub emotions: Option<Vec<String>>,
    pub visibility: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct UpdateMemoryRequest {
    pub title: Option<String>,
    pub content: Option<String>,
    pub date: Option<DateTime<Utc>>,
    pub location: Option<String>,
    pub people: Option<Vec<String>>,
    pub tags: Option<Vec<String>>,
    pub emotions: Option<Vec<String>>,
    pub image_url: Option<String>,
    pub audio_url: Option<String>,
    pub video_url: Option<String>,
    pub ai_generated: Option<bool>,
    pub visibility: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct MemoryFilter {
    pub date_range: Option<DateRange>,
    pub location: Option<String>,
    pub people: Option<Vec<String>>,
    pub tags: Option<Vec<String>>,
    pub emotions: Option<Vec<String>>,
    pub has_image: Option<bool>,
    pub has_audio: Option<bool>,
    pub has_video: Option<bool>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct DateRange {
    pub start: DateTime<Utc>,
    pub end: DateTime<Utc>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct MemoryStats {
    pub total_memories: i64,
    pub memories_this_month: i64,
    pub memories_this_year: i64,
    pub top_locations: Vec<LocationCount>,
    pub top_people: Vec<PersonCount>,
    pub top_emotions: Vec<EmotionCount>,
    pub ai_generated_count: i64,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct LocationCount {
    pub location: String,
    pub count: i64,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PersonCount {
    pub person: String,
    pub count: i64,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct EmotionCount {
    pub emotion: String,
    pub count: i64,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct MemorySearchResult {
    pub memories: Vec<Memory>,
    pub total: i64,
    pub page: i64,
    pub page_size: i64,
    pub has_more: bool,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct AIImageGenerationRequest {
    pub memory_id: String,
    pub prompt: String,
    pub style: Option<String>,
    pub aspect_ratio: Option<String>,
    pub quality: Option<String>,
}