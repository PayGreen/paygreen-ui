import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import DaLabel from './DaLabel';

it('renders without crashing', () => {
    const daLabel = TestRenderer.create(
        <DaLabel theme={ThemeDefault}>Label Description</DaLabel>,
    );
    expect(daLabel.toJSON()).toMatchSnapshot();
});
