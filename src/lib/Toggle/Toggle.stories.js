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
    buttonSizeOptions,
    buttonSizeDefault,
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
    .add('Toggle with auto colors', () => (
        <Toggle
            disabled={boolean(labels.disabled, false)}
            checkedLabel={text('Checked label', 'Yes')}
            notCheckedLabel={text('Not checked label', 'No')}
            fieldSize={select(
                labels.fieldSize,
                buttonSizeOptions,
                buttonSizeDefault,
            )}
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
    .add('Toggle with custom colors', () => (
        <Toggle
            disabled={boolean(labels.disabled, false)}
            checkedLabel={<BulbIcon />}
            notCheckedLabel={<BeakerIcon />}
            colorPallet={{
                checked: select(
                    labels.colorPallet + ' checked',
                    colorPalletOptions,
                    colorPalletOptions.status,
                ),
                notChecked: select(
                    labels.colorPallet + ' not checked',
                    colorPalletOptions,
                    colorPalletOptions.wab,
                ),
            }}
            colorTheme={{
                checked: select(
                    labels.colorTheme + ' checked',
                    colorThemeOptions,
                    colorThemeDefault,
                ),
                notChecked: select(
                    labels.colorTheme + ' not checked',
                    colorThemeOptions,
                    colorThemeDefault,
                ),
            }}
            colorWab={{
                checked: select(
                    labels.colorWab + ' checked',
                    greyOptions,
                    greyDefault,
                ),
                notChecked: select(
                    labels.colorWab + ' not checked',
                    greyOptions,
                    greyDefault,
                ),
            }}
            colorStatus={{
                checked: select(
                    labels.colorStatus + ' checked',
                    formStatusOptions,
                    formStatusOptions.success,
                ),
                notChecked: select(
                    labels.colorStatus + ' not checked',
                    formStatusOptions,
                    formStatusOptions.danger,
                ),
            }}
        />
    ));
