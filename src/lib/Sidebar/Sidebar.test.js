import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Sidebar from './Sidebar';

it('renders without crashing', () => {
    const sidebar = TestRenderer.create(
        <Sidebar theme={ThemeDefault}>
            <div className="main-nav">
                <MenuHamburger theme={ThemeDefault} />
            </div>
        </Sidebar>,
    );
    expect(sidebar.toJSON()).toMatchSnapshot();
});
