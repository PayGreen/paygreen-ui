import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';
import {
    folder,
} from '../../shared/constants';
import DaTable from './DaTable';

storiesOf(folder.tables + folder.sub.daTable + 'DaTable', module)
    .addDecorator(withKnobs)
    .add(
        'DaTable',
        () => (
            <DaTable
                
            >
                Sample
            </DaTable>
        )
    );