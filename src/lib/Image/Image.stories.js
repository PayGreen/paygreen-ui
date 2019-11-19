import React from 'react';
import Image from './Image';
import {

} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';

storiesOf('Image', module)
    .addDecorator(withKnobs)
    .add('Image', () => (
        <Image
            
        >
            Sample
        </Image>
    ), {
        notes: 'Image.',
    });