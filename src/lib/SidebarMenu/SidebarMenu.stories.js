import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';
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

storiesOf(folder.nav + folder.sub.sidebarMenu + 'SidebarMenu', module)
    .addDecorator(withKnobs)
    .add('SidebarMenu', () => (
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
                    Tableau de Bord
                </Link>
            </SidebarItem>

            <SidebarList>
                <a href="#">
                    <SidebarItem
                        isActive={boolean(labels.isActive, false)}
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
    ));
