// @ts-check
import tailwindPlugin from './src/plugins/tailwind-plugin.js'; // ✅ Tailwind plugin

const config = {
  title: 'Stellr',
  tagline: 'The Interface to Your Data',
  url: 'https://help.stellr.ae',
  baseUrl: '/',
  favicon: 'img/favicon.svg',

  organizationName: 'stellr',
  projectName: 'stellr-help-docs',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [tailwindPlugin],

  themeConfig: {
    navbar: {
      logo: {
        alt: 'Stellr Logo',
        src: 'img/logo-light.svg',
        srcDark: 'img/logo-dark.svg',
        width: 80,
        height: 20,
      },
      items: [], // 🚫 No top nav items
    },

    footer: {
      style: 'light',
      copyright: 'Made with ♥ in Abu Dhabi, UAE — Copyright © 2025 Stellr',
    },
  },
};

export default config;