---
title: How Devplan Works
slug: /how-devplan-works
---

# How Devplan Works

Devplan learns about your product from the tools and documents you already use, then surfaces what matters through daily digests, insights, and Ask Devplan. It also supports structured feature planning — PRDs, user stories, technical designs, and export to PM tools.

Two layers:

1. **Product intelligence** — ingest context and integrations, build a knowledge graph and feature catalog, extract signals, synthesize insights, deliver [Today](/today).
2. **Feature planning** — turn ideas into implementation-ready specs and coding prompts grounded in that context.

See [Getting Started](/getting-started), [Core Workflow](/core-workflow), and [Platform Overview](/platform-overview).

---

## Product intelligence pipeline

| Layer | What it is | Where you see it |
|-------|------------|------------------|
| **Workspace context** | Goals, customers, competitors — what you tell Devplan | [Workspace](/workspace), [onboarding](/getting-started) |
| **Integrations** | Live data from GitHub, Slack, Jira, and other tools | [Integrations](/integrations) |
| **Document uploads** | Files in the workspace knowledge graph | **Knowledge > Integrations** uploads |
| **Knowledge graph** | Connected model of people, features, and research | Powers Ask Devplan and cross-source reasoning |
| **Feature catalog** | Structured map of product features | [Product](/product) |
| **Signals** | Individual evidence items | [Signals](/signals) |
| **Insights** | Synthesized, role-aware takeaways | [Insights](/insights) |
| **Daily Digest** | Summary of what changed, with evidence | [Today](/today) |

**Workspace context** frames how Devplan interprets signals. **Integrations** feed the pipeline on a schedule — repo bootstrap often takes 30+ minutes; signals and insights grow over hours and days. **Uploads** are parsed into the knowledge graph alongside integration data.

---

## Knowledge graph and catalog

The knowledge graph links workspace context, uploads, catalog features, tickets, and code — enabling cross-source answers in [Ask Devplan](/ask-devplan) and evidence citations on Today and Insights.

The **feature catalog** maps features to code and docs. **Catalog bootstrap** runs after code repos are connected; **catalog update** jobs keep [Product](/product) and [Updates](/updates) current. Jira and Linear context from allowed projects enriches bootstrap.

---

## Signals, insights, and planning

**Signals** are raw evidence — PRs, Slack threads, tickets, uploads. **Insights** synthesize related signals into risks, opportunities, and themes, personalized by [Preferences](/preferences) roles. Both feed [Today](/today).

For feature planning, Devplan maps requirements to components and APIs for impact analysis, story sequencing, and context-rich coding prompts. Planning agents run discovery, PRD review, and attachment processing. See [Core Workflow](/core-workflow) for the full planning flow.

---

## Integrations

Jira and Linear serve two roles:

1. **Ingestion** — ticket data feeds catalog and [Signals](/signals). Jira scopes via **Allowed JIRA Projects** on the manage page; Linear includes connected teams when active.
2. **Export** — one-way push from a Devplan project to Jira or Linear via **Sync** → **Export to JIRA** / **Export to Linear**. Changes in Jira or Linear after export are not synced back.

See [Jira Integration](/jira-integration) and [Integrations](/integrations).

### CLI

The CLI writes a context file for your AI IDE — project context, current task, code patterns, file references, and repo guidance. See [CLI Cheat Sheet](/cli-cheat-sheet).

---

## Access control

| Role | Internal name | Permissions |
|------|---------------|-------------|
| **Admin** | `OWNER` | Full access — members, settings, integrations |
| **User** | `EDITOR` | Projects, documents, integrations — no member/settings management |

See [Workspace Members](/workspace-members).

---

## Data privacy

Devplan analyzes code structure and metadata — not source code, business logic, credentials, or customer data. Hybrid deployment is available for on-premises codebase analysis.
