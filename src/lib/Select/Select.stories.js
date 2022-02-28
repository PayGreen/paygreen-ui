import React from 'react';
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

export default {
    title: folder.form + 'Select',
    argTypes: {
        label: {
            name: labels.label,
            control: 'text',
        },
        optgroup: {
            name: labels.optgroup,
            control: 'boolean',
        },
        status: {
            name: labels.status,
            options: Object.values(formStatusOptions),
            control: 'radio',
        },
        disabled: {
            name: labels.disabled,
            control: 'boolean',
        },
        readOnly: {
            name: labels.readOnly,
            control: 'boolean',
        },
        isRounded: {
            name: labels.isRounded,
            control: 'boolean',
        },
        blockWidth: {
            name: labels.blockWidth,
            options: Object.values(inputWidthOptions),
            control: 'radio',
        },
        hasShadow: {
            name: labels.hasShadow,
            control: 'boolean',
        },
        marginTop: {
            name: labels.marginTop,
            options: Object.values(spaceOptions),
            control: 'select',
        },
        marginBottom: {
            name: labels.marginBottom,
            options: Object.values(spaceOptions),
            control: 'select',
        },
    },
};

export const SimpleSelect = ({ optgroup, ...args }) => (
    <Select
        id="select1"
        defaultValue=""
        options={optgroup ? optionsGroup : options}
        {...args}
    />
);

SimpleSelect.args = {
    label: 'Your choice',
    optgroup: true,
    disabled: false,
    readOnly: false,
    isRounded: false,
    status: formStatusDefault,
    blockWidth: inputWidthDefault,
    hasShadow: false,
    marginTop: spaceOptions.md,
    marginBottom: spaceOptions.md,
};
