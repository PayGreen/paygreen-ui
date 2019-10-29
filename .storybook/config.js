import * as  themes from '../src/theme';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { create } from '@storybook/theming';
import { GlobalStyle } from '../src/shared/global';
import React from 'react';

addDecorator(withThemesProvider(Object.keys(themes).map((k) => themes[k])));
addDecorator(withA11y);

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
  },
  backgrounds: [
    // https://www.npmjs.com/package/@storybook/addon-backgrounds
    { name: 'White', value: '#ffffff', default: true },
    { name: 'Primary', value: '#77d1a6' },
    { name: 'PrimaryShade', value: '#a4db95' },
    { name: 'Secondary', value: '#51c6be' },
    { name: 'SecondaryShade', value: '#76bbd8' },
    { name: 'Tertiary', value: '#fab56b' },
    { name: 'TertiaryShade', value: '#faa272' },
    { name: 'Quaternary', value: '#e98e90' },
    { name: 'QuaternaryShade', value: '#e98eb9' },
  ],
});

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

configure(require.context('../src', true, /\.stories\.js$/), module);