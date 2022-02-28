import React from 'react';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
    labelHtmlTagOptions,
    labelHtmlTagDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import DaLabel from './DaLabel';

export default {
    title: folder.form + 'DaLabel',
    argTypes: {
        htmlTag: {
            name: labels.htmlTag,
            options: Object.values(labelHtmlTagOptions),
            control: 'radio',
        },
        fieldSize: {
            name: labels.fieldSize,
            options: Object.values(buttonSizeOptions),
            control: 'radio',
        },
        required: {
            name: labels.required,
            control: 'boolean',
        },
    },
};

export const CheckboxGroupStory = ({ ...args }) => (
    <DaLabel {...args}>Label Description</DaLabel>
);

CheckboxGroupStory.args = {
    htmlTag: labelHtmlTagDefault,
    required: false,
    fieldSize: buttonSizeDefault,
};
