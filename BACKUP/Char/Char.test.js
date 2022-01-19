import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Char from './Char';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <Char theme={ThemeDefault} text="0123456789ABC" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
});
