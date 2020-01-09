import React from 'react';
import Link from './Link';
import Text from '../Text/Text';
import {
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
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text, radios, boolean } from '@storybook/addon-knobs';

const colorTypeLabel = 'Color type';

storiesOf('Paygreen | Link', module)
    .addDecorator(withKnobs)
    .add('Link', () => (
        <Text colorType={radios(colorTypeLabel, colorTypeOptions, colorTypeDefault)}>
            <a href="#">
                <Link
                    colorType={radios(colorTypeLabel, colorTypeOptions, colorTypeDefault)}
                    colorPallet={radios('Color pallet', colorPalletOptions, colorPalletDefault)}
                    colorTheme={select('Color theme', colorThemeOptions, colorThemeDefault)}
                    colorWab={select('Grey color', greyOptions, greyDefault)}
                    colorStatus={select('Status color', formStatusOptions, formStatusDefault)}
                    hasUnderline={boolean('With underline', true)}
                    hasUppercase={boolean('Uppercase', false)}
                >
                    {text('Label', 'Link text')}
                </Link>
            </a> curabitur congue varius ex et posuere. Maecenas tincidunt diam ut nisl porttitor scelerisque. Donec egestas elit dolor, quis eleifend ipsum sagittis ut. Proin molestie lorem et neque tempus tristique. Mauris finibus dui sem, nec suscipit mi porta a.
        </Text>
    ), {
        notes: 'Link can be used inside Text component.',
    });