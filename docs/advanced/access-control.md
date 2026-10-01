---
title: Advanced Access Control
slug: /advanced/access-control
---

# Advanced Access Control

**Availability:** This page applies only to workspaces with advanced role-based access control (RBAC) enabled. Most workspaces use the standard **Admin** and **User** roles described in [Workspace Members](/settings/workspace#members).

## Workspace roles

Workspace roles define a member's permissions within a specific workspace. Members can have multiple roles, and their permissions are cumulative.

| Role | Description | Key permissions | Typical use case |
|------|-------------|-----------------|------------------|
| **Admin (Owner)** | Full administrative access | Manage all workspace content and projects, manage users and roles, access all workspace settings | Workspace administrators, founders |
| **User (Editor)** | Content management without user administration | Create and edit documents and projects, manage most integrations, cannot manage users | Content creators, project managers |
| **Projects owner** | Project-focused management role | Full project and document management, manage Linear and Jira sync, cannot manage users | Dedicated project managers |
| **Engineering** | Technical team access | View all content, create comments, manage repositories and technical tools, regenerate tasks | Software developers, DevOps engineers |
| **Product** | Product management focus | View all content, create comments, manage repositories and integrations, regenerate user stories | Product managers, product owners |
| **Marketing** | Limited access for marketing teams | View all workspace content, create comments, read-only access to most features | Marketing team members |
| **Viewer** | Read-only by default | View all workspace content; retains edit and delete access to their own existing comments and draft projects | Stakeholders, clients, observers |

## Permission matrix

✅ means full access, ◐ means conditional access, and ❌ means no access.

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
- **Document permissions:** The PRD, tech brief, and GTM rows reflect their standard Product, Engineering, and Marketing template categories. Custom document templates can allow different roles.
- **Draft projects:** Conditional project deletion applies only to a member's own project while it remains a draft.
- **Draft regeneration:** Conditional user story regeneration applies only to draft projects.
- **Role assignment:** Only Admins can manage member roles.
- **Workspace scope:** A role applies only within the workspace where it is assigned.
- **Comments:** Non-viewer roles can create comments. All members can manage their own comments.
