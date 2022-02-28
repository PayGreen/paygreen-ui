import React from 'react';
import {
    folder,
    colorPalletOptions,
    iconSizeOptions,
    iconHtmlTagOptions,
    fontSizeOptions,
    spaceOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Title from '../Title/Title';
import { CrossIcon } from '../Icon/Icon';
import ModalHeader from './ModalHeader';

export default {
    title: folder.popup + folder.sub.modal + 'ModalHeader',
    argTypes: {
        title: {
            name: 'Title',
            control: 'text',
            defaultValue: 'This is the Title',
        },
        paddingBottom: {
            name: labels.paddingBottom,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceOptions.sm,
        },
        paddingLateral: {
            name: labels.paddingLateral,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceOptions.sm,
        },
        paddingTop: {
            name: labels.paddingTop,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceOptions.sm,
        },
    },
};

export const SimpleModalHeader = ({ title, ...args }) => {
    return (
        <ModalHeader {...args}>
            <Title textSize={fontSizeOptions.md}>{title}</Title>

            <CrossIcon
                htmlTag={iconHtmlTagOptions.button}
                iconSize={iconSizeOptions.md}
                colorPallet={colorPalletOptions.wab}
            />
        </ModalHeader>
    );
};
