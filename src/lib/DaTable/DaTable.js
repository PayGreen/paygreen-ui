import React from 'react';
import PropTypes from 'prop-types';
import { spaceOptions, spaceDefault } from '../../shared/constants';
import Checkbox from '../Checkbox/Checkbox';
import DaTableHeadCell from '../DaTableHeadCell/DaTableHeadCell';
import DaTableHead from '../DaTableHead/DaTableHead';
import DaTableBody from '../DaTableBody/DaTableBody';
import DaTableRow from '../DaTableRow/DaTableRow';
import { DaTableBase } from './style';

const DaTable = ({
    children,
    isLoading,
    loadingRowNumber,
    loadingMainCellNumber,
    ...rest
}) => {
    let columnNumber = 0;
    const loadingCheckboxCellIndex = [];
    let noRowMessage = null;
    let hasRow = true;

    if (isLoading) {
        React.Children.map(children, child => {
            if (
                typeof child === 'object' &&
                (child.type === DaTableHead ||
                    child.props.className === 'DaTableHead')
            ) {
                columnNumber = child.props.children.length;

                React.Children.map(child.props.children, (headCell, index) => {
                    if (
                        typeof headCell === 'object' &&
                        (headCell.type === DaTableHeadCell ||
                            headCell.props.className === 'DaTableHeadCell') &&
                        (headCell.props.isCheckbox ||
                            (headCell.props.children &&
                                headCell.props.children.type === Checkbox))
                    ) {
                        loadingCheckboxCellIndex.push(index);
                    }
                });
            }
        });
    } else {
        React.Children.map(children, child => {
            if (
                typeof child === 'object' &&
                (child.type === DaTableBody ||
                    child.props.className === 'DaTableBody')
            ) {
                hasRow = false;

                React.Children.map(child.props.children, row => {
                    if (
                        typeof row === 'object' &&
                        (row.type === DaTableRow ||
                            row.props.className === 'DaTableRow')
                    ) {
                        hasRow = true;
                    }
                });

                if (!hasRow) {
                    noRowMessage = child.props.children;
                }
            }
        });
    }

    return (
        <DaTableBase {...rest}>
            <div className="table">
                {React.Children.map(children, child => {
                    if (!child) {
                        return null;
                    } else if (
                        child.type === DaTableBody ||
                        child.props.className === 'DaTableBody'
                    ) {
                        return React.cloneElement(child, {
                            hasRow: hasRow,
                            isLoading: isLoading,
                            loadingColumnNumber: columnNumber,
                            loadingRowNumber: loadingRowNumber,
                            loadingMainCellNumber: loadingMainCellNumber,
                            loadingCheckboxCellIndex: loadingCheckboxCellIndex,
                        });
                    } else {
                        return child;
                    }
                })}
            </div>

            {!hasRow ? (
                <div className="noRowMessage">
                    {noRowMessage ? noRowMessage : 'No data'}
                </div>
            ) : null}
        </DaTableBase>
    );
};

DaTable.propTypes = {
    isLoading: PropTypes.bool,
    loadingRowNumber: PropTypes.number,
    loadingMainCellNumber: PropTypes.number,
    blockWidth: PropTypes.oneOf(Object.values(spaceOptions)),
    marginLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

DaTable.defaultProps = {
    isLoading: false,
    loadingRowNumber: 10,
    loadingMainCellNumber: 4,
    blockWidth: spaceOptions.md,
    marginLateral: spaceDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
};

export default DaTable;
