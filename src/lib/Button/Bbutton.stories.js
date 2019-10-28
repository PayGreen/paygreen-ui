import React from 'react';
import Button from './Button';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios } from '@storybook/addon-knobs';

const typeOptions = {
    Original: 'original',
    Reverse: 'reverse',
    Disabled: 'disabled'
};

const colorOptions = {
    Primary: 'primary',
    Secondary: 'secondary',
    Tertiary: 'tertiary',
    Quaternary: 'quaternary'
};

const sizeOptions = {
    Small: 'sm',
    Medium: 'md',
    Large: 'lg'
};

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('Fill', () => (
        <Button
            template='fill'
            type={radios('Type', typeOptions, 'original')}
            color={radios('Color', colorOptions, 'primary')}
            size={radios('Size', sizeOptions, 'md')}
        >
            {text('Label', 'CTA button')}
        </Button>
    ), {
        notes: 'Change background color to test reverse mode.',
    })
    .add('Line', () => (
        <Button
            template='line'
            type={radios('Type', typeOptions, 'original')}
            color={radios('Color', colorOptions, 'primary')}
            size={radios('Size', sizeOptions, 'md')}
        >
            {text('Label', 'CTA button')}
        </Button>
    ), {
        notes: 'Change background color to test reverse mode.',
    });