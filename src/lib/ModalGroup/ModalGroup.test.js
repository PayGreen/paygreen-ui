import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Modal from '../Modal/Modal';
import ModalGroup from './ModalGroup';
import ModalCloseControl from './ModalCloseControl';
import ModalBody from '../ModalBody/ModalBody';
import ModalContent from '../ModalContent/ModalContent';
import Overlay from '../Overlay/Overlay';
import Text from '../Text/Text';
import DaButton from '../DaButton/DaButton';
import ButtonGroup from '../ButtonGroup/ButtonGroup';

it('renders without crashing', () => {
    const modalGroup = TestRenderer.create(
        <ModalGroup>
            <Modal theme={ThemeDefault}>
                <ModalCloseControl>
                    <Overlay theme={ThemeDefault} />
                </ModalCloseControl>

                <ModalContent theme={ThemeDefault}>
                    <ModalBody theme={ThemeDefault}>
                        <Text theme={ThemeDefault}>This is the text.</Text>

                        <ButtonGroup theme={ThemeDefault}>
                            <ModalCloseControl>
                                <button type="button">
                                    <DaButton theme={ThemeDefault}>
                                        Close the modal
                                    </DaButton>
                                </button>
                            </ModalCloseControl>
                        </ButtonGroup>
                    </ModalBody>
                </ModalContent>
            </Modal>

            <ButtonGroup theme={ThemeDefault}>
                <ModalCloseControl>
                    <button type="button">
                        <DaButton theme={ThemeDefault}>Open the modal</DaButton>
                    </button>
                </ModalCloseControl>
            </ButtonGroup>
        </ModalGroup>,
    );
    expect(modalGroup.toJSON()).toMatchSnapshot();
});
