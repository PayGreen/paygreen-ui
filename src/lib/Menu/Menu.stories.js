import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';
import {
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions,
    spaceOptions
} from '../../shared/constants';
import { LeafIcon, CardsIcon, OrganizationIcon, OutIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import IconLabel from '../IconLabel/IconLabel';
import Text from '../Text/Text';
import MenuItem from '../MenuItem/MenuItem';
import MenuList from '../MenuList/MenuList';
import Menu from './Menu';

const colorThemeLabel = 'Color theme';

storiesOf('Menu', module)
    .addDecorator(withKnobs)
    .add('Menu', () => (
        <Menu
            colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
        >
            <a href="#">
                <MenuItem
                    isMain={true}
                    hoverBase={false}
                    hoverAlternative={false}
                    colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                >
                    <Link
                        underline={false}
                        colorPallet={colorPalletOptions.wab}
                        uppercase={true}
                    >
                        Our products
                    </Link>
                </MenuItem>
            </a>

            <MenuList>
                <a href="#">
                    <MenuItem
                        hoverEmphasis={true}
                        colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                    >
                        <LeafIcon
                            iconSize={iconSizeOptions.lg}
                            colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                        />

                        <Link
                            underline={false}
                            colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                        >
                            Tree
                        </Link>

                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet accumsan dolor. Nullam fringilla quam leo.
                        </Text>
                    </MenuItem>
                </a>

                <a href="#">
                    <MenuItem
                        hoverEmphasis={true}
                        colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                    >
                        <CardsIcon
                            iconSize={iconSizeOptions.lg}
                            colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                        />

                        <Link
                            underline={false}
                            colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                        >
                            Payment
                        </Link>

                        <IconLabel colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}>
                            <OutIcon
                                iconSize={iconSizeOptions.xs}
                                marginRight={spaceOptions.xs}
                                colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                            />
                            Dev
                        </IconLabel>
                    </MenuItem>
                </a>

                <a href="#">
                    <MenuItem
                        hoverEmphasis={true}
                        colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                    >
                        <OrganizationIcon
                            iconSize={iconSizeOptions.lg}
                            colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                        />

                        <Link
                            underline={false}
                            colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                        >
                            Rounding
                        </Link>
                    </MenuItem>
                </a>
            </MenuList>
        </Menu>
    ));