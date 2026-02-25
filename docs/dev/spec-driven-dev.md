---
title: Spec Driven Development
---

# Spec Driven Development

Devplan provides a scalable, easy-to-use workflow for spec-driven development. This document describes how it works.

## Main Concepts

1. **Specs**: documents used as input into the SDD flow as well as docs produced as output of the implementation.
2. **AI Coding Agent**: AI-powered IDE/CLI installed locally on the developer's machine, e.g. Claude Code, Cursor, Codex.
3. **SDD Workflow**: a series of operations performed by the AI coding agent as part of implementation. Some steps produce output specs.
4. **Devplan CLI**: a command line interface that connects your IDE to the specs produced by Devplan and provides tooling for orchestration, status reporting, cloning code, and more.

---

## Specs

### Input Specs

Input specs include the **Product Brief**, **Technical Brief**, **User Stories**, and **Tasks**. These are produced by Devplan as part of a project and serve as input to the SDD workflow.

| File | Description |
|---|---|
| `[Project]/prd.md` | Latest version of the Product Brief |
| `[Project]/tech_brief.md` | Latest version of the Technical Brief |
| `[Project]/[Story]/requirements.md` | User story requirements |
| `[Project]/[Story]/[Task]/requirements.md` | High-level task requirements |
| `[Project]/[Story]/[Task]/instructions.md` | Detailed task instructions |

The per-task `instructions.md` file is where the most implementation-relevant detail lives. It covers areas to research before coding, related projects and tasks the agent can use for context, and general guidelines about testing, scoping, and relevant code areas. Combined, the input specs allow an AI coding agent to ramp up quickly and deliver a focused implementation.

### Output Specs

Output specs are produced while a task is being implemented. They capture research results, a detailed implementation plan, coding notes, and AI code review feedback.

| File | Description |
|---|---|
| `[Project]/[Story]/[Task]/research.md` | Learnings from initial task research |
| `[Project]/[Story]/[Task]/plan.md` | Detailed coding plan |
| `[Project]/[Story]/[Task]/code.md` | Learnings from the coding phase |
| `[Project]/[Story]/[Task]/review.md` | Automatic code review feedback |
| `[Project]/[Story]/[Task]/findings.md` | Full implementation analysis and important findings |

### Specs directory structure

```
specs
├── [Project 1]
│   ├── [User Story 1]
│   │   ├── [Task 1.1]           # Implemented task:
│   │   │   ├── requirements.md  #  input : high level task requirements
│   │   │   ├── instructions.md  #  input : detailed task instructions
│   │   │   ├── research.md      #  output: learnings from initial task research
│   │   │   ├── plan.md          #  output: detailed coding plan
│   │   │   ├── code.md          #  output: learnings from the coding phase
│   │   │   ├── review.md        #  output: code review results
│   │   │   └── findings.md      #  output: full implementation analysis
│   │   ├── [Task 1.2]           # Not implemented task
│   │   │   ├── instructions.md
│   │   │   └── requirements.md
│   │   └── requirements.md      # input : user story requirements
│   ├── prd.md                   # input : product requirements for a project
│   └── tech_brief.md            # input : technical requirements for a project
└── focus.md                     # input : description of the current task
```

---

## AI Coding Agent

Devplan currently supports [Claude Code](https://www.claude.com/product/claude-code) as the AI coding agent for the SDD workflow.

---

## SDD Workflow

The default SDD workflow consists of the following steps:

1. **Research**: systematically investigates your codebase to understand implementation requirements
2. **Planning**: creates a detailed implementation plan based on research findings
3. **Coding**: implements the planned changes with progress tracking
4. **Review**: performs comprehensive code quality analysis
5. **Address Review**: systematically fixes identified issues
6. **Full Workflow**: runs the entire SDD workflow from research to review autonomously

---

## CLI Installation

```bash
brew install devplaninc/devplan/devplan
```

---

## How To Use

### Prerequisites

1. Devplan CLI is installed.
2. Claude Code is installed and logged in.
3. A project is created in Devplan with tasks generated for the user stories.

### Start Implementation

1. Open a project in Devplan.
2. Navigate to the **Development** tab and click **Start** for the task you want to implement. The button copies a Devplan CLI command to your clipboard. Make sure Claude Code is selected as the IDE.


3. Open a terminal and paste the command. It will look like:

   ```bash
   devplan spec start -c <company id> -i claude --task <task id>
   ```

4. The command will: clone the repository into `~/devplan/workspace/feature/<branch_name>/`, set up Claude Code commands for the SDD workflow, download input specs for the task into the `specs` directory, and start Claude Code in that folder.

5. Run `/start` in Claude Code to begin implementation. The command starts working on the task autonomously, following the SDD workflow, and reports progress back to Devplan.


---

## FAQ

**Why are these specific commands provisioned?**

Devplan's SDD workflow reflects software development best practices that have existed for decades. An engineer (human or AI) should understand the problem space first, then plan which areas of the codebase to update, then implement with proper test coverage, then review and address issues. That is exactly the flow Devplan provides. AI also allows capturing all important steps, findings, and decisions automatically and storing them alongside the codebase.

**Why should all output specs be committed?**

While not strictly required, output specs provide invaluable context for future iterations. If specs for implementing V1 of a feature are committed, the AI agent knows exactly how V1 was approached, what the challenges were, and what decisions were made. This leads to higher-quality decisions when implementing V2.
