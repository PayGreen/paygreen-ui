import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import {
    folder,
    spaceOptions,
    alignOptions,
    colorPalletOptions,
    greyOptions,
    itemHtmlTagOptions,
    iconHtmlTagOptions,
    iconSizeOptions,
} from '../../shared/constants';
import { UserIcon, LockIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import MenuItem from '../MenuItem/MenuItem';
import Menu from '../Menu/Menu';
import MenuPrimary from '../MenuPrimary/MenuPrimary';
import MenuSecondary from '../MenuSecondary/MenuSecondary';
import MenuTertiary from '../MenuTertiary/MenuTertiary';
import MenuClose from '../MenuClose/MenuClose';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Logo from '../Logo/Logo';
import Dot from '../Dot/Dot';
import MenuGroup from '../MenuGroup/MenuGroup';
import Header from './Header';
import { logo } from '../Logo/sample/logo';

const mainLink = {
    hasHover: false,
    hasUnderline: false,
    colorPallet: colorPalletOptions.wab,
    hasUppercase: true,
};

const sampleLinks = [
    {
        link: 'lorem',
        label: 'Lorem ipsum dolor',
    },
    {
        link: 'sit-amet',
        label: 'Sit amet',
    },
    {
        link: 'consectetur',
        label: 'Consectetur adipiscing',
    },
    {
        link: 'ornare',
        label: 'Cras ornare laoreet',
    },
    {
        link: 'in-finibus',
        label: 'In finibus dolor',
    },
];

const isOpenMenuPrimaryLabel = 'Open MenuPrimary';

storiesOf(folder.nav + 'Header', module)
    .addDecorator(withKnobs)
    .add('Header', () => (
        <Header>
            <MenuGroup>
                <div className="main-nav">
                    <MenuHamburger
                        isOpen={boolean(isOpenMenuPrimaryLabel, false)}
                    />

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

                <MenuPrimary isOpen={boolean(isOpenMenuPrimaryLabel, false)}>
                    <Menu>
                        <a href="#">
                            <MenuItem isMain={true}>
                                <Link {...mainLink}>About us</Link>
                            </MenuItem>
                        </a>
                    </Menu>

                    <Menu>
                        <a href="#">
                            <MenuItem isMain={true}>
                                <Link {...mainLink}>Our products</Link>
                            </MenuItem>
                        </a>
                    </Menu>

                    <Menu>
                        <a href="#">
                            <MenuItem isMain={true}>
                                <Link {...mainLink}>Visit us</Link>
                            </MenuItem>
                        </a>
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
                    closeComponent={<MenuClose />}
                    isOpen={boolean('Open MenuSecondary', false)}
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
                </MenuSecondary>
            </MenuGroup>

            {boolean('Add MenuTertiary', true) ? (
                <MenuTertiary>
                    {sampleLinks.map((sample, index) => (
                        <a href={'#' + sample.link} key={index}>
                            {sample.label}
                        </a>
                    ))}
                </MenuTertiary>
            ) : null}
        </Header>
    ));
