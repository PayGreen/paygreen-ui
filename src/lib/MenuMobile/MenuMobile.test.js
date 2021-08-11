import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { iconSizeOptions, iconHtmlTagOptions } from '../../shared/constants';
import { UserIcon } from '../Icon/Icon';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Logo from '../Logo/Logo';
import { logo } from '../Logo/sample/logo';
import MenuMobile from './MenuMobile';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <MenuMobile theme={ThemeDefault}>
            <MenuHamburger theme={ThemeDefault} />

            <a href="#">
                <Logo theme={ThemeDefault} hasThemeColor={true}>
                    {logo}
                </Logo>
            </a>

            <UserIcon
                theme={ThemeDefault}
                htmlTag={iconHtmlTagOptions.button}
                iconSize={iconSizeOptions.xl}
            />
        </MenuMobile>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});
