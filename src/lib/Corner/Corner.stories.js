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
import labels from '../../shared/labels';
import { QuestionBoldIcon } from '../Icon/Icon';
import Text from '../Text/Text';
import Popin from '../Popin/Popin';
import Corner from './Corner';

const { wab, ...cornerColorPalletOptions } = colorPalletOptions;

storiesOf(folder.block + 'Corner', module)
    .addDecorator(withKnobs)
    .add('Corner banner', () => (
        <Corner
            label={text(labels.label, 'Corner')}
            cornerStyle={cornerStyleOptions.banner}
            position={radios(
                labels.position,
                lateralPositionOptions,
                lateralPositionDefault,
            )}
            colorStyle={radios(
                labels.colorStyle,
                colorStyleOptions,
                colorStyleDefault,
            )}
            colorPallet={radios(
                labels.colorPallet,
                cornerColorPalletOptions,
                colorPalletDefault,
            )}
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorStatus={select(
                labels.colorStatus,
                formStatusOptions,
                formStatusDefault,
            )}
        />
    ))
    .add('Corner square with Popin', () => (
        <Corner
            label={<QuestionBoldIcon />}
            position={radios(
                labels.position,
                lateralPositionOptions,
                lateralPositionDefault,
            )}
            hasCenteredPopin={boolean('Has centered Popin', false)}
            radiusSize={select(
                labels.radiusSize,
                radiusOptions,
                radiusDefault,
            )}
            colorStyle={radios(
                labels.colorStyle,
                colorStyleOptions,
                colorStyleDefault,
            )}
            colorPallet={radios(
                labels.colorPallet,
                cornerColorPalletOptions,
                colorPalletDefault,
            )}
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorStatus={select(
                labels.colorStatus,
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
