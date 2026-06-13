---
title: Workspace API Keys
sidebar_label: API Keys
sidebar_position: 4
---

# Workspace API Keys

Create and manage workspace-scoped API keys for programmatic access, including the [MCP Integration](/guides/integrations/mcp).

---

## How to access

Open **Settings** from your profile menu, then click **API Keys** under **Workspace**.

:::note
This page is only visible when API keys are enabled for your workspace.
:::

---

## Key features

- **Create API key** — generate a new key with a descriptive name
- **One-time display** — the key value is shown only once at creation and cannot be retrieved later
- **Key list** — view existing keys with name and creation date
- **Delete keys** — revoke keys that are no longer needed

---

## Common workflows

### Create an API key

1. Open **Settings > Workspace > API Keys**.
2. Click **Create API key**.
3. Enter a descriptive name (e.g. `Cursor MCP`).
4. Click **Create**.
5. **Copy the key immediately** — it will not be shown again.

### Use an API key with MCP

Follow the [MCP Integration](/guides/integrations/mcp) guide to configure your AI coding assistant with the key.

### Revoke a key

1. Find the key in the list.
2. Open the actions menu and select **Delete**.
3. Confirm deletion. Any integrations using that key will stop working.

:::note
If you lose a key, delete it and create a new one. Keys cannot be recovered.
:::

---

## Related pages

- [MCP Integration](/guides/integrations/mcp) — connect Devplan to AI coding assistants
- [Workspace Members](/settings/workspace-members) — invite members and manage roles
