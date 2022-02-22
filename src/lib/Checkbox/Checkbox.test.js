import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Checkbox from './Checkbox';

it('renders without crashing', () => {
    const checkbox = TestRenderer.create(
        <Checkbox theme={ThemeDefault} id="first" label="First Choice" />,
    );
    expect(checkbox.toJSON()).toMatchSnapshot();
});
