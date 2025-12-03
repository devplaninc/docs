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
        'dev/spec-driven-dev',
        {
          type: 'category',
          label: 'Integrations',
          collapsed: false,
          items: [
            'guides/integrations/jira',
          ],
        }
      ],
    },
  ],
};

export default sidebars;
