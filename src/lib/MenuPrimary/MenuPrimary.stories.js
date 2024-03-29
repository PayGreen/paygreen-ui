import React from 'react';
import { folder, iconSizeOptions } from '../../shared/constants';
import labels from '../../shared/labels';
import { LeafIcon, CardsIcon, OrganizationIcon, OutIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import IconLabel from '../IconLabel/IconLabel';
import Text from '../Text/Text';
import MenuItem from '../MenuItem/MenuItem';
import MenuList from '../MenuList/MenuList';
import MenuListItem from '../MenuListItem/MenuListItem';
import Menu from '../Menu/Menu';
import MenuPrimary from './MenuPrimary';

export default {
    title: folder.nav + folder.sub.menu + 'MenuPrimary',
    argTypes: {
        isOpen: {
            name: labels.isOpen,
            control: 'boolean',
        },
    },
};

export const SimpleMenuPrimary = ({ isOpen }) => (
    <MenuPrimary isOpen={isOpen}>
        <Menu>
            <a href="#">
                <MenuItem>About us</MenuItem>
            </a>
        </Menu>

        <Menu>
            <MenuItem isClickable={false}>Our products</MenuItem>

            <MenuList>
                <a href="#">
                    <MenuListItem>
                        <LeafIcon iconSize={iconSizeOptions.lg} />

                        <Link>Tree</Link>

                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas sit amet accumsan dolor. Nullam
                            fringilla quam leo.
                        </Text>
                    </MenuListItem>
                </a>

                <a href="#">
                    <MenuListItem>
                        <CardsIcon iconSize={iconSizeOptions.lg} />

                        <Link>Payment</Link>

                        <IconLabel icon={<OutIcon />}>Dev</IconLabel>
                    </MenuListItem>
                </a>

                <a href="#">
                    <MenuListItem>
                        <OrganizationIcon iconSize={iconSizeOptions.lg} />

                        <Link>Rounding</Link>
                    </MenuListItem>
                </a>
            </MenuList>
        </Menu>

        <Menu>
            <MenuItem isClickable={false}>Other products</MenuItem>

            <MenuList>
                <a href="#">
                    <MenuListItem>
                        <LeafIcon iconSize={iconSizeOptions.lg} />

                        <Link>Tree</Link>

                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas sit amet accumsan dolor. Nullam
                            fringilla quam leo.
                        </Text>
                    </MenuListItem>
                </a>

                <a href="#">
                    <MenuListItem>
                        <CardsIcon iconSize={iconSizeOptions.lg} />

                        <Link>Payment</Link>

                        <IconLabel icon={<OutIcon />}>Dev</IconLabel>
                    </MenuListItem>
                </a>

                <a href="#">
                    <MenuListItem>
                        <OrganizationIcon iconSize={iconSizeOptions.lg} />

                        <Link>Rounding</Link>
                    </MenuListItem>
                </a>
            </MenuList>
        </Menu>
    </MenuPrimary>
);

SimpleMenuPrimary.args = {
    isOpen: true,
};
