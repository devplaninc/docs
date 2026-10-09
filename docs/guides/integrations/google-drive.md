---
title: Google Drive Integration
slug: /google-drive-integration
description: Attach Google Drive files and folders so written context informs product decisions.
---

# Google Drive

Attach Google Drive files or folders so product documents, research, and customer notes can inform Weaver’s answers and analysis. This brings the team’s written context into planning alongside code and delivery evidence.

## Setup

As a workspace Admin, open **Integrations → Google Drive** and select **Attach items**. If prompted, connect or reconnect Google Drive using an account that can access and share the intended content. Browse the folders, select files or folders, then choose **Add Selected**. Check the result for any items that could not be attached.

Review the attached items in the management page. Remove items to detach them from the workspace's configured context.

## Service account access

The built-in Drive connection uses a workspace-specific Google service account to read attached content. The setup flow grants reader access to that account on selected items, so ongoing access does not depend only on your personal sign-in session.

Your Google organization may restrict sharing with service accounts. If setup fails, check the item's sharing permissions and organization policy rather than repeatedly selecting it.

Removing an attachment in Devplan does not revoke the service account's sharing permissions in Google Drive. To revoke access, review and change sharing in Drive as well, including access inherited from a parent folder. Check whether that access is still needed for other attached content before removing it.

## What it feeds

Attached content is available to document and signal-processing workflows. For example, ask Weaver to compare requirements in an attached brief with a project’s current scope. Processing takes time, and not every attachment produces a separate signal.

## Troubleshooting

For inaccessible content, confirm that the correct item was attached and that reader access remains available. For missing information in an answer, identify the document and check whether the relevant workflow can retrieve or has processed it.

## Related pages

[Uploads](/upload-files) · [Notion](/notion-integration) · [Integration types](/integrations-overview)
