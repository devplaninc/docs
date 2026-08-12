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
| **Owner** | Full administrative access | Manage all content and projects, manage users and roles, access all settings and billing | Workspace administrators, founders |
| **User (Editor)** | Content management without user administration | Create and edit documents and projects, manage integrations, cannot manage users | Content creators, project managers |
| **Projects Owner** | Project-focused management role | Full project and document management, manage integrations, cannot manage users | Dedicated project managers |
| **Engineering** | Technical team access | View all content, create comments, manage repositories and technical tools, regenerate tasks | Software developers, DevOps engineers |
| **Product** | Product management focus | View all content, create comments, manage repositories and integrations, regenerate user stories | Product managers, product owners |
| **Marketing** | Limited access for marketing teams | View all workspace content, create comments, read-only access to most features | Marketing team members |
| **Viewer** | Read-only access | View all workspace content; cannot create, edit, or delete anything | Stakeholders, clients, observers |

## Permission matrix

| Permission | Owner | User (Editor) | Projects Owner | Engineering | Product | Marketing | Viewer |
|-----------|-------|--------|----------------|-------------|---------|-----------|--------|
| **Content management** | | | | | | | |
| Read access | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create projects | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Create/edit PRD | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| Create/edit tech brief | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Create/edit GTM | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Delete projects | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Prioritize projects | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Repository rescan | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Site rescan | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Integrations and sync** | | | | | | | |
| Linear sync | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Jira sync | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Bitbucket connect | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Regeneration and AI features** | | | | | | | |
| User story regeneration | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| Task regeneration | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Workspace and user management** | | | | | | | |
| Manage workspace settings | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Manage users and roles | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

## How roles combine

- **Multiple roles:** A member can have several roles at the same time. Their permissions are combined.
- **Role hierarchy:** Owner > User (Editor)/Projects Owner > Engineering/Product > Marketing > Viewer.
- **Role assignment:** Only Owners can manage member roles.
- **Workspace scope:** A role applies only within the workspace where it is assigned.
- **Comments:** All roles except Viewer can manage their own comments.
