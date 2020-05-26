import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Title from '../Title/Title';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalBody from '../ModalBody/ModalBody';
import ModalContent from './ModalContent';
import { CrossIcon } from '../Icon/Icon';

it('renders without crashing', () => {
    const modalContent = TestRenderer.create(
        <ModalContent theme={ThemeDefault}>
            <ModalHeader theme={ThemeDefault}>
                <Title theme={ThemeDefault}>This is the Title</Title>

                <CrossIcon theme={ThemeDefault} />
            </ModalHeader>

            <ModalBody theme={ThemeDefault}></ModalBody>
        </ModalContent>,
    );
    expect(modalContent.toJSON()).toMatchSnapshot();
});
