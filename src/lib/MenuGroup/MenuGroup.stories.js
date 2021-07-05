import React, { useState } from 'react';
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
import MenuPrimary from '../MenuPrimary/MenuPrimary';
import MenuSecondary from '../MenuSecondary/MenuSecondary';
import MenuClose from '../MenuClose/MenuClose';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Logo from '../Logo/Logo';
import Dot from '../Dot/Dot';
import { logo } from '../Logo/sample/logo';
import MenuGroup from './MenuGroup';

storiesOf(folder.nav + 'MenuGroup', module)
    .addDecorator(withKnobs)
    .add('MenuGroup', () => {
        const [isOpenMenuPrimary, setOpenMenuPrimary] = useState(false);
        const [isOpenMenuSecondary, setOpenMenuSecondary] = useState(false);

        return (
            <MenuGroup
                isHidden={boolean(labels.isHidden, false)}
                hasTopStyle={boolean(labels.hasTopStyle, false)}
            >
                <div className="main-nav">
                    <MenuHamburger
                        isOpen={isOpenMenuPrimary}
                        onClick={() => setOpenMenuPrimary(!isOpenMenuPrimary)}
                    />

                    <a href="#">
                        <Logo
                            hasThemeColor={true}
                            hasBaseline={false}
                            hoverDirection={hoverDirectionOptions.right}
                            blockWidth={spaceOptions.sm}
                        >
                            {logo}
                        </Logo>
                    </a>

                    <UserIcon
                        onClick={() =>
                            setOpenMenuSecondary(!isOpenMenuSecondary)
                        }
                        htmlTag={iconHtmlTagOptions.button}
                        iconSize={iconSizeOptions.xl}
                    />
                </div>

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
                                        adipiscing elit. Maecenas sit amet
                                        accumsan dolor. Nullam fringilla quam
                                        leo.
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
                                        adipiscing elit. Maecenas sit amet
                                        accumsan dolor. Nullam fringilla quam
                                        leo.
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
    });
