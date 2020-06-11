import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';
import {
    folder,
    blockWidthOptions,
    blockWidthDefault,
} from '../../shared/constants';
import Databar from './Databar';

const dataArray = [
    {
        currentValue: 20,
        legend: 'légende de la barre',
        color: 'red',
    },
];

const dataArrayMulti = [
    {
        currentValue: 30,
        legend: 'légende de la section 1',
        color: 'red',
    },
    {
        currentValue: 30,
        legend: 'légende de la section 2',
        color: 'green',
    },
    {
        currentValue: 40,
        legend: 'légende de la section 3',
        color: 'blue',
    },
];

storiesOf(folder.main + 'Databar', module)
    .addDecorator(withKnobs)
    .add(
        'Databar',
        () => (
            <Databar
                dataArray={dataArray}
                blockWidth={radios(
                    'Block width',
                    blockWidthOptions,
                    blockWidthDefault,
                )}
                withBackground={boolean('With background', true)}
                hasDatabarLegend={boolean('Legend', true)}
            />
        ),
    )
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
