import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import List from './List';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <List theme={ThemeDefault}>
            Something
        </List>
    );
    expect(component.toJSON()).toMatchSnapshot();
});