import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import PaginationItem from './PaginationItem';

storiesOf(folder.tables + folder.sub.pagination + 'PaginationItem', module)
    .addDecorator(withKnobs)
    .add(
        'PaginationItem',
        () => (
            <PaginationItem
                isActive={boolean('Is active', false)}
                pageValue={number('Page value', 2)}
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
