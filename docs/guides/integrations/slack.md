---
title: Slack Integration
sidebar_position: 6
---

# Slack

Connect Slack so Devplan can ingest messages from channels where the Devplan bot is a member — surfacing discussion context as [Signals](/platform/signals) and [Insights](/platform/insights).

---

## How to access

1. Open **Knowledge > Integrations** in the sidebar.
2. Find the **Slack** card and click **Connect** (or **Configure** if already connected).

This opens the **Slack integration** manage page.

---

## Connect Slack

1. Click **Connect Slack** on the manage page (or **Connect** from the integrations grid).
2. Complete the Slack OAuth flow and authorize Devplan for your workspace.
3. After authorization, the manage page shows your connected Slack workspace.

---

## Configure channel access

Slack channel membership is managed **in Slack**, not in Devplan. Devplan only reads channels where the Devplan bot or app is already a member.

### Add the bot to a channel

1. In Slack, open the channel you want Devplan to read.
2. Invite the **Devplan** app or bot to that channel (use `/invite @Devplan` or the channel's integrations menu).
3. Return to the Slack manage page in Devplan and click **Refresh**.
4. Confirm the channel appears under **Channels the bot is in**.

New messages are ingested from bot-member channels after the bot joins. Historical messages before the bot was added may not be available.

### Remove the bot from a channel

1. In Slack, remove the Devplan app or bot from the channel.
2. Click **Refresh** on the Slack manage page in Devplan.
3. The channel should no longer appear in the list.

---

## Manage page overview

Once connected, the manage page shows:

| Section | Description |
|---------|-------------|
| **Status / Workspace / Bot-member channels** | Connection health, workspace name, and channel count |
| **Channels the bot is in** | Read-only list of channels Devplan can read |
| **Add the bot to a channel** | Instructions for inviting the bot in Slack |
| **Remove the bot from a channel** | Instructions for revoking access in Slack |

### Refresh and disconnect

- **Refresh** — update the channel list after adding or removing the bot in Slack.
- **Disconnect Slack** — remove the Slack connection from this workspace.

---

## What Devplan reads

Devplan ingests new messages from bot-member channels during **signals processing**. Slack threads, decisions, and informal product discussions can surface as signals and contribute to insights and your [Daily Digest](/platform/today).

Signal volume grows over hours and days as messages accumulate. Connect Slack early and add the bot to your product, engineering, and customer-facing channels for the richest context.

---

## Tips

- Add the bot to channels where meaningful product decisions happen — not every channel needs Devplan access.
- Private channels work if the bot is invited to them.
- If a channel is missing after inviting the bot, click **Refresh** on the manage page.

---

## Related pages

- [Core Workflow](/core-workflow) — how Slack feeds the signals pipeline
- [Signals](/platform/signals) — browse evidence from Slack and other sources
- [Today](/platform/today) — daily digest with Slack-sourced evidence
