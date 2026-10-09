---
title: Projects
slug: /projects
description: Create and organize projects, review evidence and requirements, and understand assessed delivery progress.
---

# Projects

Projects connect the reason for a piece of work to its scope and delivery evidence. Use a project to turn customer needs into a plan, agree on what belongs in the next delivery, and understand what has actually progressed across tickets, code, and conversations.

For a project review, you can answer three questions in one place: Why are we doing this? What have we agreed to build? What evidence shows it is ready?

{/* Keep existing section links working after the content reorganization. */}
<span id="what-you-can-do" />

## Create a project

1. Open **Projects** and select **Create project**.
2. Choose **Start a new project** to go directly into planning.
3. Describe the problem, who it affects, and what you want to change. Add relevant documents, links, or customer feedback.
4. Select **Create project**. Devplan opens the project page, where you can review the generated content and develop its requirements.

For example: “Customers lose their onboarding progress when they switch devices. Let signed-in users resume setup from another device. Keep the current signup requirements.” Add the related customer feedback or issue so the plan has a concrete starting point.

You can also develop a [proposal](/proposals) into a project.

Avoid treating generated requirements as final. Confirm what is in scope, what success means, and which constraints the team must respect.

## Organize your work

Plan your roadmap in **Projects**, using the list or Kanban view to compare initiatives. Search and filter for the work you need to review, and choose display fields that help you compare ownership, priority, estimates, and progress.

Use **sections** for groups such as upcoming work or a launch initiative, and **releases** to associate projects with a delivery plan. Keep ownership, status, and release assignments current as plans change. Include completed or archived work when reviewing delivery history.

Compare priority and estimates with the underlying demand, scope, and risks. A priority score helps frame a decision; a release assignment records a plan. Open the project to check the evidence before treating either as a commitment or a shipping confirmation.

## Review a project

The project brings together several views of the same work:

| Area | Use it to |
| --- | --- |
| **Status** | Review assessed progress against acceptance criteria and see recent project activity. |
| **Signals** | Review customer demand, related activity, and risks, with links to supporting evidence. |
| **Definition** | Develop the brief that explains the problem, intended outcome, and requirements. |
| **Execution** | Break the plan into user stories, separate current scope from future work, and track completion. |
| **Attachments** | Keep relevant documents and other supporting material with the project. |

Use **Ask Weaver** alongside the project to clarify requirements or request changes to the plan. For example: “What would we need to change to deliver the onboarding fix without changing signup?” Review the resulting content and confirm the intended scope.

You can edit the definition directly and leave comments. In Execution, add or edit stories and move work between **In Scope**, **Future Scope**, and **Done**. This keeps useful ideas visible without including them in the current delivery. Smaller work types can use a simpler scope view.

Projects with specifications enabled also provide **Tech Spec** for technical planning. The available views depend on the project type, generated content, and workspace settings. Templates provide a starting structure; adapt the content to the project.

{/* Keep existing section links working after the content reorganization. */}
<span id="why-it-matters" />

## Understand progress and risks

Devplan assesses connected activity against a project's scope and acceptance criteria. In Status, expand a story and open a criterion's completion details to see the explanation and supporting evidence. This helps you distinguish work that is complete, underway, or still missing, rather than relying only on a ticket's status.

The activity history shows how the project has changed. Use it alongside the current assessment when preparing a review or catching up after time away.

A progress percentage is an assessment of the defined work, not a guarantee of production availability. A merged pull request, completed ticket, deployed change, and enabled feature describe different stages. Missing evidence can also affect the assessment.

In Signals, inspect a risk's evidence and suggested action. You can close a risk that no longer applies or restore it if it becomes relevant again. When a risk offers an action to update the project, review the proposed changes before applying them. Customer demand and related signals help explain why a scope change may matter.

## Inferred projects

Devplan also identifies **inferred projects** from connected delivery activity. These bring work that is already happening into view, even when nobody created a project for it in Devplan. Inferred projects appear separately in the project list and can be included or hidden when reviewing the portfolio.

Review their scope and evidence before treating them as an agreed plan. They differ from [proposals](/proposals), which suggest opportunities to consider: an inferred project describes observed work, while a proposal helps decide what to pursue next. Neither means that someone has approved the work or verified its completion.

## Move into implementation

Share the relevant project context with a developer or AI assistant through [MCP](/mcp-integration), so implementation starts with the agreed requirements and their supporting context. You can also export the brief as Markdown or send supported planning content to [Jira](/jira-integration) or [Linear](/linear-integration).

Use the [specification-based development workflow](/spec-driven-development) for deeper technical planning and developer tooling. Connected trackers can continue to manage execution while Devplan brings the plan and delivery evidence together.

## Troubleshooting

If a project looks stale or incomplete, check its requirements, linked sources, and analysis status. If an action or document is missing, check the project type, workspace specification settings, and your permissions.

## Related pages

[Proposals](/proposals) · [Dashboards](/dashboards) · [Working with evidence](/evidence) · [Changelog](/updates)
