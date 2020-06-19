import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import DataBar from './DataBar';
import { colorThemeDefault } from '../../shared/constants';

const dataArray = [
    {
        currentValue: 20,
        legend: 'légende de la barre',
        color: colorThemeDefault,
    },
];

it('renders without crashing', () => {
    const dataBar = TestRenderer.create(
        <DataBar theme={ThemeDefault} dataArray={dataArray} />,
    );
    expect(dataBar.toJSON()).toMatchSnapshot();
});
