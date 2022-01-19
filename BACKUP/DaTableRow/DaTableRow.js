import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useOutsideAlerter } from '../../shared/hook';
import Checkbox from '../Checkbox/Checkbox';
import { DaTableRowBase } from './style';

const DaTableRow = props => {
    const [isOpen, setOpen] = useState(false);

    let hasId = false;
    let hasCheckbox = false;
    let mainCellCount = 0;
    let notMainCellCount = 0;

    React.Children.map(props.children, child => {
        if (
            typeof child === 'object' ||
            child.props.className === 'DaTableCell'
        ) {
            if (child.props.isMain) {
                mainCellCount++;

                if (child.props.isId) {
                    hasId = true;
                }

                if (
                    child.props.isCheckbox ||
                    (child.props.children &&
                        child.props.children.type === Checkbox)
                ) {
                    hasCheckbox = true;
                }
            } else {
                notMainCellCount++;
            }
        }
    });

    let mainIndex = 0;
    let basicIndex = 0;
    let className = '';

    // We create the reference linked to DaTableRow component and pass it to the hook
    const daTableRowRef = useRef(null);
    useOutsideAlerter(daTableRowRef, isOpen, () => setOpen(false));

    return (
        <DaTableRowBase
            {...props}
            ref={daTableRowRef}
            hasId={hasId}
            hasCheckbox={hasCheckbox}
            mainCellCount={mainCellCount}
            notMainCellCount={notMainCellCount}
            isOpen={isOpen}
        >
            {React.Children.map(props.children, child => {
                let isCheckbox = false;

                if (typeof child === 'object') {
                    if (child.props.isMain) {
                        isCheckbox =
                            child.props.isCheckbox ||
                            (child.props.children &&
                                child.props.children.type === Checkbox);

                        if (isCheckbox) {
                            className = 'cell-checkbox';
                        } else if (child.props.isId) {
                            className = 'cell-id';
                        } else {
                            mainIndex++;
                            className = 'cell-main cell-main-' + mainIndex;
                        }
                    } else {
                        basicIndex++;
                        className = 'cell-basic cell-basic-' + basicIndex;
                    }

                    return React.cloneElement(child, {
                        className: className,
                        isLoading: props.isLoading,
                        onMouseDown:
                            !isCheckbox && !isOpen ? () => setOpen(true) : null, // we need to detect mousedown event to open since closing is based on mousedown with useOutsideAlerter
                    });
                }
            })}
        </DaTableRowBase>
    );
};

DaTableRow.propTypes = {
    isLoading: PropTypes.bool,
    isActive: PropTypes.bool,
};

DaTableRow.defaultProps = {
    isLoading: false,
    isActive: false,
};

export default DaTableRow;
