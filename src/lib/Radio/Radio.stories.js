import React from 'react';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Radio from './Radio';

export default {
    title: folder.form + folder.sub.radio + 'Radio',
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
    },
};

export const SimpleRadio = args => (
    <Radio id="first" label="First Choice" {...args} />
);

SimpleRadio.args = {
    fieldSize: buttonSizeDefault,
    disabled: false,
};
