import React from 'react';
import {
    folder,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    formStatusOptions,
    formStatusDefault,
    fontSizeOptions,
    fontSizeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import DataLegend from './DataLegend';

const { wab, ...barColorPalletOptions } = colorPalletOptions;

export default {
    title: folder.graph + 'DataLegend',
    argTypes: {
        textSize: {
            name: labels.textSize,
            control: 'select',
            options: Object.values(fontSizeOptions),
        },
        unit: {
            name: labels.unity,
            control: 'text',
        },
        colorPallet: {
            name: labels.colorPallet,
            options: Object.values(barColorPalletOptions),
            control: 'radio',
        },
        value: {
            name: labels.value,
            control: 'number',
            max: 100,
        },
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
        },
        colorStatus: {
            name: labels.colorStatus,
            options: Object.values(formStatusOptions),
            control: 'select',
        },
    },
};

export const DataLegendeStory = ({ ...args }) => (
    <DataLegend {...args}>
        du <strong>CO2 compensé</strong>
    </DataLegend>
);

DataLegendeStory.args = {
    textSize: fontSizeDefault,
    value: 25,
    unit: '%',
    colorPallet: colorPalletDefault,
    colorTheme: colorThemeDefault,
    colorStatus: formStatusDefault,
};
