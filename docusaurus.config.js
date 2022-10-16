// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Tigeu Network',
    tagline: '',
    url: 'http://tigeu.net',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
  
    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'cobeol', // Usually your GitHub org/user name.
    projectName: 'site', // Usually your repo name.
  
    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: 
    {
        defaultLocale: 'ko',
        locales: ['ko'],
    },
  
    presets: 
    [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: 
                {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                    // Please change this to your repo.
                    // Remove this to rem`ove the "edit this page" links.
                    editUrl: 'https://github.com/tigeuplus/site/tree/master',
                },
                theme: 
                {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
  
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Tigeu Network',
                logo: 
                {
                    alt: 'logo',
                    src: 'img/logo.svg',
                },
                items: 
                [
                    {
                        type: 'doc',
                        docId: 'core/index',
                        position: 'left',
                        label: '암호화폐',
                    },
                    {
                      type: 'doc',
                      docId: 'exchange/index',
                      position: 'left',
                      label: '거래소',
                    },
                    {
                      href: 'https://github.com/tigeuplus/site',
                      label: 'GitHub',
                      position: 'right',
                    }
                ],
            },
            footer: 
            {
                style: 'dark',
                copyright: `Copyright © 2022 cobeol. Licensed under MIT.`,
            },
            prism: 
            {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: []
            },
            colorMode: {
                defaultMode: "dark",
                disableSwitch: true,
                respectPrefersColorScheme: false,
            }
        })
};

module.exports = config;
