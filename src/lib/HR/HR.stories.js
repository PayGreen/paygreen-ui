import React from 'react';
// import { withKnobs, select, number } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    colorPalletOptions,
    colorPalletDefault,
    spaceOptions,
    spaceDefault,
    colorTypeOptions,
    colorTypeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import HRComponent from './HR';

export default {
    title: folder.grid + 'HR',
    argTypes: {
        colorType: {
            name: labels.colorType,
            options: Object.values(colorTypeOptions),
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
        marginLateral: {
            name: labels.marginLateral,
            options: Object.values(spaceOptions),
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
        opacityValue: {
            name: labels.opacityValue,
            control: 'number',
        },
    },
};

export const HR = args => <HRComponent {...args} />;

HR.args = {
    colorType: colorTypeDefault,
    colorPallet: colorPalletDefault,
    colorTheme: colorThemeDefault,
    colorWab: greyDefault,
    colorStatus: formStatusDefault,
    marginLateral: spaceDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
    opacityValue: 60,
};
