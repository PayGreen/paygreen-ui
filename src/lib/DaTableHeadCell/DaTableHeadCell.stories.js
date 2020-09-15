import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { folder, rotateSizeOptions } from '../../shared/constants';
import { ArrowBottomIcon, MenuIcon } from '../Icon/Icon';
import DaInput from '../DaInput/DaInput';
import DaTableHeadCell from './DaTableHeadCell';

const sortIconActiveLabel = 'Sort icon active';
const ascSortLabel = 'ASC sort (need ' + sortIconActiveLabel + ')';
const groupIconActiveLabel = 'Group icon active (only on Desktop)';

storiesOf(folder.tables + folder.sub.daTable + 'DaTableHeadCell', module)
    .addDecorator(withKnobs)
    .add('DaTableHeadCell', () => (
        <DaTableHeadCell
            sortIcon={
                boolean('With sort icon', false) ? (
                    <ArrowBottomIcon
                        isActive={boolean(sortIconActiveLabel, false)}
                        rotateSize={
                            boolean(ascSortLabel, false) &&
                            boolean(sortIconActiveLabel, false)
                                ? rotateSizeOptions.d180
                                : rotateSizeOptions.d0
                        }
                        title={
                            boolean(ascSortLabel, false) &&
                            boolean(sortIconActiveLabel, false)
                                ? 'Cancel sort on Sample'
                                : 'Sort ' +
                                  (boolean(sortIconActiveLabel, false)
                                      ? 'ASC'
                                      : 'DESC') +
                                  ' on Sample'
                        }
                    />
                ) : null
            }
            groupIcon={
                boolean('With group icon (only on Desktop)', false) ? (
                    <MenuIcon
                        isActive={boolean(groupIconActiveLabel, false)}
                        title={
                            boolean(groupIconActiveLabel, false)
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
                boolean('With sort icon', false) ? <ArrowBottomIcon /> : null
            }
            groupIcon={
                boolean('With group icon (only on Desktop)', false) ? (
                    <MenuIcon />
                ) : null
            }
            label="Cell for DaTableHead"
        >
            <DaInput placeholder="Search" fieldSize="sm" />
        </DaTableHeadCell>
    ));
