---
title: Zoom Integration
slug: /zoom-integration
sidebar_position: 12
---

# Zoom

:::note Availability
The built-in Zoom integration is not generally enabled. The instructions below apply only when Devplan has enabled it for your workspace. Contact [Devplan](mailto:info@devplan.com) to confirm access.
:::

Use Zoom meeting summaries and transcripts to carry customer feedback and team discussions into product analysis. Weaver can use that meeting context when you investigate a request or prepare a project review.

---

## Adding the app

1. As a workspace Admin, open **Integrations → Zoom** and select **Connect Zoom**.
2. Sign in to Zoom if prompted and authorize Devplan. Devplan requests read-only access to your Zoom cloud recordings, meeting summaries, and user/participant information — it cannot start, join, modify, or delete meetings or recordings.
3. Return to Devplan and choose a setting under **Who can see synced meetings**: **Everyone in the workspace** or **Attendees only**. Selecting a mode enables synchronization; a connected account alone does not complete this step.

The visibility setting controls access to synced meeting notes; it does not limit which account users’ recordings are discovered. Devplan checks recordings across the connected account, subject to Zoom access and content availability. Attendee-based access depends on the participant information Zoom provides.

If the authorization redirect doesn't complete, see [Troubleshooting](#troubleshooting) below.

---

## Usage

Once connected and a visibility mode is selected, Devplan periodically checks your Zoom account for new cloud recordings. Allow time for Zoom to prepare the content and for Devplan's next sync.

For supported recordings with accessible content, Devplan:

- Retrieves available host and participant details. Participant coverage depends on Zoom permissions and plan support and may be limited to the host.
- Uses Zoom's own AI Companion meeting summary when one has been generated; otherwise Devplan downloads the meeting transcript and generates its own summary.
- Stores the meeting title, available participant details, and summary in your workspace.

**Prerequisites:**
- A workspace admin must complete the connect step above.
- Meetings must have a **Zoom Cloud** recording with an available transcript. A local recording or AI Companion summary alone is not enough for the current sync to pick up a meeting.

The integration reads available meeting content without changing meetings, recordings, or account settings.

---

## What it feeds

Synced meeting content can appear in [Signals](/signals), [Insights](/insights), and [Radar](/today), alongside your other connected sources.

---

## Removing the app

**From Devplan:**
1. Open **Integrations → Zoom**.
2. Select **Disconnect Zoom**.

**From Zoom:**
1. Log in to your Zoom account and go to the Zoom App Marketplace.
2. Click **Manage** → **Added Apps**, or search for "Devplan."
3. Select the **Devplan** app and click **Remove**.

**After removal:** Future access through the removed connection stops. Previously synced meeting content is not automatically deleted; contact Devplan if you need help with removal of stored content.

---

## Troubleshooting

- **Authorization doesn't complete:** make sure pop-ups aren't blocked, and that you're signing in to Zoom with the account that owns or has access to the meetings you want synced. Try disconnecting and reconnecting.
- **Meetings aren't showing up:** check that a visibility mode is selected, confirm the Zoom Cloud recording has an available transcript, and allow time for the next sync cycle.
- **Summary looks different than expected:** if Zoom's AI Companion generated a summary, Devplan uses it as-is; otherwise Devplan generates its own from the transcript, which may read differently.

---

## Related pages

- [Granola integration](/granola-integration)
- [Upload files](/upload-files)
