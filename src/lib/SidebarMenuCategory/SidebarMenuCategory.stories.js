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

import Link from '../Link/Link';
import { MeterIcon, LeafIcon } from '../Icon/Icon';
import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarList from '../SidebarList/SidebarList';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import SidebarMenuCategory from './SidebarMenuCategory';

const colorThemeLabel = 'Color theme';
const paddingLateralLabel = 'Padding lateral';

storiesOf(folder.nav + folder.sub.sidebarMenu + 'SidebarMenuCategory', module)
    .addDecorator(withKnobs)
    .add('SidebarMenuCategory', () => (
        <SidebarMenuCategory
            categoryTitle={text('Category', 'Catégorie de Pages')}
            paddingLateral={select(
                paddingLateralLabel,
                spaceOptions,
                spaceOptions.xs,
            )}
        >
            <SidebarMenu
                colorTheme={radios(
                    colorThemeLabel,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
            >
                <SidebarItem
                    htmlTag={sidebarItemHtmlTagOptions.button}
                    colorTheme={radios(
                        colorThemeLabel,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                    paddingLateral={select(
                        paddingLateralLabel,
                        spaceOptions,
                        spaceOptions.xs,
                    )}
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

                <SidebarList>
                    <a href="#">
                        <SidebarItem
                            colorTheme={radios(
                                colorThemeLabel,
                                colorThemeOptions,
                                colorThemeDefault,
                            )}
                            paddingLateral={select(
                                paddingLateralLabel,
                                spaceOptions,
                                spaceOptions.xs,
                            )}
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
                            paddingLateral={select(
                                paddingLateralLabel,
                                spaceOptions,
                                spaceOptions.xs,
                            )}
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
                paddingLateral={select(
                    paddingLateralLabel,
                    spaceOptions,
                    spaceOptions.xs,
                )}
            >
                <a href="#">
                    <SidebarItem
                        colorTheme={radios(
                            colorThemeLabel,
                            colorThemeOptions,
                            colorThemeDefault,
                        )}
                        paddingLateral={select(
                            paddingLateralLabel,
                            spaceOptions,
                            spaceOptions.xs,
                        )}
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
    ));
