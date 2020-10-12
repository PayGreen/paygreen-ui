import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { itemHtmlTagOptions, iconSizeOptions } from '../../shared/constants';
import { LockIcon } from '../Icon/Icon';
import MenuItem from '../MenuItem/MenuItem';
import Menu from '../Menu/Menu';
import MenuSecondary from './MenuSecondary';

it('renders without crashing', () => {
    const element = TestRenderer.create(
        <MenuSecondary theme={ThemeDefault} isOpen={true}>
            <Menu theme={ThemeDefault} htmlTag={itemHtmlTagOptions.div}>
                <a href="#">
                    <MenuItem theme={ThemeDefault}>
                        <LockIcon
                            theme={ThemeDefault}
                            iconSize={iconSizeOptions.lg}
                        />
                        Login
                    </MenuItem>
                </a>
            </Menu>
        </MenuSecondary>,
    );
    expect(element.toJSON()).toMatchSnapshot();
});
