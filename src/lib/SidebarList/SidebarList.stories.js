import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, boolean } from '@storybook/addon-knobs';
import {
    folder,
    colorPalletOptions,
    colorThemeDefault,
    colorThemeOptions,
    fontSizeOptions,
    greyOptions,
} from '../../shared/constants';
import Link from '../Link/Link';
import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarList from './SidebarList';

const colorThemeLabel = 'Color theme';

storiesOf(folder.nav + folder.sub.sidebarMenu + 'SidebarList', module)
    .addDecorator(withKnobs)
    .add('SidebarList', () => (
        <SidebarList isOpen={boolean('is Open', true)}>
            <a href="#">
                <SidebarItem
                    colorTheme={radios(
                        colorThemeLabel,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                    isActive={boolean('Is Active', false)}
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
    ));
