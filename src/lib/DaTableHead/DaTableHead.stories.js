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
        <DaTableHead>
            <DaTableHeadCell isCheckbox={true}>
                <input type="checkbox" style={{ display: 'block' }} />
            </DaTableHeadCell>

            <DaTableHeadCell
                sortIcon={<ArrowBottomIcon title="Sort DESC on Sample" />}
                groupIcon={<MenuIcon title="Group on Sample" />}
            >
                Sample
            </DaTableHeadCell>

            <DaTableHeadCell>Sample</DaTableHeadCell>

            <DaTableHeadCell
                sortIcon={
                    <ArrowBottomIcon
                        isActive={true}
                        title="Sort ASC on Sample"
                    />
                }
            >
                Sample
            </DaTableHeadCell>

            <DaTableHeadCell>Sample</DaTableHeadCell>

            <DaTableHeadCell>Sample</DaTableHeadCell>
        </DaTableHead>
    ));
