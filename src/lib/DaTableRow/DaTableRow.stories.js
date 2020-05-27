import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';
import {
    folder,
} from '../../shared/constants';
import DaTableRow from './DaTableRow';

storiesOf(folder.tables + folder.sub.daTable + 'DaTableRow', module)
    .addDecorator(withKnobs)
    .add(
        'DaTableRow',
        () => (
            <DaTableRow
                
            >
                Sample
            </DaTableRow>
        )
    );