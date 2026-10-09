---
title: Slack Integration
slug: /slack-integration
description: Use public Slack discussions as product evidence and ask Weaver questions from Slack.
---

# Slack

Connect Slack so customer needs, decisions, and constraints discussed in public channels can inform Devplan’s analysis. Your team can also ask Weaver questions from Slack and receive reports and scheduled dashboard updates where they already work.

## Connect

As a Devplan workspace Admin, open **Integrations → Slack**, select **Connect Slack**, and authorize the intended Slack workspace. Your Slack administrator may need to approve the app.

## Channel access

Select **Add channels** to choose public channels or add the bot to all currently available public channels. You can also invite the Devplan app from Slack. New messages are ingested after the bot joins; this does not import the channel’s full earlier history. Newly created channels are not automatically included by an earlier selection.

Private channels are not ingested, even if someone invites the bot. The management page lists public channels where the bot is a member, including supported externally shared public channels.

Remove the bot from a channel in Slack to stop future channel access, then refresh the channel list in Devplan. Previously processed content may remain in Devplan. Historical coverage can differ from new-message access.

## Use Slack with Devplan

Selected public-channel discussions can contribute to signals and workspace analysis. Send the Devplan bot a direct message or mention it in an internal public channel to ask a question. It does not answer workspace questions in externally shared channels or private-channel mentions. Inspect supporting references when an answer matters to a decision.

Slack can also be a delivery destination for supported [reports](/reports) and [dashboard schedules](/dashboards#schedule-updates). Configure delivery separately from channel access.

## Troubleshooting

If expected discussions are missing, check that the bot belongs to the channel, refresh the channel list, and allow time for processing. If a delivery destination is unavailable, verify the Slack connection and channel access.

## Related pages

[Signals](/signals) · [Ask Weaver](/ask-devplan) · [Reports](/reports)
