import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';
import {
    gradientOptions,
    colorThemeOptions,
    colorThemeDefault,
    maskOptions,
    maskDefault
} from '../../shared/constants';
import Banner from './Banner';
import photoFile from './sample/sample.png';

storiesOf('Banner', module).addDecorator(withKnobs)
.add('Banner', () => (
    <Banner
        gradient={radios('Gradient type', gradientOptions, gradientOptions.theme)}
        colorTheme={radios('Color theme', colorThemeOptions, colorThemeDefault)}
        topStyle={radios('Top style', maskOptions, maskDefault)}
        bottomStyle={radios('Bottom style', maskOptions, maskDefault)}
        image={photoFile}
    >
        Sample
    </Banner>
));