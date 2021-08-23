import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    boolean,
    radios,
    select,
    text,
} from '@storybook/addon-knobs';
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

storiesOf(folder.nav + folder.sub.sidebarMenu + 'SidebarMenuCategory', module)
    .addDecorator(withKnobs)
    .add('SidebarMenuCategory', () => (
        <SidebarMenuCategory
            categoryTitle={text('Category title', 'Catégorie de pages')}
            paddingLateral={select(
                labels.paddingLateral,
                spaceOptions,
                spaceOptions.xs,
            )}
        >
            <SidebarMenu
                colorTheme={radios(
                    labels.colorTheme,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
            >
                <SidebarItem
                    htmlTag={sidebarItemHtmlTagOptions.button}
                    colorTheme={radios(
                        labels.colorTheme,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                    paddingLateral={select(
                        labels.paddingLateral,
                        spaceOptions,
                        spaceOptions.xs,
                    )}
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
                        Tableau de bord
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
                            paddingLateral={select(
                                labels.paddingLateral,
                                spaceOptions,
                                spaceOptions.xs,
                            )}
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
                            paddingLateral={select(
                                labels.paddingLateral,
                                spaceOptions,
                                spaceOptions.xs,
                            )}
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
                paddingLateral={select(
                    labels.paddingLateral,
                    spaceOptions,
                    spaceOptions.xs,
                )}
            >
                <a href="#">
                    <SidebarItem
                        colorTheme={radios(
                            labels.colorTheme,
                            colorThemeOptions,
                            colorThemeDefault,
                        )}
                        paddingLateral={select(
                            labels.paddingLateral,
                            spaceOptions,
                            spaceOptions.xs,
                        )}
                        isActive={boolean(labels.isActive, false)}
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
                            Contributions
                        </Link>
                    </SidebarItem>
                </a>
            </SidebarMenu>
        </SidebarMenuCategory>
    ));
