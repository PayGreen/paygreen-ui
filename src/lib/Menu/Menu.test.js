import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { iconSizeOptions, colorPalletOptions } from '../../shared/constants';
import { LeafIcon, OrganizationIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import Text from '../Text/Text';
import MenuItem from '../MenuItem/MenuItem';
import MenuList from '../MenuList/MenuList';
import Menu from './Menu';

it('renders without crashing', () => {
    const menu = TestRenderer.create(
        <Menu
            theme={ThemeDefault}
        >
            <a href="#">
                <MenuItem
                    isMain={true}
                    hasHoverBase={false}
                    hasHoverAlternative={false}
                    theme={ThemeDefault}
                >
                    <Link
                        hasUnderline={false}
                        hasHover={false}
                        colorPallet={colorPalletOptions.wab}
                        hasUppercase={true}
                        theme={ThemeDefault}
                    >
                        Our products
                    </Link>
                </MenuItem>
            </a>

            <MenuList theme={ThemeDefault}>
                <a href="#">
                    <MenuItem
                        hasHoverEmphasis={true}
                        theme={ThemeDefault}
                    >
                        <LeafIcon
                            iconSize={iconSizeOptions.lg}
                            theme={ThemeDefault}
                        />

                        <Link
                            hasUnderline={false}
                            hasHover={false}
                            theme={ThemeDefault}
                        >
                            Tree
                        </Link>

                        <Text theme={ThemeDefault}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet accumsan dolor. Nullam fringilla quam leo.
                        </Text>
                    </MenuItem>
                </a>

                <a href="#">
                    <MenuItem
                        hasHoverEmphasis={true}
                        theme={ThemeDefault}
                    >
                        <OrganizationIcon
                            iconSize={iconSizeOptions.lg}
                            theme={ThemeDefault}
                        />

                        <Link
                            hasUnderline={false}
                            hasHover={false}
                            theme={ThemeDefault}
                        >
                            Rounding
                        </Link>
                    </MenuItem>
                </a>
            </MenuList>
        </Menu>
    );
    expect(menu.toJSON()).toMatchSnapshot();
});