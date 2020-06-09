import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { folder } from '../../shared/constants';
import DaTableCell from './DaTableCell';

storiesOf(folder.tables + folder.sub.daTable + 'DaTableCell', module)
    .addDecorator(withKnobs)
    .add('DaTableCell', () => (
        <DaTableCell
            label={text('Label', 'Label')}
            isMain={boolean('Is main', true)}
            isId={boolean('Is id', false)}
        >
            Sample
        </DaTableCell>
    ));
