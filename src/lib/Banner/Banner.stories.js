import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, select } from '@storybook/addon-knobs';
import {
    colorThemeOptions,
    colorThemeDefault,
    gradientOptions,
    waveOptions,
    waveDefault
} from '../../shared/constants';
import Banner from './Banner';

storiesOf('Banner', module).addDecorator(withKnobs)
.add('Banner', () => (
    <Banner
        topStyle={radios('Top wave direction', waveOptions, waveDefault)}
        bottomStyle={radios('Bottom wave direction', waveOptions, waveDefault)}
        gradient={radios('Gradient type', gradientOptions, gradientOptions.theme)}
        colorTheme={select('Color theme', colorThemeOptions, colorThemeDefault)}
    >
        <div>
            Sample
        </div>
    </Banner>
));