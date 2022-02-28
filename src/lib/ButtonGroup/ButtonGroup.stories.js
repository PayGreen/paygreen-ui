import React from 'react';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
    buttonStyleOptions,
    alignOptions,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Button from '../Button/Button';
import ButtonGroupComponent from './ButtonGroup';

export default {
    title: folder.button + 'ButtonGroup',
    argTypes: {
        align: {
            name: labels.align,
            options: Object.values(alignOptions),
            control: 'radio',
        },
        hasResetedMargins: {
            name: 'Has reseted margins',
            control: 'boolean',
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
        buttonSize: {
            name: labels.buttonSize,
            options: Object.values(buttonSizeOptions),
            control: 'radio',
        },
    },
};

export const ButtonGroup = ({ buttonSize, ...args }) => (
    <ButtonGroupComponent {...args}>
        <button type="button">
            <Button
                buttonStyle={buttonStyleOptions.line}
                buttonSize={buttonSize}
            >
                First button
            </Button>
        </button>

        <button type="button">
            <Button buttonSize={buttonSize}>Second button</Button>
        </button>
    </ButtonGroupComponent>
);

ButtonGroup.args = {
    align: alignOptions.center,
    hasResetedMargins: false,
    marginLateral: spaceDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
    buttonSize: buttonSizeDefault,
};
