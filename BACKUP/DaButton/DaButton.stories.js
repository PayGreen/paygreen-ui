import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    boolean,
    text,
    radios,
    select,
} from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    buttonSizeOptions,
    buttonSizeDefault,
    buttonStyleOptions,
    buttonStyleDefault,
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorPalletDefault,
    formStatusOptions,
    formStatusDefault,
    gradientOptions,
    gradientDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import DaButton from './DaButton';
import { CoinsIcon } from '../Icon/Icon';

const { wab, ...buttonColorPalletOptions } = colorPalletOptions;

storiesOf(folder.button + 'DaButton', module)
    .addDecorator(withKnobs)
    .add('DaButton', () => (
        <button type="button">
            <DaButton
                buttonStyle={radios(
                    labels.buttonStyle,
                    buttonStyleOptions,
                    buttonStyleDefault,
                )}
                buttonSize={radios(
                    labels.buttonSize,
                    buttonSizeOptions,
                    buttonSizeDefault,
                )}
                colorType={radios(
                    labels.colorType,
                    colorTypeOptions,
                    colorTypeDefault,
                )}
                gradient={radios(
                    labels.gradient,
                    gradientOptions,
                    gradientDefault,
                )}
                colorPallet={radios(
                    labels.colorPallet,
                    buttonColorPalletOptions,
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
                isDisabled={boolean(labels.disabled, false)}
                icon={<CoinsIcon />}
            >
                {text(labels.label, 'CTA button')}
            </DaButton>
        </button>
    ));
