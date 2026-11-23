---
title: Getting Started
slug: /getting-started
description: Set up a workspace, connect sources, review first insights, and resolve common setup problems.
---

# Getting Started

Connect the sources your team already uses so Devplan can help explain your product, surface customer needs, and ground plans in evidence. For a new workspace, Devplan guides you through signup, connecting sources, and building your initial knowledge graph before you enter the main app. You can add more sources after setup is complete.

Setting up a new workspace requires connecting and selecting at least one code repository.

## 1. Create your account and workspace

Sign in at [app.devplan.com](https://app.devplan.com). Accept an existing workspace invitation or choose the appropriate workspace before creating a new one. If your company already uses Devplan, joining its workspace lets you work from shared context.

Follow the setup prompts to describe your company and product. Review any generated description and correct important gaps, such as who your customers are or which product the workspace covers. You can update this later in [Knowledge → Workspace](/knowledge#workspace).

If setup asks you to complete a trial or billing step, use the terms shown in your account. See [Organization settings](/settings/organization#billing) for billing management.

## 2. Connect integrations

Connect sources within the guided setup flow. Start with your code repository, then add relevant team discussions, customer feedback, or product documents using the options offered during setup.

The main app's **Integrations** page becomes available after onboarding. You do not need to find it to connect your initial sources.

Authorization is often only the first step. Select the repositories, channels, projects, or documents Devplan should use, and confirm that any required setup is complete.

{/* Keep existing section links working after the content reorganization. */}
<span id="3-review-your-first-insights" />

## 3. Let Devplan build your knowledge graph

The setup progress screen shows Devplan researching your company, analyzing repository evidence, and publishing your initial product map. You can review early results as they become available while the graph builds.

Wait until setup shows that your initial product map is ready, then enter the workspace. Early research results may appear before setup finishes.

### Processing time

The time needed depends on your sources and the work already queued. If setup reports a problem, check the relevant source's access and selection, or use the recovery action offered on the setup screen. Ongoing processing continues to enrich your workspace after you enter the app.

<span id="3-start-using-devplan" />

## 4. Start using your workspace

Once you enter the main app, you can open **Integrations** to add or manage sources and **Knowledge → Workspace** to refine your company context. See [Integration types](/integrations-overview) for the difference between built-in integrations and additional connections.

The recommended next step is to install the [Devplan Plug-in](/mcp-integration), which brings your workspace context, dashboards, and guided product workflows into your AI assistant. Choose the connection guide for [Claude](/mcp-integration/claude), [ChatGPT](/mcp-integration/chatgpt), [Claude Code via terminal](/mcp-integration/claude-code), or [Codex via terminal](/mcp-integration/codex).

Then try a concrete plug-in task:

- **Setup:** “Set up Devplan.”
- **Product context:** “What should I know before changing billing?”
- **Daily Radar:** “Run my Daily Radar.”
- **Demand Report:** “What are customers asking for?”
- **Cycle Planning:** “Plan the next six weeks for a team of four.”
- **Spec:** “Write a spec for SSO.”

See the [dashboard](/mcp-integration#dashboards) and [skill](/mcp-integration#skills) overview for the complete set of guided workflows.

If the answer is thin, check whether the relevant source has been selected and processed. Adding more unrelated sources will not necessarily answer the question.

## For teams

Invite colleagues through [Workspace Members](/settings/workspace#members), keep shared [workspace context](/knowledge#workspace) accurate, and choose useful [report delivery](/reports#delivery) settings.

If your team cannot install the plug-in, each [connection guide](/mcp-integration#connections) also explains how to connect Devplan MCP directly.

## Troubleshooting

| Problem | What to check |
|---|---|
| The expected workspace is missing | Use the invited account and check pending invitations. Ask a workspace admin to confirm membership. |
| You cannot find the Integrations page during signup | Connect sources through guided setup. The main app navigation becomes available after onboarding and initial graph readiness. |
| A source is connected but contributes no information | Check source selection, provider permissions, processing status, and whether this connection supports background ingestion. |
| Setup cannot move past repository analysis | Confirm at least one intended repository is selected and review its analysis status. |
| Generated context describes the wrong product | Correct the workspace description and verify which sources are connected. |
| A trial or account step blocks setup | Review the account's billing state or contact [support](mailto:info@devplan.com). |

## Next steps

[Product guide](/platform-overview) · [Core Workflow](/core-workflow) · [Integrations](/integrations-overview) · [Self-hosting](/self-hosting)
