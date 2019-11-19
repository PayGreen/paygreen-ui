import React from 'react';
import Image from './Image';
import imageFile from './sample/sample.png';
import {
    colorThemeOptions,
    colorThemeDefault,
    blockWidthOptions,
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';

storiesOf('Image', module)
    .addDecorator(withKnobs)
    .add('Image', () => (
        <Image
            colorChange={boolean('Modify color', true)}
            colorTheme={radios('Color theme', colorThemeOptions, colorThemeDefault)}
            blockHeight={select('Image height', blockWidthOptions, blockWidthOptions.xl)}
        >
            <img src={imageFile} />
        </Image>
    ), {
        notes: 'Image.',
    });