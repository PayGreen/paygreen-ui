import React from 'react';
import Button from './Button';
import {
    colorOptions,
    colorDefault,
    buttonSizeOptions,
    buttonSizeDefault,
    typeOptions,
    typeDefault
} from '../../shared/const';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios } from '@storybook/addon-knobs';

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('Fill', () => (
        <Button
            template='fill'
            type={radios('Type', typeOptions, typeDefault)}
            color={radios('Color', colorOptions, colorDefault)}
            size={radios('Size', buttonSizeOptions, buttonSizeDefault)}
        >
            {text('Label', 'CTA button')}
        </Button>
    ), {
        notes: 'Change background color to test reverse mode.',
    })
    .add('Line', () => (
        <Button
            template='line'
            type={radios('Type', typeOptions, typeDefault)}
            color={radios('Color', colorOptions, colorDefault)}
            size={radios('Size', buttonSizeOptions, buttonSizeDefault)}
        >
            {text('Label', 'CTA button')}
        </Button>
    ), {
        notes: 'Change background color to test reverse mode.',
    });