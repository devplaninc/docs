---
title: Jira Integration
slug: /jira-integration
description: Connect Jira, choose project scope, and carry product planning into delivery.
---

# Jira

Connect Jira to bring customer requests and delivery work into the same context as your product and plans. You can investigate related issues with Weaver and carry supported Devplan planning content into Jira for execution.

## Connect

As a workspace Admin, open **Integrations → Jira**, select **Connect JIRA**, and complete Atlassian authorization. Choose the intended site if a site picker appears. Jira can connect through this authorization flow; the separate Devplan Forge app adds site-level sync and export capabilities. Use the app’s installation guidance when you need that setup.

### Settings

In **Allowed JIRA Projects**, select the projects Devplan should use. Selections save as you change them. A connected site with no allowed projects does not provide the intended Jira context for analyses and briefs.

Configure any required export fields for your Jira setup. Jira workflows and custom fields can affect whether an export succeeds.

## Ingestion

Selected issue context can inform product analysis, signals, and project assessments. Initial synchronization and later processing take time. Check both the allowed-project selection and source access if expected issues are missing.

## Export (one-way)

When Jira export is available for your project, use it to export the planning content. Review the destination and required fields before exporting.

Supported exports map project planning into Jira items, such as epics, stories, and tasks. Do not assume edits to exported Jira items automatically rewrite the corresponding Devplan planning documents. Reading Jira activity for analysis is different from bidirectional document synchronization.

## Troubleshooting

If issues are absent from analysis, confirm the site, authorization, and allowed projects. If export fails, check Jira permissions, destination configuration, and required fields. Follow installation guidance only when the app reports that setup is needed.

## Related pages

[Confluence](/confluence-integration) · [Linear](/linear-integration) · [Projects](/projects)
