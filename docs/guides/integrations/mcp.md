---
title: Devplan plugin and MCP
slug: /mcp-integration
description: Use Devplan in Claude, ChatGPT, Claude Code, and Codex through the Devplan plugin or a direct MCP connection.
---

# Use Devplan with your AI assistant

Bring Devplan's Connected Product Intelligence into Claude, ChatGPT, Claude Code, or Codex. Your assistant can use the context Devplan has already connected across code, documentation, conversations, meeting notes, and project systems to surface risks, status updates, project insights, and evidence-backed answers.

The **Devplan plugin is the recommended setup**. It includes the Devplan MCP connection plus guided workflows for setup, dashboards, planning, specifications, customer demand, and engineering analytics. If your client or plan cannot install plugins, connect the Devplan MCP server directly as a secondary option.

| Setup | What you get | Choose it when |
|---|---|---|
| Devplan plugin | Devplan workspace tools, guided setup, product-context skills, dashboards, planning, and specification workflows | Your client supports plugins |
| Direct MCP connection | Devplan workspace tools and context | Plugins are unavailable or you want only the connection |

These options let **your AI assistant use Devplan**. [Additional connections inside Devplan](/additional-connections) let **Weaver use other services**. They are separate setup paths.

## Before you start

For the plugin, you need a Devplan account with a code repository connected. If you do not have an account yet, the setup workflow helps you create one. For a direct MCP connection, you need a Devplan account with access to the workspace you want to use.

Use these values throughout this guide:

- Plugin marketplace: `https://github.com/devplaninc/devplan-plugins`
- MCP server: `https://app.devplan.com/api/v1/mcp`

## Install the Devplan plugin

After installation, start a new chat or terminal session and say:

> Set up Devplan

The setup workflow connects your account, checks your workspace, confirms company context, and introduces the available workflows. In Claude and ChatGPT, it can also build Devplan dashboards and schedule supported refreshes. Terminal setup stays focused on the repository and code in front of you.

### Claude desktop and web

1. Open **Customize → Plugins**.
2. Select **Add → Add marketplace → Add from a repository**.
3. Enter `https://github.com/devplaninc/devplan-plugins` and select **Sync**.
4. Open **Devplan** in the marketplace and select **Add**.
5. Start a new chat and say **“Set up Devplan.”**
6. When prompted to connect, open **Plugins → Devplan → Connect**, keep the detected connector settings, and sign in to Devplan.

The plugin is saved to your Claude account and is also available in Cowork and Claude Code when you use the same account.

### ChatGPT desktop and web

1. Open **Plugins** and choose to add a marketplace.
2. Enter `https://github.com/devplaninc/devplan-plugins`.
3. Open the **Devplan** marketplace, open **Devplan**, and select **+** to install it.
4. Start a new chat, say **“Set up Devplan,”** and sign in when prompted.

After installation, ask for the outcome directly or type `@` and choose **Devplan**. If your account does not offer marketplace installation, ask a workspace admin to import the marketplace or use a [direct MCP connection](#connect-devplan-mcp-directly).

#### ChatGPT workspace admins

Business, Enterprise, and Edu workspace admins can import the marketplace for their organization:

1. Open **Admin → Plugins** and select **Add → Import marketplace**.
2. Enter `https://github.com/devplaninc/devplan-plugins` as the source. Leave the path empty and use the repository's default branch.
3. Import the marketplace, review the result, and set Devplan's installation policy to **Available** or **Installed** for the appropriate roles.

ChatGPT syncs imported GitHub marketplaces daily. Use **Sync now** from the marketplace settings when you need an update immediately.

### Claude Code

Install from your shell:

```bash
claude plugin install devplan --marketplace https://github.com/devplaninc/devplan-plugins
```

Or run this inside a Claude Code session:

```text
/plugin install devplan --marketplace https://github.com/devplaninc/devplan-plugins
```

Then start a new session and say **“Set up Devplan.”** Open the sign-in link Claude Code displays. If no sign-in link appears, run `/mcp`, select `plugin:devplan:devplan`, and authenticate.

To update or remove the plugin:

```bash
claude plugin update devplan@devplan
claude plugin uninstall devplan@devplan
```

### Codex terminal

Add the marketplace and install the plugin:

```bash
codex plugin marketplace add https://github.com/devplaninc/devplan-plugins
codex plugin add devplan@devplan
```

Until Devplan is available in OpenAI's public plugin directory, also register its MCP server and complete the one-time sign-in:

```bash
codex mcp add devplan --url https://app.devplan.com/api/v1/mcp
codex mcp login devplan
```

Start a new Codex session and say **“Set up Devplan.”** You can also enter `/plugins` to inspect installed plugins and `/mcp` to inspect the connection.

To update or remove the plugin:

```bash
codex plugin marketplace upgrade devplan
codex plugin remove devplan@devplan
codex mcp remove devplan
```

## Connect Devplan MCP directly

Use a direct connection when plugins are unavailable or you only need Devplan's MCP tools. This gives the assistant access to your Devplan workspace, but it does not install Devplan's guided setup, dashboards, planning, specification, or reporting skills.

If you later install the plugin, remove the separate connection so your client does not show two Devplan servers.

### Claude desktop and web

1. Open **Customize → Connectors**.
2. Select **Add → Custom → Web**.
3. Name the connector `Devplan` and enter `https://app.devplan.com/api/v1/mcp`.
4. Keep the detected OAuth settings and choose **Sign in now**.
5. Add the connector, select the intended Devplan workspace, and authorize access.

The remote connector is saved to your Claude account and can be available across Claude surfaces that use the same account.

### ChatGPT desktop and web

1. Open **Plugins**, select **+**, then choose **Add custom MCP server**.
2. Name the connection `Devplan` and enter `https://app.devplan.com/api/v1/mcp` as the server URL.
3. Choose OAuth authentication, review the connection warning, and continue.
4. Select **Create as a plugin**, install the resulting personal plugin, and sign in to Devplan.
5. Start a new chat and type `@` to select the Devplan connection when you want to invoke it explicitly.

### Claude Code

```bash
claude mcp add --transport http devplan https://app.devplan.com/api/v1/mcp
```

Start Claude Code, run `/mcp`, select `devplan`, and complete the Devplan sign-in. Use `claude mcp list` to verify the saved connection.

### Codex terminal

```bash
codex mcp add devplan --url https://app.devplan.com/api/v1/mcp
codex mcp login devplan
```

Use `codex mcp list` or `/mcp` in a Codex session to verify the connection.

## Verify the connection

Ask your assistant:

> Use Devplan to list projects in this workspace, including their names and status.

Confirm that the assistant used Devplan tools and returned information from the intended workspace. A successful sign-in, visible tool list, and useful answer are separate checks.

## Start using Devplan

Try requests that identify both the topic and the outcome you need:

- “What should I know before changing billing?”
- “Summarize recent customer feedback about onboarding and cite the evidence.”
- “Find projects related to exports and explain what remains unfinished.”
- “Before editing this feature, check for relevant product decisions and customer requests.”
- “Explain what this capability does, then compare it with the local implementation.”

With the plugin installed, you can also ask:

- “Run my Daily Radar.”
- “How are our projects going?”
- “What are customers asking for?”
- “Plan the next six weeks.”
- “Write a spec for SSO.”

## Improve agent behavior

The plugin already includes product-context guidance. For a direct MCP connection, add concise instructions to your existing `AGENTS.md` or `CLAUDE.md` while preserving the repository's other rules:

```text
Use Devplan when a task depends on product context, customer feedback,
project status, internal decisions, or evidence across connected sources.
Check the tools available in this session and retrieve relevant evidence.
Use local code to verify implementation details. Distinguish planned,
implemented, deployed, and enabled behavior. Cite supporting sources
and state material uncertainty. For questions about how Devplan itself
works, consult https://docs.devplan.com/overview and the relevant guide.
```

These instructions do not install or authorize a connection. Verify the setup separately.

## Common Devplan tools

Your client's live tool descriptions are the authoritative reference for names, inputs, and availability. Common capabilities include:

| Capability | Example tools |
|---|---|
| Find relevant workspace context | `search_entities` |
| Follow stored relationships and activity | `query_workspace_graph` |
| Read selected records and supporting sources | `fetch_internal_entities_by_ids`, `fetch_external_entities` |
| Browse projects and product knowledge | `list_workspace_projects`, `list_product_feature_catalog` |
| Read connected documents | `fetch_external_documents` |

Search finds relevant content; graph queries follow recorded relationships. Fetch tools retrieve the details needed to inspect a result. A missing result is not proof that evidence does not exist.

Some tools can start planning or update Devplan content, depending on workspace configuration. Additional connected services may expose other tools. Check the tool and requested action before approving a change.

## Use an API key when OAuth is unavailable

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

Use your client's secret storage or environment-variable support where available. Do not commit the key to a repository or paste it into a conversation. Delete a lost or exposed key and create a replacement.

## Troubleshooting

| Problem | What to check |
|---|---|
| Plugin is installed but its skills are missing | Start a new chat or terminal session; confirm the plugin is enabled and up to date |
| No Devplan tools appear | Confirm the plugin's connection or direct MCP server is enabled, then refresh or restart the client |
| Authentication fails | Reconnect and complete authorization, or check the API key and workspace access |
| Two Devplan servers appear | Remove the separate direct MCP connection after installing the plugin |
| Results refer to the wrong workspace | Reauthorize and select the intended workspace, or use its workspace-scoped key |
| Results are thin | Check relevant source access, selection, processing status, and the scope of the question |
| The assistant answers without using Devplan | Select Devplan explicitly and confirm a tool call succeeded |
| A capability is missing | Check live tool descriptions and workspace configuration rather than relying on an old tool list |

## Related documentation

[Devplan plugin source](https://github.com/devplaninc/devplan-plugins) · [Ask Weaver](/ask-devplan) · [Developer workflow](/spec-driven-development) · [CLI Cheat Sheet](/cli-cheat-sheet) · [Workspace Members](/settings/workspace#members)
