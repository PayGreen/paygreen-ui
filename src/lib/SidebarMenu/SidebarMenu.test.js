import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import {
    iconSizeOptions,
    sidebarItemHtmlTagOptions,
} from '../../shared/constants';
import { MeterIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import SidebarList from '../SidebarList/SidebarList';

it('renders without crashing', () => {
    const sidebarMenu = TestRenderer.create(
        <SidebarMenu theme={ThemeDefault}>
            <SidebarItem
                theme={ThemeDefault}
                as={sidebarItemHtmlTagOptions.button}
            >
                <MeterIcon iconSize={iconSizeOptions.lg} theme={ThemeDefault} />

                <Link
                    theme={ThemeDefault}
                    hasUnderline={false}
                    hasHover={false}
                >
                    Payment
                </Link>
            </SidebarItem>

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
            </SidebarList>
        </SidebarMenu>,
    );
    expect(sidebarMenu.toJSON()).toMatchSnapshot();
});
