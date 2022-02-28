import React from 'react';
import { folder } from '../../shared/constants';
import labels from '../../shared/labels';
import DaTableCell from './DaTableCell';

export default {
    title: folder.table + folder.sub.daTable + 'DaTableCell',
    argTypes: {
        isMain: {
            name: 'Is main',
            control: 'boolean',
        },
        isId: {
            name: 'Is id',
            control: 'boolean',
        },
        isLoading: {
            name: labels.isLoading,
            control: 'boolean',
        },
        label: {
            name: labels.label,
            control: 'text',
        },
    },
};

export const TableCell = ({ text, ...args }) => (
    <DaTableCell {...args}>{args?.isLoading ? null : 'Sample'}</DaTableCell>
);

TableCell.args = {
    isMain: true,
    isId: false,
    isLoading: false,
    Label: 'Label',
};
