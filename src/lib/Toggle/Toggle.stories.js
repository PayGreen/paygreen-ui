import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios, select } from '@storybook/addon-knobs';
import {
    folder,
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
} from '../../shared/constants';
import { BulbIcon, BeakerIcon } from '../Icon/Icon';
import Toggle from './Toggle';

const colorThemeLabel = 'Color theme';
const colorPalletLabel = 'Color pallet';
const colorWabLabel = 'Grey color';
const colorStatusLabel = 'Status color';

storiesOf(folder.form + 'Toggle', module)
    .addDecorator(withKnobs)
    .add(
        'Toggle simple',
        () => (
            <Toggle
                id="toggle1"
                colorPallet={radios(
                    colorPalletLabel,
                    colorPalletOptions,
                    colorPalletOptions.status,
                )}
                colorTheme={select(
                    colorThemeLabel,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                colorWab={select(
                    colorWabLabel,
                    greyOptions,
                    greyDefault,
                )}
                colorStatus={select(
                    colorStatusLabel,
                    formStatusOptions,
                    formStatusOptions.success,
                )}
            />
        )
    )
    .add(
        'Toggle with icons',
        () => (
            <Toggle
                id="toggle2"
                checkedLabel={<BulbIcon />}
                notCheckedLabel={<BeakerIcon />}
                colorPallet={radios(
                    colorPalletLabel,
                    colorPalletOptions,
                    colorPalletOptions.status,
                )}
                colorTheme={select(
                    colorThemeLabel,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                colorWab={select(
                    colorWabLabel,
                    greyOptions,
                    greyDefault,
                )}
                colorStatus={select(
                    colorStatusLabel,
                    formStatusOptions,
                    formStatusOptions.success,
                )}
            />
        )
    )
    .add(
        'Toggle with texts',
        () => (
            <Toggle
                id="toggle3"
                checkedLabel={text('Checked label', 'Yes')}
                notCheckedLabel={text('Not checked label', 'No')}
                colorPallet={radios(
                    colorPalletLabel,
                    colorPalletOptions,
                    colorPalletOptions.status,
                )}
                colorTheme={select(
                    colorThemeLabel,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                colorWab={select(
                    colorWabLabel,
                    greyOptions,
                    greyDefault,
                )}
                colorStatus={select(
                    colorStatusLabel,
                    formStatusOptions,
                    formStatusOptions.success,
                )}
            >
                Label text
            </Toggle>
        )
    );
