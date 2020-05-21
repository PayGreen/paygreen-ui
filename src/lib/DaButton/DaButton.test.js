import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import DaButton from './DaButton';

it('renders without crashing', () => {
    const daButton = TestRenderer.create(
        <DaButton theme={ThemeDefault}>
            CTA button
        </DaButton>
    );
    expect(daButton.toJSON()).toMatchSnapshot();
});