import React from 'react';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';

const alignOptions = {
    Center: 'center',
    Left: 'left',
    Right: 'right'
};

storiesOf('ButtonGroup', module)
    .addParameters({
        options: {
            isFullscreen: false,
            showPanel: true
        },
    })
    .addDecorator(withKnobs)
    .add('ButtonGroup', () => (
        <ButtonGroup
            align={radios('Align', alignOptions, 'center')}
        >
            <Button
                template='line'
                type='original'
                color='primary'
                size='md'
            >
                First button
            </Button>

            <Button
                template='fill'
                type='original'
                color='primary'
                size='md'
            >
                Second button
            </Button>
        </ButtonGroup>
    ), {
        notes: 'You should always use Button component inside a ButtonGroup.',
    });