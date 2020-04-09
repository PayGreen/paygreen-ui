import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, boolean } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import MenuHamburger from './MenuHamburger';

storiesOf(folder.nav + folder.sub.control + 'MenuHamburger', module)
    .addDecorator(withKnobs)
    .add('MenuHamburger', () => (
        <MenuHamburger
            colorTheme={radios('Color', colorThemeOptions, colorThemeDefault)}
            isOpen={boolean('Is Open', false)}
        />
    ));
