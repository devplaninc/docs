---
title: Workspace Settings
slug: /settings/workspace
---

# Workspace Settings

Use workspace settings to manage shared identity, membership, reporting, and API access. Administrative actions require the appropriate workspace permissions.

## General {#general}

Keep the workspace name, website, and other identifying information accurate. The website and product description also inform [workspace context](/knowledge#workspace).

Review destructive actions carefully. Workspace deletion is different from leaving a workspace or disconnecting one source.

## Members {#members}

Invite colleagues using the intended email address and role. Administrators can update roles, remove members, and revoke pending invitations.

Most workspaces use **Admin** and **User** roles. Admins manage membership and shared settings; Users work with workspace content within their assigned permissions. Some workspaces retain [additional roles](/advanced/access-control).

Invitees can respond through their invitation or [account settings](/settings/profile#personal-info).

## Reporting {#daily-digest}

Configure shared daily and weekly reporting, including enabled schedules, delivery timezone, and recipients. The daily report uses Devplan's standard structure; administrators can add instructions for the weekly report. Connected Slack or Microsoft Teams channels can be used for supported delivery.

A generated report may still be waiting for delivery. Check the delivery settings separately. Members control their own email preferences through [profile settings](/settings/profile#preferences).

See [Reports](/reports) for the difference between content, generation, and delivery, and [Dashboards](/dashboards) for per-dashboard schedules.

## API Keys {#api-keys}

Create workspace-scoped keys for clients that use [Devplan MCP](/mcp-integration) with API-key authentication. Copy a key when it is created; its value cannot be retrieved later.

Keep keys in the client's credential storage, not in repository files or chats. Delete a key when it should no longer provide access, and update any client that relied on it.

## Related pages

[Profile settings](/settings/profile) · [Organization settings](/settings/organization) · [Access control](/advanced/access-control)
