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
import Link from '../Link/Link';
import { MeterIcon } from '../Icon/Icon';
import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarList from '../SidebarList/SidebarList';
import SidebarMenu from './SidebarMenu';

const colorThemeLabel = 'Color theme';
const paddingLateralLabel = 'Padding Lateral';

storiesOf(folder.nav + folder.sub.sidebarMenu + 'SidebarMenu', module)
    .addDecorator(withKnobs)
    .add('SidebarMenu', () => (
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
                        isActive={boolean('Is Active', false)}
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
                        >
                            Vue par projet
                        </Link>
                    </SidebarItem>
                </a>
            </SidebarList>
        </SidebarMenu>
    ));
