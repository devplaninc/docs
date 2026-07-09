---
title: "MCP Integration"
slug: /mcp-integration
sidebar_position: 12
---

# MCP Integration

Devplan exposes a [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server that lets AI coding assistants — such as Claude Code or Cursor — interact with your Devplan workspace directly from your development environment. With the MCP integration you can create feature projects, track initialization status, and query workspace data without leaving your editor.

---

## Prerequisites

- A Devplan workspace
- A workspace member account
- An MCP-compatible AI client (e.g. Claude Code, Cursor, Codex)

---

## Quick Start

### Claude Code:
```bash
claude mcp add --transport http devplan-remote https://app.devplan.com/api/v1/mcp
```

### Codex
```bash
codex mcp add devplan-remote --url https://app.devplan.com/api/v1/mcp
```

### Manual Setup with an API Key (if OAuth is not possible in the environment)
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

5. **Verify the connection** — ask your AI assistant to call the `listProductFeatureCatalog` tool. A successful response returns the product areas and features available in your workspace.

6. **Improve agent behavior** — after the connection verifies, paste this prompt into Claude Code or Codex from the root of the repository where you want to use Devplan. It updates your agent instructions so the assistant knows when to check Devplan instead of relying only on local code or general model knowledge.

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

## Related Documentation

- [CLI Cheat Sheet](/cli-cheat-sheet) — Install the `devplan` CLI and explore available commands
- [Workspace Members](/settings/workspace#members) — invite members and manage roles
- [Spec Driven Development](/spec-driven-development) — PRDs, user stories, and implementation workflow
- [Jira Integration](/jira-integration) — Sync Devplan user stories to Jira

---

Questions: [info@devplan.com](mailto:info@devplan.com)
