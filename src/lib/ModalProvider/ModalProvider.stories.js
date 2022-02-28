import React from 'react';
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
import ModalControl from './ModalControl';
import ModalProvider from './ModalProvider';

export default {
    title: folder.popup + folder.sub.modal + 'ModalProvider (entire modal)',
};

export const EntireModalProvider = () => {
    return (
        <ModalProvider>
            <ModalControl>
                <button type="button">
                    <DaButton
                        buttonSize={buttonSizeOptions.md}
                        colorPallet={colorPalletOptions.status}
                        colorStatus={formStatusOptions.default}
                    >
                        Open the modal
                    </DaButton>
                </button>
            </ModalControl>

            <Modal>
                <ModalControl>
                    <Overlay opacityValue={20} />
                </ModalControl>

                <ModalContent>
                    <ModalHeader>
                        <Title textSize={fontSizeOptions.md}>
                            This is the Title
                        </Title>

                        <ModalControl hasOnClickControl={true}>
                            <CrossIcon
                                htmlTag={iconHtmlTagOptions.button}
                                iconSize={iconSizeOptions.md}
                                colorPallet={colorPalletOptions.wab}
                            />
                        </ModalControl>
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
                            <ModalControl>
                                <button type="button">
                                    <DaButton
                                        buttonSize={buttonSizeOptions.md}
                                        colorPallet={colorPalletOptions.status}
                                        colorStatus={formStatusOptions.danger}
                                    >
                                        Close the modal
                                    </DaButton>
                                </button>
                            </ModalControl>
                        </ButtonGroup>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </ModalProvider>
    );
};
