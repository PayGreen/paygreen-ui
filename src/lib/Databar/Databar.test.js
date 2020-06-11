import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Databar from './Databar';

const dataArray = [
    {
        currentValue: 20,
        legend: 'légende de la barre',
        color: 'red',
    },
];

it('renders without crashing', () => {
    const databar = TestRenderer.create(
        <Databar
            theme={ThemeDefault}
            dataArray={dataArray}
        />,
    );
    expect(databar.toJSON()).toMatchSnapshot();
});
