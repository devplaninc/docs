---
title: Upload Files
slug: /upload-files
sidebar_position: 10
---

# Upload Files

Upload documents directly to Devplan when content does not live in a connected tool — strategy decks, research exports, customer lists, interview notes, competitive analysis, or any file your team wants Devplan to know about.

Uploaded files are ingested into the workspace **knowledge graph** and feed [Signals](/signals), [Insights](/insights), [Ask Devplan](/ask-devplan), and your [Daily Digest](/today).

---

## How to access

1. Open **Knowledge > Integrations** in the sidebar.
2. Open the **Upload files** card.

This opens the uploads manage page.

You can also attach documents during [onboarding](/getting-started) or on the [Workspace](/workspace) page — those attachments are workspace-scoped and available across all projects.

---

## Upload documents

1. On the uploads manage page, use the upload area to add files.
2. Select one or more files from your computer.
3. Files appear in the **Uploaded files** table after upload completes.

### Supported file types

| Type | Formats |
|------|---------|
| Documents | PDF, DOCX, Markdown |
| Spreadsheets | CSV, XLSX |
| Images | JPEG, PNG |

Image uploads receive AI-generated descriptions so their content is accessible in text-only contexts (signals, insights, and Ask Devplan).

---

## Manage uploaded files

The **Uploaded files** table shows each file with:

| Column | Description |
|--------|-------------|
| **File** | Original filename and optional description |
| **Type** | Document or Image |
| **Uploaded** | Upload date |
| **Actions** | Download or delete |

Delete files you no longer want Devplan to reference. Deletion removes the file from future signal processing.

---

## How uploads feed the pipeline

Uploaded documents are not just stored — they are processed into the same intelligence pipeline as integration data:

1. Files are indexed and parsed for text, structure, and key entities.
2. Content is added to the **knowledge graph**, linked to your workspace and other sources.
3. During **signals processing**, Devplan reads upload content alongside Slack messages, PRs, tickets, and connected docs.
4. Relevant excerpts become **signals** in the [Signals](/signals) feed.
5. Related signals are synthesized into **insights** on the [Insights](/insights) page.
6. Upload content enriches [Ask Devplan](/ask-devplan) answers and may surface in your [Daily Digest](/today).

New uploads take time to ingest — allow processing to complete before expecting them in signals and insights.

---

## What to upload

Upload whatever context matters to your product:

- Customer research and interview notes
- Strategy decks and OKR documents
- Competitive analysis
- Product specs not yet in Notion or Confluence
- Data exports (CSV, XLSX) with customer lists or usage summaries
- Screenshots and mockups (PNG, JPEG)

Upload early — especially research and strategy content that integrations alone may not capture.

---

## Related pages

- [Notion](/notion-integration) — attach live Notion pages instead of exporting files
- [Google Drive](/google-drive-integration) — attach Drive folders for ongoing doc sync
- [Workspace](/workspace) — attach docs to workspace context sections
- [Core Workflow](/core-workflow) — how uploads feed the knowledge graph
