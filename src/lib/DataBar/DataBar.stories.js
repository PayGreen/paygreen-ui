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

const defaultValue = 25;
const valueOptions = {
    range: true,
    max: 100,
};

const { wab, ...barColorPalletOptions } = colorPalletOptions;
const colorPalletLabel = 'Color pallet';
const colorStatusLabel = 'Status color';
const colorThemeLabel = 'Theme color';

storiesOf(folder.main + 'Databar', module)
    .addDecorator(withKnobs)
    .add('DataBar', () => (
        <DataBar
            blockWidth={radios(
                'Block width',
                blockWidthOptions,
                blockWidthDefault,
            )}
            hasBackground={boolean('With background', true)}
            backgroundColor={select(
                'Background color',
                greyOptions,
                greyOptions.grey10,
            )}
            textSize={select('Text Size', fontSizeOptions, fontSizeDefault)}
            unit={text('Unity', '%')}
            colorPallet={radios(
                colorPalletLabel,
                barColorPalletOptions,
                colorPalletDefault,
            )}
            maxValue={number('Max value', 100)}
            data={[
                {
                    value: number('Value', defaultValue, valueOptions),
                    legend: ['compensé par ', <strong>vous</strong>],
                    colorTheme: select(
                        colorThemeLabel,
                        colorThemeOptions,
                        colorThemeDefault,
                    ),
                    colorStatus: select(
                        colorStatusLabel,
                        formStatusOptions,
                        formStatusDefault,
                    ),
                },
            ]}
        />
    ))
    .add(
        'DataBar Multi',
        () => (
            <DataBar
                blockWidth={radios(
                    'Block width',
                    blockWidthOptions,
                    blockWidthDefault,
                )}
                hasBackground={boolean('With background', true)}
                colorPallet={radios(
                    colorPalletLabel,
                    barColorPalletOptions,
                    colorPalletDefault,
                )}
                data={[
                    {
                        value: number('Value 1', defaultValue, valueOptions),
                        colorTheme: colorThemeDefault,
                        colorStatus: formStatusDefault,
                    },
                    {
                        value: number('Value 2', defaultValue, valueOptions),
                        colorTheme: colorThemeOptions.tertiary,
                        colorStatus: formStatusOptions.warning,
                    },
                    {
                        value: number('Value 3', defaultValue, valueOptions),
                        colorTheme: colorThemeOptions.quaternary,
                        colorStatus: formStatusOptions.danger,
                    },
                ]}
            />
        ),
        {
            notes: 'For multi DataBar, legend will be displayed separately',
        },
    );
