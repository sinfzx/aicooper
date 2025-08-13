use reqwest::Client;
use anyhow::{Result, anyhow};
// use serde_json::json;
use std::sync::Arc;

use crate::models::*;
use crate::database::Database;

pub struct AIService {
    client: Client,
    database: Arc<Database>,
}

impl AIService {
    pub fn new(database: Arc<Database>) -> Self {
        let client = Client::new();
        AIService { client, database }
    }

    pub async fn call_ai(&self, request: AIRequest) -> Result<AIResponse> {
        // 获取可用的API Keys
        let api_keys = self.database.get_api_keys().await?;
        let active_keys: Vec<_> = api_keys.into_iter().filter(|k| k.is_active).collect();

        if active_keys.is_empty() {
            // 使用兜底服务 Pollinations
            return self.call_pollinations(&request).await;
        }

        // 按优先级尝试API Keys（默认的排在前面）
        for api_key in &active_keys {
            match self.call_provider(api_key, &request).await {
                Ok(response) => return Ok(response),
                Err(e) => {
                    eprintln!("Failed to call {}: {}", api_key.provider, e);
                    continue;
                }
            }
        }

        // 所有API Keys都失败，使用兜底服务
        self.call_pollinations(&request).await
    }

    async fn call_provider(&self, api_key: &ApiKeyConfig, request: &AIRequest) -> Result<AIResponse> {
        match api_key.provider.as_str() {
            "openai" => self.call_openai(api_key, request).await,
            "anthropic" => self.call_anthropic(api_key, request).await,
            _ => Err(anyhow!("Unsupported provider: {}", api_key.provider))
        }
    }

    async fn call_openai(&self, api_key: &ApiKeyConfig, request: &AIRequest) -> Result<AIResponse> {
        let url = api_key.base_url
            .as_ref()
            .map(|base| format!("{}/chat/completions", base.trim_end_matches('/')))
            .unwrap_or_else(|| "https://api.openai.com/v1/chat/completions".to_string());

        let mut messages = vec![];
        
        if let Some(system_prompt) = &request.system_prompt {
            messages.push(OpenAIMessage {
                role: "system".to_string(),
                content: system_prompt.clone(),
            });
        }
        
        messages.push(OpenAIMessage {
            role: "user".to_string(),
            content: request.prompt.clone(),
        });

        let openai_request = OpenAIRequest {
            model: request.model.clone().or_else(|| api_key.model.clone()).unwrap_or_else(|| "gpt-3.5-turbo".to_string()),
            messages,
            max_tokens: request.max_tokens,
            temperature: request.temperature,
        };

        let response = self.client
            .post(&url)
            .header("Authorization", format!("Bearer {}", api_key.api_key))
            .header("Content-Type", "application/json")
            .json(&openai_request)
            .send()
            .await?;

        if !response.status().is_success() {
            let error_text = response.text().await?;
            return Err(anyhow!("OpenAI API error: {}", error_text));
        }

        let openai_response: OpenAIResponse = response.json().await?;
        
        if let Some(choice) = openai_response.choices.first() {
            Ok(AIResponse {
                success: true,
                data: Some(choice.message.content.clone()),
                error: None,
                tokens: openai_response.usage.map(|u| u.total_tokens),
                model: Some(openai_response.model),
                provider: Some("openai".to_string()),
            })
        } else {
            Err(anyhow!("No response from OpenAI"))
        }
    }

    async fn call_anthropic(&self, api_key: &ApiKeyConfig, request: &AIRequest) -> Result<AIResponse> {
        let url = api_key.base_url
            .as_ref()
            .map(|base| format!("{}/messages", base.trim_end_matches('/')))
            .unwrap_or_else(|| "https://api.anthropic.com/v1/messages".to_string());

        let mut messages = vec![];
        
        if let Some(system_prompt) = &request.system_prompt {
            messages.push(AnthropicMessage {
                role: "user".to_string(),
                content: format!("System: {}\n\nUser: {}", system_prompt, request.prompt),
            });
        } else {
            messages.push(AnthropicMessage {
                role: "user".to_string(),
                content: request.prompt.clone(),
            });
        }

        let anthropic_request = AnthropicRequest {
            model: request.model.clone().or_else(|| api_key.model.clone()).unwrap_or_else(|| "claude-3-sonnet-20240229".to_string()),
            max_tokens: request.max_tokens.unwrap_or(4096),
            messages,
        };

        let response = self.client
            .post(&url)
            .header("x-api-key", &api_key.api_key)
            .header("Content-Type", "application/json")
            .header("anthropic-version", "2023-06-01")
            .json(&anthropic_request)
            .send()
            .await?;

        if !response.status().is_success() {
            let error_text = response.text().await?;
            return Err(anyhow!("Anthropic API error: {}", error_text));
        }

        let anthropic_response: AnthropicResponse = response.json().await?;
        
        if let Some(content) = anthropic_response.content.first() {
            Ok(AIResponse {
                success: true,
                data: Some(content.text.clone()),
                error: None,
                tokens: anthropic_response.usage.map(|u| u.input_tokens + u.output_tokens),
                model: Some(anthropic_response.model),
                provider: Some("anthropic".to_string()),
            })
        } else {
            Err(anyhow!("No response from Anthropic"))
        }
    }

    async fn call_pollinations(&self, request: &AIRequest) -> Result<AIResponse> {
        let url = "https://text.pollinations.ai/";

        let mut messages = vec![];
        
        if let Some(system_prompt) = &request.system_prompt {
            messages.push(PollinationsMessage {
                role: "system".to_string(),
                content: system_prompt.clone(),
            });
        }
        
        messages.push(PollinationsMessage {
            role: "user".to_string(),
            content: request.prompt.clone(),
        });

        let pollinations_request = PollinationsRequest {
            messages,
            model: request.model.clone().unwrap_or_else(|| "openai".to_string()),
            json_mode: false,
        };

        let response = self.client
            .post(url)
            .header("Content-Type", "application/json")
            .json(&pollinations_request)
            .send()
            .await?;

        if !response.status().is_success() {
            let error_text = response.text().await?;
            return Err(anyhow!("Pollinations API error: {}", error_text));
        }

        let response_text = response.text().await?;
        
        Ok(AIResponse {
            success: true,
            data: Some(response_text),
            error: None,
            tokens: None,
            model: Some("pollinations".to_string()),
            provider: Some("pollinations".to_string()),
        })
    }

    // AI辅助创建知识框架
    pub async fn create_knowledge_framework_with_ai(&self, title: &str, description: &str, domain: &str) -> Result<KnowledgeFramework> {
        let prompt = format!(
            "请为以下知识框架生成详细的结构化内容：\n\n标题：{}\n描述：{}\n领域：{}\n\n请生成一个包含3-5个主要知识节点的框架，每个节点应该包含：\n1. 标题\n2. 描述\n3. 3-5个相关问题\n4. 学习建议\n\n请以JSON格式返回结构化数据。",
            title, description, domain
        );

        let ai_request = AIRequest {
            prompt,
            model: None,
            max_tokens: Some(2000),
            temperature: Some(0.7),
            system_prompt: Some("你是一个专业的知识架构师，擅长创建结构化的学习框架。".to_string()),
        };

        let ai_response = self.call_ai(ai_request).await?;
        
        if let Some(content) = &ai_response.data {
            // 创建知识框架
            let framework = self.database.create_knowledge_framework(title, description, domain).await?;
            
            // 暂时注释掉，等修复数据库方法后再启用
            // 尝试解析AI生成的内容并创建节点
            // 这里可以添加更复杂的解析逻辑
            /*
            let _ = self.database.create_knowledge_node(
                &framework.id,
                None,
                "AI生成的内容",
                Some("基于AI分析生成的知识结构"),
                Some(content),
                "[]",
                1,
                1
            ).await;
            */

            Ok(framework)
        } else {
            Err(anyhow!("AI failed to generate content"))
        }
    }

    // AI辅助创建流程设计
    pub async fn create_flow_design_with_ai(&self, title: &str, description: &str, goals: &str, difficulty: &str) -> Result<FlowDesign> {
        let prompt = format!(
            "请为以下流程设计生成详细的步骤：\n\n标题：{}\n描述：{}\n目标：{}\n难度：{}\n\n请生成一个包含5-8个步骤的详细流程，每个步骤应该包含：\n1. 步骤标题\n2. 详细描述\n3. 预估时间\n4. 所需工具或资源\n5. 注意事项\n\n请以结构化的markdown格式返回。",
            title, description, goals, difficulty
        );

        let ai_request = AIRequest {
            prompt,
            model: None,
            max_tokens: Some(3000),
            temperature: Some(0.7),
            system_prompt: Some("你是一个专业的流程设计师，擅长创建详细的操作流程。".to_string()),
        };

        let ai_response = self.call_ai(ai_request).await?;
        
        if let Some(content) = &ai_response.data {
            let article = format!("# {}\n\n{}\n\n## 目标\n{}\n\n## AI生成的流程\n\n{}", title, description, goals, content);
            // 暂时注释掉，等修复数据库方法后再启用
            /*
            let flow = self.database.create_flow_design(title, description, &article, difficulty, Some("待估算")).await?;
            Ok(flow)
            */
            // 临时返回一个模拟的FlowDesign
            Ok(FlowDesign {
                id: uuid::Uuid::new_v4().to_string(),
                title: title.to_string(),
                description: description.to_string(),
                article,
                difficulty: difficulty.to_string(),
                total_time: Some("待估算".to_string()),
                is_public: false,
                local_only: true,
                synced_at: None,
                created_at: chrono::Utc::now(),
                updated_at: chrono::Utc::now(),
            })
        } else {
            Err(anyhow!("AI failed to generate content"))
        }
    }

    // AI辅助创建提示模板
    pub async fn create_prompt_template_with_ai(&self, title: &str, description: &str, category: &str, purpose: &str, target_user: &str) -> Result<PromptTemplate> {
        let prompt = format!(
            "请为以下需求创建一个专业的AI提示词模板：\n\n标题：{}\n描述：{}\n分类：{}\n用途：{}\n目标用户：{}\n\n请生成：\n1. 一个结构化的提示词模板（包含参数占位符）\n2. 参数定义（名称、描述、类型、是否必需）\n3. 使用说明\n\n请确保提示词专业、清晰、易于使用。",
            title, description, category, purpose, target_user
        );

        let ai_request = AIRequest {
            prompt,
            model: None,
            max_tokens: Some(2000),
            temperature: Some(0.7),
            system_prompt: Some("你是一个专业的AI提示词工程师，擅长创建高质量的提示词模板。".to_string()),
        };

        let ai_response = self.call_ai(ai_request).await?;
        
        if let Some(content) = &ai_response.data {
            // 生成基础的提示词模板
            let prompt_template = format!("你是一个{}的专业助手。\n\n任务：{{task}}\n\n要求：{{requirements}}\n\n请提供详细的回答。", target_user);
            
            // 生成参数定义
            let parameters = serde_json::json!([
                {
                    "name": "task",
                    "description": "具体任务描述",
                    "type": "textarea",
                    "required": true,
                    "placeholder": "请描述您需要完成的任务"
                },
                {
                    "name": "requirements",
                    "description": "具体要求",
                    "type": "textarea",
                    "required": false,
                    "placeholder": "请描述具体要求（可选）"
                }
            ]).to_string();

            let article = format!("# {}\n\n{}\n\n## 用途\n{}\n\n## 目标用户\n{}\n\n## AI生成的说明\n\n{}", title, description, purpose, target_user, content);
            
            // 暂时注释掉，等修复数据库方法后再启用
            /*
            let template = self.database.create_prompt_template(title, description, &prompt_template, category, &parameters, &article).await?;
            Ok(template)
            */
            // 临时返回一个模拟的PromptTemplate
            Ok(PromptTemplate {
                id: uuid::Uuid::new_v4().to_string(),
                title: title.to_string(),
                description: description.to_string(),
                prompt: prompt_template,
                category: category.to_string(),
                parameters,
                article,
                usage_count: 0,
                rating: 0.0,
                is_public: false,
                local_only: true,
                synced_at: None,
                created_at: chrono::Utc::now(),
                updated_at: chrono::Utc::now(),
            })
        } else {
            Err(anyhow!("AI failed to generate content"))
        }
    }
}