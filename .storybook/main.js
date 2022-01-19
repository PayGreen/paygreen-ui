// old presets.js
// https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-mainjs
// addon-essentials contains addon-controls, addons-docs
module.exports = {
    stories: ['../src/lib/**/*.stories.@(js|mdx)'],
    addons: [
        '@storybook/addon-a11y',
        '@storybook/addon-essentials',
        'storybook-addon-styled-component-theme/dist/preset',
    ],
};
