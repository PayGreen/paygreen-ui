import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { ShopIcon } from './Icon';

it('renders without crashing', () => {
    const icon = TestRenderer.create(
        <ShopIcon
            theme={ThemeDefault}
        />
    );
    expect(icon.toJSON()).toMatchSnapshot();
});