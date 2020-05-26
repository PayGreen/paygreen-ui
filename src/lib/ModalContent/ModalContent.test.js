import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Title from '../Title/Title';
import { CrossIcon } from '../Icon/Icon';
import  ModalHeader  from '../ModalHeader/ModalHeader';
import  ModalBody  from '../ModalBody/ModalBody';
import ModalContent from './ModalContent';

it('renders without crashing', () => {
    const modalContent = TestRenderer.create(
        <ModalContent theme={ThemeDefault}>
            <ModalHeader theme={ThemeDefault}>
                <Title theme={ThemeDefault}>Que voulez-vous faire ?</Title>

                <CrossIcon theme={ThemeDefault} />
            </ModalHeader>

            <ModalBody theme={ThemeDefault}></ModalBody>
        </ModalContent>,
    );
    expect(modalContent.toJSON()).toMatchSnapshot();
});
