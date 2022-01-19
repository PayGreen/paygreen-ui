import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    boolean,
    radios,
    number,
    text,
    select,
} from '@storybook/addon-knobs';
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

storiesOf(folder.graph + 'Databar', module)
    .addDecorator(withKnobs)
    .add('DataBar', () => (
        <DataBar
            hasBackground={boolean(labels.hasBackground, true)}
            backgroundColor={select(
                labels.backgroundColor,
                greyOptions,
                greyOptions.grey10,
            )}
            textSize={select(labels.textSize, fontSizeOptions, fontSizeDefault)}
            unit={text(labels.unity, '%')}
            colorPallet={radios(
                labels.colorPallet,
                barColorPalletOptions,
                colorPalletDefault,
            )}
            maxValue={number(labels.maxValue, 100)}
            data={[
                {
                    value: number(labels.value, defaultValue, valueOptions),
                    legend: ['compensé par ', <strong>vous</strong>],
                    colorTheme: select(
                        labels.colorTheme,
                        colorThemeOptions,
                        colorThemeDefault,
                    ),
                    colorStatus: select(
                        labels.colorStatus,
                        formStatusOptions,
                        formStatusDefault,
                    ),
                },
            ]}
            blockWidth={select(
                labels.blockWidth,
                spaceOptions,
                spaceOptions.md,
            )}
        />
    ))
    .add('DataBar multi', () => (
        <DataBar
            hasBackground={boolean(labels.hasBackground, true)}
            colorPallet={radios(
                labels.colorPallet,
                barColorPalletOptions,
                colorPalletDefault,
            )}
            data={[
                {
                    value: number(
                        labels.value + ' 1',
                        defaultValue,
                        valueOptions,
                    ),
                },
                {
                    value: number(
                        labels.value + ' 2',
                        defaultValue,
                        valueOptions,
                    ),
                    colorTheme: colorThemeOptions.tertiary,
                    colorStatus: formStatusOptions.warning,
                },
                {
                    value: number(
                        labels.value + ' 3',
                        defaultValue,
                        valueOptions,
                    ),
                    colorTheme: colorThemeOptions.quaternary,
                    colorStatus: formStatusOptions.danger,
                },
            ]}
            blockWidth={select(
                labels.blockWidth,
                spaceOptions,
                spaceOptions.md,
            )}
        />
    ));
