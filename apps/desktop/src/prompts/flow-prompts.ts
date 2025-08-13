// 流程设计相关的内置提示词模板

export const FLOW_CREATE_PROMPT = `你是一个流程设计专家，请根据用户需求创建一个详细的执行流程。

用户需求：
- 标题：{title}
- 描述：{description}
- 目标：{goals}
- 领域：{domain}
- 难度级别：{difficulty}

参考资料：
{referenceUrls}

请创建一个完整的流程设计，包含以下内容：

1. 流程概述文章（Markdown格式）
2. 详细的执行步骤
3. 每个步骤的资源和工具
4. 预期时间和难度评估

请以JSON格式返回：
\`\`\`json
{
  "flow": {
    "title": "流程标题",
    "description": "流程描述",
    "difficulty": "easy|medium|hard",
    "totalTime": "预计总时间",
    "article": "# 流程概述\\n\\n## 目标\\n...\\n\\n## 前置条件\\n...\\n\\n## 预期成果\\n...",
    "prerequisites": ["前置条件1", "前置条件2"],
    "outcomes": ["预期成果1", "预期成果2"],
    "steps": [
      {
        "id": "step-1",
        "title": "步骤标题",
        "description": "详细描述步骤内容和执行方法",
        "order": 1,
        "estimatedTime": "30分钟",
        "difficulty": "easy",
        "resources": [
          {
            "id": "resource-1",
            "type": "url",
            "title": "资源标题",
            "url": "https://example.com",
            "description": "资源描述"
          }
        ],
        "tools": ["tool-1", "tool-2"],
        "questions": ["检查问题1", "检查问题2"]
      }
    ],
    "tools": [
      {
        "id": "tool-1",
        "name": "工具名称",
        "description": "工具描述和用途",
        "url": "https://tool-website.com",
        "category": "工具分类"
      }
    ]
  }
}
\`\`\`

要求：
- 步骤要逻辑清晰，循序渐进
- 每个步骤要有明确的输入输出
- 工具推荐要实用且可访问
- 时间估算要合理
- 难度评估要准确`;

export const FLOW_OPTIMIZE_PROMPT = `你是一个流程优化专家，请优化现有的执行流程。

现有流程：
- 标题：{title}
- 当前步骤：{currentSteps}
- 用户反馈：{feedback}
- 优化目标：{optimizationGoals}

请提供流程优化方案，包括：

1. 步骤顺序优化
2. 资源配置改进
3. 时间效率提升
4. 用户体验改善

请以JSON格式返回：
\`\`\`json
{
  "optimized": {
    "steps": [
      {
        "id": "optimized-step-1",
        "title": "优化后的步骤标题",
        "description": "优化后的步骤描述",
        "improvements": ["改进点1", "改进点2"],
        "reasoning": "优化理由"
      }
    ],
    "overallImprovements": [
      "整体改进1：具体说明",
      "整体改进2：具体说明"
    ],
    "expectedBenefits": [
      "预期收益1",
      "预期收益2"
    ]
  }
}
\`\`\`

要求：
- 保持流程的完整性和逻辑性
- 优化要有明确的价值
- 考虑不同用户的需求
- 提供具体的改进措施`;

export const BEST_PRACTICE_EXTRACT_PROMPT = `你是一个最佳实践分析专家，请从用户提供的内容中提取最佳实践。

内容来源：
{sourceContent}

分析目标：
- 流程：{flowTitle}
- 领域：{domain}
- 关注点：{focusAreas}

请提取并整理最佳实践，包括：

1. 关键成功因素
2. 常见陷阱和解决方案
3. 优化建议
4. 实用技巧

请以JSON格式返回：
\`\`\`json
{
  "bestPractices": {
    "keySuccessFactors": [
      {
        "factor": "成功因素",
        "description": "详细说明",
        "importance": "high|medium|low"
      }
    ],
    "commonPitfalls": [
      {
        "pitfall": "常见问题",
        "solution": "解决方案",
        "prevention": "预防措施"
      }
    ],
    "optimizationTips": [
      {
        "tip": "优化技巧",
        "description": "具体说明",
        "applicableSteps": ["适用步骤"]
      }
    ],
    "practicalAdvice": [
      "实用建议1",
      "实用建议2"
    ]
  }
}
\`\`\`

要求：
- 提取的实践要具有普遍适用性
- 建议要具体可执行
- 避免过于理论化
- 关注实际操作中的细节`;