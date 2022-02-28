import React from 'react';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    spaceOptions,
    inputWidthOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import HistogramBar from './HistogramBar';

export default {
    title: folder.graph + folder.sub.histogram + 'HistogramBar',
    argTypes: {
        range: {
            name: labels.value,
            options: { max: 100 },
            control: 'range',
            defaultValue: 60,
        },

        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
            defaultValue: colorThemeDefault,
        },
        blockWidth: {
            name: labels.blockWidth,
            options: Object.values(inputWidthOptions),
            control: 'select',
            defaultValue: inputWidthOptions.xs,
        },
        paddingLateral: {
            name: labels.paddingLateral,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceOptions.sm,
        },
    },
};

export const Bar = ({ range, ...args }) => {
    return (
        <HistogramBar
            style={{ margin: '0 auto', height: '400px' }} // only for complete display in story
            value={range}
            legend={range + ' % in september'}
            {...args}
        />
    );
};
