import React, { PureComponent } from 'react';
import { TableCellBase } from './style';

class TableCell extends PureComponent {
    render() {
        return <TableCellBase
            {...this.props}
        >
            <span className="content">
                {this.props.children}
            </span>
        </TableCellBase>;
    }
}

export default TableCell;