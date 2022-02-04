import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import MenuItem from './MenuItem';

it('renders without crashing', () => {
    const menuItem = TestRenderer.create(
        <a href="#">
            <MenuItem theme={ThemeDefault}>Payment</MenuItem>
        </a>,
    );
    expect(menuItem.toJSON()).toMatchSnapshot();
});
