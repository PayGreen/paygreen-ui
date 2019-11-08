import React from 'react';
import Select from './Select';
import {
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';

const options = [
    {
        value: '',
        text: 'Choose your option...',
        disabled: true,
    },
    {
        value: 'first',
        text: 'First option',
    },
    {
        value: 'second',
        text: 'Second option',
    },
    {
        value: 'third',
        text: 'Third option',
    }
];

storiesOf('Select', module)
    .addDecorator(withKnobs)
    .add('Select', () => (
        <Select
            id="select1"
            label="Your choice"
            options={options}
            status={radios('State', formStatusOptions, formStatusDefault)}
            params={{
                shadow: boolean('With shadow', false),
            }}
            disabled={boolean('Disabled', false)}
            readOnly={boolean('Readonly', false)}
        />
    ), {
        notes: 'Select.',
    });