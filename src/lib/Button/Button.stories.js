import React from 'react';
import Button from './Button';
import {
    colorThemeOptions,
    colorThemeDefault,
    buttonSizeOptions,
    buttonSizeDefault,
    buttonStyleOptions,
    buttonStyleDefault,
    colorTypeOptions,
    colorTypeDefault
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';

storiesOf('Button', module).addDecorator(withKnobs)
.add('Button', () => (
    <a href="#">
        <Button
            buttonStyle={radios('Button style', buttonStyleOptions, buttonStyleDefault)}
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