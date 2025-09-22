---
title: "Core Workflow Guide"
sidebar_position: 3
---

import prdQuestions from './assets/screenshots/PRD_questions.png';
import prdSelfReview from './assets/screenshots/prd_self_review.png';
import buildPlan from './assets/screenshots/build_plan.png';
import agenticScorePopover from './assets/screenshots/agentic_score_popover.png';
import promptExample from './assets/screenshots/prompt_example.png';
import cliCommands from './assets/screenshots/cli_commands.png';

# Core Workflow Guide

*8 min read • Step-by-step walkthrough of Devplan's intelligent workflow*

Devplan transforms how product and engineering teams collaborate by maintaining context throughout the entire development lifecycle. This guide walks you through the complete workflow with practical examples and real CLI interactions.

## Overview: From Idea to Code

```mermaid
graph TD
    A[💡 Idea Input] --> B[🤖 Context Processing]
    B --> C[📋 Agent-Guided Planning]
    C --> D[📝 PRD Generation]
    D --> E[🔧 Technical Design]
    E --> F[📊 User Stories & Tasks]
    F --> G[🔗 Linear/Jira Sync]
    G --> H[⚡ AI Coding Prompts]
    H --> I[💻 IDE Integration]
    I --> J[🚀 Production Code]

    style A fill:#e1f5fe
    style J fill:#e8f5e8
```

## Step 1: Input and Context Processing

### Starting Points
Devplan accepts various input formats to begin the planning process:

**📝 Text Inputs:**
- Quick feature ideas or requests
- Customer feedback and bug reports
- Existing specifications or documentation
- User stories or epics from other tools

**🎨 Visual Inputs:**
- UX mockups and design files
- User flow diagrams
- Architecture sketches

**📊 Data Inputs:**
- Analytics insights
- Customer interview notes
- Market research findings

### Context Engine Processing

Behind the scenes, Devplan's Context Engine analyzes:

```mermaid
graph LR
    A[Your Input] --> B[Context Engine]

    C[GitHub Repos] --> B
    D[Company Docs] --> B
    E[Previous Projects] --> B
    F[Team Standards] --> B
    G[User Feedback] --> B
    H[Product Analytics] --> B

    B --> I[Enriched Understanding]
```

**What Gets Analyzed:**
- **Codebase Architecture**: Existing patterns, frameworks, and technical decisions
- **Product Context**: Current features, user flows, and business logic
- **Team Standards**: Coding conventions, review processes, and documentation styles
- **Historical Decisions**: Past project learnings and architectural choices

## Step 2: Agent-Guided Discovery

### Intelligent Questioning
Devplan's Planning Agent doesn't just accept your input—it actively helps you think through the requirements by asking targeted questions based on your codebase analysis and project context.

<img src={prdQuestions} alt="Example banner" style={{width: '600px'}}/>

:::tip What Makes This Different
**Context-Aware Questions:** Unlike generic planning tools, Devplan knows your tech stack, existing patterns, and architectural decisions, so it asks relevant questions that matter for your specific implementation.
:::

:::note Why This Works
This collaborative process typically uncovers 3-5 critical requirements that would otherwise be discovered during implementation, preventing costly rework.
:::

## Step 3: PRD Generation

### Intelligent Document Creation
Based on the discovery session, Devplan generates a comprehensive Product Requirements Document (PRD) that includes:

**📋 Standard PRD Sections:**
- Executive summary and goals
- User stories and acceptance criteria
- Success metrics and KPIs
- Technical requirements and constraints

**🔍 Context-Enhanced Content:**
- Integration points with existing systems
- Code architecture recommendations
- Specific implementation considerations
- Risk assessment and mitigation strategies

### AI Review Process
Devplan's Review Agent acts as your personal Chief Product Officer, analyzing the generated PRD for:

- **Completeness**: Are all aspects of the feature covered?
- **Clarity**: Can engineers implement this without additional clarification?
- **Feasibility**: Are the requirements technically achievable?
- **Alignment**: Does this fit with existing product strategy and architecture?

<img src={prdSelfReview} alt="Example banner" style={{width: '600px'}}/>

## Step 4: Technical Design & Architecture

### Code-Aware Planning
Unlike generic planning tools, Devplan understands your technical stack and generates implementation guidance that considers:

**🏗️ Architecture Integration:**
- How new code fits into existing modules
- Database schema changes required
- API endpoints that need modification
- Dependencies and service interactions

**⚙️ Technical Specifications:**
- Component structure and hierarchy
- State management requirements
- Testing strategy and coverage
- Performance considerations

## Step 5: User Stories & Task Breakdown

### Automated Story Generation
Devplan breaks down features into implementation-ready user stories with context-aware estimates based on your actual codebase complexity.

<img src={buildPlan} alt="Example banner" style={{width: '600px'}}/>

### Agentic Score
Devplan calculates Agentic Score (how likely AI IDE agent is to succeed with this user story) and size for each user 
story based on its complexity and ambiguity:

<img src={agenticScorePopover} alt="Agentic Score" style={{width: '600px'}}/>

## Step 6: Integration with Project Management

### Seamless Sync to Your Tools

**Linear Integration Results:**

When Devplan syncs with Linear, it creates a complete project structure:
- **Epic Creation:** Main feature becomes a Linear epic with full context
- **Story Breakdown:** Individual user stories become properly formatted tickets
- **Time Estimates:** Each ticket includes time estimates and complexity ratings
- **Context Links:** Every ticket links back to original requirements and technical specs
- **Technical Details:** Implementation notes and file references included
- **Acceptance Criteria:** Detailed acceptance criteria for each story

**Jira Integration Results:**

For Jira workspaces, Devplan creates a structured hierarchy:
- **Epic Management:** Complex features become properly structured epics
- **Story Points:** Automatic story point assignment based on complexity
- **Sprint Assignment:** Stories assigned to sprints based on team capacity
- **Label Application:** Automatic tagging with relevant labels (frontend, backend, etc.)
- **Custom Fields:** Devplan data maps to your existing Jira custom fields
- **Workflow Integration:** Stories follow your established Jira workflows

:::tip Context Preservation
**Smart Linking:** Every ticket maintains a link back to:
- Original feature requirements
- Technical design decisions
- AI-generated implementation prompts
- Related tickets and dependencies

This ensures developers always have full context, even weeks later.
:::

## Step 7: AI Coding Prompts

### Context-Rich Prompt Generation
This is where Devplan's context engine really shines. Instead of generic prompts, you get:

**🎯 Specific Implementation Guidance:**
- Exact file paths and component names
- Integration points with existing code
- Code patterns and conventions to follow
- Error handling and edge case considerations

<img src={promptExample} alt="Prompt Example" style={{width: '600px'}}/>

## Step 8: CLI Integration

### Direct IDE Integration
Devplan's CLI tool integrates project management with local AI-powered IDEs. You can copy one-liner CLI commands
directly from the prompt popover and execute them in your terminal.

<img src={cliCommands} alt="CLI commands" style={{width: '600px'}}/>

**🔧 IDE Integration:**
- Automatic context file generation for AI assistants
- Support for multiple IDE platforms
- Repository and feature context preservation
- Seamless workflow integration

**What Your AI Assistant Now Knows:**

```markdown
# Auto-generated context for Cursor AI

## Project Context
- Next.js 14 app with App Router
- PostgreSQL + Prisma ORM
- Tailwind CSS + Shadcn UI
- TypeScript throughout

## Current Task
Implement user authentication (login/register)
with email/password and session management.

## Code Patterns to Follow
- Server Actions for form handling
- Zod for validation schemas
- React Hook Form for form state
- Shadcn components for UI

## Files to Reference
- /src/components/ui/* (existing UI components)
- /src/lib/validations.ts (validation patterns)
- /prisma/schema.prisma (database schema)
```

:::tip Pro Tip
With this rich context, your AI assistant can now generate code that actually fits your project instead of generic examples!
:::

## Step 9: Status Reporting & Monitoring

### Automated Progress Tracking
Devplan monitors development progress and provides real-time updates:

**📊 Progress Metrics:**
- Story completion rates
- Time to completion vs. estimates
- Code quality indicators
- Integration success rates

**🚨 Risk Detection:**
- Scope creep identification
- Timeline deviation alerts
- Dependency blocking issues
- Quality regression warnings

## Best Practices for Success

### 👩‍💼 For Product Managers

**During Discovery:**
- ✅ **Provide Rich Context**: Include user research, analytics, and business goals
- ✅ **Embrace AI Questions**: Let the agent help you think through edge cases
- ✅ **Review Generated PRDs**: Use the AI review process to catch gaps
- ✅ **Link Related Features**: Connect to existing user flows and features

**Common Mistakes to Avoid:**
- ❌ Rushing through discovery phase
- ❌ Skipping technical collaboration
- ❌ Not updating requirements when scope changes

### 👨‍💻 For Engineers

**During Implementation:**
- ✅ **Trust the Context**: AI prompts include architectural decisions and patterns
- ✅ **Update Estimates**: Provide feedback when actual time differs from estimates
- ✅ **Use CLI Workflow**: `devplan focus` saves 15-30 minutes per feature
- ✅ **Document Learnings**: Share discoveries that could improve future estimates


### 🤝 For Teams

**Workflow Integration:**
- **Sprint Planning**: Use Devplan estimates as starting point for capacity planning
- **Daily Standups**: Reference ticket links for quick context sharing
- **Retrospectives**: Review estimate accuracy and process improvements
- **Knowledge Sharing**: Update coding standards and patterns in Devplan

**Success Metrics to Track:**
| Metric | Target | How to Measure |
|--------|--------|----------------|
| Planning Time | 80% reduction | Compare pre/post Devplan planning sessions |
| Estimate Accuracy | ±20% of actual | Track story completion times vs estimates |
| Rework Rate | `<10%` | Measure tickets that need significant changes |
| Context Clarity | >90% | Survey: "Did you have enough context to implement?" |


:::warning Get Help
**Having issues?**
- 📧 Email: info@devplan.com
- 💬 Slack: [Community Slack]
- 📖 Docs: /troubleshooting (detailed guide)
:::

## Next Steps

### 🚀 Ready to Try This Workflow?

**For New Users:**
1. **[Set up your account](/getting-started)** - 15 minute setup process
2. **Connect your first repository** - Start with a small project
3. **Create your first feature** - Follow this exact workflow
4. **Experience the difference** - See context-driven development in action

**For Teams:**
1. **Start with a pilot project** - Pick one feature to test the workflow
2. **Include both PM and engineering** - Collaborative approach works best
3. **Measure the results** - Track time savings and quality improvements
4. **Scale gradually** - Expand to more projects as team adopts workflow

### 📚 Learn More

- **[Getting Started Guide](/getting-started)** - Complete setup instructions
- **[Architecture Overview](/architecture)** - Technical deep dive
- **[Value Proposition](/value-proposition)** - Business case and ROI

**Questions?** Join our community or contact support at info@devplan.com