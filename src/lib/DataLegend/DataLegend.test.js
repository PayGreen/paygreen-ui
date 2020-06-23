import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Text from '../Text/Text';
import DataLegend from './DataLegend';

it('renders without crashing', () => {
    const dataLegend = TestRenderer.create(
        <>
            <DataLegend theme={ThemeDefault}>
                <Text theme={ThemeDefault}>dolor sit amet, consectetur</Text>
            </DataLegend>
        </>,
    );
    expect(dataLegend.toJSON()).toMatchSnapshot();
});
