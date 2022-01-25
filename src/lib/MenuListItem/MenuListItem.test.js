import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { iconSizeOptions, spaceOptions } from '../../shared/constants';
import { CardsIcon, OutIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import IconLabel from '../IconLabel/IconLabel';
import Text from '../Text/Text';
import MenuListItem from './MenuListItem';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <a href="#">
            <MenuListItem theme={ThemeDefault}>
                <CardsIcon iconSize={iconSizeOptions.lg} theme={ThemeDefault} />

                <Link theme={ThemeDefault}>Payment</Link>

                <IconLabel
                    theme={ThemeDefault}
                    icon={<OutIcon theme={ThemeDefault} />}
                >
                    Dev
                </IconLabel>

                <Text theme={ThemeDefault}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas sit amet accumsan dolor. Nullam fringilla quam leo,
                    id bibendum felis iaculis eu.
                </Text>
            </MenuListItem>
        </a>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});
