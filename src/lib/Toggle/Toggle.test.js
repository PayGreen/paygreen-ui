import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Toggle from './Toggle';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <Toggle theme={ThemeDefault}>
            Something
        </Toggle>
    );
    expect(component.toJSON()).toMatchSnapshot();
});
