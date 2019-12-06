import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import TableCell from '../TableCell/TableCell';
import TableRow from './TableRow';

it('renders without crashing', () => {
    const tableRow = TestRenderer.create(
        <TableRow theme={ThemeDefault}>
            <TableCell theme={ThemeDefault}>
                Row name
            </TableCell>

            <TableCell theme={ThemeDefault}>
                Value 1
            </TableCell>

            <TableCell theme={ThemeDefault}>
                Value 2
            </TableCell>
        </TableRow>
    );
    expect(tableRow.toJSON()).toMatchSnapshot();
});