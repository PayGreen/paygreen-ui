import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Link from '../Link/Link';
import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarList from './SidebarList';

it('renders without crashing', () => {
    const sidebarList = TestRenderer.create(
        <SidebarList theme={ThemeDefault}>
            <a href="#">
                <SidebarItem theme={ThemeDefault}>
                    <Link
                        theme={ThemeDefault}
                        hasUnderline={false}
                        hasHover={false}
                    >
                        Tree
                    </Link>
                </SidebarItem>
            </a>
            <a href="#">
                <SidebarItem theme={ThemeDefault}>
                    <Link
                        theme={ThemeDefault}
                        hasUnderline={false}
                        hasHover={false}
                    >
                        Other
                    </Link>
                </SidebarItem>
            </a>
        </SidebarList>,
    );
    expect(sidebarList.toJSON()).toMatchSnapshot();
});
