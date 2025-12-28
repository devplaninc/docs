---
title: "Working with Git Worktrees"
sidebar_position: 4
---

# Working with Git Worktrees

*How Devplan CLI uses git worktrees to help you work on multiple tasks in parallel*

Devplan CLI uses git worktrees to let you work on multiple tasks at the same time without the hassle of cloning repositories multiple times or constantly switching branches. This guide explains what worktrees are and how to use them effectively with Devplan.

## What are Git Worktrees?

Git worktrees allow you to check out different branches in separate directories, all connected to the same repository. Think of it as having multiple workspaces for the same project, where each workspace can have a different branch checked out.

**Traditional Workflow Problems:**
- Need to clone the repo multiple times → wastes disk space
- Switching branches → loses your current work-in-progress
- Can't compare branches side-by-side → difficult to reference code

**With Worktrees:**
- One main repository with multiple work directories
- Each directory has its own branch checked out
- All share the same git history → saves disk space
- Switch between tasks by opening different folders

:::tip Learn More About Git Worktrees
For a complete understanding of git worktrees, see the [official Git documentation](https://git-scm.com/docs/git-worktree).
:::

## How Devplan Organizes Your Work

When you use Devplan CLI, your repositories and tasks are organized in a clean structure:

```
~/devplan/workspace/features/
├── authentication_system/
│   ├── webapp/                    # Base repository
│   ├── implement_login_flow/      # Task 1 (separate worktree)
│   ├── add_password_reset/        # Task 2 (separate worktree)
│   └── oauth_integration/         # Task 3 (separate worktree)
```

**What This Means:**
- **Base Repository** (`webapp/`): The main repository that stores all git history
- **Task Worktrees**: Each task gets its own folder with its own branch checked out
- All worktrees share the same git data from the base repository
- You can work on multiple tasks simultaneously without interference

## Working on Multiple Tasks in Parallel

One of the biggest advantages of worktrees is the ability to work on multiple tasks simultaneously without conflicts or context switching.

### Example Scenario

Imagine you're working on three different features:

1. **Login Flow** - You're in the middle of implementing authentication
2. **Password Reset** - Waiting for code review feedback
3. **OAuth Integration** - Just starting research

With worktrees, you can:
- Keep all three tasks open in different IDE windows
- Switch between them instantly without losing context
- Run different branches simultaneously for testing
- Compare implementations side-by-side

### Benefits of Parallel Work

**Context Preservation:**
- Each worktree maintains its own uncommitted changes
- Your IDE state is preserved per worktree
- No need to stash or commit work-in-progress when switching tasks

**Independent Environments:**
- Each task has its own working directory
- Build artifacts don't interfere with each other
- Can run tests independently
- Different npm packages or dependencies per branch (if needed)

## Using Devplan CLI Commands

### Start Working on a Task

To start working on a task, you can use either:

Start implementation from a spec**
```bash
devplan spec start --company <id> --task <id> --ide cursor
```

**What happens:**
1. Devplan clones the repository (if not already cloned) or reuses the existing base repository
2. Creates a worktree with a branch for your task/feature
3. Opens the worktree in your selected IDE

**First Time:**
- If it's the first task for a project, Devplan clones the base repository
- Then creates a worktree with a branch for your task
- Opens the worktree in your selected IDE

**Subsequent Tasks:**
- Devplan reuses the existing base repository
- Creates a new worktree for each new task
- Each worktree gets its own branch

### Switch Between Tasks

Use the `switch` command to move between your existing worktrees:

```bash
devplan switch --ide cursor
```

**Features:**
- Shows all your active worktrees with their full paths
- Indicates which ones have uncommitted changes with a `*` indicator (excluding untracked files)
- Displays repository names for easy identification
- Opens the selected worktree in your IDE
- No branch switching needed - each worktree already has its branch checked out

### Clean Up Finished Tasks

When you're done with a task, use `clean` to remove worktrees:

```bash
devplan clean
```

**What it does:**
- Lists all your worktrees with full paths and uncommitted change indicators
- Warns you if there are uncommitted changes before deletion
- Asks for confirmation before deletion
- Properly removes the worktree and cleans up git references
- Automatically removes empty parent project directories to keep your workspace clean

## Syncing Changes from Worktrees

Once you've completed work in a worktree, you need to sync your changes back. There are two workflows depending on whether you're working on single or multiple tasks.

### Primary Workflow: Merge to Base Branch (Recommended for Multiple Tasks)

This approach is recommended when you need to create PRs for multiple tasks simultaneously. It allows you to consolidate and review multiple feature branches before creating pull requests.

**1. Commit Your Changes in the Worktree:**
```bash
cd ~/devplan/workspace/features/authentication_system/implement_login_flow/

# Work on your code and commit as usual
git add .
git commit -m "Implement login form validation"
git commit -m "Add session management"
```

**2. Switch to the Base Branch:**
```bash
# Use devplan switch to go back to your base repository if you are using a visual IDE
devplan switch

# or manually switch to a base branch `cd ~/devplan/workspace/features/<project>/<repo_name>/`
```

**3. Merge Changes from the Worktree:**
```bash
# Now in the base repository
git merge implement_login_flow
```

**4. Push Changes to the Remote:**
```bash
# Push the base branch with merged changes
git push origin authentication_system
```

**Why This Approach?**
- Consolidate multiple feature branches before creating a PR
- Review all changes together in the base branch
- Clean up and organize commits before pushing
- Create a single comprehensive PR from multiple tasks

### Alternative: Direct PR from Worktree

For single-task workflows, you can create a PR directly from the worktree:

**1. Commit and Push from Worktree:**
```bash
cd ~/devplan/workspace/features/authentication_system/implement_login_flow/

# Commit your changes
git add .
git commit -m "Implement login flow"

# Push your worktree's branch to remote
git push origin implement_login_flow
```

**2. After PR is Merged:**

Once your PR is merged, update your base repository:

```bash
# Go to the base repository
cd ~/devplan/workspace/features/authentication_system/webapp/

# Fetch and pull latest changes
git fetch origin
git pull origin main
```

### Syncing Branches Between Worktrees

All your worktrees share the same git history, so branches and commits are immediately visible across all of them.

**Example:**
```bash
# In worktree 1: commit and push a branch
cd ~/devplan/workspace/features/myproject/feature-1/
git commit -m "Add feature"
git push origin feature-1

# In worktree 2: fetch to see the new branch
cd ~/devplan/workspace/features/myproject/feature-2/
git fetch
# The feature-1 branch is now available here too!
git log origin/feature-1  # You can see the commits
```

**Key Point:** You don't need to do anything special - all worktrees automatically share:
- All local branches
- All remote references
- All commits and history
- All tags

## Key Benefits

### 1. Work on Multiple Tasks Without Switching Branches

No more:
```bash
git stash
git checkout other-branch
# do work
git checkout original-branch
git stash pop
```

Instead, just open a different folder - your other task is already there with everything set up.

### 2. Easy Synchronization

All worktrees share the same git database, so:
- `git fetch` in one worktree benefits all others
- Branches created in one worktree are immediately available in others
- No need to clone updates multiple times

### 3. Compare Code Across Branches

Want to reference how you did something in another branch? Just open that worktree in another editor window and look at the code.

### 4. Safe Experimentation

Need to test something risky?
- Create a new worktree with a test branch
- Try your experiment
- If it fails, just delete the worktree - your other work is untouched

## Best Practices

### 1. Use `devplan clean` for Cleanup

Always use `devplan clean` instead of manually deleting worktree folders:
- It properly unregisters the worktree with git
- Checks for uncommitted changes
- Cleans up administrative files

### 2. Keep Worktrees for Active Tasks Only

Don't accumulate dozens of old worktrees:
- Clean up after merging a PR
- Remove worktrees for cancelled or abandoned tasks
- Use `devplan clean` regularly

### 3. Fetch in the Base Repository

For the most efficient workflow:
```bash
cd ~/devplan/workspace/features/myproject/myrepo/
git fetch origin
```

This updates all remote references for all worktrees at once.

### 4. One Branch Per Worktree

Git enforces this: you can't check out the same branch in multiple worktrees simultaneously. Devplan handles this automatically by creating unique branches for each task.

## Common Questions

### Can I have the same branch in two worktrees?

No, git doesn't allow the same branch to be checked out in multiple worktrees at the same time. This prevents conflicts. If you try, you'll get an error.

### What happens if I delete the base repository?

All worktrees connected to it will become invalid. Always keep the base repository and only delete worktrees using `devplan clean`.
Only delete a base repository when you're done with all its worktrees/tasks.

### Can I use regular git commands in worktrees?

Yes! Worktrees are just regular git repositories. All standard git commands work normally:
- `git status`, `git add`, `git commit`
- `git push`, `git pull`, `git fetch`
- `git branch`, `git checkout`, `git merge`

### Do I need to do anything special to sync changes?

No, changes are automatically synchronized because all worktrees share the same git database. Just use normal git commands (`git fetch`, `git pull`, etc.).

## Related Documentation

- [Spec Driven Development Workflow](/dev/spec-driven-dev) - How Devplan generates specs and tasks
- [Getting Started](/getting-started) - Initial setup and installation
- [Core Workflow](/core-workflow) - Understanding Devplan's full workflow

---

**Questions or Issues?**
- Email: info@devplan.com
