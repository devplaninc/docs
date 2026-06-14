---
title: "Jira Integration"
slug: /jira-integration
sidebar_position: 4
---

_Note: Jira Integration is in beta._

Jira connects to Devplan in two ways: **ingestion** for product intelligence (signals, catalogue, insights) and **export** for pushing planned work from a Devplan project into Jira.

---

## Connect Jira

### Prerequisites

Install the [Devplan Jira Atlassian app](https://developer.atlassian.com/console/install/cd539bc3-11b5-4b71-a82d-d8af831435a1?signature=AYABeETqleNeikM5CMnAxz%2B755IAAAADAAdhd3Mta21zAEthcm46YXdzOmttczp1cy1lYXN0LTE6NzA5NTg3ODM1MjQzOmtleS83ZjcxNzcxZC02OWM4LTRlOWItYWU5Ny05MzJkMmNhZjM0NDIAuAECAQB4KVgoNesMySI2pXEz4J5S%2B4but%2FgpPvEEG0vL8V0Jz5cBPXqIpFHwuylgGhQUrD7WFAAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDJcRfkjl7WpHMarLtAIBEIA7mc2prFXlHJjTKbDnNcpmzeACyi2tBtMq3hVrGHdh2akO5mTfwz%2BBy6EHr6bPeNKoM2L60HHHIemHrDIAB2F3cy1rbXMAS2Fybjphd3M6a21zOmV1LXdlc3QtMTo3MDk1ODc4MzUyNDM6a2V5LzU1OWQ0NTE2LWE3OTEtNDdkZi1iYmVkLTAyNjFlODY4ZWE1YwC4AQICAHig7hOcRWe1S%2BcRRsjD9q0WpZcapmXa1oPX3jm4ao883gF4Eo5GpaFrAlXkpsEWdYNKAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMn%2FqaVxEv1dTfPdUbAgEQgDuBVtVlNMJJ47vMCa7oWNLyN%2BfRjcnRrVN%2BiX%2BjGQnibmcqInsNVcfBzPugUtVZ6PNUkDRe%2Bsgm7urUPgAHYXdzLWttcwBLYXJuOmF3czprbXM6dXMtd2VzdC0yOjcwOTU4NzgzNTI0MzprZXkvM2M0YjQzMzctYTQzOS00ZmNhLWEwZDItNDcyYzE2ZWRhZmRjALgBAgIAeBeusbAYURagY7RdQhCHwxFswh7l65V7cwKp%2BDc1WGoHAVlLDoEvXPFCxzm%2FW5nVIsQAAAB%2BMHwGCSqGSIb3DQEHBqBvMG0CAQAwaAYJKoZIhvcNAQcBMB4GCWCGSAFlAwQBLjARBAwoTaqw7IFZWPAYzAYCARCAO3gE%2FMvECQjfUjr0lqu2N5T%2FdiuIAKtBgtXKQypXXfHqYzmqbMPGvL5WjVe8MxHYmGyUnpK0jog1ssaRAgAAAAAMAAAQAAAAAAAAAAAAAAAAAOYf7d4xRr3RzSZt2Jc8A%2Fr%2F%2F%2F%2F%2FAAAAAQAAAAAAAAAAAAAAAQAAADJtmNORi7b8ozuX4AmbPzgLt1wtlQC7ySPPBb8KDvfFhFGzE9BK0iAxszz6eCbUaX2oBe%2FkWOBdho%2BVmvPIwCsBVUY%3D&product=jira) on your Atlassian site before connecting.

### Connect flow

1. Open **Knowledge > Integrations** and find the **Jira** card.
2. Click **Connect** or **Configure** to open the **JIRA integration** manage page.
3. Click **Connect JIRA** and complete Atlassian OAuth.
4. If your account has access to multiple Atlassian sites, Devplan prompts you to **Choose Atlassian site** — select the Jira site for this workspace.
5. After authorization, Devplan syncs your Jira organization and projects.

The manage page shows **Connected organization**, **Synced projects**, and connection **Status**.

### JIRA settings

On the manage page, configure:

| Setting | Description |
|---------|-------------|
| **Allowed JIRA Projects** | Multi-select popover listing synced projects. Only selected projects are used for catalogue operations and appear in the export picker. When none are selected, Jira data is excluded from catalogue bootstrap. |
| **Extra Fields** | Comma-separated list of custom Jira fields required during export (e.g. `customfield_10001`). Shown in the export dialog when pushing user stories to Jira. |

Use **Refresh** to re-sync project metadata from Jira. Use **Disconnect JIRA** to remove the connection.

Connecting Jira also enables [Confluence](/confluence-integration) on the same Atlassian site — Confluence content must still be attached separately.

---

## Ingestion: signals and catalogue

After Jira is connected, Devplan reads ticket and project data from your Jira site as part of background processing — the same pipeline that powers [Signals](/signals), [Insights](/insights), and the feature catalogue.

### Allowed JIRA Projects

Select which Jira projects Devplan should include in the **Allowed JIRA Projects** popover on the manage page:

- **Signals processing** — periodic jobs ingest issues, comments, and project activity from allowed projects as evidence for signals and insights.
- **Catalogue bootstrap** — allowed projects contribute Jira context when Devplan builds or updates your workspace catalogue.

If **no projects are selected**, Jira data is excluded from catalogue operations and will not appear in the export project picker until you allow at least one project.

Processing runs on a schedule after connect — allow time (hours to days) for new Jira data to surface in Signals and Insights. See [Core Workflow](/core-workflow) for typical timelines.

---

## Export: Devplan → Jira (one-way)

Export pushes structure from a Devplan **project** into Jira. This is separate from ingestion — it does not pull Jira changes back into Devplan.

### Where to export

On a project's **Build Plan** tab, use the **Sync** dropdown:

- If Jira is not connected, choose **Connect Jira** to start OAuth.
- If connected, choose **Jira Sync** to open the export dialog.
- Click **Export to JIRA** to push the current project.

Re-export anytime to update Jira issues to match the latest Devplan user stories. Jira stories that no longer map to Devplan stories may be archived on re-export.

### Object mapping

| Devplan | Jira |
|---------|------|
| Project | Epic |
| User Story | User Story |
| Technical task | Task |

The target Jira project must support Epic and User Story issue types.

### Current limitations

- Export is **one-way**. Changes made in Jira after export are not reflected in Devplan.
- Mapping is fixed: one Devplan project maps to one Jira Epic; user stories map to Jira User Stories.
- Configure **Extra Fields** on the Jira manage page if your site requires additional fields during export.

---

## Related pages

- [Linear](/linear-integration) — Linear connect and export
- [Confluence](/confluence-integration) — Confluence on the same Atlassian site
- [Integrations overview](/integrations-overview) — all integration guides
- [Signals](/signals) — raw evidence from Jira and other sources
- [Core Workflow](/core-workflow) — planning step 6 (PM tool export) and integration timelines

Please share feedback or suggestions if you run into issues with the beta integration.
