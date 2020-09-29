import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { GlobalStyle } from '../src/shared/global';
import * as themes from '../src/theme';

addDecorator(withThemesProvider(Object.keys(themes).map(k => themes[k])));

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
    // style of the board storyBook
    options: {
        // https://storybook.js.org/docs/configurations/theming/
        theme: create({
            brandTitle: 'PayGreen',
            base: 'light',
            appBg: '#f9f9f9',
        }),
        isFullscreen: false,
        showPanel: true,
        showRoots: true,
    },
    backgrounds: {
        // https://www.npmjs.com/package/@storybook/addon-backgrounds
        default: 'White',
        values: [
            { name: 'White', value: '#ffffff' },
            { name: 'Primary', value: '#77d1a6' },
            { name: 'PrimaryShade', value: '#a4db95' },
            { name: 'Secondary', value: '#51c6be' },
            { name: 'SecondaryShade', value: '#76bbd8' },
            { name: 'Tertiary', value: '#fab56b' },
            { name: 'TertiaryShade', value: '#faa272' },
            { name: 'Quaternary', value: '#e98e90' },
            { name: 'QuaternaryShade', value: '#e98eb9' },
            { name: 'Quinary', value: '#b887ee' },
            { name: 'QuinaryShade', value: '#dd94ef' },
            { name: 'DarkMode', value: '#202020' },
        ]
    },
    a11y: {
        element: '#root',
        config: {},
        options: {},
        manual: true,
    },
});

addDecorator(story => (
    <>
        <GlobalStyle />
        {story()}
    </>
));

const loadConfigures = () => {
    // TODO : try to order
    const storiesMdx = require.context('../src', true, /\.stories\.mdx$/);
    const storiesJSX = require.context('../src', true, /\.stories\.js$/);
    return [storiesMdx, storiesJSX];
};

configure(loadConfigures(), module);
