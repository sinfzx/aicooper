// 提示模板相关的内置提示词模板

export const TEMPLATE_CREATE_PROMPT = `你是一个提示词工程专家，请根据用户需求创建一个高质量的提示词模板。

用户需求：
- 标题：{title}
- 描述：{description}
- 分类：{category}
- 用途：{purpose}
- 目标用户：{targetUser}

请创建一个提示词模板，包含以下内容：

1. 结构化的提示词（使用 {参数名} 表示可变参数）
2. 参数定义（每个参数的说明和类型）
3. 使用说明文档（Markdown格式）
4. 示例用法

请以JSON格式返回：
\`\`\`json
{
  "template": {
    "title": "模板标题",
    "description": "模板描述",
    "category": "分类",
    "prompt": "你是一个{role}，请根据以下要求：{requirements}\\n\\n具体任务：{task}\\n\\n输出格式：{format}\\n\\n注意事项：{notes}",
    "parameters": [
      {
        "name": "role",
        "description": "AI扮演的角色",
        "type": "text",
        "required": true,
        "defaultValue": "专业助手",
        "placeholder": "例如：数据分析师、文案策划师"
      },
      {
        "name": "requirements",
        "description": "具体要求",
        "type": "textarea",
        "required": true,
        "placeholder": "详细描述你的需求"
      }
    ],
    "article": "# 模板使用说明\\n\\n## 概述\\n这个模板用于...\\n\\n## 参数说明\\n- **role**: 定义AI的角色...\\n\\n## 使用示例\\n...",
    "usage": 0,
    "rating": 0
  }
}
\`\`\`

要求：
- 提示词要清晰、具体、可执行
- 参数设计要合理，覆盖主要变量
- 文档要详细，包含使用示例
- 适合{category}领域的应用场景`;

export const TEMPLATE_OPTIMIZE_PROMPT = `你是一个提示词优化专家，请优化现有的提示词模板。

现有模板：
- 标题：{title}
- 提示词：{prompt}
- 参数：{parameters}
- 问题：{issues}

优化目标：
{optimizationGoals}

请提供优化建议，包括：

1. 提示词结构优化
2. 参数设计改进
3. 清晰度和准确性提升
4. 使用体验改善

请以JSON格式返回：
\`\`\`json
{
  "optimized": {
    "prompt": "优化后的提示词",
    "parameters": [
      {
        "name": "参数名",
        "description": "参数描述",
        "type": "参数类型",
        "required": true,
        "improvements": "改进说明"
      }
    ],
    "improvements": [
      "改进点1：具体说明",
      "改进点2：具体说明"
    ],
    "reasoning": "优化理由和预期效果"
  }
}
\`\`\`

要求：
- 保持原有功能的基础上提升效果
- 优化要有明确的理由
- 参数设计要更加用户友好
- 提供具体的改进建议`;