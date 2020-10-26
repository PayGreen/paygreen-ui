import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions,
    iconSizeDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import Loader from './Loader';

storiesOf(folder.media + 'Loader', module)
    .addDecorator(withKnobs)
    .add('Loader', () => (
        <Loader
            isActive={boolean('Is active', true)}
            loaderSize={select('Loader size', iconSizeOptions, iconSizeDefault)}
            colorTheme={radios(
                'Color theme',
                colorThemeOptions,
                colorThemeDefault,
            )}
            paddingTop={select('Padding top', spaceOptions, spaceDefault)}
            paddingBottom={select('Padding bottom', spaceOptions, spaceDefault)}
            paddingLateral={select(
                'Padding lateral',
                spaceOptions,
                spaceDefault,
            )}
        />
    ));
