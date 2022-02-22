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
import Input from './Input';

export default {
    title: folder.form + 'Input',
    argTypes: {
        label: {
            name: labels.label,
            control: 'text',
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
        blockWidth: {
            name: labels.blockWidth,
            options: Object.values(inputWidthOptions),
            control: 'radio',
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

export const Text = ({ icon, ...args }) => (
    <Input id="sampleId1" placeholder="Firstname Lastname" {...args} />
);

export const Tel = ({ icon, ...args }) => (
    <Input
        type="tel"
        id="sampleId2"
        placeholder="+33 (0)6 11 22 33 44"
        {...args}
    />
);

Text.args = {
    label: 'Your name',
    disabled: false,
    readOnly: false,
    status: formStatusDefault,
    fieldSize: buttonSizeDefault,
    blockWidth: inputWidthDefault,
    marginBottom: spaceOptions.md,
    marginTop: spaceOptions.md,
};

Tel.args = {
    label: 'Phone number',
    disabled: false,
    readOnly: false,
    status: formStatusDefault,
    fieldSize: buttonSizeDefault,
    blockWidth: inputWidthDefault,
    marginBottom: spaceOptions.md,
    marginTop: spaceOptions.md,
};
