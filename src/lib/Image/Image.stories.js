import React from 'react';
import Image from './Image';
import imageFile from './sample/sample.png';
import {
    blockWidthOptions,
    blockWidthDefault,
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';

storiesOf('Image', module)
    .addDecorator(withKnobs)
    .add('Image', () => (
        <Image
            blockHeight={select('Image height', blockWidthOptions, blockWidthDefault)}
        >
            <img src={imageFile} />
        </Image>
    ), {
        notes: 'Image.',
    });