import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Topbar from './Topbar';

it('renders without crashing', () => {
    const topbar = TestRenderer.create(
        <Topbar theme={ThemeDefault}>
            <MenuHamburger theme={ThemeDefault} />
        </Topbar>,
    );
    expect(topbar.toJSON()).toMatchSnapshot();
});
