module.exports = {
    title: 'PayGreen UI',
    tagline: 'La librairie de composants UI officielle de PayGreen pour React 🎨',
    url: 'https://paygreen.github.io/paygreen-ui/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'PayGreen',
    projectName: 'paygreen-ui',
    themeConfig: {
        navbar: {
            title: 'PayGreen UI',
            logo: {
                alt: 'PayGreen Logo',
                src: 'img/e-vert.svg',
            },
            items: [
                {
                    to: 'docs/',
                    label: '📚 La doc',
                },
                {
                    href: 'https://paygreen.github.io/paygreen-ui',
                    label: '🖥️ Démo live',
                },
                {
                    href: 'https://github.com/PayGreen/paygreen-ui',
                    label: '📁 Repo GitHub',
                },
                {
                    href: 'https://github.com/PayGreen/paygreen-ui/releases',
                    label: '👩‍💻 Releases',
                },
            ],
        },
        hideableSidebar: true,
        footer: {
            style: 'dark',
            copyright: `© 2018 - ${new Date().getFullYear()} PayGreen <br /> <small>Built with Docusaurus</small>`,
        },
        colorMode: {
            respectPrefersColorScheme: true,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
