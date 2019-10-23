import { configure } from '@storybook/react';
import * as  themes from '../src/theme';
import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';
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
            base: 'light',
        }),
    }
});

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));


configure(require.context('../src', true, /\.stories\.js$/), module);