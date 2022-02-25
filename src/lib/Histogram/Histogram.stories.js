import React from 'react';

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

export default {
    title: folder.graph + folder.sub.histogram + 'Histogram',
    argTypes: {
        blockWidth: {
            name: labels.blockWidth,
            options: Object.values(inputWidthOptions),
            control: 'select',
            defaultValue: inputWidthOptions.md,
        },
        hasYaxisMin: {
            name: 'Has Y-axis min',
            control: 'boolean',
            defaultValue: true,
        },
        hasYaxisMax: {
            name: 'Has Y-axis max',
            control: 'boolean',
            defaultValue: true,
        },
        yaxisValues: {
            name: 'Y-axis values',
            options: {
                none: [],
                '30 and 60': [30, 60],
                '55.4 and 98.7': [55.4, 98.7],
            },
            control: 'select',
            defaultValue: [30, 60],
        },
        isRelativeYaxis: {
            name: 'Is relative Y-axis',
            control: 'boolean',
            defaultValue: false,
        },
        maxValue: {
            name: labels.maxValue,
            options: { max: 150 },
            control: 'range',
            defaultValue: 150,
        },
        blockHeight: {
            name: labels.blockHeight,
            options: Object.values(inputWidthOptions),
            control: 'select',
            defaultValue: inputWidthDefault,
        },
        marginTop: {
            name: labels.marginTop,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceDefault,
        },
        marginBottom: {
            name: labels.marginBottom,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceDefault,
        },
    },
};

export const SimpleHistogram = args => {
    return (
        <Histogram yaxisUnit="€" {...args}>
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
    );
};
