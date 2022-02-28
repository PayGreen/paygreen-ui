import React from 'react';
import {
    folder,
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import AutonomousInputComponent from './AutonomousInput';

export default {
    title: folder.form + 'AutonomousInput',
    argTypes: {
        status: {
            name: labels.status,
            options: Object.values(formStatusOptions),
            control: 'radio',
        },
        submittedText: {
            name: 'Submitted text',
            control: 'text',
        },
        text: {
            name: labels.label,
            control: 'text',
        },
    },
};

export const AutonomousInput = ({ text, ...args }) => (
    <AutonomousInputComponent
        type="email"
        placeholder="Your email..."
        {...args}
    >
        <button type="submit">{text}</button>
    </AutonomousInputComponent>
);

AutonomousInput.args = {
    status: formStatusDefault,
    submittedText: 'Received!',
    text: 'Send',
};
