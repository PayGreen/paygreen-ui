import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Topbar from './Topbar';

it('renders without crashing', () => {
    const topbar = TestRenderer.create(
        <Topbar theme={ThemeDefault}>
            <div className="main-nav">
                <MenuHamburger theme={ThemeDefault} />
            </div>
        </Topbar>,
    );
    expect(topbar.toJSON()).toMatchSnapshot();
});
