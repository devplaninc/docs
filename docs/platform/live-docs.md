---
title: Live Docs
slug: /live-docs
description: Understand your product through generated feature documentation, user flows, technical designs, and change history.
---

# Live Docs

Devplan creates and updates Live Docs from your connected repositories and product context. It organizes your product into areas and features, with explanations of what each feature does, how people use it, and how it works technically.

Use it to get oriented in an unfamiliar product area, prepare for a customer conversation, or understand the existing behavior before planning a change. Product and engineering colleagues can work from the same description without each having to reconstruct it from code and conversations.

Live Docs describes **your product**. This public documentation explains how to use Devplan.

## Explore your product

Open **Product → Live Docs**. Browse the product areas and their features, or search for a capability. Search includes the feature descriptions and documentation, so you can look for a behavior even if you do not know its name.

- **Docs** gives you a readable feature reference. Open **User Flow** to understand the experience and behavior, or **Tech Design** for implementation context. The available content determines which tabs appear.
- **Map** shows how features are grouped into product areas. Open a feature from the map to read its documentation.

For example, before changing onboarding, find the existing onboarding feature and review both the user flow and technical design. This helps you identify behavior to preserve and questions to resolve before writing a new specification.

## Follow connections and changes

Open a feature's graph to explore its connected context. When a feature has recorded updates, **History** shows dated summaries of changes. Use [Changelog](/updates) for a broader view of recent product changes across features.

Devplan refreshes the documentation through product analysis. The **Last updated** date helps you judge how current a description is; it does not confirm that every described capability is enabled for every customer.

## Use Live Docs with Weaver and coding assistants

Ask [Weaver](/ask-devplan) a focused question about a feature, such as “How does onboarding work today, and what should we consider before adding a resume-later option?” Name the feature and the decision you are trying to make.

Through the [Devplan MCP](/mcp-integration), your coding assistant can find product features and retrieve their user flows and technical designs. Ask it to review that context before planning or changing code. This gives it a starting point for understanding the product behavior the code needs to support.

## Refine the content

Workspace admins can correct a feature's title, description, user flow, and technical design with **Edit**, then **Save**. They can also create or rename sections, move features between sections, and remove entries that no longer belong. Other workspace members can browse the documentation.

For an update that needs investigation or affects several descriptions, use **Refine section**. Name the affected feature or section, explain what should change, and include supporting context. **Save Draft** keeps your feedback for later; **Submit** asks Devplan to process it. Review the resulting documentation once processing finishes.

## If content is missing

Confirm that the relevant repository is selected for analysis and that its initial processing has completed. A newly connected repository may not have a complete product map yet. For a specific gap, identify the missing capability and ask Weaver to investigate it.

## Related pages

[Repository integrations](/integrations-overview#built-in-integrations) · [Changelog](/updates) · [Working with evidence](/evidence)
