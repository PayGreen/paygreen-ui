import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, radios, withKnobs } from '@storybook/addon-knobs';
import {
    folder,
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    spaceOptions,
    iconSizeOptions,
    iconHtmlTagOptions,
    sidebarItemHtmlTagOptions,
    hoverDirectionOptions,
    alignDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import { ArrowRightIcon, LeafIcon, MeterIcon } from '../Icon/Icon';
import { logo } from '../Logo/sample/logo';
import Logo from '../Logo/Logo';
import Topbar from '../Topbar/Topbar';
import Link from '../Link/Link';
import Box from '../Box/Box';
import SidebarMenuCategory from '../SidebarMenuCategory/SidebarMenuCategory';
import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarList from '../SidebarList/SidebarList';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import Sidebar from './Sidebar';

const logoSidebar = (
    <Logo
        align={alignDefault}
        hasThemeColor={true}
        hasBaseline={false}
        hoverDirection={hoverDirectionOptions.right}
        blockWidth={spaceOptions.sm}
    >
        {logo}
    </Logo>
);

storiesOf(folder.nav + 'Sidebar', module)
    .addDecorator(withKnobs)
    .add('Sidebar', () => (
        <Sidebar>
            <Topbar className="hideOnDesktop">
                <a href="#">{logoSidebar}</a>

                <ArrowRightIcon
                    htmlTag={iconHtmlTagOptions.button}
                    iconSize={iconSizeOptions.xl}
                    colorPallet={colorPalletOptions.wab}
                    colorWab={greyOptions.grey40}
                />
            </Topbar>

            <Box
                className="hideOnTablet"
                marginLeft={spaceOptions.md}
                marginTop={spaceOptions.md}
                marginBottom={spaceOptions.md}
            >
                <a href="#">{logoSidebar}</a>
            </Box>

            <Box marginTop={spaceOptions.md}>
                <SidebarMenuCategory
                    categoryTitle="Catégorie de Pages"
                    paddingLateral={spaceOptions.md}
                >
                    <SidebarMenu
                        colorTheme={radios(
                            labels.colorTheme,
                            colorThemeOptions,
                            colorThemeDefault,
                        )}
                        paddingLateral={spaceOptions.md}
                    >
                        <SidebarItem
                            htmlTag={sidebarItemHtmlTagOptions.button}
                            colorTheme={radios(
                                labels.colorTheme,
                                colorThemeOptions,
                                colorThemeDefault,
                            )}
                            paddingLateral={spaceOptions.md}
                        >
                            <MeterIcon
                                iconSize={iconSizeOptions.lg}
                                colorTheme={radios(
                                    labels.colorTheme,
                                    colorThemeOptions,
                                    colorThemeDefault,
                                )}
                            />

                            <Link
                                colorTheme={radios(
                                    labels.colorTheme,
                                    colorThemeOptions,
                                    colorThemeDefault,
                                )}
                            >
                                Tableau de Bord
                            </Link>
                        </SidebarItem>

                        <SidebarList>
                            <a href="#">
                                <SidebarItem
                                    colorTheme={radios(
                                        labels.colorTheme,
                                        colorThemeOptions,
                                        colorThemeDefault,
                                    )}
                                    paddingLateral={spaceOptions.md}
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
                                    colorTheme={radios(
                                        labels.colorTheme,
                                        colorThemeOptions,
                                        colorThemeDefault,
                                    )}
                                    paddingLateral={spaceOptions.md}
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
                        colorTheme={radios(
                            labels.colorTheme,
                            colorThemeOptions,
                            colorThemeDefault,
                        )}
                        paddingLateral={spaceOptions.md}
                    >
                        <a href="#">
                            <SidebarItem
                                colorTheme={radios(
                                    labels.colorTheme,
                                    colorThemeOptions,
                                    colorThemeDefault,
                                )}
                                paddingLateral={spaceOptions.md}
                                isActive={boolean('Is Active', false)}
                            >
                                <LeafIcon
                                    iconSize={iconSizeOptions.lg}
                                    colorTheme={radios(
                                        labels.colorTheme,
                                        colorThemeOptions,
                                        colorThemeDefault,
                                    )}
                                />

                                <Link
                                    colorTheme={radios(
                                        labels.colorTheme,
                                        colorThemeOptions,
                                        colorThemeDefault,
                                    )}
                                >
                                    Compensations
                                </Link>
                            </SidebarItem>
                        </a>
                    </SidebarMenu>
                </SidebarMenuCategory>
            </Box>
        </Sidebar>
    ));
