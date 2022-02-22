import React from 'react';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import CheckboxGroup from './CheckboxGroup';

const checkboxOptions = [
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
    title: folder.form + folder.sub.checkbox + 'CheckboxGroup',
    argTypes: {
        legend: {
            name: labels.label,
            control: 'text',
        },
        fieldSize: {
            name: labels.fieldSize,
            options: Object.values(buttonSizeOptions),
            control: 'radio',
        },
    },
};

export const CheckboxGroupStory = ({ ...args }) => (
    <CheckboxGroup
        name="checkboxes"
        value={[checkboxOptions[1].value, checkboxOptions[2].value]}
        options={checkboxOptions}
        {...args}
    />
);

CheckboxGroupStory.args = {
    legend: 'Checkboxes Label',
    disabled: false,
    fieldSize: buttonSizeDefault,
};
