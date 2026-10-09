---
title: Cloud Task Execution
slug: /run-button
unlisted: true
---

# Cloud Task Execution

:::note Cloud Run reference
This guide is for existing Cloud Run users. [Contact Devplan](mailto:info@devplan.com) to confirm availability and setup for your workspace. For the current coding-assistant setup, start with [Devplan MCP](/mcp-integration).
:::

For configured workspaces, **Run** starts a hosted Codex agent to implement a task and open a pull request. Availability depends on workspace access and the task workflow.

---
## Quick Start

1. Confirm Cloud Run access and the development-settings entry point with Devplan.
2. Ask a workspace Admin to configure any required [secrets](/secrets-management).
3. If your repository needs extra setup, commit `.devplan/run/setup.sh` and test it using the available setup controls.
4. Open an implementation task and select **Run** when the action is available.
---

## How It Works

```mermaid
graph LR
    A[Click Run] --> B[Cloud Environment]
    B --> C[Credentials Available]
    C --> D[Run setup.sh]
    D --> E[Codex Agent]
    E --> F[Pull Request]
    F --> G[Devplan UI]
```

The agent works through five phases — each visible in the run log:

```mermaid
graph LR
    A[Plan] --> B[Code] --> C[Review] --> D[Address Review] --> E[Prepare Commit]
```

Duration depends on the task, repository setup, and available capacity.

---

## Setup Scripts

Create `.devplan/run/setup.sh` in your repository to prepare the cloud environment before the agent starts work. Common uses: installing dependencies, configuring language versions, setting up database connections for tests, and accessing private package registries.

```bash
#!/bin/bash
set -e

npm ci

: "${DATABASE_URL:?Configure the DATABASE_URL workspace secret}"
echo "NODE_ENV=test" >> "$DEVPLAN_ENV"
```

Test the script using the setup controls available for your configured workspace. See [Setup Scripts](/setup-scripts) for environment handling and troubleshooting.

---

## Secrets

Workspace Admins manage credentials in the development settings provided for the workspace. Stored values are encrypted, hidden in the UI after creation, and supplied as environment variables. Devplan masks recognized values in logs, but transformed values may not be masked. Avoid printing credentials.

Use uppercase names with underscores (`DATABASE_URL`, `GITHUB_TOKEN`, `AWS_ACCESS_KEY_ID`). Reference them in your setup script as standard environment variables.

:::warning
Check dependencies before deleting a secret. Future runs that need it may fail. Revoke or rotate credentials at their provider when needed.
:::

---

## Monitoring Runs

After clicking **Run**, the button becomes a live status indicator. Click it to open the **Runs page** showing run history with status, duration, and PR links. Click any run to view live logs broken down by phase.

Devplan retries recoverable failures when it can resume the session. Check the run logs for attempts and final status.

---

## Addressing PR Comments

After the agent creates a PR, reviewers can leave comments as normal. To have the agent address them automatically, leave a comment with your configured trigger keyword:

```
/devplan address comments
```

The trigger is configured in the workspace development settings. Any comment containing the configured keyword can trigger the agent; the words after it are optional. Finish your review before posting the trigger. See [Addressing PR Comments](/addressing-pr-comments).

---


Questions: [info@devplan.com](mailto:info@devplan.com)
