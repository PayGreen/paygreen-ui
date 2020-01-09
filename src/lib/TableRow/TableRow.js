import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeAllOptions,
    colorThemeAllDefault,
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
    colorTheme: PropTypes.oneOf(Object.values(colorThemeAllOptions)),
    isMain: PropTypes.bool
};

TableRow.defaultProps = {
    colorTheme: colorThemeAllDefault,
    isMain: false
};

export default TableRow;