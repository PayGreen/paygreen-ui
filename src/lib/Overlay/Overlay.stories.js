import React from 'react';
import {
    folder,
    gradientOptions,
    gradientDefault,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Text from '../Text/Text';
import OverlayComponent from './Overlay';

export default {
    title: folder.popup + 'Overlay',
    component: Overlay,
    argTypes: {
        gradient: {
            name: labels.gradient,
            options: Object.values(gradientOptions),
            control: 'select',
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
        zindex: {
            name: 'Z index',
            control: 'number',
        },
        opacityValue: {
            name: labels.opacityValue,
            control: 'number',
        },
    },
};

export const Overlay = args => (
    <>
        <Text>Some text ...</Text>

        <OverlayComponent {...args} />
    </>
);

Overlay.args = {
    gradient: gradientDefault,
    colorTheme: colorThemeDefault,
    colorWab: greyOptions.black00,
    zindex: 0,
    opacityValue: 60,
};
