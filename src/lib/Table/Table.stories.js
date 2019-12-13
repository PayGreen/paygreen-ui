import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';
import {
    colorThemeOptions,
    colorThemeDefault
} from '../../shared/constants';
import Link from '../Link/Link';
import TableCell from '../TableCell/TableCell';
import TableRow from '../TableRow/TableRow';
import Table from './Table';

storiesOf('Table', module).addDecorator(withKnobs)
.add('Table', () => (
    <Table
        colorTheme={radios('Color', colorThemeOptions, colorThemeDefault)}
        largeFirstColumn={boolean('Large first column', true)}
        withBackground={boolean('With background', false)}
    >
        <TableRow
            isMain={true}
        >
            <TableCell>       
                Table name
            </TableCell>

            <TableCell>
                <span>
                    Column one
                </span>

                <i>Short description of this column (not <strong>too long</strong>).</i>
            </TableCell>

            <TableCell>
                <span>
                    Column two
                </span>

                <i>Another short description.</i>
            </TableCell>
        </TableRow>

        <TableRow>
            <TableCell>
                Row name
            </TableCell>

            <TableCell>
                11,90&nbsp;€
            </TableCell>

            <TableCell>
                9,90&nbsp;€<strong>*</strong>
            </TableCell>
        </TableRow>

        <TableRow
            colorTheme={colorThemeOptions.tertiary}
        >
            <TableCell>
                <span>Row name <i>(with some precisions)</i></span>
            </TableCell>

            <TableCell>
                <a href="#">
                    <Link colorTheme={colorThemeOptions.tertiary}>
                        Contact us
                    </Link>
                </a>
            </TableCell>

            <TableCell>
                9,90&nbsp;€<strong>*</strong>
            </TableCell>
        </TableRow>
    </Table>
));