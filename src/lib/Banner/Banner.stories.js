import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';
import {
    colorThemeOptions,
    colorThemeDefault,
    gradientOptions
} from '../../shared/constants';
import Banner from './Banner';

storiesOf('Banner', module).addDecorator(withKnobs)
.add('Banner', () => (
    <Banner
        colorTheme={radios('Color theme', colorThemeOptions, colorThemeDefault)}
        gradient={radios('Gradient type', gradientOptions, gradientOptions.theme)}
    >
        Sample
    </Banner>
));