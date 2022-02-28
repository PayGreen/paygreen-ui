import React from 'react';
import {
    folder,
    iconSizeOptions,
    iconHtmlTagOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import { UserIcon } from '../Icon/Icon';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Logo from '../Logo/Logo';
import { logo } from '../Logo/sample/logo';
import MenuMobile from './MenuMobile';

export default {
    title: folder.layout + 'MenuMobile',
    argTypes: {
        isHidden: {
            name: labels.isHidden,
            control: 'boolean',
        },
        hasTopStyle: {
            name: labels.hasTopStyle,
            control: 'boolean',
        },
    },
};

export const SimpleMenuPrimary = ({ isHidden, hasTopStyle }) => (
    <MenuMobile isHidden={isHidden} hasTopStyle={hasTopStyle}>
        <MenuHamburger />

        <a href="#">
            <Logo hasThemeColor={true}>{logo}</Logo>
        </a>

        <UserIcon
            htmlTag={iconHtmlTagOptions.button}
            iconSize={iconSizeOptions.xl}
        />
    </MenuMobile>
);

SimpleMenuPrimary.args = {
    isHidden: false,
    hasTopStyle: false,
};
