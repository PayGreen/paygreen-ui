import React from 'react';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import PaginationItem from './PaginationItem';

export default {
    title: folder.table + folder.sub.pagination + 'PaginationItem',
    argTypes: {
        isActive: {
            name: labels.isActive,
            control: 'boolean',
            defaultValue: false,
        },
        pageValue: {
            name: 'Page value',
            control: 'number',
            defaultValue: 2,
        },
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
            defaultValue: colorThemeDefault,
        },
    },
};

export const SimplePaginationItem = ({ ...args }) => {
    return <PaginationItem {...args} />;
};
