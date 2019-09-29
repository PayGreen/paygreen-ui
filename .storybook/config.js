import { configure } from '@storybook/react';
import * as  themes from '../src/theme';
import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withThemesProvider( Object.keys(themes).map((k) => themes[k])));
addDecorator(withA11y);

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});

configure(require.context('../src', true, /\.stories\.js$/), module);