import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Badge from './Badge';
import { ArrowBottomIcon } from '../Icon/Icon';

it('renders without crashing', () => {
    const badge = TestRenderer.create(
        <Badge theme={ThemeDefault} gradient="brand" textSize="sm">
            Test
            <ArrowBottomIcon
                theme={ThemeDefault}
                colorPallet="wab"
                colorWab="white00"
                iconSize="xs"
            />
        </Badge>,
    );
    expect(badge.toJSON()).toMatchSnapshot();
});
