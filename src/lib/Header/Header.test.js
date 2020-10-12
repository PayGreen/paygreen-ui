import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import MenuItem from '../MenuItem/MenuItem';
import Menu from '../Menu/Menu';
import MenuPrimary from '../MenuPrimary/MenuPrimary';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import MenuGroup from '../MenuGroup/MenuGroup';
import Header from './Header';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <Header theme={ThemeDefault}>
            <MenuGroup theme={ThemeDefault}>
                <div className="main-nav">
                    <MenuHamburger theme={ThemeDefault} />
                </div>

                <MenuPrimary theme={ThemeDefault}>
                    <Menu theme={ThemeDefault}>
                        <a href="#">
                            <MenuItem theme={ThemeDefault}>About us</MenuItem>
                        </a>
                    </Menu>
                </MenuPrimary>
            </MenuGroup>
        </Header>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});
