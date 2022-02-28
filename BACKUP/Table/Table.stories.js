import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
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

storiesOf(folder.table + folder.sub.table + 'Table', module)
    .addDecorator(withKnobs)
    .add('Table', () => (
        <Grid childrenFlex={1}>
            <Table
                colorTheme={select(
                    labels.colorTheme,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                hasLargeFirstColumn={boolean('Large first column', true)}
                hasOverflowEmphasis={boolean('Has overflow emphasis', false)}
                hasBackground={boolean(labels.hasBackground, false)}
            >
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
    ));
