import React from 'react';
import {
    folder,
    formStatusOptions,
    formStatusDefault,
    spaceOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Textarea from './Textarea';

export default {
    title: folder.form + 'Textarea',
    argTypes: {
        label: {
            name: labels.label,
            control: 'text',
            defaultValue: 'Your message',
        },
        status: {
            name: labels.status,
            options: Object.values(formStatusOptions),
            control: 'radio',
            defaultValue: formStatusDefault,
        },
        hasCounter: {
            name: labels.hasCounter,
            control: 'boolean',
            defaultValue: true,
        },
        disabled: {
            name: labels.disabled,
            control: 'boolean',
            defaultValue: false,
        },
        readOnly: {
            name: labels.readOnly,
            control: 'boolean',
            defaultValue: false,
        },
        hasShadow: {
            name: labels.hasShadow,
            control: 'boolean',
            defaultValue: false,
        },
        marginTop: {
            name: labels.marginTop,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceOptions.md,
        },
        marginBottom: {
            name: labels.marginBottom,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceOptions.md,
        },
    },
};

export const SimpleTextArea = ({ range, ...args }) => {
    return (
        <Textarea
            id="textarea1"
            placeholder="Your text&hellip;"
            maxLength={50}
            {...args}
        />
    );
};
