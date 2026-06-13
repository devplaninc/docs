---
title: Google Drive Integration
sidebar_position: 8
---

# Google Drive

Attach Google Drive folders so Devplan can read documents on demand during signal processing — feeding [Signals](/platform/signals), [Insights](/platform/insights), and [Ask Devplan](/platform/ask-devplan).

---

## How to access

1. Open **Knowledge > Integrations** in the sidebar.
2. Find the **Google Drive** card and click **Select folders** or **Configure**.

This opens the Google Drive manage page.

---

## Connect and attach folders

Google Drive uses folder attachments rather than a persistent "connected" badge. You authenticate when you attach your first folders.

1. On the Google Drive manage page, click **Attach folders**.
2. If prompted, complete Google OAuth and grant Devplan access to your Google account.
3. In the folder picker, select one or more folders to attach.
4. Confirm your selection.

Attached folders appear in the **Attached Google Drive folders** table. Each row links to the folder on Google Drive. Use the remove action to detach a folder Devplan should no longer read.

You can attach additional folders anytime by clicking **Attach folders** again.

---

## Manage attached folders

| Action | What it does |
|--------|--------------|
| **Attach folders** | Open the Google Drive picker to add more folders |
| **Remove** | Detach a folder — Devplan stops reading its contents on future processing cycles |
| Folder name link | Open the folder directly in Google Drive |

The manage page shows how many folders are attached. A workspace with no folders attached is not yet reading Google Drive content.

---

## What Devplan reads

Devplan reads files inside attached folders **on demand during signal processing**. Supported content includes Google Docs, Sheets, Slides, and other files in the selected folders.

Attached Drive content contributes to:

- **Signals** — document updates and relevant excerpts surface as evidence
- **Insights** — synthesized takeaways from document and cross-source signals
- **Ask Devplan** — folder content is available when answering questions
- **Knowledge graph** — Drive documents link to other workspace sources

Good folders to attach: product specs, strategy decks, customer research, interview notes, competitive analysis, and shared team documentation.

---

## Tips

- Attach folders with stable, team-maintained content rather than personal scratch directories.
- Narrow folder selection improves signal relevance — attach the folders your product team actually uses.
- If OAuth fails, try **Attach folders** again to re-authenticate.

---

## Related pages

- [Notion](/guides/integrations/notion) — attach Notion pages and databases
- [Confluence](/guides/integrations/confluence) — attach Confluence spaces and pages
- [Uploads](/guides/integrations/uploads) — upload files directly without Google Drive
- [Core Workflow](/core-workflow) — how document sources feed the pipeline
