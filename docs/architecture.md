---
title: How Devplan Works
slug: /how-devplan-works
description: Learn how Devplan processes connected sources and uses them to answer questions and support planning.
---

# How Devplan Works

Devplan connects source material and product knowledge so Weaver can help your team understand the product, evaluate work, and follow delivery.

## Product intelligence pipeline

Built-in integrations process selected repositories, tickets, conversations, meeting notes, and documents. Repository analysis reads source code to understand product behavior. Processing runs over time, so a new connection or recent source change may not be reflected immediately.

[Additional connections](/additional-connections) give Weaver tools to access other services. Their data is not necessarily imported into the same background pipeline.

## Weaver and your knowledge graph

Weaver is Devplan's AI system. The workspace knowledge graph connects source evidence with the product knowledge derived from it.

| Kind of context | Meaning |
|---|---|
| Source material | Original messages, documents, meeting notes, tickets, pull requests, and commits |
| Live Docs | Code-backed descriptions of product capabilities and user flows |
| Changes | Summaries of code changes and their product effects |
| Signals | Focused observations synthesized from source material |
| Insights | Risks or feature requests derived from related evidence |
| Decisions | Recorded decisions and their context, including proposals for review |
| Projects | Planned or inferred initiatives with scope, requirements, and delivery evidence |

These are different views of connected information. A signal summarizes evidence; it is not itself the original message. A project's planning status is not proof that its implementation is deployed.

## Signals, insights, and planning

Weaver uses source material and product context to identify observations and relationships, answer questions, and support project planning. Generated conclusions depend on the coverage and freshness of the available evidence.

Review [source references](/evidence), distinguish observed facts from inferences, and correct inaccurate context. If something is missing, check which sources Devplan searched and whether they've been processed.

## Integrations

Authorize an integration and configure its scope before expecting useful results. Selecting a repository, channel, or document is different from completing its analysis. Provider-specific guides explain prerequisites and common access problems.

[Integration types and setup guides](/integrations-overview).

### CLI

Use [MCP](/mcp-integration) to make workspace context available to an AI client. The [Devplan CLI](/cli-cheat-sheet) also supports specification-based development workflows. The two serve different setup and implementation needs.

## Access control

Workspace membership and roles govern actions within Devplan. Integration authorization and source selection determine what a connection can access. Do not assume that individual source-system permissions are reproduced identically across all imported or generated workspace content.

Before connecting sensitive material, confirm that its scope is appropriate for the workspace and ask Devplan about any required access guarantees. See [Access control](/advanced/access-control).

## Data privacy

Devplan may process source code and the content of selected connected sources to generate product knowledge. Choose sources according to your organization's data policies. Previously processed content may remain after you disconnect a source. Contact Devplan about deletion requirements.

For deployment and data-handling requirements, see [Self-hosting](/self-hosting), the [privacy policy](https://www.devplan.com/privacy), or contact [Devplan](mailto:info@devplan.com).

{/* Preserve links to sections consolidated in this guide. */}
<span id="weaver-the-knowledge-graph" />
