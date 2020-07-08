import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { folder } from '../../shared/constants';
import DaTableCell from '../DaTableCell/DaTableCell';
import DaTableRow from '../DaTableRow/DaTableRow';
import DaTableBody from './DaTableBody';

storiesOf(folder.tables + folder.sub.daTable + 'DaTableBody', module)
    .addDecorator(withKnobs)
    .add('DaTableBody', () => (
        <DaTableBody>
            <DaTableRow>
                <DaTableCell isId={true}>3456</DaTableCell>

                <DaTableCell isMain={false} label="Date">
                    27/05/2020
                </DaTableCell>

                <DaTableCell>Marie Perez</DaTableCell>

                <DaTableCell>34.56&nbsp;€</DaTableCell>

                <DaTableCell isMain={false} label="Type">
                    Cash
                </DaTableCell>
            </DaTableRow>

            <DaTableRow>
                <DaTableCell isId={true}>3457</DaTableCell>

                <DaTableCell isMain={false} label="Date">
                    29/05/2020
                </DaTableCell>

                <DaTableCell>Jean Bond</DaTableCell>

                <DaTableCell>15.07&nbsp;€</DaTableCell>

                <DaTableCell isMain={false} label="Type">
                    Recurring
                </DaTableCell>
            </DaTableRow>
        </DaTableBody>
    ));
