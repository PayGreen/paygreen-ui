import React from 'react';
import ButtonOutlet from './ButtonOutlet';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

storiesOf('ButtonOutlet', module)
    .addParameters({
        options: {
            name: 'Test',
            isFullscreen: false,
            showPanel: true
        },
    })
    .addDecorator(withKnobs)
    .add('with text', () => (
        <ButtonOutlet disabled={boolean('Disabled', false)} >
            {text('Label', 'Hello Storybook')}
        </ButtonOutlet>
    ))
    .add('disabled', () => (
        <ButtonOutlet disabled>
            {text('Label', 'Hello Storybook')}
        </ButtonOutlet>
    ));