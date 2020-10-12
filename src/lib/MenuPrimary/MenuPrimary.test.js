import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { iconSizeOptions, spaceOptions } from '../../shared/constants';
import { LeafIcon, CardsIcon, OutIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import IconLabel from '../IconLabel/IconLabel';
import Text from '../Text/Text';
import MenuItem from '../MenuItem/MenuItem';
import MenuList from '../MenuList/MenuList';
import MenuListItem from '../MenuListItem/MenuListItem';
import Menu from '../Menu/Menu';
import MenuPrimary from './MenuPrimary';

it('renders without crashing', () => {
    const menuPrimary = TestRenderer.create(
        <MenuPrimary theme={ThemeDefault} isOpen={true}>
            <Menu theme={ThemeDefault}>
                <a href="#">
                    <MenuItem theme={ThemeDefault}>About us</MenuItem>
                </a>
            </Menu>

            <Menu theme={ThemeDefault}>
                <MenuItem theme={ThemeDefault} isClickable={false}>
                    Other products
                </MenuItem>

                <MenuList theme={ThemeDefault}>
                    <a href="#">
                        <MenuListItem theme={ThemeDefault}>
                            <LeafIcon
                                theme={ThemeDefault}
                                iconSize={iconSizeOptions.lg}
                            />

                            <Link theme={ThemeDefault}>Tree</Link>

                            <Text theme={ThemeDefault}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Maecenas sit amet accumsan
                                dolor. Nullam fringilla quam leo.
                            </Text>
                        </MenuListItem>
                    </a>

                    <a href="#">
                        <MenuListItem theme={ThemeDefault}>
                            <CardsIcon
                                theme={ThemeDefault}
                                iconSize={iconSizeOptions.lg}
                            />

                            <Link theme={ThemeDefault}>Payment</Link>

                            <IconLabel theme={ThemeDefault}>
                                <OutIcon
                                    iconSize={iconSizeOptions.xs}
                                    marginRight={spaceOptions.xs}
                                    theme={ThemeDefault}
                                />
                                Dev
                            </IconLabel>
                        </MenuListItem>
                    </a>
                </MenuList>
            </Menu>
        </MenuPrimary>,
    );
    expect(menuPrimary.toJSON()).toMatchSnapshot();
});
