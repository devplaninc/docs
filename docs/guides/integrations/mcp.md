---
title: "MCP Integration"
slug: /mcp-integration
sidebar_position: 12
---

# MCP Integration

Devplan exposes a [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server that lets AI coding assistants — such as Claude Code, Codex, or Cursor — interact with your Devplan workspace directly from your development environment. Use MCP when you want your AI client to answer questions from Devplan context, inspect project status, search workspace evidence, or plan work without leaving your editor.

---

## Prerequisites

- A Devplan workspace
- A workspace member account
- An MCP-compatible AI client (e.g. Claude Code, Cursor, Codex)

---

## Quick start

### Claude Code

```bash
claude mcp add --transport http devplan-remote https://app.devplan.com/api/v1/mcp
```

### Codex
```bash
codex mcp add devplan-remote --url https://app.devplan.com/api/v1/mcp
```

After setup, restart your AI client if it does not immediately discover the Devplan tools.

---

## Verify the connection

Ask your AI assistant:

```text
Use Devplan to list the product feature catalog.
```

A successful connection should call the `list_product_feature_catalog` tool and return product areas with feature IDs and names. If the assistant cannot see Devplan tools, restart the client and confirm the server URL is `https://app.devplan.com/api/v1/mcp`.

---

## Improve agent behavior

After the connection verifies, paste this prompt into Claude Code, Codex, or another coding agent from the root of the repository where you want to use Devplan. It updates your agent instructions so the assistant knows when to check Devplan instead of relying only on local code or general model knowledge.

```text
Please update this repo's agent instructions so this coding agent knows when to use Devplan.

1. Look for existing instruction files: CLAUDE.md and AGENTS.md.
2. Preserve all existing content. Do not overwrite or remove existing instructions.
3. If CLAUDE.md exists, add or update the section below in CLAUDE.md.
4. If AGENTS.md exists, add or update the same section in AGENTS.md.
5. If neither file exists, create the instruction file for this client: CLAUDE.md for Claude Code, AGENTS.md for Codex. If you are unsure, create AGENTS.md.
6. If you can verify that Devplan tools are available in this agent session, mention that. If you cannot verify that, do not treat it as a blocker; still make the file update and say that Devplan availability should be confirmed separately.

Add this section:

## Devplan Context

Use Devplan when the task depends on our product, customers, roadmap, sales or support feedback, user research, company terminology, internal decisions, or current project status.

Before answering those questions, check the available Devplan tools for relevant context and evidence. Do not rely only on the local repo or general model knowledge when the question is related to product, customers, roadmap, feedback, research, company terminology, internal decisions, or project status.

Use Devplan for questions like:
- What does an internal product term mean?
- Draft a customer email using what we know about this account.
- Summarize recent customer feedback about a feature.
- Explain the current status of a project, roadmap item, customer request, or product decision.
- Answer a product question where the answer may depend on Slack, meetings, tickets, docs, customer conversations, or recent team decisions.

Do not use Devplan for generic coding tasks where the local repository has enough context.

After making the update, summarize exactly which file(s) changed and show me the final Devplan Context section.
```

This prompt does not install Devplan by itself. It teaches your coding agent when to use the Devplan tools you connected above.

---

## Start using Devplan from your AI client

Once MCP is connected, ask your AI client to use Devplan before it answers product, customer, roadmap, support, research, ticket, or project-status questions.

Useful first prompts:

```text
Use Devplan to summarize what we know about the onboarding experience and cite the evidence.
```

```text
Use Devplan to find active projects related to billing. Include status, owner, and any linked planning docs.
```

```text
Use Devplan to search recent customer feedback about Slack integration. What are the repeated themes?
```

```text
Before editing this repo, use Devplan to check whether there are product decisions, customer requests, or open projects related to this feature.
```

Devplan MCP is most useful when the answer may depend on connected sources such as Slack, calls, docs, tickets, code research, insights, or the product feature catalog. For generic coding tasks where the local repository has enough context, your AI client can work normally without querying Devplan.

---

## Common Devplan tools

Your AI client chooses tools automatically, but these names help when you want to verify or steer it:

| Tool | Use it for |
|------|------------|
| `invokeKnowledgeAgent` | Broad workspace questions that require reasoning across multiple Devplan sources |
| `search_devplan_entities` | Focused semantic search across signals, insights, changes, call notes, projects, feature catalog, repo descriptions, or research |
| `list_product_feature_catalog` | Product areas and feature IDs/names |
| `list_workspace_projects` | Project summaries, status, owners, assignees, and linked planning docs |
| `list_repository_descriptions` | Repo summaries from Devplan code research |
| `list_code_research` | Code research artifacts available in the workspace |
| `start_feature_planning` | Start a feature planning run from your AI client |
| `check_feature_planning_status` | Check the status of a feature planning run |

---

## Manual setup with an API key

Use this path if OAuth is not possible in your environment.

1. **Open the API Keys page** — navigate to **Settings → Workspace → API Keys** in the Devplan app.

2. **Create an API key** — click **Create API key**, enter a descriptive name (e.g. `Open Code`), then click **Create**.

3. **Copy the key immediately.**

   The API key value is displayed **once** at creation and cannot be retrieved afterward. If you lose it, delete the key and create a new one.

4. **Configure your MCP client** — add the Devplan server to your MCP client configuration using the HTTP transport. Example for a JSON-based config file:

   ```json
   {
     "mcpServers": {
       "devplan": {
         "type": "http",
         "url": "https://app.devplan.com/api/v1/mcp",
         "headers": {
           "Authorization": "Bearer dpsk-<your-api-key>"
         }
       }
     }
   }
   ```

   Replace `dpsk-<your-api-key>` with the key you copied in step 3.

5. **Verify the connection** — ask your AI assistant to list the product feature catalog. A successful response calls `list_product_feature_catalog` and returns the product areas and features available in your workspace.

---

## Troubleshooting

- **No Devplan tools appear:** restart your AI client, then re-run the MCP setup command.
- **Authentication fails:** sign in again through your client, or use the API key setup above if OAuth is blocked.
- **Results look thin:** connect and configure more sources in **Knowledge > Integrations**, then give background jobs time to ingest data.
- **The assistant answers without Devplan:** ask it explicitly to "use Devplan" or add the agent-instructions section above to your repo.

---

## Related Documentation

- [CLI Cheat Sheet](/cli-cheat-sheet) — Install the `devplan` CLI and explore available commands
- [Workspace Members](/settings/workspace#members) — invite members and manage roles
- [Ask Devplan](/ask-devplan) — ask workspace questions in Devplan, Slack, or MCP-enabled tools
- [Jira Integration](/jira-integration) — Sync Devplan user stories to Jira

---

Questions: [info@devplan.com](mailto:info@devplan.com)
