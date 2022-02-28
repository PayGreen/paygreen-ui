import React from 'react';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Pagination from './Pagination';

export default {
    title: folder.table + folder.sub.pagination + 'Pagination',
    argTypes: {
        pageCount: {
            name: 'Pages count',
            options: { min: 1, max: 20 },
            control: 'range',
            defaultValue: 15,
        },
        pageIndex: {
            name: 'Pages index',
            options: { min: 1, max: 19 },
            control: 'range',
            defaultValue: 9,
        },
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
            defaultValue: colorThemeDefault,
        },
    },
};

export const SimplePagination = ({ ...args }) => {
    return <Pagination {...args} gotoPage={() => {}} />;
};
