import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../../theme';
import YAxis from './YAxis';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <YAxis theme={ThemeDefault} values={[34.5, 64, 107]} maxValue={123} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});
