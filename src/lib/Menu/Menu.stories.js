import React from 'react';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import { LeafIcon, CardsIcon, OrganizationIcon, OutIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import IconLabel from '../IconLabel/IconLabel';
import Text from '../Text/Text';
import MenuItem from '../MenuItem/MenuItem';
import MenuList from '../MenuList/MenuList';
import MenuListItem from '../MenuListItem/MenuListItem';
import Menu from './Menu';

export default {
    title: folder.nav + folder.sub.menu + 'Menu',
    argTypes: {
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
        },
    },
};

export const SimpleMenu = ({ colorTheme }) => (
    <Menu colorTheme={colorTheme}>
        <a href="#">
            <MenuItem isClickable={false} colorTheme={colorTheme}>
                Our products
            </MenuItem>
        </a>

        <MenuList>
            <a href="#">
                <MenuListItem colorTheme={colorTheme}>
                    <LeafIcon
                        iconSize={iconSizeOptions.lg}
                        colorTheme={colorTheme}
                    />

                    <Link colorTheme={colorTheme}>Tree</Link>

                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas sit amet accumsan dolor. Nullam fringilla quam
                        leo.
                    </Text>
                </MenuListItem>
            </a>

            <a href="#">
                <MenuListItem colorTheme={colorTheme}>
                    <CardsIcon
                        iconSize={iconSizeOptions.lg}
                        colorTheme={colorTheme}
                    />

                    <Link colorTheme={colorTheme}>Payment</Link>

                    <IconLabel colorTheme={colorTheme} icon={<OutIcon />}>
                        Dev
                    </IconLabel>
                </MenuListItem>
            </a>

            <a href="#">
                <MenuListItem colorTheme={colorTheme}>
                    <OrganizationIcon
                        iconSize={iconSizeOptions.lg}
                        colorTheme={colorTheme}
                    />

                    <Link colorTheme={colorTheme}>Rounding</Link>
                </MenuListItem>
            </a>
        </MenuList>
    </Menu>
);

SimpleMenu.args = {
    colorTheme: colorThemeDefault,
};
