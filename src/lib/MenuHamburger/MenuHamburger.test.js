import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import MenuHamburger from './MenuHamburger';

it('renders without crashing', () => {
    const menuHamburger = TestRenderer.create(
        <MenuHamburger theme={ThemeDefault} />,
    );
    expect(menuHamburger.toJSON()).toMatchSnapshot();
});
