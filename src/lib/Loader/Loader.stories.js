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

storiesOf(folder.main + 'Loader', module)
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
            paddingTop={select('Padding', spaceOptions, spaceDefault)}
            paddingBottom={select('Padding', spaceOptions, spaceDefault)}
            paddingLateral={select('Padding', spaceOptions, spaceDefault)}
        />
    ));
