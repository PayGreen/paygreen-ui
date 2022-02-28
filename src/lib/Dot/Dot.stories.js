import React from 'react';
import {
    folder,
    dotStyleOptions,
    dotStyleDefault,
    iconSizeOptions,
    iconSizeDefault,
    spaceOptions,
    spaceDefault,
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import DotComponent from './Dot';

export default {
    title: folder.media + 'Dot',
    argTypes: {
        dotStyle: {
            name: 'Dot style',
            options: Object.values(dotStyleOptions),
            control: 'radio',
        },
        dotSize: {
            name: 'Dot size',
            options: Object.values(iconSizeOptions),
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
        marginLeft: {
            name: labels.marginLeft,
            options: Object.values(spaceOptions),
            control: 'select',
        },
        marginRight: {
            name: labels.marginRight,
            options: Object.values(spaceOptions),
            control: 'select',
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
        colorStatus: {
            name: labels.colorStatus,
            options: Object.values(formStatusOptions),
            control: 'select',
        },
        colorWab: {
            name: labels.colorWab,
            options: Object.values(greyOptions),
            control: 'select',
        },
    },
};

export const Dot = args => <DotComponent {...args} />;

Dot.args = {
    dotStyle: dotStyleDefault,
    dotSize: iconSizeDefault,
    colorType: colorTypeDefault,
    colorPallet: colorPalletDefault,
    colorTheme: colorThemeDefault,
    colorWab: greyDefault,
    colorStatus: formStatusDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
    marginLeft: spaceDefault,
    marginRight: spaceDefault,
};
