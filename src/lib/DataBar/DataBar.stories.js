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
const maxValueOptions = {
    range: true,
    min: 100,
    max: 300,
    step: 1,
};

const defaultValue = 50;
const valueOptions = {
    range: true,
    min: 0,
    max: 100,
    step: 1,
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
            maxValue={number('Max value', defaultMaxValue, maxValueOptions)}
            data={[
                {
                    value: number('Value', defaultValue, valueOptions),
                    legend: ['compensé par', <strong> vous</strong>],
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
                    {
                        value: number('Value 2', defaultValue, valueOptions),
                        colorTheme: select(
                            'Theme color 2',
                            colorThemeOptions,
                            colorThemeOptions.tertiary,
                        ),
                        colorStatus: select(
                            'Status color 2',
                            formStatusOptions,
                            formStatusOptions.warning,
                        ),
                    },
                    {
                        value: number('Value 3', defaultValue, valueOptions),
                        colorTheme: select(
                            'Theme color 3',
                            colorThemeOptions,
                            colorThemeOptions.quaternary,
                        ),
                        colorStatus: select(
                            'Status color 3',
                            formStatusOptions,
                            formStatusOptions.danger,
                        ),
                    },
                ]}
            />
        ),
        {
            notes: 'For multi DataBar, legend will be displayed separately',
        },
    );
