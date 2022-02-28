import React from 'react';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import { LinkIcon } from '../Icon/Icon';
import MenuItemComponent from './MenuItem';

export default {
    title: folder.nav + folder.sub.menu + 'MenuItem',
    argTypes: {
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
        },
        isClickable: {
            name: 'Is clickable',
            control: 'boolean',
        },
        hasWidthIcon: {
            name: 'Width icon (mobile only)',
            control: 'boolean',
        },
    },
};

export const MenuItem = args => (
    <a href="#">
        <MenuItemComponent {...args}>
            {args.hasWidthIcon ? (
                <LinkIcon iconSize={iconSizeOptions.lg} />
            ) : (
                <></> //to replace 'null' value and avoid error from storybook
            )}
            Payment link
        </MenuItemComponent>
    </a>
);

MenuItem.args = {
    colorTheme: colorThemeDefault,
    isClickable: true,
    hasWidthIcon: false,
};
