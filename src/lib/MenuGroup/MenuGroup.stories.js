import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import {
    folder,
    alignOptions,
    colorPalletOptions,
    greyOptions,
    iconSizeOptions,
    spaceOptions,
    iconHtmlTagOptions,
    itemHtmlTagOptions,
} from '../../shared/constants';
import {
    UserIcon,
    LeafIcon,
    CardsIcon,
    OrganizationIcon,
    LockIcon,
    PenIcon,
    OutIcon,
} from '../Icon/Icon';
import Link from '../Link/Link';
import IconLabel from '../IconLabel/IconLabel';
import Text from '../Text/Text';
import MenuItem from '../MenuItem/MenuItem';
import MenuList from '../MenuList/MenuList';
import Menu from '../Menu/Menu';
import MenuPrimary from '../MenuPrimary/MenuPrimary';
import MenuSecondary from '../MenuSecondary/MenuSecondary';
import MenuClose from '../MenuClose/MenuClose';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Logo from '../Logo/Logo';
import Dot from '../Dot/Dot';
import MenuGroup from './MenuGroup';
import { logo } from '../Logo/sample/logo';

const mainMenuIsOpenLabel = 'Open primary menu';

const mainMenuItem = {
    isMain: true,
    hasHoverBase: false,
    hasHoverAlternative: false,
};

const mainLink = {
    hasHover: false,
    hasUnderline: false,
    colorPallet: colorPalletOptions.wab,
    hasUppercase: true,
};

const subLink = {
    hasHover: false,
    hasUnderline: false,
};

storiesOf(folder.nav + 'MenuGroup', module)
    .addDecorator(withKnobs)
    .add('MenuGroup', () => (
        <MenuGroup>
            <div className="main-nav">
                <MenuHamburger isOpen={boolean(mainMenuIsOpenLabel, true)} />

                <a href="#">
                    <Logo
                        hasBaseline={false}
                        hasHoverRight={true}
                        blockWidth={spaceOptions.sm}
                    >
                        {logo}
                    </Logo>
                </a>

                <UserIcon
                    htmlTag={iconHtmlTagOptions.button}
                    iconSize={iconSizeOptions.xl}
                />
            </div>

            <MenuPrimary isOpen={boolean(mainMenuIsOpenLabel, true)}>
                <Menu>
                    <a href="#">
                        <MenuItem isMain={true}>
                            <Link
                                hasHover={false}
                                hasUnderline={false}
                                colorPallet={colorPalletOptions.wab}
                                hasUppercase={true}
                            >
                                About us
                            </Link>
                        </MenuItem>
                    </a>
                </Menu>

                <Menu>
                    <a href="#">
                        <MenuItem {...mainMenuItem}>
                            <Link {...mainLink}>Our products</Link>
                        </MenuItem>
                    </a>

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
                                <OrganizationIcon
                                    iconSize={iconSizeOptions.lg}
                                />

                                <Link {...subLink}>Rounding</Link>
                            </MenuItem>
                        </a>
                    </MenuList>
                </Menu>

                <Menu>
                    <a href="#">
                        <MenuItem {...mainMenuItem}>
                            <Link {...mainLink}>Other products</Link>
                        </MenuItem>
                    </a>

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
                    </MenuList>
                </Menu>
            </MenuPrimary>

            <Dot
                className="hideOnSmallScreen"
                colorPallet={colorPalletOptions.wab}
                colorWab={greyOptions.grey10}
                marginLeft={spaceOptions.lg}
                marginRight={spaceOptions.lg}
            />

            <MenuSecondary
                isOpen={boolean('Open secondary menu', true)}
                closeComponent={<MenuClose />}
            >
                <Menu htmlTag={itemHtmlTagOptions.div}>
                    <a href="#">
                        <MenuItem
                            hasHoverBase={false}
                            hasHoverEmphasis={true}
                            align={alignOptions.center}
                            isMain={true}
                        >
                            <LockIcon
                                iconSize={iconSizeOptions.lg}
                                colorPallet={colorPalletOptions.wab}
                            />

                            <Link
                                hasHover={false}
                                hasUnderline={false}
                                hasUppercase={true}
                                colorPallet={colorPalletOptions.wab}
                            >
                                Login
                            </Link>
                        </MenuItem>
                    </a>
                </Menu>

                <Menu htmlTag={itemHtmlTagOptions.div}>
                    <a href="#">
                        <MenuItem
                            hasHoverBase={false}
                            hasHoverEmphasis={true}
                            align={alignOptions.center}
                            isMain={true}
                        >
                            <PenIcon iconSize={iconSizeOptions.lg} />

                            <Link
                                hasHover={false}
                                hasUnderline={false}
                                hasUppercase={true}
                            >
                                Subscribe
                            </Link>
                        </MenuItem>
                    </a>
                </Menu>
            </MenuSecondary>
        </MenuGroup>
    ));
