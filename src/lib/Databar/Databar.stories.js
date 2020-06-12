import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, number , text} from '@storybook/addon-knobs';
import {
    folder,
    blockWidthOptions,
    blockWidthDefault,
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

storiesOf(folder.main + 'Databar', module)
    .addDecorator(withKnobs)
    .add('Databar', () => (
        <Databar
            dataArray={[
                {
                    currentValue: number('Current value', defaultCurrentValue, currentValueOptions),
                    legend: text('Legend', 'Légende de la barre'),
                    color: `${ThemeDefault.color.status.default.main}`,
                },
            ]}
            maxValue={number('Max value', defaultMaxValue, maxValueOptions)}
            unit={text('Unité', 'Tonnes')}
            blockWidth={radios(
                'Block width',
                blockWidthOptions,
                blockWidthDefault,
            )}
            withBackground={boolean('With background', true)}
            hasDatabarLegend={boolean('With Legend', true)}
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
