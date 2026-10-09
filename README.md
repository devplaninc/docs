# Devplan documentation

Public product documentation built with Docusaurus. Content lives in `docs/`; `sidebars.ts` defines navigation. The production site is https://docs.devplan.com.

## Local development

Use Node.js 22, matching the deployment workflow, and npm:

```bash
npm ci
npm start
```

## Validate and preview

```bash
npm run typecheck
npm run build
npm run serve
```

The build checks internal links and anchors. Review the rendered pages and search results before publication, including existing URLs affected by a rename.

## Writing and maintenance

Explain user goals and stable workflows. Include precise setup details where required for success, but avoid inventories of changing menu options. Keep source-processing behavior, tool access, and delivery claims accurate.

Preserve a page's public slug when changing its title. Retain old section anchors when reorganizing content. Archived material remains accessible by direct link but is excluded from local search.

## Publication

The GitHub Actions workflow deploys the site when changes reach `main`. Local builds and previews do not publish it. Review and approve changes before merging to `main` or starting a manual deployment.
