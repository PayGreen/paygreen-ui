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
import labels from '../../shared/labels';
import { CardsIcon, OutIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import IconLabel from '../IconLabel/IconLabel';
import Text from '../Text/Text';
import MenuListItem from './MenuListItem';

storiesOf(folder.nav + folder.sub.menu + 'MenuListItem', module)
    .addDecorator(withKnobs)
    .add('MenuListItem', () => (
        <a href="#">
            <MenuListItem
                colorTheme={radios(
                    labels.colorTheme,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
            >
                <CardsIcon
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
                    Payment
                </Link>

                <IconLabel
                    colorTheme={radios(
                        labels.colorTheme,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                >
                    <OutIcon
                        iconSize={iconSizeOptions.xs}
                        marginRight={spaceOptions.xs}
                        colorTheme={radios(
                            labels.colorTheme,
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
                    labels.colorTheme,
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
                        labels.colorTheme,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                >
                    <OutIcon
                        iconSize={iconSizeOptions.xs}
                        marginRight={spaceOptions.xs}
                        colorTheme={radios(
                            labels.colorTheme,
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
