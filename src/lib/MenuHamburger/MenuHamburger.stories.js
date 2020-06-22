import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, boolean, select } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    colorPalletOptions,
    colorPalletDefault,
    formStatusOptions,
    formStatusDefault,
    greyOptions,
    greyDefault,
} from '../../shared/constants';
import MenuHamburger from './MenuHamburger';

storiesOf(folder.nav + folder.sub.control + 'MenuHamburger', module)
    .addDecorator(withKnobs)
    .add('MenuHamburger', () => (
        <MenuHamburger
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
            colorStatus={select(
                'Color status',
                formStatusOptions,
                formStatusDefault,
            )}
            colorWab={select('Color wab', greyOptions, greyDefault)}
            isOpen={boolean('Is open', false)}
        />
    ));
