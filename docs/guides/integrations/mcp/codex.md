---
title: Codex via terminal
slug: /mcp-integration/codex
description: Install the Devplan Plug-in or connect Devplan MCP directly in Codex.
---

# Connect Devplan to Codex via terminal

Install the Devplan Plug-in to give Codex the product decisions, customer demand, project context, and recent changes behind the code you are editing. Terminal setup focuses on the current repository. Dashboards are generated on request as local HTML files in a `devplan/` folder and are not scheduled. Add `devplan/` to `.gitignore` if you do not want to commit generated files.

## Install the Devplan Plug-in

Add the marketplace and install the plug-in:

```bash
codex plugin marketplace add https://github.com/devplaninc/devplan-plugins
codex plugin add devplan@devplan
```

Until Devplan is available in OpenAI's public plug-in directory, also register its MCP server and complete the one-time sign-in:

```bash
codex mcp add devplan --url https://app.devplan.com/api/v1/mcp
codex mcp login devplan
```

Start a new Codex session and say **“Set up Devplan.”** Enter `/plugins` to inspect installed plug-ins and `/mcp` to inspect the connection.

To update or remove the plug-in:

```bash
codex plugin marketplace upgrade devplan
codex plugin remove devplan@devplan
codex mcp remove devplan
```

## Connect Devplan MCP directly

Use this option without installing the marketplace when you only need Devplan tools:

```bash
codex mcp add devplan --url https://app.devplan.com/api/v1/mcp
codex mcp login devplan
```

Use `codex mcp list` or `/mcp` in a Codex session to verify the connection.

If you later install the plug-in, keep only one Devplan MCP configuration so Codex does not show two Devplan connections.

## Add product-context guidance

The plug-in already includes product-context instructions. For a direct MCP connection, add this guidance to your existing `AGENTS.md` while preserving its other rules:

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

[Devplan Plug-in overview](/mcp-integration) · [Claude](/mcp-integration/claude) · [ChatGPT](/mcp-integration/chatgpt) · [Claude Code via terminal](/mcp-integration/claude-code)
