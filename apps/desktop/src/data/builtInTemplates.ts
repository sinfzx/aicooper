import { PromptTemplate } from '@my-platform/types';

export const builtInTemplates: PromptTemplate[] = [
  {
    id: 'article-writer',
    title: '文章写作助手',
    description: '帮助您创作高质量的文章内容',
    category: '写作',
    content: `请帮我写一篇关于 {主题} 的文章，要求：

1. 文章类型：{文章类型}
2. 目标读者：{目标读者}
3. 文章长度：约 {字数} 字
4. 写作风格：{写作风格}

请确保文章：
- 结构清晰，逻辑严谨
- 内容深入，观点独特
- 语言流畅，易于理解
- 符合目标读者的阅读习惯

{额外要求}`,
    parameters: [
      {
        id: 'topic',
        name: '主题',
        label: '文章主题',
        type: 'text',
        required: true,
        placeholder: '例如：人工智能的发展趋势',
        description: '您想要写作的文章主题'
      },
      {
        id: 'article_type',
        name: '文章类型',
        label: '文章类型',
        type: 'select',
        required: true,
        options: ['科普文章', '观点评论', '新闻报道', '教程指南', '产品介绍', '行业分析'],
        defaultValue: '科普文章',
        description: '选择最适合的文章类型'
      },
      {
        id: 'target_audience',
        name: '目标读者',
        label: '目标读者',
        type: 'select',
        required: true,
        options: ['普通大众', '专业人士', '学生群体', '企业管理者', '技术开发者'],
        defaultValue: '普通大众',
        description: '文章的主要目标读者群体'
      },
      {
        id: 'word_count',
        name: '字数',
        label: '文章字数',
        type: 'number',
        required: true,
        defaultValue: '1000',
        min: 300,
        max: 5000,
        description: '期望的文章字数'
      },
      {
        id: 'writing_style',
        name: '写作风格',
        label: '写作风格',
        type: 'select',
        required: true,
        options: ['正式严谨', '轻松幽默', '简洁明了', '详细深入', '故事化'],
        defaultValue: '简洁明了',
        description: '选择合适的写作风格'
      },
      {
        id: 'additional_requirements',
        name: '额外要求',
        label: '额外要求',
        type: 'textarea',
        required: false,
        placeholder: '例如：需要包含具体案例、引用权威数据等',
        description: '其他特殊要求或注意事项'
      }
    ],
    documentation: `# 文章写作助手使用指南

## 功能说明
这个模板可以帮助您快速生成高质量的文章内容，适用于各种写作场景。

## 参数说明

### 主题
- **必填项**：文章的核心主题
- **建议**：主题要具体明确，避免过于宽泛
- **示例**：
  - ✅ "远程办公对企业文化的影响"
  - ❌ "工作"

### 文章类型
选择最符合您需求的文章类型：
- **科普文章**：解释复杂概念，适合知识普及
- **观点评论**：表达个人观点，适合意见表达
- **新闻报道**：客观报道事实，适合信息传递
- **教程指南**：步骤化指导，适合操作说明
- **产品介绍**：展示产品特性，适合营销推广
- **行业分析**：深度分析趋势，适合专业报告

### 目标读者
了解读者群体有助于调整文章的语言风格和内容深度：
- **普通大众**：使用通俗易懂的语言
- **专业人士**：可以使用行业术语
- **学生群体**：注重教育性和启发性
- **企业管理者**：关注实用性和商业价值
- **技术开发者**：可以包含技术细节

### 字数控制
- **最少**：300字（简短介绍）
- **推荐**：1000-2000字（深度文章）
- **最多**：5000字（详细报告）

### 写作风格
- **正式严谨**：适合学术或商务场合
- **轻松幽默**：适合娱乐或生活类内容
- **简洁明了**：适合快速阅读场景
- **详细深入**：适合专业分析
- **故事化**：适合案例分享

## 使用技巧
1. **主题聚焦**：选择一个具体的角度，避免内容过于分散
2. **读者导向**：始终考虑目标读者的需求和背景
3. **结构清晰**：确保文章有明确的开头、主体和结尾
4. **价值导向**：每篇文章都应该为读者提供实际价值

## 常见问题
**Q: 如何让文章更有吸引力？**
A: 在额外要求中可以指定"使用具体案例"、"包含数据支撑"等要求。

**Q: 文章太长或太短怎么办？**
A: 可以调整字数参数，或在额外要求中指定"重点突出"或"详细展开"。`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'code-reviewer',
    title: '代码审查专家',
    description: '专业的代码审查和优化建议',
    category: '编程',
    content: `请审查以下 {编程语言} 代码并提供改进建议：

\`\`\`{编程语言}
{代码内容}
\`\`\`

请从以下角度进行分析：
1. **代码质量**：可读性、可维护性、代码规范
2. **性能优化**：算法效率、资源使用、性能瓶颈
3. **安全性**：潜在安全风险、输入验证、权限控制
4. **最佳实践**：设计模式、架构建议、行业标准

审查重点：{审查重点}

请提供：
- 具体的问题点和改进建议
- 优化后的代码示例（如适用）
- 相关的最佳实践说明`,
    parameters: [
      {
        id: 'programming_language',
        name: '编程语言',
        label: '编程语言',
        type: 'select',
        required: true,
        options: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'Go', 'Rust', 'PHP', 'C++', 'Swift'],
        defaultValue: 'JavaScript',
        description: '代码使用的编程语言'
      },
      {
        id: 'code_content',
        name: '代码内容',
        label: '代码内容',
        type: 'textarea',
        required: true,
        placeholder: '粘贴您需要审查的代码...',
        description: '需要审查的完整代码'
      },
      {
        id: 'review_focus',
        name: '审查重点',
        label: '审查重点',
        type: 'select',
        required: true,
        options: ['全面审查', '性能优化', '安全性检查', '代码规范', '架构设计', '错误处理'],
        defaultValue: '全面审查',
        description: '希望重点关注的审查方面'
      }
    ],
    documentation: `# 代码审查专家使用指南

## 功能说明
这个模板可以帮助您获得专业的代码审查建议，提升代码质量和开发技能。

## 参数说明

### 编程语言
选择代码使用的编程语言，这将影响：
- 语言特定的最佳实践建议
- 性能优化建议
- 安全性检查重点
- 代码规范标准

### 代码内容
- **格式要求**：直接粘贴代码，无需添加代码块标记
- **长度建议**：建议单次审查代码不超过200行
- **完整性**：提供完整的函数或类，避免代码片段

### 审查重点
根据您的需求选择重点：
- **全面审查**：综合评估所有方面
- **性能优化**：专注于执行效率和资源使用
- **安全性检查**：重点关注安全漏洞和风险
- **代码规范**：检查编码标准和风格一致性
- **架构设计**：评估代码结构和设计模式
- **错误处理**：检查异常处理和边界情况

## 使用技巧
1. **代码准备**：确保代码可以独立运行或理解
2. **上下文说明**：如果代码有特殊背景，可以在代码注释中说明
3. **具体问题**：如果有特定疑问，可以在代码中添加注释标记

## 审查输出说明
审查结果通常包含：
- **问题识别**：具体指出存在的问题
- **改进建议**：提供可行的解决方案
- **代码示例**：展示优化后的代码
- **学习资源**：相关的最佳实践文档

## 常见问题
**Q: 代码太长怎么办？**
A: 建议分段审查，每次提交一个完整的功能模块。

**Q: 如何获得更具体的建议？**
A: 在代码中添加注释说明您的疑问点，或选择更具体的审查重点。`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'knowledge-node-generator',
    title: '知识节点生成器',
    description: '为知识框架生成下级节点（内置模板）',
    category: '知识管理',
    content: `基于父节点"{父节点标题}"，请生成 {节点数量} 个相关的下级知识节点。

父节点描述：{父节点描述}
领域背景：{领域背景}

请为每个下级节点提供：
1. **节点标题**：简洁明确的标题（不超过10个字）
2. **节点描述**：简要说明（20-50字）
3. **相关问题**：3个相关的学习问题
4. **学习要点**：2-3个关键学习点

要求：
- 节点之间要有逻辑关联但不重复
- 适合 {目标用户} 的知识水平
- 注重实用性和可操作性

请按以下格式输出：
## 节点1：[标题]
**描述**：[描述内容]
**问题**：
1. [问题1]
2. [问题2] 
3. [问题3]
**要点**：[学习要点]

---`,
    parameters: [
      {
        id: 'parent_title',
        name: '父节点标题',
        label: '父节点标题',
        type: 'text',
        required: true,
        description: '当前节点的标题'
      },
      {
        id: 'parent_description',
        name: '父节点描述',
        label: '父节点描述',
        type: 'textarea',
        required: false,
        description: '当前节点的详细描述'
      },
      {
        id: 'domain_context',
        name: '领域背景',
        label: '领域背景',
        type: 'text',
        required: true,
        description: '所属的知识领域或专业背景'
      },
      {
        id: 'node_count',
        name: '节点数量',
        label: '生成节点数量',
        type: 'number',
        required: true,
        defaultValue: '3',
        min: 2,
        max: 8,
        description: '希望生成的下级节点数量'
      },
      {
        id: 'target_user',
        name: '目标用户',
        label: '目标用户',
        type: 'select',
        required: true,
        options: ['初学者', '进阶学习者', '专业人士', '管理者'],
        defaultValue: '进阶学习者',
        description: '知识内容的目标用户群体'
      }
    ],
    documentation: `# 知识节点生成器

这是一个内置的系统模板，用于在知识框架中自动生成下级节点。

## 使用场景
- 扩展知识框架的某个节点
- 深入探索特定主题
- 构建系统性的学习路径

## 参数说明
- **父节点信息**：提供上下文背景
- **领域背景**：确保生成内容的专业性
- **节点数量**：控制生成的详细程度
- **目标用户**：调整内容的复杂度

此模板会自动被知识框架功能调用，无需手动使用。`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

export const templateCategories = [
  { id: 'writing', name: '写作', icon: '✍️', color: '#3B82F6' },
  { id: 'programming', name: '编程', icon: '💻', color: '#10B981' },
  { id: 'analysis', name: '分析', icon: '📊', color: '#F59E0B' },
  { id: 'translation', name: '翻译', icon: '🌐', color: '#8B5CF6' },
  { id: 'education', name: '教育', icon: '📚', color: '#EF4444' },
  { id: 'knowledge', name: '知识管理', icon: '🧠', color: '#6B7280' }
];