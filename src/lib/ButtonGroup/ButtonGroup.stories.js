import React from 'react';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';

const alignOptions = {
    Left: 'left',
    Center: 'center',
    Right: 'right'
};

const marginOptions = {
    XS: 'xs',
    SM: 'sm',
    MD: 'md',
    LG: 'lg',
    XL: 'xl'
};

const buttonSizeOptions = {
    Small: 'sm',
    Medium: 'md',
    Large: 'lg'
};

storiesOf('ButtonGroup', module)
    .addDecorator(withKnobs)
    .add('ButtonGroup', () => (
        <ButtonGroup
            align={radios('Align', alignOptions, 'left')}
            margin={radios('Margin top', marginOptions, 'xs')}
        >
            <Button
                template='line'
                size={radios('Size', buttonSizeOptions, 'md')}
            >
                First button
            </Button>

            <Button
                size={radios('Size', buttonSizeOptions, 'md')}
            >
                Second button
            </Button>
        </ButtonGroup>
    ), {
        notes: 'You should always use Button component inside a ButtonGroup.',
    });