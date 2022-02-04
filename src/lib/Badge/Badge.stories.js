import React from 'react';

import {
    folder,
    iconHtmlTagOptions,
    colorTypeOptions,
    colorStyleOptions,
    colorThemeOptions,
    gradientOptions,
    fontSizeOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import BadgeComponent from './Badge';

export default {
    title: folder.text + 'Badge',
    argTypes: {
        htmlTag: {
            name: labels.htmlTag,
            options: Object.values(iconHtmlTagOptions),
            control: 'radio',
        },
        colorType: {
            name: labels.colorType,
            control: 'select',
            options: Object.values(colorTypeOptions),
        },
        colorStyle: {
            name: labels.colorTheme,
            control: 'radio',
            options: Object.values(colorStyleOptions),
        },
        colorTheme: {
            name: labels.colorTheme,
            control: 'select',
            options: Object.values(colorThemeOptions),
        },
        gradient: {
            name: labels.gradient,
            control: 'radio',
            options: gradientOptions,
        },
        textSize: {
            name: labels.textSize,
            control: 'select',
            options: fontSizeOptions,
        },
        text: {
            name: labels.text,
            control: 'text',
        },
    },
};

export const Badge = ({ text, ...args }) => (
    <BadgeComponent {...args}>{text}</BadgeComponent>
);

Badge.args = {
    text: 'Example',
};
