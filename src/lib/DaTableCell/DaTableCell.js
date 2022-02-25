import React from 'react';
import PropTypes from 'prop-types';
import { buttonSizeOptions } from '../../shared/constants';
import Checkbox from '../Checkbox/Checkbox';
import { DaTableCellBase } from './style';

const DaTableCell = ({ children, label, isCheckbox, ...rest }) => {
    const labelContent =
        label && label.length ? (
            <span className="cell-label">{label}</span>
        ) : null;

    return (
        <DaTableCellBase
            {...rest}
            isCheckbox={isCheckbox || (children && children.type === Checkbox)}
            hasLabel={label && label.length}
        >
            {rest.isLoading ? null : labelContent}

            {rest.isLoading || !label ? null : (
                <span className="cell-line"></span>
            )}

            <span className="cell-content">
                {React.Children.map(children, child => {
                    if (child && child.type === Checkbox) {
                        return React.cloneElement(child, {
                            fieldSize: buttonSizeOptions.sm,
                        });
                    }

                    return child;
                })}
            </span>
        </DaTableCellBase>
    );
};

DaTableCell.propTypes = {
    isLoading: PropTypes.bool,
    isCheckbox: PropTypes.bool,
    isMain: PropTypes.bool,
    isId: PropTypes.bool,
    label: PropTypes.string,
};

DaTableCell.defaultProps = {
    isLoading: false,
    isCheckbox: false,
    isMain: true,
    isId: false,
};

export default DaTableCell;
