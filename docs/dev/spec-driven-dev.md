---
title: "Spec Driven Development Workflow"
sidebar_position: 3
---

import devTab from '../assets/screenshots/dev_tab.png';
import taskWorklogBadge from '../assets/screenshots/task_worklog_badge.png';
import worklogModal from '../assets/screenshots/worklog_modal.png';

# Spec Driven Development Workflow

Devplan provides a scalable, easy-to-use workflow for spec-driven development. This document describes how it works.

## Main Concepts

1. **Specs**: include documents used as an input into the SDD flow as well as docs produced as an output of
the implementation.
2. **AI Coding Agent**: AI-powered IDE/CLI installed locally on developer's machine, e.g. ClaudeCode, Cursor, Codex, etc.
3. **SDD Workflow**: a series of operations that are performed by the AI coding agent as part of the implementation.
Some steps of the flow may produce output specs.
4. **Devplan CLI**: a command line interface (CLI) that connects your IDE to the specs produced by Devplan and provides
some extra tooling for orchestration, status reporting, cloning code, etc.

## Specs

### Input Specs
Input specs include **Product Brief**, **Technical Brief**, **User Stories** and **Tasks**. These specs
are produced by Devplan as part of a project and serve as an input to the SDD workflow.

### Output Specs
Output specs include any information produced while a task is being implemented. They typically include 
**research results** covering research of the codebase performed before execution starts; **detailed plan** for
the code implementation for a task; **coding notes** highlighting affected areas, challenges, areas of attention, etc;
**AI code review notes** holding AI-generated feedback about the implementation. 

### Example Specs:

```bash
specs
├── <Project 1>
│   ├── <User Story 1>
│   │   ├── <Task 1.1>           # Implemented task:
│   │   │   ├── requirements.md  #  input : high level task requirements
│   │   │   ├── instructions.md  #  input : detailed task instructions.
│   │   │   ├── research.md      #  output: learnings from initial task research
│   │   │   ├── plan.md          #  output: detailed coding plan
│   │   │   ├── code.md          #  output: learnings from the coding phase
│   │   │   ├── review.md        #  output: code review results
│   │   │   └── findings.md      #  output: full implementation analysis and important findings.
│   │   ├── <Task 1.2>           # Not implemented task             
│   │   │   ├── instructions.md
│   │   │   └── requirements.md
│   │   └── requirements.md      # input : user story requirements
│   ├── <User Story 2>
│   │   ├── <Task 2.1>
│   │   │   ├── instructions.md
│   │   │   └── requirements.md
│   │   └── requirements.md
│   ├── prd.md                   # input : product requirements for a project
│   └── tech_brief.md            # input : technical requirements for a project
└── focus.md                     # input : description of the current task AI agent should focus on
```

Per-task `instructions.md` file is where a lot of interesting things will be mentioned:
1. Areas that need to be researched before code implementation.
2. Other projects, stories and tasks this task is based on, which allows the agent to quickly gather context about
how the previous versions of the related functionality were implemented.
3. General guidelines about testing, scoping and relevant code areas.

All the Input Specs combined allow AI coding agent to ramp up very quickly and deliver a focused implementation based
on previous learnings.

## AI Coding Agent

As of now, Devplan only supports [ClaudeCode](https://www.claude.com/product/claude-code) as an AI coding agent for the
SDD workflow.

## SDD Workflow

Devplan provides a comprehensive autonomous development workflow that takes your development tasks from initial 
research through final implementation and code review. The system operates through a series of interconnected 
commands that work together to autonomously deliver high-quality code implementations.

The default SDD workflow consists of the following steps:

1. **Research**: Systematically investigates your codebase to understand implementation requirements
2. **Planning**: Creates detailed implementation plans based on research findings
3. **Coding**: Implements the planned changes with progress tracking
4. **Review**: Performs comprehensive code quality analysis
5. **Address Review**: Systematically fixes identified issues and improvements
6. **Full Workflow**: Runs the entire SDD workflow from research to review autonomously.

## Devplan CLI
Devplan CLI provides a convenient way to set up AI coding agent to implement a Devplan task
using the SDD workflow described above.

Use the following command to install the CLI:
```bash
brew install devplaninc/devplan/devplan
```

## How To Use

### Prerequisites

1. You have Devplan CLI installed.
2. You have ClaudeCode installed and logged in.
3. You have a project created in Devplan and tasks for the User Stories are generated.

### Start Implementation

To start implementation of a Devplan task using SDD workflow:

1. Open a project in Devplan
2. Navigate to a Development Tab and click `Start` for a task that you want to start implementing. The button will 
copy a Devplan CLI command to your clipboard. **Make sure that ClaudeCode is selected as an IDE**.
    
    <img src={devTab} alt="Example banner" style={{width: '600px'}}/>
3. Open a terminal and paste and launch a command there. The command will look like:
    ```
    devplan spec start -c <company id> -i claude --task <task id>
    ```
4. The command will:
   - clone a repository into a special folder (in `~/devplan/workspace/feature/<branch_name>`);
   - set up ClaudeCode commands supporting the SDD workflow;
   - download the input specs for the given task into the `specs` directory;
   - start ClaudeCode in that folder.
5. Now you can run `/start` command in ClaudeCode to start the implementation. The command will automatically
start working on the task and follow the SDD workflow. It will also report the progress back to Devplan which you
can see in the UI.
   <img src={taskWorklogBadge} alt="Example banner" style={{width: '600px'}}/>
   
   <img src={worklogModal} alt="Example banner" style={{width: '600px'}}/>

## FAQ

### Why are these specific commands provisioned?

Devplan's version of SDD comes with a set of AI IDE commands reflecting best practices for software development that
existed for decades now. A software engineer (whether human or AI) should understand the problem space first and
familiarize themselves with the existing solution, then plan which areas of the codebase need to be updated,
then implement the code with proper tests coverage. After that, the code needs to be reviewed and any important issues
should be addressed. That's exactly the flow that Devplan provides.

In addition to that, AI now allows to capture all the important steps, findings and decisions automatically and store
them along with the codebase.

### Why should all the output specs be committed?

While committing output specs is not strictly necessary, they provide invaluable context for AI agent to iterate on.
E.g. if output specs for implementing V1 of a feature are committed, they will allow AI agent to know exactly how
V1 was approached, what were the challenges and decisions made. Which in turn will lead to the higher quality of
decisions while implementing V2 of the feature.
   

## 📚 Learn More

- **[Getting Started Guide](/getting-started)** - Complete setup instructions
- **[Architecture Overview](/architecture)** - Technical deep dive
- **[Value Proposition](/value-proposition)** - Business case and ROI

**Questions?** Join our community or contact support at info@devplan.com