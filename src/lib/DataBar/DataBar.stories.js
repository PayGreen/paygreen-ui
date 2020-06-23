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

const defaultCurrentValue = 50;
const currentValueOptions = {
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
            hasDataLegend={boolean('With legend', true)}
            textSize={select('Text Size', fontSizeOptions, fontSizeDefault)}
            maxValue={number('Max value', defaultMaxValue, maxValueOptions)}
            unit={text('Unity', '%')}
            data={[
                {
                    currentValue: number(
                        'Current value',
                        defaultCurrentValue,
                        currentValueOptions,
                    ),
                    legend: [
                        text('Legend text', ' compensé par'),
                        <strong>{text('Legend text bold', ' vous')}</strong>,
                    ],
                    color:
                        radios(
                            colorPalletLabel,
                            barColorPalletOptions,
                            colorPalletDefault,
                        ) === 'status'
                            ? select(
                                  colorStatusLabel,
                                  formStatusOptions,
                                  formStatusDefault,
                              )
                            : select(
                                  colorThemeLabel,
                                  colorThemeOptions,
                                  colorThemeDefault,
                              ),
                },
            ]}
            colorPallet={radios(
                colorPalletLabel,
                barColorPalletOptions,
                colorPalletDefault,
            )}
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
                        currentValue: number(
                            'Current value',
                            defaultCurrentValue,
                            currentValueOptions,
                        ),
                        color:
                            radios(
                                colorPalletLabel,
                                barColorPalletOptions,
                                colorPalletDefault,
                            ) === 'status'
                                ? select(
                                      colorStatusLabel,
                                      formStatusOptions,
                                      formStatusDefault,
                                  )
                                : select(
                                      colorThemeLabel,
                                      colorThemeOptions,
                                      colorThemeDefault,
                                  ),
                    },
                    {
                        currentValue: number(
                            'Current value 2',
                            defaultCurrentValue,
                            currentValueOptions,
                        ),
                        color:
                            radios(
                                colorPalletLabel,
                                barColorPalletOptions,
                                colorPalletDefault,
                            ) === 'status'
                                ? select(
                                      'Status color 2',
                                      formStatusOptions,
                                      formStatusOptions.danger,
                                  )
                                : select(
                                      'Theme color 2',
                                      colorThemeOptions,
                                      colorThemeOptions.quaternary,
                                  ),
                    },
                    {
                        currentValue: number(
                            'Current value 3',
                            defaultCurrentValue,
                            currentValueOptions,
                        ),
                        color:
                            radios(
                                colorPalletLabel,
                                barColorPalletOptions,
                                colorPalletDefault,
                            ) === 'status'
                                ? select(
                                      'Status color 3',
                                      formStatusOptions,
                                      formStatusOptions.warning,
                                  )
                                : select(
                                      'Theme color 3',
                                      colorThemeOptions,
                                      colorThemeOptions.tertiary,
                                  ),
                    },
                ]}
            />
        ),
        {
            notes: 'For multi DataBar, legend will be displayed separately',
        },
    );
