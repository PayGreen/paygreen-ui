import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Overlay from '../Overlay/Overlay';
import ModalBody from '../ModalBody/ModalBody';
import ModalContent from '../ModalContent/ModalContent';
import Modal from '../Modal/Modal';
import ModalControl from './ModalControl';
import ModalProvider from './ModalProvider';

it('renders without crashing', () => {
    const modalProvider = TestRenderer.create(
        <ModalProvider>
            <Modal theme={ThemeDefault}>
                <ModalControl>
                    <Overlay theme={ThemeDefault} />
                </ModalControl>

                <ModalContent theme={ThemeDefault}>
                    <ModalBody theme={ThemeDefault}>This is the text</ModalBody>
                </ModalContent>
            </Modal>
        </ModalProvider>,
    );
    expect(modalProvider.toJSON()).toMatchSnapshot();
});
