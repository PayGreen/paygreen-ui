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
    .add('HistogramBar', () => {
        // Knobs as dynamic variables
        const dynamicValue = number('Value', 60, {
            range: true,
            max: 100,
        });
        const dynamicLabel = text('Label', 'September');

        return (
            <HistogramBar
                style={{ margin: '0 auto' }} // only for complete display in story
                label={dynamicLabel}
                isLabelVisible={boolean('Is label visible', true)}
                value={dynamicValue}
                legend={
                    dynamicValue +
                    ' ' +
                    text('Legend', '% in') +
                    ' ' +
                    dynamicLabel
                }
                colorTheme={select(
                    'Color theme',
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                blockHeight={select(
                    'Block height',
                    inputWidthOptions,
                    inputWidthOptions.sm,
                )}
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
        );
    });
