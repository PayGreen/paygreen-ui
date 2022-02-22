import React from 'react';

import {
    folder,
    spaceOptions,
    colorThemeOptions,
    colorThemeDefault,
    colorPalletOptions,
    colorPalletDefault,
    formStatusOptions,
    formStatusDefault,
    fontSizeOptions,
    fontSizeDefault,
    greyOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import DataBar from './DataBar';

const defaultValue = 25;
const valueOptions = {
    range: true,
    max: 100,
};

const { wab, ...barColorPalletOptions } = colorPalletOptions;

export default {
    title: folder.graph + 'Databar',
    argTypes: {
        hasBackground: {
            name: labels.hasBackground,
            control: 'boolean',
        },
        backgroundColor: {
            name: labels.backgroundColor,
            options: Object.values(greyOptions),
            control: 'select',
        },
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
            options: Object.values(colorPalletOptions),
            control: 'radio',
        },
        maxValue: {
            name: labels.maxValue,
            control: 'number',
        },
        value: {
            name: labels.value,
            control: 'range',
        },
        value2: {
            name: labels.value + '2',
            control: 'range',
        },
        value3: {
            name: labels.value + '3',
            control: 'range',
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
        blockWidth: {
            name: labels.blockWidth,
            options: Object.values(spaceOptions),
            control: 'select',
        },
    },
};

export const DataBarClassic = ({ value, colorTheme, colorStatus, ...args }) => (
    <DataBar
        {...args}
        data={[
            {
                value: value,
                colorTheme: colorTheme,
                colorStatus: colorStatus,
            },
        ]}
    />
);

export const DataBarMulti = ({ value, value2, value3, ...args }) => (
    <DataBar
        {...args}
        data={[
            {
                value: value,
            },
            {
                value: value2,
                colorTheme: colorThemeOptions.tertiary,
                colorStatus: formStatusOptions.warning,
            },
            {
                value: value3,
                colorTheme: colorThemeOptions.quaternary,
                colorStatus: formStatusOptions.danger,
            },
        ]}
    />
);

DataBarClassic.args = {
    hasBackground: true,
    backgroundColor: greyOptions.grey10,
    textSize: fontSizeDefault,
    unit: '%',
    colorPallet: colorPalletDefault,
    maxValue: 100,
    value: defaultValue,
    colorTheme: colorThemeDefault,
    colorStatus: formStatusDefault,
    blockWidth: spaceOptions.md,
};

DataBarMulti.args = {
    hasBackground: true,
    colorPallet: colorPalletDefault,
    blockWidth: spaceOptions.md,
    value: defaultValue,
    value2: defaultValue,
    value3: defaultValue,
};
