import React from 'react';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import AnimPlaneComponent from './AnimPlane';

export default {
    title: folder.media + 'AnimPlane',
    argTypes: {
        isActive: {
            name: labels.isActive,
            control: 'boolean',
        },
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
        },
    },
};

export const AnimPlane = args => <AnimPlaneComponent {...args} />;

AnimPlane.args = {
    isActive: false,
    colorTheme: colorThemeDefault,
};
