import React from 'react';
import Image from './Image';
import imageFile from './sample/sample.png';
import {
    colorThemeOptions,
    colorThemeDefault,
    maskOptions,
    maskDefault,
    blockWidthOptions,
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';

storiesOf('Image', module)
    .addDecorator(withKnobs)
    .add('Image', () => (
        <Image
            colorChange={boolean('Modify color', true)}
            colorTheme={radios('Color theme', colorThemeOptions, colorThemeDefault)}
            bottomStyle={radios('Bottom style', maskOptions, maskDefault)}
            blockHeight={select('Image height', blockWidthOptions, blockWidthOptions.xl)}
        >
            <img src={imageFile} />
        </Image>
    ), {
        notes: 'Image.',
    });