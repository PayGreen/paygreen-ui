import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { iconSizeOptions } from '../../shared/constants';
import { LeafIcon, OrganizationIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import Text from '../Text/Text';
import MenuItem from '../MenuItem/MenuItem';
import MenuList from '../MenuList/MenuList';
import MenuListItem from '../MenuListItem/MenuListItem';
import Menu from './Menu';

it('renders without crashing', () => {
    const menu = TestRenderer.create(
        <Menu theme={ThemeDefault}>
            <a href="#">
                <MenuItem isClickable={false} theme={ThemeDefault}>
                    Our products
                </MenuItem>
            </a>

            <MenuList theme={ThemeDefault}>
                <a href="#">
                    <MenuListItem theme={ThemeDefault}>
                        <LeafIcon
                            iconSize={iconSizeOptions.lg}
                            theme={ThemeDefault}
                        />

                        <Link theme={ThemeDefault}>Tree</Link>

                        <Text theme={ThemeDefault}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas sit amet accumsan dolor. Nullam
                            fringilla quam leo.
                        </Text>
                    </MenuListItem>
                </a>

                <a href="#">
                    <MenuListItem theme={ThemeDefault}>
                        <OrganizationIcon
                            iconSize={iconSizeOptions.lg}
                            theme={ThemeDefault}
                        />

                        <Link theme={ThemeDefault}>Rounding</Link>
                    </MenuListItem>
                </a>
            </MenuList>
        </Menu>,
    );
    expect(menu.toJSON()).toMatchSnapshot();
});
