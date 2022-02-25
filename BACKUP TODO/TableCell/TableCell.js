import React from 'react';
import { TableCellBase } from './style';

const TableCell = props => {
    return (
        <TableCellBase {...props}>
            <span className="content">{props.children}</span>
        </TableCellBase>
    );
};

export default TableCell;
