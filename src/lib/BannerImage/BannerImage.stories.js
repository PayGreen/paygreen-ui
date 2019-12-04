import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';
import {
    colorThemeOptions,
    colorThemeDefault,
    waveOptions,
    waveDefault
} from '../../shared/constants';
import BannerImage from './BannerImage';
import photoFile from './sample/sample.png';

storiesOf('BannerImage', module).addDecorator(withKnobs)
.add('BannerImage', () => (
    <BannerImage
        colorTheme={radios('Color theme', colorThemeOptions, colorThemeDefault)}
        topStyle={radios('Wave top direction', waveOptions, waveDefault)}
        image={photoFile}
    >
        Sample
    </BannerImage>
));