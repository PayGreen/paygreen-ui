import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';
import {
    folder,
} from '../../shared/constants';
import DaTableCell from './DaTableCell';

storiesOf(folder.tables + folder.sub.daTable + 'DaTableCell', module)
    .addDecorator(withKnobs)
    .add(
        'DaTableCell',
        () => (
            <DaTableCell
                
            >
                Sample
            </DaTableCell>
        )
    );