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
import HistogramBar from './HistogramBar';

storiesOf(folder.graph + 'HistogramBar', module)
    .addDecorator(withKnobs)
    .add('HistogramBar', () => {
        // Knobs as dynamic variables
        const dynamicValue = number('Value', 60, {
            range: true,
            max: 100,
        });

        return (
            <HistogramBar
                style={{ margin: '0 auto', height: '400px' }} // only for complete display in story
                value={dynamicValue}
                legend={dynamicValue + ' % in september'}
                colorTheme={select(
                    'Color theme',
                    colorThemeOptions,
                    colorThemeDefault,
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
