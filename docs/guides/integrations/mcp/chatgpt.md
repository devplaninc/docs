---
title: ChatGPT desktop and web
slug: /mcp-integration/chatgpt
description: Install the Devplan Plug-in or connect Devplan MCP directly in ChatGPT desktop and web.
---

# Connect Devplan to ChatGPT

Install the Devplan Plug-in for Devplan context, dashboards, and guided product workflows in ChatGPT desktop and web. Use a custom MCP server only when plug-ins are unavailable or you only need Devplan tools.

## Install the Devplan Plug-in

1. Open **Plugins** and choose to add a marketplace.
2. Enter `https://github.com/devplaninc/devplan-plugins`.
3. Open the **Devplan** marketplace, open **Devplan**, and select **+** to install it.
4. Start a new chat, say **“Set up Devplan,”** and sign in when prompted.

After installation, ask for the outcome directly or type `@` and choose **Devplan**. Start a new chat after installing or updating the plug-in so its skills and tools are available.

### Business, Enterprise, and Edu

Workspace admins can import the marketplace for their organization:

1. Open **Admin → Plugins** and select **Add → Import marketplace**.
2. Enter `https://github.com/devplaninc/devplan-plugins` as the source. Leave the path empty and use the repository's default branch.
3. Import the marketplace, review the result, and set Devplan's installation policy to **Available** or **Installed** for the appropriate roles.

ChatGPT syncs imported GitHub marketplaces daily. Use **Sync now** from the marketplace settings when you need an update immediately.

## Connect Devplan MCP directly

1. Open **Plugins**, select **+**, then choose **Add custom MCP server**.
2. Name the connection `Devplan` and enter `https://app.devplan.com/api/v1/mcp` as the server URL.
3. Choose OAuth authentication, review the connection warning, and continue.
4. Select **Create as a plugin**, install the resulting personal plug-in, and sign in to Devplan.
5. Start a new chat and type `@` to select the Devplan connection when you want to invoke it explicitly.

This direct connection provides Devplan tools, but it does not install the Devplan Plug-in's guided setup, dashboards, planning, specification, or reporting skills.

## Verify the connection

Start a new chat and ask:

> Use Devplan to list projects in this workspace, including their names and status.

If ChatGPT does not use Devplan, type `@`, select Devplan explicitly, and confirm that a tool call succeeds.

## Related documentation

[Devplan Plug-in overview](/mcp-integration) · [Claude](/mcp-integration/claude) · [Claude Code via terminal](/mcp-integration/claude-code) · [Codex via terminal](/mcp-integration/codex)
