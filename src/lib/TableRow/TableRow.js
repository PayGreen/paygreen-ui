import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions
} from '../../shared/constants';
import { TableRowBase } from './style';

class TableRow extends PureComponent {
    render() {
        return <TableRowBase
            {...this.props}
        >
            {this.props.children}
        </TableRowBase>;
    }
}

TableRow.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values({...{none: 'none'}, ...colorThemeOptions})),
    isMain: PropTypes.bool
};

TableRow.defaultProps = {
    colorTheme: 'none',
    isMain: false
};

export default TableRow;