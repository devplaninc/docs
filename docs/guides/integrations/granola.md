---
title: Granola Integration
slug: /granola-integration
description: Connect selected Granola folders so meeting notes inform product decisions.
---

# Granola

Connect Granola so customer conversations and team meetings can inform product decisions after the call ends. Devplan uses notes and summaries from selected folders to identify observations, connect related requests, and support follow-up questions.

## Requirements

You need a Granola account with API-key access and the folders containing the notes you want to use. API availability depends on your Granola plan. A workspace administrator configures the connection in Devplan.

## Setup

Open **Integrations → Granola**, enter the API key, and select **Save**. Then enter each folder name and select **Add**; folder changes save as you add or remove them. Check that the page shows **Connected**. Both a saved key and at least one configured folder are needed.

Use **Update** to replace the key. Remove a folder from the list when its notes should no longer be included in future synchronization.

## What it feeds

Synced meeting notes can inform [signals](/signals), [insights](/insights), reports, and Weaver's answers. Coverage depends on the configured folders and accessible notes; a connection does not imply access to every meeting in Granola.

## Troubleshooting

Check API-key access, the saved credential, folder names, and the notes' location in Granola. Allow time for synchronization before expecting new material in generated findings.

## Related pages

[Microsoft Teams](/microsoft-teams-integration) · [Uploads](/upload-files) · [Working with evidence](/evidence)
