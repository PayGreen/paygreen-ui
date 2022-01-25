import React from 'react';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    buttonSizeOptions,
    buttonSizeDefault,
    buttonStyleOptions,
    buttonStyleDefault,
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorPalletDefault,
    formStatusOptions,
    formStatusDefault,
    gradientOptions,
    gradientDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import DaButtonComponent from './DaButton';
import { CoinsIcon } from '../Icon/Icon';

const { wab, ...buttonColorPalletOptions } = colorPalletOptions;

export default {
    title: folder.button + 'DaButton',
    argTypes: {
        buttonStyle: {
            name: labels.buttonStyle,
            options: Object.values(buttonStyleOptions),
            control: 'radio',
        },
        buttonSize: {
            name: labels.buttonSize,
            options: Object.values(buttonSizeOptions),
            control: 'radio',
        },
        colorType: {
            name: labels.colorType,
            options: Object.values(colorTypeOptions),
            control: 'radio',
        },
        gradient: {
            name: labels.gradient,
            options: Object.values(gradientOptions),
            control: 'radio',
        },
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
        isDisabled: {
            name: labels.disabled,
            control: 'boolean',
        },
        text: {
            name: labels.label,
            control: 'text',
        },
    },
};

export const DaButton = ({ text, ...args }) => (
    <button type="button">
        <DaButtonComponent {...args} icon={<CoinsIcon />}>
            {text}
        </DaButtonComponent>
    </button>
);

DaButton.args = {
    buttonStyle: buttonStyleDefault,
    buttonSize: buttonSizeDefault,
    colorType: colorTypeDefault,
    gradient: gradientDefault,
    colorPallet: colorPalletDefault,
    colorTheme: colorThemeDefault,
    colorStatus: formStatusDefault,
    isDisabled: false,
    text: 'CTA button',
};
