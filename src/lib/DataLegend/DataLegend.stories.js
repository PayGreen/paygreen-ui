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
    flexDirectionOptions,
    flexDirectionDefault,
    formStatusOptions,
    formStatusDefault,
    fontSizeOptions,
    fontSizeDefault,
    textHtmlTagOptions,
} from '../../shared/constants';
import DataLegend from './DataLegend';
import Text from '../Text/Text';

const { wab, ...barColorPalletOptions } = colorPalletOptions;

storiesOf(folder.main + 'DataLegend', module)
    .addDecorator(withKnobs)
    .add(
        'Data Legend',
        () => (
            <DataLegend
                textSize={select('Text Size', fontSizeOptions, fontSizeDefault)}
                currentValue={number('Legend value', 25)}
                unit={text('Legend unit', '%')}
                colorPallet={radios(
                    'Color pallet value',
                    barColorPalletOptions,
                    colorPalletDefault,
                )}
                dataColor={
                    radios(
                        'Color pallet value',
                        barColorPalletOptions,
                        colorPalletDefault,
                    ) === 'status'
                        ? select(
                              'Color status value',
                              formStatusOptions,
                              formStatusDefault,
                          )
                        : select(
                              'Color theme value',
                              colorThemeOptions,
                              colorThemeDefault,
                          )
                }
            >
                du <strong>CO2 compensé</strong>
            </DataLegend>
        ),
        {
            notes:
                'DataLegend component must be used to adding any text without specific component, or inside components like Card.',
        },
    );
