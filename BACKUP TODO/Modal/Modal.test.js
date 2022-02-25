import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Modal from './Modal';
import ModalBody from '../ModalBody/ModalBody';
import ModalContent from '../ModalContent/ModalContent';
import Overlay from '../Overlay/Overlay';
import Text from '../Text/Text';

it('renders without crashing', () => {
    const modal = TestRenderer.create(
        <Modal theme={ThemeDefault}>
            <Overlay theme={ThemeDefault} />

            <ModalContent theme={ThemeDefault}>
                <ModalBody theme={ThemeDefault}>
                    <Text theme={ThemeDefault}>This is the body.</Text>
                </ModalBody>
            </ModalContent>
        </Modal>,
    );
    expect(modal.toJSON()).toMatchSnapshot();
});
