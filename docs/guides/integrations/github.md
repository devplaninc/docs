---
title: GitHub Integration
sidebar_position: 2
---

# GitHub

Connect GitHub so Devplan can analyze your repositories, bootstrap your [feature catalogue](/platform/product), and ground project planning in your actual codebase.

---

## How to access

1. Open **Knowledge > Integrations** in the sidebar.
2. Find the **GitHub** card and click **Connect** (or **Configure** if already connected).

This opens the **GitHub repositories** manage page.

---

## Connect GitHub

1. Click **Connect GitHub** on the manage page (or **Connect** from the integrations grid).
2. Complete the GitHub App installation flow — choose which GitHub organization or account to install on and which repositories to grant access to.
3. After installation, you return to the GitHub manage page in Devplan.

If your organization requires admin approval for new GitHub App installations, you may see a pending banner until an admin approves the install. Refresh the page after approval.

---

## Manage repository access

Once connected, the manage page shows metrics for connected repositories, enabled-for-analysis count, and disabled count.

### Repository access table

Each synced repository appears in the **Repository access** table. Use the search box to filter by name or description.

Per repository you can:

| Action | What it does |
|--------|--------------|
| **Analyze** checkbox | When checked, Devplan includes the repo in analysis, catalogue bootstrap, and catalogue updates. Uncheck to opt out without disconnecting GitHub. |
| **Rescan** | Trigger a focused re-analysis of that repository. Useful after large changes. Rescans are limited per workspace. |
| **View analysis** | Open the repository analysis view with tech stack, structure, and component details Devplan extracted. |
| **Open** | Open the repository on GitHub. |

Repositories with **Analyze** unchecked show as **Disabled** and are excluded from catalogue jobs.

### Refresh and disconnect

- **Refresh** — sync the latest repository list from GitHub after you add or remove repos in the GitHub App installation settings.
- **Disconnect GitHub** — remove the GitHub connection from this workspace.

---

## What happens after you enable repos

When at least one repository has **Analyze** enabled:

1. **Repository analysis** — Devplan reads code structure, tech stack, architecture patterns, component conventions, data models, API surface, and testing patterns.
2. **Catalogue bootstrap** — a background job maps your codebase into the structured [Product](/platform/product) catalogue.
3. **Catalogue updates** — periodic jobs keep the catalogue and [Updates](/platform/updates) feed current as your code evolves.
4. **Signals** — merged PRs, commits, and code-change activity contribute to [Signals](/platform/signals) over time.

First-time analysis typically takes **30 minutes or longer**, depending on repository size. The [Product](/platform/product) page may be sparse until bootstrap completes.

---

## Tips

- Enable **Analyze** only on repositories that represent your product — skip archived repos, forks, or internal tooling repos you do not want in the catalogue.
- Connect GitHub early during onboarding so catalogue bootstrap can run while you configure other integrations.
- Use **Refresh** after changing which repos the GitHub App can access on GitHub's side.

---

## Related pages

- [Bitbucket](/guides/integrations/bitbucket) — same repository analysis flow for Bitbucket
- [Core Workflow](/core-workflow) — catalogue bootstrap and processing timelines
- [Product](/platform/product) — browse the auto-generated feature catalogue
