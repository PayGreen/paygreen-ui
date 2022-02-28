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
import { CrossIcon } from '../Icon/Icon';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalBody from '../ModalBody/ModalBody';
import ModalContent from '../ModalContent/ModalContent';
import Overlay from '../Overlay/Overlay';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Modal from './Modal';

export default {
    title: folder.popup + folder.sub.modal + 'Modal',
    argTypes: {
        isOpen: {
            name: labels.isOpen,
            control: 'boolean',
            defaultValue: true,
        },
        title: {
            name: 'Title',
            control: 'text',
            defaultValue: 'This is the Title',
        },
        blockWidth: {
            name: labels.blockWidth,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceOptions.md,
        },
        paddingTopHeader: {
            name: "ModalHeader's " + labels.paddingTop,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceOptions.md,
        },
        paddingBottomHeader: {
            name: "ModalHeader's " + labels.paddingBottom,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceOptions.md,
        },
        paddingLateralHeader: {
            name: "ModalHeader's " + labels.paddingLateral,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceOptions.md,
        },
        paddingTopBody: {
            name: "ModalBody's " + labels.paddingTop,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceOptions.md,
        },
        paddingBottomBody: {
            name: "ModalBody's " + labels.paddingBottom,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceOptions.md,
        },
        paddingLateralBody: {
            name: "ModalBody's " + labels.paddingLateral,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceOptions.md,
        },
    },
};

export const SimpleModal = ({
    isOpen,
    title,
    blockWidth,
    paddingLateralBody,
    paddingTopBody,
    paddingBottomBody,
    paddingLateralHeader,
    paddingTopHeader,
    paddingBottomHeader,
}) => {
    return (
        <Modal isOpen={isOpen}>
            <Overlay opacityValue={20} />

            <ModalContent blockWidth={blockWidth}>
                <ModalHeader
                    paddingLateral={paddingLateralHeader}
                    paddingTop={paddingTopHeader}
                    paddingBottom={paddingBottomHeader}
                >
                    <Title textSize={fontSizeOptions.md}>{title}</Title>

                    <CrossIcon
                        htmlTag={iconHtmlTagOptions.button}
                        iconSize={iconSizeOptions.md}
                        colorPallet={colorPalletOptions.wab}
                    />
                </ModalHeader>

                <ModalBody
                    paddingLateral={paddingLateralBody}
                    paddingTop={paddingTopBody}
                    paddingBottom={paddingBottomBody}
                >
                    <Text>
                        Curabitur congue varius ex et posuere. Maecenas
                        tincidunt diam ut nisl porttitor scelerisque.
                    </Text>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
