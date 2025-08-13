// 知识框架相关的内置提示词模板

export const FRAMEWORK_CREATE_PROMPT = `你是一个知识架构专家，请根据用户提供的信息创建一个系统性的知识框架。

用户信息：
- 标题：{title}
- 描述：{description}
- 领域：{domain}
- 标签：{tags}

请创建一个结构化的知识框架，包含以下内容：

1. 根节点（2-4个主要分支）
2. 每个根节点下的2-3级子节点
3. 每个节点包含：
   - 标题（简洁明确）
   - 内容描述（100-200字）
   - 3-5个相关问题

请以JSON格式返回，结构如下：
\`\`\`json
{
  "framework": {
    "title": "框架标题",
    "description": "框架描述",
    "domain": "领域",
    "rootNodes": [
      {
        "id": "node-1",
        "title": "节点标题",
        "content": "节点内容描述",
        "questions": ["问题1", "问题2", "问题3"],
        "level": 1,
        "children": [
          {
            "id": "node-1-1",
            "title": "子节点标题",
            "content": "子节点内容",
            "questions": ["子问题1", "子问题2"],
            "level": 2,
            "children": []
          }
        ]
      }
    ]
  }
}
\`\`\`

要求：
- 确保知识结构的逻辑性和完整性
- 每个节点的问题要具有启发性
- 内容要准确且易于理解
- 适合{domain}领域的学习者`;

export const FRAMEWORK_EXPAND_PROMPT = `你是一个知识架构专家，请为现有知识框架节点扩展子节点。

父节点信息：
- 标题：{parentTitle}
- 内容：{parentContent}
- 层级：{parentLevel}
- 领域：{domain}

框架上下文：
{frameworkContext}

请为这个节点创建3-5个子节点，每个子节点包含：
- 标题（简洁明确）
- 内容描述（100-150字）
- 3-4个相关问题

请以JSON格式返回：
\`\`\`json
{
  "nodes": [
    {
      "id": "generated-id",
      "title": "子节点标题",
      "content": "详细内容描述",
      "questions": ["问题1", "问题2", "问题3"],
      "level": {nextLevel},
      "children": []
    }
  ]
}
\`\`\`

要求：
- 子节点要与父节点逻辑相关
- 覆盖父节点主题的主要方面
- 问题要有助于深入理解
- 避免重复和冗余`;

export const URL_SUMMARY_PROMPT = `你是一个内容分析专家，请分析用户提供的URL内容，并生成相关的知识节点。

URL信息：
{urls}

父节点上下文：
- 标题：{parentTitle}
- 内容：{parentContent}
- 领域：{domain}

请基于URL内容创建2-4个知识节点，每个节点包含：
- 从URL内容提取的核心知识点
- 结构化的内容描述
- 相关的思考问题

请以JSON格式返回：
\`\`\`json
{
  "nodes": [
    {
      "id": "url-based-id",
      "title": "基于内容的节点标题",
      "content": "从URL提取的核心内容总结",
      "questions": ["基于内容的问题1", "问题2", "问题3"],
      "level": {level},
      "sourceUrls": ["相关的URL"],
      "children": []
    }
  ]
}
\`\`\`

要求：
- 准确提取URL的核心信息
- 与父节点主题保持相关性
- 问题要基于实际内容
- 标注信息来源`;