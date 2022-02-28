import React from 'react';
import PropTypes from 'prop-types';
import { colorThemeOptions, colorThemeDefault } from '../../shared/constants';
import { TableBase } from './style';

const Table = props => {
    return (
        <TableBase {...props}>
            <div className="table">{props.children}</div>
        </TableBase>
    );
};

Table.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    hasLargeFirstColumn: PropTypes.bool,
    hasOverflowEmphasis: PropTypes.bool,
    hasBackground: PropTypes.bool,
};

Table.defaultProps = {
    colorTheme: colorThemeDefault,
    hasLargeFirstColumn: true,
    hasOverflowEmphasis: false,
    hasBackground: false,
};

export default Table;
