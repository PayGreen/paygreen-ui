import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, boolean } from '@storybook/addon-knobs';
import {
    folder,
    colorPalletOptions,
    colorThemeDefault,
    colorThemeOptions,
    greyOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Link from '../Link/Link';
import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarList from './SidebarList';

storiesOf(folder.nav + folder.sub.sidebarMenu + 'SidebarList', module)
    .addDecorator(withKnobs)
    .add('SidebarList', () => (
        <SidebarList isOpen={boolean(labels.isOpen, true)}>
            <a href="#">
                <SidebarItem
                    colorTheme={radios(
                        labels.colorTheme,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                    isActive={boolean(labels.isActive, false)}
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
    ));
