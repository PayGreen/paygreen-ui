import React from 'react';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions,
    spaceOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import { MeterIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import SidebarItem from './SidebarItem';

export default {
    title: folder.nav + folder.sub.sidebarMenu + 'SidebarItem',
    argTypes: {
        isActive: {
            name: labels.isActive,
            control: 'boolean',
            defaultValue: false,
        },

        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
            defaultValue: colorThemeDefault,
        },

        paddingLateral: {
            name: labels.paddingLateral,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceOptions.sm,
        },
    },
};

export const SidebarItemStory = ({ isActive, colorTheme, paddingLateral }) => {
    return (
        <a href="#">
            <SidebarItem
                isActive={isActive}
                colorTheme={colorTheme}
                paddingLateral={paddingLateral}
            >
                <MeterIcon
                    iconSize={iconSizeOptions.lg}
                    colorTheme={colorTheme}
                />

                <Link colorTheme={colorTheme}>Tableau de bord</Link>
            </SidebarItem>
        </a>
    );
};
