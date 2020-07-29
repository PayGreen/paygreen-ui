import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import {
    folder,
    colorPalletOptions,
    iconSizeOptions,
    spaceOptions,
} from '../../shared/constants';
import { LeafIcon, CardsIcon, OrganizationIcon, OutIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import IconLabel from '../IconLabel/IconLabel';
import Text from '../Text/Text';
import MenuItem from '../MenuItem/MenuItem';
import MenuList from '../MenuList/MenuList';
import Menu from '../Menu/Menu';
import MenuPrimary from './MenuPrimary';

const subLink = {
    hasUnderline: false,
    hasHover: false,
};

storiesOf(folder.nav + 'MenuPrimary', module)
    .addDecorator(withKnobs)
    .add('MenuPrimary', () => (
        <MenuPrimary isOpen={boolean('Is open', true)}>
            <Menu>
                <a href="#">
                    <MenuItem isMain={true} hasHoverEmphasis={true}>
                        <Link
                            hasUnderline={false}
                            hasHover={false}
                            hasUppercase={true}
                        >
                            About us
                        </Link>
                    </MenuItem>
                </a>
            </Menu>

            <Menu>
                <MenuItem
                    isMain={true}
                    hasHoverBase={false}
                    hasHoverAlternative={false}
                >
                    <Link
                        hasUnderline={false}
                        hasHover={false}
                        colorPallet={colorPalletOptions.wab}
                        hasUppercase={true}
                    >
                        Our products
                    </Link>
                </MenuItem>

                <MenuList>
                    <a href="#">
                        <MenuItem hasHoverEmphasis={true}>
                            <LeafIcon iconSize={iconSizeOptions.lg} />

                            <Link {...subLink}>Tree</Link>

                            <Text>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Maecenas sit amet accumsan
                                dolor. Nullam fringilla quam leo.
                            </Text>
                        </MenuItem>
                    </a>

                    <a href="#">
                        <MenuItem hasHoverEmphasis={true}>
                            <CardsIcon iconSize={iconSizeOptions.lg} />

                            <Link {...subLink}>Payment</Link>

                            <IconLabel>
                                <OutIcon
                                    iconSize={iconSizeOptions.xs}
                                    marginRight={spaceOptions.xs}
                                />
                                Dev
                            </IconLabel>
                        </MenuItem>
                    </a>

                    <a href="#">
                        <MenuItem hasHoverEmphasis={true}>
                            <OrganizationIcon iconSize={iconSizeOptions.lg} />

                            <Link {...subLink}>Rounding</Link>
                        </MenuItem>
                    </a>
                </MenuList>
            </Menu>

            <Menu>
                <MenuItem
                    isMain={true}
                    hasHoverBase={false}
                    hasHoverAlternative={false}
                >
                    <Link
                        hasUnderline={false}
                        hasHover={false}
                        colorPallet={colorPalletOptions.wab}
                        hasUppercase={true}
                    >
                        Other products
                    </Link>
                </MenuItem>

                <MenuList>
                    <a href="#">
                        <MenuItem hasHoverEmphasis={true}>
                            <LeafIcon iconSize={iconSizeOptions.lg} />

                            <Link {...subLink}>Tree</Link>

                            <Text>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Maecenas sit amet accumsan
                                dolor. Nullam fringilla quam leo.
                            </Text>
                        </MenuItem>
                    </a>

                    <a href="#">
                        <MenuItem hasHoverEmphasis={true}>
                            <CardsIcon iconSize={iconSizeOptions.lg} />

                            <Link {...subLink}>Payment</Link>

                            <IconLabel>
                                <OutIcon
                                    iconSize={iconSizeOptions.xs}
                                    marginRight={spaceOptions.xs}
                                />
                                Dev
                            </IconLabel>
                        </MenuItem>
                    </a>

                    <a href="#">
                        <MenuItem hasHoverEmphasis={true}>
                            <OrganizationIcon iconSize={iconSizeOptions.lg} />

                            <Link {...subLink}>Rounding</Link>
                        </MenuItem>
                    </a>
                </MenuList>
            </Menu>
        </MenuPrimary>
    ));
