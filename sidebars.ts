import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'overview',
    {
      type: 'category',
      label: 'Get Started',
      collapsed: false,
      items: [
        'quickstart',
        {type: 'doc', id: 'core-workflow', label: 'Core Workflow'},
        'architecture',
      ],
    },
    {
      type: 'category',
      label: 'Product',
      collapsed: false,
      items: [
        'platform/index',
        'platform/today',
        'platform/ask-devplan',
        'platform/projects',
        'platform/updates',
        'platform/insights',
        'platform/roadmap',
        'platform/knowledge',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: true,
      items: [
        'guides/integrations/index',
        'guides/integrations/mcp',
        'guides/integrations/github',
        'guides/integrations/bitbucket',
        'guides/integrations/jira',
        'guides/integrations/linear',
        'guides/integrations/slack',
        'guides/integrations/notion',
        'guides/integrations/google-drive',
        'guides/integrations/confluence',
        'guides/integrations/uploads',
        'guides/integrations/granola',
      ],
    },
    {
      type: 'category',
      label: 'Settings',
      collapsed: true,
      items: [
        'settings/profile',
        'settings/workspace',
        'settings/organization',
      ],
    },
    {
      type: 'category',
      label: 'For Developers',
      collapsed: true,
      items: [
        'dev/cli-cheat-sheet',
        'dev/spec-driven-dev',
        'dev/git-worktrees',
        'cloud-run/index',
      ],
    },
  ],
};

export default sidebars;
