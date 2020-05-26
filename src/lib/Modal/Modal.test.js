import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Modal from './Modal';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalBody from '../ModalBody/ModalBody';
import ModalContent from '../ModalContent/ModalContent';
import { Overlay } from './style';
import Title from '../Title/Title';
import { CrossIcon } from '../Icon/Icon';

it('renders without crashing', () => {
    const modal = TestRenderer.create(
        <Modal theme={ThemeDefault}>
            <Overlay theme={ThemeDefault} />

            <ModalContent theme={ThemeDefault}>
                <ModalHeader theme={ThemeDefault}>
                    <Title theme={ThemeDefault}>This is the Title</Title>

                    <CrossIcon theme={ThemeDefault} />
                </ModalHeader>

                <ModalBody theme={ThemeDefault}></ModalBody>
            </ModalContent>
        </Modal>,
    );
    expect(modal.toJSON()).toMatchSnapshot();
});
