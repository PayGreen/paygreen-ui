import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import {
    folder,
    blockWidthOptions,
    blockWidthDefault,
    colorPalletOptions,
    iconSizeOptions,
    iconHtmlTagOptions,
    fontSizeOptions,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import Modal from './Modal';
import Title from '../Title/Title';
import { CrossIcon } from '../Icon/Icon';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalBody from '../ModalBody/ModalBody';
import ModalContent from '../ModalContent/ModalContent';
import { Overlay } from './style';
import Text from '../Text/Text';

const paddingLateral = 'Lateral padding';

storiesOf(folder.main + folder.sub.modal + 'Modal', module)
    .addDecorator(withKnobs)
    .add('Modal', () => (
        <Modal isOpen={boolean('is Open', true)}>
            <Overlay />

            <ModalContent
                blockWidth={select(
                    'Block width',
                    blockWidthOptions,
                    blockWidthDefault,
                )}
            >
                <ModalHeader
                    paddingLateral={select(
                        paddingLateral,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    paddingTop={select(
                        "ModalHeader's padding top",
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    paddingBottom={select(
                        "ModalHeader's padding bottom",
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                >
                    <Title textSize={fontSizeOptions.md}>
                        {text('Label', 'This is the Title')}
                    </Title>

                    <CrossIcon
                        htmlTag={iconHtmlTagOptions.button}
                        iconSize={iconSizeOptions.md}
                        colorPallet={colorPalletOptions.wab}
                    />
                </ModalHeader>

                <ModalBody
                    paddingLateral={select(
                        paddingLateral,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    paddingTop={select(
                        "ModalBody's padding top",
                        spaceOptions,
                        spaceOptions.none,
                    )}
                    paddingBottom={select(
                        "ModalBody's padding bottom",
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
