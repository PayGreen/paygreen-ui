import React from 'react';
import PropTypes from 'prop-types';
import { DaTableCellBase } from './style';

const DaTableCell = ({ children, label, field, ...rest }) => {
    const labelContent = label ? (
        <span className="cell-label">{label}</span>
    ) : null;

    const content = children ? (
        <span className="cell-content">{children}</span>
    ) : (
        <>&nbsp;</>
    );

    return (
        <DaTableCellBase {...rest} hasLabel={labelContent ? true : false}>
            {labelContent}
            {content}
            {field ? field : null}
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
