import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, select } from '@storybook/addon-knobs';
import {
    folder,
    dotStyleOptions,
    dotStyleDefault,
    iconSizeOptions,
    iconSizeDefault,
    spaceOptions,
    spaceDefault,
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

storiesOf(folder.media + 'Dot', module)
    .addDecorator(withKnobs)
    .add('Dot', () => (
        <Dot
            dotStyle={radios('Style', dotStyleOptions, dotStyleDefault)}
            dotSize={select('Size', iconSizeOptions, iconSizeDefault)}
            marginTop={select('Margin top', spaceOptions, spaceDefault)}
            marginBottom={select('Margin bottom', spaceOptions, spaceDefault)}
            marginLeft={select('Margin left', spaceOptions, spaceDefault)}
            marginRight={select('Margin right', spaceOptions, spaceDefault)}
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
