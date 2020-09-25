import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { folder, rotateSizeOptions } from '../../shared/constants';
import labels from '../../shared/labels';
import { ArrowBottomIcon, ListIcon } from '../Icon/Icon';
import DaInput from '../DaInput/DaInput';
import DaTableHeadCell from './DaTableHeadCell';

storiesOf(folder.table + folder.sub.daTable + 'DaTableHeadCell', module)
    .addDecorator(withKnobs)
    .add('DaTableHeadCell', () => (
        <DaTableHeadCell
            sortIcon={
                boolean(labels.withSortIcon, false) ? (
                    <ArrowBottomIcon
                        isActive={boolean(labels.sortIconActive, false)}
                        rotateSize={
                            boolean(labels.ascSort, false) &&
                            boolean(labels.sortIconActive, false)
                                ? rotateSizeOptions.d180
                                : rotateSizeOptions.d0
                        }
                        title={
                            boolean(labels.ascSort, false) &&
                            boolean(labels.sortIconActive, false)
                                ? 'Cancel sort on Sample'
                                : 'Sort ' +
                                  (boolean(labels.sortIconActive, false)
                                      ? 'ASC'
                                      : 'DESC') +
                                  ' on Sample'
                        }
                    />
                ) : null
            }
            groupIcon={
                boolean(labels.withGroupIcon, false) ? (
                    <ListIcon
                        isActive={boolean(labels.groupIconActive, false)}
                        title={
                            boolean(labels.groupIconActive, false)
                                ? 'Cancel group on Sample'
                                : 'Group on Sample'
                        }
                    />
                ) : null
            }
            label="Cell for DaTableHead"
        ></DaTableHeadCell>
    ))
    .add('DaTableHeadCell with children', () => (
        <DaTableHeadCell
            sortIcon={
                boolean(labels.withSortIcon, false) ? <ArrowBottomIcon /> : null
            }
            groupIcon={
                boolean(labels.withGroupIcon, false) ? (
                    <ListIcon />
                ) : null
            }
            label="Cell for DaTableHead"
        >
            <DaInput placeholder="Search" fieldSize="sm" />
        </DaTableHeadCell>
    ));
