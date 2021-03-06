import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import ModalHeader from './ModalHeader';
import Title from '../Title/Title';
import { CrossIcon } from '../Icon/Icon';

it('renders without crashing', () => {
    const modalHeader = TestRenderer.create(
        <ModalHeader theme={ThemeDefault}>
            <Title theme={ThemeDefault}>This is the Title</Title>

            <CrossIcon theme={ThemeDefault} />
        </ModalHeader>,
    );
    expect(modalHeader.toJSON()).toMatchSnapshot();
});
