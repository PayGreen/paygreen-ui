import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { folder } from '../../shared/constants';
import { ArrowBottomIcon, MenuIcon } from '../Icon/Icon';
import DaTableHeadCell from '../DaTableHeadCell/DaTableHeadCell';
import DaTableHead from './DaTableHead';

storiesOf(folder.tables + folder.sub.daTable + 'DaTableHead', module)
    .addDecorator(withKnobs)
    .add('DaTableHead', () => (
        <DaTableHead resultsLabel="45 results">
            <DaTableHeadCell isCheckbox={true}>
                Select/deselect all
                <input type="checkbox" style={{ display: 'block' }} />
            </DaTableHeadCell>

            <DaTableHeadCell
                sortIcon={<ArrowBottomIcon title="Sort DESC on Sample" />}
                groupIcon={<MenuIcon title="Group on Sample" />}
            >
                Last Name
            </DaTableHeadCell>

            <DaTableHeadCell>First name</DaTableHeadCell>

            <DaTableHeadCell
                sortIcon={
                    <ArrowBottomIcon
                        isActive={true}
                        title="Sort ASC on Sample"
                    />
                }
            >
                Amount
            </DaTableHeadCell>

            <DaTableHeadCell>Status</DaTableHeadCell>

            <DaTableHeadCell>Actions</DaTableHeadCell>
        </DaTableHead>
    ));
