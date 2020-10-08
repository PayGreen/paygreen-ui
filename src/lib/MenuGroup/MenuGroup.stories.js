import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import {
    folder,
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
import MenuListItem from '../MenuListItem/MenuListItem';
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

storiesOf(folder.nav + 'MenuGroup', module)
    .addDecorator(withKnobs)
    .add('MenuGroup', () => (
        <MenuGroup
            isHidden={boolean('Is hidden', false)}
            hasTopStyle={boolean('Top style', false)}
        >
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
                        <MenuItem>About us</MenuItem>
                    </a>
                </Menu>

                <Menu>
                    <MenuItem isClickable={false}>Our products</MenuItem>

                    <MenuList>
                        <a href="#">
                            <MenuListItem>
                                <LeafIcon iconSize={iconSizeOptions.lg} />

                                <Link>Tree</Link>

                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Maecenas sit amet accumsan
                                    dolor. Nullam fringilla quam leo.
                                </Text>
                            </MenuListItem>
                        </a>

                        <a href="#">
                            <MenuListItem>
                                <CardsIcon iconSize={iconSizeOptions.lg} />

                                <Link>Payment</Link>

                                <IconLabel>
                                    <OutIcon
                                        iconSize={iconSizeOptions.xs}
                                        marginRight={spaceOptions.xs}
                                    />
                                    Dev
                                </IconLabel>
                            </MenuListItem>
                        </a>

                        <a href="#">
                            <MenuListItem>
                                <OrganizationIcon
                                    iconSize={iconSizeOptions.lg}
                                />

                                <Link>Rounding</Link>
                            </MenuListItem>
                        </a>
                    </MenuList>
                </Menu>

                <Menu>
                    <MenuItem isClickable={false}>Other products</MenuItem>

                    <MenuList>
                        <a href="#">
                            <MenuListItem>
                                <LeafIcon iconSize={iconSizeOptions.lg} />

                                <Link>Tree</Link>

                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Maecenas sit amet accumsan
                                    dolor. Nullam fringilla quam leo.
                                </Text>
                            </MenuListItem>
                        </a>

                        <a href="#">
                            <MenuListItem>
                                <CardsIcon iconSize={iconSizeOptions.lg} />

                                <Link>Payment</Link>

                                <IconLabel>
                                    <OutIcon
                                        iconSize={iconSizeOptions.xs}
                                        marginRight={spaceOptions.xs}
                                    />
                                    Dev
                                </IconLabel>
                            </MenuListItem>
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
                        <MenuItem>
                            <LockIcon iconSize={iconSizeOptions.lg} />
                            Login
                        </MenuItem>
                    </a>
                </Menu>

                <Menu htmlTag={itemHtmlTagOptions.div}>
                    <a href="#">
                        <MenuItem>
                            <PenIcon iconSize={iconSizeOptions.lg} />
                            Subscribe
                        </MenuItem>
                    </a>
                </Menu>
            </MenuSecondary>
        </MenuGroup>
    ));
