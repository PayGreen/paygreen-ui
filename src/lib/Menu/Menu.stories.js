import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
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

storiesOf('Paygreen | Menu/Menu', module).addDecorator(withKnobs)
.add('Menu', () => (
    <Menu
        colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
    >
        <a href="#">
            <MenuItem
                isMain={true}
                hasHoverBase={false}
                hasHoverAlternative={false}
                colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
            >
                <Link
                    hasUnderline={false}
                    colorPallet={colorPalletOptions.wab}
                    hasUppercase={true}
                >
                    Our products
                </Link>
            </MenuItem>
        </a>

        <MenuList>
            <a href="#">
                <MenuItem
                    hasHoverEmphasis={true}
                    colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                >
                    <LeafIcon
                        iconSize={iconSizeOptions.lg}
                        colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                    />

                    <Link
                        hasUnderline={false}
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
                    hasHoverEmphasis={true}
                    colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                >
                    <CardsIcon
                        iconSize={iconSizeOptions.lg}
                        colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                    />

                    <Link
                        hasUnderline={false}
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
                    hasHoverEmphasis={true}
                    colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                >
                    <OrganizationIcon
                        iconSize={iconSizeOptions.lg}
                        colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                    />

                    <Link
                        hasUnderline={false}
                        colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                    >
                        Rounding
                    </Link>
                </MenuItem>
            </a>
        </MenuList>
    </Menu>
));