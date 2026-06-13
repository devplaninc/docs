---
title: Today
sidebar_label: Today
sidebar_position: 1
---

# Today

Your daily landing page in Devplan. **Today** surfaces AI-generated digests of what's changing across your workspace so you can start each day with context instead of digging through tools.

---

## How to access

Click **Today** at the top of the left sidebar. This is the default page when you open your workspace.

---

## Key features

- **Personalized greeting** — greets you by name with a summary of what's surfacing today
- **Workspace / Personal toggle** — switch between a workspace-wide digest and a personal view
- **Daily digest card** — shows the latest digest with generation timestamp and status
- **Personalize** — customize what your personal Daily Digest focuses on (see below)
- **Previous digests** — browse past daily digests with quick status indicators
- **Evidence pills** — inline source citations in digest content (see below)

---

## Evidence pills

Daily digest content includes inline **evidence pills** — small rounded badges embedded in the text showing stacked source icons (GitHub, Slack, Jira, etc.) and a count like `3 sources`.

Click an evidence pill to open a **Sources** flyout on the right side of the screen. The flyout lists each reference behind that claim:

- **Source icons and rationale** — see which integration produced each reference and why it was cited
- **Origin links** — open the original PR, Slack thread, ticket, or document
- **Details toggle** — expand a row to read captured content, metadata, and linked artifacts

Evidence pills appear wherever the digest cites connected sources. Use them to verify claims and jump directly to the underlying material.

---

## Personalize your Daily Digest

Click **Personalize** on the daily digest card to open the customization panel. This controls how your **personal** Daily Digest is generated — separate from the workspace-wide digest.

### Your instructions

Write free-form instructions telling Devplan what to focus on, how to format output, and what to include or exclude. For example, you can specify:

- Tone and length (e.g. "be brief, no boilerplate")
- Formatting rules (e.g. bold titles followed by a colon on each bullet)
- What to prioritize (e.g. actionable risks, high-confidence items only)
- How to link evidence (e.g. include PR links inline)

Click **Show default** to view the global default instruction Devplan uses as a starting point. You can copy it and adapt it for your own preferences.

### Generate on demand

Click **Generate** to create a new personal Daily Digest for the last 24 hours. Devplan emails you when it's ready. If you've changed your instructions but haven't saved yet, clicking **Generate** saves them first, then starts generation.

:::note
You must add instructions before **Generate** is enabled.
:::

### Communication settings

Use **Manage communication settings** in the panel footer to control whether you receive Daily Digest emails. This opens your [Preferences](/settings/preferences) for the workspace.

### Save or cancel

Click **Save** to persist your instructions without generating a new digest. Click **Cancel** to close the panel without saving changes.

---

## Common workflows

1. Open **Today** when you start your workday to review the latest digest.
2. Toggle between **Workspace** and **Personal** to see the view most relevant to you.
3. Click a previous digest to review what changed on an earlier date.
4. Click an **evidence pill** in the digest to inspect the sources behind a claim.
5. Click **Personalize** to adjust what your personal digest covers.
6. Edit your instructions, then click **Generate** to get a fresh digest emailed to you.

---

## Related pages

- [Updates](/platform/updates) — detailed feed of product catalog changes
- [Insights](/platform/insights) — synthesized takeaways from workspace signals
- [Ask Devplan](/platform/ask-devplan) — ask follow-up questions about recent activity
- [Workspace Daily Digest](/settings/workspace-daily-digest) — workspace-wide digest settings (admin)
- [Preferences](/settings/preferences) — per-user email delivery settings
