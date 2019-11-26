import React from 'react';
import { CodeIcon } from './Icon';
import {
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
    formStatusDefault,
    iconSizeOptions,
    spaceOptions
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, radios } from '@storybook/addon-knobs';

const iconSizeLabel = 'Icon size';

storiesOf('Icons', module)
    .addDecorator(withKnobs)
    .add('Some icons', () => (
        <div>
            <CodeIcon
                colorPallet={radios('Color pallet', colorPalletOptions, colorPalletDefault)}
                colorTheme={select('Color theme', colorThemeOptions, colorThemeDefault)}
                colorWab={select('Grey colors', greyOptions, greyDefault)}
                colorStatus={select('Status colors', formStatusOptions, formStatusDefault)}
                iconSize={select(iconSizeLabel, iconSizeOptions, iconSizeOptions.lg)}
                background={boolean('With background', false)}
                shadow={boolean('With shadow', false)}
                marginTop={select('Margin top', spaceOptions, spaceOptions.sm)}
                marginBottom={select('Margin bottom', spaceOptions, spaceOptions.sm)}
                marginLeft={select('Margin left', spaceOptions, spaceOptions.sm)}
                marginRight={select('Margin right', spaceOptions, spaceOptions.sm)}
            />
        </div>
    ), {
        notes: 'Icons',
    });