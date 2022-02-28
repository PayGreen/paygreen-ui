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
import { MeterIcon } from '../Icon/Icon';
import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarList from '../SidebarList/SidebarList';
import SidebarMenu from './SidebarMenu';

export default {
    title: folder.nav + folder.sub.sidebarMenu + 'SidebarMenu',
    argTypes: {
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

export const SidebarMenuStory = ({ colorTheme, paddingLateral, ...args }) => {
    return (
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
                        isActive={true}
                        colorTheme={colorTheme}
                        paddingLateral={colorTheme}
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
                        paddingLateral={colorTheme}
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
    );
};
