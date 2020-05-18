import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, boolean } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions,
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
                    isActive={boolean('Is Active', false)}
                    colorTheme={radios(
                        colorThemeLabel,
                        colorThemeOptions,
                        colorThemeDefault,
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
    ));
