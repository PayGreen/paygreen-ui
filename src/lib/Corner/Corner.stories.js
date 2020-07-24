import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios, select } from '@storybook/addon-knobs';
import {
    folder,
    cornerPositionOptions,
    cornerPositionDefault,
    colorStyleOptions,
    colorStyleDefault,
    radiusOptions,
    radiusDefault,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import Popin from '../Popin/Popin';
import Corner from './Corner';

const { wab, ...cornerColorPalletOptions } = colorPalletOptions;

const cornerPositionLabel = 'Position';
const colorStyleLabel = 'Color style';
const radiusSizeLabel = 'Radius size';
const colorPalletLabel = 'Color pallet';
const colorThemeLabel = 'Color theme';
const colorStatusLabel = 'Status color';

storiesOf(folder.main + 'Corner', module)
    .addDecorator(withKnobs)
    .add('Basic Corner', () => (
        <Corner
            label={text('Label', 'Corner')}
            cornerPosition={radios(
                cornerPositionLabel,
                cornerPositionOptions,
                cornerPositionDefault,
            )}
            radiusSize={select(radiusSizeLabel, radiusOptions, radiusDefault)}
            colorStyle={radios(
                colorStyleLabel,
                colorStyleOptions,
                colorStyleDefault,
            )}
            colorPallet={radios(
                colorPalletLabel,
                cornerColorPalletOptions,
                colorPalletDefault,
            )}
            colorTheme={select(
                colorThemeLabel,
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorStatus={select(
                colorStatusLabel,
                formStatusOptions,
                formStatusDefault,
            )}
        />
    ))
    .add('Corner with Popin', () => (
        <Corner
            label="?"
            cornerPosition={radios(
                cornerPositionLabel,
                cornerPositionOptions,
                cornerPositionDefault,
            )}
            radiusSize={select(radiusSizeLabel, radiusOptions, radiusDefault)}
            colorStyle={radios(
                colorStyleLabel,
                colorStyleOptions,
                colorStyleDefault,
            )}
            colorPallet={radios(
                colorPalletLabel,
                cornerColorPalletOptions,
                colorPalletDefault,
            )}
            colorTheme={select(
                colorThemeLabel,
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorStatus={select(
                colorStatusLabel,
                formStatusOptions,
                formStatusDefault,
            )}
        >
            <Popin>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas consectetur placerat tellus, sed blandit justo porta a.
                Pellentesque habitant morbi tristique senectus.
            </Popin>
        </Corner>
    ));
