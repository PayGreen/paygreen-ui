import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    boolean,
    radios,
    select,
    text,
} from '@storybook/addon-knobs';
import {
    folder,
    formStatusOptions,
    formStatusDefault,
    inputWidthOptions,
    inputWidthDefault,
    spaceOptions,
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
    },
];

const optionsGroup = [
    {
        value: '',
        text: 'Choose your option...',
        disabled: true,
    },
    {
        optgroup: 'First group',
        values: [
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
            },
        ],
    },
    {
        optgroup: 'Second group',
        values: [
            {
                value: 'first 2',
                text: 'First option',
            },
            {
                value: 'second 2',
                text: 'Second option',
                disabled: true,
            },
            {
                value: 'third 2',
                text: 'Third option',
            },
        ],
    },
];

storiesOf(folder.form + 'Select', module)
    .addDecorator(withKnobs)
    .add('Select', () => (
        <Select
            id="select1"
            label={text('Label', 'Your choice')}
            defaultValue=""
            options={
                boolean('Has optgroup', true) ? optionsGroup : options
            }
            disabled={boolean('Disabled', false)}
            readOnly={boolean('Readonly', false)}
            status={radios('Status', formStatusOptions, formStatusDefault)}
            blockWidth={radios('Width', inputWidthOptions, inputWidthDefault)}
            hasShadow={boolean('With shadow', false)}
            marginTop={select('Margin top', spaceOptions, spaceOptions.md)}
            marginBottom={select(
                'Margin bottom',
                spaceOptions,
                spaceOptions.md,
            )}
        />
    ));
