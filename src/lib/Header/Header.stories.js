import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import {
    alignOptions,
    colorPalletOptions,
    iconSizeOptions,
    spaceOptions
} from '../../shared/constants';
import {
    UserIcon,
    LeafIcon,
    CardsIcon,
    OrganizationIcon,
    LockIcon,
    PenIcon,
    OutIcon
} from '../Icon/Icon';
import Link from '../Link/Link';
import IconLabel from '../IconLabel/IconLabel';
import Text from '../Text/Text';
import MenuItem from '../MenuItem/MenuItem';
import MenuList from '../MenuList/MenuList';
import Menu from '../Menu/Menu';
import MenuPrimary from '../MenuPrimary/MenuPrimary';
import MenuSecondary from '../MenuSecondary/MenuSecondary';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import MenuClose from '../MenuClose/MenuClose';
import Header from './Header';

storiesOf('Header', module).addDecorator(withKnobs)
.add('Header', () => (
    <Header>
        <div className="nav-buttons">
            <MenuHamburger />

            <UserIcon
                htmlTag="button"
                iconSize={iconSizeOptions.xl}
            />
        </div>

        <MenuPrimary
            isOpen={boolean('Open primary menu', true)}
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
                </MenuList>
            </Menu>
        </MenuPrimary>

        <MenuSecondary
            isOpen={boolean('Open secondary menu', true)}
        >
            <Menu>
                <a href="#">
                    <MenuItem
                        hoverBase={false}
                        hoverEmphasis={true}
                        align={alignOptions.center}
                        isMain={true}
                    >
                        <LockIcon
                            iconSize={iconSizeOptions.lg}
                            colorPallet={colorPalletOptions.wab}
                        />

                        <Link
                            underline={false}
                            uppercase={true}
                            colorPallet={colorPalletOptions.wab}
                        >
                            Login
                        </Link>
                    </MenuItem>
                </a>
            </Menu>

            <Menu>
                <a href="#">
                    <MenuItem
                        hoverBase={false}
                        hoverEmphasis={true}
                        align={alignOptions.center}
                        isMain={true}
                    >
                        <PenIcon
                            iconSize={iconSizeOptions.lg}
                        />

                        <Link
                            underline={false}
                            uppercase={true}
                        >
                            Subscribe
                        </Link>
                    </MenuItem>
                </a>
            </Menu>

            <MenuClose />
        </MenuSecondary>
    </Header>
));