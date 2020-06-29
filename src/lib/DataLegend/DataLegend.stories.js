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
import DataLegend from './DataLegend';

const { wab, ...barColorPalletOptions } = colorPalletOptions;

storiesOf(folder.main + 'DataLegend', module)
    .addDecorator(withKnobs)
    .add(
        'Data Legend',
        () => (
            <DataLegend
                textSize={select('Text Size', fontSizeOptions, fontSizeDefault)}
                value={number('Legend value', 25)}
                unit={text('Legend unit', '%')}
                colorPallet={radios(
                    'Color pallet value',
                    barColorPalletOptions,
                    colorPalletDefault,
                )}
                colorTheme={select(
                    'Color theme value',
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                colorStatus={select(
                    'Color status value',
                    formStatusOptions,
                    formStatusDefault,
                )}
            >
                du <strong>CO2 compensé</strong>
            </DataLegend>
        ),
        {
            notes:
                'DataLegend component must be used to adding any text without specific component, or inside components like Card.',
        },
    );
