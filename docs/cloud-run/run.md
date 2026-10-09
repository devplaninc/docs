---
title: "Running Tasks"
slug: /running-tasks
sidebar_position: 3
unlisted: true
---

# Running Tasks

:::note Cloud Run reference
This guide is for existing Cloud Run users. [Contact Devplan](mailto:info@devplan.com) to confirm availability and setup for your workspace. For the current coding-assistant setup, start with [Devplan MCP](/mcp-integration).
:::

Execute tasks in the cloud and monitor their progress through the Devplan UI.

## Starting a Run

1. Open the implementation tasks for your project
2. Find the task you want to implement
3. Select **Run** if it is available for your workspace and task

A dialog opens confirming the cloud execution. Click **RUN** to start.

### Re-running Tasks

If a task already has a previous run, you can still start a new one. This creates a fresh implementation and a new Pull Request, leaving the previous run intact.

## Job Execution Lifecycle

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Queued    │ ──▶ │  Starting   │ ──▶ │   Running   │ ──▶ │  Complete   │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
                                              │
                                              ▼
                                        ┌─────────────┐
                                        │   Failed    │
                                        └─────────────┘
```

### Execution Phases

After environment setup, the Codex agent executes:

1. **Plan** - Analyzes task specs and creates an implementation plan
2. **Code** - Implements the changes
3. **Review** - Self-reviews the implementation
4. **Address Review** - Fixes any identified issues
5. **Prepare Commit** - Commits changes and opens a Pull Request

## Monitoring Progress

After starting a run, the Run button becomes a status indicator. Click it to access the **Runs page** showing run history with status, duration, and PR links.

Click on a specific run to view **Run Details** including live logs.

### Log Format

```
[6:18:10 PM] [prepare-commit] **Preparing commit message and committing**
[6:18:22 PM] [prepare-commit] **Fixing git commit quoting and config**
```

Phases in logs: `setup`, `plan`, `code`, `review`, `address-review`, `prepare-commit`

## Automatic Retries

Devplan retries recoverable failures, such as agent inactivity or missing expected output, when it can resume the session. Check the run logs for attempts and final status. Duration depends on the task, repository setup, and available capacity.

## Pull Request Output

A successful run creates a PR with the implemented changes. After completion:

1. Review the changes - AI implementation may need adjustments
2. Run additional tests locally
3. Request human review before merging

Once you have review comments, see [Addressing PR Comments](/addressing-pr-comments) to have the agent address them automatically.

## FAQ

**Can I cancel a running job?**
Jobs run to completion once started. Contact support if stuck.

**Can multiple tasks run simultaneously?**
Yes, they queue and execute based on available capacity.

**What happens to my branch?**
Cloud Run creates a new branch for each run, used for the Pull Request.

## Next Steps

- Configure [Secrets Management](/secrets-management) for credentials
- Review [Setup Scripts](/setup-scripts) for environment configuration
- Learn about [Addressing PR Comments](/addressing-pr-comments)

**Questions?** Contact support at info@devplan.com
