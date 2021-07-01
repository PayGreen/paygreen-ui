import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    radios,
    select,
    number,
    text,
} from '@storybook/addon-knobs';
import {
    folder,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    formStatusOptions,
    formStatusDefault,
    fontSizeOptions,
    fontSizeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import DataLegend from './DataLegend';

const { wab, ...barColorPalletOptions } = colorPalletOptions;

storiesOf(folder.graph + 'DataLegend', module)
    .addDecorator(withKnobs)
    .add('DataLegend', () => (
        <DataLegend
            textSize={select(labels.textSize, fontSizeOptions, fontSizeDefault)}
            value={number(labels.value, 25)}
            unit={text(labels.unity, '%')}
            colorPallet={radios(
                labels.colorPallet,
                barColorPalletOptions,
                colorPalletDefault,
            )}
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorStatus={select(
                labels.colorStatus,
                formStatusOptions,
                formStatusDefault,
            )}
        >
            du <strong>CO2 compensé</strong>
        </DataLegend>
    ));
