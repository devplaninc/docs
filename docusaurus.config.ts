import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Devplan',
  tagline: 'AI-Native Product Development for Modern Teams',
  favicon: 'img/Logo-Closed.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://test-docs.devplan.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'devplaninc', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Serve the docs at the site's root
        },
        blog: false, // Disable the blog plugin
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Devplan',
      logo: {
        alt: 'Devplan Logo',
        src: 'img/Logo-Closed.svg',
        href: '/intro',
      },
      hideOnScroll: false,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://devplan.com',
          label: 'Devplan',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started',
            },
            {
              label: 'Core Workflow',
              to: '/core-workflow',
            },
            {
              label: 'How Devplan Works',
              to: '/architecture',
            },
          ],
        },
        {
          title: 'Devplan',
          items: [
            {
              label: 'Devplan App',
              href: 'https://devplan.com',
            },
            {
              label: 'YouTube Channel',
              href: 'https://www.youtube.com/@Devplan',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Contact Us',
              href: 'mailto:info@devplan.com',
            },
            {
              label: 'Privacy Policy',
              href: 'https://www.devplan.com/privacy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Devplan, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
