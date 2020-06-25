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

storiesOf(folder.tables + 'Pagination', module)
    .addDecorator(withKnobs)
    .add('Pagination', () => (
        <Pagination
            pageIndex={number('Page index', 2)}
            pageCount={number('Page count', 30)}
            colorPallet={radios(
                'Color pallet',
                buttonColorPalletOptions,
                colorPalletDefault,
            )}
            colorTheme={select(
                'Color theme',
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorStatus={select(
                'Status color',
                formStatusOptions,
                formStatusDefault,
            )}
        />
    ));
