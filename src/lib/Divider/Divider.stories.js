import React from 'react';
import {
    folder,
    decorationOptions,
    decorationDefault,
    colorThemeOptions,
    colorThemeDefault,
    spaceOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Divider from './Divider';

export default {
    title: folder.grid + 'Divider',
    argTypes: {
        waveStyle: {
            name: 'Wave style',
            options: Object.values(decorationOptions),
            control: 'radio',
        },
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
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
        text: {
            name: labels.label,
            control: 'text',
        },
    },
};

export const SimpleDivider = args => <Divider {...args} />;

SimpleDivider.args = {
    waveStyle: decorationDefault,
    colorTheme: colorThemeDefault,
    text: 'Your text',
    marginTop: spaceOptions.md,
    marginBottom: spaceOptions.md,
};
