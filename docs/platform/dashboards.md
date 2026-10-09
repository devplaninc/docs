---
title: Dashboards
slug: /dashboards
description: Create dashboards, refresh their content, review versions, and schedule updates and delivery.
---

# Dashboards

Dashboards turn recurring product questions into saved views that Weaver can update for you. Bring project progress, customer evidence, and delivery risks into one place for a team review, then refresh the same view as the work changes. You describe what matters; Weaver assembles the dashboard from available context.

Use a dashboard when you want to revisit a question regularly or give a team a shared view of the answer. For a question you want to explore in conversation, start with [Ask Weaver](/ask-devplan). Scheduling a dashboard lets the team receive updates without someone rebuilding and distributing a report each time.

## Choose the right dashboard

Some dashboards are maintained by Devplan; others let you control their content or update schedule.

| Type | What it provides | What you can configure |
| --- | --- | --- |
| **Devplan-managed**, such as Codebase Overview | A view maintained by Devplan, marked **Managed by Devplan** | No manual content editing, refresh, or dashboard scheduling |
| **Template**, such as Daily Standup | A ready-made view with preset instructions | Refresh the content and configure its schedule and recipients; the underlying instructions are fixed |
| **Custom** | A view generated from your instructions | Edit the instructions, regenerate or refresh the content, and configure its schedule and recipients |

Choose a template for an established question, or create a custom dashboard when you want to define the audience, scope, and content yourself. Available controls also depend on your permissions.

The **Weekly report** card opens a [weekly report](/reports), whose content and delivery use reporting settings. It is separate from template and custom dashboards. **Daily Standup** is a template dashboard; it is also separate from the daily report in [Radar](/today).

## Create a dashboard

Open **Dashboards** and select an available template, or choose **Create dashboard** to create your own. Templates cover recurring questions such as delivery performance and customer intelligence. For a custom dashboard, state the audience, question, scope, and useful time period. For example:

> For our weekly product review, show the current state of onboarding projects, customer feedback from the past week, and delivery risks that need a decision. Include links to the supporting work and evidence.

Choose **Generate dashboard** and review the result. Its content depends on the sources and evidence available to your workspace. Follow supporting links where provided to check a finding or continue into the relevant work. For a custom dashboard, refine the instructions if the result is too broad or emphasizes the wrong information. Template dashboards use preset instructions.

## Refresh and change the dashboard

For custom and template dashboards, **Refresh** creates a new version using current source data while preserving the dashboard's structure. Use this before a review when the question is still the same but the underlying work has moved on.

To change what a custom dashboard covers, open **Configure**, edit its instructions, and choose **Save changes**. This starts an update based on the new instructions and can change the dashboard's organization. Template instructions cannot be edited in the same way. You can also rename a custom or template dashboard without changing its instructions.

Generation can take time. Check the generation state before starting another attempt. **History** lists generated versions, their dates, and change summaries when available. For a custom or template dashboard you can manage, choose **Make active** to return to an earlier version. This changes the version shown to everyone viewing that dashboard.

## Schedule updates

For custom and template dashboards, enable **Schedule updates** during creation or later under **Configure**. Choose the relevant days and time, and check the timezone shown in the schedule. Schedules can include weekends. Save your changes to apply the schedule.

Recipients are optional: a schedule without recipients refreshes the dashboard without sending it. Select workspace members for email delivery or Slack channels for team updates. Slack delivery requires a usable Slack connection and destination. Turn off **Schedule updates** and save to stop scheduled refreshes and delivery.

If you can view a scheduled dashboard but cannot configure it, use **Subscribe** to receive its updates by email. Use the same control to unsubscribe; this changes your own subscription, not the dashboard's schedule.

## Keep useful dashboards close

Star a dashboard to add it to your favorites and prioritize it in the dashboard navigation. Favorites are personal, so each teammate can keep the views they use most within reach. Search the dashboard collection to find a saved view.

When a custom dashboard is no longer needed, use **Archive** in its menu to remove it from the active collection. You can find it with the archived filter and **Restore** it later. Archiving also stops its scheduled refreshes while it remains archived. These actions require permission to manage the dashboard.

## Sharing and permissions

Share the dashboard's URL with teammates who have access to the workspace. They see the active version, giving the team a common view for discussion. Workspace access and permissions determine who can view, edit, refresh, or schedule a dashboard.

Review its content and recipients before enabling delivery, particularly when it includes customer information. Personal report preferences and dashboard schedules are separate settings.

## Troubleshooting

- **Content is stale:** check the last generation and source processing status, then refresh where available.
- **The result misses the question:** for a custom dashboard, narrow the instructions and identify the relevant project, product area, or period. Create a custom dashboard if a template does not fit your question.
- **An update was not delivered:** check that the schedule is enabled, the timezone is correct, and recipients are configured.
- **A control is unavailable:** check the type of view, your permissions, and whether generation is already running.

## Related pages

[Reports](/reports) · [Ask Weaver](/ask-devplan) · [Working with evidence](/evidence)
