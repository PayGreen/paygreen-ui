import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import {
    iconSizeOptions,
    spaceOptions
} from '../../shared/constants';
import { CardsIcon, OutIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import IconLabel from '../IconLabel/IconLabel';
import Text from '../Text/Text';
import MenuItem from './MenuItem';

it('renders without crashing', () => {
    const menuItem = TestRenderer.create(
        <a href="#">
            <MenuItem
                theme={ThemeDefault}
            >
                <CardsIcon
                    iconSize={iconSizeOptions.lg}
                    theme={ThemeDefault}
                />

                <Link
                    theme={ThemeDefault}
                    underline={false}
                >
                    Payment
                </Link>

                <IconLabel
                    theme={ThemeDefault}
                >
                    <OutIcon
                        theme={ThemeDefault}
                        iconSize={iconSizeOptions.xs}
                        marginRight={spaceOptions.xs}
                    />
                    Dev
                </IconLabel>

                <Text
                    theme={ThemeDefault}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet accumsan dolor. Nullam fringilla quam leo, id bibendum felis iaculis eu.
                </Text>
            </MenuItem>
        </a>
    );
    expect(menuItem.toJSON()).toMatchSnapshot();
});