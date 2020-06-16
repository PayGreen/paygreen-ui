import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import DaButton from '../DaButton/DaButton';
import Overlay from '../Overlay/Overlay';
import ModalBody from '../ModalBody/ModalBody';
import ModalContent from '../ModalContent/ModalContent';
import Modal from '../Modal/Modal';
import ModalCloseControl from './ModalCloseControl';
import ModalGroup from './ModalGroup';

it('renders without crashing', () => {
    const modalGroup = TestRenderer.create(
        <ModalGroup>
            <ModalCloseControl>
                <button type="button">
                    <DaButton theme={ThemeDefault}>Open the modal</DaButton>
                </button>
            </ModalCloseControl>

            <Modal theme={ThemeDefault}>
                <ModalCloseControl>
                    <Overlay theme={ThemeDefault} />
                </ModalCloseControl>

                <ModalContent theme={ThemeDefault}>
                    <ModalBody theme={ThemeDefault}>
                        This is the text
                    </ModalBody>
                </ModalContent>
            </Modal>
        </ModalGroup>,
    );
    expect(modalGroup.toJSON()).toMatchSnapshot();
});
