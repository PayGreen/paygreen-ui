import React from 'react';
import PropTypes from 'prop-types';
import { DaTableCellBase } from './style';

const DaTableCell = props => {
    const label = props.label ? (
        <span className="cell-label">{props.label}</span>
    ) : null;

    const content = props.children ? (
        <span className="cell-content">{props.children}</span>
    ) : (
        <>&nbsp;</>
    );

    return (
        <DaTableCellBase {...props} hasLabel={label ? true : false}>
            {label}
            {content}
        </DaTableCellBase>
    );
};

DaTableCell.propTypes = {
    isMain: PropTypes.bool,
    isCheckbox: PropTypes.bool,
    isId: PropTypes.bool,
    label: PropTypes.string,
};

DaTableCell.defaultProps = {
    isMain: true,
    isCheckbox: true,
    isId: false,
};

export default DaTableCell;
