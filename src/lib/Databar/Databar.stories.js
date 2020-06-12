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
} from '../../shared/constants';
import { ThemeDefault } from '../../theme';
import Databar from './Databar';

const dataArrayMulti = [
    {
        currentValue: 30,
        legend: 'légende de la section 1',
        color: `${ThemeDefault.color.status.danger.main}`,
    },
    {
        currentValue: 70,
        legend: 'légende de la section 3',
        color: `${ThemeDefault.color.status.default.main}`,
    },
];

const defaultMaxValue = 100;
const maxValueOptions = {
    range: true,
    min: 150,
    max: 300,
    step: 1,
};

const defaultCurrentValue = 40;
const currentValueOptions = {
    range: true,
    min: 0,
    max: 150,
    step: 1,
};

const { wab, ...barColorPalletOptions } = colorPalletOptions;
const palletColorLabel = 'Color pallet';
const statusColorLabel = 'Status color';
const themeColorLabel = 'Theme color';

storiesOf(folder.main + 'Databar', module)
    .addDecorator(withKnobs)
    .add('Databar', () => (
        <Databar
            blockWidth={radios(
                'Block width',
                blockWidthOptions,
                blockWidthDefault,
            )}
            withBackground={boolean('With background', true)}
            hasDatabarLegend={boolean('With legend', true)}
            maxValue={number('Max value', defaultMaxValue, maxValueOptions)}
            unit={text('Unity', 'Tonnes')}
            dataArray={[
                {
                    currentValue: number(
                        'Current value',
                        defaultCurrentValue,
                        currentValueOptions,
                    ),
                    legend: text('Legend', 'légende'),
                    color:
                        radios(
                            palletColorLabel,
                            barColorPalletOptions,
                            colorPalletDefault,
                        ) === 'status'
                            ? select(
                                  statusColorLabel,
                                  formStatusOptions,
                                  formStatusDefault,
                              )
                            : select(
                                  themeColorLabel,
                                  colorThemeOptions,
                                  colorThemeDefault,
                              ),
                },
            ]}
            colorPallet={radios(
                palletColorLabel,
                barColorPalletOptions,
                colorPalletDefault,
            )}
        />
    ))
    .add(
        'Databar Multi',
        () => (
            <Databar
                dataArray={dataArrayMulti}
                blockWidth={radios(
                    'Block width',
                    blockWidthOptions,
                    blockWidthDefault,
                )}
            />
        ),
        {
            notes:
                'Same as input email, url and number (this is the default style).',
        },
    );
