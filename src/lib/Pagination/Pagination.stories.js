import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, select } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import Pagination from './Pagination';

const defaultPageCount = 15;
const maxPageCount = {
    range: true,
    min: 0,
    max: 20,
    step: 1,
};
const defaultPageIndex = 9;
const maxPageIndex = {
    range: true,
    min: 0,
    max: 20,
    step: 1,
};

storiesOf(folder.tables + folder.sub.pagination + 'Pagination', module)
    .addDecorator(withKnobs)
    .add('Pagination with customizable page Index', () => (
        <Pagination
            pageIndex={number('Page index', defaultPageIndex, maxPageIndex)}
            pageCount={21}
            colorTheme={select(
                'Color theme',
                colorThemeOptions,
                colorThemeDefault,
            )}
        />
    ))
    .add(
        'Pagination with customizable page Count',
        () => (
            <Pagination
                pageIndex={0}
                pageCount={number('Page count', defaultPageCount, maxPageCount)}
                colorTheme={select(
                    'Color theme',
                    colorThemeOptions,
                    colorThemeDefault,
                )}
            />
        ),
        {
            notes:
                'Page Index is the index position shared by react-table (starting at 0) for pagination, Page Value is the number displayed in each pagination item (starting at 1) for user',
        },
    );
