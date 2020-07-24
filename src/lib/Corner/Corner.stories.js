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
    spaceOptions,
    fontSizeOptions,
} from '../../shared/constants';
import Text from '../Text/Text';
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
                <Text
                    marginTop={spaceOptions.xs}
                    marginLateral={spaceOptions.xs}
                    marginBottom={spaceOptions.xs}
                    textSize={fontSizeOptions.xs}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </Text>
            </Popin>
        </Corner>
    ));
