---
title: "Access Control"
sidebar_position: 6
---

# Company Roles

Company roles define user permissions within a specific company workspace. Users can have multiple roles, and permissions are cumulative.

| Role | Description | Key Permissions | Use Case |
|------|-------------|-----------------|----------|
| **Owner** | Full administrative access | Manage all content and projects, manage users and roles, access all settings and billing | Company administrators, founders |
| **Editor** | Content management without user admin | Create/edit documents and projects, manage integrations, cannot manage users | Content creators, project managers |
| **Projects Owner** | Project-focused management role | Full project and document management, manage integrations, cannot manage users | Dedicated project managers |
| **Engineering** | Technical team access | View all content, create comments, manage repositories and technical tools, regenerate tasks | Software developers, DevOps engineers |
| **Product** | Product management focus | View all content, create comments, manage repositories and integrations, regenerate features (user stories) | Product managers, product owners |
| **Marketing** | Limited access for marketing teams | View all company content, create comments, read-only access to most features | Marketing team members |
| **Viewer** | Read-only access | View all company content, cannot create, edit, or delete anything | Stakeholders, clients, observers |

## Company Role Permissions Table

| Permission | Owner | Editor | Projects Owner | Engineering | Product | Marketing | Viewer |
|-----------|-------|--------|----------------|-------------|---------|-----------|---------|
| **Content Management** | | | | | | | |
| Read Access | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create Projects | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Create/Edit PRD | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| Create/Edit Tech Brief | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Create/Edit GTM | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Delete Projects | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Prioritize Projects | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Repository Rescan | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Site Rescan | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Integrations & Sync** | | | | | | | |
| Linear Sync | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Jira Sync | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| BitBucket Connect | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Regeneration & AI Features** | | | | | | | |
| User Stories Regeneration | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| Tasks Regeneration | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Company & User Management** | | | | | | | |
| Manage Company Settings | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Manage Users & Roles | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

## Key Notes:

1. **Owner**: Has full administrative access (`manage all`) to everything within the company
2. **Editor**: Content-focused role with creation/editing permissions but no user management
3. **Projects Owner**: Similar to Editor but with explicit project management focus
4. **Engineering**: Technical role with repository and development tool access, plus task regeneration
5. **Product**: Product management role with repository access and user stories regeneration capabilities
6. **Marketing**: Limited access role with read permissions and commenting ability
7. **Viewer**: Read-only access to all company content

The permissions are cumulative when users have multiple roles, and all roles (except Viewer) can manage their own comments. The hierarchy generally follows: Owner > Editor/Projects Owner > Engineering/Product > Marketing > Viewer.

## Notes
- **Multiple roles**: Users can have several roles simultaneously
- **Permission hierarchy**: Owner > Editor/Projects Owner > Engineering/Product > Marketing > Viewer
- **Role assignment**: Only Owners can manage user roles
- **Company-specific**: Roles apply only within the assigned company