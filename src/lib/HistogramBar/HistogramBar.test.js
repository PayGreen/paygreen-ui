import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import HistogramBar from './HistogramBar';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <HistogramBar
            theme={ThemeDefault}
            value={60}
            label="label"
            legend="{value} in {label}"
        />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});
