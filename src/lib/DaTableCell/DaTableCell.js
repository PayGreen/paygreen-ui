import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox/Checkbox';
import { DaTableCellBase } from './style';

const DaTableCell = ({ children, label, field, ...rest }) => {
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
            isCheckbox={children && children.type === Checkbox}
            hasLabel={label && label.length}
        >
            {labelContent}
            {content}
            {field ? field : null}
        </DaTableCellBase>
    );
};

DaTableCell.propTypes = {
    isMain: PropTypes.bool,
    isId: PropTypes.bool,
    label: PropTypes.string,
    field: PropTypes.element,
};

DaTableCell.defaultProps = {
    isMain: true,
    isId: false,
};

export default DaTableCell;
