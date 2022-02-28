import React from 'react';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import DaHelp from './DaHelp';
import { QuestionBoldIcon } from '../Icon/Icon';

export default {
    title: folder.form + 'DaHelp',
    argTypes: {
        fieldSize: {
            name: labels.fieldSize,
            options: Object.values(buttonSizeOptions),
            control: 'radio',
        },
        isActive: {
            name: labels.isActive,
            control: 'boolean',
        },
        isRounded: {
            name: labels.isRounded,
            control: 'boolean',
        },
    },
};

export const Help = ({ ...args }) => (
    <DaHelp {...args}>
        <QuestionBoldIcon />
    </DaHelp>
);

Help.args = {
    fieldSize: buttonSizeDefault,
    isActive: false,
    isRounded: false,
};
