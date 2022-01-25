import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Button from './Button';

it('renders without crashing', () => {
    const button = TestRenderer.create(
        <button type="button">
            <Button theme={ThemeDefault}>CTA button</Button>
        </button>,
    );
    expect(button.toJSON()).toMatchSnapshot();
});
