import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { iconSizeOptions } from '../../shared/constants';
import { LeafIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import Text from '../Text/Text';
import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarMenu from '../SidebarMenu/SidebarMenu';

it('renders without crashing', () => {
    const sidebarMenu = TestRenderer.create(
        <SidebarMenu theme={ThemeDefault}>
            <a href="#">
                <SidebarItem theme={ThemeDefault}>
                    <LeafIcon
                        iconSize={iconSizeOptions.lg}
                        theme={ThemeDefault}
                    />

                    <Link
                        theme={ThemeDefault}
                        hasUnderline={false}
                        hasHover={false}
                    >
                        Tree
                    </Link>

                    <Text theme={ThemeDefault}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas sit amet accumsan dolor. Nullam fringilla quam
                        leo.
                    </Text>
                </SidebarItem>
            </a>
        </SidebarMenu>,
    );
    expect(sidebarMenu.toJSON()).toMatchSnapshot();
});
