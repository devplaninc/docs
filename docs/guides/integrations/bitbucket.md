---
title: Bitbucket Integration
slug: /bitbucket-integration
sidebar_position: 3
---

# Bitbucket

Connect Bitbucket so Devplan can analyze your repositories, bootstrap your [feature catalogue](/product), and ground project planning in your actual codebase.

---

## How to access

1. Open **Knowledge > Integrations** in the sidebar.
2. Find the **Bitbucket** card and click **Connect** (or **Configure** if already connected).

This opens the **Bitbucket repositories** manage page.

---

## Connect Bitbucket

1. Click **Connect Bitbucket** on the manage page (or **Connect** from the integrations grid).
2. Complete the Bitbucket OAuth flow and grant Devplan access to your workspaces.
3. After authorization, you return to the Bitbucket manage page with your synced repositories.

---

## Manage repository access

Once connected, the manage page shows metrics for connected repositories, enabled-for-analysis count, and disabled count.

### Connected workspaces

If you have multiple Bitbucket workspaces connected, a **Connected workspaces** card lists each workspace. You can disconnect individual workspaces to remove their repositories from Devplan without disconnecting Bitbucket entirely.

### Repository access table

Each synced repository appears in the **Repository access** table. Use the search box to filter by name or description.

Per repository you can:

| Action | What it does |
|--------|--------------|
| **Analyze** checkbox | When checked, Devplan includes the repo in analysis, catalogue bootstrap, and catalogue updates. Uncheck to opt out. |
| **Rescan** | Trigger a focused re-analysis of that repository. Rescans are limited per workspace. |
| **View analysis** | Open the repository analysis view with tech stack, structure, and component details. |
| **Open** | Open the repository on Bitbucket. |

Repositories with **Analyze** unchecked show as **Disabled** and are excluded from catalogue jobs.

### Refresh and disconnect

- **Refresh** — sync the latest repository list after workspace or permission changes on Bitbucket.
- **Disconnect Bitbucket** — remove the Bitbucket connection from this workspace.

---

## What happens after you enable repos

When at least one repository has **Analyze** enabled:

1. **Repository analysis** — Devplan reads code structure, tech stack, architecture patterns, component conventions, data models, API surface, and testing patterns.
2. **Catalogue bootstrap** — a background job maps your codebase into the structured [Product](/product) catalogue.
3. **Catalogue updates** — periodic jobs keep the catalogue and [Updates](/updates) feed current.
4. **Signals** — merged PRs, commits, and code-change activity contribute to [Signals](/signals) over time.

First-time analysis typically takes **30 minutes or longer**, depending on repository size.

---

## Tips

- Enable **Analyze** only on repositories that represent your product.
- If repositories are missing, use **Refresh** or reconnect the Bitbucket workspace that owns them.
- You can connect both GitHub and Bitbucket in the same workspace if your code spans providers.

---

## Related pages

- [GitHub](/github-integration) — same repository analysis flow for GitHub
- [Core Workflow](/core-workflow) — catalogue bootstrap and processing timelines
- [Product](/product) — browse the auto-generated feature catalogue
