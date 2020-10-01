import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox/Checkbox';
import { DaTableCellBase } from './style';

const DaTableCell = ({ children, label, field, isCheckbox, ...rest }) => {
    const labelContent = label && label.length ? (
        <span className="cell-label">{label}</span>
    ) : null;

    const content = children ? (
        <span className="cell-content">{children}</span>
    ) : (
        <>&nbsp;</>
    );

    return (
        <DaTableCellBase
            {...rest}
            isCheckbox={isCheckbox || children && children.type === Checkbox}
            hasLabel={label && label.length}
        >
            {labelContent}
            {content}
            {field ? field : null}
        </DaTableCellBase>
    );
};

DaTableCell.propTypes = {
    isCheckbox: PropTypes.bool,
    isMain: PropTypes.bool,
    isId: PropTypes.bool,
    label: PropTypes.string,
    field: PropTypes.element,
};

DaTableCell.defaultProps = {
    isCheckbox: false,
    isMain: true,
    isId: false,
};

export default DaTableCell;
