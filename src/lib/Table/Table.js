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
            <div className="table">
                {this.props.children}
            </div>
        </TableBase>;
    }
}

Table.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    hasLargeFirstColumn: PropTypes.bool,
    hasBackground: PropTypes.bool
};

Table.defaultProps = {
    colorTheme: colorThemeDefault,
    hasLargeFirstColumn: true,
    hasBackground: false
};

export default Table;