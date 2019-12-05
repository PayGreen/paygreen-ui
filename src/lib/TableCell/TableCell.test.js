import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import TableCell from './TableCell';

it('renders without crashing', () => {
    const tableCell = TestRenderer.create(
        <TableCell theme={ThemeDefault}>
            Something
        </TableCell>
    );
    expect(tableCell.toJSON()).toMatchSnapshot();
});