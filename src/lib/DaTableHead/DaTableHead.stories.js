import React from 'react';
import { folder } from '../../shared/constants';
import { ArrowBottomIcon, ListIcon } from '../Icon/Icon';
import Checkbox from '../Checkbox/Checkbox';
import DaTableHeadCell from '../DaTableHeadCell/DaTableHeadCell';
import DaTableHead from './DaTableHead';

export default {
    title: folder.table + folder.sub.daTable + 'DaTableHead',
};

export const TableHead = () => (
    <DaTableHead>
        <DaTableHeadCell label="Select/deselect all">
            <Checkbox id="select" />
        </DaTableHeadCell>

        <DaTableHeadCell
            sortIcon={<ArrowBottomIcon title="Sort DESC on Sample" />}
            groupIcon={<ListIcon title="Group on Sample" />}
            label="Last Name"
        />

        <DaTableHeadCell label="First name" />

        <DaTableHeadCell
            sortIcon={
                <ArrowBottomIcon isActive={true} title="Sort ASC on Sample" />
            }
            label="Amount"
        />

        <DaTableHeadCell label="Status" />

        <DaTableHeadCell label="Actions" />
    </DaTableHead>
);
