import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import ModalBody from './ModalBody';

it('renders without crashing', () => {
    const modalBody = TestRenderer.create(
        <ModalBody theme={ThemeDefault}>
            <div>Texte contenu dans le body</div>
        </ModalBody>,
    );
    expect(modalBody.toJSON()).toMatchSnapshot();
});
