---
title: "Addressing PR Comments"
sidebar_position: 5
---

# Addressing PR Comments

After a Cloud Run creates a Pull Request, reviewers can leave comments as usual. Instead of manually addressing each comment, you can trigger the Codex agent to address them automatically.

:::note Beta Feature
Cloud Run is currently in beta.
:::

## How It Works

1. Reviewers leave comments on the PR as they normally would
2. Once all comments are added, trigger the addressing flow with a special command
3. The Codex agent reads the comments and pushes fixes to the PR branch

## Triggering the Address Flow

Leave a comment on the PR with your configured trigger keyword followed by the address command. For example, if your trigger is `/devplan`:

```
/devplan address comments
```

The agent will:
1. Read all unresolved comments on the PR
2. Analyze what changes are needed
3. Implement the fixes
4. Push a new commit to the PR branch

## Recommended Workflow

For best results:

1. **Complete your review first** - Leave all your comments before triggering the agent
2. **Be specific** - Clear, actionable comments get better results
3. **Trigger once** - After all comments are added, trigger with a single command

Example flow:
```
Reviewer: Leaves comment on line 42: "This should handle the null case"
Reviewer: Leaves comment on line 87: "Missing error logging here"
Reviewer: Leaves comment on line 103: "Use the existing helper function instead"
Reviewer: /devplan address comments
```

## Configuring the Trigger Keyword

The trigger keyword must be configured before using this feature:

1. Go to **Settings** > **Development**
2. Find **Pull Request Comment Trigger**
3. Enter your preferred keyword (e.g., `/devplan`, `/address`, `/fix`)
4. Click **Save**

Without a configured trigger, PR comments won't trigger the addressing flow. All team members in the workspace use the same trigger keyword.

## Tips for Effective Comments

The agent works best with comments that are:

- **Specific** - "Add null check for `user.email`" rather than "Handle edge cases"
- **Actionable** - Clear what change is needed
- **Scoped** - Focused on a specific line or function

## Next Steps

- Learn about [Running Tasks](./run) to create the initial PR
- Configure [Secrets Management](./secrets) if your repo needs credentials
- Review [Setup Scripts](./setup) for environment configuration

**Questions?** Contact support at info@devplan.com
