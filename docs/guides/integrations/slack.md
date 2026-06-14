---
title: Slack Integration
slug: /slack-integration
sidebar_position: 6
---

# Slack

Ingest messages from channels where the Devplan bot is a member.

---

## Connect

1. **Knowledge > Integrations** → **Slack** → **Connect Slack**
2. Complete OAuth

---

## Channel access

Managed **in Slack**, not Devplan. Devplan only reads channels where the bot is a member.

1. In Slack, invite **Devplan** to a channel (`/invite @Devplan`)
2. Click **Refresh** on the Slack manage page
3. Confirm the channel appears under **Channels the bot is in**

Remove the bot in Slack and **Refresh** to revoke access. Historical messages before the bot joined may not be available.

---

## Related pages

- [Signals](/signals)
- [Today](/today)
