import React from 'react';
import {
    folder,
    inputWidthOptions,
    inputWidthDefault,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import { PhoneIcon, SearchIcon } from '../Icon/Icon';
import DaInput from './DaInput';

export default {
    title: folder.form + 'DaInput',
    argTypes: {
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

export const Text = ({ icon, ...args }) => (
    <DaInput
        placeholder="Firstname Lastname"
        icon={icon ? <SearchIcon /> : null}
        {...args}
    />
);

export const Tel = ({ icon, ...args }) => (
    <DaInput
        type="tel"
        placeholder="+33 (0)6 11 22 33 44"
        icon={icon ? <PhoneIcon /> : null}
        {...args}
    />
);

Text.args = {
    disabled: false,
    readOnly: false,
    isRounded: false,
    fieldSize: buttonSizeDefault,
    blockWidth: inputWidthDefault,
    hasStaticWidth: false,
    hasHelpButton: false,
    icon: true,
};

Tel.args = {
    disabled: false,
    readOnly: false,
    isRounded: false,
    fieldSize: buttonSizeDefault,
    blockWidth: inputWidthDefault,
    hasStaticWidth: false,
    hasHelpButton: false,
    icon: true,
};
