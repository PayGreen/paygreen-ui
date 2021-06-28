import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { folder, rotateSizeOptions } from '../../shared/constants';
import labels from '../../shared/labels';
import { ArrowBottomIcon, ListIcon } from '../Icon/Icon';
import DaInput from '../DaInput/DaInput';
import DaTableHeadCell from './DaTableHeadCell';

storiesOf(folder.table + folder.sub.daTable + 'DaTableHeadCell', module)
    .addDecorator(withKnobs)
    .add('DaTableHeadCell', () => {
        const isSortIconActive = boolean('Is sort icon active', false);
        const isGroupIconActive = boolean(
            'Is group icon active (only on big screen)',
            false,
        );
        const isAscSort = boolean(
            'Is ASC sort (need "Is sort icon active" checked)',
            false,
        );

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
                    isGroupIconActive
                        ? 'Cancel group on Sample'
                        : 'Group on Sample'
                }
            />
        );

        return (
            <DaTableHeadCell
                label={text(labels.label, 'Cell for DaTableHead')}
                sortIcon={sortIcon}
                groupIcon={groupIcon}
            >
                {boolean('With DaInput', true) ? (
                    <DaInput placeholder="Search..." fieldSize="sm" />
                ) : (
                    <></>
                )}
            </DaTableHeadCell>
        );
    });
