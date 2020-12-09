import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, boolean } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    positionOptions,
    positionDefault,
} from '../../shared/constants';
import MenuClose from './MenuClose';

storiesOf(folder.nav + folder.sub.control + 'MenuClose', module)
    .addDecorator(withKnobs)
    .add('MenuClose', () => (
        <MenuClose
            isOpen={boolean('Is open', true)}
            position={radios('Position', positionOptions, positionDefault)}
            colorTheme={radios('Color theme', colorThemeOptions, colorThemeDefault)}
        />
    ));
