# Getting Started with Devplan

*Complete guide to account setup and your first project*

Welcome to Devplan! This guide will get you from zero to your first AI-powered feature in under 30 minutes.

## Quick Setup Overview

**Total Time: ~15 minutes**

✅ **Account Setup** (2 min) → ✅ **GitHub Integration** (3 min) → ✅ **CLI Installation** (5 min) → ✅ **First Project** (5 min)


## Step 1: Account Setup

### Create Your Account

1. **Sign Up** at [devplan.com](https://devplan.com)
   - Google SSO for fastest setup
   - Or magic-link login with email

2. **Choose Plan** (can change later):
   ```
   👥 Starter: $19/user + AI credits
   ✅ Perfect for: Solo founders, agencies, builders

   📈 Professional: $49/user + AI credits
   ✅ Perfect for: Growing product teams, scale-ups

   14-day free trial includes:
   - 2 repository analyses  
   - Unlimited projects and features  
   - Full CLI access  
   - Access to a subset of generated prompts for testing  
   
   ```
3. **Quick Profile Setup**:
   - Company name and website
   - Role overview
  
4. **Company Setup**:
   - Navigate to: Knowledge → Company
   - Add product overview, target customers, goals 


## Step 2: GitHub Integration (Highly Recommended)

### Connect Your Repositories

To get started, connect to the GitHub repos that you'll be working with. Devplan analyzes your repositories to understand your architecture, conventions, and patterns to ensure generated specs follow your approahces and standards.

```bash
1. Knowledge → Code Research → GitHub Connect
2. "Connect GitHub Account" → Authorize Devplan
3. Select repositories to analyze (start with your main repos you will be building projects in)
4. Click "Start Analysis"
```
**What's Analyzed:**
- ✅ Framework and tech stack detection  
- ✅ Component patterns and user flows  
- ✅ Database schemas and API structures  
- ✅ Testing and build configurations  

**What's NOT Stored:**
- ❌ Your actual source code  
- ❌ Sensitive data or credentials  
- ❌ Business logic details  


## Step 3: Project Management Integration (Optional)

**Linear:**
1. Connect Linear in `Settings → Integrations → Linear/Jira`

**Jira:**
1. Install [Devplan Jira Atlassian](https://developer.atlassian.com/console/install/cd539bc3-11b5-4b71-a82d-d8af831435a1?signature=AYABeETqleNeikM5CMnAxz%2B755IAAAADAAdhd3Mta21zAEthcm46YXdzOmttczp1cy1lYXN0LTE6NzA5NTg3ODM1MjQzOmtleS83ZjcxNzcxZC02OWM4LTRlOWItYWU5Ny05MzJkMmNhZjM0NDIAuAECAQB4KVgoNesMySI2pXEz4J5S%2B4but%2FgpPvEEG0vL8V0Jz5cBPXqIpFHwuylgGhQUrD7WFAAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDJcRfkjl7WpHMarLtAIBEIA7mc2prFXlHJjTKbDnNcpmzeACyi2tBtMq3hVrGHdh2akO5mTfwz%2BBy6EHr6bPeNKoM2L60HHHIemHrDIAB2F3cy1rbXMAS2Fybjphd3M6a21zOmV1LXdlc3QtMTo3MDk1ODc4MzUyNDM6a2V5LzU1OWQ0NTE2LWE3OTEtNDdkZi1iYmVkLTAyNjFlODY4ZWE1YwC4AQICAHig7hOcRWe1S%2BcRRsjD9q0WpZcapmXa1oPX3jm4ao883gF4Eo5GpaFrAlXkpsEWdYNKAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMn%2FqaVxEv1dTfPdUbAgEQgDuBVtVlNMJJ47vMCa7oWNLyN%2BfRjcnRrVN%2BiX%2BjGQnibmcqInsNVcfBzPugUtVZ6PNUkDRe%2Bsgm7urUPgAHYXdzLWttcwBLYXJuOmF3czprbXM6dXMtd2VzdC0yOjcwOTU4NzgzNTI0MzprZXkvM2M0YjQzMzctYTQzOS00ZmNhLWEwZDItNDcyYzE2ZWRhZmRjALgBAgIAeBeusbAYURagY7RdQhCHwxFswh7l65V7cwKp%2BDc1WGoHAVlLDoEvXPFCxzm%2FW5nVIsQAAAB%2BMHwGCSqGSIb3DQEHBqBvMG0CAQAwaAYJKoZIhvcNAQcBMB4GCWCGSAFlAwQBLjARBAwoTaqw7IFZWPAYzAYCARCAO3gE%2FMvECQjfUjr0lqu2N5T%2FdiuIAKtBgtXKQypXXfHqYzmqbMPGvL5WjVe8MxHYmGyUnpK0jog1ssaRAgAAAAAMAAAQAAAAAAAAAAAAAAAAAOYf7d4xRr3RzSZt2Jc8A%2Fr%2F%2F%2F%2F%2FAAAAAQAAAAAAAAAAAAAAAQAAADJtmNORi7b8ozuX4AmbPzgLt1wtlQC7ySPPBb8KDvfFhFGzE9BK0iAxszz6eCbUaX2oBe%2FkWOBdho%2BVmvPIwCsBVUY%3D&product=jira) application.
2. Connect or re-connect Jira from the `Settings -> Integrations` screen

Why Integrate?
**Project management sync enables:**
- ✅ Automatic ticket creation from user stories
- ✅ Real-time status updates
- ✅ Context links between tickets and requirements
- ✅ Sprint planning with Devplan estimates



## Step 4: CLI Installation

The Devplan CLI connects your local environment to your projects in the app. It lets developers pull specs, tasks, and context down to the IDE, guiding AI execution for one-shot implementation.

### Install the CLI

**Homebrew**
```bash
brew tap devplaninc/devplan && brew install devplan
```

### Authenticate and Verify CLI

```bash
# 1. Authenticate
devplan auth

# 2. Verify installation
devplan version
```

:::note Why This Matters
The CLI syncs generated specs, technical designs, and tasks directly into your local workflow.  
The `start` command plus the generated specs enables a near one-shot AI coding experience.  
Custom slash commands for Claude Code further standardize and speed up developer workflows.
:::

## Step 5: Create Your First Project

Once setup is complete, you’re ready to start your first project, ideally one with a bit of complexity! 

You can begin with UX notes, an existing PRD, or just a rough idea. The agent will refine the input with you and generate the first set of documents. After user stories are created and approved in the **Product** tab, a tech lead or developer typically takes over on the **Development** tab to create the technical design and tasks, all of which can all be synced to Linear or Jira.

### Example Flow

1. Start with a short description (UX, PRD, or notes)  
2. The agent refines your input and generates PRD + user stories  
3. Approve stories → move to technical design and tasks
4. The agent refines your input and generates tech design + tasks
5. Optional: sync tasks to Linear or Jira  
6. Developer uses the CLI to pull context locally  
7. Run `devplan start` to initialize AI-assisted coding  

:::tip Team Workflow
- **PMs:** Lead discovery and approve requirements  
- **Engineers:** Use CLI to spec and execute with AI  
- **Teams:** Track everything through synced tools  
:::

## You’re Ready! Best Practices for Success

### 👩‍💼 For Product Managers

**During Discovery:**
- ✅ **Provide Rich Context**: Include user research, analytics, and business goals
- ✅ **Embrace AI Questions**: Let the agent help you think through edge cases
- ✅ **Review Generated PRDs**: Use the AI review process to catch gaps
- ✅ **Link Related Features**: Connect to existing user flows and features

**Common Mistakes to Avoid:**
- ❌ Rushing through discovery phase
- ❌ Skipping collaboration
- ❌ Not updating requirements when scope changes

### 👨‍💻 For Engineers

**During Implementation:**
- ✅ **Trust the Context**: AI prompts include architectural decisions and patterns
- ✅ **Update Estimates**: Provide feedback when actual time differs from estimates
- ✅ **Use CLI Workflow**: `devplan focus` saves 15-30 minutes per feature
- ✅ **Document Learnings**: Share discoveries that could improve future estimates

## References

**🚀 Start Building**
- Create your first project and try the full cycle  
- Compare the AI-assisted build to your normal dev workflow  

**📚 Learn More**
- [Core Workflow](/core-workflow)  
- [Architecture](/architecture)  
- [Value Proposition](/value-proposition)  

**Need Help?**
- Email: info@devplan.com  
- Troubleshooting: [Support Docs](/support)

