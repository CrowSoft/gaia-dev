import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Arduino con Papá',
  tagline: 'De tu primer LED a tu primer robot 🤖',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://CrowSoft.github.io', // 👈 cambia esto por tu usuario de GitHub
  baseUrl: '/gaia-dev/',       // 👈 cambia esto por el nombre de tu repo

  organizationName: 'CrowSoft',       // 👈 tu usuario de GitHub
  projectName: 'gaia-dev',     // 👈 nombre de tu repo

  onBrokenLinks: 'throw',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',            // El sitio abre directo en los docs, sin /docs/
        },
        blog: false,                     // No usamos blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Arduino con Papá',
      logo: {
        alt: 'Logo Arduino',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'arduinoSidebar',
          position: 'left',
          label: '📚 Plan de estudios',
        },
        {
          href: 'https://github.com/tu-usuario/nombre-de-tu-repo', // 👈 cambia esto
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Fases',
          items: [
            {
              label: '🔵 Fase 1 · Fundamentos',
              to: '/arduino/fase1-fundamentos',
            },
          ],
        },
        {
          title: 'Recursos',
          items: [
            {
              label: 'Arduino Docs',
              href: 'https://docs.arduino.cc',
            },
            {
              label: 'IDE de Arduino',
              href: 'https://www.arduino.cc/en/software',
            },
          ],
        },
      ],
      copyright: `Hecho con 💙 para aprender juntos · ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['cpp'],      // Para resaltar código de Arduino
    },
  } satisfies Preset.ThemeConfig,
};

export default config;