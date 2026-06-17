---
title: Linear Integration
slug: /linear-integration
sidebar_position: 5
---

# Linear

Ingest ticket data for [Signals](/knowledge#signals) and export Devplan projects to Linear.

---

## Connect

1. **Knowledge > Integrations** → **Linear** → **Connect Linear**
2. Complete OAuth

All synced teams participate in signals processing (no allowlist like Jira). Data surfaces over hours to days.

---

## Export (one-way)

On a project's **Build Plan** tab: **Sync** → **Linear Sync** → **Export to Linear**.

| Devplan | Linear |
|---------|--------|
| Project | Linear Project |
| User Story | Linear Issue |
| Technical task | Linear Sub-issue |

Changes in Linear after export are not synced back.

---

## Related pages

- [Jira](/jira-integration)
- [Core Workflow](/core-workflow)
