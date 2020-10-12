import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions,
    spaceOptions,
} from '../../shared/constants';
import { LeafIcon, CardsIcon, OrganizationIcon, OutIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import IconLabel from '../IconLabel/IconLabel';
import Text from '../Text/Text';
import MenuItem from '../MenuItem/MenuItem';
import MenuList from '../MenuList/MenuList';
import MenuListItem from '../MenuListItem/MenuListItem';
import Menu from './Menu';

const colorThemeLabel = 'Color theme';

storiesOf(folder.nav + folder.sub.menu + 'Menu', module)
    .addDecorator(withKnobs)
    .add('Menu', () => (
        <Menu
            colorTheme={radios(
                colorThemeLabel,
                colorThemeOptions,
                colorThemeDefault,
            )}
        >
            <a href="#">
                <MenuItem
                    isClickable={false}
                    colorTheme={radios(
                        colorThemeLabel,
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
                        colorTheme={radios(
                            colorThemeLabel,
                            colorThemeOptions,
                            colorThemeDefault,
                        )}
                    >
                        <LeafIcon
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
                    </MenuListItem>
                </a>

                <a href="#">
                    <MenuListItem
                        colorTheme={radios(
                            colorThemeLabel,
                            colorThemeOptions,
                            colorThemeDefault,
                        )}
                    >
                        <OrganizationIcon
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
                            Rounding
                        </Link>
                    </MenuListItem>
                </a>
            </MenuList>
        </Menu>
    ));
