import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// Sidebar configuration for Devplan documentation

/**
 * Defines the structure and organization of the documentation sidebar.
 * Creates ordered groups of docs with navigation between pages.
 */
const sidebars: SidebarsConfig = {
  // Organized sidebar for better user experience
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Understanding Devplan',
      collapsed: false,
      items: [
        'value-proposition',
        'core-workflow',
        'architecture',
        'access-control',
        'customer-success-story',
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      collapsed: false,
      items: [
        'getting-started',
        {
          type: 'category',
          label: 'Developer Workflows',
          collapsed: false,
          items: [
            'dev/cli-cheat-sheet',
            'dev/spec-driven-dev',
            'dev/git-worktrees',
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
        {
          type: 'category',
          label: 'Billing',
          collapsed: false,
          items: [
            'guides/billing/migrate-to-org-billing',
          ],
        }
      ],
    },
  ],
};

export default sidebars;
