---
title: Claude desktop and web
slug: /mcp-integration/claude
description: Install the Devplan Plug-in or connect Devplan MCP directly in Claude desktop and web.
---

# Connect Devplan to Claude

Install the Devplan Plug-in for Devplan context, dashboards, and guided product workflows in Claude desktop and web. Use a direct MCP connector only when plug-ins are unavailable or you only need Devplan tools.

## Install the Devplan Plug-in

1. Open **Customize → Plugins**.
2. Select **Add → Add marketplace → Add from a repository**.
3. Enter `https://github.com/devplaninc/devplan-plugins` and select **Sync**.
4. Open **Devplan** in the marketplace and select **Add**.
5. Start a new chat and say **“Set up Devplan.”**
6. When prompted to connect, open **Plugins → Devplan → Connect**, keep the detected connector settings, and sign in to Devplan.

The plug-in is saved to your Claude account and is also available in Cowork and Claude Code when you use the same account.

### Team and Enterprise

Organization owners can add the marketplace in the organization's plug-in settings and make Devplan available to the appropriate members. Each user signs in with their own Devplan account unless the organization configures another supported connection model.

## Connect Devplan MCP directly

1. Open **Customize → Connectors**.
2. Select **Add → Custom → Web**.
3. Name the connector `Devplan` and enter `https://app.devplan.com/api/v1/mcp`.
4. Keep the detected OAuth settings and choose **Sign in now**.
5. Add the connector, select the intended Devplan workspace, and authorize access.

The remote connector is saved to your Claude account and can be available across Claude surfaces that use the same account. It provides Devplan tools, but it does not install the plug-in's guided setup, dashboards, planning, specification, or reporting skills.

## Verify the connection

Start a new chat and ask:

> Use Devplan to list projects in this workspace, including their names and status.

If Claude does not use Devplan, select the Devplan plug-in or connector explicitly and confirm that its tools are enabled.

## Related documentation

[Devplan Plug-in overview](/mcp-integration) · [ChatGPT](/mcp-integration/chatgpt) · [Claude Code via terminal](/mcp-integration/claude-code) · [Codex via terminal](/mcp-integration/codex)
