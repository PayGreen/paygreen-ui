import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { iconSizeOptions } from '../../shared/constants';
import { MeterIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import SidebarItem from './SidebarItem';

it('renders without crashing', () => {
    const sidebarItem = TestRenderer.create(
        <a href="#">
            <SidebarItem theme={ThemeDefault}>
                <MeterIcon iconSize={iconSizeOptions.lg} theme={ThemeDefault} />

                <Link theme={ThemeDefault}>Payment</Link>
            </SidebarItem>
        </a>,
    );
    expect(sidebarItem.toJSON()).toMatchSnapshot();
});
