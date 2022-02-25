import React from 'react';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    positionOptions,
    positionDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import MenuClose from './MenuClose';

export default {
    title: folder.nav + folder.sub.menu + 'MenuClose',
    argTypes: {
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
        },
        position: {
            name: labels.position,
            options: Object.values(positionOptions),
            control: 'radio',
        },
        isOpen: {
            name: labels.isOpen,
            control: 'boolean',
        },
    },
};

export const SimpleMenuClose = args => <MenuClose {...args} />;

SimpleMenuClose.args = {
    isOpen: true,
    position: positionDefault,
    colorTheme: colorThemeDefault,
};
