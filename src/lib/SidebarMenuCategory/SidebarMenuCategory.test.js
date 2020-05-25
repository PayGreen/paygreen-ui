import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { iconSizeOptions } from '../../shared/constants';
import { MeterIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import SidebarMenuCategory from '../SidebarMenuCategory/SidebarMenuCategory';
import SidebarList from '../SidebarList/SidebarList';

it('renders without crashing', () => {
    const sidebarMenuCategory = TestRenderer.create(
        <SidebarMenuCategory
            categoryTitle="Categorie de pages"
            theme={ThemeDefault}
        >
            <SidebarMenu theme={ThemeDefault}>
                <a href="#">
                    <SidebarItem theme={ThemeDefault}>
                        <MeterIcon
                            iconSize={iconSizeOptions.lg}
                            theme={ThemeDefault}
                        />

                        <Link
                            theme={ThemeDefault}
                            hasUnderline={false}
                            hasHover={false}
                        >
                            Payment
                        </Link>
                    </SidebarItem>
                </a>
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
            </SidebarMenu>
        </SidebarMenuCategory>,
    );
    expect(sidebarMenuCategory.toJSON()).toMatchSnapshot();
});