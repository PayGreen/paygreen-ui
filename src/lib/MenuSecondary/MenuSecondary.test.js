import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { LockIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import MenuItem from '../MenuItem/MenuItem';
import Menu from '../Menu/Menu';
import MenuSecondary from './MenuSecondary';

it('renders without crashing', () => {
    const element = TestRenderer.create(
        <MenuSecondary theme={ThemeDefault} isOpen={true}>
            <Menu theme={ThemeDefault}>
                <a href="#">
                    <MenuItem
                        theme={ThemeDefault}
                        isMain={true}
                    >
                        <LockIcon
                            theme={ThemeDefault}
                        />

                        <Link
                            theme={ThemeDefault}
                            underline={false}
                            uppercase={true}
                        >
                            Login
                        </Link>
                    </MenuItem>
                </a>
            </Menu>
        </MenuSecondary>
    );
    expect(element.toJSON()).toMatchSnapshot();
});