---
title: "Setup Scripts"
slug: /setup-scripts
sidebar_position: 2
unlisted: true
---

# Setup Scripts

:::note Cloud Run reference
This guide is for existing Cloud Run users. [Contact Devplan](mailto:info@devplan.com) to confirm availability and setup for your workspace. For the current coding-assistant setup, start with [Devplan MCP](/mcp-integration).
:::

## Overview

Cloud Run looks for `.devplan/run/setup.sh` in your repository and runs it before the coding agent starts. The script is optional. Use it when the repository needs dependencies, tools, or test configuration that are not already available in the run environment.

Use the language versions and dependency files required by your repository. The examples below assume the required runtime is already installed; adapt them to your project rather than treating them as a list of supported runtime versions.

## Creating a Setup Script

For a Node.js project with a package lockfile:

```bash
#!/bin/bash
set -e

npm ci
printf 'NODE_ENV=test\n' >> "$DEVPLAN_ENV"
```

Commit the script to the repository used by the run. The runner invokes it with Bash, so it must be readable; an executable bit is not required for that invocation.

## Exporting Environment Variables

Setup runs in a separate process. An `export`, virtual-environment activation, or language-manager selection inside that process does not automatically carry over to the coding agent. Write the values later phases need to `$DEVPLAN_ENV`.

The file uses dotenv syntax. Write complete values, including the expanded `PATH`; do not write a literal `$PATH` expecting a later shell to expand it.

### Python virtual environment

```bash
#!/bin/bash
set -e

python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt

printf 'VIRTUAL_ENV=%s\n' "$VIRTUAL_ENV" >> "$DEVPLAN_ENV"
printf 'PATH=%s\n' "$PATH" >> "$DEVPLAN_ENV"
```

The same principle applies when using a language manager: select the repository's required version during setup, then persist the resulting `PATH` and any other required environment values. Installed files remain available to later phases, but shell functions and aliases do not.

## Setting Up Test Environments

Workspace secrets are available as environment variables during setup and coding. Prefer configuring a secret with the name your application expects, such as `DATABASE_URL`, so the script does not need to copy credentials into another file.

Use credentials and services intended for the tests you will run. Validate required variables without printing their values:

```bash
#!/bin/bash
set -e

: "${DATABASE_URL:?Configure the DATABASE_URL workspace secret}"
```

### Credential files needed by later phases

If a tool needs a credential file, restrict its permissions and keep it available until the last phase that uses it. For an existing base64-encoded Google service-account secret:

```bash
#!/bin/bash
set -e
umask 077

: "${GCLOUD_SA_KEY_B64:?Configure the service-account secret}"
credential_file="$(mktemp)"
printf '%s' "$GCLOUD_SA_KEY_B64" | base64 -d > "$credential_file"
printf 'GOOGLE_APPLICATION_CREDENTIALS=%s\n' "$credential_file" >> "$DEVPLAN_ENV"
```

Do not add a setup `EXIT` trap that deletes this file: later phases would receive a path to a missing credential. An `EXIT` cleanup trap is appropriate only when every consumer of the temporary file runs inside that same script. Remove credential files after their final use and never commit them.

## Testing Your Setup

Ask your workspace Admin or [Devplan](mailto:info@devplan.com) for access to the development settings for your configured Cloud Run workspace. Where available, **Test setup** runs repository setup without coding; its history shows the result.

| Problem | What to check |
| --- | --- |
| Setup is skipped | Check that `.devplan/run/setup.sh` is committed in the repository and revision used by the run. |
| A command is missing during coding | Check the persisted `PATH`, not only whether the command worked in the setup shell. |
| Permission denied | Check that the script and referenced files are readable and that invoked programs have the required permissions. |
| A credential is missing | Check the workspace secret name, access, and any credential file's lifetime. Do not print its value. |

Keep setup repeatable and log progress without credentials. See [Secrets Management](/secrets-management) for storage and exposure handling, or [Running Tasks](/running-tasks) for the run lifecycle.

{/* Preserve links to sections consolidated in this guide. */}
<span id="database-connections" />
<span id="cloud-provider-credentials" />
<span id="language-version-management" />
<span id="python" />
<span id="nodejs" />
<span id="go" />
<span id="java" />
<span id="complete-example-setup-scripts" />
<span id="nodejs--postgresql-project" />
<span id="python--aws-services-project" />
<span id="go--private-modules-project" />
<span id="using-the-ui" />
<span id="common-issues" />
<span id="best-practices" />
<span id="1-fail-fast" />
<span id="2-log-progress" />
<span id="3-validate-required-secrets" />
<span id="4-keep-scripts-idempotent" />
<span id="5-clean-up-sensitive-files" />
<span id="next-steps" />
