import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
    folder,
    buttonSizeOptions,
    colorPalletOptions,
    iconSizeOptions,
    iconHtmlTagOptions,
    fontSizeOptions,
    spaceOptions,
    formStatusOptions,
} from '../../shared/constants';
import { CrossIcon } from '../Icon/Icon';
import Title from '../Title/Title';
import Text from '../Text/Text';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import DaButton from '../DaButton/DaButton';
import Overlay from '../Overlay/Overlay';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalBody from '../ModalBody/ModalBody';
import ModalContent from '../ModalContent/ModalContent';
import Modal from '../Modal/Modal';
import ModalCloseControl from './ModalCloseControl';
import ModalGroup from './ModalGroup';

storiesOf(folder.main + folder.sub.modal + 'ModalGroup', module)
    .addDecorator(withKnobs)
    .add('Modal Group', () => (
        <ModalGroup>
            <ModalCloseControl>
                <button type="button">
                    <DaButton
                        buttonSize={buttonSizeOptions.md}
                        colorPallet={colorPalletOptions.status}
                        colorStatus={formStatusOptions.default}
                    >
                        Open the modal
                    </DaButton>
                </button>
            </ModalCloseControl>

            <Modal>
                <ModalCloseControl>
                    <Overlay opacityValue={20} />
                </ModalCloseControl>

                <ModalContent>
                    <ModalHeader>
                        <Title textSize={fontSizeOptions.md}>
                            This is the Title
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
                        paddingLateral={spaceOptions.sm}
                        paddingTop={spaceOptions.none}
                        paddingBottom={spaceOptions.sm}
                    >
                        <Text>
                            Curabitur congue varius ex et posuere. Maecenas
                            tincidunt diam ut nisl porttitor scelerisque.
                        </Text>

                        <ButtonGroup marginTop={spaceOptions.xs}>
                            <ModalCloseControl>
                                <button type="button">
                                    <DaButton
                                        buttonSize={buttonSizeOptions.md}
                                        colorPallet={
                                            colorPalletOptions.status
                                        }
                                        colorStatus={
                                            formStatusOptions.danger
                                        }
                                    >
                                        Close the modal
                                    </DaButton>
                                </button>
                            </ModalCloseControl>
                        </ButtonGroup>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </ModalGroup>
    ));
