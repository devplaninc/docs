import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'overview',
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
      label: 'Platform',
      collapsed: false,
      items: [
        'platform/index',
        'platform/today',
        'platform/ask-devplan',
        'platform/projects',
        'platform/updates',
        'platform/insights',
        {
          type: 'category',
          label: 'Knowledge',
          collapsed: false,
          items: [
            'platform/workspace',
            'platform/product',
            'platform/signals',
            'platform/integrations',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Preview',
      collapsed: false,
      items: ['platform/roadmap'],
    },
    {
      type: 'category',
      label: 'Settings',
      collapsed: false,
      items: [
        'settings/index',
        {
          type: 'category',
          label: 'Profile',
          collapsed: false,
          items: [
            'settings/personal-info',
            'settings/preferences',
          ],
        },
        {
          type: 'category',
          label: 'Workspace',
          collapsed: false,
          items: [
            'settings/workspace-general',
            'settings/workspace-members',
            'settings/workspace-daily-digest',
            'settings/workspace-api-keys',
          ],
        },
        {
          type: 'category',
          label: 'Organization',
          collapsed: false,
          items: [
            'settings/organization-general',
            'settings/organization-workspaces',
            'settings/organization-billing',
          ],
        },
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
        'guides/integrations/index',
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
        'guides/integrations/mcp',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        'guides/billing/migrate-to-org-billing',
      ],
    }
  ],
};

export default sidebars;
