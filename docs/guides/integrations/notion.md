---
title: Notion Integration
slug: /notion-integration
sidebar_position: 7
---

# Notion

Connect Notion and attach specific pages or databases so Devplan can read them on demand during signal processing — feeding [Signals](/signals), [Insights](/insights), and [Ask Devplan](/ask-devplan).

---

## How to access

1. Open **Knowledge > Integrations** in the sidebar.
2. Find the **Notion** card and click **Connect** or **Configure**.

This opens the Notion manage page.

---

## Connect Notion

1. On the Notion manage page, click **Connect Notion**.
2. Complete the Notion OAuth flow and grant Devplan access to your workspace.
3. After authorization, the page shows a **Connected** badge.

Disconnecting Notion removes the workspace-wide connection and affects all attached content.

---

## Attach pages and databases

Once Notion is connected, attach the specific content Devplan should read.

1. Click **Attach Notion content** to open the picker.
2. Browse your connected Notion workspace. You can attach:
   - **Pages** — individual Notion pages
   - **Databases** — an entire database, or expand a database to select specific child pages inside it
3. Select one or more items and confirm.

Attached content appears in the **Attached Notion content** table with the item name and type (page or database). Use the row actions to remove attachments you no longer want Devplan to read.

Devplan reads attached Notion content **on demand during signal processing** — content is not copied in full upfront. Add or remove attachments anytime to change what Devplan considers.

---

## Manage attachments

The attached content table shows:

| Column | Description |
|--------|-------------|
| **Item** | Page or database title |
| **Type** | Page or database |
| **Actions** | Remove the attachment |

After attaching new content, allow time for the next signals processing cycle before expecting it in [Signals](/signals) or [Insights](/insights).

---

## What Devplan uses Notion for

Attached Notion pages and databases contribute to:

- **Signals** — excerpts and updates from connected pages surface as evidence
- **Insights** — related signals are synthesized into takeaways
- **Ask Devplan** — page content is available when answering workspace questions
- **Knowledge graph** — Notion content links to other sources Devplan reads

Good candidates to attach: product specs, strategy docs, customer research databases, meeting notes, competitive analysis, and roadmap pages.

---

## Tips

- Attach the specific pages or databases that matter — Devplan does not read your entire Notion workspace automatically.
- For large databases, expand the database in the picker and select only the child pages you need rather than attaching the whole database.
- Re-attach content after major Notion restructures if page IDs change.

---

## Related pages

- [Google Drive](/google-drive-integration) — attach folders from Google Drive
- [Confluence](/confluence-integration) — attach Confluence spaces and pages
- [Uploads](/upload-files) — upload files directly to Devplan
- [Core Workflow](/core-workflow) — how document sources feed the pipeline
