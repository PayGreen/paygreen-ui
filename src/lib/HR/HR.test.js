import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import HR from './HR';

it('renders without crashing', () => {
    const hr = TestRenderer.create(<HR theme={ThemeDefault} />);
    expect(hr.toJSON()).toMatchSnapshot();
});
