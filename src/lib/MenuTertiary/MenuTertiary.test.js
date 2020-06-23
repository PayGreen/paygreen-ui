import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import MenuTertiary from './MenuTertiary';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <MenuTertiary theme={ThemeDefault}>
            Something
        </MenuTertiary>
    );
    expect(component.toJSON()).toMatchSnapshot();
});
