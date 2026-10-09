---
title: "Secrets Management"
slug: /secrets-management
sidebar_position: 4
unlisted: true
---

# Secrets Management

:::note Cloud Run reference
This guide is for existing Cloud Run users. [Contact Devplan](mailto:info@devplan.com) to confirm availability and setup for your workspace. For the current coding-assistant setup, start with [Devplan MCP](/mcp-integration).
:::

Store the credentials your cloud runs need as workspace secrets. Devplan encrypts stored values and passes them to setup and coding as environment variables. Values are not displayed again in the UI after creation.

## Managing Secrets

Workspace Admins manage secrets. [Contact Devplan](mailto:info@devplan.com) for the development-settings entry point for your configured Cloud Run workspace.

In the **Secrets** controls, create a named value or update an existing value. Secret names cannot be changed; create a replacement if you need a different name. Keep the original value in your organization's credential manager.

Before deleting a secret, check which scripts and runs depend on it. Future runs that need the deleted value may fail. Deleting a stored secret does not revoke the credential at its provider; revoke or rotate it there when needed.

## Secret Naming Conventions

Use descriptive uppercase names with underscores, such as `DATABASE_URL`, `NPM_TOKEN`, or `AWS_ACCESS_KEY_ID`. Use the variable name expected by your application or tool. Keep names unique within the workspace.

## Using Secrets in Setup Scripts

Secrets are already available as environment variables. Validate that a required value exists without displaying it:

```bash
#!/bin/bash
set -e

: "${DATABASE_URL:?Configure the DATABASE_URL workspace secret}"
```

For credentials that must be written to a file, restrict file permissions and keep the file available until its final consumer finishes. The [setup guide](/setup-scripts#credential-files-needed-by-later-phases) includes an example that carries a credential path into later phases.

## Security Best Practices

Use credentials with the permissions required for the run and follow your organization's rotation policy. Keep test credentials separate from production access.

Devplan masks recognized secret values in run logs. Avoid printing credentials or transformed versions of them; encoding or modifying a value can prevent it from being masked. Avoid shell tracing (`set -x`) around commands that use credentials.

If a credential appears in a log, rotate it at the provider, update the workspace value, remove the logging statement, and contact Devplan. Do not rely on redaction to make logging credentials safe.

## Troubleshooting

| Problem | Action |
| --- | --- |
| Environment variable is missing | Check the secret name and the workspace used by the run. |
| Authentication fails after a credential change | Check its provider permissions and update the stored value. |
| Sensitive data appears in a log | Rotate the exposed credential and remove the logging statement. |
| A secret cannot be created | Check your Admin role, the name requirements shown in the form, and whether the name already exists. |

## Next Steps

- [Setup Scripts](/setup-scripts)
- [Running Tasks](/running-tasks)
- [Cloud task execution](/run-button)

{/* Preserve links to sections consolidated in this guide. */}
<span id="overview" />
<span id="accessing-secrets-management" />
<span id="creating-a-secret" />
<span id="updating-a-secret" />
<span id="deleting-a-secret" />
<span id="requirements" />
<span id="recommended-patterns" />
<span id="basic-usage" />
<span id="cloud-provider-authentication" />
<span id="database-connections" />
<span id="private-package-registries" />
<span id="1-principle-of-least-privilege" />
<span id="2-rotate-secrets-regularly" />
<span id="3-never-log-secret-values" />
<span id="4-use-environment-specific-secrets" />
<span id="5-validate-secrets-in-setup" />
<span id="6-clean-up-temporary-files" />
<span id="common-secret-types" />
<span id="cloud-provider-credentials" />
<span id="private-package-registries-1" />
<span id="test-database-connections" />
<span id="secret-not-available-in-job" />
<span id="job-fails-after-secret-update" />
<span id="secret-value-appears-in-logs" />
<span id="secret-with-this-name-already-exists" />
<span id="secrets-table-reference" />
