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
} from '../../shared/constants';
import { MeterIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import SidebarItem from './SidebarItem';

const colorPalletLabel = 'Color pallet';
const colorThemeLabel = 'Color theme';
const colorWabLabel = 'Grey color';

storiesOf(folder.nav + 'SidebarItem', module)
    .addDecorator(withKnobs)
    .add('SidebarItem', () => (
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
                    colorWab={select(colorWabLabel, greyOptions, greyDefault)}
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
                    colorWab={select(colorWabLabel, greyOptions, greyDefault)}
                >
                    Tableau de Bord
                </Link>
            </SidebarItem>
        </a>
    ))
