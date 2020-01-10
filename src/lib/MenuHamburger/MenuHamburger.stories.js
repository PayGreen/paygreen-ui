import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, boolean } from '@storybook/addon-knobs';
import {
    colorThemeOptions,
    colorThemeDefault
} from '../../shared/constants';
import MenuHamburger from './MenuHamburger';

storiesOf('Paygreen | Menu/MenuHamburger', module).addDecorator(withKnobs)
.add('MenuHamburger', () => (
    <MenuHamburger
        colorTheme={radios('Color', colorThemeOptions, colorThemeDefault)}
        isOpen={boolean('Is Open', false)}
    />
));