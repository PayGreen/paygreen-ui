import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, radios, select } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    colorPalletOptions,
    colorPalletDefault,
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import Pagination from './Pagination';

const { wab, ...buttonColorPalletOptions } = colorPalletOptions;

const defaultPageIndex = 15;
const maxPageIndex = {
    range: true,
    min: 0,
    max: 35,
    step: 1,
};

storiesOf(folder.tables + 'Pagination', module)
    .addDecorator(withKnobs)
    .add('Pagination', () => (
        <Pagination
            pageIndex={number('Page index', defaultPageIndex, maxPageIndex)}
            pageCount={1}
            colorTheme={select(
                'Color theme',
                colorThemeOptions,
                colorThemeDefault,
            )}
        />
    ));
