import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox/Checkbox';
import DaTableRow from '../DaTableRow/DaTableRow';
import DaTableCell from '../DaTableCell/DaTableCell';
import { DaTableBodyBase } from './style';

const DaTableBody = ({
    children,
    hasRow,
    loadingColumnNumber,
    loadingRowNumber,
    mainCellNumber,
    checkboxCellIndex,
    ...rest
}) => {
    const loadingRows = [];

    if (rest.isLoading) {
        for (let i = 0; i < loadingRowNumber; i++) {
            const row = [];

            for (let j = 0; j < loadingColumnNumber; j++) {
                row.push(
                    <DaTableCell key={j} isMain={j < mainCellNumber}>
                        {checkboxCellIndex.includes(j) ? (
                            <Checkbox
                                id={'loading-table-checkbox-' + i + '-' + j}
                                disabled
                            />
                        ) : null}
                    </DaTableCell>,
                );
            }

            loadingRows.push(
                <DaTableRow key={i} isLoading={true}>
                    {row}
                </DaTableRow>,
            );
        }
    }

    return (
        <DaTableBodyBase {...rest}>
            {loadingRows.length > 0 ? loadingRows : hasRow ? children : null}
        </DaTableBodyBase>
    );
};

DaTableBody.propTypes = {
    hasRow: PropTypes.bool,
    isLoading: PropTypes.bool,
    loadingColumnNumber: PropTypes.number,
    loadingRowNumber: PropTypes.number,
    mainCellNumber: PropTypes.number,
    checkboxCellIndex: PropTypes.array,
};

DaTableBody.defaultProps = {
    hasRow: true,
    isLoading: false,
    loadingColumnNumber: 0,
    loadingRowNumber: 10,
    mainCellNumber: 4,
    checkboxCellIndex: [],
};

export default DaTableBody;
