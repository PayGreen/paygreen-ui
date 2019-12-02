import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import {
    colorPalletOptions,
    iconSizeOptions,
    spaceOptions
} from '../../shared/constants';
import { LeafIcon, CardsIcon, OrganizationIcon, OutIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import IconLabel from '../IconLabel/IconLabel';
import Text from '../Text/Text';
import MenuItem from '../MenuItem/MenuItem';
import MenuList from '../MenuList/MenuList';
import Menu from '../Menu/Menu';
import MenuPrimary from './MenuPrimary';

storiesOf('MenuPrimary', module).addDecorator(withKnobs)
.add('MenuPrimary', () => (
    <MenuPrimary
        isOpen={boolean('Is open', true)}
    >
        <Menu>
            <a href="#">
                <MenuItem
                    isMain={true}
                >
                    <Link
                        underline={false}
                        colorPallet={colorPalletOptions.wab}
                        uppercase={true}
                    >
                        About us
                    </Link>
                </MenuItem>
            </a>
        </Menu>

        <Menu>
            <a href="#">
                <MenuItem
                    isMain={true}
                    hoverBase={false}
                    hoverAlternative={false}
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
                    >
                        <LeafIcon
                            iconSize={iconSizeOptions.lg}
                        />

                        <Link
                            underline={false}
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
                    >
                        <CardsIcon
                            iconSize={iconSizeOptions.lg}
                        />

                        <Link
                            underline={false}
                        >
                            Payment
                        </Link>

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
                    <MenuItem
                        hoverEmphasis={true}
                    >
                        <OrganizationIcon
                            iconSize={iconSizeOptions.lg}
                        />

                        <Link
                            underline={false}
                        >
                            Rounding
                        </Link>
                    </MenuItem>
                </a>
            </MenuList>
        </Menu>

        <Menu>
            <a href="#">
                <MenuItem
                    isMain={true}
                    hoverBase={false}
                    hoverAlternative={false}
                >
                    <Link
                        underline={false}
                        colorPallet={colorPalletOptions.wab}
                        uppercase={true}
                    >
                        Other products
                    </Link>
                </MenuItem>
            </a>

            <MenuList>
                <a href="#">
                    <MenuItem
                        hoverEmphasis={true}
                    >
                        <LeafIcon
                            iconSize={iconSizeOptions.lg}
                        />

                        <Link
                            underline={false}
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
                    >
                        <CardsIcon
                            iconSize={iconSizeOptions.lg}
                        />

                        <Link
                            underline={false}
                        >
                            Payment
                        </Link>

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
                    <MenuItem
                        hoverEmphasis={true}
                    >
                        <OrganizationIcon
                            iconSize={iconSizeOptions.lg}
                        />

                        <Link
                            underline={false}
                        >
                            Rounding
                        </Link>
                    </MenuItem>
                </a>
            </MenuList>
        </Menu>
    </MenuPrimary>
));