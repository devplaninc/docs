---
title: GitLab Integration
slug: /gitlab-integration
description: Connect GitLab.com with a token and turn repository code into product context.
---

# GitLab

Connect GitLab.com to build [Live Docs](/live-docs) and understand the product effects of code changes. This gives planning and coding discussions a shared reference for the implementation.

## Connect

As a workspace Admin, open **Integrations → GitLab**, enter a GitLab.com token with access to the intended projects, and select **Connect GitLab**. The form accepts a personal, organization, or service-account token. After repository discovery, review the **Analyze** selections and use **View analysis** to inspect processed repositories.

Keep the token in the integration's credential settings rather than in a chat or project document.

## Manage access

Refresh repository access when the available projects change. Check token and repository-discovery status if a project does not appear. Use **Update token** to save a replacement. Where **Rotate token** is available, it asks GitLab to revoke the current token and issue a replacement immediately; review any other uses of that token first. Confirm that repository access still works after a change.

These instructions cover GitLab.com. For a self-managed GitLab instance, contact [Devplan](mailto:info@devplan.com) about your setup.

## Related pages

[Live Docs](/live-docs) · [Changelog](/updates) · [Integrations overview](/integrations-overview)
