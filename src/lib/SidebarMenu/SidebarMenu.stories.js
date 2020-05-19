import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    colorPalletOptions,
    greyOptions,
    iconSizeOptions,
} from '../../shared/constants';
import Link from '../Link/Link';
import { MeterIcon } from '../Icon/Icon';
import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarList from '../SidebarList/SidebarList';
import SidebarMenu from './SidebarMenu';

const colorThemeLabel = 'Color theme';

storiesOf(folder.nav + folder.sub.sidebarMenu + 'SidebarMenu', module)
    .addDecorator(withKnobs)
    .add('SidebarMenu', () => (
        <>
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
                        isActive={boolean('Is Active', false)}
                        colorTheme={radios(
                            colorThemeLabel,
                            colorThemeOptions,
                            colorThemeDefault,
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
                        isClickable={true}
                        colorTheme={radios(
                            colorThemeLabel,
                            colorThemeOptions,
                            colorThemeDefault,
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
                            isActive={boolean('Is Active', false)}
                            colorTheme={radios(
                                colorThemeLabel,
                                colorThemeOptions,
                                colorThemeDefault,
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
            </>
    ));
