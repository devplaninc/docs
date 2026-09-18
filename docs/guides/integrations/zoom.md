---
title: Zoom Integration
slug: /zoom-integration
sidebar_position: 12
---

# Zoom

Sync Zoom meeting recordings and summaries into your workspace.

---

## Adding the app

1. Open **Knowledge > Integrations** → **Zoom** → **Connect**.
2. Sign in to Zoom if prompted and authorize Devplan. Devplan requests read-only access to your Zoom cloud recordings, meeting summaries, and user/participant information — it cannot start, join, modify, or delete meetings or recordings.
3. You're redirected back to Devplan and Zoom shows as **Connected**.

If the authorization redirect doesn't complete, see [Troubleshooting](#troubleshooting) below.

---

## Usage

Once connected, Devplan periodically checks your Zoom account for new cloud recordings on a regular schedule — this is not real-time, so expect a short delay after a meeting ends before it appears in Devplan.

For each new recording, Devplan:

- Identifies the meeting host and attendees using Zoom's Users and Meeting Participant Reports APIs.
- Uses Zoom's own AI Companion meeting summary when one has been generated; otherwise Devplan downloads the meeting transcript and generates its own summary.
- Stores the meeting title, host, attendees, and summary in your workspace.

**Prerequisites:**
- A workspace admin must complete the connect step above.
- Meetings must be recorded to the **Zoom Cloud** (not local recording only) to be picked up.

Devplan does not use Zoom webhooks and does not modify meetings, recordings, or account settings — this is a read-only integration.

---

## What it feeds

Synced meeting content can appear in [Signals](/knowledge#signals), [Insights](/insights), and [Today](/today), alongside your other connected sources.

---

## Removing the app

**From Devplan:**
1. Open **Knowledge > Integrations** → **Zoom** → **Configure**.
2. Click **Disconnect**.

**From Zoom:**
1. Log in to your Zoom account and go to the Zoom App Marketplace.
2. Click **Manage** → **Added Apps**, or search for "Devplan."
3. Select the **Devplan** app and click **Remove**.

**After removal:** Devplan stops syncing new Zoom meetings immediately. Meeting content already synced into your workspace before removal is not automatically deleted — a workspace admin can remove it manually if needed.

---

## Troubleshooting

- **Authorization doesn't complete:** make sure pop-ups aren't blocked, and that you're signing in to Zoom with the account that owns or has access to the meetings you want synced. Try disconnecting and reconnecting.
- **Meetings aren't showing up:** confirm the meeting was recorded to the Zoom Cloud, not locally, and allow time for the next sync cycle.
- **Summary looks different than expected:** if Zoom's AI Companion generated a summary, Devplan uses it as-is; otherwise Devplan generates its own from the transcript, which may read differently.

---

## Related pages

- [Granola integration](/granola-integration)
- [Upload files](/upload-files)
