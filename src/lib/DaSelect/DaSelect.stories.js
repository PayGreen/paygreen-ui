import React from 'react';
import {
    folder,
    inputWidthOptions,
    inputWidthDefault,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import { ListIcon } from '../Icon/Icon';
import DaSelect from './DaSelect';

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
        value: 2,
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
                value: 2,
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
    title: folder.form + 'DaSelect',
    argTypes: {
        optgroup: {
            name: labels.optgroup,
            control: 'boolean',
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
        fieldSize: {
            name: labels.fieldSize,
            options: Object.values(buttonSizeOptions),
            control: 'radio',
        },
        blockWidth: {
            name: labels.blockWidth,
            options: Object.values(inputWidthOptions),
            control: 'radio',
        },
        hasStaticWidth: {
            name: labels.hasStaticWidth,
            control: 'boolean',
        },
        hasHelpButton: {
            name: labels.hasHelpButton,
            control: 'boolean',
        },
        icon: {
            name: labels.icon,
            control: 'boolean',
        },
    },
};

export const Select = ({ ...args }) => (
    <DaSelect
        {...args}
        defaultValue=""
        options={args.optgroup ? optionsGroup : options}
        icon={args.icon ? <ListIcon /> : null}
    />
);

Select.args = {
    optgroup: true,
    disabled: false,
    readOnly: false,
    isRounded: false,
    fieldSize: buttonSizeDefault,
    blockWidth: inputWidthDefault,
    hasStaticWidth: false,
    hasHelpButton: false,
    icon: true,
};
