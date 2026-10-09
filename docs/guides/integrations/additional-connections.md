---
title: Additional Connections
slug: /additional-connections
description: Give Weaver tools to find information and perform supported actions in other services.
---

# Additional Connections

Additional connections give Weaver tools to retrieve information or perform supported actions in other services. Use them to investigate a customer account, find information in another service, or carry out a supported action without leaving the conversation with Weaver.

## Connect a service

As a workspace Admin, open **Integrations**, find the service in the additional connections catalog, and select **Connect**. Complete authorization in the tab that opens using the intended account, then return to Devplan and check its connection status.

A workspace member with integration-management permissions can review the connection and its tools. Resolve any account or authorization errors before expecting the tools to work.

## Review tool access

Select **Configure** on the connected service to inspect its tools. Tools may read information or make changes in the source service. Choose the tool permissions your workspace needs, then select **Save** to apply them. **Allow read-only** provides a starting point for supported connections when you want retrieval without write actions.

Tool access is limited by both these settings and the permissions of the connected account. Enabling a tool does not grant that account new permissions in the source service.

## What happens after connecting

Weaver can use the available tools when a conversation or workflow needs them. Specify the service and the question or action you intend, for example:

> Use the connected CRM to find context about this account and summarize the relevant information.

Background synchronization, historical coverage, and use in reports vary by provider and workflow. If your goal is ongoing source processing, check whether a [built-in integration](/integrations-overview#built-in-integrations) covers that need.

## When a service appears in both places

The built-in integration and additional connection can serve different purposes. For example, selecting source content for ongoing analysis is different from giving Weaver tools to retrieve information during a task. Review each connection's scope; do not assume that authorizing one also configures the other.

## Troubleshooting

- **The connection needs attention:** reconnect using an account with the required source access.
- **Weaver cannot use a capability:** check that the corresponding tool is offered and allowed.
- **Connected data is absent from reports:** verify whether the workflow imports or processes that service's data in the background.
- **A tool fails:** check provider permissions and connection status. A failed tool call does not establish that the requested information is absent.

## Related pages

[Integration types](/integrations-overview) · [Ask Weaver](/ask-devplan) · [Devplan MCP](/mcp-integration)
