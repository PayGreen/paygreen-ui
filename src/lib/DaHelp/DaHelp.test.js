import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import DaHelp from './DaHelp';

it('renders without crashing', () => {
    const daHelp = TestRenderer.create(
        <DaHelp theme={ThemeDefault}>CTA button</DaHelp>,
    );
    expect(daHelp.toJSON()).toMatchSnapshot();
});
