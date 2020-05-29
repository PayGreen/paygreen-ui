import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';
import {
    folder,
} from '../../shared/constants';
import DaTableCell from '../DaTableCell/DaTableCell';
import DaTableHead from './DaTableHead';

storiesOf(folder.tables + folder.sub.daTable + 'DaTableHead', module)
    .addDecorator(withKnobs)
    .add(
        'DaTableHead',
        () => (
            <DaTableHead
                
            >
                <DaTableCell>
                    Sample
                </DaTableCell>

                <DaTableCell>
                    Sample
                </DaTableCell>

                <DaTableCell>
                    Sample
                </DaTableCell>

                <DaTableCell>
                    Sample
                </DaTableCell>
            </DaTableHead>
        )
    );