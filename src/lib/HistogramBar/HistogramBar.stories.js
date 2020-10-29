import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    boolean,
    text,
    number,
    select,
} from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    spaceOptions,
    inputWidthOptions,
} from '../../shared/constants';
import HistogramBar from './HistogramBar';

storiesOf(folder.graph + 'HistogramBar', module)
    .addDecorator(withKnobs)
    .add('HistogramBar', () => (
        <HistogramBar
            style={{ margin: '0 auto' }} // only for complete display in story
            label={text('Label', 'September')}
            isLabelVisible={boolean('Is label visible', true)}
            legend={text('Legend', '{value}% in {label}')}
            value={number('Value', 60, {
                range: true,
                max: 100,
            })}
            colorTheme={select(
                'Color theme',
                colorThemeOptions,
                colorThemeDefault,
            )}
            blockHeight={select('Block height', spaceOptions, spaceOptions.sm)}
            blockWidth={select(
                'Block width',
                inputWidthOptions,
                inputWidthOptions.xs,
            )}
            paddingLateral={select(
                'Lateral padding',
                spaceOptions,
                spaceOptions.sm,
            )}
        />
    ));
