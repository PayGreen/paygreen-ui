import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, select } from '@storybook/addon-knobs';
import {
    folder,
    dotStyleOptions,
    dotStyleDefault,
    iconSizeOptions,
    iconSizeDefault,
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import Dot from './Dot';

storiesOf(folder.main + 'Dot', module)
    .addDecorator(withKnobs)
    .add('Dot', () => (
        <Dot
            dotStyle={radios('Style', dotStyleOptions, dotStyleDefault)}
            dotSize={select('Size', iconSizeOptions, iconSizeDefault)}
            colorType={radios('Color type', colorTypeOptions, colorTypeDefault)}
            colorPallet={radios(
                'Color pallet',
                colorPalletOptions,
                colorPalletDefault,
            )}
            colorTheme={select(
                'Color theme',
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorWab={select('Grey color', greyOptions, greyDefault)}
            colorStatus={select(
                'Status color',
                formStatusOptions,
                formStatusDefault,
            )}
        />
    ));
