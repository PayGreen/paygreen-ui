import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, boolean, select } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions,
    spaceOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import { MeterIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import SidebarItem from './SidebarItem';

storiesOf(folder.nav + folder.sub.sidebarMenu + 'SidebarItem', module)
    .addDecorator(withKnobs)
    .add('SidebarItem', () => (
        <a href="#">
            <SidebarItem
                colorTheme={radios(
                    labels.colorTheme,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                isActive={boolean(labels.isActive, false)}
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
        </a>
    ));
