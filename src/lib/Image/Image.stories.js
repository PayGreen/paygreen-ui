import React from 'react';
import Image from './Image';
import imageFile from './sample/sample.png';
import {
    colorThemeOptions,
    colorThemeDefault,
    maskOptions,
    maskDefault,
    imageSizeOptions,
    radiusOptions,
    shadowStyleOptions
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
            blockWidth={select('Image width', imageSizeOptions, imageSizeOptions.xl)}
            blockHeight={select('Image height', imageSizeOptions, imageSizeOptions.xs)}
            radiusSize={radios('Border radius', radiusOptions, radiusOptions.none)}
            shadow={radios('Shadow style', shadowStyleOptions, shadowStyleOptions.none)}
        >
            <img src={imageFile} />
        </Image>
    ), {
        notes: 'Image.',
    });