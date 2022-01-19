// old addons.js
import { create } from '@storybook/theming/create';
import { addons } from '@storybook/addons';

// https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-managerjs
const theme = create({
    brandTitle: 'PayGreen',
    base: 'light',
    appBg: '#f9f9f9',
});

addons.setConfig({
    isFullscreen: false,
    showPanel: true,
    sidebar: {
        showRoots: true,
    },
    theme,
});
