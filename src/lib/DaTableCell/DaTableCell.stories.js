import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { folder } from '../../shared/constants';
import DaTableCell from './DaTableCell';

const isLoadingLabel = 'Is loading';

storiesOf(folder.table + folder.sub.daTable + 'DaTableCell', module)
    .addDecorator(withKnobs)
    .add('DaTableCell', () => (
        <DaTableCell
            isLoading={boolean(isLoadingLabel, false)}
            isMain={boolean('Is main', true)}
            isId={boolean('Is id', false)}
            label={text('Label', 'Label')}
        >
            {boolean(isLoadingLabel, false) ? null : 'Sample'}
        </DaTableCell>
    ));
