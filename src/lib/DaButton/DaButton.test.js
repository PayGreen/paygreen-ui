import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import DaButton from './DaButton';

it('renders without crashing', () => {
    const daButton = TestRenderer.create(
        <button type="button">
            <DaButton theme={ThemeDefault}>CTA button</DaButton>
        </button>,
    );
    expect(daButton.toJSON()).toMatchSnapshot();
});
