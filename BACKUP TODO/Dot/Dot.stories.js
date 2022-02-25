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
import labels from '../../shared/labels';
import Dot from './Dot';

storiesOf(folder.media + 'Dot', module)
    .addDecorator(withKnobs)
    .add('Dot', () => (
        <Dot
            dotStyle={radios('Dot style', dotStyleOptions, dotStyleDefault)}
            dotSize={select('Dot size', iconSizeOptions, iconSizeDefault)}
            marginTop={select(labels.marginTop, spaceOptions, spaceDefault)}
            marginBottom={select(
                labels.marginBottom,
                spaceOptions,
                spaceDefault,
            )}
            marginLeft={select(labels.marginLeft, spaceOptions, spaceDefault)}
            marginRight={select(labels.marginRight, spaceOptions, spaceDefault)}
            colorType={radios(
                labels.colorType,
                colorTypeOptions,
                colorTypeDefault,
            )}
            colorPallet={radios(
                labels.colorPallet,
                colorPalletOptions,
                colorPalletDefault,
            )}
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorWab={select(labels.colorWab, greyOptions, greyDefault)}
            colorStatus={select(
                labels.colorStatus,
                formStatusOptions,
                formStatusDefault,
            )}
        />
    ));
