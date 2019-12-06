import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import TableCell from '../TableCell/TableCell';
import TableRow from '../TableRow/TableRow';
import Table from './Table';

it('renders without crashing', () => {
    const table = TestRenderer.create(
        <Table theme={ThemeDefault}>
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
        </Table>
    );
    expect(table.toJSON()).toMatchSnapshot();
});