import React from 'react';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
    inputWidthOptions,
    inputWidthDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import DaTextarea from './DaTextarea';

export default {
    title: folder.form + 'DaTextarea',
    argTypes: {
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
        hasCounter: {
            name: labels.hasCounter,
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
        hasStaticWidth: {
            name: labels.hasStaticWidth,
            control: 'boolean',
        },
    },
};

export const Textarea = args => (
    <DaTextarea placeholder="Your text&hellip;" maxLength={800} {...args} />
);

Textarea.args = {
    hasCounter: true,
    disabled: false,
    readOnly: false,
    isRounded: false,
    hasStaticWidth: false,
    fieldSize: buttonSizeDefault,
    blockWidth: inputWidthDefault,
};
