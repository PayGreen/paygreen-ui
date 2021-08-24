import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions,
    spaceOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import { LeafIcon, CardsIcon, OrganizationIcon, OutIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import IconLabel from '../IconLabel/IconLabel';
import Text from '../Text/Text';
import MenuItem from '../MenuItem/MenuItem';
import MenuList from '../MenuList/MenuList';
import MenuListItem from '../MenuListItem/MenuListItem';
import Menu from './Menu';

storiesOf(folder.nav + folder.sub.menu + 'Menu', module)
    .addDecorator(withKnobs)
    .add('Menu', () => (
        <Menu
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
        >
            <a href="#">
                <MenuItem
                    isClickable={false}
                    colorTheme={select(
                        labels.colorTheme,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                >
                    Our products
                </MenuItem>
            </a>

            <MenuList>
                <a href="#">
                    <MenuListItem
                        colorTheme={select(
                            labels.colorTheme,
                            colorThemeOptions,
                            colorThemeDefault,
                        )}
                    >
                        <LeafIcon
                            iconSize={iconSizeOptions.lg}
                            colorTheme={select(
                                labels.colorTheme,
                                colorThemeOptions,
                                colorThemeDefault,
                            )}
                        />

                        <Link
                            colorTheme={select(
                                labels.colorTheme,
                                colorThemeOptions,
                                colorThemeDefault,
                            )}
                        >
                            Tree
                        </Link>

                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas sit amet accumsan dolor. Nullam
                            fringilla quam leo.
                        </Text>
                    </MenuListItem>
                </a>

                <a href="#">
                    <MenuListItem
                        colorTheme={select(
                            labels.colorTheme,
                            colorThemeOptions,
                            colorThemeDefault,
                        )}
                    >
                        <CardsIcon
                            iconSize={iconSizeOptions.lg}
                            colorTheme={select(
                                labels.colorTheme,
                                colorThemeOptions,
                                colorThemeDefault,
                            )}
                        />

                        <Link
                            colorTheme={select(
                                labels.colorTheme,
                                colorThemeOptions,
                                colorThemeDefault,
                            )}
                        >
                            Payment
                        </Link>

                        <IconLabel
                            colorTheme={select(
                                labels.colorTheme,
                                colorThemeOptions,
                                colorThemeDefault,
                            )}
                        >
                            <OutIcon
                                iconSize={iconSizeOptions.xs}
                                marginRight={spaceOptions.xs}
                                colorTheme={select(
                                    labels.colorTheme,
                                    colorThemeOptions,
                                    colorThemeDefault,
                                )}
                            />
                            Dev
                        </IconLabel>
                    </MenuListItem>
                </a>

                <a href="#">
                    <MenuListItem
                        colorTheme={select(
                            labels.colorTheme,
                            colorThemeOptions,
                            colorThemeDefault,
                        )}
                    >
                        <OrganizationIcon
                            iconSize={iconSizeOptions.lg}
                            colorTheme={select(
                                labels.colorTheme,
                                colorThemeOptions,
                                colorThemeDefault,
                            )}
                        />

                        <Link
                            colorTheme={select(
                                labels.colorTheme,
                                colorThemeOptions,
                                colorThemeDefault,
                            )}
                        >
                            Rounding
                        </Link>
                    </MenuListItem>
                </a>
            </MenuList>
        </Menu>
    ));
