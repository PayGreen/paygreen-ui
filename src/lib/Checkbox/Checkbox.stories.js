import React from 'react';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Checkbox from './Checkbox';

export default {
    title: folder.form + folder.sub.checkbox + 'Checkbox',
    argTypes: {
        disabled: {
            name: labels.disabled,
            control: 'boolean',
        },
        fieldSize: {
            name: labels.fieldSize,
            options: Object.values(buttonSizeOptions),
            control: 'radio',
        },
    },
};

export const CheckboxStory = ({ ...args }) => (
    <Checkbox id="first" label="First Choice" {...args} />
);

CheckboxStory.args = {
    fieldSize: buttonSizeDefault,
    disabled: false,
};
