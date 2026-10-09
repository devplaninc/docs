---
title: Microsoft Teams Integration
slug: /microsoft-teams-integration
description: Select Microsoft Teams channels and meeting transcripts for product analysis and follow-up.
---

# Microsoft Teams

Connect Microsoft Teams to turn channel discussions and meeting transcripts into context for product questions, customer needs, and project follow-up. You can choose channel and meeting scope separately to include the conversations relevant to your team.

## Connect and select channels

As a Devplan workspace Admin, open **Integrations → Microsoft Teams** and select **Connect Teams**. A Microsoft organization administrator must grant consent for the intended organization.

Under **Channels to ingest**, toggle the standard or shared channels to include. Private channels are not shown or ingested. A saved selection can still be pending activation; check the reported status. Install the Devplan app in a team as well if you want the bot to reply to mentions in supported channels or post reports there.

## Meeting notes

Under **Meeting transcripts**, choose the scope:

- **Selected meetings only:** a Teams admin makes the Devplan app available in the organization’s app catalog. Add it from the scheduled meeting’s details or chat using **Apps → Devplan → Add**, then save. For recurring meetings, this covers the series. If the meeting appears as needing a workspace assignment in Devplan, claim it for the intended workspace.
- **All organization meetings:** a Teams administrator must configure the application access policy described in the setup instructions. The policy can cover the organization or specific organizers.
- **Off:** stops importing meeting transcripts; previously synced notes remain searchable.

Devplan reads the transcripts Teams produces. You do not need to invite a recording bot to the call. Removing the Devplan app from a selected meeting stops its ingestion.

This applies to calendar-scheduled meetings with available transcripts, including accessible earlier transcripts for a selected meeting. Connecting the account alone does not guarantee that every meeting produces usable notes.

## Troubleshooting

Check the connected organization, selected channels, app installation, and pending status messages. For missing meeting notes, check meeting scope and transcript availability as well as account authorization.

## Related pages

[Signals](/signals) · [Granola](/granola-integration) · [Integrations overview](/integrations-overview)
