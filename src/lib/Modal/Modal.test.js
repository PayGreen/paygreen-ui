import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Modal from './Modal';
import { ModalHeader, ModalBody } from './style/subComponents';
import Title from '../Title/Title';
import { CrossIcon } from '../Icon/Icon';

it('renders without crashing', () => {
    const modal = TestRenderer.create(
        <Modal theme={ThemeDefault}>
            <ModalHeader theme={ThemeDefault}>
                <Title theme={ThemeDefault}>Que voulez-vous faire ?</Title>

                <CrossIcon theme={ThemeDefault} />
            </ModalHeader>

            <ModalBody theme={ThemeDefault}>
            </ModalBody>
        </Modal>,
    );
    expect(modal.toJSON()).toMatchSnapshot();
});
