import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Divider from './Divider';

it('renders without crashing', () => {
    const divider = TestRenderer.create(
        <Divider theme={ThemeDefault} />
    );
    expect(divider.toJSON()).toMatchSnapshot();
});