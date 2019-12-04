import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Button from './Button';

it('renders without crashing', () => {
    const button = TestRenderer.create(
        <Button theme={ThemeDefault}>
            CTA button
        </Button>
    );
    expect(button.toJSON()).toMatchSnapshot();
});