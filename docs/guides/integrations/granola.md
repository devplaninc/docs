---
title: Granola Integration
sidebar_position: 11
---

# Granola

Connect Granola to sync call notes and meeting summaries into your workspace — contributing to [Signals](/platform/signals), [Insights](/platform/insights), and your [Daily Digest](/platform/today).

---

## How to access

1. Open **Knowledge > Integrations** in the sidebar.
2. Find the **Granola** card and click **Connect** or **Configure**.

This opens the **Granola integration** manage page.

---

## Connect Granola

Granola does not use OAuth. Connection requires a workspace API key and folder configuration.

1. On the Granola manage page, enter your **Granola API key**.
   - Workspace **Admins** can save or rotate the API key.
2. Add **folder names** to control which Granola notes are synced.
3. Save your configuration.

The integration shows **Connected** when at least one folder name is configured.

---

## Configure folders

Folder names determine which Granola notes Devplan pulls into the workspace. Add the folder names your team uses in Granola to organize customer calls, stakeholder meetings, or product interviews.

| Setting | Description |
|---------|-------------|
| **API key** | Authenticates Devplan with your Granola account |
| **Folder names** | Limits sync to specific Granola folders |

You can add or remove folder names anytime. Changes take effect on the next sync cycle.

---

## What Devplan uses Granola for

Synced Granola notes contribute to:

- **Signals** — call summaries and meeting notes surface as evidence
- **Insights** — customer and stakeholder themes from call content
- **Daily Digest** — meeting takeaways may appear in your digest
- **Ask Devplan** — call note content is available when answering questions

Good folders to sync: customer interview notes, sales call summaries, user research sessions, and stakeholder check-ins.

---

## Tips

- Match folder names exactly to how they appear in Granola.
- Start with folders containing the highest-signal customer and product conversations.
- Rotate the API key from the manage page if your Granola credentials change.

---

## Related pages

- [Google Drive](/guides/integrations/google-drive) — attach folders with meeting recordings or transcripts
- [Uploads](/guides/integrations/uploads) — upload interview notes directly
- [Core Workflow](/core-workflow) — how call content feeds the signals pipeline
