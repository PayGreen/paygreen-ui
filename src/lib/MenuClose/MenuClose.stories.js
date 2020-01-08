import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import {
    colorThemeOptions,
    colorThemeDefault
} from '../../shared/constants';
import MenuClose from './MenuClose';

storiesOf('Paygreen | Menu/MenuClose', module).addDecorator(withKnobs)
.add('MenuClose', () => (
    <MenuClose
        colorTheme={radios('Color', colorThemeOptions, colorThemeDefault)}
    />
));