import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, boolean } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeDefault,
    colorThemeOptions,
} from '../../shared/constants';
import Link from '../Link/Link';
import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarList from './SidebarList';

const colorPalletLabel = 'Color pallet';
const colorThemeLabel = 'Color theme';
const colorWabLabel = 'Grey color';

const color = [
    colorThemeOptions.primary,
    colorThemeOptions.secondary,
    colorThemeOptions.tertiary,
    colorThemeOptions.quaternary,
];

storiesOf(folder.nav + 'SidebarList', module)
    .addDecorator(withKnobs)
    .add('SidebarList', () => (
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
    ));
