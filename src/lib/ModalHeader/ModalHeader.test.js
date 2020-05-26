import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { ModalHeader } from './style/subComponents';
import Title from '../Title/Title';
import { CrossIcon } from '../Icon/Icon';

it('renders without crashing', () => {
    const modalHeader = TestRenderer.create(
            <ModalHeader theme={ThemeDefault}>
                <Title theme={ThemeDefault}>Que voulez-vous faire ?</Title>

                <CrossIcon theme={ThemeDefault} />
            </ModalHeader>
    );
    expect(modalHeader.toJSON()).toMatchSnapshot();
});
