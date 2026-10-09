---
title: "CLI Cheat Sheet"
slug: /cli-cheat-sheet
sidebar_position: 1
---

# CLI Cheat Sheet

The Devplan CLI downloads specifications and starts a local coding workflow. [Devplan MCP](/mcp-integration) is the primary way to give your coding assistant workspace context; the CLI is also available from your project's implementation controls.

## Start with the generated command

Open the implementation controls for the work you want to implement, choose the CLI option, and copy the command. It contains the workspace and work identifiers for that task or user story.

These examples show the command structure. Replace the example identifiers with the ones Devplan provides. Run `devplan --help` or a subcommand's `--help` to check your installed version.

## Authentication

### `devplan auth`

Authenticate in the browser:

```bash
devplan auth
```

Use `devplan auth --force` to sign in again.

## Starting Implementation

### `devplan specs start`

```bash
# Start a task with Claude Code
devplan specs start -c 123 -t task_abc123 -i claude

# Start a user story (the CLI calls this a feature)
devplan specs start -c 123 -f feature_abc123 -i claude

# Use an existing checkout
devplan specs start -c 123 -t task_abc123 -i claude --path /path/to/repo
```

Provide either `--task` (`-t`) or `--feature` (`-f`). Task mode prepares a repository worktree; feature mode can prepare the repositories referenced by the user story. The CLI downloads the specifications and launches the selected assistant with the workflow's starting instruction.

Use the assistant option offered by the generated command. For example, `claude` selects Claude Code and `cursor-cli` selects Cursor CLI.

### `devplan specs pull`

Download specifications into the current folder without cloning a repository or opening an assistant:

```bash
devplan specs pull -c 123 -t task_abc123 -i claude
```

This also accepts `--feature` instead of `--task`, and `--path` to choose an existing output folder. Save any local edits to generated specification files before pulling again; matching generated files can be overwritten.

## Workspace Management

### `devplan switch`

Use `devplan switch` to select a local workspace and open it in an editor. `devplan sw` is an alias.

### `devplan list`

Use `devplan list` to list local workspaces and copy a selected path. `devplan ls` is an alias.

The change indicators in these commands exclude untracked files. Use `git status --short` inside a checkout to inspect those too.

### `devplan clean`

Run `git status --short` in the folder you plan to remove and save any work you need, including untracked files. Then run:

```bash
devplan clean
```

Select the folder carefully. Cleanup deletes it after confirmation. The CLI's extra warning about local changes excludes untracked files, so the absence of a warning does not mean the folder contains nothing worth keeping.

## Other Useful Commands

### `devplan version`

Run `devplan version` to see your installed version.

### `devplan update`

For a Homebrew installation, update through Homebrew:

```bash
brew upgrade devplaninc/devplan/devplan
```

For a standalone build that supports self-update, run `devplan update`. See [CLI releases](https://github.com/devplaninc/devplan-cli/releases) for available versions.

## Workspace Structure

Use the workspace path printed by the CLI. Default task worktrees live under `~/devplan/workspace/features/<project>/<task>/`; user-story workspaces can contain multiple repositories. A custom workspace or `--path` changes the location.

Generated specifications live under `specs` in the prepared workspace. See [Spec Driven Development](/spec-driven-development) for the input and output files.

## Learn More

- [Spec Driven Development](/spec-driven-development)
- [Working with Git Worktrees](/dev/git-worktrees)
- [Devplan MCP](/mcp-integration)

{/* Preserve links to sections consolidated in this guide. */}
<span id="devplan-prefs-reset" />
<span id="typical-workflow" />
