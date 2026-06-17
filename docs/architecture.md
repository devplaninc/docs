---
title: How Devplan Works
slug: /how-devplan-works
---

# How Devplan Works

Devplan learns about your product from the tools and documents you already use, then surfaces what matters through daily digests, insights, and Ask Devplan. It also supports structured feature planning — PRDs, user stories, technical designs, and export to PM tools.

Two layers:

1. **Product intelligence** — ingest context and integrations, build the **Weaver** knowledge graph and feature catalog, extract signals, synthesize insights, deliver [Today](/today).
2. **Feature planning** — turn ideas into implementation-ready specs and coding prompts grounded in that context.

See [Overview](/overview), [Getting Started](/getting-started), [Core Workflow](/core-workflow), and [Platform Overview](/platform-overview).

---

## Product intelligence pipeline

| Layer | What it is | Where you see it |
|-------|------------|------------------|
| **Workspace context** | Goals, customers, competitors — what you tell Devplan | [Workspace](/knowledge#workspace), [onboarding](/getting-started) |
| **Integrations** | Live data from GitHub, Slack, Jira, and other tools | [Integrations](/knowledge#integrations) |
| **Document uploads** | Files in the workspace knowledge graph | **Knowledge > Integrations** uploads |
| **Weaver (knowledge graph)** | Connected model of people, features, and research | Powers Ask Devplan and cross-source reasoning |
| **Feature catalog** | Structured map of product features | [Product](/knowledge#product-catalog) |
| **Signals** | Individual evidence items | [Signals](/knowledge#signals) |
| **Insights** | Synthesized, role-aware takeaways | [Insights](/insights) |
| **Daily Digest** | Summary of what changed, with evidence | [Today](/today) |

**Workspace context** frames how Devplan interprets signals. **Integrations** feed the pipeline on a schedule — repo bootstrap often takes 30+ minutes; signals and insights grow over hours and days. **Uploads** are parsed into the knowledge graph alongside integration data.

---

## Weaver: the knowledge graph

**Weaver** is the continuous knowledge graph that powers everything else. It does three things on an ongoing basis:

- **Ingest signals** from code, conversations, tickets, and docs
- **Maintain memory** of product context, decisions, and history over time
- **Route insight** to people and AI agents — in the interface, Slack, or MCP-enabled tools

By linking workspace context, uploads, catalog features, tickets, and code into one persistent graph, Weaver enables cross-source answers in [Ask Devplan](/ask-devplan) and the evidence citations on Today and Insights. This shared, durable memory is what keeps responses grounded in your organization rather than hallucinated.

The **feature catalog** maps features to code and docs. **Catalog bootstrap** runs after code repos are connected; **catalog update** jobs keep [Product](/knowledge#product-catalog) and [Updates](/updates) current. Jira context from allowed projects enriches bootstrap.

---

## Signals, insights, and planning

**Signals** are raw evidence — PRs, Slack threads, tickets, uploads. **Insights** synthesize related signals into risks, opportunities, and themes, personalized by [Preferences](/settings/profile#preferences) roles. Both feed [Today](/today).

For feature planning, Devplan maps requirements to components and APIs for impact analysis, story sequencing, and context-rich coding prompts. Planning agents run discovery, PRD review, and attachment processing. See [Spec Driven Development](/spec-driven-development) for the planning workflow.

---

## Integrations

Connect sources under **Knowledge > Integrations**. For most providers, **Connect** is only the first step — you also enable repos, attach pages or folders, invite the Slack bot, or select Jira projects before data flows in.

| Integration | What Devplan reads | What it powers |
|-------------|-------------------|----------------|
| [GitHub](/github-integration) | Repos, PRs, commits, code structure | Catalog bootstrap, code-change signals, planning context |
| [Bitbucket](/bitbucket-integration) | Same as GitHub (requires Forge app) | Catalog bootstrap, code-change signals |
| [Jira](/jira-integration) | Issues and project activity from **Allowed JIRA Projects** (requires Forge app) | Catalog enrichment, [Signals](/knowledge#signals), [Insights](/insights) |
| [Linear](/linear-integration) | Issues and team activity from connected teams | [Signals](/knowledge#signals), [Insights](/insights) |
| [Slack](/slack-integration) | Messages in channels where the Devplan bot is a member | Discussion signals, alignment gaps |
| [Notion](/notion-integration) | Attached pages and databases (on demand) | Signals, knowledge graph, Ask Devplan |
| [Google Drive](/google-drive-integration) | Attached folders via a workspace service account (on demand) | Signals, knowledge graph, Ask Devplan |
| [Confluence](/confluence-integration) | Attached spaces and pages (on demand; same Forge app as Jira) | Signals, knowledge graph, Ask Devplan |
| [Upload files](/upload-files) | PDFs, docs, spreadsheets, images you upload directly | Knowledge graph, signals, insights |
| [Granola](/granola-integration) | Call notes and meeting summaries (paid Granola accounts only) | Interview and stakeholder signals |

Code repos drive catalog bootstrap — first analysis often takes **30+ minutes**. Other sources populate [Signals](/knowledge#signals) and [Insights](/insights) over hours and days as background jobs run.

Setup guides: [Integrations overview](/integrations-overview).

### CLI

The CLI writes a context file for your AI IDE — project context, current task, code patterns, file references, and repo guidance. See [CLI Cheat Sheet](/cli-cheat-sheet).

---

## Access control

| Role | Internal name | Permissions |
|------|---------------|-------------|
| **Admin** | `OWNER` | Full access — members, settings, integrations |
| **User** | `EDITOR` | Projects, documents, integrations — no member/settings management |

See [Workspace Members](/settings/workspace#members).

---

## Data privacy

Devplan analyzes code structure and metadata — not source code, business logic, credentials, or customer data. Hybrid deployment is available for on-premises codebase analysis.
