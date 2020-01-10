import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import MenuClose from './MenuClose';

storiesOf(folder.template + folder.sub.control + 'MenuClose', module)
    .addDecorator(withKnobs)
    .add('MenuClose', () => (
        <MenuClose
            colorTheme={radios('Color', colorThemeOptions, colorThemeDefault)}
        />
    ));
