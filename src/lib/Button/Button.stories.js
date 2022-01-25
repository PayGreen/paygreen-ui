import React from 'react';
import labels from '../../shared/labels';
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
} from '../../shared/constants';
import ButtonComponent from './Button';

export default {
    title: folder.button + 'Button',
    argTypes: {
        buttonStyle: {
            name: labels.buttonStyle,
            options: Object.values(buttonStyleOptions),
            control: 'radio',
        },
        colorType: {
            name: labels.colorType,
            options: Object.values(colorTypeOptions),
            control: 'radio',
        },
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
        },
        buttonSize: {
            name: labels.buttonSize,
            options: Object.values(buttonSizeOptions),
            control: 'radio',
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

export const Button = ({ text, ...args }) => (
    <button type="button">
        <ButtonComponent {...args}>
            {text}
        </ButtonComponent>
    </button>
);

Button.args = {
    buttonStyle: buttonStyleDefault,
    colorType: colorTypeDefault,
    colorTheme: colorThemeDefault,
    buttonSize: buttonSizeDefault,
    isDisabled: false,
    text: 'CTA button',
};
