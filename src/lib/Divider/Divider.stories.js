import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios } from '@storybook/addon-knobs';
import {
    waveOptions,
    waveDefault,
    colorThemeOptions,
    colorThemeDefault
} from '../../shared/constants';
import Divider from './Divider';

storiesOf('Divider', module).addDecorator(withKnobs)
.add('Divider', () => (
    <Divider
        waveStyle={radios('Wave direction', waveOptions, waveDefault)}
        colorTheme={radios('Color theme', colorThemeOptions, colorThemeDefault)}
        text={text('Text', 'Your text')}
    />
));