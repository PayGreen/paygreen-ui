import React from 'react';
import PropTypes from 'prop-types';
import { DaTableRowBase } from './style';

const DaTableRow = props => {
    let hasCheckbox = false;
    let mainCellCount = 0;
    let notMainCellCount = 0;

    React.Children.map(props.children, child => {
        if (child.props.isMain) {
            mainCellCount++;

            if (child.props.isCheckbox) {
                hasCheckbox = true;
            }
        } else {
            notMainCellCount++;
        }
    });

    let mainIndex = 0;
    let basicIndex = 0;
    let className = '';

    return (
        <DaTableRowBase
            {...props}
            hasCheckbox={hasCheckbox}
            mainCellCount={mainCellCount}
            notMainCellCount={notMainCellCount}
        >
            {React.Children.map(props.children, child => {
                if (typeof child == 'object') {
                    if (child.props.isCheckbox) {
                        className = 'cell-checkbox';
                    } else if (child.props.isMain) {
                        mainIndex++;
                        className = 'cell-main cell-main-' + mainIndex;
                    } else {
                        basicIndex++;
                        className = 'cell-basic cell-basic-' + basicIndex;
                    }

                    return React.cloneElement(child, {
                        className: className,
                    });
                }
            })}
        </DaTableRowBase>
    );
};

DaTableRow.propTypes = {
    isActive: PropTypes.bool,
};

DaTableRow.defaultProps = {
    isActive: false,
};

export default DaTableRow;
