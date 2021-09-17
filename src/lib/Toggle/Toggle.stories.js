import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    text,
    radios,
    select,
    boolean,
} from '@storybook/addon-knobs';
import {
    folder,
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import { BulbIcon, BeakerIcon } from '../Icon/Icon';
import Toggle from './Toggle';

storiesOf(folder.form + 'Toggle', module)
    .addDecorator(withKnobs)
    .add('Toggle simple', () => (
        <Toggle
            id="toggle1"
            disabled={boolean(labels.disabled, false)}
            colorPallet={radios(
                labels.colorPallet,
                colorPalletOptions,
                colorPalletOptions.status,
            )}
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorWab={select(labels.colorWab, greyOptions, greyDefault)}
            colorStatus={select(
                labels.colorStatus,
                formStatusOptions,
                formStatusOptions.success,
            )}
        />
    ))
    .add('Toggle with icons', () => (
        <Toggle
            id="toggle2"
            checkedLabel={<BulbIcon />}
            notCheckedLabel={<BeakerIcon />}
            disabled={boolean(labels.disabled, false)}
            colorPallet={radios(
                labels.colorPallet,
                colorPalletOptions,
                colorPalletOptions.status,
            )}
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorWab={select(labels.colorWab, greyOptions, greyDefault)}
            colorStatus={select(
                labels.colorStatus,
                formStatusOptions,
                formStatusOptions.success,
            )}
        />
    ))
    .add('Toggle with texts', () => (
        <Toggle
            id="toggle3"
            disabled={boolean(labels.disabled, false)}
            checkedLabel={text('Checked label', 'Yes')}
            notCheckedLabel={text('Not checked label', 'No')}
            colorPallet={radios(
                labels.colorPallet,
                colorPalletOptions,
                colorPalletOptions.status,
            )}
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorWab={select(labels.colorWab, greyOptions, greyDefault)}
            colorStatus={select(
                labels.colorStatus,
                formStatusOptions,
                formStatusOptions.success,
            )}
        >
            Label text
        </Toggle>
    ));
