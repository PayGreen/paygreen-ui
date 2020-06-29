import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, boolean, select } from '@storybook/addon-knobs';
import {
    folder,
    arrowDirectionOptions,
    arrowDirectionDefault,
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
            isOpen={boolean('Is open', false)}
            arrowDirection={radios(
                'Arrow direction',
                arrowDirectionOptions,
                arrowDirectionDefault,
            )}
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
            colorWab={select('Color wab', greyOptions, greyDefault)}
            colorStatus={select(
                'Color status',
                formStatusOptions,
                formStatusDefault,
            )}
        />
    ));
