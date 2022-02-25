import React from 'react';

import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
    colorTypeDefault,
    colorPalletOptions,
    colorThemeDefault,
    formStatusOptions,
    formStatusDefault,
    inputWidthOptions,
    inputWidthDefault,
    blockPositionOptions,
    blockPositionDefault,
    iconSizeOptions,
    fontSizeOptions,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Text from '../Text/Text';
import Message from './Message';
import { CautionIcon } from '../Icon/Icon';

const { wab, ...buttonColorPalletOptions } = colorPalletOptions;

export default {
    title: folder.popup + 'Message',
    argTypes: {
        arrowBlock: {
            name: 'Arrow block',
            options: Object.values(blockPositionOptions),
            control: 'select',
        },
        colorType: {
            name: labels.colorType,
            options: Object.values(buttonColorPalletOptions),
            control: 'radio',
        },
        colorPallet: {
            name: labels.colorPallet,
            options: Object.values(colorPalletOptions),
            control: 'radio',
        },
        colorStatus: {
            name: labels.colorStatus,
            options: Object.values(formStatusOptions),
            control: 'select',
        },
        isRounded: {
            name: labels.isRounded,
            control: 'boolean',
        },
        fieldSize: {
            name: labels.fieldSize,
            options: Object.values(buttonSizeOptions),
            control: 'radio',
        },
        blockWidth: {
            name: labels.blockWidth,
            options: Object.values(inputWidthOptions),
            control: 'select',
        },
        hasStaticWidth: {
            name: labels.hasStaticWidth,
            control: 'boolean',
        },
        icon: {
            name: labels.icon,
            control: 'boolean',
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
        text: {
            name: labels.label,
            control: 'text',
        },
    },
};

export const SimpleMessage = ({ text, icon, ...args }) => (
    <Message {...args}>
        {icon ? (
            <CautionIcon
                iconSize={iconSizeOptions.md}
                colorStatus={args.colorStatus}
            />
        ) : (
            <></>
        )}

        <Text textSize={fontSizeOptions.sm}>{text}</Text>
    </Message>
);

SimpleMessage.args = {
    arrowBlock: blockPositionDefault,
    colorType: colorTypeDefault,
    colorPallet: colorPalletOptions.status,
    colorTheme: colorThemeDefault,
    colorStatus: formStatusDefault,
    isRounded: false,
    fieldSize: buttonSizeDefault,
    hasStaticWidth: false,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
    blockWidth: inputWidthDefault,
    icon: false,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend aliquet libero. Morbi ultrices tristique leo vitae porta.',
};
