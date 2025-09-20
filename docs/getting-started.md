---
title: "Getting Started"
sidebar_position: 4
---

# Getting Started with Devplan

Welcome to Devplan! This guide will walk you through setting up your account, configuring integrations, and creating your first AI-powered product development workflow.

## Account Setup

### 1. Create Your Account
1. Visit [devplan.com](https://devplan.com) and sign up
2. Choose your pricing plan:
   - **Starter**: $19/user + AI credits (perfect for small teams and agencies)
   - **Professional**: $49/user + AI credits (for growing product teams)
3. Verify your email and complete your profile

### 2. Create Your Company
1. Set up your company profile with:
   - **Product Vision**: What your product does and who it serves
   - **Target Users**: Who will use the product (e.g., startup founders, PMs, engineers)
   - **Tech Stack**: Your current stack (e.g., Next.js, React, Tailwind, Postgres, FastAPI)
   - **Company Details**: Team size, stage, budget, priorities
   - **Constraints**: MVP focus, no enterprise/security needs, etc.
2. Connect your GitHub repositories for technical analysis
3. Add company documentation and standards to the knowledge section

## Essential Integrations

### GitHub Integration (Required)
Connect your repositories to enable codebase analysis and context generation:

1. **Navigate to Settings** → Integrations → GitHub
2. **Authorize Devplan** to access your repositories
3. **Select Repositories** you want to analyze (up to 10 repos per company, or 2 during free trial)
4. **Wait for Analysis** (this may take a few minutes for large codebases)

:::tip What gets analyzed?
Devplan analyzes your code structure, patterns, dependencies, and architectural decisions. Only summary metadata is used - no source code is stored. Refresh the GitHub connection if your code changes significantly.
:::

### Project Management Integration
Connect your existing workflow tools:

#### Linear Setup
1. Go to **Integrations** → Linear
2. Generate an API key in your Linear settings
3. Configure workspace and team mapping
4. Set up bi-directional sync preferences

#### Jira Setup
1. Navigate to **Integrations** → Jira
2. Provide your Jira instance URL
3. Create an API token with appropriate permissions
4. Map projects and issue types

### Optional Integrations

#### Slack Integration
- Get notifications about project updates
- Share planning results with your team
- Quick access to Devplan from Slack channels

#### Notion/Confluence
- Import existing documentation and requirements
- Keep product specs synchronized
- Maintain single source of truth

## CLI Installation

The Devplan CLI integrates Devplan project management with local AI-powered IDEs, enabling you to clone repositories with feature context and focus on specific development tasks.

### Installation

**Direct Installation (Recommended)**
```bash
/bin/bash -c "$(curl -fsSL https://app.devplan.com/api/cli/install)"
```

**Homebrew Installation**
```bash
brew tap devplaninc/devplan
brew install devplan
```

:::note Homebrew vs Direct Installation
The Homebrew version has auto-update functionality disabled. Use `brew upgrade devplan` to update. The direct installation includes auto-update capabilities via `devplan update`.
:::

### Authentication

```bash
# Authenticate with your Devplan account
devplan auth
```

### Core Commands

**Focus on a Feature**
```bash
# Focus on a specific feature in your current repository
devplan focus

# Focus with specific IDE
devplan focus --ide cursor
```

**Clone and Start Development**
```bash
# Clone a repository and focus on a feature
devplan clone --repo repository-name

# Clone and immediately start development
devplan clone --repo repository-name --start
```

**Utility Commands**
```bash
# Check CLI version
devplan version

# Update CLI to latest version
devplan update

# Clean up prompt files
devplan clean

# Reset preferences
devplan prefs reset
```

## Your First Project

### Step 1: Create a New Project

1. **Click "New Project"** in your Devplan dashboard
2. **Choose Your Project Type**:
   - **MVP**: For brand new products (includes tech stack setup, goal and problem space definition)
   - **Initiative**: For larger efforts within existing products (multiple features over a week or more)
   - **Feature**: For smaller, focused improvements (usually completable in 1-3 days)
3. **Configure Project Settings**:
   - Link to GitHub repository
   - Set project management integration
   - Define team members and roles

### Step 2: Start with a Simple Feature

Let's create a user authentication feature as your first Devplan experience:

1. **Click "New Feature"** in your project
2. **Enter Your Idea**: "Add user login and registration functionality"
3. **Work with the Planning Agent**:

The agent will ask questions like:
- "What authentication method do you prefer? (email/password, OAuth, etc.)"
- "I see you're using React. Should we integrate with your existing routing setup?"
- "Do you need password reset functionality?"
- "What user data should we collect during registration?"

### Step 3: Review Generated PRD

After the discovery session, review the generated Product Requirements Document:

- ✅ **Check Requirements**: Ensure all features are captured correctly
- ✅ **Review Technical Specs**: Verify the proposed architecture fits your needs
- ✅ **Validate User Stories**: Confirm acceptance criteria make sense
- ✅ **Approve Estimates**: Review time and complexity assessments

### Step 4: Generate Development Tasks

1. **Click "Create Build Plan"** to generate user stories
2. **Review Task Breakdown**: Each story includes:
   - Detailed acceptance criteria
   - Technical implementation notes
   - Time estimates
   - AI complexity ratings
3. **Sync with Your Project Management Tool**: Push stories to Linear or Jira

### Step 5: Start Development with AI

1. **Use the CLI** to focus on your feature:
   ```bash
   devplan focus --ide cursor
   ```

2. **Work with Your AI Coding Assistant**:
   - The CLI automatically generates context files for your IDE
   - Open your preferred AI-powered IDE (Cursor, Claude Code, etc.)
   - Start implementing with rich context and guidance about your specific codebase

3. **Context is Automatically Provided**:
   - Repository structure and patterns
   - Feature requirements and specifications
   - Integration points and dependencies
   - Code conventions and standards

## Team Collaboration

### For Product Managers
- **Discovery Sessions**: Lead feature planning with AI-assisted questioning
- **Requirement Review**: Use AI review to improve PRD quality
- **Stakeholder Communication**: Share planning results and get feedback
- **Progress Tracking**: Monitor development through integrated dashboards

### For Engineers
- **Context-Rich Development**: Access detailed implementation guidance
- **Estimate Feedback**: Provide actual vs. estimated time for better future planning
- **Technical Input**: Contribute to architecture and implementation decisions
- **Status Updates**: Automatic progress reporting reduces manual overhead

### For Design Partners
Devplan offers special programs for early adopters:

- **2 months free** for up to 10 users
- **1:1 support** and priority feature requests
- **Bi-weekly feedback sessions** with the product team
- **50% discount** after trial period
- **No hard commitment** required

## Common Workflows

### Product Manager Workflow
1. **Upload existing specs** or start with an idea
2. **Generate PRD and build plan** through AI collaboration
3. **Sync with Linear/Jira** for team visibility
4. **Monitor progress** through integrated dashboards

### Developer Workflow
1. **Pick up tickets** from your project management tool
2. **Focus on the feature** using `devplan focus`
3. **Implement features** with AI coding assistants using generated context
4. **Update progress** through your project management integrations

### Team Workflow
1. **Weekly planning** using Devplan's roadmap features
2. **Sprint breakdown** with AI-assisted story creation
3. **Daily standups** with automated status reports
4. **Retrospectives** with built-in analytics and insights

## Best Practices

### Setting Up for Success

1. **Complete Repository Analysis**: Ensure all relevant repositories are connected and analyzed
2. **Maintain Documentation**: Keep company standards and patterns up to date
3. **Regular Sync**: Set up webhook integrations for real-time updates
4. **Team Training**: Ensure all team members understand the workflow

### Maximizing Value

1. **Detailed Discovery**: Take time during the planning phase to provide context
2. **Iterative Improvement**: Use feedback loops to improve estimates and processes
3. **Cross-functional Collaboration**: Include both PM and engineering perspectives
4. **Continuous Learning**: Document what works and refine your approach

## Troubleshooting

### Integration Issues

**GitHub Analysis Stuck**
- Check repository permissions
- Ensure the repository isn't too large (>1GB)
- Contact support if analysis doesn't complete within 30 minutes

**Linear/Jira Sync Problems**
- Verify API permissions
- Check webhook configurations
- Ensure project mapping is correct

**CLI Authentication Errors**
- Run `devplan logout` then `devplan login`
- Check your internet connection
- Verify your account is active

### Common Questions

**Q: Can I use Devplan with private repositories?**
A: Yes, Devplan supports private repositories with proper permissions.

**Q: How long does repository analysis take?**
A: Analysis typically completes within 5-10 minutes for most repositories.

**Q: Can I customize the PRD templates?**
A: Yes, enterprise plans include template customization options.

**Q: Does Devplan work with monorepos?**
A: Yes, Devplan can analyze and work with monorepo structures.

## Next Steps

Now that you're set up:

1. **Explore the [Core Workflow](/docs/core-workflow)** to understand the complete development process
2. **Review [Architecture Documentation](/docs/architecture)** to understand how Devplan works
3. **Join our community** for tips, best practices, and feature updates
4. **Provide feedback** to help us improve the platform

Need help? Contact our support team at info@devplan.com.

Ready to transform your development process? Start building your first feature!