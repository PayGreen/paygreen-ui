import React from 'react';
import {
    folder,
    colorPalletOptions,
    colorThemeDefault,
    colorThemeOptions,
    greyOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Link from '../Link/Link';
import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarList from './SidebarList';

export default {
    title: folder.nav + folder.sub.sidebarMenu + 'SidebarList',
    argTypes: {
        isOpen: {
            name: labels.isOpen,
            control: 'boolean',
            defaultValue: true,
        },
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
    },
};

export const SidebarListStory = ({ isActive, isOpen, colorTheme }) => {
    return (
        <SidebarList isOpen={isOpen}>
            <a href="#">
                <SidebarItem isActive={isActive} colorTheme={colorTheme}>
                    <Link
                        colorPallet={colorPalletOptions.wab}
                        colorWab={greyOptions.grey60}
                    >
                        Vue d'ensemble
                    </Link>
                </SidebarItem>
            </a>

            <a href="#">
                <SidebarItem colorTheme={colorTheme}>
                    <Link
                        colorPallet={colorPalletOptions.wab}
                        colorWab={greyOptions.grey60}
                    >
                        Vue par projet
                    </Link>
                </SidebarItem>
            </a>
        </SidebarList>
    );
};
