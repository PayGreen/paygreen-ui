// old config.js
import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { GlobalStyle } from '../src/shared/global';
import * as themes from '../src/theme';

export const parameters = {
    viewport: {
        viewports: INITIAL_VIEWPORTS,
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
        ],
    },
    // check for components accessibility
    a11y: {
        // optional selector which element to inspect
        element: '#root',
        // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
        config: {},
        // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
        options: {},
        // optional flag to prevent the automatic check
        manual: true,
    },
};

export const decorators = [
    story => {
        return (
            <>
                <GlobalStyle />
                {story()}
            </>
        );
    },
    withThemesProvider(Object.keys(themes).map(k => themes[k])),
];
