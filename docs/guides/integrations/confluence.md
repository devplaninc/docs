---
title: Confluence Integration
slug: /confluence-integration
description: Connect Confluence and attach spaces or pages to preserve the context behind work.
---

# Confluence

Connect Confluence so product requirements, technical plans, and earlier decisions can inform Weaver’s analysis. Attach relevant spaces or pages to help your team understand the reasoning behind work without repeatedly collecting the same background.

## Prerequisites

A Devplan workspace Admin connects an Atlassian account with access to the intended Confluence site. Jira and Confluence share Atlassian authorization and site selection in Devplan, so an existing Jira connection may already show Confluence as connected. You still choose Confluence content separately.

## Connect and attach

Open **Integrations → Confluence** and select **Connect Confluence** if it is not already connected. Complete Atlassian authorization and choose the intended site if prompted. Then select **Attach Confluence content**, choose spaces or pages in the picker, and confirm **Attach**. Check that the selected items appear in the management view.

The separate Devplan Forge app adds site-level background access; it is not required to begin attaching content through the authorization flow. Use **Refresh** after site-access changes. Detach an item from its row when you no longer want it included.

## Use the content

Attached spaces and pages provide context for signals and planning. For example, use a requirements page to investigate whether a new customer request is already covered by an existing plan. Choose the content you want Weaver to use; connecting Confluence does not import the whole site.

## Troubleshooting

For missing content, check the Atlassian site, page permissions, and attachment selection. For a workflow using the separate Forge app, also check its installation. Reconnect if the integration reports expired or missing authorization.

## Related pages

[Jira](/jira-integration) · [Notion](/notion-integration) · [Integration types](/integrations-overview)
