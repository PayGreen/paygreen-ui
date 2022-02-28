import React from 'react';
import {
    folder,
    iconSizeOptions,
    itemHtmlTagOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import { ShopIcon, OrganizationIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import MenuItem from '../MenuItem/MenuItem';
import MenuList from '../MenuList/MenuList';
import MenuListItem from '../MenuListItem/MenuListItem';
import Menu from '../Menu/Menu';
import MenuClose from '../MenuClose/MenuClose';
import MenuSecondary from './MenuSecondary';

export default {
    title: folder.nav + folder.sub.menu + 'MenuSecondary',
    argTypes: {
        isOpen: {
            name: labels.isOpen,
            control: 'boolean',
        },
    },
};

export const SimpleMenuSecondary = ({ isOpen }) => (
    <MenuSecondary isOpen={isOpen} closeComponent={<MenuClose />}>
        <Menu htmlTag={itemHtmlTagOptions.div}>
            <a href="#">
                <MenuItem>Login</MenuItem>
            </a>
        </Menu>

        <Menu htmlTag={itemHtmlTagOptions.div}>
            <MenuItem isClickable={false}>Subscribe</MenuItem>

            <MenuList>
                <a href="#">
                    <MenuListItem>
                        <ShopIcon iconSize={iconSizeOptions.lg} />

                        <Link>As shop</Link>
                    </MenuListItem>
                </a>

                <a href="#">
                    <MenuListItem>
                        <OrganizationIcon iconSize={iconSizeOptions.lg} />

                        <Link>As organization</Link>
                    </MenuListItem>
                </a>
            </MenuList>
        </Menu>
    </MenuSecondary>
);

SimpleMenuSecondary.args = {
    isOpen: true,
};
