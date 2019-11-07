import React from 'react';
import Input from './Input';
import {
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';

storiesOf('Input', module)
    .addDecorator(withKnobs)
    .add('Text', () => (
        <Input
            id="sampleId1"
            placeholder="Firstname Lastname"
            label="Your name"
            disabled={boolean('Disabled', false)}
            status={radios('State', formStatusOptions, formStatusDefault)}
            params={{
                shadow: boolean('With shadow', false),
            }}
        />
    ), {
        notes: 'Same as input email, url and number (this is the default style).',
    })
    .add('Tel', () => (
        <Input
            type="tel"
            id="sampleId2"
            placeholder="+33 (0)6 11 22 33 44"
            label="Your phone number"
            disabled={boolean('Disabled', false)}
            status={radios('State', formStatusOptions, formStatusDefault)}
            params={{
                shadow: boolean('With shadow', false),
            }}
        />
    ), {
        notes: 'Style for input tel. It is smaller than default input because its value is always short. Input tel comes with react-input-mask library.',
    });