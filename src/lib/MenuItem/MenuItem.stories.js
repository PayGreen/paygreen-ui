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
import { CardsIcon, OutIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import IconLabel from '../IconLabel/IconLabel';
import Text from '../Text/Text';
import MenuItem from './MenuItem';

const colorPalletLabel = 'Color pallet';
const colorThemeLabel = 'Color theme';
const colorWabLabel = 'Grey color';

storiesOf(folder.template + folder.sub.menu + 'MenuItem', module)
    .addDecorator(withKnobs)
    .add('Sub menu item', () => (
        <a href="#">
            <MenuItem
                colorTheme={radios(
                    colorThemeLabel,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                hasHoverEmphasis={boolean('Hover emphasis', true)}
            >
                <CardsIcon
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
                    Payment
                </Link>

                <IconLabel
                    colorTheme={radios(
                        colorThemeLabel,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                >
                    <OutIcon
                        iconSize={iconSizeOptions.xs}
                        marginRight={spaceOptions.xs}
                        colorTheme={radios(
                            colorThemeLabel,
                            colorThemeOptions,
                            colorThemeDefault,
                        )}
                    />
                    Dev
                </IconLabel>

                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas sit amet accumsan dolor. Nullam fringilla quam leo,
                    id bibendum felis iaculis eu.
                </Text>
            </MenuItem>
        </a>
    ))
    .add('Main menu item', () => (
        <a href="#">
            <MenuItem
                isMain={true}
                colorTheme={radios(
                    colorThemeLabel,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                hasHoverBase={boolean('Hover base (mobile)', true)}
                hasHoverAlternative={boolean(
                    'Hover alternative (desktop)',
                    true,
                )}
            >
                <Link
                    hasUnderline={false}
                    hasHover={false}
                    colorPallet={colorPalletOptions.wab}
                    hasUppercase={true}
                >
                    Payment
                </Link>
            </MenuItem>
        </a>
    ));
