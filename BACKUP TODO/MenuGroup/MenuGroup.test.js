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
import MenuMobile from '../MenuMobile/MenuMobile';
import MenuGroup from './MenuGroup';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <MenuGroup theme={ThemeDefault}>
            <MenuMobile theme={ThemeDefault}>
                <MenuHamburger theme={ThemeDefault} />
            </MenuMobile>

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
