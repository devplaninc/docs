---
title: Advanced Access Control
slug: /advanced/access-control
---

# Advanced Access Control

Most workspaces use the standard **Admin** and **User** roles described in [Workspace Members](/settings/workspace#members). The additional roles and detailed matrix below apply to workspaces that retain those roles; use the role choices offered in your workspace.

## Workspace access and source access

Workspace roles control actions in Devplan. They are different from the permissions of an account used to connect Slack, a document service, or another provider. Source selection also determines which material a connection can access.

Do not assume that each member's source-system permissions are reproduced identically across imported or generated workspace content. Confirm the required access model before connecting sensitive material. For questions about a particular source or deployment, contact [Devplan](mailto:info@devplan.com).

[Additional connections](/additional-connections) also have tool permissions. Allowing a tool to read or change source data is separate from a member's role in the workspace.

Admins manage workspace integration authorization, credentials, and source configuration. Running a permitted sync or repository rescan is a separate action; it does not grant integration administration.

## Workspace roles

Workspace roles define a member's permissions within a specific workspace. Members can have multiple roles, and their permissions are cumulative.

| Role | Description | Key permissions | Typical use case |
|------|-------------|-----------------|------------------|
| **Admin (Owner)** | Full administrative access | Manage all workspace content and projects, manage users and roles, access all workspace settings | Workspace administrators, founders |
| **User (Editor)** | Content management without user administration | Create and edit documents and projects, run permitted Linear and Jira sync actions, cannot manage users | Content creators, project managers |
| **Projects owner** | Project-focused management role | Full project and document management, manage Linear and Jira sync, cannot manage users | Dedicated project managers |
| **Engineering** | Technical team access | View all content, create comments, rescan repositories and sites, run Linear and Jira sync, regenerate tasks | Software developers, DevOps engineers |
| **Product** | Product management focus | View all content, create comments, rescan repositories and sites, run Linear and Jira sync, regenerate user stories | Product managers, product owners |
| **Marketing** | Limited access for marketing teams | View all workspace content, create comments, read-only access to most features | Marketing team members |
| **Viewer** | Primarily read access | Read workspace content, with ownership and document-template exceptions described below | Stakeholders, clients, observers |

## Permission matrix

✅ means full access, ◐ means conditional access, and ❌ means no access.

The document rows describe standard template categories outside draft projects. Draft and custom-template exceptions are described below; this table is not an exhaustive list of every action.

| Permission | Admin (Owner) | User (Editor) | Projects owner | Engineering | Product | Marketing | Viewer |
|-----------|-------|--------|----------------|-------------|---------|-----------|--------|
| **Content management** | | | | | | | |
| Read access | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create projects | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Create/edit PRD | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| Create/edit tech brief | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Create/edit GTM | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Delete projects | ✅ | ✅ | ✅ | ◐ | ◐ | ◐ | ◐ |
| Prioritize projects | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Repository rescan | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ |
| Site rescan | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ |
| **Integrations and sync** | | | | | | | |
| Linear sync | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Jira sync | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Bitbucket connect | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Regeneration and AI features** | | | | | | | |
| User story regeneration | ✅ | ✅ | ✅ | ◐ | ✅ | ◐ | ❌ |
| Task regeneration | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Workspace and user management** | | | | | | | |
| Manage workspace settings | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Manage users and roles | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

## How roles combine

- **Multiple roles:** A member can have several roles at the same time. Their permissions are combined.
- **Document permissions:** The PRD, tech brief, and GTM rows reflect their standard Product, Engineering, and Marketing template categories. Custom document templates can allow different roles, and templates without a role restriction can permit broader editing. Documents configured as part of a draft can also allow editing beyond the standard category roles.
- **Draft projects:** Conditional project deletion applies only to a member's own project while it remains a draft.
- **Draft regeneration:** Conditional user story regeneration applies only to draft projects.
- **Role assignment:** Only Admins can manage member roles.
- **Workspace scope:** A role applies only within the workspace where it is assigned.
- **Comments:** Non-viewer roles can create comments. All members can manage their own comments.
- **Ownership:** Members can manage their own chats and dashboards where those items already exist. Changing a member to Viewer does not make every previously owned item read-only.
