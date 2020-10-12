import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { itemHtmlTagOptions } from '../../shared/constants';
import MenuItem from '../MenuItem/MenuItem';
import Menu from '../Menu/Menu';
import MenuPrimary from '../MenuPrimary/MenuPrimary';
import MenuSecondary from '../MenuSecondary/MenuSecondary';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import MenuClose from '../MenuClose/MenuClose';
import MenuGroup from './MenuGroup';

it('renders without crashing', () => {
    const component = TestRenderer.create(
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

            <MenuSecondary
                theme={ThemeDefault}
                closeComponent={<MenuClose theme={ThemeDefault} />}
            >
                <Menu theme={ThemeDefault} htmlTag={itemHtmlTagOptions.div}>
                    <a href="#">
                        <MenuItem theme={ThemeDefault}>Login</MenuItem>
                    </a>
                </Menu>
            </MenuSecondary>
        </MenuGroup>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});
