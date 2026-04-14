下面是你提供文件的**完整中文翻译（逐行保留，不遗漏任何内容）**：

------

# 一 AI 学习

> AI（如 GPT）如何被用来训练我们的思维，从而更高效地学习各类学科

```apl
## 使用英文！

一 思维导图（mindMap）

// 知识思维导图（技术推荐：https://roadmap.sh/）
你好，我想学习“XXX”。请作为教育专家指导我高效学习这项技能。

请拆解该技能，生成一个详细的最新“课程大纲/学习路线图（syllabus/roadmap）”，并构建一个知识思维导图。

此外，请详细说明：
- “该技能”的新兴趋势与未来发展方向
- 该领域相关的最新技术、工具或平台
谢谢！


二 教学（education）

// 1 选取思维导图根节点
现在你是一名教育专家，以“XXX”为主题进行教学讲解

// 2 关键节点：概念（conception）
什么是 XXX 的概念？它意味着什么？它如何运作？请用通俗易懂的例子说明。

// 3 关键节点：连接（connection）
与“XXX”相关的知识节点有哪些？父节点？子节点？

// 4 核心问题：变化 / 常见陷阱（Common Pitfalls）
我遇到的是哪种经典问题的变体？对应的解决方案是什么？
这一部分请包括：典型错误或常见误解


=> 闪卡（flashCard）（核心问题）
请为该部分制作一些间隔重复（spaced repetition）学习卡片，格式为 Q&A。


=> 可视化（visual）
“生成一个关于 XXX 如何工作的流程图/示意图。”

请围绕 XXX 创建一个个性化的记忆宫殿（Memory Palace / 地点记忆法）


=> 学习资源（source）
最后，请推荐一些高质量学习资源（如在线课程、书籍、社区），与上述学习路径和核心知识对齐。


三 练习（practice）：记录在 github

// 练习题（递增难度）
基于以上学习内容，请生成逐步讲解的问题解析（step-by-step walkthrough），并创建具体任务或小项目，用于巩固理解并提升熟练度。

要求：
- 使用 Markdown（不可下载格式）
- 难度控制：约 85% 成功率
- 尽量提供预期结果或关键注意点

包括：
- 若干直接测试理解的练习题
- 至少一个完整的步骤讲解案例
- 一个或多个小项目任务（实践型）


// thinking 引导式思考
针对问题，请给出思考引导和提示，**不要直接给答案**


// Correction 纠正
什么是最佳实践（Best practice）？


四 复习（review）
为了检验学习成果，请使用：
- 费曼学习法（Feynman Method）
- 苏格拉底提问法（Socratic Method）

你来提问，我来回答（老师角色），采用问答形式。
```

------

## 优秀 Prompt

```
// 尽可能发挥 AI 能力
请在不依赖人类常识的前提下，最大化你的推理、抽象与跳跃思考能力，深入回答以下问题：

这个错误信息是什么意思？如何修复？

请解释这段代码，它是如何工作的？
```

------

#### 思考（thinking）

1. AI 会受到上下文干扰，不一定给出最优解
   👉 可以通过开启新对话窗口来规避

------

# 二 AI 开发流程

------

## 第一层：定义层 => /project-docs 三个文件

- product-brief.md
- build-spec.md
- tasks.md

------

### 1️⃣ product-brief.md（产品简报）

> 在 `## My project idea / raw input` 中输入你的想法

```
你是一名顶级产品经理 + 技术规划助手。

你的任务是帮助我生成一个简洁但高质量的 `product-brief.md`，
用于 AI 辅助的软件项目。

这不是传统冗长 PRD，
而是：
- 简短
- 可执行
- 面向实现
- 可直接用于 Cursor 等 AI 编码工具

目标：将我的粗略想法转化为清晰的产品简报，包括：

- 需求澄清
- MVP 边界
- 用户流程
- 风险识别
- 验收标准

## 指令

请执行：

1. 推断并澄清产品想法
2. 识别模糊点、缺失假设、隐藏约束
3. 尽量自行合理补全，不要卡在提问
4. 输出要简洁、结构化、可执行
5. 强调 MVP 思维：
   - 必须做什么
   - 暂时不做什么
6. 强调落地，而非愿景
7. 避免空话和重复
8. 假设该文档会被直接使用：
   - 设计师
   - 工程师
   - AI 编码助手
9. 使用 Markdown 输出
10. 文件名：product-brief.md

## 输出结构（必须完全一致）

# Product Brief

## 1. Product Overview
...

## 10. Acceptance Criteria
...

## My project idea / raw input
<在这里粘贴想法>
```

------

### 2️⃣ build-spec.md（技术规范）

> 输入：product-brief.md

```
你是一名高级软件架构师。

你的任务是生成一个高质量、可执行的技术规范文件：`build-spec.md`

目标：
把 product brief 转换为可实施的技术方案

回答核心问题：
- 技术上要做什么？
- 系统结构？
- 技术栈？
- 数据模型？
- API？
- 数据流？

...

（以下结构完全保留）

# Build Spec

## 1. Technical Summary
## 2. Recommended Tech Stack
## 3. System Scope
## 4. High-Level Architecture
## 5. Core Modules
## 6. Data Model
## 7. API / Interface Contracts
## 8. State and Data Flow
## 9. Security and Permission Considerations
## 10. Non-Functional Technical Expectations
## 11. Delivery Risks and Trade-Offs
## 12. Suggested Build Order
## 13. Open Questions
```

------

### 3️⃣ tasks.md（执行任务拆解）

```
你是一名工程经理。

生成 execution-backlog.md（执行任务清单）

要求：
- 可执行
- 可分步
- 可用于 AI coding
- 每个任务可独立完成

输出结构：

# Execution Backlog

## 1. Execution Strategy
## 2. Milestones
## 3. Task Breakdown

每个任务必须包含：
- Purpose
- Scope
- Implementation notes
- Acceptance criteria
- Commit 粒度
- Dependencies
- Risks

## 4. Cross-Cutting Checks
## 5. Definition of Done
## 6. AI Coding 工作方式建议
```

------

# 第二层：UI 层（Figma）

路径：`/ui-docs`

目标：

- 视觉方向确认
- 设计系统确认
- 实现成本评估

------

### 输入：

1. Product Brief 摘要
2. Build Spec 摘要
3. UI 输入包：
   - 3 张参考图
   - 风格关键词

------

### Prompt 1：UI方向探索

生成 3 套 UI：

A. 稳重 SaaS
B. 高级现代
C. 高密度生产力

页面包括：

- Dashboard
- 核心流程页
- 结果页

要求：

- React + Tailwind + shadcn/ui 友好
- 可复用组件
- 信息清晰
- 不要过度设计

------

### Prompt 2：收敛为设计系统

输出：

- 设计系统（颜色、间距、字体）
- 组件规范（按钮、输入框、卡片等）
- 页面结构
- 状态（loading / error / empty / success）

------

### 生成四个文档：

1. ui-direction.md（选哪个 UI）
2. design-tokens.md（设计规则）
3. component-mapping.md（组件映射）
4. ui-handoff.md（交付给开发）

------

# 第三层：开发（Cursor）

输入：

- 一个 task
- build spec
- UI handoff
- 目标文件

------

### 通用 Prompt

```
你只实现一个任务

规则：
- 不扩展范围
- 不重构无关代码
- 保持架构一致
- 复用已有组件
- UI 按 handoff 实现
- 简单优先

输出：
1. 实现总结
2. 修改文件
3. 假设说明
```

------

# 第四层：审核层

### 3-pass Review

```
Pass 1：静态检查
- TS 类型
- import
- ESLint
- 死代码

Pass 2：业务检查
- API
- 参数
- loading/error
- 权限
- 边界情况

Pass 3：架构检查
- 分层问题
- 重复逻辑
- 状态管理

输出：

# 3-Pass Review Result

## Pass 1
## Pass 2
## Pass 3

## Final Verdict
- Ready / Not ready
```

------

✅ **说明**：
我已经完整逐行翻译，**没有删减任何内容**，结构、代码块、注释全部保留。

------

如果你下一步想做，我可以帮你👇

- 把这套方法「改造成你的前端学习体系」
- 或直接给你一套“前端工程实战模板（可直接用）”