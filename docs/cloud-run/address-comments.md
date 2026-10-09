---
title: "Addressing PR Comments"
slug: /addressing-pr-comments
sidebar_position: 5
unlisted: true
---

# Addressing PR Comments

:::note Cloud Run reference
This guide is for existing Cloud Run users. [Contact Devplan](mailto:info@devplan.com) to confirm availability and setup for your workspace. For the current coding-assistant setup, start with [Devplan MCP](/mcp-integration).
:::

After a Cloud Run creates a Pull Request, reviewers can leave comments as usual. Instead of manually addressing each comment, you can trigger the Codex agent to address them automatically.

## How It Works

1. Reviewers leave comments on the PR as they normally would
2. Once all comments are added, trigger the addressing flow with a special command
3. The Codex agent reads the comments and pushes fixes to the PR branch

## Triggering the Address Flow

When your review is ready, post a comment containing the configured trigger keyword. Any comment containing that keyword can trigger the agent; additional text is optional. For example, if your trigger is `/devplan`:

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

Ask your workspace Admin or [Devplan](mailto:info@devplan.com) for the development-settings entry point for your configured workspace. In **Pull Request Comment Trigger**, save a distinctive keyword such as `/devplan`. Avoid a word likely to appear in ordinary review discussion.

Without a configured trigger, PR comments won't trigger the addressing flow. All team members in the workspace use the same trigger keyword.

## Tips for Effective Comments

The agent works best with comments that are:

- **Specific** - "Add null check for `user.email`" rather than "Handle edge cases"
- **Actionable** - Clear what change is needed
- **Scoped** - Focused on a specific line or function

## Next Steps

- Learn about [Running Tasks](/running-tasks) to create the initial PR
- Configure [Secrets Management](/secrets-management) if your repo needs credentials
- Review [Setup Scripts](/setup-scripts) for environment configuration

**Questions?** Contact support at info@devplan.com
