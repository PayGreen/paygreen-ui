import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios, select } from '@storybook/addon-knobs';
import {
    waveOptions,
    waveDefault,
    colorThemeOptions,
    colorThemeDefault,
    blockSpaceOptions
} from '../../shared/constants';
import Divider from './Divider';

storiesOf('Divider', module).addDecorator(withKnobs)
.add('Divider', () => (
    <Divider
        waveStyle={radios('Wave direction', waveOptions, waveDefault)}
        colorTheme={radios('Color theme', colorThemeOptions, colorThemeDefault)}
        text={text('Text', 'Your text')}
        marginTop={select('Margin top', blockSpaceOptions, blockSpaceOptions.md)}
        marginBottom={select('Margin bottom', blockSpaceOptions, blockSpaceOptions.md)}
    />
));