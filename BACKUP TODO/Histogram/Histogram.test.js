import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import HistogramBar from '../HistogramBar/HistogramBar';
import Histogram from './Histogram';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <Histogram theme={ThemeDefault}>
            <HistogramBar theme={ThemeDefault} value={60.1} />
            <HistogramBar theme={ThemeDefault} value={0} />
            <HistogramBar theme={ThemeDefault} value={110} />
            <HistogramBar theme={ThemeDefault} value={34.5} />
        </Histogram>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});
