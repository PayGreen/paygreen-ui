import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Footer from './Footer';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <Footer theme={ThemeDefault}>
            Something
        </Footer>
    );
    expect(component.toJSON()).toMatchSnapshot();
});