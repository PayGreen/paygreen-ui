import React from 'react';
import {
    folder,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    formStatusOptions,
    formStatusDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import { OutIcon } from '../Icon/Icon';
import IconLabelComponent from './IconLabel';

const { wab, ...buttonColorPalletOptions } = colorPalletOptions;

export default {
    title: folder.text + 'IconLabel',
    argTypes: {
        colorPallet: {
            name: labels.colorPallet,
            options: Object.values(buttonColorPalletOptions),
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
        text: {
            name: labels.text,
            control: 'text',
        },
    },
};

export const IconLabel = args => (
    <IconLabelComponent icon={<OutIcon />} {...args}>
        {args.text}
    </IconLabelComponent>
);

IconLabel.args = {
    colorPallet: colorPalletDefault,
    colorTheme: colorThemeDefault,
    colorStatus: formStatusDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
    marginLeft: spaceDefault,
    marginRight: spaceDefault,
    text: 'Sample',
};
