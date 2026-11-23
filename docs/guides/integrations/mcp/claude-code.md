---
title: Claude Code
slug: /mcp-integration/claude-code
description: Install the Devplan Plug-in or connect Devplan MCP directly in Claude Code.
---

# Connect Devplan to Claude Code

Install the Devplan Plug-in to give Claude Code the product decisions, customer demand, project context, and recent changes behind the code you are editing. Terminal setup focuses on the current repository. Dashboards are generated on request as local HTML files and are not scheduled.

## Install the Devplan Plug-in

Install from your shell:

```bash
claude plugin install devplan --marketplace https://github.com/devplaninc/devplan-plugins
```

Or run this inside a Claude Code session:

```text
/plugin install devplan --marketplace https://github.com/devplaninc/devplan-plugins
```

Start a new session and say **“Set up Devplan.”** Open the sign-in link Claude Code displays. If no sign-in link appears, run `/mcp`, select `plugin:devplan:devplan`, and authenticate.

To update or remove the plug-in:

```bash
claude plugin update devplan@devplan
claude plugin uninstall devplan@devplan
```

## Connect Devplan MCP directly

Use this option when you only need Devplan tools and do not want the plug-in's guided workflows:

```bash
claude mcp add --transport http devplan https://app.devplan.com/api/v1/mcp
```

Start Claude Code, run `/mcp`, select `devplan`, and complete the Devplan sign-in. Use `claude mcp list` to verify the saved connection.

If you later install the plug-in, remove the direct server so Claude Code does not show two Devplan connections.

## Add product-context guidance

The plug-in already includes product-context instructions. For a direct MCP connection, add this guidance to your existing `CLAUDE.md` while preserving its other rules:

```text
Use Devplan when a task depends on product context, customer feedback,
project status, internal decisions, or evidence across connected sources.
Use local code to verify implementation details. Distinguish planned,
implemented, deployed, and enabled behavior. Cite supporting sources
and state material uncertainty.
```

## Verify the connection

Run `/mcp` to confirm that Devplan is connected, then ask:

> Before editing this repository, use Devplan to find relevant product decisions, customer requests, and active projects.

## Related documentation

[Devplan Plug-in overview](/mcp-integration) · [Claude](/mcp-integration/claude) · [ChatGPT](/mcp-integration/chatgpt) · [Codex](/mcp-integration/codex)
