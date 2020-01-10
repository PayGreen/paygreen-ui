import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Logo from './Logo';
import { logo } from './sample/logo';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <Logo theme={ThemeDefault}>
            {logo}
        </Logo>
    );
    expect(component.toJSON()).toMatchSnapshot();
});