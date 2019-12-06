import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import {
    colorThemeOptions,
} from '../../shared/constants';
import TableCell from '../TableCell/TableCell';
import TableRow from './TableRow';

storiesOf('TableRow', module).addDecorator(withKnobs)
.add('Simple row', () => (
    <TableRow
        colorTheme={select('Color theme', {...{none: 'none'}, ...colorThemeOptions }, 'none')}
        isMain={false}
    >
        <TableCell>
            <span>Sample text <i>(with more text)</i></span>
        </TableCell>

        <TableCell>
            11,90&nbsp;€<b>*</b>
        </TableCell>

        <TableCell>
            9,90&nbsp;€<b>*</b>
        </TableCell>
    </TableRow>
))
.add('Main row', () => (
    <TableRow
        isMain={true}
    >
        <TableCell>       
            Table name
        </TableCell>

        <TableCell>
            <span>
                Price one
            </span>

            <i>Short description of this column (not <strong>too long</strong>).</i>
        </TableCell>

        <TableCell>
            <span>
                Price two
            </span>

            <i>Another short description.</i>
        </TableCell>
    </TableRow>
));