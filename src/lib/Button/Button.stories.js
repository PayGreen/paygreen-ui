import React from 'react';
import Button from './Button';
import {
    colorThemeOptions,
    colorThemeDefault,
    buttonSizeOptions,
    buttonSizeDefault,
    buttonStyleOptions,
    colorTypeOptions,
    colorTypeDefault
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('Fill', () => (
        <a href="#">
            <Button
                colorType={radios('Color type', colorTypeOptions, colorTypeDefault)}
                colorTheme={radios('Color theme', colorThemeOptions, colorThemeDefault)}
                buttonSize={radios('Button size', buttonSizeOptions, buttonSizeDefault)}
                isDisabled={boolean('Disabled', false)}
            >
                {text('Label', 'CTA button')}
            </Button>
        </a>
    ), {
        notes: 'Change background color to test reverse mode.',
    })
    .add('Line', () => (
        <a href="#">
            <Button
                template={buttonStyleOptions.line}
                colorType={radios('Color type', colorTypeOptions, colorTypeDefault)}
                colorTheme={radios('Color theme', colorThemeOptions, colorThemeDefault)}
                buttonSize={radios('Button size', buttonSizeOptions, buttonSizeDefault)}
                isDisabled={boolean('Disabled', false)}
            >
                {text('Label', 'CTA button')}
            </Button>
        </a>
    ), {
        notes: 'Change background color to test reverse mode.',
    });