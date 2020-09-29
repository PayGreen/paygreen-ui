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
import { MeterIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import SidebarItem from './SidebarItem';

const colorThemeLabel = 'Color theme';

storiesOf(folder.nav + folder.sub.sidebarMenu + 'SidebarItem', module)
    .addDecorator(withKnobs)
    .add('SidebarItem', () => (
        <a href="#">
            <SidebarItem
                colorTheme={radios(
                    colorThemeLabel,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                isActive={boolean('Is Active', false)}
                paddingLateral={select(
                    'Padding lateral',
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
        </a>
    ));
