import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    colorPalletOptions,
    colorPalletDefault,
    spaceOptions,
    spaceDefault,
    colorTypeOptions,
    colorTypeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import HR from './HR';

const colorTypeLabel = 'Color type';
const colorPalletLabel = 'Color pallet';
const colorThemeLabel = 'Color theme';
const colorWabLabel = 'Color wab';
const colorStatusLabel = 'Color status';
const marginLateralLabel = 'Margin lateral';
const marginTopLabel = 'Margin top';
const marginBottomLabel = 'Margin bottom';
const opacityValueLabel = 'Opacity';

storiesOf(folder.main + 'HR', module)
    .addDecorator(withKnobs)
    .add('HR', () => (
        <HR
            colorType={select(
                colorTypeLabel,
                colorTypeOptions,
                colorTypeDefault,
            )}
            colorPallet={select(
                colorPalletLabel,
                colorPalletOptions,
                colorPalletDefault,
            )}
            colorTheme={select(
                colorThemeLabel,
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorWab={select(colorWabLabel, greyOptions, greyDefault)}
            colorStatus={select(
                colorStatusLabel,
                formStatusOptions,
                formStatusDefault,
            )}
            marginLateral={select(
                marginLateralLabel,
                spaceOptions,
                spaceDefault,
            )}
            marginTop={select(marginTopLabel, spaceOptions, spaceDefault)}
            marginBottom={select(marginBottomLabel, spaceOptions, spaceDefault)}
            opacityValue={number(opacityValueLabel, 100)}
        />
    ));
