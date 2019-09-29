import React from 'react';
import Button from './Button';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

storiesOf('Button2', module)
    .addParameters({
        options: {
            name: 'Test',
            isFullscreen: false,
            showPanel: true
        },
    })
    .addDecorator(withKnobs)
    .add('with text', () => (
        <Button disabled={boolean('Disabled', false)} >
            {text('Label', 'Hello Storybook')}
        </Button>
    ), {
        notes: 'A very simple example of addon notes',
    })
    .add('disabled', () => (
        <Button disabled>
            {text('Label', 'Hello Storybook')}
        </Button>
    ));