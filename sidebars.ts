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
        'self-hosting',
      ],
    },
    {
      type: 'category',
      label: 'Using Devplan',
      collapsed: false,
      items: [
        'platform/index',
        'platform/today',
        'platform/ask-devplan',
        'platform/proposals',
        'platform/projects',
        'platform/dashboards',
        'platform/reports',
        {
          type: 'category',
          label: 'Product knowledge',
          items: [
            'platform/knowledge',
            'platform/live-docs',
            'platform/updates',
            'platform/signals',
            'platform/insights',
            'platform/decisions',
            'platform/evidence',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: true,
      items: [
        'guides/integrations/index',
        'guides/integrations/additional-connections',
        'guides/integrations/github',
        'guides/integrations/bitbucket',
        'guides/integrations/gitlab',
        'guides/integrations/jira',
        'guides/integrations/linear',
        'guides/integrations/slack',
        'guides/integrations/teams',
        'guides/integrations/notion',
        'guides/integrations/google-drive',
        'guides/integrations/confluence',
        'guides/integrations/uploads',
        'guides/integrations/granola',
        'guides/integrations/zoom',
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
        'guides/integrations/mcp',
        {
          type: 'category',
          label: 'Specification-based development',
          collapsed: true,
          items: [
            'dev/spec-driven-dev',
            'dev/cli-cheat-sheet',
            'dev/git-worktrees',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      collapsed: true,
      items: [
        'advanced/access-control',
      ],
    },
  ],
};

export default sidebars;
