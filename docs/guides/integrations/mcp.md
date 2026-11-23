---
title: Devplan Plug-in
slug: /mcp-integration
description: Add Devplan context, dashboards, and product workflows to Claude, ChatGPT, Claude Code, or Codex.
---

# Devplan Plug-in

The Devplan Plug-in brings Connected Product Intelligence into your AI assistant. It connects the assistant to your Devplan workspace through MCP and adds skills for product context, planning, customer demand, delivery monitoring, specifications, and engineering analytics.

The plug-in is the recommended setup because it provides both the Devplan connection and the workflows that put that context to work. A direct MCP connection is available on every supported platform when you only need Devplan tools or cannot install plug-ins.

## Quick start

1. Choose your platform under [Connections](#connections).
2. Install the Devplan Plug-in from `https://github.com/devplaninc/devplan-plugins` and sign in to the intended Devplan workspace.
3. Start a new chat or terminal session and say **“Set up Devplan.”**

You need a Devplan account with a code repository connected. If you do not have an account yet, the setup workflow helps you create one.

## Dashboards

The plug-in can build four dashboards from the work and evidence connected to your Devplan workspace:

| Dashboard | What it helps you see |
|---|---|
| Daily Radar | What shipped, what is moving, what is stuck, and what needs your attention |
| Execution Monitoring | Active projects, delivery risks, slipped or blocked work, inferred work, and a searchable changelog |
| Demand Report | Customer demand themes, isolated requests, adoption blockers, customer commitments, and recent market moves |
| Engineering Analytics | Pull request throughput, cycle time, review load, and work in progress by person and repository |

In Claude and ChatGPT, setup can create shareable dashboards and schedule supported weekday refreshes. In Claude Code and Codex, dashboards are generated on request as local HTML files and are not scheduled.

## Skills

You do not need to name a skill. Ask for the outcome you want, and the plug-in can load the relevant workflow.

| Skill | What it does |
|---|---|
| Product context | Grounds product and engineering work in current Devplan evidence, decisions, delivery state, and product intent |
| Daily Radar | Builds a personal view of what shipped, what is moving, what is stuck, and what needs attention |
| Execution Monitoring | Reviews active projects, delivery risks, inferred work, and recent changes |
| Demand Report | Synthesizes customer demand, adoption blockers, commitments, and market movement |
| Engineering Analytics | Reports throughput, cycle time, review load, and work in progress |
| Cycle Planning | Sizes a cycle from the team's real pace and separates committed, stretch, and deferred work |
| Spec | Turns an idea into a specification, technical plan, and estimate tracked in Devplan |
| Setup | Connects Devplan, confirms company context, and prepares the supported dashboards and workflows |

Try requests such as:

- “What should I know before changing billing?”
- “Run my Daily Radar.”
- “How are our projects going?”
- “What are customers asking for?”
- “Plan the next six weeks.”
- “Write a spec for SSO.”

## Connections

Choose the client where you want to use Devplan. Each guide starts with the recommended plug-in installation and includes direct MCP setup as a secondary option.

- [Claude desktop and web](/mcp-integration/claude)
- [ChatGPT desktop and web](/mcp-integration/chatgpt)
- [Claude Code](/mcp-integration/claude-code)
- [Codex](/mcp-integration/codex)

All platforms use the same Devplan MCP server:

```text
https://app.devplan.com/api/v1/mcp
```

If you install the plug-in after creating a direct connection, remove the separate MCP server so your client does not show two Devplan connections.

## Access and permissions

The plug-in reads the projects, product knowledge, changes, discussions, calls, support summaries, and documents available through your Devplan workspace. Devplan's permissions and connected-source access determine what it can retrieve.

Setup can save company context and dashboard settings in Devplan. The Spec skill can create or update Devplan projects. Nothing is posted, sent, or changed in your other connected tools by these workflows.

Some Devplan MCP tools can update Devplan content, depending on workspace configuration. Review the requested action before approving a change.

## Verify your connection

Ask your assistant:

> Use Devplan to list projects in this workspace, including their names and status.

Confirm that the assistant used Devplan tools and returned information from the intended workspace. A successful sign-in, visible tool list, and useful answer are separate checks.

## Related documentation

[Devplan Plug-in source](https://github.com/devplaninc/devplan-plugins) · [Ask Weaver](/ask-devplan) · [Dashboards](/dashboards) · [Workspace members](/settings/workspace#members)
