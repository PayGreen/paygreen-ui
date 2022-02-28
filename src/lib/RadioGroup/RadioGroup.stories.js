import React from 'react';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import RadioGroup from './RadioGroup';

const radioOptions = [
    {
        label: 'First Choice',
        value: 'first',
    },
    {
        label: 'Second Choice',
        value: 'second',
    },
    {
        label: 'Third Choice',
        value: 'third',
    },
];

export default {
    title: folder.form + folder.sub.radio + 'RadioGroup',
    argTypes: {
        fieldSize: {
            name: labels.fieldSize,
            options: Object.values(buttonSizeOptions),
            control: 'radio',
        },
        disabled: {
            name: labels.disabled,
            control: 'boolean',
        },
        legend: {
            name: 'Legend',
            control: 'text',
        },
    },
};

export const SimpleRadioGroup = ({ ...args }) => (
    <RadioGroup
        name="radios"
        value={radioOptions[1].value}
        options={radioOptions}
        {...args}
    />
);

SimpleRadioGroup.args = {
    fieldSize: buttonSizeDefault,
    disabled: false,
    legend: 'Radios Label',
};
