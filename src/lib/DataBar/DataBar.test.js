import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import DataBar from './DataBar';
import { colorThemeDefault, formStatusDefault } from '../../shared/constants';

const data = [
    {
        currentValue: 20,
        legend: 'légende de la barre',
        colorStatus: formStatusDefault,
        colorTheme: colorThemeDefault,
    },
];

it('renders without crashing', () => {
    const dataBar = TestRenderer.create(
        <DataBar theme={ThemeDefault} data={data} />,
    );
    expect(dataBar.toJSON()).toMatchSnapshot();
});
