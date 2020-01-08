import React from 'react';
import { OutIcon } from '../Icon/Icon';
import IconLabel from './IconLabel';
import {
    colorThemeOptions,
    colorThemeDefault,
    spaceOptions,
    spaceDefault,
    iconSizeOptions
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios, select } from '@storybook/addon-knobs';

const colorThemeLabel = 'Color theme';

storiesOf('PayGreen | Icons/IconLabel', module)
    .addDecorator(withKnobs)
    .add('IconLabel', () => (
        <IconLabel
            colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
            marginTop={select('Margin top', spaceOptions, spaceDefault)}
            marginBottom={select('Margin bottom', spaceOptions, spaceDefault)}
            marginLeft={select('Margin left', spaceOptions, spaceDefault)}
            marginRight={select('Margin right', spaceOptions, spaceDefault)}
        >
            <OutIcon
                iconSize={iconSizeOptions.xs}
                marginRight={spaceOptions.xs}
                colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
            />

            {text('Label', 'Sample')}
        </IconLabel>
    ), {
        notes: 'IconLabel.',
    });