---
title: "Cloud Run Overview"
sidebar_position: 1
---

# Cloud Run

Devplan's **Cloud Run** feature allows you to execute task implementations in the cloud using a cutting-edge Codex agent. Instead of running AI-assisted coding locally, you can click the **Run** button and let Devplan handle the entire implementation process - from code generation to Pull Request creation.

:::note Beta Feature
Cloud Run is currently in beta.
:::

## How It Works

When you click **Run** on a task, Devplan:

1. **Starts a cloud job** that spins up a Codex agent in an isolated environment
2. **Executes your setup script** (`.devplan/run/setup.sh`) if provided
3. **Injects secrets** as environment variables for secure access to external services
4. **Implements the task** based on the task specifications and instructions
5. **Creates a Pull Request** with the implemented changes
6. **Reports progress** in real-time through the Devplan UI

## Key Components

### [Setup Scripts](./setup)

Configure your cloud environment before task execution. Install dependencies and set up everything needed to build and test your code.

### [Running Tasks](./run)

Execute tasks in the cloud and monitor their progress through the Devplan UI.

### [Addressing PR Comments](./address-comments)

After reviewers leave comments on your PR, trigger the agent to address them automatically.

### [Secrets Management](./secrets)

Securely store and inject sensitive credentials into your cloud runs.

## Quick Start

1. **Configure secrets** (if needed) in Settings > Development
2. **Create a setup script** at `.devplan/run/setup.sh` in your repository
3. **Test your setup** using the "Test setup" feature
4. **Click Run** on any task to start cloud execution

## Next Steps

- **New to Cloud Run?** Start with [Setup Scripts](./setup) to prepare your environment
- **Ready to execute?** Learn about [Running Tasks](./run)
- **Need credentials?** Configure [Secrets Management](./secrets)

**Questions?** Contact support at info@devplan.com
