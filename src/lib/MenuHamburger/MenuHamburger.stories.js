import React from 'react';
import {
    folder,
    lateralPositionOptions,
    lateralPositionDefault,
    colorThemeOptions,
    colorThemeDefault,
    colorPalletOptions,
    colorPalletDefault,
    formStatusOptions,
    formStatusDefault,
    greyOptions,
    greyDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import MenuHamburger from './MenuHamburger';

export default {
    title: folder.layout + 'MenuHamburger',
    argTypes: {
        arrowDirection: {
            name: 'Arrow direction',
            options: Object.values(lateralPositionOptions),
            control: 'radio',
        },
        colorPallet: {
            name: labels.colorPallet,
            options: Object.values(colorPalletOptions),
            control: 'radio',
        },
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
        },
        isOpen: {
            name: labels.isOpen,
            control: 'boolean',
        },
        colorWab: {
            name: labels.colorWab,
            options: Object.values(greyOptions),
            control: 'select',
        },
        colorStatus: {
            name: labels.colorStatus,
            options: Object.values(formStatusOptions),
            control: 'select',
        },
    },
};

export const BurgerMenu = args => <MenuHamburger {...args} />;

BurgerMenu.args = {
    isOpen: false,
    arrowDirection: lateralPositionDefault,
    colorPallet: colorPalletDefault,
    colorTheme: colorThemeDefault,
    colorWab: greyDefault,
    colorStatus: formStatusDefault,
};
