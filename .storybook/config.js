import { configure } from '@storybook/react';
import { ThemeDark, ThemeDefault } from '../src/theme';
import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addDecorator(withThemesProvider([
    ThemeDefault,
    ThemeDark,
]));

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});

configure(require.context('../src', true, /\.stories\.js$/), module);