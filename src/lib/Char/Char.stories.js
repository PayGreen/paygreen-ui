import React from 'react';
import { folder, charModeOptions } from '../../shared/constants';
import labels from '../../shared/labels';
import Char from './Char';

export default {
    title: folder.text + 'Char',
    argTypes: {
        text: {
            name: labels.text,
            control: 'text',
        },
        hideCharacter: {
            name: 'Hide character',
            control: 'text',
        },
        truncateCharacter: {
            name: 'Truncate character',
            control: 'text',
        },
        hideExclusions: {
            name: 'Hide exclusion (only one here)',
            control: 'text',
            value: ' ',
        },
        mode: {
            name: 'Mode',
            options: Object.values(charModeOptions),
            control: 'radio',
        },
        startLength: {
            name: 'Start length',
            control: 'number',
            value: 3,
        },
        endLength: {
            name: 'End length',
            control: 'number',
            value: 3,
        },
    },
};

export const CharStory = ({ ...args }) => <Char {...args} />;

CharStory.args = {
    text: '0123 4567 89 ABC',
    hideCharacter: '*',
    truncateCharacter: '...',
    hideExclusions: ' ',
    startLength: 3,
    endLength: 3,
};
