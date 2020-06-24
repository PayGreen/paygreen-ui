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
    spaceOptions,
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
        <SidebarMenuCategory
            categoryTitle={text('Category', 'Catégorie de Pages')}
            paddingLateral={select(
                'Padding lateral',
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
                <a href="#">
                    <SidebarItem
                        isClickable={true}
                        colorTheme={radios(
                            colorThemeLabel,
                            colorThemeOptions,
                            colorThemeDefault,
                        )}
                        paddingLateral={select(
                            'Padding lateral',
                            spaceOptions,
                            spaceOptions.xs,
                        )}
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
                            paddingLateral={select(
                                'Padding lateral',
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
                                'Padding lateral',
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
                    'Padding lateral',
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
                            'Padding lateral',
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
