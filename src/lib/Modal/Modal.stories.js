import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import {
    folder,
    blockWidthOptions,
    blockWidthDefault,
    buttonSizeOptions,
    colorPalletOptions,
    iconSizeOptions,
    iconHtmlTagOptions,
    fontSizeOptions,
    spaceOptions,
    formStatusOptions,
} from '../../shared/constants';
import Modal from './Modal';
import ModalWrapper from './ModalWrapper';
import ModalCloseControl from './ModalCloseControl';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalBody from '../ModalBody/ModalBody';
import ModalContent from '../ModalContent/ModalContent';
import Overlay from '../Overlay/Overlay';
import Title from '../Title/Title';
import { CrossIcon } from '../Icon/Icon';
import Text from '../Text/Text';
import DaButton from '../DaButton/DaButton';
import ButtonGroup from '../ButtonGroup/ButtonGroup';

const paddingLateral = 'Lateral padding';

storiesOf(folder.main + folder.sub.modal + 'Modal', module)
    .addDecorator(withKnobs)
    .add('Modal', () => (
        <>
            <ModalWrapper>
                <Modal>
                    <ModalCloseControl>
                        <Overlay opacityValue={20} />
                    </ModalCloseControl>

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

                            <ModalCloseControl>
                                <CrossIcon
                                    htmlTag={iconHtmlTagOptions.button}
                                    iconSize={iconSizeOptions.md}
                                    colorPallet={colorPalletOptions.wab}
                                />
                            </ModalCloseControl>
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

                            <ButtonGroup marginTop={spaceOptions.xs}>
                                <ModalCloseControl>
                                    <DaButton
                                        buttonSize={buttonSizeOptions.md}
                                        colorPallet={colorPalletOptions.status}
                                        colorStatus={formStatusOptions.danger}
                                    >
                                        Close the modal
                                    </DaButton>
                                </ModalCloseControl>
                            </ButtonGroup>
                        </ModalBody>
                    </ModalContent>
                </Modal>

                <ButtonGroup marginTop={spaceOptions.xs}>
                    <ModalCloseControl>
                        <DaButton
                            buttonSize={buttonSizeOptions.md}
                            colorPallet={colorPalletOptions.status}
                            colorStatus={formStatusOptions.default}
                        >
                            Open the modal
                        </DaButton>
                    </ModalCloseControl>
                </ButtonGroup>
            </ModalWrapper>
        </>
    ));
