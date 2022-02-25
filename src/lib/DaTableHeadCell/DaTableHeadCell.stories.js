import React from 'react';
import { folder, rotateSizeOptions } from '../../shared/constants';
import labels from '../../shared/labels';
import { ArrowBottomIcon, ListIcon } from '../Icon/Icon';
import DaInput from '../DaInput/DaInput';
import DaTableHeadCell from './DaTableHeadCell';

export default {
    title: folder.table + folder.sub.daTable + 'DaTableHeadCell',
    argTypes: {
        isSortIconActive: {
            name: 'Is sort icon active',
            control: 'boolean',
        },
        isGroupIconActive: {
            name: 'Is group icon active (only on big screen)',
            control: 'boolean',
        },
        isAscSort: {
            name: 'Is ASC sort (need "Is sort icon active" checked)',
            control: 'boolean',
        },
        widthDaInput: {
            name: 'With DaInput',
            control: 'boolean',
        },
        label: {
            name: labels.label,
            control: 'text',
        },
    },
};

export const TableHeadCell = ({
    isSortIconActive,
    isGroupIconActive,
    isAscSort,
    label,
    widthDaInput,
}) => {
    const sortIcon = (
        <ArrowBottomIcon
            isActive={isSortIconActive}
            rotateSize={
                isAscSort && isSortIconActive
                    ? rotateSizeOptions.d180
                    : rotateSizeOptions.d0
            }
            title={
                isAscSort && isSortIconActive
                    ? 'Cancel sort on Sample'
                    : 'Sort ' +
                      (isSortIconActive ? 'ASC' : 'DESC') +
                      ' on Sample'
            }
        />
    );

    const groupIcon = (
        <ListIcon
            isActive={isGroupIconActive}
            title={
                isGroupIconActive ? 'Cancel group on Sample' : 'Group on Sample'
            }
        />
    );

    return (
        <DaTableHeadCell
            label={label}
            sortIcon={sortIcon}
            groupIcon={groupIcon}
        >
            {widthDaInput ? (
                <DaInput placeholder="Search..." fieldSize="sm" />
            ) : (
                <></>
            )}
        </DaTableHeadCell>
    );
};

TableHeadCell.args = {
    isSortIconActive: false,
    isGroupIconActive: false,
    isAscSort: false,
    widthDaInput: true,
    label: 'Cell for DaTableHead',
};
