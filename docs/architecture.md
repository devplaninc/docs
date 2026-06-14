---
title: How Devplan Works
slug: /how-devplan-works
---

# How Devplan Works

Devplan is a product intelligence platform that learns about your product from the tools and documents you already use — then surfaces what matters through daily digests, insights, and a conversational assistant. On top of that foundation, Devplan also supports structured feature planning: PRDs, user stories, technical designs, and export to your PM tools.

Two layers work together:

1. **Product intelligence** — Devplan ingests workspace context, integrations, and uploads; builds a knowledge graph and feature catalogue; extracts signals; synthesizes insights; and delivers a [Daily Digest](/today).
2. **Feature planning** — When you are ready to build, Devplan turns ideas into implementation-ready specs and coding prompts grounded in everything it already knows.

For step-by-step setup and timelines, see [Getting Started](/getting-started) and [Core Workflow](/core-workflow). For what each page does in the app, see [Platform Overview](/platform-overview).

---

## Product intelligence pipeline

Devplan does not start from a blank slate. It continuously reads from connected tools, uploaded documents, and workspace context to build a living model of your product.

| Layer | What it is | Where you see it |
|-------|------------|------------------|
| **Workspace context** | Company details, goals, customers, competitors — what you tell Devplan directly | [Workspace](/workspace), onboarding wizard |
| **Integrations** | Live data from GitHub, Slack, Jira, Confluence, and other tools | [Integrations](/integrations) |
| **Document uploads** | Files ingested into the workspace knowledge graph | **Knowledge > Integrations** uploads |
| **Knowledge graph** | Connected model of people, features, research, and uploaded content | Powers Ask Devplan, signals, and cross-source reasoning |
| **Feature catalogue** | Structured map of your product's features, grounded in code and docs | [Product](/product) |
| **Signals** | Individual evidence items extracted from sources | [Signals](/signals) |
| **Insights** | Synthesized, role-aware takeaways built from signals | [Insights](/insights) |
| **Daily Digest** | AI-generated summary of what changed, with evidence links | [Today](/today) |

---

## Inputs

### Workspace context

During [onboarding](/getting-started) and on the [Workspace](/workspace) page, you tell Devplan who you are, what you are building toward, and who you serve. This context frames how Devplan interprets signals, ranks insights, and tailors digests — even before integrations finish processing.

### Integrations

Each connected source feeds a different part of the pipeline. Code repos drive catalogue bootstrap and code-change signals. Slack, Jira, Linear, and Confluence contribute discussion and delivery evidence. Documentation providers enrich the knowledge graph.

Background jobs ingest and analyze connected data on a schedule — not instantly. Repository bootstrap typically takes 30 minutes or longer; signals and insights grow richer over hours and days. See [Core Workflow](/core-workflow) for category-by-category detail and typical timelines.

### Document uploads

Uploads are not stored in isolation. PDFs, spreadsheets, decks, and images are parsed and **ingested into the knowledge graph** alongside integration data. Image attachments receive AI-generated descriptions so their content is accessible in text-only contexts. Upload content surfaces in signals, insights, Ask Devplan answers, and daily digests as processing completes.

---

## Knowledge graph

The knowledge graph is Devplan's connected model of your product — linking workspace context, uploaded research, catalogue features, ticket history, and code structure into one reasoning layer.

This is what allows Devplan to answer cross-source questions in [Ask Devplan](/ask-devplan), cite evidence on Today and Insights, and connect informal product reasoning (Slack threads, call notes) to formal artefacts (PRs, tickets, specs).

---

## Feature catalogue

The feature catalogue is Devplan's structured representation of your product — descriptions, user flows, technical design, and links to related code and documentation.

| Element | Purpose |
|---|---|
| Feature records | Description, scope, and metadata per feature |
| References | Links to related code files and documentation |
| Embeddings | Vector representations that power semantic search |
| Feature IDs (ULIDs) | Stable unique identifiers per feature |

**Catalogue bootstrap** runs after code repositories are connected and configured. Devplan analyzes repository structure — tech stack, architecture patterns, component conventions, data models, API surface, and testing patterns — and maps features to code. Jira and Linear context from allowed projects enriches the bootstrap.

The catalogue is not static. Periodic **catalogue update** jobs keep the [Product](/product) page and [Updates](/updates) feed current as your codebase and integrations evolve.

---

## Signals and insights

**Signals** are the raw evidence items Devplan extracts from everything it reads — a merged PR, a Slack thread, a Jira comment, an uploaded research doc, a Confluence page update. They appear chronologically on the [Signals](/signals) page and can be filtered by source type.

**Insights** synthesize related signals into role-aware takeaways — risks, opportunities, feedback themes, and alignment gaps. Your [Preferences](/preferences) stakeholder role selections personalize which insights surface most prominently.

Both layers feed the [Daily Digest](/today): a concise summary of what changed across your workspace, with inline evidence pills linking back to the original sources.

---

## Feature planning

When you move from understanding your product to planning what to build next, Devplan applies the same context model to structured project work.

Devplan maps relationships between requirements, components, APIs, and data models. This powers impact analysis during spec generation, dependency-aware user story sequencing, and context-rich coding prompts that preserve the chain from business requirement to technical constraint.

### AI agents

Devplan uses specialized agents during planning and review:

| Agent | Role |
|---|---|
| Planning Agent | Runs requirement discovery, asks targeted questions grounded in your codebase |
| Review Agent | Evaluates generated PRDs for completeness, clarity, feasibility, and alignment |
| Embedding Agent | Processes attachments and generates descriptions for images and documents |

A typical planning flow moves from discovery through PRD, user stories, technical design, PM tool export, and AI coding prompts. See [Core Workflow](/core-workflow) for the full nine-step planning workflow.

### Attachments

| Level | Scope | Examples |
|---|---|---|
| Workspace | Available across all projects | Architecture decision records, design systems, company standards |
| Project | Scoped to a single project | Feature mockups, research notes, customer feedback |

---

## Integrations

Jira and Linear serve two distinct purposes in Devplan:

1. **Ingestion (into Devplan)** — Connected ticket data feeds background jobs that build your feature catalogue and generate [Signals](/signals). Jira uses **Allowed JIRA Projects** on the integration manage page to scope which projects are included; if none are selected, Jira data is excluded from catalogue operations. Linear includes connected teams when the integration is active.
2. **Export (from Devplan)** — From a project, the **Sync** menu opens a one-way export that pushes Devplan structure to your PM tool. The UI labels this **Jira Sync** / **Linear Sync**, but the action is **Export to JIRA** or **Export to Linear** — Devplan project → Jira Epic / Linear Project, user stories → issues. Changes made in Jira or Linear after export are not reflected back in Devplan.

See [Jira Integration](/jira-integration) for setup and [Integrations](/integrations) for the full provider list.

### CLI

The CLI pulls user story context from Devplan and writes a context file for your AI IDE.

| Context file section | Contents |
|---|---|
| Project context | Tech stack, frameworks, and architecture summary |
| Current task | Story description and acceptance criteria |
| Code patterns | Conventions and patterns from your codebase |
| File references | Specific paths relevant to the task |
| Repository guidance | Team-maintained notes on conventions and decisions |

---

## Access Control

Devplan uses two workspace roles:

| Role (UI) | Internal name | Key permissions |
|---|---|---|
| **Admin** | `OWNER` | Full workspace access — members, settings, integrations, and all content |
| **User** | `EDITOR` | Create and manage projects, documents, and integrations — no member or settings management |

Only **Admins** can manage user roles and workspace settings. See [Workspace Members](/workspace-members) for inviting and assigning roles.

---

## Data Privacy

Devplan analyzes code structure and metadata — it does not store your source code, proprietary business logic, credentials, or customer data. Component names, API paths, table names, framework identifiers, and code patterns are stored as metadata only.

For security-sensitive environments, Devplan supports a hybrid deployment model where codebase analysis runs on-premises while collaboration features run in the cloud.
