import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';
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
import DaButton from './DaButton';
import { CoinsIcon } from '../Icon/Icon';
import {Fond }from './style';

const { wab, ...buttonColorPalletOptions } = colorPalletOptions;

storiesOf(folder.form + folder.sub.button + 'DaButton', module)
    .addDecorator(withKnobs)
    .add(
        'DaButton',
        () => (
            <Fond>
            <a href="#">
                <DaButton
                    buttonStyle={radios(
                        'Button style',
                        buttonStyleOptions,
                        buttonStyleDefault,
                    )}
                    buttonSize={radios(
                        'Button size',
                        buttonSizeOptions,
                        buttonSizeDefault,
                    )}
                    colorType={radios(
                        'Color type',
                        colorTypeOptions,
                        colorTypeDefault,
                    )}
                    colorTheme={select(
                        'Color theme',
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                    colorPallet={radios(
                        'Color pallet',
                        buttonColorPalletOptions,
                        colorPalletDefault,
                    )}
                    colorStatus={select(
                        'Status color',
                        formStatusOptions,
                        formStatusDefault,
                    )}
                    gradient={radios(
                        'Gradient type',
                        gradientOptions,
                        gradientDefault,
                    )}
                    isDisabled={boolean('Disabled', false)}
                    icon={<CoinsIcon />}
                >
                    {text('Label', 'Fill success')}
                </DaButton>
            </a>
            </Fond>
        ),
        {
            notes: 'Change background color to test reverse mode.',
        },
    );
