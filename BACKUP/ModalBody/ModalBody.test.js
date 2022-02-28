import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import ModalBody from './ModalBody';
import Text from '../Text/Text';

it('renders without crashing', () => {
    const modalBody = TestRenderer.create(
        <ModalBody theme={ThemeDefault}>
            <Text theme={ThemeDefault}>This is the body.</Text>
        </ModalBody>,
    );
    expect(modalBody.toJSON()).toMatchSnapshot();
});
