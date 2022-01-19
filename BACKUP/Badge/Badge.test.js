import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Badge from './Badge';

it('renders without crashing', () => {
    const badge = TestRenderer.create(<Badge theme={ThemeDefault}>Test</Badge>);
    expect(badge.toJSON()).toMatchSnapshot();
});
