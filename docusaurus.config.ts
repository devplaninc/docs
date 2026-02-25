import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Devplan',
  tagline: 'AI-Native Product Development for Modern Teams',
  favicon: 'img/Logo-Closed.svg',

  // Future flags for improved compatibility
  future: {
    v4: true,
  },

  // Production URL for the documentation site
  url: 'https://docs.devplan.com',
  // Base URL pathname for the site
  baseUrl: '/',

  // Deployment configuration
  organizationName: 'devplaninc',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization configuration
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
        routeBasePath: '/',
        homePageId: 'quickstart',
      },
        blog: false, // Blog functionality disabled
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
    image: 'img/Logo-Closed.svg',
    navbar: {
      title: 'Devplan',
      logo: {
        alt: 'Devplan Logo',
        src: 'img/Logo-Closed.svg',
        href: '/quickstart',
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
              to: '/quickstart',
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
