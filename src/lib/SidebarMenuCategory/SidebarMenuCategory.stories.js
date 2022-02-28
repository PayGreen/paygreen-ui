import React from 'react';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    colorPalletOptions,
    greyOptions,
    iconSizeOptions,
    sidebarItemHtmlTagOptions,
    spaceOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Link from '../Link/Link';
import { MeterIcon, LeafIcon } from '../Icon/Icon';
import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarList from '../SidebarList/SidebarList';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import SidebarMenuCategory from './SidebarMenuCategory';

export default {
    title: folder.nav + folder.sub.sidebarMenu + 'SidebarMenuCategory',
    argTypes: {
        categoryTitle: {
            name: 'Category title',
            control: 'text',
            defaultValue: 'Catégorie de pages',
        },

        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
            defaultValue: colorThemeDefault,
        },
        isActive: {
            name: labels.isActive,
            control: 'boolean',
            defaultValue: false,
        },
        paddingLateral: {
            name: labels.paddingLateral,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceOptions.sm,
        },
    },
};

export const SidebarMenuCatStory = ({
    categoryTitle,
    paddingLateral,
    colorTheme,
    isActive,
}) => {
    return (
        <SidebarMenuCategory
            categoryTitle={categoryTitle}
            paddingLateral={paddingLateral}
        >
            <SidebarMenu colorTheme={colorTheme}>
                <SidebarItem
                    htmlTag={sidebarItemHtmlTagOptions.button}
                    colorTheme={colorTheme}
                    paddingLateral={paddingLateral}
                >
                    <MeterIcon
                        iconSize={iconSizeOptions.lg}
                        colorTheme={colorTheme}
                    />

                    <Link colorTheme={colorTheme}>Tableau de bord</Link>
                </SidebarItem>

                <SidebarList>
                    <a href="#">
                        <SidebarItem
                            colorTheme={colorTheme}
                            paddingLateral={paddingLateral}
                        >
                            <Link
                                colorPallet={colorPalletOptions.wab}
                                colorWab={greyOptions.grey60}
                            >
                                Vue d'ensemble
                            </Link>
                        </SidebarItem>
                    </a>

                    <a href="#">
                        <SidebarItem
                            colorTheme={colorTheme}
                            paddingLateral={paddingLateral}
                        >
                            <Link
                                colorPallet={colorPalletOptions.wab}
                                colorWab={greyOptions.grey60}
                            >
                                Vue par projet
                            </Link>
                        </SidebarItem>
                    </a>
                </SidebarList>
            </SidebarMenu>

            <SidebarMenu
                colorTheme={colorTheme}
                paddingLateral={paddingLateral}
            >
                <a href="#">
                    <SidebarItem
                        colorTheme={colorTheme}
                        paddingLateral={paddingLateral}
                        isActive={isActive}
                    >
                        <LeafIcon
                            iconSize={iconSizeOptions.lg}
                            colorTheme={colorTheme}
                        />

                        <Link colorTheme={colorTheme}>Contributions</Link>
                    </SidebarItem>
                </a>
            </SidebarMenu>
        </SidebarMenuCategory>
    );
};
