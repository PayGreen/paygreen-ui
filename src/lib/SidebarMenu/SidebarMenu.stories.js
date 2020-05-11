import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';
import {
    folder,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    iconSizeOptions,
    spaceOptions,
    y,
} from '../../shared/constants';

import Link from '../Link/Link';
import { MeterIcon } from '../Icon/Icon';
import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarList from '../SidebarList/SidebarList';
import SidebarMenu from './SidebarMenu';

const color = [
    colorThemeOptions.primary,
    colorThemeOptions.secondary,
    colorThemeOptions.tertiary,
    colorThemeOptions.quaternary,
];

const colorPalletLabel = 'Color pallet';
const colorThemeLabel = 'Color theme';
const colorWabLabel = 'Grey color';

storiesOf(folder.nav + 'SidebarMenu', module)
    .addDecorator(withKnobs)
    .add('SidebarMenu', () => (
        <SidebarMenu>
            <a href="#">
                <SidebarItem
                    colorTheme={radios(
                        colorThemeLabel,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                    hasHoverEmphasis={boolean('Hover emphasis', true)}
                >
                    <MeterIcon
                        iconSize={iconSizeOptions.lg}
                        colorPallet={radios(
                            colorPalletLabel,
                            colorPalletOptions,
                            colorPalletDefault,
                        )}
                        colorTheme={radios(
                            colorThemeLabel,
                            colorThemeOptions,
                            colorThemeDefault,
                        )}
                        colorWab={select(
                            colorWabLabel,
                            greyOptions,
                            greyDefault,
                        )}
                    />

                    <Link
                        hasUnderline={false}
                        hasHover={false}
                        colorPallet={radios(
                            colorPalletLabel,
                            colorPalletOptions,
                            colorPalletDefault,
                        )}
                        colorTheme={radios(
                            colorThemeLabel,
                            colorThemeOptions,
                            colorThemeDefault,
                        )}
                        colorWab={select(
                            colorWabLabel,
                            greyOptions,
                            greyDefault,
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
                        textSize="sm"
                        hasHoverEmphasis={true}
                        isActive={boolean('Is active', false)}
                    >
                        <Link
                            colorPallet="wab"
                            colorWab="grey60"
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
                        textSize="sm"
                        hasHoverEmphasis={true}
                    >
                        <Link
                            colorPallet="wab"
                            colorWab="grey60"
                            hasUnderline={false}
                            hasHover={false}
                        >
                            Vue par projet
                        </Link>
                    </SidebarItem>
                </a>
            </SidebarList>
        </SidebarMenu>
    ));
