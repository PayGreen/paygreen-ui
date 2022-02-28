import React from 'react';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Link from '../Link/Link';
import Grid from '../Grid/Grid';
import TableCell from '../TableCell/TableCell';
import TableRow from '../TableRow/TableRow';
import Table from './Table';

export default {
    title: folder.table + folder.sub.table + 'Table',
    argTypes: {
        hasLargeFirstColumn: {
            name: 'Large first column',
            control: 'boolean',
            defaultValue: true,
        },
        hasOverflowEmphasis: {
            name: 'Has overflow emphasis',
            control: 'boolean',
            defaultValue: false,
        },
        hasBackground: {
            name: labels.hasBackground,
            control: 'boolean',
            defaultValue: false,
        },
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
            defaultValue: colorThemeDefault,
        },
    },
};

export const SimpleTable = args => {
    return (
        <Grid childrenFlex={1}>
            <Table {...args}>
                <TableRow isMain={true}>
                    <TableCell>Table name</TableCell>

                    <TableCell>
                        <span>Column one</span>

                        <i>
                            Short description of this column (not{' '}
                            <strong>too long</strong>).
                        </i>
                    </TableCell>

                    <TableCell>
                        <span>Column two</span>

                        <i>Another short description.</i>
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell>Row name</TableCell>

                    <TableCell>11,90&nbsp;€</TableCell>

                    <TableCell>
                        9,90&nbsp;€<strong>*</strong>
                    </TableCell>
                </TableRow>

                <TableRow colorTheme={colorThemeOptions.tertiary}>
                    <TableCell>
                        <span>
                            Row name <i>(with some precisions)</i>
                        </span>
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
        </Grid>
    );
};
