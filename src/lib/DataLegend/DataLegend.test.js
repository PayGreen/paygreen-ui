import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import DataLegend from './DataLegend';

it('renders without crashing', () => {
    const dataLegend = TestRenderer.create(
        <>
            <DataLegend theme={ThemeDefault}>
                <Text>dolor sit amet, consectetur</Text>
            </DataLegend>
        </>,
    );
    expect(dataLegend.toJSON()).toMatchSnapshot();
});
