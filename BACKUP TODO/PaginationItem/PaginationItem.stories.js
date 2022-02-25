import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import PaginationItem from './PaginationItem';

storiesOf(folder.table + folder.sub.pagination + 'PaginationItem', module)
    .addDecorator(withKnobs)
    .add('PaginationItem', () => (
        <PaginationItem
            isActive={boolean(labels.isActive, false)}
            pageValue={number('Page value', 2)}
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
        />
    ));
