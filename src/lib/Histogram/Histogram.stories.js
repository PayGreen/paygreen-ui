import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    inputWidthOptions,
    inputWidthDefault,
    spaceOptions,
} from '../../shared/constants';
import HistogramBar from '../HistogramBar/HistogramBar';
import Histogram from './Histogram';

const displayYaxisLabel = 'Display Y-axis';

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
            hasYaxisMin={boolean(displayYaxisLabel, true)}
            hasYaxisMax={boolean(displayYaxisLabel, true)}
            yaxisValues={boolean(displayYaxisLabel, true) ? [30, 60] : []}
            isRelativeYaxis={boolean('Has relative Y-axis', false)}
            maxValue={number('Max value', 120, {
                range: true,
                max: 150,
            })}
            blockHeight={select(
                'Block height',
                inputWidthOptions,
                inputWidthDefault,
            )}
            marginTop={select('Margin top', spaceOptions, spaceOptions.xl)}
            marginBottom={select(
                'Margin bottom',
                spaceOptions,
                spaceOptions.md,
            )}
        >
            {children.map((sample, index) => (
                <HistogramBar
                    key={index}
                    value={sample.value}
                    label={sample.label}
                    legend="{value}€ in {label}"
                    isLabelVisible={false}
                    colorTheme={sample.colorTheme}
                    blockWidth={sample.blockWidth}
                    paddingLateral={spaceOptions.md}
                />
            ))}
        </Histogram>
    ));
