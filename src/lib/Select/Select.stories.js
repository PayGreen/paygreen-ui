import React from 'react';
import Select from './Select';
import {
    formStatusOptions,
    formStatusDefault,
    inputWidthOptions,
    inputWidthDefault
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
            disabled={boolean('Disabled', false)}
            readOnly={boolean('Readonly', false)}
            status={radios('Status', formStatusOptions, formStatusDefault)}
            params={{
                shadow: boolean('With shadow', false),
            }}
            width={radios('Width', inputWidthOptions, inputWidthDefault)}
        />
    ), {
        notes: 'You can change select with with "width" props (could be sm, md or lg).',
    });