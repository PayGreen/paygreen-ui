import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault
} from '../../shared/constants';
import { TableBase } from './style';

class Table extends PureComponent {
    render() {
        return <TableBase
            {...this.props}
        >
            {this.props.children}
        </TableBase>;
    }
}

Table.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    largeFirstColumn: PropTypes.bool
};

Table.defaultProps = {
    colorTheme: colorThemeDefault,
    largeFirstColumn: true
};

export default Table;