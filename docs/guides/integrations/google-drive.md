---
title: Google Drive Integration
slug: /google-drive-integration
sidebar_position: 8
---

# Google Drive

Attach Google Drive folders for on-demand reads during signal processing.

---

## Setup

1. Open **Knowledge > Integrations** → **Google Drive** → **Select folders**.
2. Click **Attach folders** and sign in with Google if prompted.
3. Pick folders in the picker and confirm.

Attached folders appear in the manage table. Remove any you no longer want Devplan to read.

---

## Service account access

When you attach a folder, Devplan grants **reader access to a workspace-specific Google service account** on that folder. That lets Devplan read folder contents during background processing without requiring your personal OAuth session to stay active.

Your OAuth step authorizes the picker; ongoing access uses the service account on each attached folder.

---

## What it feeds

Google Docs, Sheets, Slides, and other files in attached folders can surface in [Signals](/knowledge#signals), [Insights](/insights), and [Ask Devplan](/ask-devplan).

---

## Related pages

- [Upload files](/upload-files) — upload directly without Drive
- [Integrations overview](/integrations-overview)
