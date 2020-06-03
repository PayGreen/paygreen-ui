import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';
import {
    folder,
} from '../../shared/constants';
import DaTableHeadCell from './DaTableHeadCell';

storiesOf(folder.tables + folder.sub.daTable + 'DaTableHeadCell', module)
    .addDecorator(withKnobs)
    .add(
        'DaTableHeadCell',
        () => (
            <DaTableHeadCell
                
            >
                {text('Content', 'Cell for DaTableHead')}
            </DaTableHeadCell>
        )
    );
