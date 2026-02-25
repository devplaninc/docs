import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'The Workflow',
      collapsed: false,
      items: [
        'quickstart',
{ type: 'doc', id: 'core-workflow', label: 'Core Workflow' },
        'architecture',
      ],
    },
    {
      type: 'category',
      label: 'Developer Resources',
      collapsed: false,
      items: [
        'dev/cli-cheat-sheet',
        'dev/spec-driven-dev',
        'cloud-run/index',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: false,
      items: [
        'guides/integrations/jira',
      ],
    },
  ],
};

export default sidebars;
