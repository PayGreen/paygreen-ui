import React from 'react'
import { ShopIcon } from './Icon';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';

it('renders without crashing', () => {
    const icon = TestRenderer.create(
        <ShopIcon
            theme={ThemeDefault}
        />
    );
    expect(icon.toJSON()).toMatchSnapshot();
});