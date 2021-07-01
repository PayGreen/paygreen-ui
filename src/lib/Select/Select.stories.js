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
import labels from '../../shared/labels';
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
            label={text(labels.label, 'Your choice')}
            defaultValue=""
            options={boolean(labels.optgroup, true) ? optionsGroup : options}
            disabled={boolean(labels.disabled, false)}
            readOnly={boolean(labels.readOnly, false)}
            status={radios(labels.status, formStatusOptions, formStatusDefault)}
            blockWidth={radios(
                labels.blockWidth,
                inputWidthOptions,
                inputWidthDefault,
            )}
            hasShadow={boolean(labels.hasShadow, false)}
            marginTop={select(labels.marginTop, spaceOptions, spaceOptions.md)}
            marginBottom={select(
                labels.marginBottom,
                spaceOptions,
                spaceOptions.md,
            )}
        />
    ));
