---
title: Confluence Integration
slug: /confluence-integration
sidebar_position: 9
---

# Confluence

Connect Confluence and attach spaces or pages so Devplan can read them on demand during signal processing — feeding [Signals](/signals), [Insights](/insights), and [Ask Devplan](/ask-devplan).

---

## How to access

1. Open **Knowledge > Integrations** in the sidebar.
2. Find the **Confluence** card and click **Connect** or **Configure**.

This opens the Confluence manage page.

---

## Connect Confluence

Confluence uses the same Atlassian OAuth flow as Jira.

1. On the Confluence manage page, click **Connect Confluence**.
2. Complete Atlassian OAuth and grant Devplan access.
3. If your Atlassian account has access to multiple sites, Devplan prompts you to **Choose Atlassian site** — select the Confluence site for this workspace.
4. After authorization, the page shows a **Connected** badge.

Install the **Devplan Forge app for Confluence** in your Atlassian site if prompted — this is required for token refresh and ongoing access.

---

## Attach spaces and pages

Once Confluence is connected, attach the specific content Devplan should read.

1. Click **Attach Confluence content** to open the picker.
2. Browse available Confluence spaces. You can attach:
   - **Spaces** — an entire Confluence space
   - **Pages** — expand a space to select individual pages inside it
3. Select one or more items and confirm.

Attached content appears in the **Attached Confluence content** table with the item name and type (space or page). Use the row actions to remove attachments.

Devplan reads attached Confluence content **on demand during signal processing**. Add or remove attachments anytime to change what Devplan considers.

If no spaces appear immediately after connecting, click **Refresh** to sync the space list from your Atlassian site.

---

## Manage the integration

| Action | What it does |
|--------|--------------|
| **Attach Confluence content** | Open the picker to add spaces or pages |
| **Refresh** | Re-sync Confluence spaces and connection metadata |
| **Disconnect Confluence** | Remove the Confluence connection from this workspace |
| Remove attachment | Stop reading a specific space or page |

---

## What Devplan uses Confluence for

Attached Confluence spaces and pages contribute to:

- **Signals** — page updates, comments, and specs surface as evidence
- **Insights** — related signals are synthesized into takeaways
- **Ask Devplan** — Confluence content is available when answering workspace questions
- **Knowledge graph** — Confluence pages link to PRs, tickets, and other sources

Good candidates to attach: product specs, architecture docs, decision logs, customer research, and team runbooks.

---

## Tips

- Attach specific spaces or pages rather than expecting Devplan to read your entire Confluence instance.
- If you already connected Jira, Confluence may share the same Atlassian token — you still need to attach Confluence content separately.
- Use **Refresh** after creating new spaces in Confluence if they do not appear in the picker.

---

## Related pages

- [Jira](/jira-integration) — connect Jira on the same Atlassian site
- [Notion](/notion-integration) — attach Notion pages and databases
- [Core Workflow](/core-workflow) — how document sources feed the pipeline
