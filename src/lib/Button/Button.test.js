import React from 'react'
import Button from './Button';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';

it('renders without crashing', () => {
    const button = TestRenderer.create(
        <Button theme={ThemeDefault}>
            CTA button
        </Button>
    );
    expect(button.toJSON()).toMatchSnapshot();
})