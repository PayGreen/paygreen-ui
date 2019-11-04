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
            placeholder="Your text"
            label="Your label"
            shadow={boolean('With shadow', false)}
            status={radios('State', formStatusOptions, formStatusDefault)}
        />
    ), {
        notes: 'Same as input email, url and number (this is the default style).',
    })
    .add('Tel', () => (
        <Input
            type="tel"
            id="sampleId2"
            placeholder="Your text"
            label="Your label"
            shadow={boolean('With shadow', false)}
            status={radios('State', formStatusOptions, formStatusDefault)}
        />
    ), {
        notes: 'Style for input tel. It is smaller than default input because its value is always short.',
    });