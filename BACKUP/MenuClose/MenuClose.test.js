import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import MenuClose from './MenuClose';

it('renders without crashing', () => {
    const menuClose = TestRenderer.create(
        <MenuClose
            theme={ThemeDefault}
        />
    );
    expect(menuClose.toJSON()).toMatchSnapshot();
});