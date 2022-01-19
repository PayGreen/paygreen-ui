import React from 'react';
import {
    folder,
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    formStatusOptions,
    formStatusDefault,
    fontSizeOptions,
    alignOptions,
    alignDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import TitleComponent from './Title';

export default {
    title: folder.text + 'Title',
    component: Title,
    argTypes: {
        hasUnderline: {
            name: labels.hasUnderline,
            control: 'boolean',
        },
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
        isResponsive: {
            name: labels.isResponsive,
            control: 'boolean',
        },
        textSize: {
            name: labels.textSize,
            options: Object.values(fontSizeOptions),
            control: 'select',
        },
        align: {
            name: labels.align,
            options: Object.values(alignOptions),
            control: 'radio',
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
    },
};

export const Title = args => (
    <TitleComponent {...args}>
        Your title with <strong>an emphasis</strong>
    </TitleComponent>
);

Title.args = {
    hasUnderline: true,
    colorType: colorTypeDefault,
    colorPallet: colorPalletOptions.wab,
    colorTheme: colorThemeDefault,
    colorWab: greyOptions.grey60,
    colorStatus: formStatusDefault,
    isResponsive: true,
    textSize: fontSizeOptions.lg,
    align: alignDefault,
    marginLateral: spaceDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
};
