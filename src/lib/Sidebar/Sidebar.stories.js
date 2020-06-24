import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    text,
    radios,
    select,
    withKnobs,
} from '@storybook/addon-knobs';
import {
    folder,
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    spaceOptions,
    iconSizeOptions,
    iconHtmlTagOptions,
} from '../../shared/constants';
import Logo from '../Logo/Logo';
import { logo } from '../Logo/sample/logo';
import { ArrowRightIcon, LeafIcon, MeterIcon } from '../Icon/Icon';
import SidebarMenuCategory from '../SidebarMenuCategory/SidebarMenuCategory';
import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarList from '../SidebarList/SidebarList';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import Sidebar from './Sidebar';
import Topbar from '../Topbar/Topbar';
import Link from '../Link/Link';
import Box from '../Box/Box';

const colorThemeLabel = 'Color theme';

const logoSidebar = (
    <Logo hasBaseline={false} hasHoverRight={true} blockWidth={spaceOptions.md}>
        {logo}
    </Logo>
);

storiesOf(folder.nav + 'Sidebar', module)
    .addDecorator(withKnobs)
    .add('Sidebar', () => (
        <Sidebar>
            <Topbar className="hideOnDesktop">
                <Box marginLeft={spaceOptions.xs}>
                    <a href="#">{logoSidebar}</a>
                </Box>

                <ArrowRightIcon
                    htmlTag={iconHtmlTagOptions.button}
                    iconSize={iconSizeOptions.xl}
                    colorPallet={colorPalletOptions.wab}
                    colorWab={greyOptions.grey40}
                />
            </Topbar>

            <Box className="hideOnTablet" marginLeft={spaceOptions.md} marginTop={spaceOptions.md} marginBottom={spaceOptions.lg}>
                <a href="#">{logoSidebar}</a>
            </Box>

            <Box marginTop={spaceOptions.md}>
                <SidebarMenuCategory
                    categoryTitle="Catégorie de Pages"
                    paddingLateral={spaceOptions.md}
                >
                    <SidebarMenu
                        colorTheme={radios(
                            colorThemeLabel,
                            colorThemeOptions,
                            colorThemeDefault,
                        )}
                        paddingLateral={spaceOptions.md}
                    >
                        <a href="#">
                            <SidebarItem
                                isClickable={true}
                                colorTheme={radios(
                                    colorThemeLabel,
                                    colorThemeOptions,
                                    colorThemeDefault,
                                )}
                                paddingLateral={spaceOptions.md}
                                isOpen={boolean('is Open', true)}
                            >
                                <MeterIcon
                                    iconSize={iconSizeOptions.lg}
                                    colorTheme={radios(
                                        colorThemeLabel,
                                        colorThemeOptions,
                                        colorThemeDefault,
                                    )}
                                />

                                <Link
                                    hasUnderline={false}
                                    hasHover={false}
                                    colorTheme={radios(
                                        colorThemeLabel,
                                        colorThemeOptions,
                                        colorThemeDefault,
                                    )}
                                >
                                    Tableau de Bord
                                </Link>
                            </SidebarItem>
                        </a>

                        <SidebarList isOpen={boolean('is Open', true)}>
                            <a href="#">
                                <SidebarItem
                                    colorTheme={radios(
                                        colorThemeLabel,
                                        colorThemeOptions,
                                        colorThemeDefault,
                                    )}
                                    paddingLateral={spaceOptions.md}
                                >
                                    <Link
                                        colorPallet={colorPalletOptions.wab}
                                        colorWab={greyOptions.grey60}
                                        hasUnderline={false}
                                        hasHover={false}
                                    >
                                        Vue d'ensemble
                                    </Link>
                                </SidebarItem>
                            </a>

                            <a href="#">
                                <SidebarItem
                                    colorTheme={radios(
                                        colorThemeLabel,
                                        colorThemeOptions,
                                        colorThemeDefault,
                                    )}
                                    paddingLateral={spaceOptions.md}
                                >
                                    <Link
                                        colorPallet={colorPalletOptions.wab}
                                        colorWab={greyOptions.grey60}
                                        hasUnderline={false}
                                        hasHover={false}
                                    >
                                        Vue par projet
                                    </Link>
                                </SidebarItem>
                            </a>
                        </SidebarList>
                    </SidebarMenu>

                    <SidebarMenu
                        colorTheme={radios(
                            colorThemeLabel,
                            colorThemeOptions,
                            colorThemeDefault,
                        )}
                        paddingLateral={spaceOptions.md}
                    >
                        <a href="#">
                            <SidebarItem
                                colorTheme={radios(
                                    colorThemeLabel,
                                    colorThemeOptions,
                                    colorThemeDefault,
                                )}
                                paddingLateral={spaceOptions.md}
                                isActive={boolean('Is Active', false)}
                            >
                                <LeafIcon
                                    iconSize={iconSizeOptions.lg}
                                    colorTheme={radios(
                                        colorThemeLabel,
                                        colorThemeOptions,
                                        colorThemeDefault,
                                    )}
                                />

                                <Link
                                    hasUnderline={false}
                                    hasHover={false}
                                    colorTheme={radios(
                                        colorThemeLabel,
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
