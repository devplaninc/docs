---
title: Devplan MCP
slug: /mcp-integration
description: Give your AI coding assistant Devplan context about customer needs, product decisions, and plans.
---

# Devplan MCP

Connect Devplan to an MCP-compatible AI assistant so it can use workspace context during research, planning, and implementation. This helps the assistant investigate the reasons and requirements behind a change without you rebuilding that context in every prompt. MCP is the Model Context Protocol, a standard for connecting AI clients to tools and data.

This connection lets **your AI assistant use Devplan**. [Additional connections inside Devplan](/additional-connections) let **Weaver use other services**. They are separate setup paths.

## Prerequisites

You need a Devplan account with access to the intended workspace and an AI client that supports remote HTTP MCP servers and the chosen authentication method.

## Quick start

Use the production server URL:

```text
https://app.devplan.com/api/v1/mcp
```

### Claude Code

```bash
claude mcp add --transport http devplan-remote https://app.devplan.com/api/v1/mcp
```

Complete the client's Devplan authorization flow. On the Devplan authorization page, select the intended workspace and choose **Authorize**.

### Codex

```bash
codex mcp add devplan-remote --url https://app.devplan.com/api/v1/mcp
codex mcp login devplan-remote
```

In the browser, select the intended Devplan workspace and choose **Authorize**. Other clients can add the same URL through their MCP or connector settings; configuration formats vary by client.

## Verify the connection

Ask your assistant:

> Use Devplan to list projects in this workspace, including their names and status.

Confirm that the assistant actually used Devplan tools and returned information from the expected workspace. If it cannot see the tools, refresh the connection or restart the client as needed.

## Improve agent behavior

Add concise guidance to your existing agent instructions, such as `AGENTS.md` or `CLAUDE.md`, while preserving the repository's other rules:

```text
Use Devplan when a task depends on product context, customer feedback,
project status, internal decisions, or evidence across connected sources.
Check the tools available in this session and retrieve relevant evidence.
Use local code to verify implementation details. Distinguish planned,
implemented, deployed, and enabled behavior. Cite supporting sources
and state material uncertainty. For questions about how Devplan itself
works, consult https://docs.devplan.com/overview and the relevant guide.
```

This guidance does not install or authorize a connection. Verify the setup separately.

## Start using Devplan from your AI client

Try focused requests that identify the topic and desired outcome:

- “Summarize recent customer feedback about onboarding and cite the evidence.”
- “Find projects related to billing and explain what remains unfinished.”
- “Before editing this feature, check for relevant product decisions and customer requests.”
- “Explain what this product capability does, then compare it with the local implementation.”

The client chooses how to use the tools. Review its conclusions and any proposed changes before relying on them.

## Common Devplan tools

Your client's live tool descriptions are the authoritative reference for names, inputs, and availability. Common capabilities include:

| Capability | Example tools |
|---|---|
| Find relevant workspace context | `search_entities` |
| Follow stored relationships and activity | `query_workspace_graph` |
| Read selected records and supporting sources | `fetch_internal_entities_by_ids`, `fetch_external_entities` |
| Browse projects and product knowledge | `list_workspace_projects`, `list_product_feature_catalog` |
| Read connected documents | `fetch_external_documents` |

Search finds relevant content; graph queries follow recorded relationships. Fetch tools retrieve the details needed to inspect a result. The graph does not expose every field visible in the app, and a missing result is not proof of absence.

Some tools can start planning or update content, depending on workspace configuration. Additional connected services may expose other tools. Do not assume every tool is read-only or that every client sees the same tool set.

## Manual setup with an API key

If your client cannot use OAuth, create a workspace API key under **Settings → Workspace → API Keys** with the appropriate permissions. Copy it when created; the value cannot be retrieved later.

Configure the remote HTTP server with an authorization header. For a client that supports this JSON format:

```json
{
  "mcpServers": {
    "devplan": {
      "type": "http",
      "url": "https://app.devplan.com/api/v1/mcp",
      "headers": {
        "Authorization": "Bearer <your-api-key>"
      }
    }
  }
}
```

Use your client's secret storage or environment-variable support where available. Do not commit the key to a repository or paste it into a conversation. Delete a lost or exposed key and create a replacement, then verify the connection again.

## Troubleshooting

| Problem | What to check |
|---|---|
| No Devplan tools appear | Server URL, client MCP support, and whether the client needs a connection refresh or restart |
| Authentication fails | Complete authorization again, or check the configured API key and workspace access |
| Results refer to the wrong workspace | Reauthorize for the intended workspace or use its workspace-scoped key |
| Results are thin | Relevant source access, selection, processing status, and the scope of the question |
| The assistant answers without using Devplan | Ask it to use Devplan explicitly and inspect whether a tool call succeeded |
| A capability is missing | Check live tool descriptions and workspace configuration rather than relying on an old tool list |

## Related Documentation

[Ask Weaver](/ask-devplan) · [Developer workflow](/spec-driven-development) · [CLI Cheat Sheet](/cli-cheat-sheet) · [Workspace Members](/settings/workspace#members)
