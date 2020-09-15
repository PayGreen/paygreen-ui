import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { folder } from '../../shared/constants';
import { ArrowBottomIcon, MenuIcon } from '../Icon/Icon';
import DaTableHeadCell from '../DaTableHeadCell/DaTableHeadCell';
import Checkbox from '../Checkbox/Checkbox';
import DaTableHead from './DaTableHead';

storiesOf(folder.tables + folder.sub.daTable + 'DaTableHead', module)
    .addDecorator(withKnobs)
    .add('DaTableHead', () => (
        <DaTableHead resultsLabel="45 results">
            <DaTableHeadCell isCheckbox={true} label="Select/deselect all">
                <Checkbox id="select"/>
            </DaTableHeadCell>

            <DaTableHeadCell
                sortIcon={<ArrowBottomIcon title="Sort DESC on Sample" />}
                groupIcon={<MenuIcon title="Group on Sample" />}
                label="Last Name"
            />

            <DaTableHeadCell label="First name" />

            <DaTableHeadCell
                sortIcon={
                    <ArrowBottomIcon
                        isActive={true}
                        title="Sort ASC on Sample"
                    />
                }
                label="Amount"
            />

            <DaTableHeadCell label="Status" />

            <DaTableHeadCell label="Actions" />
        </DaTableHead>
    ));
