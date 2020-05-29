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
            {props.field ? props.field : null}
        </DaTableCellBase>
    );
};

DaTableCell.propTypes = {
    isMain: PropTypes.bool,
    isCheckbox: PropTypes.bool,
    isId: PropTypes.bool,
    label: PropTypes.string,
    field: PropTypes.element,
};

DaTableCell.defaultProps = {
    isMain: true,
    isCheckbox: false,
    isId: false,
};

export default DaTableCell;
