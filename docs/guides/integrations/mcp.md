---
title: "MCP Integration"
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

5. **Verify the connection** — ask your AI assistant to call the `listWorkspaceUsers` tool. A successful response returns the list of members in your workspace.

---

## Related Documentation

- [CLI Cheat Sheet](/dev/cli-cheat-sheet) — Install the `devplan` CLI and explore available commands
- [Workspace Members](/settings/workspace-members) — invite members and manage roles
- [Core Workflow](/core-workflow) — How Devplan projects, PRDs, and user stories work
- [Jira Integration](/guides/integrations/jira) — Sync Devplan user stories to Jira

---

Questions: [info@devplan.com](mailto:info@devplan.com)
