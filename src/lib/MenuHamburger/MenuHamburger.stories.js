import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import {
    colorThemeOptions,
    colorThemeDefault
} from '../../shared/constants';
import MenuHamburger from './MenuHamburger';

storiesOf('MenuHamburger', module).addDecorator(withKnobs)
.add('MenuHamburger', () => (
    <MenuHamburger
        colorTheme={radios('Color', colorThemeOptions, colorThemeDefault)}
    />
));