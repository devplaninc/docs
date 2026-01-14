---
title: "CLI Cheat Sheet"
sidebar_position: 1
---

# CLI Cheat Sheet

Quick reference for the most commonly used Devplan CLI commands.

## Authentication

### `devplan auth`
Authenticate with the Devplan service.

```bash
# Initial authentication (opens browser for login)
devplan auth

# Force re-authentication even if token exists
devplan auth --force
```

| Flag | Short | Description |
|------|-------|-------------|
| `--force` | `-f` | Force reauthentication even if token exists |

## Starting Implementation

### `devplan specs start`
Start implementation of a task in an AI IDE. This is the primary command for beginning work on a Devplan task.

```bash
# Start a task with Claude Code
devplan specs start -c 123 -t task_abc123 -i claude

# Start with Cursor CLI
devplan specs start -c 123 -t task_abc123 -i cursor-cli

# Use existing repository path (skip cloning)
devplan specs start -c 123 -t task_abc123 -i claude -p /path/to/repo

# Specify branch to checkout
devplan specs start -c 123 -t task_abc123 -i claude -b feature/my-branch
```

| Flag | Short | Required | Description |
|------|-------|----------|-------------|
| `--company` | `-c` | Yes | Company ID |
| `--task` | `-t` | Yes | Task ID to implement |
| `--ide` | `-i` | Yes | IDE to use (`claude`, `cursor-cli`) |
| `--path` | `-p` | No | Path to existing repository (skips cloning) |
| `--branch` | `-b` | No | Branch to checkout after workspace setup |

**What it does:**
1. Clones the repository into a workspace folder (or uses provided path)
2. Sets up IDE-specific commands for the SDD workflow
3. Downloads input specs for the task into the `specs` directory
4. Launches the specified IDE

### `devplan specs pull`
Download spec/context files for a task without cloning or launching IDE.

```bash
# Pull specs to current directory
devplan specs pull -c 123 -t task_abc123 -i claude

# Pull specs to specific directory
devplan specs pull -c 123 -t task_abc123 -i claude -p /path/to/output
```

| Flag | Short | Required | Description |
|------|-------|----------|-------------|
| `--company` | `-c` | Yes | Company ID |
| `--task` | `-t` | Yes | Task ID to pull specs for |
| `--ide` | `-i` | Yes | IDE type (`claude`, `cursor-cli`) |
| `--path` | `-p` | No | Output directory (defaults to current directory) |

**Use case:** When you already have the repository cloned and just want to refresh or download the latest specs.

## Workspace Management

### `devplan switch`
List and switch between cloned features by opening them in your preferred IDE.

```bash
# Interactive feature selection (detects installed IDEs)
devplan switch

# Shorthand alias
devplan sw

# Specify IDE directly
devplan switch -i cursor
```

| Flag | Short | Description |
|------|-------|-------------|
| `--ide` | `-i` | IDE to use (e.g., `vscode`, `intellij`, `cursor`, `claude`) |

**Features:**
- Shows all cloned features in your workspace
- Indicates features with uncommitted changes
- Remembers your last used IDE

### `devplan list`
List all cloned features and copy the selected path to clipboard.

```bash
# List all features
devplan list

# Shorthand alias
devplan ls
```

**Features:**
- Displays all cloned features with their paths
- Shows uncommitted changes indicator
- Copies selected feature path to clipboard

### `devplan clean`
Clean up individual repositories from your workspace.

```bash
devplan clean
```

**Features:**
- Lists all cloned repositories in the workspace
- Shows warning for features with uncommitted changes
- Properly handles git worktree removal
- Confirms before deletion

## Other Useful Commands

### `devplan version`
Display the current CLI version.

```bash
devplan version
```

### `devplan update`
Update the CLI to the latest version.

```bash
# Update to latest production version
devplan update

# Update to specific version
devplan update --to=1.2.3

# List available versions
devplan update --list
```

### `devplan prefs reset`
Reset all saved preferences (company, project, git protocol).

```bash
devplan prefs reset
```

## Typical Workflow

1. **Authenticate** (first time only):
   ```bash
   devplan auth
   ```

2. **Start a task** from Devplan UI:
   - Go to Development tab in Devplan
   - Click "Start" on a task (copies command to clipboard)
   - Paste and run in terminal:
   ```bash
   devplan specs start -c 123 -t task_abc123 -i claude
   ```

3. **Switch between features**:
   ```bash
   devplan switch
   ```

4. **Update specs** for current task:
   ```bash
   devplan specs pull -c 123 -t task_abc123 -i claude
   ```

5. **Clean up** when done:
   ```bash
   devplan clean
   ```

## Workspace Structure

When you run `specs start`, repositories are cloned to:
```
~/devplan/workspace/feature/<branch_name>/
```

Specs are downloaded to a `specs` directory within the repository:
```
specs/
├── [Project]/
│   ├── prd.md
│   ├── tech_brief.md
│   └── [User Story]/
│       ├── requirements.md
│       └── [Task]/
│           ├── requirements.md
│           └── instructions.md
└── focus.md
```

## Learn More

- **[Spec Driven Development](/dev/spec-driven-dev)** - Full SDD workflow documentation
- **[Git Worktrees](/dev/git-worktrees)** - How Devplan uses git worktrees
- **[Getting Started](/getting-started)** - Initial setup guide
