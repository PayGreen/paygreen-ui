import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, radios, select } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    colorPalletOptions,
    colorPalletDefault,
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import PaginationItem from './PaginationItem';

const { wab, ...buttonColorPalletOptions } = colorPalletOptions;

storiesOf(folder.tables + 'PaginationItem', module)
    .addDecorator(withKnobs)
    .add('PaginationItem', () => (
        <PaginationItem
            isActive={boolean('Is active', false)}
            pageIndex={number('PageIndex', 2)}
            colorTheme={select(
                'Color theme',
                colorThemeOptions,
                colorThemeDefault,
            )}
        />
    ));
