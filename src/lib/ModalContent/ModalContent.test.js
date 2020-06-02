import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Title from '../Title/Title';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalBody from '../ModalBody/ModalBody';
import ModalContent from './ModalContent';
import Text from '../Text/Text';

it('renders without crashing', () => {
    const modalContent = TestRenderer.create(
        <ModalContent theme={ThemeDefault}>
            <ModalHeader theme={ThemeDefault}>
                <Title theme={ThemeDefault}>This is the Title</Title>
            </ModalHeader>

            <ModalBody theme={ThemeDefault}>
                <Text theme={ThemeDefault}>
                    Curabitur congue varius ex et posuere. Maecenas tincidunt
                    diam ut nisl porttitor scelerisque.Curabitur congue varius
                    ex et posuere. Maecenas tincidunt diam ut nisl porttitor
                    scelerisque.Curabitur congue varius ex et posuere. Maecenas
                    tincidunt diam ut nisl porttitor scelerisque.
                </Text>
            </ModalBody>
        </ModalContent>,
    );
    expect(modalContent.toJSON()).toMatchSnapshot();
});
