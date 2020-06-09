import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import DaTableHeadCell from '../DaTableHeadCell/DaTableHeadCell';
import DaTableHead from './DaTableHead';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <DaTableHead theme={ThemeDefault}>
            <DaTableHeadCell theme={ThemeDefault}>
                Something
            </DaTableHeadCell>

            <DaTableHeadCell theme={ThemeDefault}>
                Something
            </DaTableHeadCell>

            <DaTableHeadCell theme={ThemeDefault}>
                Something
            </DaTableHeadCell>
        </DaTableHead>
    );
    expect(component.toJSON()).toMatchSnapshot();
});