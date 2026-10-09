---
title: "Working with Git Worktrees"
sidebar_position: 4
---

# Working with Git Worktrees

Devplan can create a separate Git worktree for each task. Open each folder to work on its branch without changing another task's checkout.

## What are Git Worktrees?

Worktrees share Git history and branch references, but each has its own checked-out files and local edits. A commit becomes visible in the shared history; it does not change files on another worktree's branch. Merge or rebase deliberately when you want to bring changes onto another branch.

With a single checkout, you may need to commit or stash changes before switching branches. Separate worktrees let you leave those changes in place while working elsewhere. They do not isolate shared services, databases, build caches, or ports.

## How Devplan Organizes Your Work

In the default task workflow, Devplan keeps a base repository and task worktrees under a project folder:

```text
~/devplan/workspace/features/<project>/
├── <repository>/    # Base repository
├── <task-one>/      # Task worktree
└── <task-two>/      # Task worktree
```

Use the paths printed by the CLI. User-story workflows and custom workspace paths can have a different layout.

## Using Devplan CLI Commands

### Start Working on a Task

Copy the CLI command from the work's implementation controls in Devplan. A task command looks like:

```bash
devplan specs start --company <id> --task <id> --ide claude
```

The CLI prepares the checkout, downloads specifications, and starts the assistant. See the [CLI reference](/cli-cheat-sheet) for using an existing checkout or starting a user story.

### Switch Between Tasks

Run `devplan switch` and select the folder you want to open. Each worktree keeps its own checked-out branch. The CLI's change indicator excludes untracked files; use `git status --short` inside the folder for a fuller view.

### Clean Up Finished Tasks

Before cleanup, run `git status --short` in the folder and save any work you need, including untracked files. Once the work is saved and the worktree is no longer needed, run `devplan clean` and select it.

Cleanup deletes the selected folder after confirmation. Its extra local-change warning excludes untracked files. Do not use that warning as the only check that your work is saved.

Keep the base repository while any linked worktrees depend on it. Removing it makes those worktrees unusable.

## Syncing Changes from Worktrees

Commit and push from the task branch, then open a pull request according to your team's workflow. Worktrees do not require combining several tasks into one pull request. For dependent tasks, agree on an integration branch or stacked pull requests with your team.

Fetch remote updates from any linked worktree:

```bash
git fetch origin
git status --short --branch
```

Check which branch you are on before updating it. Choose the intended checkout and merge, rebase, or fast-forward according to your team's workflow. Changing to the base repository's directory does not switch it to `main`; `git pull origin main` would integrate the fetched branch into whichever branch is currently checked out.

## Common Questions

### Can I have the same branch in two worktrees?

Git normally prevents this. Use a separate branch for each active worktree.

### Can I use regular git commands in worktrees?

Yes. Commit, push, fetch, merge, and review changes as you would in a regular checkout. Remember that branch references are shared while working files are separate.

## Related Documentation

- [Git's worktree documentation](https://git-scm.com/docs/git-worktree)
- [CLI Cheat Sheet](/cli-cheat-sheet)
- [Spec Driven Development](/spec-driven-development)

{/* Preserve links to sections consolidated in this guide. */}
<span id="working-on-multiple-tasks-in-parallel" />
<span id="example-scenario" />
<span id="benefits-of-parallel-work" />
<span id="primary-workflow-merge-to-base-branch-recommended-for-multiple-tasks" />
<span id="alternative-direct-pr-from-worktree" />
<span id="syncing-branches-between-worktrees" />
<span id="key-benefits" />
<span id="1-work-on-multiple-tasks-without-switching-branches" />
<span id="2-easy-synchronization" />
<span id="3-compare-code-across-branches" />
<span id="4-safe-experimentation" />
<span id="best-practices" />
<span id="1-use-devplan-clean-for-cleanup" />
<span id="2-keep-worktrees-for-active-tasks-only" />
<span id="3-fetch-in-the-base-repository" />
<span id="4-one-branch-per-worktree" />
<span id="what-happens-if-i-delete-the-base-repository" />
<span id="do-i-need-to-do-anything-special-to-sync-changes" />
