---
title: Spec Driven Development
slug: /spec-driven-development
---

# Spec Driven Development

Use project context to guide implementation in an AI coding assistant. Start with [Devplan MCP](/mcp-integration) for access to workspace evidence and planning context. The CLI-based specification workflow below remains available for projects and workspaces configured to use it.

## Start with Devplan MCP

Connect [Devplan MCP](/mcp-integration) to your coding assistant and authorize the intended workspace. Then:

1. Open a project in Devplan and select **Execution**.
2. Find the user story you want to implement and select **Start**.
3. Choose **Claude**, **Codex**, or **Cursor**, then select **Copy**.
4. Open a terminal in the repository where you want to work and run the copied command.

The assistant can retrieve additional project context through MCP. Review the scope and acceptance criteria with it before implementation.

To download specifications and use the CLI workflow below, enable **CLI mode** in the same panel.

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

The MCP handoff supports compatible coding assistants such as Claude Code and Codex. The provisioned CLI workflow described here uses [Claude Code](https://www.claude.com/product/claude-code); use the options offered by your installed CLI for other supported clients.

---

## SDD Workflow

The default SDD workflow consists of the following steps:

1. **Research**: systematically investigates your codebase to understand implementation requirements
2. **Planning**: creates a detailed implementation plan based on research findings
3. **Coding**: implements the planned changes with progress tracking
4. **Review**: reviews the code changes
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
2. Open the implementation controls for the work you want to implement and choose the CLI path. Select Claude Code for the workflow described here, then copy the generated command.


3. Open a terminal and paste the command. It will look like:

   ```bash
   devplan spec start -c <company id> -i claude --task <task id>
   ```

4. The command prepares a local workspace, downloads specifications, and launches Claude Code with the workflow's starting instruction. Use the workspace path printed by the CLI. The generated command may target a task or an entire user story.

5. Follow the assistant's progress and review its work. If your launch method only opens the assistant, use the start instruction provided for that workflow.


---

## FAQ

**Why are these specific commands provisioned?**

The SDD workflow covers research, planning, implementation, testing, and review. It can save work logs and findings alongside the specifications; review them for missing or incorrect context.

**Why should all output specs be committed?**

Committing output specs preserves the research, plan, and decisions behind a change. Future work can refer to those files to understand how the feature was implemented.
