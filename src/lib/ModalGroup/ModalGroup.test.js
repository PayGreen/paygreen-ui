import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Overlay from '../Overlay/Overlay';
import ModalBody from '../ModalBody/ModalBody';
import ModalContent from '../ModalContent/ModalContent';
import Modal from '../Modal/Modal';
import ModalControl from './ModalControl';
import ModalGroup from './ModalGroup';

it('renders without crashing', () => {
    const modalGroup = TestRenderer.create(
        <ModalGroup>
            <Modal theme={ThemeDefault}>
                <ModalControl>
                    <Overlay theme={ThemeDefault} />
                </ModalControl>

                <ModalContent theme={ThemeDefault}>
                    <ModalBody theme={ThemeDefault}>This is the text</ModalBody>
                </ModalContent>
            </Modal>
        </ModalGroup>,
    );
    expect(modalGroup.toJSON()).toMatchSnapshot();
});
