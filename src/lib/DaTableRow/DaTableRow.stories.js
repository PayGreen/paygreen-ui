import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { folder } from '../../shared/constants';
import labels from '../../shared/labels';
import DaTableCell from '../DaTableCell/DaTableCell';
import Checkbox from '../Checkbox/Checkbox';
import DaTableRow from './DaTableRow';

storiesOf(folder.table + folder.sub.daTable + 'DaTableRow', module)
    .addDecorator(withKnobs)
    .add('DaTableRow', () => (
        <DaTableRow isActive={boolean(labels.isActive, false)}>
            <DaTableCell>
                <Checkbox
                    id="select"
                    checked={boolean(labels.isActive, false)}
                    readOnly={true}
                />
            </DaTableCell>

            <DaTableCell isId={true}>3456</DaTableCell>

            <DaTableCell isMain={false} label="Date">
                27/05/2020
            </DaTableCell>

            <DaTableCell>Marie Perez</DaTableCell>

            <DaTableCell>34.56&nbsp;€</DaTableCell>

            <DaTableCell isMain={false} label="Type">
                Cash
            </DaTableCell>

            <DaTableCell isMain={false} label="A very long label">
                A very long content to display
            </DaTableCell>
        </DaTableRow>
    ));
