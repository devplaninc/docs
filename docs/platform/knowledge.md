---
title: Knowledge
slug: /knowledge
sidebar_label: Knowledge
sidebar_position: 7
---

# Knowledge

Knowledge is the context layer behind everything Devplan generates. It holds what your
company is, what you've built, and the raw evidence flowing in from your connected tools.
Keep it current and your [Insights](/insights), project plans, and [Ask Devplan](/ask-devplan)
answers stay relevant.

Behind the scenes, this context feeds **Weaver** — the continuous knowledge graph that
connects your signals, context, and history into durable team memory. The areas below are
where you view and curate what Weaver learns from. See
[How Devplan Works](/how-devplan-works#weaver-the-knowledge-graph) for the full picture.

Find it under **Knowledge** in the left nav, with four areas:

| Area | What it holds |
|------|---------------|
| [Workspace](#workspace) | Company context — customers, goals, competitors |
| [Product catalog](#product-catalog) | Auto-generated feature catalog from your code |
| [Signals](#signals) | Raw evidence from connected sources |
| [Integrations](#integrations) | The data sources that feed everything above |

---

## Workspace {#workspace}

Core context that shapes AI output — customers, goals, competitors, and background.

- **Website & overview** — Devplan drafts an initial overview from your site; edit it and
  **Rescan** after major changes
- **Target customers** — who you serve
- **Competitors** — your competitive landscape
- **Company goals** — what your team is building toward
- **Additional context** — free-form background

This is the highest-leverage context to keep accurate — it informs every downstream surface.
You can also edit your website under [Workspace settings](/settings/workspace#general).

---

## Product catalog {#product-catalog}

An auto-generated catalog of your product — user flows, technical design, and implementation
status by product area.

- Browse by product area or search features
- Read the **User Flow** and **Tech Design** tabs for each feature
- Use **Refine section** to submit corrections

The catalog populates after your code repositories are connected and the bootstrap completes
(often **30+ minutes**). Recent changes surface in [Updates](/updates).

---

## Signals {#signals}

Raw evidence from connected sources — PRs, tickets, Slack messages, docs, and uploads —
before it's synthesized into [Insights](/insights).

- Filter by source type (GitHub, Slack, Jira, etc.)
- Search and sort the feed
- Open evidence flyouts and jump to related [Insights](/insights)

:::note
Signals may not appear in all workspaces.
:::

---

## Integrations {#integrations}

Connect code repos, docs, tickets, and communication tools that feed Knowledge. Manage them
under **Knowledge > Integrations**.

| Integration | Guide |
|-------------|-------|
| GitHub | [Setup](/github-integration) |
| Bitbucket | [Setup](/bitbucket-integration) |
| Jira | [Setup](/jira-integration) |
| Linear | [Setup](/linear-integration) |
| Slack | [Setup](/slack-integration) |
| Notion | [Setup](/notion-integration) |
| Google Drive | [Setup](/google-drive-integration) |
| Confluence | [Setup](/confluence-integration) |
| Upload files | [Uploads](/upload-files) |
| Granola | [Setup](/granola-integration) |

Most providers need **Connect** plus **Configure**, **Attach**, or **Select folders**.
See the [Integrations overview](/integrations-overview) for the full list and setup details,
or [MCP Integration](/mcp-integration) to connect Devplan to your own tools.

---

## Related pages

- [Insights](/insights) — synthesized takeaways from your Signals
- [Core Workflow](/core-workflow) — how Knowledge fits the end-to-end flow
- [Integrations overview](/integrations-overview) — per-tool setup guides
