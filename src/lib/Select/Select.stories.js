import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select, text } from '@storybook/addon-knobs';
import {
    formStatusOptions,
    formStatusDefault,
    inputWidthOptions,
    inputWidthDefault,
    spaceOptions
} from '../../shared/constants';
import Select from './Select';

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

storiesOf('Paygreen | Forms/Select', module).addDecorator(withKnobs)
.add('Select', () => (
    <Select
        id="select1"
        label={text('Label', 'Your choice')}
        defaultValue=""
        options={options}
        disabled={boolean('Disabled', false)}
        readOnly={boolean('Readonly', false)}
        status={radios('Status', formStatusOptions, formStatusDefault)}
        blockWidth={radios('Width', inputWidthOptions, inputWidthDefault)}
        hasShadow={boolean('With shadow', false)}
        marginTop={select('Margin top', spaceOptions, spaceOptions.md)}
        marginBottom={select('Margin bottom', spaceOptions, spaceOptions.md)}
    />
), {
    notes: 'You can change select with with "width" props (could be sm, md or lg).',
});