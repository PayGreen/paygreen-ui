import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    boolean,
    radios,
    number,
    text,
    select,
} from '@storybook/addon-knobs';
import {
    folder,
    blockWidthOptions,
    blockWidthDefault,
    colorThemeOptions,
    colorThemeDefault,
    colorPalletOptions,
    colorPalletDefault,
    formStatusOptions,
    formStatusDefault,
    fontSizeOptions,
    fontSizeDefault,
    greyOptions,
} from '../../shared/constants';
import DataBar from './DataBar';

const defaultMaxValue = 100;
const defaultValue = 50;
const valueOptions = {
    range: true,
    max: 100,
};
const { wab, ...barColorPalletOptions } = colorPalletOptions;

storiesOf(folder.main + 'Databar', module)
    .addDecorator(withKnobs)
    .add('DataBar', () => (
        <DataBar
            unit={text('Unity', '%')}
            maxValue={number('Max value', defaultMaxValue)}
            data={[
                {
                    value: number('Value', defaultValue, valueOptions),
                    legend: ['compensé par ', <strong>vous</strong>],
                    colorTheme: select(
                        'Theme color',
                        colorThemeOptions,
                        colorThemeDefault,
                    ),
                    colorStatus: select(
                        'Status color',
                        formStatusOptions,
                        formStatusDefault,
                    ),
                },
            ]}
            colorPallet={radios(
                'Color pallet',
                barColorPalletOptions,
                colorPalletDefault,
            )}
            backgroundColor={select(
                'Background color',
                greyOptions,
                greyOptions.grey10,
            )}
            hasBackground={boolean('With background', true)}
            hasDataLegend={boolean('With legend', true)}
            textSize={select('Text Size', fontSizeOptions, fontSizeDefault)}
            blockWidth={radios(
                'Block width',
                blockWidthOptions,
                blockWidthDefault,
            )}
        />
    ))
    .add(
        'DataBar Multi',
        () => (
            <DataBar
                data={[
                    {
                        value: number('Value 1', defaultValue, valueOptions),
                        colorStatus: formStatusDefault,
                        colorTheme: colorThemeDefault,
                    },
                    {
                        value: number('Value 2', defaultValue, valueOptions),
                        colorTheme: colorThemeOptions.tertiary,
                        colorStatus: colorThemeDefault,
                    },
                    {
                        value: number('Value 3', defaultValue, valueOptions),
                        colorTheme: colorThemeOptions.quaternary,
                        colorStatus: colorThemeDefault,
                    },
                ]}
                hasDataLegend={boolean('With legend', true)}
                hasBackground={boolean('With background', true)}
            />
        ),
        {
            notes: 'For multi DataBar, legend will be displayed separately',
        },
    );
