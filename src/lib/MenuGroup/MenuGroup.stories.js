import React, { useState } from 'react';
import {
    folder,
    colorPalletOptions,
    greyOptions,
    iconSizeOptions,
    spaceOptions,
    iconHtmlTagOptions,
    itemHtmlTagOptions,
    hoverDirectionOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
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
import MenuMobile from '../MenuMobile/MenuMobile';
import MenuPrimary from '../MenuPrimary/MenuPrimary';
import MenuSecondary from '../MenuSecondary/MenuSecondary';
import MenuClose from '../MenuClose/MenuClose';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Badge from '../Badge/Badge';
import Logo from '../Logo/Logo';
import Dot from '../Dot/Dot';
import { logo } from '../Logo/sample/logo';
import MenuGroup from './MenuGroup';

export default {
    title: folder.layout + 'MenuGroup',
    argTypes: {
        isHidden: {
            name: labels.isHidden,
            control: 'boolean',
        },
        hasTopStyle: {
            name: labels.hasTopStyle,
            control: 'boolean',
        },
    },
};

export const SimpleMenuGroup = ({ isHidden, hasTopStyle }) => {
    const [isOpenMenuPrimary, setOpenMenuPrimary] = useState(false);
    const [isOpenMenuSecondary, setOpenMenuSecondary] = useState(false);

    return (
        <MenuGroup isHidden={isHidden} hasTopStyle={hasTopStyle}>
            <MenuMobile>
                <MenuHamburger
                    isOpen={isOpenMenuPrimary}
                    onClick={() => setOpenMenuPrimary(!isOpenMenuPrimary)}
                />

                <a href="#">
                    <Logo
                        hasThemeColor={true}
                        hasBaseline={false}
                        hoverDirection={hoverDirectionOptions.right}
                        badge={<Badge>Tree</Badge>}
                    >
                        {logo}
                    </Logo>
                </a>

                <UserIcon
                    onClick={() => setOpenMenuSecondary(!isOpenMenuSecondary)}
                    htmlTag={iconHtmlTagOptions.button}
                    iconSize={iconSizeOptions.xl}
                />
            </MenuMobile>

            <MenuPrimary isOpen={isOpenMenuPrimary}>
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

                                <IconLabel icon={<OutIcon />}>Dev</IconLabel>
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

                                <IconLabel icon={<OutIcon />}>Dev</IconLabel>
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
                isOpen={isOpenMenuSecondary}
                closeComponent={
                    <MenuClose
                        onClick={() =>
                            setOpenMenuSecondary(!isOpenMenuSecondary)
                        }
                    />
                }
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
    );
};

SimpleMenuGroup.args = {
    hasTopStyle: false,
    isHidden: false,
};
