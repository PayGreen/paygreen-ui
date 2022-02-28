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
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalBody from '../ModalBody/ModalBody';
import ModalContent from './ModalContent';
import Text from '../Text/Text';

export default {
    title: folder.popup + folder.sub.modal + 'ModalContent',
    argTypes: {
        title: {
            name: 'Title',
            control: 'text',
            defaultValue: 'This is the Title',
        },
        blockWidth: {
            name: labels.blockWidth,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceOptions.xs,
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

export const SimpleModalContent = ({
    blockWidth,
    paddingLateral,
    paddingTop,
    paddingBottom,
    title,
}) => {
    return (
        <ModalContent blockWidth={blockWidth}>
            <ModalHeader
                paddingLateral={paddingLateral}
                paddingTop={paddingTop}
                paddingBottom={paddingBottom}
            >
                <Title textSize={fontSizeOptions.md}>{title}</Title>

                <CrossIcon
                    htmlTag={iconHtmlTagOptions.button}
                    iconSize={iconSizeOptions.md}
                    colorPallet={colorPalletOptions.wab}
                />
            </ModalHeader>

            <ModalBody
                paddingLateral={paddingLateral}
                paddingTop={paddingTop}
                paddingBottom={paddingBottom}
            >
                <Text>
                    Curabitur congue varius ex et posuere. Maecenas tincidunt
                    diam ut nisl porttitor scelerisque.
                </Text>
            </ModalBody>
        </ModalContent>
    );
};
