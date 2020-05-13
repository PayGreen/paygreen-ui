import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, text } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    colorPalletOptions,
    fontSizeOptions,
    greyOptions,
    iconSizeOptions,
} from '../../shared/constants';

import Link from '../Link/Link';
import { MeterIcon, LeafIcon } from '../Icon/Icon';
import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarList from '../SidebarList/SidebarList';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import SidebarMenuCategory from './SidebarMenuCategory';

const colorThemeLabel = 'Color theme';

storiesOf(folder.nav + folder.sub.sidebarMenu + 'SidebarMenuCategory', module)
    .addDecorator(withKnobs)
    .add('SidebarMenuCategory', () => (
        <SidebarMenuCategory categoryTitle={text('Category', 'Catégorie de Pages')}>
            <SidebarMenu
                isOpen={boolean('is Open', true)}
                colorTheme={radios(
                    colorThemeLabel,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
            >
                <a href="#">
                    <SidebarItem
                        colorTheme={radios(
                            colorThemeLabel,
                            colorThemeOptions,
                            colorThemeDefault,
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
                </a>
                <SidebarList>
                    <a href="#">
                        <SidebarItem
                            colorTheme={radios(
                                colorThemeLabel,
                                colorThemeOptions,
                                colorThemeDefault,
                            )}
                            textSize={fontSizeOptions.sm}
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
                            textSize={fontSizeOptions.sm}
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
            >
                <a href="#">
                    <SidebarItem
                        colorTheme={radios(
                            colorThemeLabel,
                            colorThemeOptions,
                            colorThemeDefault,
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
