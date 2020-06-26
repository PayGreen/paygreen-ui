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

storiesOf(folder.tables + 'Pagination', module)
    .addDecorator(withKnobs).add('Pagination with custom pageIndex', () => (
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
    .add('Pagination with custom pageValue', () => (
        <Pagination
            pageIndex={0}
            pageCount={number('Page count', defaultPageCount, maxPageCount)}
            colorTheme={select(
                'Color theme',
                colorThemeOptions,
                colorThemeDefault,
            )}
        />
    ));
