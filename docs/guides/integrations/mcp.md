---
title: "MCP Integration"
sidebar_position: 2
---

# MCP Integration

:::note
If the **API Keys** section is not visible under **Settings → Workspace**, contact your workspace admin or [Devplan support](mailto:info@devplan.com) to enable it.
:::

Devplan exposes a [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server that lets AI coding assistants — such as Claude Code or Cursor — interact with your Devplan workspace directly from your development environment. With the MCP integration you can create feature projects, track initialization status, and query workspace data without leaving your editor.

---

## Prerequisites

- A Devplan workspace with access to **Settings → Workspace → API Keys**
- A workspace member account with permission to create and read Projects (see [Access Control](/access-control))
- An MCP-compatible AI client (e.g. Claude Code, Cursor)

---

## Quick Start

1. **Open the API Keys page** — navigate to **Settings → Workspace → API Keys** in the Devplan app.

2. **Create an API key** — click **Create API key**, enter a descriptive name (e.g. `Claude Code`), then click **Create**.

3. **Copy the key immediately.**

   :::warning
   The API key value is displayed **once** at creation and cannot be retrieved afterward. If you lose it, delete the key and create a new one.
   :::

4. **Configure your MCP client** — add the Devplan server to your MCP client configuration using the HTTP transport. Example for a JSON-based config file:

   ```json
   {
     "mcpServers": {
       "devplan": {
         "type": "http",
         "url": "https://app.devplan.com/api/v1/mcp",
         "headers": {
           "Authorization": "Bearer dpsk-<your-api-key>"
         }
       }
     }
   }
   ```

   Replace `dpsk-<your-api-key>` with the key you copied in step 3.

5. **Verify the connection** — ask your AI assistant to call the `listWorkspaceUsers` tool. A successful response returns the list of members in your workspace.

---

## MCP Server Details

| Property | Value |
|----------|-------|
| **Endpoint URL** | `https://app.devplan.com/api/v1/mcp` |
| **HTTP method** | `POST` |
| **Transport** | Streamable HTTP (JSON response) |
| **Authentication** | `Authorization: Bearer dpsk-<api-key>` |
| **Server name** | `devplan` |

---

## Available Tools

### `startFeatureInit`

Start feature project initialization. Creates a Devplan project immediately and queues background generation of the user story documents.

**Input**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `requirements` | string | Yes | Description of the feature or requirements for the project |

**Output**

```json
{
  "projectId": "<project-id>",
  "pendingJobId": "<job-id>"
}
```

:::note
The project is created synchronously and is immediately available in Devplan. Document generation (title, PRD, tech brief, user stories) happens in the background. Use `getFeatureInitStatus` to poll for completion.
:::

---

### `getFeatureInitStatus`

Check the status of a feature initialization job started by `startFeatureInit`.

**Input**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `pendingJobId` | string | Yes | Job ID returned by `startFeatureInit` |

**Output**

```json
{
  "status": "pending",
  "projectId": "<project-id>"
}
```

Possible values for `status`: `"pending"`, `"completed"`, `"failed"`.

`projectId` is included in the response for jobs created by `startFeatureInit`.

---

### `listWorkspaceUsers`

List all members of your workspace. Use the returned user IDs with the `owner` and `assignee` filters in `listWorkspaceProjects`.

**Input**: none

**Output**

```json
{
  "users": [
    { "id": "<user-id>", "name": "Jane Smith", "email": "jane@example.com" }
  ]
}
```

---

### `listWorkspaceProjects`

List projects in your workspace with optional filtering and pagination. Supports the same filter semantics as the Devplan Projects list view.

**Input** (all parameters optional)

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `owner` | string | — | Filter by owner user ID, or `"me"` for the current user |
| `assignee` | string | — | Filter by assignee user ID, or `"me"` for the current user |
| `status` | string | — | Filter by status: `"DRAFT"`, `"IN_REVIEW"`, `"READY_FOR_DEV"`, or `"DONE"` |
| `includeArchived` | boolean | `false` | Include archived projects |
| `includeDone` | boolean | `false` | Include projects with `DONE` status |
| `includeContent` | boolean | `false` | Include full document content for tech brief and user stories |
| `cursor` | string | — | Pagination cursor from the `nextCursor` field of a previous response |
| `limit` | number | `20` | Maximum projects to return (max `100`) |

**Output**

```json
{
  "projects": [
    {
      "id": "<project-id>",
      "title": "My Feature",
      "status": "DRAFT",
      "owner": { "id": "...", "name": "Jane Smith", "email": "jane@example.com" },
      "isArchived": false,
      "createdAt": "2026-04-01T12:00:00Z",
      "prd": { "id": "...", "title": "PRD", "summary": "...", "content": "..." },
      "techBrief": { "id": "...", "title": "Tech Brief" },
      "userStories": [
        {
          "id": "...",
          "title": "User Story Title",
          "progressStatus": 0,
          "scopeStatus": 0,
          "locked": false
        }
      ]
    }
  ],
  "nextCursor": "<cursor-for-next-page>"
}
```

:::note
**PRD content** (`prd.content`) is always included in the response. **Tech brief and user story content** are omitted by default — set `includeContent: true` to retrieve them. This keeps responses compact when you only need project metadata.
:::

**Pagination**: when `nextCursor` is present in the response, pass it as the `cursor` parameter in the next call to retrieve the following page.

---

## Authentication & API Keys

Devplan MCP uses **workspace-scoped API keys** for authentication. These are distinct from personal access tokens and are tied to a specific workspace.

**Creating a key**:
1. Go to **Settings → Workspace → API Keys**
2. Click **Create API key** and give it a name
3. Copy the key — it starts with `dpsk-` and is shown only once

**Managing keys**:
- Keys are listed by name and creation date on the API Keys page
- To revoke access, delete the key from the same page — this takes effect immediately
- There is no key rotation; to replace a key, delete the old one and create a new one

:::warning
Deleting an API key immediately revokes access for any MCP client using it. Any in-flight requests will fail with a 401 error.
:::

---

## Known Limitations

- **API key shown once** — The key value is displayed only at creation. Copy it immediately; if lost, delete the key and create a new one.
- **Workspace-scoped keys required** — Standard session tokens and personal access tokens are not accepted by the MCP endpoint. Only `dpsk-` prefixed workspace API keys work.
- **API Keys access required** — If the API Keys page is not visible under **Settings → Workspace**, contact your workspace admin or [Devplan support](mailto:info@devplan.com).
- **Pagination cap** — `listWorkspaceProjects` returns at most 100 projects per page. Use the `cursor`/`nextCursor` fields to page through larger result sets.
- **PRD always included; other content opt-in** — PRD content is always returned. Tech brief and user story content require `includeContent: true`, which may increase response size significantly for large workspaces.
- **Background generation can fail** — After `startFeatureInit` returns, the document generation job runs asynchronously. If it fails, the project still exists in Devplan but titles and documents may be incomplete. Check status with `getFeatureInitStatus` and open the project in the app to complete setup manually if needed.

---

## Related Documentation

- [CLI Cheat Sheet](/dev/cli-cheat-sheet) — Install the `devplan` CLI and explore available commands
- [Access Control](/access-control) — Workspace roles and project permissions
- [Core Workflow](/core-workflow) — How Devplan projects, PRDs, and user stories work
- [Jira Integration](/guides/integrations/jira) — Sync Devplan user stories to Jira

---

Questions: [info@devplan.com](mailto:info@devplan.com)
