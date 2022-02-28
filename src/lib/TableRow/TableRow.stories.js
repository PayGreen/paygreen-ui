import React from 'react';
import {
    folder,
    colorThemeAllOptions,
    colorThemeAllDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import TableCell from '../TableCell/TableCell';
import TableRow from './TableRow';

export default {
    title: folder.table + folder.sub.table + 'TableRow',
    argTypes: {
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeAllOptions),
            control: 'select',
            defaultValue: colorThemeAllDefault,
        },
    },
};

export const SimpleRow = args => {
    return (
        <TableRow {...args}>
            <TableCell>
                <span>
                    Sample text <i>(with more text)</i>
                </span>
            </TableCell>

            <TableCell>
                11,90&nbsp;€<strong>*</strong>
            </TableCell>

            <TableCell>
                9,90&nbsp;€<strong>*</strong>
            </TableCell>
        </TableRow>
    );
};
export const MainRow = args => {
    return (
        <TableRow isMain={true}>
            <TableCell>Table name</TableCell>

            <TableCell>
                <span>Price one</span>

                <i>
                    Short description of this column (not{' '}
                    <strong>too long</strong>).
                </i>
            </TableCell>

            <TableCell>
                <span>Price two</span>

                <i>Another short description.</i>
            </TableCell>
        </TableRow>
    );
};
