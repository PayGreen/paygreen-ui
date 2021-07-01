import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
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

storiesOf(folder.popup + folder.sub.modal + 'Modal', module)
    .addDecorator(withKnobs)
    .add('Modal', () => (
        <Modal isOpen={boolean(labels.isOpen, true)}>
            <Overlay opacityValue={20} />

            <ModalContent
                blockWidth={select(
                    labels.blockWidth,
                    spaceOptions,
                    spaceOptions.md,
                )}
            >
                <ModalHeader
                    paddingLateral={select(
                        labels.paddingLateral,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    paddingTop={select(
                        'ModalHeader\'s padding top',
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    paddingBottom={select(
                        'ModalHeader\'s padding bottom',
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                >
                    <Title textSize={fontSizeOptions.md}>
                        {text('Title', 'This is the Title')}
                    </Title>

                    <CrossIcon
                        htmlTag={iconHtmlTagOptions.button}
                        iconSize={iconSizeOptions.md}
                        colorPallet={colorPalletOptions.wab}
                    />
                </ModalHeader>

                <ModalBody
                    paddingLateral={select(
                        labels.paddingLateral,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    paddingTop={select(
                        'ModalBody\'s padding top',
                        spaceOptions,
                        spaceOptions.none,
                    )}
                    paddingBottom={select(
                        'ModalBody\'s padding bottom',
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                >
                    <Text>
                        Curabitur congue varius ex et posuere. Maecenas
                        tincidunt diam ut nisl porttitor scelerisque.
                    </Text>
                </ModalBody>
            </ModalContent>
        </Modal>
    ));
