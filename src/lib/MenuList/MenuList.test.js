import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { iconSizeOptions } from '../../shared/constants';
import { LeafIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import Text from '../Text/Text';
import MenuListItem from '../MenuListItem/MenuListItem';
import MenuList from './MenuList';

it('renders without crashing', () => {
    const menuList = TestRenderer.create(
        <MenuList theme={ThemeDefault}>
            <a href="#">
                <MenuListItem theme={ThemeDefault}>
                    <LeafIcon
                        iconSize={iconSizeOptions.lg}
                        theme={ThemeDefault}
                    />

                    <Link theme={ThemeDefault}>Tree</Link>

                    <Text theme={ThemeDefault}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas sit amet accumsan dolor. Nullam fringilla quam
                        leo.
                    </Text>
                </MenuListItem>
            </a>
        </MenuList>,
    );
    expect(menuList.toJSON()).toMatchSnapshot();
});
