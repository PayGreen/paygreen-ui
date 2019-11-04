import React from 'react';
import Button from './Button';
import {
    colorOptions,
    colorDefault,
    buttonSizeOptions,
    buttonSizeDefault,
    buttonTemplateOptions,
    colorTypeOptions,
    colorTypeDefault
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('Fill', () => (
        <Button
            colorType={radios('Color type', colorTypeOptions, colorTypeDefault)}
            color={radios('Color', colorOptions, colorDefault)}
            size={radios('Size', buttonSizeOptions, buttonSizeDefault)}
            disabled={boolean('Disabled', false)}
        >
            {text('Label', 'CTA button')}
        </Button>
    ), {
        notes: 'Change background color to test reverse mode.',
    })
    .add('Line', () => (
        <Button
            template={buttonTemplateOptions.line}
            colorType={radios('Color type', colorTypeOptions, colorTypeDefault)}
            color={radios('Color', colorOptions, colorDefault)}
            size={radios('Size', buttonSizeOptions, buttonSizeDefault)}
        >
            {text('Label', 'CTA button')}
        </Button>
    ), {
        notes: 'Change background color to test reverse mode.',
    });