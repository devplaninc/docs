---
title: Linear Integration
sidebar_position: 5
---

# Linear

Connect Linear so Devplan can ingest ticket and team data for [Signals](/platform/signals) and [Insights](/platform/insights), and export planned work from Devplan projects into Linear.

---

## How to access

1. Open **Knowledge > Integrations** in the sidebar.
2. Find the **Linear** card and click **Connect** (or **Configure** if already connected).

This opens the **Linear integration** manage page.

---

## Connect Linear

1. Click **Connect Linear** on the manage page (or **Connect** from the integrations grid).
2. Complete the Linear OAuth flow and authorize Devplan for your workspace.
3. After authorization, Devplan syncs your Linear organization and teams.

---

## Manage the integration

Once connected, the manage page shows:

| Metric | Description |
|--------|-------------|
| **Connected organization** | The Linear workspace Devplan is linked to |
| **Synced teams** | Teams available for export and signals processing |
| **Status** | Connection health |

### Linear teams

The **Linear teams** section lists all synced teams (read-only). These teams are available when you export a Devplan project to Linear.

Unlike Jira, Linear does not use an allowlist — all synced teams participate in signals processing.

### Refresh and disconnect

- **Refresh** — re-sync organization and team metadata from Linear.
- **Disconnect Linear** — remove the Linear connection from this workspace.

---

## Ingestion: signals

After Linear is connected, Devplan reads issue and team activity as part of periodic **signals processing** jobs. Ticket data surfaces as evidence in [Signals](/platform/signals) and is synthesized into [Insights](/platform/insights) and your [Daily Digest](/platform/today).

Linear data does not feed catalogue bootstrap the way Jira allowed projects do — catalogue bootstrap is driven primarily by code repositories and Jira context.

Processing runs on a schedule — allow hours to days for Linear data to appear in Signals and Insights. See [Core Workflow](/core-workflow) for typical timelines.

---

## Export: Devplan → Linear (one-way)

Export pushes structure from a Devplan **project** into Linear. This is separate from ingestion — changes made in Linear after export are not reflected back in Devplan.

### Where to export

On a project's **Build Plan** tab, use the **Sync** dropdown:

- If Linear is not connected, choose **Connect Linear** to start OAuth.
- If connected, choose **Linear Sync** to open the export dialog.
- Click **Export to Linear** to push the current project.

Re-export anytime to update Linear issues to match the latest Devplan user stories.

### Object mapping

| Devplan | Linear |
|---------|--------|
| Project | Linear Project |
| User Story | Linear Issue |
| Technical task | Linear Sub-issue |

---

## Related pages

- [Jira](/guides/integrations/jira) — Jira connect, allowed projects, and export
- [Core Workflow](/core-workflow) — PM tool export (planning step 6)
- [Signals](/platform/signals) — raw evidence from Linear and other sources
