import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, select } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    spaceOptions,
    inputWidthOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import HistogramBar from './HistogramBar';

storiesOf(folder.graph + folder.sub.histogram + 'HistogramBar', module)
    .addDecorator(withKnobs)
    .add('HistogramBar', () => {
        // Knobs as dynamic variables
        const dynamicValue = number(labels.value, 60, {
            range: true,
            max: 100,
        });

        return (
            <HistogramBar
                style={{ margin: '0 auto', height: '400px' }} // only for complete display in story
                value={dynamicValue}
                legend={dynamicValue + ' % in september'}
                colorTheme={select(
                    labels.colorTheme,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                blockWidth={select(
                    labels.blockWidth,
                    inputWidthOptions,
                    inputWidthOptions.xs,
                )}
                paddingLateral={select(
                    labels.paddingLateral,
                    spaceOptions,
                    spaceOptions.sm,
                )}
            />
        );
    });
