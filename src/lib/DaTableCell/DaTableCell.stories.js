import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { folder } from '../../shared/constants';
import labels from '../../shared/labels';
import DaTableCell from './DaTableCell';

storiesOf(folder.table + folder.sub.daTable + 'DaTableCell', module)
    .addDecorator(withKnobs)
    .add('DaTableCell', () => (
        <DaTableCell
            isLoading={boolean(labels.isLoading, false)}
            isMain={boolean(labels.isMain, true)}
            isId={boolean(labels.isId, false)}
            label={text(labels.label, 'Label')}
        >
            {boolean(labels.isLoading, false) ? null : 'Sample'}
        </DaTableCell>
    ));
