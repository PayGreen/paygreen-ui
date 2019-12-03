import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import {
    colorPalletOptions,
    iconSizeOptions,
    spaceOptions
} from '../../shared/constants';
import { LeafIcon, CardsIcon, OutIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import IconLabel from '../IconLabel/IconLabel';
import Text from '../Text/Text';
import MenuItem from '../MenuItem/MenuItem';
import MenuList from '../MenuList/MenuList';
import Menu from '../Menu/Menu';
import MenuPrimary from './MenuPrimary';

it('renders without crashing', () => {
    const menuPrimary = TestRenderer.create(
        <MenuPrimary theme={ThemeDefault}>
            <Menu theme={ThemeDefault}>
                <a href="#">
                    <MenuItem
                        isMain={true}
                        theme={ThemeDefault}
                    >
                        <Link
                            underline={false}
                            colorPallet={colorPalletOptions.wab}
                            uppercase={true}
                            theme={ThemeDefault}
                        >
                            About us
                        </Link>
                    </MenuItem>
                </a>
            </Menu>

            <Menu theme={ThemeDefault}>
                <a href="#">
                    <MenuItem
                        isMain={true}
                        hoverBase={false}
                        hoverAlternative={false}
                        theme={ThemeDefault}
                    >
                        <Link
                            underline={false}
                            colorPallet={colorPalletOptions.wab}
                            uppercase={true}
                            theme={ThemeDefault}
                        >
                            Other products
                        </Link>
                    </MenuItem>
                </a>

                <MenuList theme={ThemeDefault}>
                    <a href="#">
                        <MenuItem
                            hoverEmphasis={true}
                            theme={ThemeDefault}
                        >
                            <LeafIcon
                                iconSize={iconSizeOptions.lg}
                                theme={ThemeDefault}
                            />

                            <Link
                                underline={false}
                                theme={ThemeDefault}
                            >
                                Tree
                            </Link>

                            <Text theme={ThemeDefault}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet accumsan dolor. Nullam fringilla quam leo.
                            </Text>
                        </MenuItem>
                    </a>

                    <a href="#">
                        <MenuItem
                            hoverEmphasis={true}
                            theme={ThemeDefault}
                        >
                            <CardsIcon
                                iconSize={iconSizeOptions.lg}
                                theme={ThemeDefault}
                            />

                            <Link
                                underline={false}
                                theme={ThemeDefault}
                            >
                                Payment
                            </Link>

                            <IconLabel theme={ThemeDefault}>
                                <OutIcon
                                    iconSize={iconSizeOptions.xs}
                                    marginRight={spaceOptions.xs}
                                    theme={ThemeDefault}
                                />
                                Dev
                            </IconLabel>
                        </MenuItem>
                    </a>
                </MenuList>
            </Menu>
        </MenuPrimary>
    );
    expect(menuPrimary.toJSON()).toMatchSnapshot();
});