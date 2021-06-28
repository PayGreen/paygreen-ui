import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    inputWidthOptions,
    inputWidthDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import HistogramBar from '../HistogramBar/HistogramBar';
import Histogram from './Histogram';

const children = [
    {
        value: 0,
        label: 'March',
    },
    {
        value: 76.9,
        label: 'April',
    },
    {
        value: 83,
        label: 'May',
        colorTheme: colorThemeOptions.tertiary,
        blockWidth: inputWidthOptions.lg,
    },
    {
        value: 65,
        label: 'June',
    },
    {
        value: 53.2,
        label: 'July',
    },
    {
        value: 68,
        label: 'August',
    },
    {
        value: 59.2,
        label: 'September',
        colorTheme: colorThemeOptions.quinary,
        blockWidth: inputWidthOptions.lg,
    },
    {
        value: 43,
        label: 'October',
    },
    {
        value: 97,
        label: 'November',
    },
    {
        value: 81.56,
        label: 'December',
    },
];

storiesOf(folder.graph + 'Histogram', module)
    .addDecorator(withKnobs)
    .add('Histogram', () => (
        <Histogram
            yaxisUnit="€"
            hasYaxisMin={boolean('Has Y-axis min', true)}
            hasYaxisMax={boolean('Has Y-axis max', true)}
            yaxisValues={select(
                'Y-axis values',
                {
                    none: [],
                    '30 and 60': [30, 60],
                    '55.4 and 98.7': [55.4, 98.7],
                },
                [30, 60],
            )}
            isRelativeYaxis={boolean('Is relative Y-axis', false)}
            maxValue={number(labels.maxValue, 120, {
                range: true,
                max: 150,
            })}
            blockWidth={select(
                labels.blockWidth,
                spaceOptions,
                spaceOptions.md,
            )}
            blockHeight={select(
                labels.blockHeight,
                inputWidthOptions,
                inputWidthDefault,
            )}
            marginTop={select(labels.marginTop, spaceOptions, spaceDefault)}
            marginBottom={select(
                labels.marginBottom,
                spaceOptions,
                spaceDefault,
            )}
        >
            {children.map((sample, index) => (
                <HistogramBar
                    key={index}
                    value={sample.value}
                    legend={sample.value + ' € in ' + sample.label}
                    colorTheme={sample.colorTheme}
                    blockWidth={sample.blockWidth}
                    paddingLateral={spaceOptions.md}
                />
            ))}
        </Histogram>
    ));
