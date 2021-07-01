import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, boolean, select } from '@storybook/addon-knobs';
import {
    folder,
    lateralPositionOptions,
    lateralPositionDefault,
    colorThemeOptions,
    colorThemeDefault,
    colorPalletOptions,
    colorPalletDefault,
    formStatusOptions,
    formStatusDefault,
    greyOptions,
    greyDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import MenuHamburger from './MenuHamburger';

storiesOf(folder.nav + folder.sub.control + 'MenuHamburger', module)
    .addDecorator(withKnobs)
    .add('MenuHamburger', () => (
        <MenuHamburger
            isOpen={boolean(labels.isOpen, false)}
            arrowDirection={radios(
                'Arrow direction',
                lateralPositionOptions,
                lateralPositionDefault,
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
