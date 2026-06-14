---
title: Getting Started
slug: /getting-started
---

# Getting Started

This guide walks you through setting up a new Devplan workspace — from account creation through the onboarding wizard to connecting your tools. The more context you provide upfront, the smarter Devplan becomes across [Today](/today), [Insights](/insights), [Ask Devplan](/ask-devplan), and project planning.

---

## 1. Create your account

Sign up at [app.devplan.com](https://app.devplan.com) using Google SSO or a magic link. The 14-day free trial includes full access to the platform.

After signing in, Devplan launches the **workspace setup wizard** — a guided flow to capture your company context before you start using the app.

---

## 2. Complete the workspace setup wizard

The wizard has six steps. You can move forward and back between steps, and most steps after the first save automatically as you click **Continue**. Steps marked **Optional** can be skipped.

### Step 1: Workspace

**Tell us about your company.**

This is where you define the basics Devplan uses to frame everything it reads from your connected tools.

| Field | What to enter |
|-------|---------------|
| **Workspace icon** | Upload a logo or pick an icon |
| **Company name** | Your workspace name (minimum 3 characters) |
| **Company website** | Optional. Devplan can scan your site to draft an initial product overview |
| **What you do** | A sentence or two on what your company builds and who it serves |

Click **Create workspace** to finish this step and move on. You can refine this context later under **Knowledge > Workspace** in the app or [Workspace settings](/workspace-general).

### Step 2: Goals (optional)

**What are your company goals?**

Describe what success looks like for your team — product milestones, usage targets, launch dates, or quarterly priorities. Examples:

- Launch beta by end of Q2
- Reach 1,000 active users
- Ship the new billing flow

You can also **Attach docs** (strategy decks, OKR docs, roadmaps) to give Devplan more to work with. Goals help Devplan rank [Insights](/insights) and tailor output to what your team is actually working toward.

### Step 3: Customers (optional)

**Who are your customers?**

Two fields side by side:

| Field | What to enter |
|-------|---------------|
| **Who you serve** | Job titles, personas, or customer segments you target |
| **Closest peers** | Companies or products you compete with |

This context filters and ranks customer signals, and grounds positioning in insights and briefs.

### Step 4: Other (optional)

**Anything else we should know?**

Add strategy briefs, quarterly priorities, market context, or anything that does not fit the earlier steps. You can type free-form background or **Attach docs** (decks, one-pagers, research).

### Step 5: Team (optional)

**Invite your team.**

Devplan works best when product and engineering teammates share the same workspace. Send invites by email and assign a role for each person. Pending invites can be managed here or later under [Workspace Members](/workspace-members).

Invitees accept from **Settings > Profile > Personal Info** or via the invitation email.

### Step 6: Setup

**Finish setting up.**

Your company context is saved. The final step directs you to connect your tools so Devplan can start reading from code, docs, tickets, Slack, and more.

Click **Go to integrations** to open the [Integrations](/integrations) hub, or **Back to workspace** to explore the app first.

---

## 3. Connect your integrations

Integrations are the most important step after onboarding. Devplan learns from your existing tools — the more sources you connect, the smarter your daily digests, insights, signals, product catalogue, and AI answers become.

Open **Knowledge > Integrations** in the sidebar (or follow the link from the setup wizard).

### What to connect first

Prioritize the sources that match how your team works:

| Priority | Integration | Why it matters |
|----------|-------------|----------------|
| High | **GitHub** or **Bitbucket** | Powers code analysis, feature catalogue bootstrap, and implementation context |
| High | **Slack** | Feeds team discussions, decisions, and signals |
| High | **Jira** or **Linear** | Links tickets, feedback, and delivery context |
| Medium | **Confluence**, **Notion**, or **Google Drive** | Product docs, specs, and strategy material |
| Medium | **Granola** or **Google Drive** | Meeting notes and call summaries |

See the full list and setup flows on the [Integrations](/integrations) page and [Integrations overview](/integrations-overview) for per-provider guides.

### Configure what Devplan reads

Connecting an integration is only the first step. For most providers, you also need to **Configure** or **Select folders** to choose which repos, channels, spaces, or documents Devplan indexes.

- **GitHub / Bitbucket** — select which repositories to analyze
- **Slack** — choose channels and scopes
- **Confluence / Notion / Google Drive** — pick spaces, pages, or folders
- **Jira / Linear** — select projects and issue types

The more precisely you scope what Devplan reads, the more relevant your [Signals](/signals) and [Insights](/insights) will be.

### Allow time for processing

New integrations do not populate your workspace instantly. Devplan needs time to ingest, analyze, and synthesize data from each source.

| Source type | What to expect |
|-------------|----------------|
| **Code repositories** | First-time repository analysis and feature catalogue bootstrap can take **30 minutes or longer** depending on repo size and complexity. The [Product](/product) catalogue and [Updates](/updates) feed fill in as processing completes. |
| **Docs and tickets** | Confluence, Notion, Google Drive, Jira, and Linear content is ingested on an ongoing basis. New material may take time to appear in signals and insights. |
| **Slack and meeting notes** | Messages and call summaries are processed incrementally. Signal volume grows as Devplan reads more history. |

During this period:

- [Today](/today) digests may show fewer changes until enough data has flowed in
- [Insights](/insights) and [Signals](/signals) will start sparse and become richer over hours or days
- [Ask Devplan](/ask-devplan) answers improve as more sources are indexed

You do not need to wait for processing to finish before exploring the app — but **connect integrations early** and give Devplan time to catch up. Adding a new integration later also triggers processing for that source; expect a similar delay before its data fully surfaces.

---

## 4. Explore the platform

Once onboarding is complete and integrations are connected, start using the workspace:

1. Open **[Today](/today)** to review your daily digest and [personalize](/today) what it covers
2. Browse **[Insights](/insights)** for synthesized takeaways from your signals
3. Ask questions in **[Ask Devplan](/ask-devplan)** about product changes, blockers, and priorities
4. Review **[Product](/product)** to see what Devplan knows about your feature catalogue
5. Create a project via **+ Add** when you are ready to plan and build

For a full walkthrough of the feature planning workflow, see [Core Workflow](/core-workflow).

---

## For teams and organizations

If you are setting up Devplan for a team:

1. Complete the onboarding wizard for your first workspace
2. Invite teammates during the **Team** step or later via [Workspace Members](/workspace-members)
3. Connect shared integrations (GitHub, Slack, Jira) so everyone benefits from the same context
4. Configure [Daily Digest](/workspace-daily-digest) delivery for the workspace and set per-user email preferences in [Preferences](/preferences)
5. For multi-workspace setups, create an organization under **Settings > Organization** and enroll in an enterprise plan via [Organization Billing](/organization-billing)

A shared Slack channel is available on supported plans for onboarding support.

---

## Next steps

- [Platform Overview](/platform-overview) — tour of every page in the sidebar
- [Settings Overview](/settings-overview) — profile, workspace, and organization configuration
- [Integrations](/integrations) — connect and manage data sources
- [Core Workflow](/core-workflow) — plan a feature from idea to implementation
