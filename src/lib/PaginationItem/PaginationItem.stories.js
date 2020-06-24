import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import {
    folder,
} from '../../shared/constants';
import PaginationItem from './PaginationItem';

storiesOf(folder.tables + 'PaginationItem', module)
    .addDecorator(withKnobs)
    .add('PaginationItem', () => (
        <PaginationItem
            isActive={boolean('Is active', false)}
            pageIndex={number('PageIndex', 2)}
        />
    ));
