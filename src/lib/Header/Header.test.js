import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Header from './Header';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <Header theme={ThemeDefault}>
            Something
        </Header>
    );
    expect(component.toJSON()).toMatchSnapshot();
});
