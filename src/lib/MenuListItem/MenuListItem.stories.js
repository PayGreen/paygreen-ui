import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import {
    folder,
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions,
    spaceOptions,
} from '../../shared/constants';
import { CardsIcon, OutIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import IconLabel from '../IconLabel/IconLabel';
import Text from '../Text/Text';
import MenuListItem from './MenuListItem';

const colorThemeLabel = 'Color theme';

storiesOf(folder.nav + folder.sub.menu + 'MenuListItem', module)
    .addDecorator(withKnobs)
    .add('MenuListItem', () => (
        <a href="#">
            <MenuListItem
                colorTheme={radios(
                    colorThemeLabel,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
            >
                <CardsIcon
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
            </MenuListItem>
        </a>
    ))
    .add('MenuListItem grey', () => (
        <a href="#">
            <MenuListItem
                colorTheme={radios(
                    colorThemeLabel,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
            >
                <CardsIcon
                    iconSize={iconSizeOptions.lg}
                    colorPallet={colorPalletOptions.wab}
                />

                <Link colorPallet={colorPalletOptions.wab}>Payment</Link>

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
            </MenuListItem>
        </a>
    ));
