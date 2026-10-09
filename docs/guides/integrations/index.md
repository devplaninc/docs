---
title: Integrations Overview
slug: /integrations-overview
description: Connect your sources so Devplan can relate customer needs, product behavior, and delivery.
---

# Integrations

Connect the tools where your team already works so Devplan can relate customer feedback, product behavior, and delivery. Together, those sources help Weaver explain not only what changed, but why it matters and which work it affects.

After onboarding, open **Integrations** to connect or manage the services and sources your workspace uses. During signup, connect your initial sources through the guided setup flow instead; the main app navigation is available once your initial product map is ready. See [Getting Started](/getting-started).

Choose a connection based on what you want Devplan to do with it, then complete its authorization and source-selection steps. The provider guides below describe management from the main app. Workspace Admins authorize connections and manage their source configuration; access to the source service may also require its administrator. Uploading a file or connecting your own AI assistant follows the permissions described in those guides.

## Two ways to connect your tools

| Type | What it does |
|---|---|
| Built-in integrations | Process selected sources into ongoing product knowledge, with setup and scope specific to each source. |
| Additional connections | Give Weaver tools to retrieve information or perform supported actions in other services, subject to account access and tool permissions. |

These roles can overlap. A service may be available through more than one connection, and some additional connections may support background workflows. **Connecting a service does not mean all its content is continuously imported.** Check the connection's purpose and configured scope.

### Built-in integrations {#built-in-integrations}

Use built-in integrations when you want selected source material to inform product knowledge, such as Live Docs, changes, signals, project assessments, and reports. What each source contributes depends on the integration and its processing support.

| Source | What it helps you understand | Setup guide |
|---|---|---|
| Code repositories | How the product works and what changed in its implementation | [GitHub](/github-integration), [Bitbucket](/bitbucket-integration), [GitLab](/gitlab-integration) |
| Issues and delivery context | What work is planned or in progress, and how it relates to product needs | [Jira](/jira-integration), [Linear](/linear-integration) |
| Team discussions | Decisions, questions, and constraints that emerge between formal planning sessions | [Slack](/slack-integration), [Microsoft Teams](/microsoft-teams-integration) |
| Documents | Requirements, research, and the reasoning behind earlier decisions | [Google Drive](/google-drive-integration), [Notion](/notion-integration), [Confluence](/confluence-integration) |
| Meeting notes | Customer needs and commitments discussed on calls | [Granola](/granola-integration), [Microsoft Teams](/microsoft-teams-integration) |
| Files outside connected services | Research or feedback that would otherwise be missing from workspace context | [Uploads](/upload-files) |

Start with the sources relevant to the questions you want to answer. For example, customer interview notes help explain a request; repository analysis shows the existing behavior; related issues show work already underway. Together, they give Weaver more context to assess what still needs to change.

Source selection matters: authorization alone may not select any repositories, channels, projects, or documents for use. Initial processing can take time, and not every source produces a separate signal or insight.

### Additional connections

Use the additional connection catalog to authorize other services and review the tools Weaver may use. A connection can expose retrieval tools, actions that change data, or both. The connected account's access and the workspace's tool settings determine the available capabilities.

See [Additional connections](/additional-connections) for setup, permissions, and the difference between connecting a service and importing its history.

### Devplan in your own AI assistant

[Devplan MCP](/mcp-integration) works in the other direction: it lets an external AI assistant use Devplan workspace context. You do not need to add a custom connection inside Devplan to connect Claude Code or Codex to Devplan MCP.

## Check connection readiness

1. **Authorize** the intended account or install the required provider app.
2. **Choose scope** where required, such as repositories, channels, projects, or documents.
3. **Check status** for permission errors, incomplete setup, or pending processing.
4. **Verify useful context** by inspecting an analyzed source or asking a focused question about it.

A connected account, selected source, completed analysis, and successful answer are different checks. If information is missing, investigate the relevant step rather than assuming the source is empty.

Once relevant sources have been processed, try [Ask Weaver](/ask-devplan): “What have customers said about onboarding, and which related improvements are already underway?” You can also explore code-derived [Live Docs](/live-docs), review findings in [Radar](/today), or use the context to evaluate [Proposals](/proposals) and plan [Projects](/projects). [Dashboards](/dashboards) help you revisit the questions you track regularly.

## Manage access

Use the integration's management page to update scope or reconnect an account. Some access changes must be made in the source service. Disconnecting prevents future use through that connection, but is not proof that previously processed workspace content has been removed.

[Zoom](/zoom-integration) has separate availability guidance. If a needed provider is not offered, consider uploads or an available additional connection and confirm which workflow it supports.

## Related pages

[Getting Started](/getting-started) · [How Devplan Works](/how-devplan-works) · [Access control](/advanced/access-control)
