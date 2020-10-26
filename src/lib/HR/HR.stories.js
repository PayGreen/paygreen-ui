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

storiesOf(folder.grid + 'HR', module)
    .addDecorator(withKnobs)
    .add('HR', () => (
        <HR
            colorType={select('Color type', colorTypeOptions, colorTypeDefault)}
            colorPallet={select(
                'Color pallet',
                colorPalletOptions,
                colorPalletDefault,
            )}
            colorTheme={select(
                'Color theme',
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorWab={select('Color wab', greyOptions, greyDefault)}
            colorStatus={select(
                'Color status',
                formStatusOptions,
                formStatusDefault,
            )}
            marginLateral={select('Margin lateral', spaceOptions, spaceDefault)}
            marginTop={select('Margin top', spaceOptions, spaceDefault)}
            marginBottom={select('Margin bottom', spaceOptions, spaceDefault)}
            opacityValue={number('Opacity', 100)}
        />
    ));
