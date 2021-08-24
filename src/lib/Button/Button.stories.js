import React from 'react';
import Button from './Button';
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
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    boolean,
    text,
    radios,
    select,
} from '@storybook/addon-knobs';
import labels from '../../shared/labels';

storiesOf(folder.form + folder.sub.button + 'Button', module)
    .addDecorator(withKnobs)
    .add('Button', () => (
        <button type="button">
            <Button
                buttonStyle={radios(
                    labels.buttonStyle,
                    buttonStyleOptions,
                    buttonStyleDefault,
                )}
                colorType={radios(
                    labels.colorType,
                    colorTypeOptions,
                    colorTypeDefault,
                )}
                colorTheme={select(
                    labels.colorTheme,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                buttonSize={radios(
                    labels.buttonSize,
                    buttonSizeOptions,
                    buttonSizeDefault,
                )}
                isDisabled={boolean(labels.disabled, false)}
            >
                {text(labels.label, 'CTA button')}
            </Button>
        </button>
    ));
