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
    cornerStyleOptions,
    lateralPositionOptions,
    lateralPositionDefault,
    radiusOptions,
    radiusDefault,
    colorStyleOptions,
    colorStyleDefault,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    formStatusOptions,
    formStatusDefault,
    spaceOptions,
    fontSizeOptions,
} from '../../shared/constants';
import { QuestionBoldIcon } from '../Icon/Icon';
import Text from '../Text/Text';
import Popin from '../Popin/Popin';
import Corner from './Corner';

const { wab, ...cornerColorPalletOptions } = colorPalletOptions;

const positionLabel = 'Position';
const colorStyleLabel = 'Color style';
const radiusSizeLabel = 'Radius size';
const colorPalletLabel = 'Color pallet';
const colorThemeLabel = 'Color theme';
const colorStatusLabel = 'Status color';

storiesOf(folder.block + 'Corner', module)
    .addDecorator(withKnobs)
    .add('Corner banner', () => (
        <Corner
            label={text('Label', 'Corner')}
            cornerStyle={cornerStyleOptions.banner}
            position={radios(
                positionLabel,
                lateralPositionOptions,
                lateralPositionDefault,
            )}
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
    .add('Corner square with Popin', () => (
        <Corner
            label={<QuestionBoldIcon />}
            position={radios(
                positionLabel,
                lateralPositionOptions,
                lateralPositionDefault,
            )}
            hasCenteredPopin={boolean('Centered popin', false)}
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
