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



const colorThemeLabel = 'Color theme';


storiesOf(folder.nav + folder.sub.sidebarMenu + 'SidebarItem', module)
    .addDecorator(withKnobs)
    .add('SidebarItem', () => (
        <>
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
        </>
    ));
